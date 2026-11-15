# Vietnam Real Estate Dashboard

越南房地产市场数据看板（静态站点，无构建步骤）。

- 线上地址：https://vietnamstephen.github.io/vietnam-realestate/
- 备用地址：https://vietnam-realestate.app.workbuddy.host/

## 结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 单页看板（Chart.js / Leaflet 走 CDN） |
| `css/style.css` | 样式 |
| `js/data.js` | 数据，字段 `lastUpdatedAt` 标记更新时间 |
| `js/app.js` | 渲染逻辑 |

数据由 GitHub Actions 每日 05:00（Asia/Saigon，即 22:00 UTC）自动抓取并推送，不调用模型。

- 工作流：`.github/workflows/daily-update.yml`（也可手动 `workflow_dispatch`）
- 脚本：`backend/updater.py --no-llm` 抓取 RSS，更新 `hotTopics`、`newsFeed` 与 `meta` 时间戳
- 周一另写一份模板化周度统计：`reviews/weekly-YYYY-MM-DD.md`，并在 `newsFeed` 顶部加一条「复盘 / Weekly」
- 不更新房价、政策、利率、汇率、新盘等需检索或模型撰写的字段

本地同步脚本 `sync_from_source.sh` 仍可手动把源项目（`~/WorkBuddy/2026-10-06-22-23-12/vietnam-realestate/`）的
`index.html`、`css/style.css`、`js/data.js`、`js/app.js` 复制进来并推送。日常更新已改走 Actions；
再跑该脚本可能用本机较旧的 `data.js` 覆盖 Actions 的结果，请谨慎。

本机（非 Actions）若要做研究字段、中文摘要润色或撰写式复盘，走 `backend/ai_enrich.py`：Gemini CLI → TokenHub `deepseek-v4.1-flash` → TokenHub `hy4`。不调用付费 DeepSeek API，不用 GitHub secrets。TokenHub 密钥只在运行时从本机读取，不要写进仓库。

