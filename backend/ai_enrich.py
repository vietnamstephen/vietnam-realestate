#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Local-only AI enrichment chain for the Vietnam real-estate job.

Chain (Mac run.sh path only, never GitHub Actions):
  1. Gemini CLI
  2. Tencent TokenHub deepseek-v4.1-flash
  3. TokenHub Hy4 (model id: hy4)

Never calls the paid DeepSeek API. Never enables TokenHub post-paid
billing, never tops up, never binds a payment method.

Key is read at runtime from TOKENHUB_API_KEY, or TOKENHUB_KEY_FILE,
or the default file ~/.config/tokenhub/api_key (chmod 600 expected).
The key is never logged, printed, copied, or written into the repo.

Remaining free quota is not queryable with the TokenHub inference API
key. Tencent Cloud CAM APIs (DescribeTokenPlan / DescribeUsageRankList)
require different credentials and are not used. Each call logs usage
tokens instead.

Docs:
  https://cloud.tencent.com/document/product/1823/130078
  https://www.tencentcloud.com/document/product/1300/80632
  https://cloud.tencent.com/document/product/1823/130079
  https://www.tencentcloud.com/document/product/1300/80633
  https://www.tencentcloud.com/document/product/1300/80695
  https://cloud.tencent.com/document/product/1823/131595
  https://cloud.tencent.com/document/product/1823/130087
"""
from __future__ import annotations

import argparse
import json
import os
import re
import stat
import subprocess
import sys
import urllib.error
import urllib.request
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional

DEFAULT_KEY_FILE = "~/.config/tokenhub/api_key"
DEFAULT_BASE_URL = "https://tokenhub-intl.tencentcloudmaas.com/v1"
DEFAULT_MODELS = ["deepseek-v4.1-flash", "hy4"]

# Official TokenHub business codes for free-quota / billing (HTTP 402/403).
# https://cloud.tencent.com/document/product/1823/131595
QUOTA_CODES = {"401007", "401008"}  # NoFreePackage, FreeQuotaExhausted
BILLING_CODES = {"403004"}  # InsufficientBalance
QUOTA_CODE_NAMES = {
    "401007": "CodeEndpointNoFreePackage",
    "401008": "CodeEndpointFreeQuotaExhausted",
    "403004": "CodeInsufficientBalance",
}

GEMINI_QUOTA_RE = re.compile(
    r"(quota|额度|usage limit|rate.?limit|too many requests|\b429\b|"
    r"insufficient (balance|credit)|credits? (exhausted|used up)|"
    r"limit (reached|exceeded)|限流|次数已用完|余额不足|resource.?exhausted|"
    r"exceeded your current quota|free.?tier|daily.?limit)",
    re.I,
)

# Billing / post-paid / payment — stop the chain, never enable anything.
BILLING_TEXT_RE = re.compile(
    r"(后付费|按量付费|欠费|充值|开通按量|开启后付费|post-?paid|postpaid|"
    r"insufficient.?balance|payment.?method|billing|bind.?payment|"
    r"top.?up|please top up)",
    re.I,
)
QUOTA_TEXT_RE = re.compile(
    r"(免费体验额度已耗尽|无可用免费体验额度|free.?quota.?exhausted|"
    r"no free package|free.?trial.?quota|额度已耗尽|"
    r"CodeEndpointFreeQuotaExhausted|CodeEndpointNoFreePackage|"
    r"FailedOperation\.FreeQuotaExhausted)",
    re.I,
)


def log(msg: str) -> None:
    print(msg, flush=True)


def redact(text: str) -> str:
    """Strip anything that looks like a bearer token or API key from a string."""
    if not text:
        return text
    text = re.sub(r"(?i)(Authorization:\s*Bearer\s+)\S+", r"\1[redacted]", text)
    text = re.sub(r"(?i)(Bearer\s+)[A-Za-z0-9._\-]+", r"\1[redacted]", text)
    text = re.sub(
        r"(?i)((?:api[_-]?key|tokenhub[_-]?api[_-]?key|sk-|token)[\"'\s:=]+)[^\s\"']+",
        r"\1[redacted]",
        text,
    )
    return text


def load_config(path: Optional[str] = None) -> dict:
    if path:
        p = Path(path)
    else:
        p = Path(__file__).resolve().parent / "config.json"
    with p.open("r", encoding="utf-8") as f:
        return json.load(f)


def tokenhub_cfg(cfg: dict) -> dict:
    return (cfg.get("ai_enrichment") or {}).get("tokenhub") or {}


def resolve_key_file(th: dict, env: Optional[dict] = None) -> str:
    env = os.environ if env is None else env
    file_env = th.get("api_key_file_env") or "TOKENHUB_KEY_FILE"
    override = (env.get(file_env) or "").strip()
    if override:
        return override
    return th.get("api_key_file") or DEFAULT_KEY_FILE


def load_tokenhub_key(
    th: dict,
    env: Optional[dict] = None,
    *,
    key_file_override: Optional[str] = None,
) -> Optional[str]:
    """Return the key, or None if it should be skipped. Never logs the value."""
    env = os.environ if env is None else env
    env_name = th.get("api_key_env") or "TOKENHUB_API_KEY"
    raw = env.get(env_name)
    if raw is not None and str(raw).strip():
        return str(raw).strip()

    path = key_file_override if key_file_override is not None else resolve_key_file(th, env)
    path = os.path.expanduser(path)
    if not path or not os.path.isfile(path):
        return None
    try:
        mode = stat.S_IMODE(os.stat(path).st_mode)
    except OSError:
        return None
    if mode & 0o004:
        log("TokenHub skipped: key file is world-readable; chmod 600 expected")
        return None
    if mode != 0o600:
        log("TokenHub warning: key file mode is %03o, chmod 600 expected" % mode)
    try:
        with open(path, "r", encoding="utf-8") as f:
            key = f.read().strip()
    except OSError:
        return None
    return key or None


@dataclass
class CallResult:
    ok: bool
    channel: str
    model: Optional[str] = None
    content: Optional[str] = None
    usage: Optional[Dict[str, Any]] = None
    status: Optional[int] = None
    error_code: Optional[str] = None
    reason: Optional[str] = None
    kind: Optional[str] = None  # ok, skipped, quota, billing, error
    remaining_quota: str = "not queryable"


@dataclass
class ChainResult:
    ok: bool
    results: List[CallResult] = field(default_factory=list)
    content: Optional[str] = None
    stopped_reason: Optional[str] = None

    @property
    def last(self) -> Optional[CallResult]:
        return self.results[-1] if self.results else None


def _code_str(val: Any) -> str:
    if val is None:
        return ""
    return str(val).strip()


def classify_tokenhub_error(status: int, body: str) -> str:
    """Return 'billing', 'quota', or 'error'."""
    code = ""
    message = body or ""
    try:
        obj = json.loads(body) if body else {}
        err = obj.get("error") or obj
        if isinstance(err, dict):
            code = _code_str(err.get("code"))
            message = " ".join(
                str(err.get(k) or "") for k in ("message", "message_zh", "type", "code")
            ) or message
    except Exception:
        pass
    # Official quota messages often say "请开启后付费". Treat explicit
    # quota codes / quota wording first so we do not mis-label them as billing.
    blob = " ".join([message, body or ""])
    if code in QUOTA_CODES or QUOTA_TEXT_RE.search(blob):
        return "quota"
    if code in BILLING_CODES or BILLING_TEXT_RE.search(blob):
        return "billing"
    if status == 402:
        return "quota"
    return "error"


def gemini_is_capped(text: str, exit_code: int = 0) -> bool:
    if GEMINI_QUOTA_RE.search(text or ""):
        return True
    # Gemini CLI often exits non-zero on quota; without text, caller decides.
    return False


def _normalize_base_url(url: str) -> str:
    url = (url or DEFAULT_BASE_URL).rstrip("/")
    if url.endswith("/chat/completions"):
        url = url[: -len("/chat/completions")]
    return url


def _chat_url(base_url: str) -> str:
    base = _normalize_base_url(base_url)
    return base + "/chat/completions"


def tokenhub_chat(
    *,
    base_url: str,
    model: str,
    prompt: str,
    key: str,
    max_tokens: int = 16,
    timeout: int = 180,
    opener: Optional[Callable] = None,
) -> CallResult:
    """One TokenHub OpenAI-compatible chat.completions call. No retries."""
    url = _chat_url(base_url)
    body = {
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": int(max_tokens),
        "temperature": 0,
        "stream": False,
    }
    # Hy4 / DeepSeek thinking is on by default and can leave message.content
    # empty (text goes to reasoning_content). Disable thinking for tiny probes.
    if int(max_tokens) <= 32:
        body["thinking"] = {"type": "disabled"}
    payload = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key,
        },
        method="POST",
    )
    open_fn = opener or urllib.request.urlopen
    try:
        with open_fn(req, timeout=timeout) as resp:
            raw = resp.read().decode("utf-8", "replace")
            status = getattr(resp, "status", 200)
    except urllib.error.HTTPError as e:
        raw = e.read().decode("utf-8", "replace") if e.fp else ""
        status = e.code
        kind = classify_tokenhub_error(status, raw)
        code = ""
        msg = ""
        try:
            err = (json.loads(raw) or {}).get("error") or {}
            code = _code_str(err.get("code"))
            msg = err.get("message_zh") or err.get("message") or ""
        except Exception:
            msg = redact(raw)[:300]
        name = QUOTA_CODE_NAMES.get(code, "")
        reason = "TokenHub %s HTTP %s code=%s %s %s" % (
            model, status, code or "n/a", name, redact(str(msg))[:200],
        )
        log(reason.strip())
        if kind == "quota":
            log("TokenHub stopped model %s: free quota exhausted (will not retry this model; will not enable post-paid)." % model)
        elif kind == "billing":
            log("TokenHub stopped: billing/payment error on %s. Will not enable post-paid, top up, or bind a payment method." % model)
        return CallResult(
            ok=False, channel="tokenhub", model=model, status=status,
            error_code=code or None, reason=reason.strip(), kind=kind,
        )
    except Exception as e:
        reason = "TokenHub %s request failed: %s" % (model, redact(str(e))[:200])
        log(reason)
        return CallResult(
            ok=False, channel="tokenhub", model=model, reason=reason, kind="error",
        )

    if status >= 400:
        kind = classify_tokenhub_error(status, raw)
        reason = "TokenHub %s HTTP %s %s" % (model, status, redact(raw)[:200])
        log(reason)
        return CallResult(
            ok=False, channel="tokenhub", model=model, status=status,
            reason=reason, kind=kind,
        )

    try:
        obj = json.loads(raw)
    except Exception as e:
        reason = "TokenHub %s: invalid JSON (%s)" % (model, e)
        log(reason)
        return CallResult(ok=False, channel="tokenhub", model=model, reason=reason, kind="error")

    content = ""
    try:
        msg = obj["choices"][0]["message"] or {}
        content = msg.get("content") or ""
        if not str(content).strip():
            content = msg.get("reasoning_content") or msg.get("reasoning") or ""
    except Exception:
        content = ""
    usage = obj.get("usage") or {}
    prompt_t = usage.get("prompt_tokens")
    comp_t = usage.get("completion_tokens")
    total_t = usage.get("total_tokens")
    log(
        "TokenHub %s tokens prompt=%s completion=%s total=%s remaining_quota=not queryable"
        % (model, prompt_t, comp_t, total_t)
    )
    if not str(content).strip():
        return CallResult(
            ok=False, channel="tokenhub", model=model, status=status,
            content=content, usage=usage, kind="error",
            reason="TokenHub %s: empty content" % model,
        )
    log("TokenHub %s ok" % model)
    return CallResult(
        ok=True, channel="tokenhub", model=model, status=status,
        content=content, usage=usage, kind="ok",
    )


def run_tokenhub_chain(
    prompt: str,
    cfg: dict,
    *,
    key: Optional[str] = None,
    env: Optional[dict] = None,
    opener: Optional[Callable] = None,
    max_tokens: Optional[int] = None,
    models: Optional[List[str]] = None,
) -> ChainResult:
    th = tokenhub_cfg(cfg)
    if key is None:
        key = load_tokenhub_key(th, env)
    if not key:
        log("TokenHub skipped: no key")
        r = CallResult(ok=False, channel="tokenhub", kind="skipped", reason="TokenHub skipped: no key")
        return ChainResult(ok=False, results=[r], stopped_reason="TokenHub skipped: no key")

    base_url = th.get("base_url") or DEFAULT_BASE_URL
    model_list = models or th.get("models") or list(DEFAULT_MODELS)
    tokens = int(max_tokens if max_tokens is not None else th.get("max_tokens") or 4096)
    timeout = int(th.get("timeout_sec") or 180)
    out = ChainResult(ok=False)

    for model in model_list:
        res = tokenhub_chat(
            base_url=base_url, model=model, prompt=prompt, key=key,
            max_tokens=tokens, timeout=timeout, opener=opener,
        )
        out.results.append(res)
        if res.ok:
            out.ok = True
            out.content = res.content
            return out
        if res.kind == "billing":
            out.stopped_reason = res.reason
            log("TokenHub chain stopped after billing/payment error; not trying further models.")
            return out
        if res.kind == "quota":
            log("TokenHub %s quota exhausted; not retrying this model." % model)
            continue
        # Other errors: do not retry the same model; try the next one once.
        log("TokenHub %s failed (%s); not retrying this model." % (model, res.kind))
    if out.results and all(r.kind == "quota" for r in out.results):
        out.stopped_reason = "all TokenHub models: free quota exhausted"
        log("TokenHub chain stopped: free quota exhausted on all configured models. Will not enable post-paid.")
    elif out.results:
        out.stopped_reason = out.results[-1].reason
    return out


def run_gemini(
    prompt: str,
    *,
    workdir: Optional[str] = None,
    runner: Optional[Callable] = None,
) -> CallResult:
    """Run Gemini CLI. `runner` if given is used by tests (no real CLI)."""
    if runner is not None:
        code, text = runner(prompt, workdir)
    else:
        env = os.environ.copy()
        # Do not inherit OPENAI_* which would divert some CLIs to the paid DeepSeek API.
        for k in list(env):
            if k.startswith("OPENAI_"):
                env.pop(k, None)
        cmd = [
            "gemini", "--skip-trust", "--approval-mode", "auto_edit",
            "-o", "text", "-p", prompt,
        ]
        try:
            p = subprocess.run(
                cmd, cwd=workdir, env=env, input="",
                capture_output=True, text=True, timeout=900,
            )
            code = p.returncode
            text = (p.stdout or "") + "\n" + (p.stderr or "")
        except FileNotFoundError:
            return CallResult(
                ok=False, channel="gemini", kind="error",
                reason="gemini CLI not on PATH",
            )
        except Exception as e:
            return CallResult(
                ok=False, channel="gemini", kind="error",
                reason="gemini failed: %s" % redact(str(e))[:200],
            )
    text_safe = redact(text or "")
    if gemini_is_capped(text_safe, code) or (
        code != 0 and gemini_is_capped(text_safe)
    ) or (code != 0 and GEMINI_QUOTA_RE.search(text_safe)):
        reason = "Gemini capped/quota (exit %s)" % code
        log(reason)
        return CallResult(
            ok=False, channel="gemini", kind="quota", status=code, reason=reason,
            content=text_safe[-2000:] if text_safe else None,
        )
    if code != 0:
        reason = "Gemini failed (exit %s)" % code
        log(reason)
        return CallResult(
            ok=False, channel="gemini", kind="error", status=code, reason=reason,
        )
    log("Gemini ok")
    return CallResult(ok=True, channel="gemini", kind="ok", content=text_safe, status=0)


def run_chain(
    prompt: str,
    cfg: dict,
    *,
    workdir: Optional[str] = None,
    gemini_runner: Optional[Callable] = None,
    opener: Optional[Callable] = None,
    env: Optional[dict] = None,
    skip_gemini: bool = False,
    max_tokens: Optional[int] = None,
) -> ChainResult:
    """Gemini first, then TokenHub models. Local only."""
    out = ChainResult(ok=False)
    if not skip_gemini:
        g = run_gemini(prompt, workdir=workdir, runner=gemini_runner)
        out.results.append(g)
        if g.ok:
            out.ok = True
            out.content = g.content
            return out
        if g.kind == "quota":
            log("Gemini capped; falling through to TokenHub.")
        else:
            log("Gemini unsuccessful (%s); falling through to TokenHub." % (g.kind or "error"))
    th = run_tokenhub_chain(
        prompt, cfg, env=env, opener=opener, max_tokens=max_tokens,
    )
    out.results.extend(th.results)
    out.ok = th.ok
    out.content = th.content
    out.stopped_reason = th.stopped_reason
    return out


def probe_models(cfg: dict, prompt: str = "Reply with the single word: ok") -> List[CallResult]:
    """One tiny real (or mocked) call per configured TokenHub model. Stops on billing."""
    th = tokenhub_cfg(cfg)
    key = load_tokenhub_key(th)
    if not key:
        log("TokenHub skipped: no key")
        return [CallResult(ok=False, channel="tokenhub", kind="skipped",
                           reason="TokenHub skipped: no key")]
    results: List[CallResult] = []
    for model in th.get("models") or list(DEFAULT_MODELS):
        res = tokenhub_chat(
            base_url=th.get("base_url") or DEFAULT_BASE_URL,
            model=model,
            prompt=prompt,
            key=key,
            max_tokens=16,
            timeout=int(th.get("timeout_sec") or 180),
        )
        results.append(res)
        if res.kind == "billing":
            log("Probe stopped: billing/payment error. Further models not called.")
            break
    return results


def main(argv: Optional[List[str]] = None) -> int:
    ap = argparse.ArgumentParser(description="Local AI enrichment chain (Gemini → TokenHub)")
    ap.add_argument("--config", default=None)
    ap.add_argument("--prompt", default=None)
    ap.add_argument("--prompt-file", default=None)
    ap.add_argument("--workdir", default=None)
    ap.add_argument("--out-report", default=None, help="Write model text to this path")
    ap.add_argument("--tokenhub-only", action="store_true")
    ap.add_argument("--probe-models", action="store_true",
                    help="One tiny call per TokenHub model (max_tokens=16)")
    args = ap.parse_args(argv)
    cfg = load_config(args.config)

    if args.probe_models:
        rows = probe_models(cfg)
        for r in rows:
            log("probe model=%s status=%s kind=%s tokens=%s remaining_quota=%s" % (
                r.model or "-",
                r.status if r.status is not None else "-",
                r.kind,
                (r.usage or {}).get("total_tokens") if r.usage else "-",
                r.remaining_quota,
            ))
        if any(r.kind == "skipped" for r in rows) and len(rows) == 1:
            return 0
        return 0 if any(r.ok for r in rows) or all(r.kind in ("quota", "skipped") for r in rows) else 1

    prompt = args.prompt
    if args.prompt_file:
        prompt = Path(args.prompt_file).read_text(encoding="utf-8")
    if not prompt:
        log("no prompt")
        return 2
    chain = run_chain(
        prompt, cfg, workdir=args.workdir, skip_gemini=args.tokenhub_only,
    )
    if chain.content and args.out_report:
        Path(args.out_report).write_text(chain.content, encoding="utf-8")
        log("wrote %s" % args.out_report)
    if chain.ok:
        return 0
    if chain.stopped_reason and "skipped: no key" in (chain.stopped_reason or ""):
        return 0
    # Quota stop is a clean, logged stop — not a crash. Non-zero so the
    # wrapper knows enrichment did not complete, but 0 if only skipped.
    return 0 if (chain.last and chain.last.kind in ("quota", "skipped")) else 1


if __name__ == "__main__":
    sys.exit(main())
