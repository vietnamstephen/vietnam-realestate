#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
越南房地产数据平台 —— 自带后台刷新程序
=====================================
纯标准库实现（无需 pip install），Python 3.9+ 可直接跑。

功能：
  1. 抓取越南房产 RSS/Google News，按「媒体覆盖度 + 时效」计算热议度
  2. 生成 Top N 热议话题 -> 写入 data.js 的 hotTopics（含原文链接）
  3. 新事件按原有格式增量写入 data.js 的 newsFeed（去重，保留上限）
  4. 更新 meta.lastUpdated / meta.lastUpdatedAt
  5. 原子写入 + 备份 + node --check 校验，失败自动回滚

用法：
  python3 updater.py                # 立即跑一次
  python3 updater.py --dry-run      # 只打印不写文件
  python3 updater.py --no-llm       # 不调本地模型（保留越南语原标题）
  python3 updater.py --daemon       # 常驻：每天 01:00（配置时区）自动跑
"""

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

try:
    from zoneinfo import ZoneInfo
except ImportError:  # pragma: no cover
    ZoneInfo = None

BASE = os.path.dirname(os.path.abspath(__file__))
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

# ---------------------------------------------------------------- 基础工具

def log(msg, verbose=True):
    line = "[%s] %s" % (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), msg)
    if verbose:
        print(line, flush=True)
    _log_fp.append(line)


_log_fp = []


def load_config(path=None):
    path = path or os.path.join(BASE, "config.json")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def now_tz(cfg):
    tzname = cfg.get("timezone", "Asia/Ho_Chi_Minh")
    if ZoneInfo:
        try:
            return datetime.now(ZoneInfo(tzname))
        except Exception:
            pass
    return datetime.now(timezone(timedelta(hours=7)))


def http_get(url, timeout=25, retries=2):
    last = None
    for i in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": UA,
                "Accept": "application/rss+xml, application/xml, text/xml, */*",
                "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.8",
            })
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except Exception as e:  # noqa
            last = e
            time.sleep(1.5 * (i + 1))
    raise last


# ---------------------------------------------------------------- RSS 解析

def _text(node):
    if node is None or node.text is None:
        return ""
    return re.sub(r"\s+", " ", node.text).strip()


def parse_rss(xml_bytes, source_name, lang):
    out = []
    try:
        root = ET.fromstring(xml_bytes)
    except Exception:
        try:
            root = ET.fromstring(xml_bytes.decode("utf-8", "ignore"))
        except Exception:
            return out
    for item in root.iter("item"):
        title = _text(item.find("title"))
        link = _text(item.find("link"))
        if not title or not link:
            continue
        pub = None
        pd = _text(item.find("pubDate"))
        if pd:
            try:
                pub = parsedate_to_datetime(pd)
                if pub.tzinfo is None:
                    pub = pub.replace(tzinfo=timezone.utc)
            except Exception:
                pub = None
        src_node = item.find("source")
        src = _text(src_node) if src_node is not None else source_name
        # Google News 标题形如 "Tiêu đề - Tên báo"
        if src_node is not None and " - " in title:
            title = title.rsplit(" - ", 1)[0].strip()
        out.append({
            "title": title, "link": link, "pub": pub,
            "source": src or source_name, "lang": lang,
        })
    return out


def fetch_all(cfg, verbose=True):
    items = []
    for f in cfg.get("feeds", []):
        try:
            data = http_get(f["url"])
            got = parse_rss(data, f.get("name", ""), f.get("lang", "vi"))
            items.extend(got)
            log("源 %-34s -> %3d 条" % (f.get("name", "")[:34], len(got)), verbose)
        except Exception as e:
            log("源 %-34s -> 失败 %s" % (f.get("name", "")[:34], e), verbose)
    return items


# ---------------------------------------------------------------- 热议度计算

STOP = set("""
và của các những với cho trong trên tại từ sau khi đã đang sẽ được bị này đó về như
nhưng mà thì là có không một hai ba bốn năm sáu bảy tám chín mười đầu cuối mới cũ
theo cũng hơn nhất rất quá lại nữa ra vào lên xuống đến tới do bởi vì nên hay hoặc
nếu còn chưa vẫn mỗi nhiều ít các người dân nhà đất giá tiền tỷ triệu đồng usd
năm tháng ngày tuần quý kỳ năm
""".split())

BRANDS = [
    "vinhomes", "vingroup", "novaland", "masterise", "masteri", "keppel", "gamuda",
    "lotte", "capitaland", "ecopark", "sungroup", "sun group", "phu my hung",
    "phát đạt", "phat dat", "hưng thịnh", "hung thinh", "khải hoàn", "khai hoan",
    "đất xanh", "dat xanh", "nam long", "hà đô", "ha do", "bim group", "him lam",
    "hanoi", "hà nội", "ho chi minh", "tp.hcm", "tp hcm", "hcmc", "saigon", "sài gòn",
    "thủ đức", "thu duc", "bình dương", "binh duong", "đà nẵng", "da nang",
    "vietcombank", "bidv", "techcombank", "vpbank", "mb bank", "acb", "sacombank",
    "metro", "sân bay long thành", "long thành", "long thanh",
]

TAG_RULES = [
    ("政策 / Policy", "mid", ["luật", "nghị định", "nghi dinh", "quyết định", "thông tư",
                              "chính sách", "chinh sach", "chính phủ", "chinh phu",
                              "quốc hội", "quoc hoi", "sửa đổi", "sua doi", "bộ xây dựng",
                              "bộ tài", "thuế", "thue", "quy định", "quy dinh", "pháp lý"]),
    ("市政 / Infra", "good", ["metro", "cầu", "cau ", "đường", "duong", "sân bay", "san bay",
                              "cao tốc", "cao toc", "hạ tầng", "ha tang", "quy hoạch",
                              "quy hoach", "khởi công", "khoi cong", "thông xe", "thong xe",
                              "tuyến", "tuyen", "ga ", "nhà ga", "nha ga"]),
    ("利坏 / Negative", "bad", ["khởi tố", "khoi to", "bắt", "bat ", "sai phạm", "sai pham",
                                "đình trệ", "dinh tre", "vướng", "vuong", "lỗ", "lo ", "nợ",
                                "no ", "trái phiếu", "trai phieu", "thua lỗ", "thua lo",
                                "đóng băng", "dong bang", "rủi ro", "rui ro", "kiện", "kien"]),
    ("利好 / Positive", "good", ["tăng trưởng", "tang truong", "khởi sắc", "khoi sac",
                                 "phục hồi", "phuc hoi", "đột phá", "dot pha", "kỷ lục",
                                 "ky luc", "thuận lợi", "thuan loi", "mở bán", "mo ban",
                                 "ra mắt", "ra mat", "chào bán", "chao ban"]),
    ("新盘 / Launch", "good", ["dự án", "du an", "căn hộ", "can ho", "chung cư", "chung cu",
                               "mở bán", "mo ban", "giỏ hàng", "gio hang", "booking",
                               "đặt chỗ", "dat cho", "phân khu", "phan khu"]),
    ("数据 / Data", "mid", ["giá", "gia ", "tăng", "tang", "giảm", "giam", "thị trường",
                            "thi truong", "tỷ lệ", "ty le", "quý", "quy ", "hấp thụ",
                            "hap thu", "nguồn cung", "nguon cung", "giao dịch", "giao dich",
                            "lãi suất", "lai suat", "chỉ số", "chi so", "%"]),
]


def tokenize(title):
    t = title.lower()
    t = re.sub(r"https?://\S+", " ", t)
    words = re.findall(r"[^\W\d_]{3,}", t, re.UNICODE)
    return set(w for w in words if w not in STOP)


def classify(title):
    t = title.lower()
    for name, cls, kws in TAG_RULES:
        for k in kws:
            if k in t:
                return name, cls
    return "中性 / Neutral", "mid"


def norm_key(title):
    return re.sub(r"[^a-z0-9\u00c0-\u1ef9]+", " ", title.lower()).strip()


def anchors(title):
    """用于跨语言匹配：数字/金额 + 品牌专有名词"""
    nums = set(re.findall(r"\d+(?:[.,]\d+)?", title))
    low = title.lower()
    br = set(b for b in BRANDS if b in low)
    return nums, br


def cluster(items, jaccard=0.34):
    """按 token 重叠聚类 -> 话题簇"""
    df = {}
    toks = {}
    for it in items:
        tk = tokenize(it["title"])
        toks[it["link"]] = tk
        for t in tk:
            df[t] = df.get(t, 0) + 1

    scored = []
    for it in items:
        tk = toks[it["link"]]
        if not tk:
            continue
        s = sum(df.get(t, 0) for t in tk) / (len(tk) ** 0.7)
        it["_score"] = s
        it["_tok"] = tk
        scored.append(it)
    scored.sort(key=lambda x: -x["_score"])

    clusters = []
    for it in scored:
        hit = None
        for c in clusters:
            inter = len(it["_tok"] & c["_tok"])
            union = len(it["_tok"] | c["_tok"])
            if union and inter / union >= jaccard:
                hit = c
                break
        if hit is None:
            clusters.append({"_tok": set(it["_tok"]), "items": [it], "lead": it})
        else:
            hit["items"].append(it)
            hit["_tok"] |= it["_tok"]
    return clusters


def recency_bonus(pub, now):
    if not pub:
        return 0
    try:
        delta = (now - pub.astimezone(now.tzinfo)).total_seconds() / 3600.0
    except Exception:
        return 0
    if delta <= 24:
        return 12
    if delta <= 72:
        return 7
    if delta <= 168:
        return 3
    return 0


def score_clusters(clusters, now):
    out = []
    for c in clusters:
        srcs = set(i["source"] for i in c["items"])
        scores = sorted((i["_score"] for i in c["items"]), reverse=True)
        base = scores[0] * 0.6 + sum(scores[1:]) * 0.12
        rec = max(recency_bonus(i["pub"], now) for i in c["items"])
        heat = min(100, int(35 + 7 * len(c["items"]) + 4 * len(srcs) + rec))
        c["heat"] = heat
        c["sources"] = srcs
        c["_rank"] = base + 5 * len(srcs) + rec
        out.append(c)
    out.sort(key=lambda x: -x["_rank"])
    return out


# ---------------------------------------------------------------- 跨语言标题

def match_other_lang(lead, pool, lang_want):
    nums, br = anchors(lead["title"])
    best, best_s = None, 0
    for it in pool:
        if it.get("lang") != lang_want:
            continue
        n2, b2 = anchors(it["title"])
        s = len(nums & n2) + 3 * len(br & b2)
        if s > best_s:
            best, best_s = it, s
    return best if best_s >= 2 else None


# ---------------------------------------------------------------- 本地模型

def ollama_ok(url, timeout=4):
    try:
        with urllib.request.urlopen(url.rstrip("/") + "/api/tags", timeout=timeout) as r:
            return r.status == 200
    except Exception:
        return False


def _parse_json_lines(text):
    res = {}
    for line in text.splitlines():
        line = line.strip().strip(",")
        if not line.startswith("{"):
            continue
        depth, end = 0, None
        for k, ch in enumerate(line):
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    end = k + 1
                    break
        if not end:
            continue
        try:
            obj = json.loads(line[:end])
            res[int(obj["i"])] = obj
        except Exception:
            continue
    return res


def _openai_call(llm, prompt, verbose):
    base = (llm.get("openai_base_url") or "").rstrip("/")
    if not base:
        return {}
    key = os.environ.get(llm.get("openai_api_key_env") or "OPENAI_API_KEY", "")
    if not key:
        log("未设置环境变量 %s，跳过 OpenAI 兼容接口" % llm.get("openai_api_key_env"), verbose)
        return {}
    body = json.dumps({
        "model": llm.get("openai_model") or "gpt-4o-mini",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.2,
    }).encode("utf-8")
    try:
        req = urllib.request.Request(
            base + "/chat/completions", data=body,
            headers={"Content-Type": "application/json", "Authorization": "Bearer " + key})
        with urllib.request.urlopen(req, timeout=llm.get("timeout", 180)) as r:
            raw = json.loads(r.read().decode("utf-8", "ignore"))
        return raw["choices"][0]["message"]["content"]
    except Exception as e:
        log("OpenAI 兼容接口失败：%s" % e, verbose)
        return ""


def llm_summarize(cfg, entries, verbose=True):
    """entries: [{"title","sources"}] -> {idx: {zh,en,vi,title_zh,title_en}}"""
    llm = cfg.get("llm", {}) or {}
    provider = (llm.get("provider") or "auto").lower()
    url = llm.get("ollama_url") or "http://127.0.0.1:11434"
    model = llm.get("ollama_model") or "qwen3-coder:30b-16k"

    if provider == "none":
        return {}
    if provider == "openai":
        text = _openai_call(llm, prompt, verbose)
        if not text:
            return {}
        res = _parse_json_lines(text)
        log("云端模型生成 %d/%d 条双语摘要" % (len(res), len(entries)), verbose)
        return res
    if not ollama_ok(url):
            if provider == "ollama":
                log("本地模型不可用：%s" % url, verbose)
            return {}

    payload_items = []
    for i, e in enumerate(entries):
        payload_items.append({
            "i": i,
            "vi": e["title"],
            "sources": e.get("sources", [])[:4],
        })
    prompt = (
        "Bạn là biên tập viên bất động sản Việt Nam. Với mỗi chủ đề, hãy trả về đúng một đối tượng JSON "
        "trên một dòng, có dạng: {\"i\": <số>, \"zh\": \"<tóm tắt tiếng Trung 30-60 chữ>\", "
        "\"en\": \"<English summary 25-45 words>\", \"vi\": \"<tiêu đề tiếng Việt ngắn gọn>\", "
        "\"title_zh\": \"<tiêu đề tiếng Trung ngắn>\", \"title_en\": \"<short English title>\"}\n"
        "Quy tắc bắt buộc:\n"
        "1) zh và title_zh là TIẾNG TRUNG GIẢN THỂ (简体中文), tuyệt đối không dùng phồn thể (繁體).\n"
        "2) Tên riêng (địa danh, công ty, dự án, luật) giữ nguyên tiếng Việt hoặc tiếng Anh, KHÔNG phiên âm Hán tự "
        "(giữ Đà Nẵng, Novaland, Vinhomes — không viết 达纳/诺瓦兰).\n"
        "3) Chỉ tóm tắt từ tiêu đề đã cho, KHÔNG bịa số liệu. Chỉ trả JSON, không thêm văn bản khác.\n\n"
        + json.dumps(payload_items, ensure_ascii=False)
    )

    body = json.dumps({
        "model": model, "prompt": prompt, "stream": False,
        # think=False：避免思考型模型把预算耗在 <think> 上导致 response 为空（qwen3.5 等）
        "think": False,
        "options": {"temperature": 0.2, "num_predict": 2400},
    }).encode("utf-8")

    try:
        req = urllib.request.Request(
            url.rstrip("/") + "/api/generate", data=body,
            headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=llm.get("timeout", 180)) as r:
            raw = json.loads(r.read().decode("utf-8", "ignore"))
        text = raw.get("response", "")
    except Exception as e:
        log("本地模型调用失败：%s" % e, verbose)
        return {}

    res = _parse_json_lines(text)
    log("本地模型生成 %d/%d 条双语摘要" % (len(res), len(entries)), verbose)
    return res


# ---------------------------------------------------------------- data.js 写入

def js_str(s):
    s = "" if s is None else str(s)
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    s = s.replace("\n", " ").replace("\r", " ")
    s = s.replace("<", "\\u003c").replace(">", "\\u003e")
    s = re.sub(r"\s+", " ", s).strip()
    return '"' + s + '"'


def find_block(src, key):
    """匹配顶层 `  key: [ ... ],`，返回 (start, end) 含结尾逗号行"""
    m = re.search(r"^  %s: \[\n" % re.escape(key), src, re.M)
    if not m:
        return None
    end = re.search(r"^  \],", src[m.start():], re.M)
    if not end:
        return None
    return (m.start(), m.start() + end.end())


def build_hot_block(topics, now_str, raw_mode):
    lines = ["  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */",
             "  hotTopics: ["]
    for idx, t in enumerate(topics, 1):
        lead = t["lead"]
        tag, cls = classify(lead["title"])
        date = lead["pub"].strftime("%Y-%m-%d") if lead["pub"] else now_str[:10]
        zh = t.get("zh") or lead["title"]
        en = t.get("en") or lead["title"]
        tzh = t.get("title_zh") or (zh[:40] if not raw_mode else "越南语原标题")
        ten = t.get("title_en") or (en[:60] if not raw_mode else "Original Vietnamese title")
        vi = t.get("vi") or lead["title"]
        rel = t["items"][1:4]
        rel_js = ", ".join(
            "{ n: %s, u: %s }" % (js_str(x["source"]), js_str(x["link"])) for x in rel)
        lines.append("    { date: %s, rank: %d, heat: %d, tag: %s, tagClass: %s, raw: %s," % (
            js_str(date), idx, t["heat"], js_str(tag), js_str(cls),
            "true" if raw_mode else "false"))
        lines.append("      titleZh: %s, titleEn: %s," % (js_str(tzh), js_str(ten)))
        lines.append("      zh: %s, en: %s, vi: %s," % (js_str(zh), js_str(en), js_str(vi)))
        lines.append("      srcName: %s, src: %s," % (js_str(lead["source"]), js_str(lead["link"])))
        lines.append("      coverage: %d, related: [%s] }," % (len(t["sources"]), rel_js))
    lines.append("  ],")
    return "\n".join(lines)


def build_news_items(items, now_str):
    lines = []
    for it in items:
        tag, cls = classify(it["title"])
        date = it["pub"].strftime("%Y-%m-%d") if it["pub"] else now_str[:10]
        zh = it.get("zh") or it["title"]
        en = it.get("en") or it["title"]
        lines.append('    { date: %s, tag: %s, tagClass: %s, zh: %s, en: %s, src: %s },'
                     % (js_str(date), js_str(tag), js_str(cls),
                        js_str(zh), js_str(en), js_str(it["link"])))
    return lines


def write_data(cfg, hot_block, news_lines, now_str, dry=False, verbose=True):
    path = os.path.join(BASE, cfg.get("data_file", "../js/data.js"))
    path = os.path.normpath(path)
    with open(path, "r", encoding="utf-8") as f:
        src = f.read()
    orig = src

    nf = find_block(src, "newsFeed")
    if nf is None:
        raise RuntimeError("未找到 newsFeed 区块，架构异常，已中止写入")
    maxn = int(cfg.get("news_max", 40))
    # 1) newsFeed 增量：新条目写数组头部，超出上限截断
    start, end = nf
    header = "  newsFeed: [\n"
    header_end = start + len(header)
    inner = src[header_end:end - 4]          # 去掉结尾 "  ],"
    exist_links = set(re.findall(r'src:\s*"([^"]+)"', inner))
    exist_titles = set(norm_key(x)[:60] for x in re.findall(r'zh:\s*"([^"]+)"', inner))
    exist_titles |= set(norm_key(x)[:60] for x in re.findall(r'en:\s*"([^"]+)"', inner))

    def is_dup(line):
        for u in re.findall(r'src:\s*"([^"]+)"', line):
            if u in exist_links:
                return True
        m = re.search(r'zh:\s*"([^"]*)"', line) or re.search(r'en:\s*"([^"]*)"', line)
        if m and norm_key(m.group(1))[:60] in exist_titles:
            return True
        return False

    fresh = [l for l in news_lines if not is_dup(l)]
    body_lines = [l for l in inner.split("\n") if l.strip()]
    kept = body_lines[:max(0, maxn - len(fresh))]
    new_inner = "".join(l + "\n" for l in fresh) + "".join(l + "\n" for l in kept)
    src = src[:header_end] + new_inner + "  ]," + src[end:]
    log("newsFeed：新增 %d 条，截断至上限 %d 条" % (len(fresh), maxn), verbose)

    # 2) hotTopics 全量替换（首次则插在 newsFeed 之后）
    hb = find_block(src, "hotTopics")
    if hb:
        src = src[:hb[0]] + hot_block + src[hb[1]:]
    else:
        nf3 = find_block(src, "newsFeed")
        src = src[:nf3[1]] + "\n\n" + hot_block + src[nf3[1]:]
    log("hotTopics：写入 %d 条" % (hot_block.count("rank:")), verbose)

    # 3) meta 时间戳
    src = re.sub(r'lastUpdated: "[^"]*"', 'lastUpdated: "%s"' % now_str[:10], src, count=1)
    src = re.sub(r'lastUpdatedAt: "[^"]*"', 'lastUpdatedAt: "%s"' % now_str, src, count=1)

    if dry:
        log("--dry-run：已跳过写入 %s" % path, verbose)
        return True

    bak_dir = os.path.join(BASE, cfg.get("backup_dir", "backups"))
    os.makedirs(bak_dir, exist_ok=True)
    backup = os.path.join(bak_dir, "data.%s.js.bak" % now_str[:10].replace("-", ""))
    shutil.copyfile(path, backup)
    try:
        with open(path + ".tmp", "w", encoding="utf-8") as f:
            f.write(src)
        os.replace(path + ".tmp", path)
    except Exception as e:
        shutil.copyfile(backup, path)
        raise RuntimeError("写入失败并已回滚：%s" % e)

    node = cfg.get("node_bin") or shutil.which("node")
    if node:
        r = subprocess.run([node, "--check", path], capture_output=True, text=True)
        if r.returncode != 0:
            shutil.copyfile(backup, path)
            raise RuntimeError("node --check 失败，已回滚：%s" % (r.stderr or "")[:300])
        log("node --check 通过", verbose)
    else:
        log("未找到 node，跳过语法校验", verbose)
    return True


# ---------------------------------------------------------------- 主流程

def run_once(cfg, dry=False, no_llm=False, verbose=True):
    now = now_tz(cfg)
    now_str = now.strftime("%Y-%m-%d %H:%M")
    log("=== 开始刷新 %s（%s）===" % (now_str, cfg.get("timezone")), verbose)

    items = fetch_all(cfg, verbose)
    if not items:
        log("未抓到任何条目，放弃本次刷新（保留原数据）", verbose)
        return False

    seen = {}
    for it in items:
        k = norm_key(it["title"])[:110]
        if k not in seen:
            seen[k] = it
    items = list(seen.values())
    log("去重后 %d 条" % len(items), verbose)

    vi_items = [i for i in items if i["lang"] == "vi"]
    pool_en = [i for i in items if i["lang"] == "en"]
    pool_zh = [i for i in items if i["lang"] == "zh"]

    clusters = score_clusters(cluster(vi_items), now)
    top = clusters[:int(cfg.get("top_n", 12))]
    log("聚出 %d 个话题，取 Top %d" % (len(clusters), len(top)), verbose)

    # ---- newsFeed 增量候选：时效<=7天且未收录的越南语条目 ----
    data_path = os.path.normpath(os.path.join(BASE, cfg.get("data_file")))
    with open(data_path, encoding="utf-8") as f:
        cur = f.read()
    nf = find_block(cur, "newsFeed")
    exist = set(re.findall(r'src:\s*"([^"]+)"', cur[nf[0]:nf[1]])) if nf else set()
    fresh_items = []
    for it in vi_items:
        if it["link"] in exist:
            continue
        if it["pub"] and (now - it["pub"].astimezone(now.tzinfo)).days > 7:
            continue
        fresh_items.append(it)
    fresh_items.sort(key=lambda x: x.get("_score", 0), reverse=True)
    fresh_items = fresh_items[:8]

    # ---- 双语：先跨语言源匹配，再交给模型统一生成中/英摘要 ----
    for t in top:
        t["zh"] = t["en"] = t["title_zh"] = t["title_en"] = None
        t["vi"] = t["lead"]["title"]
    for it in fresh_items:
        it["zh"] = it["en"] = None

    entries = [{"title": t["lead"]["title"],
                "sources": [x["title"] for x in t["items"][:4]]} for t in top]
    entries += [{"title": it["title"], "sources": []} for it in fresh_items]

    raw_mode = True
    if not no_llm and entries:
        gen = llm_summarize(cfg, entries, verbose)
        if gen:
            raw_mode = False
            n = len(top)
            for i, t in enumerate(top):
                g = gen.get(i)
                if not g:
                    continue
                t["zh"] = g.get("zh")
                t["en"] = g.get("en")
                t["title_zh"] = g.get("title_zh") or g.get("zh")
                t["title_en"] = g.get("title_en") or g.get("en")
                t["vi"] = g.get("vi") or t["vi"]
            for j, it in enumerate(fresh_items):
                g = gen.get(n + j)
                if not g:
                    continue
                it["zh"] = g.get("zh") or g.get("title_zh")
                it["en"] = g.get("en") or g.get("title_en")
    if raw_mode:  # 兜底：跨语言源匹配 / 保留越南语原标题
        for t in top:
            m_zh = match_other_lang(t["lead"], pool_zh, "zh")
            m_en = match_other_lang(t["lead"], pool_en, "en")
            t["zh"] = m_zh["title"] if m_zh else t["lead"]["title"]
            t["en"] = m_en["title"] if m_en else t["lead"]["title"]
            t["title_zh"] = t["zh"]
            t["title_en"] = t["en"]
        for it in fresh_items:
            m_zh = match_other_lang(it, pool_zh, "zh")
            m_en = match_other_lang(it, pool_en, "en")
            it["zh"] = m_zh["title"] if m_zh else it["title"]
            it["en"] = m_en["title"] if m_en else it["title"]
    log("双语模式：%s" % ("原文（未翻译）" if raw_mode else "已生成中/英摘要"), verbose)

    hot_block = build_hot_block(top, now_str, raw_mode)
    news_lines = build_news_items(fresh_items, now_str)
    log("newsFeed 候选新增 %d 条" % len(news_lines), verbose)

    ok = write_data(cfg, hot_block, news_lines, now_str, dry=dry, verbose=verbose)
    if ok:
        log("✅ 刷新成功 %s（%s）" % (now_str, cfg.get("timezone")), verbose)
    return ok


def ensure_dirs(cfg):
    for d in (cfg.get("state_dir", "state"), cfg.get("log_dir", "logs")):
        p = os.path.join(BASE, d)
        os.makedirs(p, exist_ok=True)


def flush_log(cfg):
    try:
        ensure_dirs(cfg)
        p = os.path.join(BASE, cfg.get("log_dir", "logs"), "updater.log")
        with open(p, "a", encoding="utf-8") as f:
            f.write("\n".join(_log_fp) + "\n")
    except Exception:
        pass


def daemon(cfg, no_llm, verbose=True):
    tzname = cfg.get("timezone", "Asia/Ho_Chi_Minh")
    hour = int(cfg.get("run_hour", 1))
    minute = int(cfg.get("run_minute", 0))
    log("常驻模式启动：每天 %02d:%02d（%s）自动刷新，Ctrl+C 退出" % (hour, minute, tzname), verbose)
    while True:
        now = now_tz(cfg)
        nxt = now.replace(hour=hour, minute=minute, second=0, microsecond=0)
        if nxt <= now:
            nxt += timedelta(days=1)
        wait = (nxt - now).total_seconds()
        log("下次运行：%s（%.1f 小时后）" % (nxt.strftime("%Y-%m-%d %H:%M"), wait / 3600.0), verbose)
        try:
            time.sleep(min(wait, 86400))
        except KeyboardInterrupt:
            log("已退出常驻模式", verbose)
            break
        try:
            run_once(cfg, dry=False, no_llm=no_llm, verbose=verbose)
        except Exception as e:
            log("本次刷新异常：%s" % e, verbose)
        flush_log(cfg)


def main():
    ap = argparse.ArgumentParser(description="越南房产数据平台后台刷新程序")
    ap.add_argument("--config", default=None)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--no-llm", action="store_true")
    ap.add_argument("--daemon", action="store_true", help="常驻：每天 01:00 自动运行")
    ap.add_argument("--quiet", action="store_true")
    a = ap.parse_args()

    cfg = load_config(a.config)
    ensure_dirs(cfg)
    verbose = not a.quiet
    try:
        if a.daemon:
            daemon(cfg, a.no_llm, verbose)
        else:
            run_once(cfg, dry=a.dry_run, no_llm=a.no_llm, verbose=verbose)
    except Exception as e:
        log("运行失败：%s" % e, verbose)
        flush_log(cfg)
        sys.exit(1)
    flush_log(cfg)


if __name__ == "__main__":
    main()
