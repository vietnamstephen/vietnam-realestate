/* =====================================================================
 * 越南房地产信息平台 — 应用逻辑 V2 (app.js)
 * 中英双语 · 明暗主题 · Chart.js · Leaflet 地图 · 汇率换算 · 钻取月度图
 * ===================================================================== */

(function () {
  'use strict';

  const D = window.RE_DATA;
  const MONTHS_ZH = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  /* ------------------------- 语言字典 / i18n ------------------------- */
  const I18N = {
    zh: {
      appTitle: "越南房地产数据平台", appSubtitle: "Vietnam Real Estate Data Hub",
      dataCutoff: "数据截至", autoNote: "每日自动更新",
      nav: { overview: "房产经济指数", fx: "汇率换算", macro: "宏观 · GDP与收入", cities: "城市对比", policy: "政策追踪", news: "动态风向", hot: "热议话题", reform: "改革十年", districts: "胡志明分区", price10: "十年房价", segments: "房产分档", fcompare: "外籍购房对比", projects: "楼盘数据库", launches: "新盘速递", insight: "市场洞察", quota: "外籍配额查询", cases: "烂尾案例库", map: "地图探索", banking: "房贷银行", benefits: "外籍福利", ownership: "产权与风险" },
      common: { updated: "更新于", sources: "数据来源", disclaimer: "免责声明", yes: "是", no: "否", hcmc: "胡志明市", hanoi: "河内市", units: "套", year: "年份", mgmtFee: "管理费", internet: "宽带", link: "链接", down: "首付", payment: "付款方式", tags: "定位" },
      overview: {
        title: "近 5+1 年越南房产经济指数",
        desc: "本图为【指数】（2020=100，无量纲），非价格/金额。房价指数由胡志明与河内一手均价加权；「100→221」表示房价较 2020 年累计上涨 121%，不是 221 美元/㎡。点击图中任意年份可钻取查看该年月度波动与汇率换算。",
        legendPrice: "房价综合指数", legendGdp: "人均 GDP 指数", legendIncome: "人均收入指数",
        chipDrill: "🖱️ 点击图中年份钻取", chipLang: "🌐 中文 / EN / Tiếng Việt",
        waveTitle: "房价季度波动（一手 vs 二手）",
        insightTitle: "核心洞察", sourceLinksTitle: "支持数据链接",
        insight1: "房价指数 6 年翻倍以上（100→221），2026 年跳升主要来自河内（$1,500→$4,356），显著跑赢收入（148）与 GDP（144）。",
        insight2: "2026 Q2 历史性拐点：河内一手均价 $4,356 首次反超胡志明 $4,088；胡志明进入盘整，二手局部回调 5–12%。",
        insight3: "房贷利率升至 12–13%，河内去化率降至 48%——价格在顶、接盘减少，市场进入「有价无市」的调整期。"
      },
      fx: {
        title: "越南盾汇率 · 兑人民币 / 美金",
        desc: "选择基准货币查看波动，并在右侧换算器中实时换算购房/租金/管理费金额。",
        baseCurrency: "基准货币", baseYear: "基准年", trendChart: "汇率波动（每年≈1000单位基准货币兑越南盾）",
        converter: "取现换算器", amount: "金额", from: "从", to: "兑换至", result: "结果",
        rateNow: "当前参考汇率", insightTitle: "汇率要点", crossTitle: "交叉汇率说明",
        note: "越南盾近 5 年对美元累计贬值约 14%、对人民币约 10%；购房款须以越南盾经境内账户支付，首笔入金水单务必保存（资金出境凭证）。",
        sourceNote: "汇率来源：越南国家银行（月均路径，2022 Q4 大贬为真实行情）"
      },
      drill: { title: "年度钻取", priceTitle: "房价（该年，USD/㎡）", fxTitle: "USD/VND 月度走势", close: "关闭", noQ: "该年仅有年度均价", convTitle: "货币换算（该年均价）" },
      macro: {
        title: "GDP 与人均收入中位数分析", desc: "结合年度 GDP 与人均收入，评估购买力基础。可切换美金/越南盾/人民币显示，按当年汇率换算。",
        gdpChart: "GDP 总量与增速", incomeChart: "人均月收入（全国 vs 城镇）",
        gdpUsd: "GDP（十亿美元）", gdpGrowth: "实际增速 %", incomeNat: "全国人均月收入", incomeUrban: "城镇人均月收入", wage: "劳动者月均工资",
        ccyLabel: "显示货币（按当年汇率换算）",
        hcmcTitle: "胡志明市 · 城市经济", hanoiTitle: "河内市 · 城市经济",
        grdpCol: "GRDP 规模", growthCol: "增速", perCapitaCol: "人均 GRDP", asOfCol: "口径",
        note1: "2025 年 GDP 现价约 4,940 亿美元、增速 8.0%；2026 年为预估值（IMF ~7%，国会目标 10%）。",
        note2: "2024 年劳动者月均工资约 770 万盾（~$315）；城镇人均月收入约 689 万盾，2026 年预估 800 万。",
        note3: "收入 6 年累计 +48% 仍落后房价 +121%——「买房难」加剧，租赁成为默认选择。",
        note2026: "2026 数据为 IMF/市场预估，将随官方季度发布滚动修正。",
        statGdp: "GDP 总额", statGrowth: "GDP 增速", statIncome: "人均收入", statWage: "月均工资",
        sourceLinksTitle: "支持数据链接"
      },
      cities: {
        title: "胡志明 · 河内：6 年体量与价格对比",
        desc: "对比一手均价与新房供应量。2026 Q2 河内价格首次反超胡志明。",
        priceChart: "一手均价（USD/㎡）", supplyChart: "新房供应量（套）", shareChart: "两城供应占比（%）",
        milestoneTitle: "2026 Q2 里程碑", sourceLinksTitle: "支持数据链接",
        note1: "胡志明 $4,088 vs 河内 $4,356：价差首次转正，河内靠高端供应拉高均价。",
        note2: "胡志明供应受土地约束走低；河内 2026 全年预计 ~3.9 万套创纪录，但去化率仅 48%。",
        note3: "合并口径注意：2025 年起「大胡志明」含平阳/巴地-头顿，CBRE 口径 $2,890 与旧口径不可直接比较。"
      },
      policy: { title: "政府文件 · 法规追踪（含官方链接）", desc: "追踪法律/法令/执行时间，可点击官方链接查证原文。", date: "发布", effective: "生效", category: "类型", titleCol: "文件", keyPoint: "核心要点", status: "状态", official: "官方链接" },
      news: { title: "动态风向 · 市政与政策", desc: "利好/利坏/市政/政策事件流，点击顶栏「消息」可随时打开右侧抽屉。", date: "时间", tag: "标签", content: "事件", src: "来源" },
      hot: { title: "热议话题 · 越南房产热搜榜", desc: "按当日越南媒体覆盖度与时效自动生成的热议榜，每条均附原文链接与相关报道。热度 = 报道条数 + 媒体家数 + 时效加权。", rank: "排名", heat: "热度", coverage: "家媒体报道", src: "原文链接", related: "相关报道", asOf: "榜单生成于", autoNote: "由后端 updater.py 每日越南时间 01:00 自动刷新，无需人工干预。", rawNote: "本次未接入翻译模型，摘要显示越南语原标题。", empty: "暂无热议数据" },
      districts: {
        title: "胡志明分区年度新盘分析",
        desc: "开盘价区间、当前二手价、面积、户型（点户型看面积/单价/总价与示意户型图）、外籍可售、管理费、宽带、首付与付款方式、楼盘官网链接。",
        district: "区域", project: "楼盘", developer: "开发商", year: "开盘", price: "开盘价区间", priceNow: "当前二手价", area: "面积", type: "户型", foreign: "外籍", launch: "开盘时间", units: "数量", note: "备注",
        housing: "住宅性质", gas: "煤气", hanoiTitle: "河内高端楼盘（参照胡志明分区）"
      },
      rents: {
        title: "租金行情（月租 · 按房型）", project: "楼盘", city: "城市", district: "区域", unit: "房型", area: "面积", rent: "月租金", yield: "毛租金回报",
        yieldBasis: "租金回报率口径", ccy: "货币"
      },
      projects: {
        title: "主流楼盘历史数据（含价格走势）",
        desc: "2020–2026 价格迷你走势、外籍配额占比、管理费、宽带、首付与付款、定位标签与官网链接。价格与配额为代表性估算。",
        name: "楼盘", district: "区域", segment: "档次", trend: "价格走势(USD/㎡)", quota: "外籍配额", foreign: "外籍", yieldCol: "租金回报"
      },
      launches: { title: "新盘速递（2025 在售 + 2026 开盘）", desc: "汇总 2025–2026 胡志明与河内在售/即将开盘新盘：开发商背景、外籍配额、预售进度、开盘优惠与户型。", name: "楼盘", developer: "开发商", city: "城市", district: "区域", launch: "开盘", launchTime: "开盘时间", price: "均价", priceNow: "当前价格区间", unitsCol: "户型", units: "户型（1房-2房）", quota: "外籍配额", presale: "预售情况", promo: "开盘优惠", mapCol: "Google 地图", saleCol: "发售入口", foreign: "外籍", status: "状态" },
      insight: {
        hanoiTitle: "为什么河内涨得比胡志明猛？",
        hanoiSummary: "2023 年初河内均价还比胡志明低 23%；2025 年中反超 11%，2026 Q2 一手均价首次全面反超。核心是「供给收缩 + 成本推升 + 基建兑现」三力叠加。",
        investTitle: "若现在要投资越南房产：四个方向",
        investNote: "基于公开数据的策略方向（非投资建议）。外籍限制：只能买商业住宅公寓（30%/栋、50 年产权），不可买土地/独栋别墅。"
      },
      quota: {
        title: "外籍配额查询", desc: "输入楼盘名或区域查询外籍可购配额余量（估算）。配额规则：单楼 ≤30%，独栋每坊 ≤250 套。",
        searchPh: "搜索楼盘名 / 区域，如：Golden River / 第1区", project: "楼盘", district: "区域", total: "总套数", sold: "外籍已售(估)", remain: "剩余(估)", pct: "占用比", warn: "以上为公开信息估算（示意），签约前务必索取建设厅/开发商盖章的配额确认函。"
      },
      cases: { title: "烂尾楼 / 争议案例库", desc: "何时发生何事、开发商、现状与规避要点，附新闻源入口。", name: "案例", developer: "开发商", year: "时间", event: "事件", status: "现状", src: "新闻源", noteTitle: "规避要点" },
      map: {
        title: "胡志明地图探索", desc: "楼盘、地铁（通车实线/在建虚线）、医院、学校、商业、交通枢纽。可缩放拖动，点图例切换图层；楼盘定位含「学区/医疗/生活/投资」参考。",
        layers: "图层", metroTable: "地铁线路 · 开通/预计时间", line: "线路", status: "状态", since: "开通/开工", expect: "预计通车", length: "长度", stations: "站点",
        metroNote: "线路走向为近似示意，来源：老东报/国会工人报（2026）。", sourceLinksTitle: "支持数据链接"
      },
      banking: {
        title: "房贷银行 · 利率与首付（2026 核实版）",
        desc: "已核实：HSBC 等外资行官方资格仅面向越南籍/越侨，外籍仅个案审批，多数需全款。存款与贷款利率按国家银行 2026-08 口径分列。",
        local: "本地银行（居民房贷 · 优惠期 vs 浮动）", foreign: "外资银行（外籍实况与条件）",
        bank: "银行", rate: "利率", teaser: "优惠期利率", teaserPeriod: "优惠期时长", float: "优惠期后浮动", promo: "居民优惠", cond: "外籍贷款条件", ltv: "贷款成数 LTV", tenor: "期限", note: "备注", term: "期限/类别",
        depositVsLoanTitle: "存款利率 vs 贷款利率（国家银行 2026-08 官方口径）",
        depositRatesTitle: "存款利率（按期限，%/年）", loanRatesTitle: "贷款利率（%/年）",
        downTitle: "首付比例", foreignNoteTitle: "外籍贷款要点（实测结论）",
        depositTitle: "外籍定期存款利率参考（12个月）", depositBank: "银行/产品", depositRate: "利率", depositNote: "备注",
        depositNoteTitle: "定存要点", sourceLinksTitle: "支持数据链接"
      },
      taxes: { title: "购房税费一览（外籍，2026 口径）", item: "税项", rate: "税率/金额", note: "说明" },
      certificates: { title: "产权证：土地证 / 房产证 / 粉皮书" },
      unit: { title: "户型详情", area: "面积", price: "单价（开盘）", total: "总价（开盘，估算）", floorPlan: "示意户型图", official: "官方户型页" },
      funds: { title: "资金入境与定存指南：工资在汇丰（2%）→ 转入本地银行定存（6.8–8.5%）" },
      benefits: {
        title: "工作签证外籍人士可享福利（拓展版）",
        desc: "社保/医保/驾照/定存等权益对照；持工作签证（WP/TRC）可享与受限项目。",
        item: "福利项目", available: "是否可享", note: "说明",
        pathsTitle: "50 年产权 → 如何获得「类永久」权益",
        leaseTitle: "租房实况：房东直租与税费"
      },
      ownership: {
        title: "外籍购房：产权 · 合同 · 风险",
        desc: "使用权年限、拥有权、合同种类、风险清单，附合同范本白皮书下载。",
        termTitle: "使用权年限", rightsTitle: "拥有权要点", contractTitle: "合同种类", riskTitle: "需关注的风险",
        riskItem: "风险", level: "等级", tip: "规避建议",
        wpTitle: "合同范本白皮书（PDF 下载）", wpDownload: "下载白皮书 PDF"
      },
      reform: {
        title: "改革十年 · 越南房地产制度轨迹",
        desc: "从 2015 年首次对外籍开放，到 2022 债券爆雷、2024 三部法重构、2025 保障房机制——制度变迁是价格与供给的真正底色。",
        spanLabel: "覆盖区间", tag: "类型", date: "时间", event: "事件", detail: "关键内容", src: "原文"
      },
      price10: {
        title: "十年房价追踪 · 全国 / 胡志明 / 河内",
        desc: "2016–2026 年共 11 个年度数据点：全国（含省级市场估算）+ 胡志明 + 河内，附当年汇率与两城价差。",
        year: "年份", fx: "汇率 USD/VND", natVnd: "全国 (百万盾/㎡)", natUsd: "全国 (USD/㎡)",
        hcmc: "胡志明 (USD/㎡)", hanoi: "河内 (USD/㎡)", gap: "河内/胡志明",
        insightTitle: "十年三个拐点", caliberLabel: "口径说明"
      },
      segments: {
        title: "房产分档 · 外籍高端 / 本地中产 / 保障房",
        desc: "按「谁在买、买得起什么」三档拆分：外派高端、本地白领与中产普通商品房、国家保障房（含廉租）。",
        affordTitle: "负担比 · 本地白领买得起吗",
        socialTitle: "保障房政策链与供给",
        labelPrice: "价格区间", labelArea: "面积", labelTotal: "总价", labelRent: "租金 / 回报",
        labelBuyer: "买家与约束", labelProj: "代表项目 / 区域"
      },
      fcmp: {
        title: "外籍购房对比 · 越南（胡志明+河内）vs 中国",
        desc: "同一套「外籍购房」问题在两地的制度差异：资格、套数、产权、贷款、税费、资金进出。",
        dim: "对比维度", vn: "🇻🇳 越南（胡志明 + 河内）", cn: "🇨🇳 中国内地"
      },
      tl: {
        title: "时间波动轴 · 招商引资 × 汇率 × 政策 × 关税",
        desc: "点击任意年份，下方四栏（FDI / 汇率 / 政策 / 关税）联动显示该年实况。",
        howTitle: "四线联动读法",
        fdi: "招商引资 FDI", fx: "汇率波动", policy: "政策引导", tariff: "国际关税",
        reg: "注册", disb: "到位"
      },
      drawer: { title: "最新消息 · 政府/专家/市场" },
      footer: { tagline: "为中资及在越工作、投资的外籍人士提供越南房地产数据参考" }
    },

    en: {
      appTitle: "Vietnam Real Estate Data Hub", appSubtitle: "越南房地产数据平台",
      dataCutoff: "Data as of", autoNote: "Auto-updated daily",
      nav: { overview: "RE Index", fx: "FX & Converter", macro: "Macro · GDP & Income", cities: "City Comparison", policy: "Policy Tracker", news: "News Pulse", hot: "Trending", reform: "Reform Decade", districts: "HCMC Districts", price10: "10-Yr Prices", segments: "Housing Tiers", fcompare: "Foreign Buying", projects: "Project Database", launches: "New Launches", insight: "Market Insight", quota: "Foreign Quota", cases: "Stall Cases", map: "Map Explorer", banking: "Mortgage & Banking", benefits: "Expat Benefits", ownership: "Ownership & Risk" },
      common: { updated: "Updated", sources: "Sources", disclaimer: "Disclaimer", yes: "Yes", no: "No", hcmc: "Ho Chi Minh City", hanoi: "Hanoi", units: "units", year: "Year", mgmtFee: "Mgmt fee", internet: "Internet", link: "Link", down: "Down pmt", payment: "Payment", tags: "Positioning" },
      overview: {
        title: "Vietnam RE Economic Index (2020–2026)",
        desc: "This chart is an INDEX (2020=100, unitless), not a price. The price index weights HCMC & Hanoi primary averages; 100→221 means +121% vs 2020 — not US$221/sqm. Click any year to drill into monthly detail.",
        legendPrice: "Housing Price Index", legendGdp: "GDP/capita Index", legendIncome: "Income Index",
        chipDrill: "🖱️ Click a year on the chart to drill", chipLang: "🌐 中文 / EN / Tiếng Việt",
        waveTitle: "Quarterly price waves (primary vs secondary)",
        insightTitle: "Key Insights", sourceLinksTitle: "Supporting Sources",
        insight1: "Prices more than doubled in 6 years (100→221); the 2026 jump came from Hanoi (US$1,500→4,356), far outpacing income (148) and GDP (144).",
        insight2: "Q2 2026 historic crossover: Hanoi ($4,356) overtook HCMC ($4,088); HCMC consolidating with secondary cuts of 5–12%.",
        insight3: "Mortgage rates at 12–13% and Hanoi absorption at 48% — a 'price without buyers' adjustment phase."
      },
      fx: {
        title: "VND Exchange Rates · CNY / USD",
        desc: "Pick a base currency to view its trend; use the converter for property/rent/fee amounts.",
        baseCurrency: "Base currency", baseYear: "Base year", trendChart: "FX trend (1,000 units of base → VND)",
        converter: "Cash Converter", amount: "Amount", from: "From", to: "To", result: "Result",
        rateNow: "Current reference rates", insightTitle: "FX Takeaways", crossTitle: "Cross-rate note",
        note: "VND depreciated ~14% vs USD and ~10% vs CNY over 5 years. Property must be paid in VND via onshore accounts — keep the first inbound remittance slip (repatriation proof).",
        sourceNote: "FX source: State Bank of Vietnam (monthly paths; 2022 Q4 slump is real)"
      },
      drill: { title: "Year Drill-down", priceTitle: "Prices that year (USD/sqm)", fxTitle: "USD/VND monthly", close: "Close", noQ: "Annual average only for this year", convTitle: "Currency conversion (year avg)" },
      macro: {
        title: "GDP & Median Income Analysis", desc: "Purchasing-power foundations via GDP and household income. Switch USD/VND/CNY — converted at each year's actual FX rate.",
        gdpChart: "GDP & Growth", incomeChart: "Monthly Income per Capita (national vs urban)",
        gdpUsd: "GDP (USD bn)", gdpGrowth: "Real growth %", incomeNat: "National income", incomeUrban: "Urban income", wage: "Avg worker wage",
        ccyLabel: "Display currency (converted at each year's rate)",
        hcmcTitle: "Ho Chi Minh City · Economy", hanoiTitle: "Ha Noi · Economy",
        grdpCol: "GRDP scale", growthCol: "Growth", perCapitaCol: "GRDP per capita", asOfCol: "Basis",
        note1: "2025 nominal GDP ≈ US$494bn, growth 8.0%; 2026 is an estimate (IMF ~7%, NA target 10%).",
        note2: "2024 avg worker wage ≈ VND 7.7M (~US$315); urban income ≈ VND 6.89M, est. 8M in 2026.",
        note3: "Income +48% in 6 years still trails prices +121% — renting becomes the default.",
        note2026: "2026 figures are IMF/market estimates; they will be revised with official quarterly releases.",
        statGdp: "GDP", statGrowth: "Growth", statIncome: "Income/capita", statWage: "Avg wage",
        sourceLinksTitle: "Supporting Sources"
      },
      cities: {
        title: "HCMC vs Hanoi: 6-Year Volume & Price",
        desc: "Primary prices and supply. In Q2 2026 Hanoi overtook HCMC for the first time.",
        priceChart: "Primary Price (USD/sqm)", supplyChart: "New Supply (units)", shareChart: "Supply Share (%)",
        milestoneTitle: "Q2 2026 Milestone", sourceLinksTitle: "Supporting Sources",
        note1: "HCMC $4,088 vs Hanoi $4,356: gap flipped positive — Hanoi pulled up by luxury supply.",
        note2: "HCMC supply is land-constrained; Hanoi's record ~39k units in 2026 meets only 48% absorption.",
        note3: "Mind the merger: since 2025 'enlarged HCMC' includes Binh Duong & Ba Ria-Vung Tau (CBRE $2,890 is not comparable to the old footprint)."
      },
      policy: { title: "Government Documents & Regulation Tracker (official links)", desc: "Laws, decrees and effective dates — click official links to verify the source text.", date: "Issued", effective: "Effective", category: "Type", titleCol: "Document", keyPoint: "Key point", status: "Status", official: "Official" },
      news: { title: "News Pulse · Infra & Policy", desc: "Positive/negative/infra/policy events. Open the topbar drawer anytime for the live feed.", date: "Date", tag: "Tag", content: "Event", src: "Source" },
      hot: { title: "Trending · Vietnam Property Buzz", desc: "Auto-ranked by same-day Vietnamese media coverage and recency; every entry links to the original article. Heat = item count + outlet count + recency.", rank: "Rank", heat: "Heat", coverage: "outlets", src: "Original", related: "Related", asOf: "Generated", autoNote: "Auto-refreshed daily at 01:00 (Vietnam time) by backend updater.py — no manual work.", rawNote: "No translation model attached this run; summaries show the original Vietnamese headline.", empty: "No trending data yet" },
      districts: {
        title: "HCMC District New-Launch Analysis",
        desc: "Launch price range, current resale price, area, unit types (click for area/unit/total price & schematic floor plan), foreign eligibility, mgmt fee, internet, down payment & terms, official links.",
        district: "District", project: "Project", developer: "Developer", year: "Year", price: "Launch range", priceNow: "Current resale", area: "Area", type: "Unit types", foreign: "Foreign", launch: "Launch", units: "Units", note: "Note",
        housing: "Housing type", gas: "Gas", hanoiTitle: "Hanoi High-end Projects (mirrors HCMC districts)"
      },
      rents: {
        title: "Rental Market (monthly rent by unit type)", project: "Project", city: "City", district: "District", unit: "Unit", area: "Area", rent: "Monthly rent", yield: "Gross yield",
        yieldBasis: "Yield basis", ccy: "Currency"
      },
      projects: {
        title: "Project Database (with price trends)",
        desc: "2020–2026 mini price trends, foreign-quota share, mgmt fee, internet, down payment & terms, positioning tags and official links. Estimates for reference.",
        name: "Project", district: "District", segment: "Segment", trend: "Price trend (USD/sqm)", quota: "Foreign quota", foreign: "Foreign", yieldCol: "Rental yield"
      },
      launches: { title: "New Launches (2025 on-sale + 2026)", desc: "HCMC & Hanoi launches 2025–2026: developer background, foreign quota, presale progress, launch promos and unit types.", name: "Project", developer: "Developer", city: "City", district: "District", launch: "Launch", launchTime: "Launch time", price: "Avg price", priceNow: "Current range", unitsCol: "Units", units: "Units (1BR–2BR)", quota: "Foreign quota", presale: "Presale", promo: "Launch promos", mapCol: "Google Maps", saleCol: "Sales entry", foreign: "Foreign", status: "Status" },
      insight: {
        hanoiTitle: "Why has Hanoi outpaced HCMC?",
        hanoiSummary: "In early 2023 Hanoi was 23% cheaper; by mid-2025 it was 11% dearer and in 2026 Q2 the primary average overtook HCMC for the first time — supply contraction + cost-push + infrastructure delivery.",
        investTitle: "If investing now: four options",
        investNote: "Strategy directions from public data (not investment advice). Foreigner limits: licensed condos only (30%/building, 50-year leasehold) — no land or landed villas."
      },
      quota: {
        title: "Foreign Quota Checker", desc: "Search by project/district for remaining foreign quota (estimates). Rules: ≤30% per building; ≤250 landed units per ward.",
        searchPh: "Search project / district, e.g. Golden River / D1", project: "Project", district: "District", total: "Total units", sold: "Foreign sold (est)", remain: "Remaining (est)", pct: "Taken", warn: "Estimates from public info. Before signing, obtain a stamped quota confirmation from the developer / Dept of Construction."
      },
      cases: { title: "Stalled / Disputed Project Cases", desc: "What happened, when, developer, current status and mitigation tips, with news-source entries.", name: "Case", developer: "Developer", year: "Period", event: "Event", status: "Status", src: "News", noteTitle: "Mitigation" },
      map: {
        title: "HCMC Map Explorer", desc: "Projects, metro (operating solid / building dashed), hospitals, schools, malls, transport hubs. Zoom & pan freely; toggle layers via the legend.",
        layers: "Layers", metroTable: "Metro lines · opened / expected", line: "Line", status: "Status", since: "Opened/Start", expect: "Expected", length: "Length", stations: "Stations",
        metroNote: "Line paths are approximate. Source: Lao Dong / Cong Doan Vietnam (2026).", sourceLinksTitle: "Supporting Sources"
      },
      banking: {
        title: "Mortgage Banks · Rates & Down Payment (verified 2026)",
        desc: "Verified: HSBC et al. officially serve only Vietnamese nationals & Viet Kieu; foreigners are case-by-case and mostly pay cash. Deposit & loan rates per State Bank 2026-08.",
        local: "Local Banks (residents · teaser vs floating)", foreign: "Foreign Banks (expat reality & conditions)",
        bank: "Bank", rate: "Rate", teaser: "Teaser rate", teaserPeriod: "Teaser period", float: "Floating after", promo: "Resident perks", cond: "Foreigner loan conditions", ltv: "LTV", tenor: "Tenor", note: "Note", term: "Term / Type",
        depositVsLoanTitle: "Deposit vs Lending Rates (State Bank 2026-08)",
        depositRatesTitle: "Deposit rates (by term, %/yr)", loanRatesTitle: "Lending rates (%/yr)",
        downTitle: "Down Payment", foreignNoteTitle: "Foreign Financing Notes (verified)",
        depositTitle: "Expat Term-Deposit Rates (12-month)", depositBank: "Bank/Product", depositRate: "Rate", depositNote: "Note",
        depositNoteTitle: "Deposit Notes", sourceLinksTitle: "Supporting Sources"
      },
      taxes: { title: "Purchase Taxes (foreigner, 2026)", item: "Item", rate: "Rate / amount", note: "Note" },
      certificates: { title: "Title: Land Use Right / House / Pink Book" },
      unit: { title: "Unit Details", area: "Area", price: "Unit price (launch)", total: "Total (launch, est.)", floorPlan: "Schematic floor plan", official: "Official floor plans" },
      funds: { title: "Funds-in & deposit guide: HSBC salary (2%) → local VND term deposit (6.8–8.5%)" },
      benefits: {
        title: "Benefits for Work-Visa Holders (extended)",
        desc: "Social insurance, healthcare, driving licenses, deposits — what WP/TRC holders can and cannot access.",
        item: "Benefit", available: "Available", note: "Note",
        pathsTitle: "50-yr leasehold → paths to quasi-freehold",
        leaseTitle: "Renting reality: direct landlord leases & tax"
      },
      ownership: {
        title: "Foreign Ownership · Contracts · Risks",
        desc: "Ownership term, rights, contract types, risks — with a downloadable contract whitepaper.",
        termTitle: "Ownership Term", rightsTitle: "Key Rights", contractTitle: "Contract Types", riskTitle: "Key Risks",
        riskItem: "Risk", level: "Level", tip: "Mitigation",
        wpTitle: "Contract Whitepaper (PDF)", wpDownload: "Download PDF"
      },
      reform: {
        title: "Reform Decade · Vietnam's Institutional Path",
        desc: "From opening to foreigners in 2015, to the 2022 bond shock, the 2024 three-law overhaul and the 2025 social-housing regime — institutions are the real driver of price and supply.",
        spanLabel: "Coverage", tag: "Type", date: "Date", event: "Event", detail: "What changed", src: "Source"
      },
      price10: {
        title: "10-Year Price Tracker · National / HCMC / Hanoi",
        desc: "11 annual data points for 2016–2026: national (incl. provincial estimate), HCMC and Hanoi, with the year's FX rate and the city price gap.",
        year: "Year", fx: "FX USD/VND", natVnd: "National (VND m/sqm)", natUsd: "National (USD/sqm)",
        hcmc: "HCMC (USD/sqm)", hanoi: "Hanoi (USD/sqm)", gap: "Hanoi/HCMC",
        insightTitle: "Three inflection points", caliberLabel: "Caliber note"
      },
      segments: {
        title: "Housing Tiers · Expat Luxury / Local Middle Class / Social",
        desc: "Split by who buys and what they can afford: expat luxury, local white-collar & middle-class commercial housing, and state social housing (incl. subsidised rental).",
        affordTitle: "Affordability · can local white-collar buyers afford it?",
        socialTitle: "Social-housing policy chain & supply",
        labelPrice: "Price range", labelArea: "Area", labelTotal: "Total price", labelRent: "Rent / yield",
        labelBuyer: "Buyers & constraints", labelProj: "Representative projects / areas"
      },
      fcmp: {
        title: "Foreign Buying · Vietnam (HCMC+Hanoi) vs China",
        desc: "How the two systems differ on the same question — eligibility, unit caps, tenure, mortgage, taxes and fund flows.",
        dim: "Dimension", vn: "🇻🇳 Vietnam (HCMC + Hanoi)", cn: "🇨🇳 Mainland China"
      },
      tl: {
        title: "Time Axis · FDI × FX × Policy × Tariffs",
        desc: "Click any year — the four panels below (FDI / FX / policy / tariffs) update together.",
        howTitle: "How to read the four lines",
        fdi: "FDI attraction", fx: "FX moves", policy: "Policy guidance", tariff: "Global tariffs",
        reg: "Registered", disb: "Disbursed"
      },
      drawer: { title: "Latest News · Gov/Experts/Market" },
      footer: { tagline: "Vietnam real estate data reference for Chinese & expat investors and professionals" }
    },

    vi: {
      appTitle: "Nền tảng Dữ liệu Bất động sản Việt Nam", appSubtitle: "Vietnam Real Estate Data Hub",
      dataCutoff: "Dữ liệu đến", autoNote: "Tự động cập nhật hằng ngày",
      nav: { overview: "Chỉ số BĐS", fx: "Tỷ giá & Quy đổi", macro: "Vĩ mô · GDP & Thu nhập", cities: "So sánh thành phố", policy: "Theo dõi chính sách", news: "Tin tức", hot: "Chủ đề nóng", reform: "10 năm cải cách", districts: "Phân khu TP.HCM", price10: "Giá 10 năm", segments: "Phân khúc nhà ở", fcompare: "Mua nhà ngoại quốc", projects: "CSDL dự án", launches: "Dự án mới", insight: "Góc nhìn thị trường", quota: "Hạn mức ngoại quốc", cases: "Dự án đình trệ", map: "Bản đồ", banking: "Ngân hàng & Vay", benefits: "Phúc lợi ngoại quốc", ownership: "Sở hữu & Rủi ro" },
      common: { updated: "Cập nhật", sources: "Nguồn dữ liệu", disclaimer: "Miễn trừ trách nhiệm", yes: "Có", no: "Không", hcmc: "TP. Hồ Chí Minh", hanoi: "Hà Nội", units: "căn", year: "Năm", mgmtFee: "Phí quản lý", internet: "Internet", link: "Liên kết", down: "Trả trước", payment: "Thanh toán", tags: "Định vị" },
      overview: {
        title: "Chỉ số Kinh tế BĐS Việt Nam (2020–2026)",
        desc: "Biểu đồ này là CHỈ SỐ (2020=100, không đơn vị), không phải giá. Chỉ số giá gia quyền theo giá sơ cấp TP.HCM & Hà Nội; 100→221 nghĩa là +121% so với 2020 — không phải 221 USD/m². Nhấp một năm để xem chi tiết theo tháng.",
        legendPrice: "Chỉ số giá nhà", legendGdp: "Chỉ số GDP/người", legendIncome: "Chỉ số thu nhập",
        chipDrill: "🖱️ Nhấp một năm để xem chi tiết", chipLang: "🌐 中文 / EN / Tiếng Việt",
        waveTitle: "Biến động giá theo quý (sơ cấp vs thứ cấp)",
        insightTitle: "Điểm chính", sourceLinksTitle: "Nguồn dữ liệu tham chiếu",
        insight1: "Giá tăng hơn gấp đôi trong 6 năm (100→221); cú nhảy 2026 chủ yếu từ Hà Nội (1.500→4.356 USD), vượt xa thu nhập (148) và GDP (144).",
        insight2: "Điểm ngoặt lịch sử Q2/2026: giá sơ cấp Hà Nội 4.356 USD lần đầu vượt TP.HCM 4.088 USD; TP.HCM đang điều chỉnh, thứ cấp giảm cục bộ 5–12%.",
        insight3: "Lãi suất vay tăng lên 12–13%, tỷ lệ hấp thụ Hà Nội còn 48% — giá đỉnh, người mua giảm, thị trường bước vào giai đoạn điều chỉnh."
      },
      fx: {
        title: "Tỷ giá VND · so với CNY / USD",
        desc: "Chọn tiền tệ cơ sở để xem biến động, dùng công cụ bên phải để quy đổi giá mua/thuê/phí.",
        baseCurrency: "Tiền tệ cơ sở", baseYear: "Năm cơ sở", trendChart: "Biến động tỷ giá (≈1.000 đơn vị tiền cơ sở → VND)",
        converter: "Công cụ quy đổi", amount: "Số tiền", from: "Từ", to: "Sang", result: "Kết quả",
        rateNow: "Tỷ giá tham khảo hiện tại", insightTitle: "Điểm chính về tỷ giá", crossTitle: "Tỷ giá chéo",
        note: "VND mất giá ~14% so với USD và ~10% so với CNY trong 5 năm. Tiền mua nhà phải trả bằng VND qua tài khoản trong nước — giữ lại ủy nhiệm chi đầu tiên.",
        sourceNote: "Nguồn tỷ giá: Ngân hàng Nhà nước (đường trung bình tháng; đợt giảm mạnh Q4/2022 là thực tế)"
      },
      drill: { title: "Chi tiết theo năm", priceTitle: "Giá năm đó (USD/m²)", fxTitle: "USD/VND theo tháng", close: "Đóng", noQ: "Năm này chỉ có giá trung bình năm", convTitle: "Quy đổi tiền tệ (giá TB năm)" },
      macro: {
        title: "Phân tích GDP & Thu nhập bình quân", desc: "Kết hợp GDP và thu nhập để đánh giá sức mua. Chuyển USD/VND/CNY — quy đổi theo tỷ giá thực tế từng năm.",
        gdpChart: "GDP & Tăng trưởng", incomeChart: "Thu nhập bình quân/tháng (cả nước vs thành thị)",
        gdpUsd: "GDP (tỷ USD)", gdpGrowth: "Tăng trưởng thực %", incomeNat: "Thu nhập cả nước", incomeUrban: "Thu nhập thành thị", wage: "Lương TB người lao động",
        ccyLabel: "Tiền hiển thị (quy đổi theo tỷ giá từng năm)",
        hcmcTitle: "TP. Hồ Chí Minh · Kinh tế", hanoiTitle: "Hà Nội · Kinh tế",
        grdpCol: "Quy mô GRDP", growthCol: "Tăng trưởng", perCapitaCol: "GRDP/người", asOfCol: "Cơ sở",
        note1: "GDP danh nghĩa 2025 ≈ 494 tỷ USD, tăng 8,0%; 2026 là ước tính (IMF ~7%, mục tiêu Quốc hội 10%).",
        note2: "Lương TB người lao động 2024 ≈ 7,7 triệu VND (~315 USD); thu nhập thành thị ≈ 6,89 triệu, ước 8 triệu năm 2026.",
        note3: "Thu nhập +48% trong 6 năm vẫn thấp hơn giá nhà +121% — thuê nhà trở thành lựa chọn mặc định.",
        note2026: "Số liệu 2026 là ước tính IMF/thị trường; sẽ điều chỉnh theo công bố chính thức hằng quý.",
        statGdp: "GDP", statGrowth: "Tăng trưởng", statIncome: "Thu nhập/người", statWage: "Lương TB",
        sourceLinksTitle: "Nguồn dữ liệu tham chiếu"
      },
      cities: {
        title: "TP.HCM vs Hà Nội: 6 năm quy mô & giá",
        desc: "So sánh giá sơ cấp và nguồn cung. Q2/2026 Hà Nội lần đầu vượt TP.HCM.",
        priceChart: "Giá sơ cấp (USD/m²)", supplyChart: "Nguồn cung mới (căn)", shareChart: "Tỷ trọng cung (%)",
        milestoneTitle: "Cột mốc Q2/2026", sourceLinksTitle: "Nguồn dữ liệu tham chiếu",
        note1: "TP.HCM 4.088 USD vs Hà Nội 4.356 USD: chênh lệch lần đầu dương — Hà Nội được đẩy lên bởi nguồn cung cao cấp.",
        note2: "Nguồn cung TP.HCM hạn chế do quỹ đất; Hà Nội dự kiến ~39.000 căn năm 2026 nhưng tỷ lệ hấp thụ chỉ 48%.",
        note3: "Lưu ý sáp nhập: từ 2025 'TP.HCM mở rộng' gồm Bình Dương & Bà Rịa-Vũng Tàu (CBRE 2.890 USD không so sánh trực tiếp với địa giới cũ)."
      },
      policy: { title: "Văn bản Chính phủ · Theo dõi quy định (có link chính thức)", desc: "Theo dõi luật/nghị định/ngày hiệu lực — nhấp link chính thức để đối chiếu.", date: "Ban hành", effective: "Hiệu lực", category: "Loại", titleCol: "Văn bản", keyPoint: "Điểm chính", status: "Trạng thái", official: "Link chính thức" },
      news: { title: "Tin tức · Hạ tầng & Chính sách", desc: "Sự kiện tích cực/tiêu cực/hạ tầng/chính sách. Mở ngăn kéo ở thanh trên để xem liên tục.", date: "Ngày", tag: "Thẻ", content: "Sự kiện", src: "Nguồn" },
      hot: { title: "Chủ đề nóng · BĐS Việt Nam", desc: "Xếp hạng tự động theo độ phủ báo chí Việt trong ngày và độ mới; mỗi mục có liên kết bài gốc. Độ nóng = số bài + số báo + độ mới.", rank: "Hạng", heat: "Độ nóng", coverage: "báo đưa tin", src: "Bài gốc", related: "Tin liên quan", asOf: "Tạo lúc", autoNote: "Tự động cập nhật lúc 01:00 (giờ Việt Nam) mỗi ngày qua updater.py.", rawNote: "Không có mô hình dịch, hiển thị tiêu đề gốc tiếng Việt.", empty: "Chưa có dữ liệu" },
      districts: {
        title: "Phân tích dự án mới theo phân khu TP.HCM",
        desc: "Khoảng giá mở bán, giá thứ cấp hiện tại, diện tích, loại căn (nhấp để xem diện tích/đơn giá/tổng giá & sơ đồ), ngoại quốc, phí quản lý, internet, trả trước & thanh toán, link chính thức.",
        district: "Khu vực", project: "Dự án", developer: "Chủ đầu tư", year: "Mở bán", price: "Khoảng giá mở bán", priceNow: "Giá thứ cấp hiện tại", area: "Diện tích", type: "Loại căn", foreign: "Ngoại quốc", launch: "Thời điểm", units: "Số căn", note: "Ghi chú",
        housing: "Loại nhà ở", gas: "Ga", hanoiTitle: "Dự án cao cấp Hà Nội (theo mẫu TP.HCM)"
      },
      rents: {
        title: "Giá thuê (hằng tháng · theo loại căn)", project: "Dự án", city: "Thành phố", district: "Khu vực", unit: "Loại căn", area: "Diện tích", rent: "Thuê/tháng", yield: "Lợi suất gộp",
        yieldBasis: "Cơ sở tính lợi suất", ccy: "Tiền tệ"
      },
      projects: {
        title: "CSDL dự án chính (kèm xu hướng giá)",
        desc: "Xu hướng giá 2020–2026, tỷ lệ hạn mức ngoại quốc, phí quản lý, internet, trả trước & thanh toán, thẻ định vị và link chính thức. Giá & hạn mức là ước tính.",
        name: "Dự án", district: "Khu vực", segment: "Phân khúc", trend: "Xu hướng giá (USD/m²)", quota: "Hạn mức ngoại quốc", foreign: "Ngoại quốc", yieldCol: "Lợi suất thuê"
      },
      launches: { title: "Dự án mới (2025 đang bán + 2026)", desc: "Tổng hợp dự án mới 2025–2026 tại TP.HCM & Hà Nội: chủ đầu tư, hạn mức ngoại quốc, tiến độ mở bán, ưu đãi và loại căn.", name: "Dự án", developer: "Chủ đầu tư", city: "Thành phố", district: "Khu vực", launch: "Mở bán", launchTime: "Thời điểm mở bán", price: "Giá TB", priceNow: "Khoảng giá hiện tại", unitsCol: "Loại căn", units: "Loại căn (1PN-2PN)", quota: "Hạn mức ngoại quốc", presale: "Tình trạng mở bán", promo: "Ưu đãi", mapCol: "Google Maps", saleCol: "Cổng bán hàng", foreign: "Ngoại quốc", status: "Trạng thái" },
      insight: {
        hanoiTitle: "Vì sao Hà Nội tăng mạnh hơn TP.HCM?",
        hanoiSummary: "Đầu 2023 giá Hà Nội còn thấp hơn TP.HCM 23%; giữa 2025 vượt 11%, Q2/2026 giá sơ cấp lần đầu vượt toàn diện — do nguồn cung co lại + chi phí đẩy lên + hạ tầng hoàn thiện.",
        investTitle: "Nếu đầu tư BĐS Việt Nam lúc này: 4 hướng",
        investNote: "Hướng chiến lược từ dữ liệu công khai (không phải tư vấn đầu tư). Hạn chế ngoại quốc: chỉ mua căn hộ thương mại (30%/tòa, 50 năm) — không mua đất/nhà liền kề."
      },
      quota: {
        title: "Tra cứu hạn mức ngoại quốc", desc: "Tìm theo dự án/khu vực để xem hạn mức còn lại (ước tính). Quy định: ≤30%/tòa; ≤250 căn liền kề/phường.",
        searchPh: "Tìm dự án / khu vực, VD: Golden River / Q1", project: "Dự án", district: "Khu vực", total: "Tổng số căn", sold: "Ngoại quốc đã bán (ước)", remain: "Còn lại (ước)", pct: "Đã dùng", warn: "Ước tính từ thông tin công khai. Trước khi ký, yêu cầu xác nhận hạn mức có dấu từ chủ đầu tư / Sở Xây dựng."
      },
      cases: { title: "Dự án đình trệ / tranh chấp", desc: "Chuyện gì, khi nào, chủ đầu tư, hiện trạng và cách phòng tránh, kèm nguồn tin.", name: "Vụ việc", developer: "Chủ đầu tư", year: "Thời gian", event: "Sự kiện", status: "Hiện trạng", src: "Nguồn tin", noteTitle: "Phòng tránh" },
      map: {
        title: "Khám phá bản đồ TP.HCM", desc: "Dự án, metro (đã chạy nét liền / đang xây nét đứt), bệnh viện, trường học, TTTM, đầu mối giao thông. Kéo/zoom tự do; bật lớp theo chú thích.",
        layers: "Lớp", metroTable: "Tuyến metro · đã mở / dự kiến", line: "Tuyến", status: "Trạng thái", since: "Mở/Khởi công", expect: "Dự kiến", length: "Chiều dài", stations: "Ga",
        metroNote: "Hướng tuyến là gần đúng. Nguồn: Lao Động / Công Đoàn Việt Nam (2026).", sourceLinksTitle: "Nguồn dữ liệu tham chiếu"
      },
      banking: {
        title: "Ngân hàng cho vay · Lãi suất & Trả trước (kiểm chứng 2026)",
        desc: "Đã kiểm chứng: HSBC và ngân hàng ngoại chỉ phục vụ người Việt/Việt kiều; người nước ngoài theo từng trường hợp, đa số trả tiền mặt. Lãi suất huy động & cho vay theo NHNN 2026-08.",
        local: "Ngân hàng nội địa (cư dân · ưu đãi vs thả nổi)", foreign: "Ngân hàng ngoại (thực tế với người nước ngoài)",
        bank: "Ngân hàng", rate: "Lãi suất", teaser: "Lãi suất ưu đãi", teaserPeriod: "Thời gian ưu đãi", float: "Thả nổi sau ưu đãi", promo: "Ưu đãi cư dân", cond: "Điều kiện vay ngoại quốc", ltv: "LTV", tenor: "Kỳ hạn", note: "Ghi chú", term: "Kỳ hạn / Loại",
        depositVsLoanTitle: "Lãi suất huy động vs cho vay (NHNN 2026-08)",
        depositRatesTitle: "Lãi suất huy động (theo kỳ hạn, %/năm)", loanRatesTitle: "Lãi suất cho vay (%/năm)",
        downTitle: "Tỷ lệ trả trước", foreignNoteTitle: "Lưu ý vay vốn ngoại quốc (kiểm chứng)",
        depositTitle: "Lãi suất tiền gửi kỳ hạn (12 tháng) cho người nước ngoài", depositBank: "Ngân hàng/Sản phẩm", depositRate: "Lãi suất", depositNote: "Ghi chú",
        depositNoteTitle: "Lưu ý tiền gửi", sourceLinksTitle: "Nguồn dữ liệu tham chiếu"
      },
      taxes: { title: "Thuế phí mua nhà (người nước ngoài, 2026)", item: "Khoản", rate: "Thuế suất/Số tiền", note: "Ghi chú" },
      certificates: { title: "Giấy chứng nhận: QSD đất / Nhà ở / Sổ hồng" },
      unit: { title: "Chi tiết loại căn", area: "Diện tích", price: "Đơn giá (mở bán)", total: "Tổng giá (mở bán, ước)", floorPlan: "Sơ đồ mặt bằng", official: "Trang mặt bằng chính thức" },
      funds: { title: "Hướng dẫn chuyển tiền & tiền gửi: lương tại HSBC (2%) → gửi kỳ hạn VND nội địa (6,8–8,5%)" },
      benefits: {
        title: "Phúc lợi cho người nước ngoài có thị thực lao động",
        desc: "BHXH/BHYT/GPLX/tiền gửi — quyền lợi và hạn chế với người có WP/TRC.",
        item: "Khoản phúc lợi", available: "Được hưởng", note: "Ghi chú",
        pathsTitle: "Sở hữu 50 năm → cách đạt quyền 'gần như vĩnh viễn'",
        leaseTitle: "Thuê nhà: thuê trực tiếp & thuế"
      },
      ownership: {
        title: "Người nước ngoài mua nhà: Sở hữu · Hợp đồng · Rủi ro",
        desc: "Thời hạn sở hữu, quyền, loại hợp đồng, rủi ro — kèm tải mẫu hợp đồng.",
        termTitle: "Thời hạn sử dụng", rightsTitle: "Quyền chính", contractTitle: "Loại hợp đồng", riskTitle: "Rủi ro cần lưu ý",
        riskItem: "Rủi ro", level: "Mức độ", tip: "Cách phòng tránh",
        wpTitle: "Sách trắng mẫu hợp đồng (PDF)", wpDownload: "Tải sách trắng PDF"
      },
      reform: {
        title: "10 năm cải cách · Lộ trình thể chế BĐS Việt Nam",
        desc: "Từ mở cửa cho người nước ngoài năm 2015, cú sốc trái phiếu 2022, bộ ba luật 2024 đến cơ chế NƠXH 2025 — thể chế là nền tảng thực sự của giá và nguồn cung.",
        spanLabel: "Phạm vi", tag: "Loại", date: "Thời gian", event: "Sự kiện", detail: "Nội dung chính", src: "Nguồn"
      },
      price10: {
        title: "Theo dõi giá 10 năm · Toàn quốc / TP.HCM / Hà Nội",
        desc: "11 điểm dữ liệu năm 2016–2026: toàn quốc (gồm ước tính thị trường tỉnh), TP.HCM và Hà Nội, kèm tỷ giá và chênh lệch giá hai thành phố.",
        year: "Năm", fx: "Tỷ giá USD/VND", natVnd: "Toàn quốc (triệu VND/m²)", natUsd: "Toàn quốc (USD/m²)",
        hcmc: "TP.HCM (USD/m²)", hanoi: "Hà Nội (USD/m²)", gap: "Hà Nội/TP.HCM",
        insightTitle: "Ba điểm ngoặt", caliberLabel: "Ghi chú phương pháp"
      },
      segments: {
        title: "Phân khúc nhà ở · Cao cấp / Trung lưu địa phương / NƠXH",
        desc: "Chia theo ai mua và mua được gì: cao cấp cho người nước ngoài, nhà ở thương mại cho nhân viên văn phòng & trung lưu, và NƠXH (gồm nhà ở cho thuê).",
        affordTitle: "Khả năng chi trả · nhân viên văn phòng có mua được không?",
        socialTitle: "Chuỗi chính sách & nguồn cung NƠXH",
        labelPrice: "Khoảng giá", labelArea: "Diện tích", labelTotal: "Tổng giá", labelRent: "Thuê / lợi suất",
        labelBuyer: "Người mua & ràng buộc", labelProj: "Dự án / khu vực tiêu biểu"
      },
      fcmp: {
        title: "Mua nhà của người nước ngoài · Việt Nam (TP.HCM+Hà Nội) vs Trung Quốc",
        desc: "Khác biệt thể chế về cùng một câu hỏi: điều kiện, số lượng, thời hạn sở hữu, vay vốn, thuế và dòng vốn.",
        dim: "Tiêu chí", vn: "🇻🇳 Việt Nam (TP.HCM + Hà Nội)", cn: "🇨🇳 Trung Quốc đại lục"
      },
      tl: {
        title: "Trục thời gian · FDI × Tỷ giá × Chính sách × Thuế quan",
        desc: "Nhấp một năm — bốn mục bên dưới (FDI / tỷ giá / chính sách / thuế quan) cập nhật đồng bộ.",
        howTitle: "Cách đọc bốn đường",
        fdi: "Thu hút FDI", fx: "Biến động tỷ giá", policy: "Định hướng chính sách", tariff: "Thuế quan quốc tế",
        reg: "Đăng ký", disb: "Giải ngân"
      },
      drawer: { title: "Tin mới nhất · Chính phủ/Chuyên gia/Thị trường" },
      footer: { tagline: "Tham chiếu dữ liệu BĐS Việt Nam cho nhà đầu tư và người nước ngoài làm việc tại Việt Nam" }
    }
  };

  /* ------------------------- 状态 / State ------------------------- */
  let lang = localStorage.getItem('vnre_lang') || 'zh';
  let theme = localStorage.getItem('vnre_theme') || 'light';
  let baseCcy = localStorage.getItem('vnre_ccy') || 'USD';
  let baseYear = parseInt(localStorage.getItem('vnre_fx_year') || '2020', 10);
  let macroCcy = localStorage.getItem('vnre_macro_ccy') || 'USD';
  let rentCcy = localStorage.getItem('vnre_rent_ccy') || 'VND';
  const charts = {};
  let leafletReady = false;
  let mapLayers = null, myMap = null, tileLayerRef = null;
  function swapMapTiles() {
    if (!tileLayerRef || !myMap) return;
    myMap.removeLayer(tileLayerRef);
    tileLayerRef = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'
    }).addTo(myMap);
  }

  /* ------------------------- 工具 / Utils ------------------------- */
  function t(key) { return key.split('.').reduce((o, k) => (o ? o[k] : ''), I18N[lang]) || key; }
  function pick(obj, zhKey, enKey) { return lang === 'zh' ? obj[zhKey] : obj[enKey]; }

  /* 数据字段短语级翻译（mgmtFee/internet/down/payment 等中文数据值） */
  const PHRASE_EN = {
    "约 30,000–40,000 盾/㎡·月（酒店式管理）": "≈30,000–40,000 VND/sqm·mo (hotel-style mgmt)",
    "约 30,000–40,000 盾/㎡·月": "≈30,000–40,000 VND/sqm·mo",
    "23,000 盾/㎡·月（含泳池/健身房）；车位 210–220 万盾/月，摩托 20 万盾/月": "23,000 VND/sqm·mo (pool & gym incl.); parking 2.1–2.2M VND/mo, bike 200k",
    "23,000 盾/㎡·月": "23,000 VND/sqm·mo",
    "约 25,000–32,000 盾/㎡·月": "≈25,000–32,000 VND/sqm·mo",
    "约 15,000–20,000 盾/㎡·月": "≈15,000–20,000 VND/sqm·mo",
    "约 10,000–12,000 盾/㎡·月": "≈10,000–12,000 VND/sqm·mo",
    "约 7,000–10,000 盾/㎡·月": "≈7,000–10,000 VND/sqm·mo",
    "约 9,000 盾/㎡·月": "≈9,000 VND/sqm·mo",
    "约 18,000 盾/㎡·月": "≈18,000 VND/sqm·mo",
    "物业统一接入为主（独占概率高），约 40–60 万盾/月": "Property-managed (often exclusive), ≈400–600k VND/mo",
    "物业统一（独占）": "Property-managed (exclusive)",
    "VNPT 为主，100–300Mbps 约 20–35 万盾/月": "Mainly VNPT, 100–300Mbps ≈200–350k VND/mo",
    "VNPT 20–35万盾/月": "VNPT 200–350k VND/mo",
    "FPT/VNPT，约 25–40 万盾/月": "FPT/VNPT, ≈250–400k VND/mo",
    "FPT/VNPT 25–40万盾/月": "FPT/VNPT 250–400k VND/mo",
    "FPT/Viettel，约 20–35 万盾/月": "FPT/Viettel, ≈200–350k VND/mo",
    "FPT/Viettel 20–35万盾/月": "FPT/Viettel 200–350k VND/mo",
    "FPT/VNPT，约 18–30 万盾/月": "FPT/VNPT, ≈180–300k VND/mo",
    "FPT/VNPT 18–30万盾/月": "FPT/VNPT 180–300k VND/mo",
    "FPT/Viettel/VNPT，约 18–28 万盾/月": "FPT/Viettel/VNPT, ≈180–280k VND/mo",
    "FPT/Viettel，约 18–28 万盾/月": "FPT/Viettel, ≈180–280k VND/mo",
    "FPT/Viettel 18–30万盾/月": "FPT/Viettel 180–300k VND/mo",
    "按工程节点分期，交房前≤70%，尾款5%至粉皮书": "Milestone installments, ≤70% pre-handover, 5% until Pink Book",
    "分期 30/30/30/10 或一次性": "30/30/30/10 installments or lump sum",
    "工程节点分期": "Milestone installments",
    "工程节点": "Milestones",
    "分期或一次性": "Installments or lump sum",
    "分期": "Installments",
    "分期 30/30/30/10": "30/30/30/10 installments",
    "30% 起": "from 30%",
    "5.5–5.7%（前6–12月）": "5.5–5.7% (first 6–12mo)",
    "5.5%（前12月）": "5.5% (first 12mo)",
    "5.5%（前5年）": "5.5% (first 5yrs)",
    "5.5%（前3年）": "5.5% (first 3yrs)",
    "3.99%起": "from 3.99%",
    "最高100%": "up to 100%",
    "最高90%": "up to 90%",
    "最高80%": "up to 80%",
    "最高75%": "up to 75%",
    "最长40年": "up to 40yrs",
    "最长35年": "up to 35yrs",
    "最长30年": "up to 30yrs",
    "最长25年": "up to 25yrs"
  };
  function txn(s) { return lang === 'zh' ? s : (PHRASE_EN[s] || s); }
  function fmt(n, d) {
    if (n == null) return '—';
    return n.toLocaleString('en-US', { maximumFractionDigits: d == null ? 0 : d });
  }
  function ccyName(c) { return { VND: '越南盾 VND', CNY: '人民币 CNY', USD: '美金 USD' }[c] || c; }
  function latestFx() { return D.fx.latest; }
  function convert(amount, from, to) {
    const { usdVnd, cnyVnd } = latestFx();
    const inVnd = from === 'VND' ? amount : from === 'USD' ? amount * usdVnd : amount * cnyVnd;
    return to === 'VND' ? inVnd : to === 'USD' ? inVnd / usdVnd : inVnd / cnyVnd;
  }

  /* ------------------------- 主题 / Theme ------------------------- */
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
    if (window.Chart) {
      Chart.defaults.color = theme === 'dark' ? '#e6e8ee' : '#333a48';
      Chart.defaults.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
    }
    Object.keys(charts).forEach(k => { if (charts[k]) { charts[k].destroy(); delete charts[k]; } });
    buildAllCharts();
    if (myMap) { swapMapTiles(); setTimeout(() => myMap.invalidateSize(), 250); }
  }
  function applyLang() {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang === 'vi' ? 'vi' : 'en');
    document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    renderStatic();
    applyTheme();
    renderDynamic();
    renderDrawer();
  }

  /* ------------------------- 静态文本 ------------------------- */
  function renderStatic() {
    document.title = t('appTitle');
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.getElementById('cutoff-text').textContent = t('dataCutoff') + ' ' + D.meta.lastUpdated + ' · ' + t('autoNote');
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
  }

  /* ------------------------- 动态渲染 ------------------------- */
  function renderDynamic() {
    document.getElementById('meta-updated').textContent = t('common.updated') + ' ' + (D.meta.lastUpdatedAt || D.meta.lastUpdated);
    document.getElementById('meta-asof').textContent = lang === 'zh' ? D.meta.dataAsOfZh : D.meta.dataAsOfEn;
    document.getElementById('disclaimer').textContent = lang === 'zh' ? D.meta.disclaimerZh : D.meta.disclaimerEn;
    document.getElementById('footer-tagline').textContent = t('footer.tagline');
    document.getElementById('sources-list').innerHTML = D.meta.sources.map(s =>
      '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + pick(s, 'zh', 'en') + '</a></li>').join('');

    document.getElementById('overview-insights').innerHTML = ['insight1','insight2','insight3'].map(k => '<li>' + t('overview.' + k) + '</li>').join('');
    document.getElementById('overview-links').innerHTML = sourceLinksHtml(['knightfrank', 'gso', 'imf']);
    document.getElementById('macro-notes').innerHTML = ['note1','note2','note3','note2026'].map(k => '<li>' + t('macro.' + k) + '</li>').join('');
    document.getElementById('macro-links').innerHTML = sourceLinksHtml(['gso', 'imf']);
    document.getElementById('cities-notes').innerHTML = ['note1','note2','note3'].map(k => '<li>' + t('cities.' + k) + '</li>').join('');
    const q2 = D.cities.q2_2026;
    document.getElementById('cities-milestone').innerHTML =
      (lang === 'zh' ? q2.noteZh : q2.noteEn) + ' <a href="' + q2.sourceUrl + '" target="_blank" rel="noopener">原文链接 →</a>';
    document.getElementById('cities-links').innerHTML = sourceLinksHtml(['knightfrank', 'cbre', 'savills']);
    document.getElementById('fx-note').innerHTML = (lang === 'zh' ? D.fx.noteZh : D.fx.noteEn) +
      '<div class="src-note">' + t('fx.sourceNote') + ' · <a href="' + D.fx.sourceUrl + '" target="_blank" rel="noopener">sbv.gov.vn →</a></div>';
    document.getElementById('map-metro-note').textContent = t('map.metroNote');
    document.getElementById('map-links').innerHTML = sourceLinksHtml(['laodong']);
    document.getElementById('banking-links').innerHTML =
      '<a href="' + D.banks.sourceUrl + '" target="_blank" rel="noopener">Vietnam Mortgage for Foreigners 2026（核实依据） →</a>';
    document.getElementById('own-contracts-note').innerHTML = whitepaperHtml();
    document.getElementById('own-lease').textContent = lang === 'zh' ? D.leaseReality.zh : D.leaseReality.en;

    const m = D.macro, y = m.years.length - 1;
    const mcSel = document.getElementById('macro-ccy');
    if (mcSel && mcSel.value !== macroCcy) mcSel.value = macroCcy;
    updateMacroStats();
    renderCityEconomy();
    renderFundsGuide();

    const w = D.cities.waveMeta;
    document.getElementById('wave-meta').innerHTML = (lang === 'zh' ? w.noteZh : w.noteEn) +
      ' · <b>' + (lang === 'zh' ? '数据截至' : 'Data as of') + ' ' + D.meta.lastUpdated + '</b>';

    renderPolicy(); renderNews(); renderHot(); renderDistricts(); renderProjects(); renderLaunches();
    renderQuota(); renderCases(); renderBanking(); renderBenefits(); renderOwnership();
    renderTaxes(); renderCertificates(); renderRents(); applyRentCcy();
    renderMetroLegend(); renderInsight();
    renderReform(); renderPrice10(); renderSegments(); renderFcmp(); renderTimeline();
    renderFxPanel();
  }

  function sourceLinksHtml(keys) {
    const map = {
      gso: { zh: 'GSO 国家统计局', en: 'GSO', url: 'https://www.gso.gov.vn' },
      imf: { zh: 'IMF WEO', en: 'IMF WEO', url: 'https://www.imf.org/en/Publications/WEO' },
      knightfrank: { zh: 'Knight Frank Q2 2026', en: 'Knight Frank Q2 2026', url: 'https://www.knightfrank.com.vn' },
      cbre: { zh: 'CBRE Vietnam', en: 'CBRE Vietnam', url: 'https://www.cbre.com.vn' },
      savills: { zh: 'Savills Vietnam', en: 'Savills Vietnam', url: 'https://www.savills.com.vn' },
      laodong: { zh: '老东报 · 地铁进度', en: 'Lao Dong · Metro', url: 'https://news.laodong.vn/xa-hoi/metro-tphcm-vao-giai-doan-but-toc-1692893.ldo' }
    };
    return '<div class="src-links">' + keys.map(k => {
      const s = map[k]; return '<a href="' + s.url + '" target="_blank" rel="noopener">🔗 ' + pick(s, 'zh', 'en') + '</a>';
    }).join('') + '</div>';
  }

  function whitepaperHtml() {
    return '<p>' + pick(D.whitepaper, 'descZh', 'descEn') + '</p>' +
      '<a class="btn-download" href="' + D.whitepaper.file + '" download>📄 ' + t('ownership.wpDownload') + '</a>';
  }

  /* ------------------------- 宏观（货币切换） ------------------------- */
  function fxConvert(yearIdx, vndAmount) {
    // 将 VND 金额换算为当前显示货币（按当年年均汇率）
    const usdVnd = D.fx.usdVndAnnual[yearIdx];
    if (macroCcy === 'VND') return vndAmount;
    const usd = vndAmount / usdVnd;
    return macroCcy === 'USD' ? usd : usd * D.fx.usdCnyRate[yearIdx];
  }
  function ccyUnitZh() { return macroCcy === 'USD' ? '$' : macroCcy === 'VND' ? '盾' : '¥'; }
  function updateMacroStats() {
    const m = D.macro, y = m.years.length - 1;
    const zh = lang === 'zh';
    document.getElementById('stat-growth').innerHTML = '<b>' + m.gdpGrowth[y] + '%</b> ' + m.years[y] + 'E';
    if (macroCcy === 'USD') {
      document.getElementById('stat-gdp').innerHTML = '<b>' + fmt(m.gdpUsd[y]) + '</b> ' + (zh ? '十亿美元/USD bn' : 'USD bn');
      document.getElementById('stat-income').innerHTML = '<b>$' + fmt(Math.round(m.incomePerCapita[y] * 1000 / D.fx.usdVndAnnual[y])) + '</b> ' + (zh ? '/月' : '/mo');
      document.getElementById('stat-wage').innerHTML = '<b>$' + fmt(Math.round(m.avgWage[y] * 1e6 / D.fx.usdVndAnnual[y])) + '</b> ' + (zh ? '/月' : '/mo');
    } else if (macroCcy === 'VND') {
      document.getElementById('stat-gdp').innerHTML = '<b>' + fmt(Math.round(m.gdpUsd[y] * D.fx.usdVndAnnual[y] / 1000)) + '</b> ' + (zh ? '万亿盾/trn VND' : 'trn VND');
      document.getElementById('stat-income').innerHTML = '<b>' + fmt(m.incomePerCapita[y]) + '</b> ' + (zh ? '千盾/月' : "VND 'k/mo");
      document.getElementById('stat-wage').innerHTML = '<b>' + m.avgWage[y] + '</b> ' + (zh ? '百万盾/月' : 'VND mn/mo');
    } else {
      document.getElementById('stat-gdp').innerHTML = '<b>' + fmt(Math.round(m.gdpUsd[y] * D.fx.usdCnyRate[y] * 10) / 10) + '</b> ' + (zh ? '万亿元/trn CNY' : 'trn CNY');
      const inc = Math.round(m.incomePerCapita[y] * 1000 * D.fx.usdCnyRate[y] / D.fx.usdVndAnnual[y]);
      const wg = Math.round(m.avgWage[y] * 1e6 * D.fx.usdCnyRate[y] / D.fx.usdVndAnnual[y]);
      document.getElementById('stat-income').innerHTML = '<b>' + fmt(inc) + '</b> ' + (zh ? '元/月' : 'CNY/mo');
      document.getElementById('stat-wage').innerHTML = '<b>' + (wg / 10000).toFixed(1) + '</b> ' + (zh ? '万元/月' : '×10k CNY/mo');
    }
  }
  function renderCityEconomy() {
    const ce = D.macro.cityEconomy;
    const zh = lang === 'zh';
    const card = (key, title) => {
      const c = ce[key];
      return '<div class="cs-row"><span>' + t('macro.grdpCol') + ' (' + c.asOf + ')</span><b>' +
        (macroCcy === 'USD' ? '$' + c.gdpUsdBn + 'bn' : macroCcy === 'VND' ? '$' + c.gdpUsdBn + 'bn (≈' + fmt(Math.round(c.gdpUsdBn * D.meta.fxRate / 1000)) + ' ' + (zh ? '万亿盾' : 'trn VND') + ')' : '$' + c.gdpUsdBn + 'bn (≈' + (c.gdpUsdBn * D.meta.usdCny).toFixed(1) + ' ' + (zh ? '万亿元' : 'trn CNY') + ')') +
        '</b></div>' +
        '<div class="cs-row"><span>' + t('macro.growthCol') + '</span><b>' + c.growth + '%</b></div>' +
        '<div class="cs-row"><span>' + t('macro.perCapitaCol') + '</span><b>' + (macroCcy === 'CNY' ? '¥' + fmt(Math.round(c.perCapitaUsd * D.meta.usdCny)) : '$' + fmt(c.perCapitaUsd)) + '</b></div>' +
        '<div class="cs-row"><span>' + (zh ? '居民可支配收入' : 'Disposable income') + '</span><b>' + (zh ? c.disposableZh : c.disposableEn) + '</b></div>' +
        '<div class="cs-row"><span>' + (zh ? '本科及以上工资' : 'Graduate salary') + '</span><b>' + (zh ? c.salaryZh : c.salaryEn) + '</b></div>' +
        '<div class="cs-note">' + (zh ? c.salaryNoteZh : c.salaryNoteEn) + '</div>' +
        '<div class="cs-note">' + (zh ? c.noteZh : c.noteEn) + '</div>';
    };
    document.getElementById('city-hcmc').innerHTML = card('hcmc', t('macro.hcmcTitle'));
    document.getElementById('city-hanoi').innerHTML = card('hanoi', t('macro.hanoiTitle'));
  }
  function renderFundsGuide() {
    document.getElementById('funds-title').textContent = t('funds.title');
    const steps = lang === 'zh' ? D.fundsGuide.stepsZh : D.fundsGuide.stepsEn;
    document.getElementById('funds-steps').innerHTML = steps.map(s => '<li>' + s + '</li>').join('');
  }
  function buildMacroCharts() {
    if (!window.Chart) return;
    const zh = lang === 'zh';
    const yrs = D.macro.years.map(String);
    const gdpLabel = macroCcy === 'USD' ? (zh ? 'GDP（十亿美元）' : 'GDP (USD bn)')
      : macroCcy === 'VND' ? (zh ? 'GDP（万亿盾）' : 'GDP (trn VND)')
      : (zh ? 'GDP（万亿元）' : 'GDP (trn CNY)');
    const incLabel = macroCcy === 'USD' ? (zh ? 'USD/月' : 'USD/mo')
      : macroCcy === 'VND' ? (zh ? '千盾/月' : "VND 'k/mo") : (zh ? '元/月' : 'CNY/mo');
    const gdpData = D.macro.gdpUsd.map((v, i) => macroCcy === 'USD' ? v
      : macroCcy === 'VND' ? +(v * D.fx.usdVndAnnual[i] / 1000).toFixed(2)
      : +(v * D.fx.usdCnyRate[i] / 1000).toFixed(2));
    const incData = D.macro.incomePerCapita.map((v, i) => +(fxConvert(i, v * 1000)).toFixed(0));
    const urbData = D.macro.incomeUrban.map((v, i) => +(fxConvert(i, v * 1000)).toFixed(0));
    const wageData = D.macro.avgWage.map((v, i) => +(fxConvert(i, v * 1e6)).toFixed(0));
    if (charts.gdp) charts.gdp.destroy();
    charts.gdp = new Chart(document.getElementById('chart-gdp'), {
      type: 'bar',
      data: { labels: yrs, datasets: [
        { type: 'bar', label: gdpLabel, data: gdpData, backgroundColor: PALETTE.blue + 'cc', borderRadius: 6 },
        { type: 'line', label: t('macro.gdpGrowth'), data: D.macro.gdpGrowth, borderColor: PALETTE.orange, yAxisID: 'y1', tension: 0.3, borderWidth: 3, pointRadius: 4 }
      ]},
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } }, y: { title: { display: true, text: gdpLabel }, grid: { color: 'rgba(128,128,128,0.12)' } },
          y1: { position: 'right', title: { display: true, text: '%' }, beginAtZero: true, grid: { drawOnChartArea: false } } } }
    });
    if (charts.income) charts.income.destroy();
    charts.income = new Chart(document.getElementById('chart-income'), {
      type: 'bar',
      data: { labels: yrs, datasets: [
        { label: t('macro.incomeNat'), data: incData, backgroundColor: PALETTE.teal + 'cc', borderRadius: 6 },
        { label: t('macro.incomeUrban'), data: urbData, backgroundColor: PALETTE.purple + 'cc', borderRadius: 6 },
        { type: 'line', label: t('macro.wage'), data: wageData, borderColor: PALETTE.red, yAxisID: 'y1', tension: 0.3, borderWidth: 3, pointRadius: 4 }
      ]},
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } }, y: { title: { display: true, text: incLabel }, grid: { color: 'rgba(128,128,128,0.12)' } },
          y1: { position: 'right', title: { display: true, text: incLabel }, grid: { drawOnChartArea: false } } } }
    });
  }

  /* ------------------------- 汇率面板 ------------------------- */
  function renderFxPanel() {
    const sel = document.getElementById('fx-base');
    if (sel && sel.value !== baseCcy) sel.value = baseCcy;
    const bs = document.getElementById('fx-baseline');
    if (bs && bs.value !== String(baseYear)) bs.value = String(baseYear);
    const l = latestFx();
    document.getElementById('fx-rates-now').innerHTML =
      '<span>1 USD = <b>' + fmt(l.usdVnd) + '</b> VND</span><span>1 CNY = <b>' + fmt(l.cnyVnd) + '</b> VND</span><span>1 USD = <b>' + (l.usdVnd / l.cnyVnd).toFixed(4) + '</b> CNY</span>';
    doConvert();
    renderFxCrossNote();
  }
  function doConvert() {
    const amt = parseFloat(document.getElementById('fx-amount').value) || 0;
    const from = document.getElementById('fx-from').value;
    const to = document.getElementById('fx-to').value;
    const r = convert(amt, from, to);
    document.getElementById('fx-result').textContent = fmt(r, 2) + ' ' + to;
    document.getElementById('fx-rate-line').textContent = '1 ' + from + ' = ' + (convert(1, from, to).toFixed(4)) + ' ' + to;
  }

  /* ------------------------- 政策 ------------------------- */
  function renderPolicy() {
    document.getElementById('policy-body').innerHTML = D.policy.map(p => `
      <tr>
        <td data-label="${t('policy.date')}">${p.date}</td>
        <td data-label="${t('policy.effective')}">${p.effective}</td>
        <td data-label="${t('policy.category')}"><span class="chip">${p.category}</span></td>
        <td data-label="${t('policy.titleCol')}" class="td-title"><b>${pick(p,'titleZh','titleEn')}</b></td>
        <td data-label="${t('policy.keyPoint')}" class="td-muted">${pick(p,'keyZh','keyEn')}</td>
        <td data-label="${t('policy.status')}"><span class="chip chip-ok">${pick(p,'statusZh','statusEn')}</span></td>
        <td data-label="${t('policy.official')}">${p.links.map(l => '<a class="mini-link" href="' + l.url + '" target="_blank" rel="noopener">' + pick(l,'zh','en') + ' ↗</a>').join('<br>')}</td>
      </tr>`).join('');
  }

  /* ------------------------- 动态消息 ------------------------- */
  function renderNews() {
    const rows = D.newsFeed.map(n => `
      <tr>
        <td data-label="${t('news.date')}">${n.date}</td>
        <td data-label="${t('news.tag')}"><span class="chip chip-${n.tagClass}">${n.tag}</span></td>
        <td data-label="${t('news.content')}">${pick(n,'zh','en')}</td>
        <td data-label="${t('news.src')}"><a class="mini-link" href="${n.src}" target="_blank" rel="noopener">↗</a></td>
      </tr>`).join('');
    document.getElementById('news-body').innerHTML = rows;
    document.getElementById('drawer-body').innerHTML = D.newsFeed.map(n => `
      <div class="news-item">
        <div class="news-meta"><span class="chip chip-${n.tagClass}">${n.tag}</span><span class="news-date">${n.date}</span></div>
        <div class="news-text">${pick(n,'zh','en')}</div>
        <a class="mini-link" href="${n.src}" target="_blank" rel="noopener">来源/Source ↗</a>
      </div>`).join('');
  }

  /* ------------------------- 热议话题 ------------------------- */
  function renderHot() {
    const box = document.getElementById('hot-grid');
    const asof = document.getElementById('hot-asof');
    if (!box) return;
    const list = D.hotTopics || [];
    if (!list.length) {
      box.innerHTML = '<div class="card"><p class="note-text">' + t('hot.empty') + '</p></div>';
      if (asof) asof.textContent = '';
      return;
    }
    const srcLabel = n => n.indexOf('news.google.com') >= 0 ? (lang === 'zh' ? 'Google 新闻' : 'Google News') : n;
    box.innerHTML = list.map(h => {
      const title = lang === 'zh' ? (h.titleZh || h.vi || h.titleEn)
        : lang === 'vi' ? (h.vi || h.titleEn || h.titleZh)
          : (h.titleEn || h.titleZh || h.vi);
      const body = lang === 'zh' ? (h.zh || h.vi || h.en)
        : lang === 'vi' ? (h.vi || h.titleEn || h.zh)
          : (h.en || h.titleEn || h.zh);
      const rel = (h.related || []).map(r =>
        '<a class="mini-link" href="' + r.u + '" target="_blank" rel="noopener">' + srcLabel(r.n) + ' ↗</a>').join(' ');
      return `<article class="hot-card">
        <div class="hot-top">
          <span class="hot-rank">#${h.rank}</span>
          <span class="chip chip-${h.tagClass}">${h.tag}</span>
          <span class="hot-date">${h.date}</span>
        </div>
        <h3 class="hot-title">${title}</h3>
        <p class="hot-body">${body}</p>
        <div class="hot-heat"><div class="hot-bar"><i style="width:${Math.max(8, Math.min(100, h.heat))}%"></i></div><b>${h.heat}</b></div>
        <div class="hot-foot">
          <span class="td-muted">${h.coverage || 1} ${t('hot.coverage')}</span>
          <a class="mini-link" href="${h.src}" target="_blank" rel="noopener">${t('hot.src')} · ${srcLabel(h.srcName || '')} ↗</a>
        </div>
        ${rel ? '<div class="hot-rel"><span class="td-muted">' + t('hot.related') + '：</span>' + rel + '</div>' : ''}
      </article>`;
    }).join('');
    if (asof) {
      const raw = list.some(h => h.raw);
      asof.textContent = t('hot.asOf') + ' ' + (D.meta.lastUpdatedAt || D.meta.lastUpdated)
        + ' · ' + t('hot.autoNote') + (raw ? ' ' + t('hot.rawNote') : '');
    }
  }

  /* ------------------------- 改革十年 ------------------------- */
  function renderReform() {
    const box = document.getElementById('reform-timeline');
    const span = document.getElementById('reform-span');
    const note = document.getElementById('reform-note');
    const R = D.reforms;
    if (!R || !box) return;
    if (span) span.innerHTML = '<b>' + t('reform.spanLabel') + '：</b>' + (lang === 'zh' ? R.spanZh : R.spanEn);
    if (note) note.innerHTML = lang === 'zh' ? R.noteZh : R.noteEn;
    box.innerHTML = (R.items || []).map(it => {
      const title = lang === 'zh' ? it.titleZh : it.titleEn;
      const desc = lang === 'zh' ? it.descZh : it.descEn;
      const tag = lang === 'zh' ? it.tagZh : it.tagEn;
      const date = lang === 'zh' ? it.dateZh : it.dateEn;
      return `<div class="rf-item">
        <div class="rf-dot"></div>
        <div class="rf-head">
          <span class="rf-year">${it.year}</span>
          <span class="chip chip-${it.tagClass}">${tag}</span>
          <span class="rf-date">${date}</span>
        </div>
        <h3 class="rf-title">${title}</h3>
        <p class="rf-desc">${desc}</p>
        ${it.link ? '<a class="mini-link" href="' + it.link + '" target="_blank" rel="noopener">' + t('reform.src') + ' ↗</a>' : ''}
      </div>`;
    }).join('');
  }

  /* ------------------------- 十年房价 ------------------------- */
  function renderPrice10() {
    const P = D.price10y;
    const body = document.getElementById('price10-body');
    if (!P || !body) return;
    const natUsd = P.nationalVndM.map((m, i) => Math.round(m * 1000000 / P.fxUsdVnd[i]));
    body.innerHTML = P.years.map((y, i) => {
      const gap = (P.hanoiUsd[i] / P.hcmcUsd[i] - 1) * 100;
      const gapCls = gap >= 0 ? 'chip-ok' : 'chip-mid';
      return `<tr>
        <td data-label="${t('price10.year')}"><b>${y}</b></td>
        <td data-label="${t('price10.fx')}">${fmt(P.fxUsdVnd[i])}</td>
        <td data-label="${t('price10.natVnd')}">${P.nationalVndM[i]}</td>
        <td data-label="${t('price10.natUsd')}">${fmt(natUsd[i])}</td>
        <td data-label="${t('price10.hcmc')}"><b>${fmt(P.hcmcUsd[i])}</b></td>
        <td data-label="${t('price10.hanoi')}"><b>${fmt(P.hanoiUsd[i])}</b></td>
        <td data-label="${t('price10.gap')}"><span class="chip ${gapCls}">${gap >= 0 ? '+' : ''}${gap.toFixed(1)}%</span></td>
      </tr>`;
    }).join('');
    const cal = document.getElementById('price10-caliber');
    if (cal) cal.innerHTML = '<b>' + t('price10.caliberLabel') + '：</b>' + (lang === 'zh' ? P.caliberZh : P.caliberEn);
    const ins = document.getElementById('price10-insight');
    if (ins) ins.innerHTML = lang === 'zh' ? P.insightZh : P.insightEn;
  }

  function buildPrice10Chart() {
    const cv = document.getElementById('chart-price10');
    if (!cv || !window.Chart) return;
    if (charts.price10) charts.price10.destroy();
    const P = D.price10y;
    const zh = lang === 'zh';
    const natUsd = P.nationalVndM.map((m, i) => Math.round(m * 1000000 / P.fxUsdVnd[i]));
    charts.price10 = new Chart(cv, {
      type: 'line',
      data: {
        labels: P.years.map(String),
        datasets: [
          { label: zh ? '全国（估算）' : 'National (est)', data: natUsd, borderColor: PALETTE.teal, borderWidth: 2, borderDash: [6, 4], tension: 0.3, pointRadius: 3 },
          { label: zh ? '胡志明' : 'HCMC', data: P.hcmcUsd, borderColor: PALETTE.red, borderWidth: 3, tension: 0.3, pointRadius: 4 },
          { label: zh ? '河内' : 'Hanoi', data: P.hanoiUsd, borderColor: PALETTE.blue, borderWidth: 3, tension: 0.3, pointRadius: 4 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: {
          x: { grid: { display: false } },
          y: { title: { display: true, text: 'USD/㎡' }, grid: { color: 'rgba(128,128,128,0.12)' } }
        }
      }
    });
  }

  /* ------------------------- 房产分档 ------------------------- */
  function renderSegments() {
    const S = D.segments;
    const grid = document.getElementById('seg-grid');
    if (!S || !grid) return;
    document.getElementById('segments-note').innerHTML = lang === 'zh' ? S.noteZh : S.noteEn;
    const zh = lang === 'zh';
    grid.innerHTML = (S.tiers || []).map(tier => {
      const row = (labelKey, val) => '<div class="seg-row"><span class="sr-k">' + t(labelKey) + '</span><span class="sr-v">' + val + '</span></div>';
      return `<div class="seg-card seg-${tier.key}">
        <h3 class="seg-name">${zh ? tier.nameZh : tier.nameEn}</h3>
        ${row('segments.labelPrice', zh ? tier.priceZh : tier.priceEn)}
        ${row('segments.labelArea', zh ? tier.areaZh : tier.areaEn)}
        ${row('segments.labelTotal', zh ? tier.totalZh : tier.totalEn)}
        ${row('segments.labelRent', zh ? tier.rentZh : tier.rentEn)}
        <div class="seg-block"><b>${t('segments.labelBuyer')}</b><p>${zh ? tier.buyerZh : tier.buyerEn}</p></div>
        <div class="seg-block"><b>${t('segments.labelProj')}</b><p>${zh ? tier.projZh : tier.projEn}</p></div>
      </div>`;
    }).join('');
    document.getElementById('seg-afford').innerHTML = lang === 'zh' ? S.affordabilityZh : S.affordabilityEn;
    document.getElementById('seg-social').innerHTML = lang === 'zh' ? S.socialNoteZh : S.socialNoteEn;
    document.getElementById('seg-sources').textContent = t('common.sources') + ' · ' + (lang === 'zh' ? S.sourcesZh : S.sourcesEn);
  }

  /* ------------------------- 外籍购房对比 + 时间轴 ------------------------- */
  function renderFcmp() {
    const F = D.foreignCompare;
    const body = document.getElementById('fcmp-body');
    if (!F || !body) return;
    const zh = lang === 'zh';
    body.innerHTML = (F.rows || []).map(r => `<tr>
      <td data-label="${t('fcmp.dim')}"><b>${zh ? r.dimZh : r.dimEn}</b></td>
      <td data-label="${t('fcmp.vn')}">${zh ? r.vnZh : r.vnEn}</td>
      <td data-label="${t('fcmp.cn')}">${zh ? r.cnZh : r.cnEn}</td>
    </tr>`).join('');
    document.getElementById('fcmp-verdict').innerHTML = zh ? F.verdictZh : F.verdictEn;
  }

  function buildTimelineChart() {
    const cv = document.getElementById('chart-timeline');
    if (!cv || !window.Chart) return;
    if (charts.timeline) charts.timeline.destroy();
    const L = D.foreignCompare.timeline;
    const zh = lang === 'zh';
    charts.timeline = new Chart(cv, {
      type: 'bar',
      data: {
        labels: L.years.map(String),
        datasets: [
          { type: 'bar', label: zh ? 'FDI 到位 (US$bn)' : 'FDI disbursed (US$bn)', data: L.fdiDisbursed, backgroundColor: 'rgba(59,130,246,0.35)', borderColor: PALETTE.blue, borderWidth: 1, yAxisID: 'y', order: 3 },
          { type: 'line', label: zh ? '胡志明 (USD/㎡)' : 'HCMC (USD/sqm)', data: L.hcmcUsd, borderColor: PALETTE.red, borderWidth: 3, tension: 0.3, pointRadius: 3, yAxisID: 'y1' },
          { type: 'line', label: zh ? '河内 (USD/㎡)' : 'Hanoi (USD/sqm)', data: L.hanoiUsd, borderColor: PALETTE.purple, borderWidth: 3, tension: 0.3, pointRadius: 3, yAxisID: 'y1' },
          { type: 'line', label: 'USD/VND', data: L.fxUsdVnd, borderColor: PALETTE.gold, borderWidth: 2, borderDash: [6, 4], tension: 0.3, pointRadius: 3, yAxisID: 'y2' }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: {
          x: { grid: { display: false } },
          y: { display: false },
          y1: { position: 'left', title: { display: true, text: 'USD/㎡' }, grid: { color: 'rgba(128,128,128,0.12)' } },
          y2: { position: 'right', title: { display: true, text: 'USD/VND' }, grid: { drawOnChartArea: false } }
        }
      }
    });
  }

  let tlYear = 2026;
  function renderTimeline() {
    const L = D.foreignCompare.timeline;
    const yearsBox = document.getElementById('tl-years');
    const detail = document.getElementById('tl-detail');
    if (!L || !yearsBox) return;
    const zh = lang === 'zh';
    if (!L.years.includes(tlYear)) tlYear = L.years[L.years.length - 1];
    yearsBox.innerHTML = L.years.map(y =>
      '<button class="tl-y' + (y === tlYear ? ' on' : '') + '" data-y="' + y + '">' + y + '</button>').join('');
    const d = L.yearly[String(tlYear)] || {};
    const card = (icon, labelKey, val) =>
      '<div class="tl-card"><div class="tl-k">' + icon + ' ' + t(labelKey) + '</div><div class="tl-v">' + val + '</div></div>';
    detail.innerHTML =
      card('🏭', 'tl.fdi', zh ? d.fdiZh : d.fdiEn) +
      card('💱', 'tl.fx', zh ? d.fxZh : d.fxEn) +
      card('📜', 'tl.policy', zh ? d.polZh : d.polEn) +
      card('🌐', 'tl.tariff', zh ? d.tarZh : d.tarEn);
    document.getElementById('tl-note').innerHTML = zh ? L.noteZh : L.noteEn;
    document.getElementById('tl-source').textContent = t('common.sources') + ' · ' + (zh ? L.sourceZh : L.sourceEn);
  }

  /* ------------------------- 分区 ------------------------- */
  function housingMetaOf(name, nameEn) {
    const by = D.housingMeta.byProject;
    const key = Object.keys(by).find(k => name === k || nameEn === k || name.indexOf(k) === 0 || nameEn.indexOf(k) === 0 || k.indexOf(nameEn) === 0 || k.indexOf(name) === 0);
    const hit = key ? by[key] : null;
    const gas = hit ? (lang === 'zh' ? hit.gasZh : hit.gasEn) : (lang === 'zh' ? D.housingMeta.defaultGasZh : D.housingMeta.defaultGasEn);
    const housing = lang === 'zh' ? '商业住宅 ✓ 外籍可购' : 'Commercial ✓ foreigner-eligible';
    return { housing, gas };
  }

  function unitChips(d) {
    if (!d.unitsBreakdown || !d.unitsBreakdown.length) return '<span class="td-muted">' + pick(d, 'typeZh', 'typeEn') + '</span>';
    return d.unitsBreakdown.map((u, i) =>
      '<span class="unit-chip" data-p="' + encodeURIComponent(d.nameEn || d.name) + '" data-i="' + i + '">' + pick(u, 'type', 'typeEn') + '</span>').join('');
  }
  function districtRow(d, hanoi) {
    const hm = housingMetaOf(d.name, d.nameEn);
    const housingCell = hanoi ? '' : '<td data-label="' + t('districts.housing') + '" class="td-muted">' + hm.housing + '</td>';
    const gasCell = hanoi ? '' : '<td data-label="' + t('districts.gas') + '" class="td-muted">' + hm.gas + '</td>';
    const internetCell = hanoi ? '' : '<td data-label="' + t('common.internet') + '" class="td-muted">' + txn(d.internet) + '</td>';
    return `
    <tr>
      <td data-label="${t('districts.district')}"><b>${pick(d,'district','districtEn')}</b></td>
      <td data-label="${t('districts.project')}"><a href="${d.link}" target="_blank" rel="noopener" class="proj-link">${pick(d,'name','nameEn')} ↗</a></td>
      <td data-label="${t('districts.developer')}" class="td-muted">${pick(d,'developerZh','developerEn') || '—'}</td>
      <td data-label="${t('districts.year')}">${d.year}</td>
      <td data-label="${t('districts.price')}"><b>${fmt(d.priceLow)}–${fmt(d.priceHigh)}</b> ${d.priceUnit}<div class="td-muted">${pick(d,'priceNoteZh','priceNoteEn') || ''}</div></td>
      <td data-label="${t('districts.priceNow')}" class="td-muted">${d.currentPrice || '—'}</td>
      <td data-label="${t('districts.area')}">${d.area}</td>
      <td data-label="${t('districts.type')}">${unitChips(d)}</td>
      ${housingCell}
      ${gasCell}
      <td data-label="${t('districts.foreign')}">${d.foreignOk ? '✅' : '—'}</td>
      <td data-label="${t('districts.launch')}">${d.launch}</td>
      <td data-label="${t('districts.units')}">${fmt(d.units)}</td>
      <td data-label="${t('common.mgmtFee')}" class="td-muted">${txn(d.mgmtFee)}</td>
      ${internetCell}
      <td data-label="${t('common.down')}" class="td-muted">${txn(d.down)}<br><span class="td-muted">${txn(d.payment)}</span></td>
    </tr>`;
  }

  function renderDistricts() {
    document.getElementById('districts-body').innerHTML = D.hcmcDistricts.map(d => districtRow(d, false)).join('');
    document.getElementById('districts-note').textContent = lang === 'zh' ? D.hcmcDistrictsNoteZh : D.hcmcDistrictsNoteEn;
    document.getElementById('hanoi-districts-body').innerHTML = D.hanoiDistricts.map(d => districtRow(d, true)).join('');
    document.getElementById('hanoi-districts-note').textContent = lang === 'zh' ? D.hcmcDistrictsNoteZh : D.hcmcDistrictsNoteEn;
    // 绑定户型点击
    document.querySelectorAll('.unit-chip').forEach(ch => {
      ch.addEventListener('click', () => openUnitModal(decodeURIComponent(ch.dataset.p), parseInt(ch.dataset.i, 10)));
    });
  }

  /* 户型示意 SVG（非官方比例，仅供示意） */
  function floorPlanSvg(typeZh) {
    const t = typeZh || '';
    const n = (t.indexOf('3') >= 0 || t.indexOf('别墅') >= 0 || t.indexOf('复式') >= 0 || t.indexOf('总统') >= 0 || t.indexOf('顶复') >= 0) ? 3
      : (t.indexOf('2') >= 0 ? 2 : (t.indexOf('1') >= 0 ? 1 : 0));
    const rooms = [];
    if (n === 0) rooms.push(['开放空间', '50', '20', '250', '110', '#cfe3ff']);
    else rooms.push(['客厅', '50', '20', '170', '110', '#d7e7ff']);
    const bedColors = ['#ffe3d0', '#ffedc9', '#f5d8e8'];
    const bedAreas = n === 1 ? [[225, 20, 95, 110]] : n === 2 ? [[225, 20, 95, 52], [225, 78, 95, 52]] : [[180, 135, 140, 45], [225, 20, 95, 52], [225, 78, 95, 52]];
    for (let i = 0; i < n; i++) {
      const a = bedAreas[i]; rooms.push(['卧室' + (i + 1), a[0], a[1], a[2], a[3], bedColors[i % 3]]);
    }
    if (n === 0) rooms.push(['卫浴', '210', '135', '60', '45', '#d6f3e3']);
    else if (n === 1) rooms.push(['厨房', '50', '135', '85', '45', '#f1e6d6'], ['卫浴', '140', '135', '60', '45', '#d6f3e3']);
    else rooms.push(['厨房', '50', '135', '70', '45', '#f1e6d6'], ['卫浴', '125', '135', '50', '45', '#d6f3e3']);
    const rects = rooms.map(r =>
      '<rect x="' + r[1] + '" y="' + r[2] + '" width="' + r[3] + '" height="' + r[4] + '" rx="6" fill="' + r[5] + '" stroke="#c4ccd8" stroke-width="1.2"/>' +
      '<text x="' + (r[1] + r[3] / 2) + '" y="' + (r[2] + r[4] / 2 + 4) + '" text-anchor="middle" font-size="13" font-family="PingFang SC, Microsoft YaHei, sans-serif" fill="#3a4557">' + r[0] + '</text>').join('');
    return '<svg viewBox="0 0 330 200" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="6" y="6" width="318" height="188" rx="10" fill="none" stroke="#9aa5b5" stroke-width="2"/>' +
      '<rect x="14" y="14" width="302" height="172" rx="6" fill="#f7f9fc" stroke="#d5dbe6" stroke-width="1"/>' +
      rects + '</svg>';
  }

  function openUnitModal(projName, idx) {
    const list = D.hcmcDistricts.concat(D.hanoiDistricts);
    const d = list.find(p => (p.nameEn || p.name) === projName);
    if (!d || !d.unitsBreakdown || !d.unitsBreakdown[idx]) return;
    const u = d.unitsBreakdown[idx];
    const zh = lang === 'zh';
    const official = d.link;
    document.getElementById('unit-title').textContent = pick(d, 'name', 'nameEn') + ' · ' + pick(u, 'type', 'typeEn');
    document.getElementById('unit-body').innerHTML =
      '<div class="fp-grid">' +
        '<div class="fp-svg">' + floorPlanSvg(pick(u, 'type', 'typeEn')) + '</div>' +
        '<div class="fp-meta">' +
          '<div><b>' + t('unit.area') + '</b>：' + u.area + '</div>' +
          '<div><b>' + t('unit.price') + '</b>：' + u.price + ' USD/㎡</div>' +
          '<div><b>' + t('unit.total') + '</b>：' + (zh ? u.totalZh : u.totalEn) + '</div>' +
          '<div><b>' + t('common.down') + '</b>：' + txn(d.down) + '</div>' +
          '<div><b>' + t('common.mgmtFee') + '</b>：' + txn(d.mgmtFee) + '</div>' +
          (d.currentPrice ? '<div><b>' + t('districts.priceNow') + '</b>：' + d.currentPrice + '</div>' : '') +
          '<a class="mini-link" href="' + official + '" target="_blank" rel="noopener">🔗 ' + t('unit.official') + ' ↗</a>' +
        '</div>' +
      '</div>' +
      '<p class="fp-note">' + (zh ? '示意图非官方比例，仅供户型结构参考；面积/单价/总价为开盘估算区间，以开发商售楼处为准。' : 'Schematic is not to scale — for layout reference only; area/price are launch estimates, confirm with the sales gallery.') + '</p>';
    document.getElementById('unit-modal').classList.add('open');
  }
  function closeUnitModal() { document.getElementById('unit-modal').classList.remove('open'); }

  /* ------------------------- 楼盘库（含 sparkline）------------------------- */
  function renderProjects() {
    document.getElementById('projects-body').innerHTML = D.projects.map((p, i) => {
      const q = p.quota; const pct = Math.round(q.foreignSold / q.total * 1000) / 10;
      const remain = q.total * 0.3 - q.foreignSold;
      const hm = housingMetaOf(p.name, p.nameEn);
      return `
      <tr>
        <td data-label="${t('projects.name')}"><a href="${p.link}" target="_blank" rel="noopener" class="proj-link">${pick(p,'name','nameEn')} ↗</a>
          <div class="tag-row">${pick(p.tags,'zh','en').map(x => '<span class="chip">' + x + '</span>').join('')}</div>
        </td>
        <td data-label="${t('projects.district')}">${pick(p,'district','districtEn')}</td>
        <td data-label="${t('projects.segment')}"><span class="chip">${pick(p,'segment','segmentEn')}</span></td>
        <td data-label="${t('districts.housing')}" class="td-muted">${hm.housing}</td>
        <td data-label="${t('districts.gas')}" class="td-muted">${hm.gas}</td>
        <td data-label="${t('projects.trend')}"><canvas class="spark" id="spark-${i}" width="110" height="34"></canvas>
          <div class="spark-cap">${fmt(p.priceLow)}–${fmt(p.priceHigh)}</div></td>
        <td data-label="${t('projects.quota')}">
          <div class="qbar"><div class="qbar-fill" style="width:${pct}%;background:${pct >= 27 ? 'var(--no)' : 'var(--ok)'}"></div></div>
          <div class="td-muted">${pct}% · ${lang === 'zh' ? '余≈' : '≈'}${fmt(Math.max(0, remain))}${lang === 'zh' ? '套' : ' left'}</div>
        </td>
        <td data-label="${t('common.mgmtFee')}" class="td-muted">${txn(p.mgmtFee)}</td>
        <td data-label="${t('common.internet')}" class="td-muted">${txn(p.internet)}</td>
        <td data-label="${t('common.down')}" class="td-muted">${txn(p.down)}<br>${txn(p.payment)}</td>
        <td data-label="${t('projects.yieldCol')}">${p.rentYield}</td>
      </tr>`;
    }).join('');
    document.querySelectorAll('.spark').forEach(cv => drawSpark(cv));
  }
  function drawSpark(cv) {
    const i = parseInt(cv.id.split('-')[1], 10);
    const hist = D.projects[i].priceHistory;
    const years = Object.keys(hist).sort();
    const vals = years.map(y => hist[y]);
    const ctx = cv.getContext('2d');
    const w = cv.width, h = cv.height, pad = 4;
    const min = Math.min(...vals), max = Math.max(...vals), rng = (max - min) || 1;
    const cs = getComputedStyle(document.documentElement);
    const color = cs.getPropertyValue('--accent').trim() || '#e5484d';
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = color; ctx.lineWidth = 1.8; ctx.beginPath();
    vals.forEach((v, j) => {
      const x = pad + (w - pad * 2) * (j / (vals.length - 1));
      const yy = h - pad - (h - pad * 2) * ((v - min) / rng);
      j === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
    });
    ctx.stroke();
    const lx = pad + (w - pad * 2), ly = h - pad - (h - pad * 2) * ((vals[vals.length - 1] - min) / rng);
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(lx, ly, 2.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = cs.getPropertyValue('--text-3').trim();
    ctx.font = '8px sans-serif'; ctx.fillText('→ ' + fmt(vals[vals.length - 1]), lx - 34, ly - 4);
  }

  /* ------------------------- 新盘 ------------------------- */
  function devBadge(type) {
    if (type === 'local') return '<span class="chip chip-local">' + (lang === 'zh' ? '本土' : 'Local') + '</span>';
    if (type === 'foreign') return '<span class="chip chip-foreign">' + (lang === 'zh' ? '外资' : 'Foreign') + '</span>';
    if (type === 'jv') return '<span class="chip chip-jv">' + (lang === 'zh' ? '合资' : 'JV') + '</span>';
    return '<span class="chip">TBC</span>';
  }

  function renderLaunches() {
    const zh = lang === 'zh';
    document.getElementById('launches-body').innerHTML = D.newLaunches.map(n => {
      const saleCell = n.priceNow ? '<span class="td-muted">' + n.priceNow + '</span>'
        : (n.saleTimeZh ? '<span class="td-muted">' + pick(n,'saleTimeZh','saleTimeEn') + '</span>' : '—');
      return `
      <tr>
        <td data-label="${t('launches.name')}"><b>${pick(n,'name','nameEn')}</b></td>
        <td data-label="${t('launches.developer')}">${devBadge(n.devType)}<div class="td-muted">${pick(n,'developer','developerEn')}</div></td>
        <td data-label="${t('launches.city')}">${pick(n,'city','cityEn')}<div class="td-muted">${pick(n,'district','districtEn') || ''}</div></td>
        <td data-label="${t('launches.launch')}">${n.launch}</td>
        <td data-label="${t('launches.price')}">≈${fmt(n.price)} ${n.unit}</td>
        <td data-label="${t('launches.priceNow')}">${saleCell}</td>
        <td data-label="${t('launches.unitsCol')}">${pick(n,'unitsShortZh','unitsShortEn')}</td>
        <td data-label="${t('launches.foreign')}">${n.foreignOk ? '✅' : '—'}</td>
        <td data-label="${t('launches.status')}"><span class="chip ${n.statusZh === '在售' ? 'chip-ok' : 'chip-mid'}">${pick(n,'statusZh','statusEn')}</span></td>
        <td data-label="${t('launches.mapCol')}"><a class="mini-link" href="${n.gmaps}" target="_blank" rel="noopener">📍 ${zh ? '地图' : 'Map'}</a></td>
        <td data-label="${t('launches.saleCol')}"><a class="mini-link" href="${n.saleUrl}" target="_blank" rel="noopener">🔗 ${zh ? '发售/咨询' : 'Sales'}</a></td>
      </tr>`;
    }).join('');
    document.getElementById('launches-note').textContent = zh ? D.launchesNoteZh : D.launchesNoteEn;
    // 详情卡片：配额 / 预售 / 优惠 / 户型
    document.getElementById('launch-cards').innerHTML = D.newLaunches.map(n => `
      <div class="card launch-card">
        <div class="launch-card-head">
          <b>${pick(n,'name','nameEn')}</b>
          <span>${devBadge(n.devType)} <span class="chip ${n.statusZh === '在售' ? 'chip-ok' : 'chip-mid'}">${pick(n,'statusZh','statusEn')}</span></span>
        </div>
        <div class="launch-row"><span class="lr-k">${t('launches.developer')}</span><span>${pick(n,'developer','developerEn')}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.city')}</span><span>${pick(n,'city','cityEn')} · ${pick(n,'district','districtEn') || ''}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.quota')}</span><span>${pick(n,'quotaZh','quotaEn')}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.presale')}</span><span>${pick(n,'presaleZh','presaleEn')}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.promo')}</span><span>${pick(n,'promoZh','promoEn')}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.units')}</span><span>${pick(n,'unitsZh','unitsEn')}</span></div>
        <div class="launch-row"><span class="lr-k">${t('launches.launchTime')}</span><span>${n.saleTimeZh ? pick(n,'saleTimeZh','saleTimeEn') : (n.launch || '—')}</span></div>
        <div class="launch-links">
          <a href="${n.gmaps}" target="_blank" rel="noopener">📍 Google 地图 / Maps</a>
          <a href="${n.saleUrl}" target="_blank" rel="noopener">🔗 ${zh ? '发售入口' : 'Sales'}</a>
        </div>
      </div>`).join('');
  }

  /* ------------------------- 配额查询 ------------------------- */
  function renderQuota(filter) {
    const f = (filter || '').trim().toLowerCase();
    const rows = D.projects.filter(p => {
      if (!f) return true;
      return (p.name + p.nameEn + p.district + p.districtEn).toLowerCase().includes(f);
    });
    document.getElementById('quota-body').innerHTML = rows.length ? rows.map(p => {
      const q = p.quota; const pct = Math.round(q.foreignSold / q.total * 1000) / 10;
      const cap = Math.round(q.total * 0.3); const remain = Math.max(0, cap - q.foreignSold);
      return `
      <tr>
        <td data-label="${t('quota.project')}"><b>${pick(p,'name','nameEn')}</b></td>
        <td data-label="${t('quota.district')}">${pick(p,'district','districtEn')}</td>
        <td data-label="${t('quota.total')}">${fmt(q.total)}</td>
        <td data-label="${t('quota.sold')}">${fmt(q.foreignSold)}</td>
        <td data-label="${t('quota.remain')}">${fmt(remain)} <span class="td-muted">/ ${lang === 'zh' ? '上限' : 'cap'} ${fmt(cap)}</span></td>
        <td data-label="${t('quota.pct')}"><div class="qbar"><div class="qbar-fill" style="width:${pct}%;background:${pct >= 27 ? 'var(--no)' : 'var(--ok)'}"></div></div><b>${pct}%</b></td>
      </tr>`;
    }).join('') : '<tr><td colspan="6" style="text-align:center;color:var(--text-3)">— 无匹配 / No match —</td></tr>';
    document.getElementById('quota-warn').textContent = t('quota.warn');
  }

  /* ------------------------- 案例库 ------------------------- */
  function renderCases() {
    document.getElementById('cases-body').innerHTML = D.failedCases.map(c => `
      <tr>
        <td data-label="${t('cases.name')}"><b>${pick(c,'name','nameEn')}</b></td>
        <td data-label="${t('cases.developer')}" class="td-muted">${pick(c,'developerZh','developerEn')}</td>
        <td data-label="${t('cases.year')}">${c.year}</td>
        <td data-label="${t('cases.event')}" class="td-muted">${pick(c,'eventZh','eventEn')}</td>
        <td data-label="${t('cases.status')}"><span class="chip">${pick(c,'statusZh','statusEn')}</span></td>
        <td data-label="${t('cases.src')}"><a class="mini-link" href="${c.link}" target="_blank" rel="noopener">↗</a></td>
      </tr>`).join('');
    document.getElementById('cases-note').textContent = lang === 'zh' ? D.failedCasesNoteZh : D.failedCasesNoteEn;
  }

  /* ------------------------- 银行 ------------------------- */
  function renderBanking() {
    const rowLocal = b => `
      <tr>
        <td data-label="${t('banking.bank')}"><b>${b.name}</b></td>
        <td data-label="${t('banking.teaser')}"><b>${b.teaser}</b></td>
        <td data-label="${t('banking.teaserPeriod')}">${b.teaserPeriod}</td>
        <td data-label="${t('banking.float')}" class="td-muted">${b.float}</td>
        <td data-label="${t('banking.ltv')}">${b.ltv}</td>
        <td data-label="${t('banking.tenor')}">${b.tenor}</td>
        <td data-label="${t('banking.promo')}" class="td-muted">${pick(b,'promoZh','promoEn')}</td>
      </tr>`;
    const rowForeign = b => `
      <tr>
        <td data-label="${t('banking.bank')}"><b>${b.name}</b></td>
        <td data-label="${t('banking.rate')}">${b.rate}</td>
        <td data-label="${t('banking.ltv')}">${b.ltv}</td>
        <td data-label="${t('banking.tenor')}">${b.tenor}</td>
        <td data-label="${t('banking.cond')}" class="td-muted">${pick(b,'noteZh','noteEn')}</td>
      </tr>`;
    document.getElementById('banking-local-body').innerHTML = D.banks.local.map(rowLocal).join('');
    document.getElementById('banking-local-note').textContent = lang === 'zh' ? D.banks.localNoteZh : D.banks.localNoteEn;
    document.getElementById('banking-foreign-body').innerHTML = D.banks.foreign.map(rowForeign).join('');
    document.getElementById('banking-down').textContent = lang === 'zh' ? D.banks.downPaymentZh : D.banks.downPaymentEn;
    document.getElementById('banking-foreign-note').textContent = lang === 'zh' ? D.banks.foreignNoteZh : D.banks.foreignNoteEn;
    document.getElementById('banking-deposit-rates-body').innerHTML = D.banks.depositRates.map(r => `
      <tr><td data-label="${t('banking.term')}">${pick(r,'termZh','termEn')}</td><td data-label="${t('banking.rate')}"><b>${r.rate}</b></td></tr>`).join('');
    document.getElementById('banking-loan-rates-body').innerHTML = D.banks.loanRates.map(r => `
      <tr><td data-label="${t('banking.term')}">${pick(r,'termZh','termEn')}</td><td data-label="${t('banking.rate')}"><b>${r.rate}</b></td></tr>`).join('');
    document.getElementById('banking-deposit-vs-loan').textContent = lang === 'zh' ? D.banks.depositVsLoanNoteZh : D.banks.depositVsLoanNoteEn;
    document.getElementById('deposit-body').innerHTML = D.banks.deposits.map(d => `
      <tr><td data-label="${t('banking.depositBank')}"><b>${d.bank}</b></td>
      <td data-label="${t('banking.depositRate')}">${d.rate}</td>
      <td data-label="${t('banking.depositNote')}" class="td-muted">${pick(d,'noteZh','noteEn')}</td></tr>`).join('');
    document.getElementById('deposit-note').textContent = lang === 'zh' ? D.banks.depositNoteZh : D.banks.depositNoteEn;
    document.getElementById('interest-tax-note').textContent = lang === 'zh' ? D.banks.interestTaxZh : D.banks.interestTaxEn;
  }

  /* ------------------------- 福利 / 产权 ------------------------- */
  function renderBenefits() {
    document.getElementById('benefits-body').innerHTML = D.benefits.map(b => `
      <tr>
        <td data-label="${t('benefits.item')}"><b>${pick(b,'itemZh','itemEn')}</b></td>
        <td data-label="${t('benefits.available')}">${b.available ? '<span class="chip chip-ok">' + t('common.yes') + '</span>' : '<span class="chip chip-no">' + t('common.no') + '</span>'}</td>
        <td data-label="${t('benefits.note')}" class="td-muted">${pick(b,'noteZh','noteEn')}</td>
      </tr>`).join('');
    document.getElementById('own-paths').innerHTML = D.ownershipPaths.map(r => '<li>' + pick(r, 'zh', 'en') + '</li>').join('');
  }

  function renderOwnership() {
    document.getElementById('own-term').textContent = lang === 'zh' ? D.ownership.termZh : D.ownership.termEn;
    document.getElementById('own-rights').innerHTML = D.ownership.rights.map(r => '<li>' + pick(r, 'zh', 'en') + '</li>').join('');
    document.getElementById('own-contracts').innerHTML = D.ownership.contractTypes.map(c =>
      `<li><b>${pick(c,'zh','en')}</b><span class="td-muted"> — ${pick(c,'descZh','descEn')}</span></li>`).join('');
    document.getElementById('own-risks').innerHTML = D.ownership.risks.map(r => {
      const lv = pick(r, 'levelZh', 'levelEn');
      const cls = (lv === '高' || lv === 'High') ? 'chip-warn' : (lv === '低' || lv === 'Low') ? 'chip-ok' : 'chip-mid';
      return `<tr><td data-label="${t('ownership.riskItem')}"><b>${pick(r,'zh','en')}</b></td>
        <td data-label="${t('ownership.level')}"><span class="chip ${cls}">${lv}</span></td>
        <td data-label="${t('ownership.tip')}" class="td-muted">${pick(r,'tipZh','tipEn')}</td></tr>`;
    }).join('');
  }

  /* ------------------------- 税费 / 产权证 ------------------------- */
  function renderTaxes() {
    document.getElementById('taxes-body').innerHTML = D.taxes.items.map(x => `
      <tr>
        <td data-label="${t('taxes.item')}"><b>${pick(x,'itemZh','itemEn')}</b></td>
        <td data-label="${t('taxes.rate')}"><b>${x.rateZh}</b></td>
        <td data-label="${t('taxes.note')}" class="td-muted">${pick(x,'noteZh','noteEn')}</td>
      </tr>`).join('');
    document.getElementById('taxes-note').textContent = lang === 'zh' ? D.taxes.noteZh : D.taxes.noteEn;
  }
  function renderCertificates() {
    document.getElementById('certificates-note').textContent = lang === 'zh' ? D.certificates.noteZh : D.certificates.noteEn;
  }

  /* ------------------------- 租金行情 + 币种切换 ------------------------- */
  function rentRange(vndMn) {
    const [lo, hi] = vndMn;
    const { usdVnd, cnyVnd } = latestFx();
    const zh = lang === 'zh';
    if (rentCcy === 'VND') return fmt(lo) + '–' + fmt(hi) + (zh ? ' 百万盾/月' : 'M VND/mo');
    if (rentCcy === 'USD') return '$' + fmt(Math.round(lo * 1e6 / usdVnd / 10) * 10) + '–$' + fmt(Math.round(hi * 1e6 / usdVnd / 10) * 10) + '/mo';
    return '¥' + fmt(Math.round(lo * 1e6 / cnyVnd / 100) * 100) + '–¥' + fmt(Math.round(hi * 1e6 / cnyVnd / 100) * 100) + '/mo';
  }
  function renderRents() {
    const zh = lang === 'zh';
    const rows = [];
    D.rents.items.forEach(p => {
      p.rows.forEach((r, i) => {
        rows.push(`
        <tr>
          ${i === 0 ? '<td rowspan="' + p.rows.length + '"><b>' + pick(p, 'nameZh', 'nameEn') + '</b></td><td rowspan="' + p.rows.length + '">' + pick(p, 'cityZh', 'cityEn') + '</td><td rowspan="' + p.rows.length + '">' + pick(p, 'districtZh', 'districtEn') + '</td>' : ''}
          <td data-label="${t('rents.unit')}">${pick(r, 'typeZh', 'typeEn')}</td>
          <td data-label="${t('rents.area')}">${pick(r, 'areaZh', 'areaEn')}</td>
          <td data-label="${t('rents.rent')}"><b>${rentRange(r.rentVnd)}</b></td>
          ${i === 0 ? '<td rowspan="' + p.rows.length + '">' + p.yieldText + '</td>' : ''}
        </tr>`);
      });
    });
    document.getElementById('rents-body').innerHTML = rows.join('');
    document.getElementById('rents-yield-basis').innerHTML = '<b>' + t('rents.yieldBasis') + '</b>：' + (zh ? D.rents.yieldBasisZh : D.rents.yieldBasisEn);
    document.getElementById('rents-note').innerHTML = (zh ? D.rents.noteZh : D.rents.noteEn) + ' · <span class="td-muted">' + (zh ? D.rents.asOfZh : D.rents.asOfEn) + '</span>';
  }
  function applyRentCcy() {
    document.querySelectorAll('.ccy-btn').forEach(b => b.classList.toggle('active', b.dataset.ccy === rentCcy));
    renderRents();
  }

  /* ------------------------- 抽屉 ------------------------- */
  function renderDrawer() {
    document.getElementById('drawer-title').textContent = t('drawer.title');
  }

  /* ------------------------- 图表 ------------------------- */
  const PALETTE = { red: '#e5484d', orange: '#f59e0b', blue: '#3b82f6', teal: '#14b8a6', purple: '#8b5cf6', green: '#22c55e', gold: '#d4a017' };
  function baseOpts() {
    return {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
      scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(128,128,128,0.12)' } } }
    };
  }

  function buildAllCharts() {
    if (!window.Chart) return;
    const yrs = D.index.years.map(String);

    // 主指数图（点击钻取）
    const c1 = document.getElementById('chart-index');
    if (c1) {
      charts.index = new Chart(c1, {
        type: 'line',
        data: { labels: yrs, datasets: [
          { label: t('overview.legendPrice'), data: D.index.priceIndex, borderColor: PALETTE.red, backgroundColor: PALETTE.red + '22', tension: 0.3, borderWidth: 3, pointRadius: 4, pointHitRadius: 12 },
          { label: t('overview.legendGdp'), data: D.index.gdpPerCapitaIndex, borderColor: PALETTE.blue, tension: 0.3, borderWidth: 2, pointRadius: 3, pointHitRadius: 12 },
          { label: t('overview.legendIncome'), data: D.index.incomeIndex, borderColor: PALETTE.teal, tension: 0.3, borderWidth: 2, pointRadius: 3, pointHitRadius: 12 }
        ]},
        options: Object.assign({}, baseOpts(), {
          onClick: (evt, els) => { if (els.length) openDrill(els[0].index); },
          onHover: (evt, els) => { evt.native.target.style.cursor = els.length ? 'pointer' : 'default'; },
          scales: { x: { grid: { display: false } }, y: { min: 80, title: { display: true, text: lang === 'zh' ? '指数（2020=100，无量纲）' : 'Index (2020=100, unitless)' }, grid: { color: 'rgba(128,128,128,0.12)' } } }
        })
      });
    }

    // 汇率图（按基准货币）
    buildFxChart();

    // 宏观图（按显示货币换算）
    buildMacroCharts();

    // 房价季度波动（一手 vs 二手）
    buildWaveChart();

    // 十年房价 + 时间波动轴
    buildPrice10Chart();
    buildTimelineChart();

    // GDP
    buildMacroCharts();

    // 收入（在 buildMacroCharts 中按货币重建）

    // 城市图
    const cy = D.cities.years.map(String);
    const c4 = document.getElementById('chart-city-price');
    if (c4) {
      charts.cityPrice = new Chart(c4, {
        type: 'line',
        data: { labels: cy, datasets: [
          { label: t('common.hcmc'), data: D.cities.hcmc.priceUsd, borderColor: PALETTE.red, backgroundColor: PALETTE.red + '22', tension: 0.3, borderWidth: 3, pointRadius: 4, fill: true },
          { label: t('common.hanoi'), data: D.cities.hanoi.priceUsd, borderColor: PALETTE.blue, backgroundColor: PALETTE.blue + '22', tension: 0.3, borderWidth: 3, pointRadius: 4, fill: true }
        ]},
        options: Object.assign({}, baseOpts(), { scales: { x: { grid: { display: false } }, y: { title: { display: true, text: 'USD/㎡' }, grid: { color: 'rgba(128,128,128,0.12)' } } } })
      });
    }
    const c5 = document.getElementById('chart-city-supply');
    if (c5) {
      charts.citySupply = new Chart(c5, {
        type: 'bar',
        data: { labels: cy, datasets: [
          { label: t('common.hcmc'), data: D.cities.hcmc.supply, backgroundColor: PALETTE.red + 'cc', borderRadius: 6 },
          { label: t('common.hanoi'), data: D.cities.hanoi.supply, backgroundColor: PALETTE.blue + 'cc', borderRadius: 6 }
        ]},
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
          scales: { x: { grid: { display: false } }, y: { beginAtZero: true, title: { display: true, text: t('common.units') }, grid: { color: 'rgba(128,128,128,0.12)' } } } }
      });
    }
    const c6 = document.getElementById('chart-city-share');
    if (c6) {
      const tot = D.cities.years.map((_, i) => D.cities.hcmc.supply[i] + D.cities.hanoi.supply[i]);
      charts.cityShare = new Chart(c6, {
        type: 'bar',
        data: { labels: cy, datasets: [
          { label: t('common.hcmc'), data: D.cities.hcmc.supply.map((v, i) => +(v / tot[i] * 100).toFixed(1)), backgroundColor: PALETTE.red + 'cc', borderRadius: 4 },
          { label: t('common.hanoi'), data: D.cities.hanoi.supply.map((v, i) => +(v / tot[i] * 100).toFixed(1)), backgroundColor: PALETTE.blue + 'cc', borderRadius: 4 }
        ]},
        options: { responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.raw + '%' } } },
          scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, max: 100, grid: { color: 'rgba(128,128,128,0.12)' } } } }
      });
    }
  }

  function buildWaveChart() {
    const cv = document.getElementById('chart-wave');
    if (!cv || !window.Chart) return;
    if (charts.wave) charts.wave.destroy();
    const zh = lang === 'zh';
    const labels = [], hc1 = [], hn1 = [], hc2 = [], hn2 = [];
    ['2024', '2025', '2026'].forEach(yr => {
      for (let q = 0; q < 4; q++) {
        const p1h = D.cities.quarterly.hcmc[yr] ? D.cities.quarterly.hcmc[yr][q] : null;
        const p1n = D.cities.quarterly.hanoi[yr] ? D.cities.quarterly.hanoi[yr][q] : null;
        const p2h = D.cities.quarterlySecondary.hcmc[yr] ? D.cities.quarterlySecondary.hcmc[yr][q] : null;
        const p2n = D.cities.quarterlySecondary.hanoi[yr] ? D.cities.quarterlySecondary.hanoi[yr][q] : null;
        if (p1h == null && p1n == null && p2h == null && p2n == null) continue;
        labels.push(yr + ' Q' + (q + 1));
        hc1.push(p1h); hn1.push(p1n); hc2.push(p2h); hn2.push(p2n);
      }
    });
    charts.wave = new Chart(cv, {
      type: 'line',
      data: { labels, datasets: [
        { label: (zh ? '胡志明 一手' : 'HCMC primary'), data: hc1, borderColor: PALETTE.red, borderWidth: 3, tension: 0.3, pointRadius: 3 },
        { label: (zh ? '河内 一手' : 'Hanoi primary'), data: hn1, borderColor: PALETTE.blue, borderWidth: 3, tension: 0.3, pointRadius: 3 },
        { label: (zh ? '胡志明 二手(估)' : 'HCMC secondary (est)'), data: hc2, borderColor: PALETTE.red, borderWidth: 2, borderDash: [6, 4], tension: 0.3, pointRadius: 2 },
        { label: (zh ? '河内 二手(估)' : 'Hanoi secondary (est)'), data: hn2, borderColor: PALETTE.blue, borderWidth: 2, borderDash: [6, 4], tension: 0.3, pointRadius: 2 }
      ]},
      options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } }, y: { title: { display: true, text: 'USD/㎡' }, grid: { color: 'rgba(128,128,128,0.12)' } } } }
    });
  }

  function buildFxChart() {
    const cv = document.getElementById('chart-fx');
    if (!cv || !window.Chart) return;
    if (charts.fx) charts.fx.destroy();
    const base = baseCcy;
    const i0 = Math.max(0, D.fx.years.indexOf(baseYear));
    const years = D.fx.years.slice(i0);
    const usdVnd = D.fx.usdVndAnnual.slice(i0);
    const cnyVnd = D.fx.cnyVndAnnual.slice(i0);
    const datasets = [];
    if (base === 'USD') {
      datasets.push({ label: 'USD→VND', data: usdVnd.map(v => +(v / 1000).toFixed(3)), borderColor: PALETTE.blue, borderWidth: 3, tension: 0.3, pointRadius: 4 });
      datasets.push({ label: 'CNY→VND', data: cnyVnd.map(v => +(v / 1000).toFixed(3)), borderColor: PALETTE.red, borderWidth: 2, tension: 0.3, pointRadius: 3 });
    } else if (base === 'CNY') {
      datasets.push({ label: 'CNY→VND', data: cnyVnd.map(v => +(v / 1000).toFixed(3)), borderColor: PALETTE.red, borderWidth: 3, tension: 0.3, pointRadius: 4 });
      datasets.push({ label: 'USD→VND', data: usdVnd.map(v => +(v / 1000).toFixed(3)), borderColor: PALETTE.blue, borderWidth: 2, tension: 0.3, pointRadius: 3 });
    } else {
      datasets.push({ label: '1000 VND→USD', data: usdVnd.map(v => +(1000000 / v).toFixed(3)), borderColor: PALETTE.blue, borderWidth: 3, tension: 0.3, pointRadius: 4, yAxisID: 'y1' });
      datasets.push({ label: '1000 VND→CNY', data: cnyVnd.map(v => +(1000000 / v).toFixed(3)), borderColor: PALETTE.red, borderWidth: 2, tension: 0.3, pointRadius: 3, yAxisID: 'y1' });
    }
    const hasInv = base === 'VND';
    charts.fx = new Chart(cv, {
      type: 'line',
      data: { labels: years.map(String), datasets },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } },
          y: hasInv ? { display: false } : { title: { display: true, text: '千越南盾 / thousand VND' }, grid: { color: 'rgba(128,128,128,0.12)' } },
          y1: hasInv ? { display: true, position: 'right', title: { display: true, text: 'USD / CNY per 1000 VND' }, grid: { drawOnChartArea: false } } : { display: false } } }
    });
  }

  /* ------------------------- 交叉汇率说明 ------------------------- */
  function renderFxCrossNote() {
    const el = document.getElementById('fx-cross-note');
    if (!el) return;
    const years = D.fx.years;
    const i0 = Math.max(0, years.indexOf(baseYear));
    const i1 = years.length - 1;
    const u0 = D.fx.usdVndAnnual[i0], u1 = D.fx.usdVndAnnual[i1];
    const c0 = D.fx.cnyVndAnnual[i0], c1 = D.fx.cnyVndAnnual[i1];
    const usdCny0 = D.fx.usdCnyRate[i0], usdCny1 = D.fx.usdCnyRate[i1];
    const depUsd = (1 - u0 / u1) * 100;      // VND 对 USD 贬值 %
    const depCny = (1 - c0 / c1) * 100;      // VND 对 CNY 贬值 %
    const depCnyVsUsd = (1 - usdCny0 / usdCny1) * 100;  // CNY 对 USD 贬值 %
    const pct = n => (n >= 0 ? '+' : '') + n.toFixed(1) + '%';
    const sign = n => (n >= 0 ? '贬值' : '升值');
    const fromTo = years[i0] + '→' + years[i1];
    const zh = lang === 'zh';
    const rows = [
      { k: zh ? '越南盾 对 美元' : 'VND vs USD', v: pct(depUsd) + (zh ? '（' + sign(depUsd) + '）' : '') },
      { k: zh ? '人民币 对 美元' : 'CNY vs USD', v: pct(depCnyVsUsd) + (zh ? '（' + sign(depCnyVsUsd) + '）' : '') },
      { k: zh ? '越南盾 对 人民币' : 'VND vs CNY', v: pct(depCny) + (zh ? '（' + sign(depCny) + '）' : '') }
    ];
    const body = rows.map(r => '<div class="fx-row"><span class="k">' + r.k + '</span><span class="v">' + r.v + '</span></div>').join('');
    const tip = zh
      ? '恒等式：越南盾对人民币贬值幅度 ≈ 对美元贬值幅度 − 人民币对美元贬值幅度。' + fromTo + ' 期间越南盾与人民币同向贬值，幅度相抵，故越南盾对人民币贬值幅度小于对美元。持有美元资产有汇率增益，持有人民币换汇成本变化较美元温和。'
      : 'Identity: VND depreciation vs CNY ≈ VND depreciation vs USD − CNY depreciation vs USD. Over ' + fromTo + ', VND and CNY depreciated in the same direction, partially offsetting, so VND lost less against CNY than against USD. Holding USD earns FX gains; CNY holders face milder cost changes than USD.';
    el.innerHTML = '<h4>' + t('fx.crossTitle') + ' · ' + fromTo + '</h4>' + body + '<div class="fx-tip">' + tip + '</div>';
  }

  /* ------------------------- 年度钻取 Modal ------------------------- */
  function openDrill(idx) {
    const year = D.index.years[idx];
    const modal = document.getElementById('drill-modal');
    document.getElementById('drill-title').textContent = t('drill.title') + ' — ' + year;
    modal.classList.add('open');
    const priceDs = [];
    const q = D.cities.quarterly;
    const labels = q.hcmc[String(year)] ? ['Q1','Q2','Q3','Q4'] : [String(year)];
    const hc = q.hcmc[String(year)] ? q.hcmc[String(year)] : [D.cities.hcmc.priceUsd[idx]];
    const hn = q.hanoi[String(year)] ? q.hanoi[String(year)] : [D.cities.hanoi.priceUsd[idx]];
    priceDs.push({ label: t('common.hcmc'), data: hc, borderColor: PALETTE.red, borderWidth: 3, tension: 0.3, pointRadius: 4 });
    priceDs.push({ label: t('common.hanoi'), data: hn, borderColor: PALETTE.blue, borderWidth: 3, tension: 0.3, pointRadius: 4 });
    if (charts.drillPrice) charts.drillPrice.destroy();
    charts.drillPrice = new Chart(document.getElementById('chart-drill-price'), {
      type: 'line',
      data: { labels, datasets: priceDs },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } }, y: { title: { display: true, text: 'USD/㎡' }, grid: { color: 'rgba(128,128,128,0.12)' } } } }
    });
    const monthly = D.fx.monthlyUsdVnd[String(year)] || [];
    if (charts.drillFx) charts.drillFx.destroy();
    charts.drillFx = new Chart(document.getElementById('chart-drill-fx'), {
      type: 'line',
      data: { labels: lang === 'zh' ? MONTHS_ZH : MONTHS_EN,
        datasets: [{ label: 'USD/VND', data: monthly, borderColor: PALETTE.orange, borderWidth: 3, tension: 0.3, pointRadius: 3, fill: true, backgroundColor: PALETTE.orange + '18' }]},
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(128,128,128,0.12)' } } } }
    });
    // 换算说明
    const avgUsd = monthly.length ? Math.round(monthly.reduce((a, b) => a + b, 0) / monthly.length) : D.fx.usdVndAnnual[idx];
    const usdCny = D.fx.usdCnyRate[idx];
    const convRows = [
      { zh: '1 美金 ≈', en: '1 USD ≈', v: fmt(avgUsd) + ' VND' },
      { zh: '1 人民币 ≈', en: '1 CNY ≈', v: fmt(Math.round(avgUsd / usdCny)) + ' VND' },
      { zh: '1,000 万越南盾 ≈', en: 'VND 10M ≈', v: '$' + fmt(Math.round(10000000 / avgUsd)) + ' / ¥' + fmt(Math.round(10000000 / avgUsd / usdCny)) }
    ];
    document.getElementById('drill-conv').innerHTML = '<h4>' + t('drill.convTitle') + '</h4>' +
      convRows.map(r => '<div class="conv-row"><span>' + pick(r, 'zh', 'en') + '</span><b>' + r.v + '</b></div>').join('');
  }
  function closeDrill() {
    document.getElementById('drill-modal').classList.remove('open');
    if (charts.drillPrice) { charts.drillPrice.destroy(); delete charts.drillPrice; }
    if (charts.drillFx) { charts.drillFx.destroy(); delete charts.drillFx; }
  }
  window.RE_openDrill = openDrill;  // 供外部/测试调用
  window.RE_DEBUG = { renderStatic, renderDynamic, buildAllCharts, applyTheme, updateMacroStats, buildWaveChart, buildMacroCharts, renderCityEconomy, renderFundsGuide };

  /* ------------------------- 地图（Leaflet）------------------------- */
  function initMap() {
    if (leafletReady || !window.L) return;
    leafletReady = true;
    myMap = L.map('hcmc-map', {
      center: [10.785, 106.720], zoom: 12, scrollWheelZoom: true,
      preferCanvas: true, zoomAnimation: true, fadeAnimation: true, markerZoomAnimation: false
    });
    tileLayerRef = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '&copy; OpenStreetMap contributors', updateWhenIdle: true, keepBuffer: 2
    }).addTo(myMap);

    const mk = (n, lat, lng, color, emoji) => L.circleMarker([lat, lng], {
      radius: 5, color: color, weight: 1.5, fillColor: color, fillOpacity: 0.75
    }).bindPopup('<b>' + emoji + ' ' + n + '</b><br><span style="font-size:11px;color:#888">' + (lang === 'zh' ? '示意坐标（近似）' : 'approx. coordinates') + '</span>');

    mapLayers = {
      projects: L.layerGroup(D.mapPois.projects.map(p => mk(p.n, p.lat, p.lng, '#e5484d', '🏢'))).addTo(myMap),
      metro: L.layerGroup(D.mapPois.metro.map(p => mk(p.n, p.lat, p.lng, '#2563eb', '🚇'))).addTo(myMap),
      hospitals: L.layerGroup(D.mapPois.hospitals.map(p => mk(p.n, p.lat, p.lng, '#22c55e', '🏥'))),
      schools: L.layerGroup(D.mapPois.schools.map(p => mk(p.n, p.lat, p.lng, '#8b5cf6', '🏫'))),
      malls: L.layerGroup(D.mapPois.malls.map(p => mk(p.n, p.lat, p.lng, '#f59e0b', '🛒'))),
      transport: L.layerGroup(D.mapPois.transport.map(p => mk(p.n, p.lat, p.lng, '#0ea5e9', '✈️')))
    };

    // 地铁线路（示意 polyline，popup 含线路信息与附近楼盘）
    const zh = lang === 'zh';
    const line1 = [[10.7708,106.6978],[10.7767,106.7033],[10.7819,106.7083],[10.7960,106.7155],[10.7980,106.7185],[10.8005,106.7337],[10.8030,106.7440],[10.8120,106.7600],[10.8214,106.7581],[10.8310,106.7860],[10.8405,106.7945],[10.8500,106.8050],[10.8680,106.8030],[10.8794,106.8139]];
    const line2w = [[10.7722,106.6984],[10.7765,106.6915],[10.7835,106.6820],[10.7920,106.6735],[10.8000,106.6660],[10.8090,106.6580]];
    const line2e = [[10.7722,106.6984],[10.7728,106.7010],[10.7765,106.7210]];
    const nearby1 = zh
      ? '附近楼盘：Grand Marina Saigon（滨城站）、Vinhomes Golden River（Ba Son 站）、The Global City（Thao Dien–An Phu 沿线）、Vinhomes Grand Park（仙泉端）'
      : 'Nearby: Grand Marina Saigon (Ben Thanh), Vinhomes Golden River (Ba Son), The Global City (Thao Dien–An Phu), Vinhomes Grand Park (Suoi Tien end)';
    const nearby2w = zh
      ? '附近楼盘：The Marq、滨城核心区旧改盘'
      : 'Nearby: The Marq & downtown core projects';
    const nearby2e = zh
      ? '附近楼盘：The Metropole Thu Thiem、Empire City'
      : 'Nearby: The Metropole Thu Thiem, Empire City';
    L.polyline(line1, { color: '#1a7f4f', weight: 4 }).bindPopup('<b>🟢 1号线 Ben Thanh–Suoi Tien</b><br>2024-12-22 通车（实线）<br><span style="font-size:11px">' + nearby1 + '</span>').addTo(myMap);
    L.polyline(line2w, { color: '#2563eb', weight: 4, dashArray: '8 6' }).bindPopup('<b>🔵 2号线西段 Ben Thanh–Tham Luong</b><br>2026-01 开工 / 2030-12 通车（虚线=在建）<br><span style="font-size:11px">' + nearby2w + '</span>').addTo(myMap);
    L.polyline(line2e, { color: '#2563eb', weight: 4, dashArray: '8 6' }).bindPopup('<b>🔵 2号线东段 Ben Thanh–Thu Thiem</b><br>2026-04 开工 / 2030（虚线=在建）<br><span style="font-size:11px">' + nearby2e + '</span>').addTo(myMap);
    // 1 号线延伸段（平阳新城线，已批待开工，虚线=未通车）
    const line1ext = [[10.8794,106.8139],[10.8980,106.8040],[10.9180,106.7800],[10.9400,106.7450],[10.9550,106.7150]];
    L.polyline(line1ext, { color: '#1a7f4f', weight: 3, dashArray: '8 6' }).bindPopup('<b>🟢 1号线延伸·平阳新城线（已批待开工）</b><br>Suoi Tien → Binh Duong New City · 32.8 km · 预计 2030<br><span style="font-size:11px">虚线 = 未通车（示意走向）</span>').addTo(myMap);

    // 图例切换
    document.querySelectorAll('.map-legend input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const g = mapLayers[cb.dataset.layer];
        if (!g) return;
        if (cb.checked) { if (!myMap.hasLayer(g)) g.addTo(myMap); }
        else { if (myMap.hasLayer(g)) myMap.removeLayer(g); }
      });
    });
    setTimeout(() => myMap.invalidateSize(), 300);
  }

  function renderMetroTable() {
    document.getElementById('metro-body').innerHTML = D.metro.map(m => `
      <tr>
        <td data-label="${t('map.line')}"><span class="dot" style="background:${m.color}"></span><b>${pick(m,'line','lineEn')}</b><div class="td-muted">${pick(m,'name','nameEn')}</div></td>
        <td data-label="${t('map.status')}"><span class="chip ${m.status === 'operating' ? 'chip-ok' : m.status === 'building' ? 'chip-mid' : ''}">${pick(m,'statusZh','statusEn')}</span></td>
        <td data-label="${t('map.since')}">${m.since}</td>
        <td data-label="${t('map.expect')}">${m.expect || '—'}</td>
        <td data-label="${t('map.length')}">${m.length}</td>
        <td data-label="${t('map.stations')}">${m.stations || '—'}</td>
      </tr>`).join('');
  }

  /* 地铁图例：线号+颜色+始发-终点 */
  function renderMetroLegend() {
    const el = document.getElementById('metro-legend');
    if (!el) return;
    el.innerHTML = D.metro.map(m => {
      const bar = m.status === 'operating' ? 'background:' + m.color
        : m.status === 'building' ? 'background:repeating-linear-gradient(90deg,' + m.color + ' 0 7px,transparent 7px 12px)'
        : 'background:repeating-linear-gradient(90deg,' + m.color + ' 0 4px,transparent 4px 10px);opacity:.65';
      return `
      <div class="ml-item">
        <span class="ml-color" style="${bar}"></span>
        <div class="ml-text">
          <b>${pick(m,'line','lineEn')}</b>
          <span class="td-muted">${pick(m,'from','fromEn')} → ${pick(m,'to','toEn')} · ${m.length}</span>
          <span class="chip ${m.status === 'operating' ? 'chip-ok' : m.status === 'building' ? 'chip-mid' : ''}">${pick(m,'statusZh','statusEn')}${m.expect && m.status !== 'operating' ? ' · ' + m.expect : (m.status === 'operating' ? ' · ' + m.since : '')}</span>
        </div>
      </div>`;
    }).join('');
  }

  /* 市场洞察：河内归因 + 投资选项 */
  function renderInsight() {
    const ha = D.hanoiAnalysis;
    document.getElementById('hanoi-caveat').textContent = lang === 'zh' ? ha.caveatZh : ha.caveatEn;
    document.getElementById('hanoi-factors').innerHTML = ha.factors.map(f => `
      <div class="card factor-card">
        <h4><span class="f-icon">${f.iconZh}</span> ${pick(f,'tZh','tEn')}</h4>
        <p class="td-muted">${pick(f,'dZh','dEn')}</p>
      </div>`).join('');
    document.getElementById('hanoi-links').innerHTML = '<div class="src-links">' +
      ha.sourceLinks.map(s => `<a href="${s.url}" target="_blank" rel="noopener">🔗 ${s.t}</a>`).join('') + '</div>';

    const io = D.investOptions;
    document.getElementById('invest-options').innerHTML = io.options.map(o => `
      <div class="card factor-card">
        <h4><span class="f-icon">${o.iconZh}</span> ${pick(o,'nameZh','nameEn')} <span class="chip chip-ok">${o.yieldText}</span></h4>
        <div class="launch-row"><span class="lr-k">${lang === 'zh' ? '入场' : 'Entry'}</span><span>${pick(o,'entryZh','entryEn')}</span></div>
        <p class="td-muted">${pick(o,'dZh','dEn')}</p>
        <p class="warn-note" style="margin:6px 0 0">${pick(o,'riskZh','riskEn')}</p>
      </div>`).join('');
    document.getElementById('invest-links').innerHTML = '<div class="src-links">' +
      io.sourceLinks.map(s => `<a href="${s.url}" target="_blank" rel="noopener">🔗 ${s.t}</a>`).join('') + '</div>';
  }

  /* ------------------------- 交互 ------------------------- */
  function initNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === 'sec-' + target));
        document.getElementById('main-scroll').scrollTop = 0;
        document.body.classList.remove('nav-open');
        if (target === 'map') initMap();
      });
    });
  }
  function initHeader() {
    document.querySelectorAll('.lang-opt').forEach(b => {
      b.addEventListener('click', () => {
        lang = b.dataset.lang;
        localStorage.setItem('vnre_lang', lang); applyLang();
      });
    });
    const tlBox = document.getElementById('tl-years');
    if (tlBox) {
      tlBox.addEventListener('click', (e) => {
        const b = e.target.closest('.tl-y');
        if (!b) return;
        tlYear = parseInt(b.dataset.y, 10);
        renderTimeline();
      });
    }
    document.getElementById('themeBtn').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('vnre_theme', theme); applyTheme();
    });
    document.getElementById('menuBtn').addEventListener('click', () => document.body.classList.toggle('nav-open'));
    document.getElementById('newsBtn').addEventListener('click', () => document.body.classList.add('drawer-open'));
    document.getElementById('drawer-close').addEventListener('click', () => document.body.classList.remove('drawer-open'));
    document.getElementById('drawer-overlay').addEventListener('click', () => document.body.classList.remove('drawer-open'));
    document.getElementById('drill-close').addEventListener('click', closeDrill);
    document.getElementById('drill-modal').addEventListener('click', (e) => { if (e.target.id === 'drill-modal') closeDrill(); });
    document.getElementById('fx-base').addEventListener('change', (e) => {
      baseCcy = e.target.value; localStorage.setItem('vnre_ccy', baseCcy); buildFxChart();
    });
    document.getElementById('fx-baseline').addEventListener('change', (e) => {
      baseYear = parseInt(e.target.value, 10); localStorage.setItem('vnre_fx_year', String(baseYear));
      buildFxChart(); renderFxCrossNote();
    });
    document.getElementById('macro-ccy').addEventListener('change', (e) => {
      macroCcy = e.target.value; localStorage.setItem('vnre_macro_ccy', macroCcy);
      updateMacroStats(); renderCityEconomy(); buildMacroCharts();
    });
    document.getElementById('chip-drill').addEventListener('click', () => {
      document.getElementById('chart-index').scrollIntoView({ behavior: 'smooth', block: 'center' });
      const card = document.getElementById('chart-index').closest('.card');
      card.style.transition = 'box-shadow .4s'; card.style.boxShadow = '0 0 0 3px var(--accent-2)';
      setTimeout(() => { card.style.boxShadow = ''; }, 1200);
    });
    document.getElementById('chip-lang').addEventListener('click', () => {
      const order = ['zh', 'en', 'vi'];
      lang = order[(order.indexOf(lang) + 1) % order.length];
      localStorage.setItem('vnre_lang', lang); applyLang();
    });
    ['fx-amount','fx-from','fx-to'].forEach(id => document.getElementById(id).addEventListener('input', doConvert));
    ['fx-from','fx-to'].forEach(id => document.getElementById(id).addEventListener('change', doConvert));
    document.getElementById('quota-search').addEventListener('input', (e) => renderQuota(e.target.value));
    document.querySelectorAll('.ccy-btn').forEach(b => {
      b.addEventListener('click', () => {
        rentCcy = b.dataset.ccy; localStorage.setItem('vnre_rent_ccy', rentCcy); applyRentCcy();
      });
    });
    document.getElementById('unit-close').addEventListener('click', closeUnitModal);
    document.getElementById('unit-modal').addEventListener('click', (e) => { if (e.target.id === 'unit-modal') closeUnitModal(); });
    document.getElementById('backTop').addEventListener('click', () => document.getElementById('main-scroll').scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('main-scroll').addEventListener('scroll', (e) => {
      document.getElementById('backTop').classList.toggle('show', e.target.scrollTop > 400);
    });
  }

  /* ------------------------- Boot ------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderStatic();
    initNav(); initHeader();
    applyTheme();
    renderDynamic();
    renderMetroTable(); renderMetroLegend(); renderInsight();
    renderDrawer();
  });
})();
