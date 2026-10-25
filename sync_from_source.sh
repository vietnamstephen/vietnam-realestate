#!/usr/bin/env bash
# 把源项目的静态站点文件同步到本仓库并推送 GitHub
set -euo pipefail

SRC=/Users/xuyousheng/WorkBuddy/2026-10-06-22-23-12/vietnam-realestate
DST=/Users/xuyousheng/WorkBuddy/2026-10-25-12-05-25/vietnam-realestate-gh

cp "$SRC/index.html"      "$DST/index.html"
cp "$SRC/css/style.css"   "$DST/css/style.css"
cp "$SRC/js/data.js"      "$DST/js/data.js"
cp "$SRC/js/app.js"       "$DST/js/app.js"

cd "$DST"
git add -A
if git diff --cached --quiet; then
  echo "NO_CHANGE"
  exit 0
fi

STAMP=$(grep -o 'lastUpdatedAt: "[^"]*"' js/data.js | head -1)
git -c user.name=vietnamstephen \
    -c user.email=vietnamstephen@users.noreply.github.com \
    commit -q -m "data update $STAMP"
git push -q origin main
echo "PUSHED $STAMP"
