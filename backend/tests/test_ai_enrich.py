#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Mock tests for the local Gemini → TokenHub chain. No real key is used."""
from __future__ import annotations

import io
import json
import os
import sys
import tempfile
import threading
import unittest
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.request import urlopen

HERE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(HERE))
import ai_enrich  # noqa: E402


def _cfg(base_url: str) -> dict:
    return {
        "ai_enrichment": {
            "local_only": True,
            "tokenhub": {
                "base_url": base_url,
                "models": ["deepseek-v4.1-flash", "hy4"],
                "api_key_env": "TOKENHUB_API_KEY",
                "api_key_file_env": "TOKENHUB_KEY_FILE",
                "api_key_file": "/no/such/tokenhub-key-for-tests",
                "timeout_sec": 10,
                "max_tokens": 64,
            },
        }
    }


class _Handler(BaseHTTPRequestHandler):
    # Set on the class by the test before serving.
    script = []  # list of (status, body_dict_or_str)
    seen = []

    def log_message(self, fmt, *args):
        return

    def do_POST(self):
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b""
        auth = self.headers.get("Authorization") or ""
        # Never keep the raw key around in a way tests would print.
        self.seen.append({
            "path": self.path,
            "has_bearer": auth.startswith("Bearer ") and len(auth) > 8,
            "body": raw.decode("utf-8", "replace"),
        })
        if not self.script:
            self._send(500, {"error": {"message": "no script", "code": "500001"}})
            return
        status, body = self.script.pop(0)
        self._send(status, body)

    def _send(self, status, body):
        data = body if isinstance(body, (bytes, str)) else json.dumps(body)
        if isinstance(data, str):
            data = data.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


def start_server(script):
    _Handler.script = list(script)
    _Handler.seen = []
    httpd = HTTPServer(("127.0.0.1", 0), _Handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    port = httpd.server_address[1]
    return httpd, "http://127.0.0.1:%d/v1" % port


class TestAiEnrich(unittest.TestCase):
    def setUp(self):
        # Guarantee tests never pick up the real key from the default path or env.
        self._old = {k: os.environ.get(k) for k in ("TOKENHUB_API_KEY", "TOKENHUB_KEY_FILE")}
        os.environ.pop("TOKENHUB_API_KEY", None)
        os.environ["TOKENHUB_KEY_FILE"] = "/no/such/tokenhub-key-for-tests"

    def tearDown(self):
        for k, v in self._old.items():
            if v is None:
                os.environ.pop(k, None)
            else:
                os.environ[k] = v

    def test_a_no_key_skips_cleanly(self):
        buf = io.StringIO()
        old = sys.stdout
        sys.stdout = buf
        try:
            chain = ai_enrich.run_tokenhub_chain(
                "hello",
                _cfg("http://127.0.0.1:9/v1"),
                env={"TOKENHUB_KEY_FILE": "/no/such/tokenhub-key-for-tests"},
            )
        finally:
            sys.stdout = old
        out = buf.getvalue()
        self.assertIn("TokenHub skipped: no key", out)
        self.assertFalse(chain.ok)
        self.assertEqual(chain.results[0].kind, "skipped")
        self.assertEqual(chain.stopped_reason, "TokenHub skipped: no key")
        # Also via main()
        rc = ai_enrich.main(["--tokenhub-only", "--prompt", "hello", "--config",
                             str(HERE / "config.json")])
        # main uses real config default path; force via env already set
        self.assertEqual(rc, 0)

    def test_b_quota_exhausted_logs_and_stops_retry(self):
        body = {
            "error": {
                "message": "The free trial quota of this endpoint has been exhausted, and post-paid is not enabled.",
                "message_zh": "服务免费体验额度已耗尽，且未开启后付费，无法正常访问。请前往控制台 > 在线推理服务开启后付费。",
                "code": "401008",
                "type": "gateway_error",
            }
        }
        # Both models return quota; server should be hit exactly twice (no retries).
        httpd, base = start_server([(402, body), (402, body), (402, body)])
        try:
            buf = io.StringIO()
            old = sys.stdout
            sys.stdout = buf
            try:
                chain = ai_enrich.run_tokenhub_chain(
                    "hello", _cfg(base), key="test-key-not-real",
                )
            finally:
                sys.stdout = old
            out = buf.getvalue()
            self.assertFalse(chain.ok)
            self.assertEqual(len(chain.results), 2)
            self.assertTrue(all(r.kind == "quota" for r in chain.results))
            self.assertIn("401008", out)
            self.assertIn("CodeEndpointFreeQuotaExhausted", out)
            self.assertIn("will not retry this model", out.lower())
            self.assertIn("will not enable post-paid", out.lower())
            # Third scripted response unused → no retries.
            self.assertEqual(len(_Handler.seen), 2)
            self.assertNotIn("test-key-not-real", out)
        finally:
            httpd.shutdown()

    def test_b2_billing_stops_without_next_model(self):
        body = {
            "error": {
                "message": "The account has insufficient balance.",
                "message_zh": "API Key 所属账号已欠费",
                "code": "403004",
                "type": "gateway_error",
            }
        }
        httpd, base = start_server([(402, body), (200, {"choices": [{"message": {"content": "nope"}}]})])
        try:
            buf = io.StringIO()
            old = sys.stdout
            sys.stdout = buf
            try:
                chain = ai_enrich.run_tokenhub_chain(
                    "hello", _cfg(base), key="test-key-not-real",
                )
            finally:
                sys.stdout = old
            out = buf.getvalue()
            self.assertFalse(chain.ok)
            self.assertEqual(len(chain.results), 1)
            self.assertEqual(chain.results[0].kind, "billing")
            self.assertEqual(len(_Handler.seen), 1)
            self.assertIn("billing/payment", out.lower())
            self.assertIn("Will not enable post-paid", out)
        finally:
            httpd.shutdown()

    def test_c_mock_success_parses_output(self):
        ok_body = {
            "id": "chatcmpl-test",
            "choices": [{"index": 0, "message": {"role": "assistant", "content": "「周度复盘」ok"}}],
            "usage": {"prompt_tokens": 9, "completion_tokens": 6, "total_tokens": 15},
        }
        httpd, base = start_server([(200, ok_body)])
        try:
            buf = io.StringIO()
            old = sys.stdout
            sys.stdout = buf
            try:
                chain = ai_enrich.run_tokenhub_chain(
                    "hello", _cfg(base), key="test-key-not-real",
                    models=["deepseek-v4.1-flash"],
                )
            finally:
                sys.stdout = old
            out = buf.getvalue()
            self.assertTrue(chain.ok)
            self.assertEqual(chain.content, "「周度复盘」ok")
            self.assertEqual(chain.results[0].usage["total_tokens"], 15)
            self.assertEqual(chain.results[0].remaining_quota, "not queryable")
            self.assertIn("tokens prompt=9 completion=6 total=15", out)
            self.assertIn("remaining_quota=not queryable", out)
            self.assertNotIn("test-key-not-real", out)
            self.assertEqual(_Handler.seen[0]["has_bearer"], True)
            self.assertEqual(len(_Handler.seen), 1)
        finally:
            httpd.shutdown()

    def test_d_gemini_capped_falls_through_to_tokenhub_mock(self):
        ok_body = {
            "choices": [{"message": {"role": "assistant", "content": "from-tokenhub"}}],
            "usage": {"prompt_tokens": 3, "completion_tokens": 2, "total_tokens": 5},
        }
        httpd, base = start_server([(200, ok_body)])

        def fake_gemini(prompt, workdir):
            return 1, "ERROR: You exceeded your current quota. Please check your plan."

        try:
            buf = io.StringIO()
            old = sys.stdout
            sys.stdout = buf
            try:
                chain = ai_enrich.run_chain(
                    "research please",
                    _cfg(base),
                    gemini_runner=fake_gemini,
                    env={"TOKENHUB_API_KEY": "test-key-not-real"},
                    max_tokens=16,
                )
            finally:
                sys.stdout = old
            out = buf.getvalue()
            self.assertTrue(chain.ok)
            self.assertEqual(chain.content, "from-tokenhub")
            self.assertEqual(chain.results[0].channel, "gemini")
            self.assertEqual(chain.results[0].kind, "quota")
            self.assertEqual(chain.results[1].channel, "tokenhub")
            self.assertEqual(chain.results[1].model, "deepseek-v4.1-flash")
            self.assertIn("falling through to TokenHub", out)
            self.assertEqual(len(_Handler.seen), 1)
            self.assertNotIn("test-key-not-real", out)
        finally:
            httpd.shutdown()


if __name__ == "__main__":
    unittest.main()
