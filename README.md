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

数据由本地定时任务每日更新后推送，本仓库仅托管静态文件。

同步脚本 `sync_from_source.sh`：把源项目（`~/WorkBuddy/2026-10-06-22-23-12/vietnam-realestate/`）的
`index.html`、`css/style.css`、`js/data.js`、`js/app.js` 复制进来，有变更才 commit + push，
无变更输出 `NO_CHANGE` 并退出 0。
