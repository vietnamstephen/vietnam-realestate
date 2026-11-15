#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Templated weekly diff/stats for the Vietnam real-estate dashboard.

No model calls. On Mondays (Asia/Ho_Chi_Minh), compare js/data.js with the
version from ~7 days ago, write reviews/weekly-YYYY-MM-DD.md, and prepend a
short newsFeed item tagged 复盘 / Weekly.
"""
from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from collections import Counter
from datetime import datetime, timedelta
from pathlib import Path

try:
    from zoneinfo import ZoneInfo
    TZ = ZoneInfo("Asia/Ho_Chi_Minh")
except Exception:
    TZ = None

REPO = Path(__file__).resolve().parents[1]
DATA = REPO / "js" / "data.js"


def now_vn():
    if TZ:
        return datetime.now(TZ)
    return datetime.now()


def js_str(s: str) -> str:
    s = "" if s is None else str(s)
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    s = s.replace("\n", " ").replace("\r", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return '"' + s + '"'


def parse_news(src: str):
    m = re.search(r"^  newsFeed: \[\n(.*?)^  \],", src, re.S | re.M)
    if not m:
        return []
    items = []
    for block in re.finditer(
        r"\{[^{}]*date:\s*\"([^\"]*)\"[^{}]*tag:\s*\"([^\"]*)\"[^{}]*"
        r"zh:\s*\"((?:\\.|[^\"])*)\"[^{}]*src:\s*\"([^\"]*)\"[^{}]*\}",
        m.group(1),
        re.S,
    ):
        items.append({
            "date": block.group(1),
            "tag": block.group(2),
            "zh": block.group(3).encode("utf-8").decode("unicode_escape")
            if "\\" in block.group(3) else block.group(3),
            "src": block.group(4),
        })
    return items


def last_updated(src: str) -> str:
    m = re.search(r'lastUpdatedAt:\s*"([^"]*)"', src)
    return m.group(1) if m else ""


def git_show(rev: str, path: str) -> str:
    r = subprocess.run(
        ["git", "-C", str(REPO), "show", f"{rev}:{path}"],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        return ""
    return r.stdout


def week_base_rev(end: datetime) -> str:
    start = end - timedelta(days=7)
    until = start.strftime("%Y-%m-%d %H:%M:%S")
    r = subprocess.run(
        ["git", "-C", str(REPO), "log", "-1", "--until=" + until, "--format=%H"],
        capture_output=True, text=True,
    )
    sha = (r.stdout or "").strip()
    if sha:
        return sha
    r = subprocess.run(
        ["git", "-C", str(REPO), "rev-list", "--max-parents=0", "HEAD"],
        capture_output=True, text=True,
    )
    return (r.stdout or "").strip().splitlines()[0] if r.stdout.strip() else "HEAD"


def find_block(src: str, key: str):
    m = re.search(r"^  %s: \[\n" % re.escape(key), src, re.M)
    if not m:
        return None
    end = re.search(r"^  \],", src[m.start():], re.M)
    if not end:
        return None
    return (m.start(), m.start() + end.end())


def prepend_news(src: str, line: str, date: str) -> str:
    nf = find_block(src, "newsFeed")
    if not nf:
        raise RuntimeError("newsFeed block not found")
    start, end = nf
    header = "  newsFeed: [\n"
    header_end = start + len(header)
    inner = src[header_end:end - 4]
    if re.search(r'date: "%s"[^}]*tag: "复盘 / Weekly"' % re.escape(date), inner):
        return src  # already present
    new_inner = line + "\n" + inner
    return src[:header_end] + new_inner + "  ]," + src[end:]


def build_summary(today: datetime, old: str, new: str, base_rev: str):
    old_items = parse_news(old) if old else []
    new_items = parse_news(new)
    old_srcs = {i["src"] for i in old_items}
    added = [i for i in new_items if i["src"] not in old_srcs]
    tags = Counter(i["tag"] for i in added)
    date = today.strftime("%Y-%m-%d")
    week_start = (today - timedelta(days=6)).strftime("%Y-%m-%d")
    tag_zh = "、".join("%s %d" % (t, n) for t, n in tags.most_common()) or "无"
    tag_en = ", ".join("%s %d" % (t, n) for t, n in tags.most_common()) or "none"
    headlines = []
    for i in added[:12]:
        zh = re.sub(r"\s+", " ", i["zh"])[:80]
        headlines.append("- %s · %s" % (i["tag"], zh))
    md = "\n".join([
        "# 周度复盘 / Weekly review %s" % date,
        "",
        "统计区间：%s 至 %s（Asia/Ho_Chi_Minh）。对照提交 `%s`。" % (
            week_start, date, base_rev[:10] if base_rev else "n/a"),
        "",
        "本文件由 GitHub Actions 按模板生成，**不调用模型**。",
        "它只统计 `newsFeed` / `hotTopics` / 时间戳的变化，不检索房价、政策、利率或汇率。",
        "",
        "## 统计",
        "",
        "- 对照文件 `lastUpdatedAt`：%s" % (last_updated(old) or "（无历史）"),
        "- 当前文件 `lastUpdatedAt`：%s" % (last_updated(new) or "（无）"),
        "- newsFeed 本周新增：%d 条" % len(added),
        "- 标签分布：%s" % tag_zh,
        "- hotTopics：每日由 RSS 覆盖度算法全量刷新（最多 12 条）",
        "",
        "## 本周新增标题（最多 12 条）",
        "",
        *(headlines or ["- （本周无新增 newsFeed）"]),
        "",
        "## 未覆盖（相对原 AI 复盘的损失）",
        "",
        "- 没有 Knight Frank / Savills / CBRE 等权威季度房价与租金检索，`cities` / `index` / `rentTrend` / `macro` 不会自动更新",
        "- 没有法令与官方链接检索，`policy` 不会自动更新",
        "- 没有银行利率、定存、`loanRateTrend` 或 `fx` 汇率更新",
        "- 没有新盘开售时间 / 配额 / 优惠政策检索，`newLaunches` 不会自动更新",
        "- 没有地铁工期叙事更新",
        "- 没有撰写式周度/月度/年度评述，只有本页统计摘要",
        "- 热议与动态的中英摘要在 `--no-llm` 下可能保留越南语原标题或跨语言 RSS 标题，而不是润色后的简体中文摘要",
        "",
    ])
    zh = (
        "「周度复盘」%s 至 %s：newsFeed 新增 %d 条（%s）。"
        "热议话题已按媒体覆盖度刷新。宏观、利率、汇率、政策、新盘等字段未用模型检索，保持上次数值。"
        "详见 reviews/weekly-%s.md。"
    ) % (week_start, date, len(added), tag_zh, date)
    en = (
        "Weekly review %s to %s: %d new newsFeed items (%s). "
        "Trending topics were refreshed by coverage. Macro, rates, FX, policy and "
        "new-launch fields were not model-researched and are unchanged. "
        "See reviews/weekly-%s.md."
    ) % (week_start, date, len(added), tag_en, date)
    src = "https://github.com/vietnamstephen/vietnam-realestate/blob/main/reviews/weekly-%s.md" % date
    line = "    { date: %s, tag: %s, tagClass: %s, zh: %s, en: %s, src: %s }," % (
        js_str(date), js_str("复盘 / Weekly"), js_str("mid"),
        js_str(zh), js_str(en), js_str(src),
    )
    return md, line, date


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="run even if not Monday")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    today = now_vn()
    if today.weekday() != 0 and not a.force:
        print("not Monday in Asia/Ho_Chi_Minh (%s); skip weekly review" % today.strftime("%F %A"))
        return 0
    if not DATA.is_file():
        print("missing", DATA, file=sys.stderr)
        return 1
    new = DATA.read_text(encoding="utf-8")
    base = week_base_rev(today)
    old = git_show(base, "js/data.js") if base else ""
    print("weekly review base=%s old_bytes=%d new_bytes=%d" % (
        base[:10] if base else "none", len(old), len(new)))
    md, line, date = build_summary(today, old, new, base)
    out = REPO / "reviews" / ("weekly-%s.md" % date)
    updated = prepend_news(new, line, date)
    if a.dry_run:
        print("--dry-run would write", out)
        print(md[:800])
        print("newsFeed line:", line[:200], "...")
        return 0
    out.write_text(md, encoding="utf-8")
    if updated != new:
        tmp = DATA.with_suffix(".js.tmp")
        tmp.write_text(updated, encoding="utf-8")
        os.replace(tmp, DATA)
        node = __import__("shutil").which("node")
        if node:
            r = subprocess.run([node, "--check", str(DATA)], capture_output=True, text=True)
            if r.returncode != 0:
                DATA.write_text(new, encoding="utf-8")
                print("node --check failed, rolled back data.js:", (r.stderr or "")[:300], file=sys.stderr)
                return 1
        print("wrote", out, "and prepended newsFeed weekly item")
    else:
        print("wrote", out, "(newsFeed weekly item already present)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
