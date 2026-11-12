/* =====================================================================
 * 越南房地产信息平台 — 数据层 V2 (data.js)
 * ---------------------------------------------------------------------
 * 每日更新仅需修改本文件。结构：window.RE_DATA
 * V2 新增：汇率、月度钻取、楼盘价格历史/管理费/宽带/配额、2026数据、
 *          地铁、地图POI、烂尾案例、动态消息、定存利率、官方链接
 * ===================================================================== */

window.RE_DATA = {

  /* ---------- 元信息 / Meta ---------- */
  meta: {
    lastUpdated: "2026-11-12",
    lastUpdatedAt: "2026-11-12 21:15",
    dataAsOfZh: "房价数据截至 2026 年 Q3（Knight Frank/CBRE/Savills），汇率截至 2026 年 11 月",
    dataAsOfEn: "Price data as of Q3 2026 (Knight Frank/CBRE/Savills); FX as of Nov 2026",
    fxRate: 25850,
    usdCny: 7.13,
    disclaimerZh: "本平台为信息参考工具，非投资建议。楼盘配额、管理费、宽带等为代表性估算，请以开发商/物业/官方公示为准。法规与价格请以越南官方最新发布为准。",
    disclaimerEn: "For reference only, not investment advice. Quotas, management fees and internet plans are representative estimates — verify with developers/property mgmt/official sources.",
    sources: [
      {
        zh: "越南国家统计局 (GSO)",
        en: "GSO Vietnam",
        url: "https://www.gso.gov.vn"
      },
      {
        zh: "Knight Frank Vietnam (Q3 2026)",
        en: "Knight Frank Vietnam (Q3 2026)",
        url: "https://www.knightfrank.com.vn"
      },
      {
        zh: "Savills Vietnam",
        en: "Savills Vietnam",
        url: "https://www.savills.com.vn"
      },
      {
        zh: "CBRE Vietnam",
        en: "CBRE Vietnam",
        url: "https://www.cbre.com.vn"
      },
      {
        zh: "越南建设部",
        en: "Ministry of Construction",
        url: "https://moc.gov.vn"
      },
      {
        zh: "越南国家法律库 (vbpl.vn)",
        en: "Vietnam Law Library (vbpl.vn)",
        url: "https://vbpl.vn"
      },
      {
        zh: "越南国家银行 (央行)",
        en: "State Bank of Vietnam",
        url: "https://www.sbv.gov.vn"
      }
    ]
  },

  /* ---------- 宏观 / Macro（含2026预估） ---------- */
  macro: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    gdpUsd: [346.3, 370.1, 411, 433, 459.4, 494, 527],
    gdpGrowth: [2.9, 2.6, 8, 5.1, 7.1, 8, 7],
    gdpPerCapita: [3549, 3757, 4133, 4316, 4536, 4829, 5115],
    incomePerCapita: [4250, 4205, 4673, 4962, 5415, 5850, 6300],
    incomeUrban: [5590, 5388, 5945, 6260, 6890, 7450, 8000],
    avgWage: [6.5, 6.6, 6.9, 7.1, 7.7, 8.3, 8.9],
    note2026: "2026 年为预估值（表内 7.0% 沿用早期 IMF 口径，未随最新机构上修调整）。官方已公布前三季度实际：Q1 +8.15%、Q2 +8.81%、Q3 +9.95%，前三季度累计 +9.01%（GSO/财政部统计局 10/3，2011 年以来同期最高），全年若达政府 10% 目标，Q4 须 ≥12.5%。机构最新口径：UOB 10 月上调至 9.2%（原 8.5%，预计 Q4 约 +9.7%）、ADB 7.8%、世界银行 10/6 上调至 7.4%（2027–2028 均 7.3%，全年通胀预计均值 4.2%）。前三季度 CPI 均值 +4.52%。10/16 副总理 Pham Gia Tuc 报告：前三季度经济 +9.01%，Q4 须扩张 12.5% 方可达全年双位数目标，通胀压力与贸易逆差仍是挑战；越共中央委员会（10/16）定 2027 年 GDP 增速目标 ≥10%。河内 Q3 增速 10.02%（首次两位数、高于全国 9.95%）、前三季度 +8.85%。10/16 国会主席 Tran Thanh Man 亦称 2027 年须为「加速与突破之年」、GDP 目标 ≥10%，并强调区域分化明显——前三季度 34 个省直辖市中仅 12 个增速超 10%。",
    cityEconomy: {
      asOf: "2025（官方口径）",
      hcmc: {
        gdpUsdBn: 123.7,
        growth: 8.03,
        perCapitaUsd: 8900,
        disposableZh: "人均月可支配收入 ≈ 950 万盾（≈$370）",
        disposableEn: "Monthly disposable income ≈ VND 9.5M (≈$370)",
        salaryZh: "本科及以上应届：1,000–1,800 万盾/月；5–10 年经验：3,000–6,500 万盾/月",
        salaryEn: "Graduate (bachelor+): VND 10–18M/mo; 5–10yr exp: VND 30–65M/mo",
        salaryNoteZh: "白领/本科及以上口径（招聘市场 2025–2026，税前总包）。应届 IT/外企可达 1,500–2,500 万盾；经理/资深 3,500–6,500 万盾。",
        salaryNoteEn: "White-collar / bachelor+ (recruitment market 2025–2026, pre-tax). Fresh grads in IT/MNCs reach VND 15–25M; managers/seniors VND 35–65M.",
        noteZh: "2025 年与平阳、巴地-头顿合并后口径：GRDP 约 3,030 万亿盾（≈1,237 亿美元），占全国 GDP 23.5%，人均 GRDP ≈8,900 美元（约全国 1.7 倍）；财政收入首破 800 万亿盾。来源：胡志明市财政厅/人民议会（2025-12）。",
        noteEn: "2025 merged (with Binh Duong & BR-VT): GRDP ≈ VND 3,030tn (≈$123.7bn), 23.5% of national GDP; per-capita GRDP ≈$8,900 (~1.7x national); budget revenue topped VND 800tn. Source: HCMC Dept of Finance (Dec 2025)."
      },
      hanoi: {
        gdpUsdBn: 63.5,
        growth: 8.16,
        perCapitaUsd: 7200,
        disposableZh: "人均月可支配收入 ≈ 900 万盾（≈$350）",
        disposableEn: "Monthly disposable income ≈ VND 9.0M (≈$350)",
        salaryZh: "本科及以上应届：950–1,700 万盾/月；5–10 年经验：2,800–6,000 万盾/月",
        salaryEn: "Graduate (bachelor+): VND 9.5–17M/mo; 5–10yr exp: VND 28–60M/mo",
        salaryNoteZh: "白领/本科及以上口径（招聘市场 2025–2026，税前总包）。河内以政府/金融/日系外包为主，薪资略低于胡志明。",
        salaryNoteEn: "White-collar / bachelor+ (recruitment market 2025–2026, pre-tax). Hanoi skews gov/finance/Japanese outsourcing; pay slightly below HCMC.",
        noteZh: "2025 年 GRDP 增速 8.16%，规模 ≈635 亿美元（占全国 12.5%），人均 GRDP ≈7,200 美元（1.764 亿盾）；河内 2026-2030 目标年均增速 ≥11%、人均超 1.2 万美元。来源：河内市财政局/十八次党代会（2025-10）。",
        noteEn: "2025: GRDP growth 8.16%, scale ≈$63.5bn (12.5% of national), per-capita ≈$7,200 (VND 176.4M); Hanoi targets ≥11%/yr for 2026-30 and >$12,000 per capita by 2030. Source: Hanoi Dept of Finance (Oct 2025)."
      }
    }
  },
  index: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    priceIndex: [100, 112.2, 121.1, 146.3, 168.5, 187.8, 220.9],
    gdpPerCapitaIndex: [100, 105.9, 116.5, 121.6, 127.8, 136.1, 144.1],
    incomeIndex: [100, 98.9, 110, 116.8, 127.4, 137.6, 148.2]
  },

  /* ---------- 城市对比 / Cities（含2026：河内首次反超） ---------- */
  cities: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    hcmc: {
      priceUsd: [2700, 3000, 3300, 3400, 3700, 3800, 4210],
      supply: [16000, 15000, 19000, 12000, 5000, 6000, 9000],
      priceVnd: [66, 74, 81, 83, 91, 93, 109]
    },
    hanoi: {
      priceUsd: [1500, 1700, 1800, 2500, 3000, 3524, 4349],
      supply: [15500, 9800, 13500, 9200, 27500, 20000, 19000],
      priceVnd: [37, 42, 44, 61, 75, 86, 113]
    },
    q2_2026: {
      hcmcUsd: 4088,
      hanoiUsd: 4356,
      noteZh: "2026 Q2 里程碑：河内一手均价（$4,356）首次反超胡志明（$4,088），同比 +33%；胡志明进入盘整。河内去化率降至 48%（去年同期 77%），二手房价出现 2022 年底以来首次环比下跌（约 -3%），个别楼盘局部降价 5%–12%。",
      noteEn: "Q2 2026 milestone: Hanoi primary ($4,356) overtook HCMC ($4,088) for the first time, +33% YoY; HCMC consolidating. Hanoi absorption fell to 48% (77% a year ago); secondary prices fell ~3% QoQ — first decline since late 2022.",
      sourceUrl: "https://www.vietnam.vn/en/lai-suat-tang-khien-nguoi-mua-bat-dong-san-than-trong"
    },
    q3_2026: {
      hcmcUsd: 4210,
      hanoiUsd: 4349,
      noteZh: "2026 Q3（Knight Frank 10/6 发布）：胡志明一手均价 $4,210/㎡（环比 +3%、同比 +12%，主要由高端/超高端新盘拉动），季度成交 2,493 套（环比 +40%），新供应 2,711 套（环比 +29%，同比 +48%）；合并平阳/巴地-头顿后大胡志明成交 7,534 套、去化率 45%、一手均价 $3,754/㎡（环比 +2.3%）、新供应 7,203 套。河内 Q3 一手均价 $4,349/㎡（≈1.14 亿盾/㎡，环比 -0.15%、同比 +25%），成交 2,960 套（环比 -40%），新推仅 2,558 套（环比 -62%、同比 -58%）、季度新房总供应 7,776 套（新推 2,558 + 既有盘 5,218）、豪宅占新供应约 49%、去化率降至约 38%——为河内 Q2 反超胡志明后首次环比微降，开发商因高房价与资金成本上升普遍推迟开盘。Knight Frank 预计至 2027 年底胡志明新增 42,593 套（逾半在中心区）。其他机构同季口径（勿混入本表数值）：CBRE——胡志明 Q3 新推 3,267 套（同比 -53%）、去化率 45%（环比 -24 个百分点）、一手均价约 7,500 万盾/㎡（环比 -2.3%、不含 VAT）；Savills——河内新公寓供应环比 -42%/同比 -51%、成交环比 -26%/同比 -48%、一手与二手价差 A 级 28%/B 级 17%、二手连续第三季下跌；Savills（胡志明）整体去化率仅约 25%（约 1,400 笔）、在售一手约 5,800 套、Q4 预计约 6,000 套新推（较原预期 -30%）；CBRE（河内）新推约 6,200 套（环比 -28%、同比 -40%）、一手报价环比 -9%/同比 -6%（内城 -6%/-3%）；One Mount——河内一手成交约 1,700 套（环比 -76%、同比 -83%）、胡志明约 1,600 套（环比 -83%、同比 -72%），9 个月按存量一手供应的去化率 67%/43%；VARS——全国 Q3 新推公寓近 3.2 万套、成交逾 1.25 万套（去化 39.3%），河内均价 7,930 万盾/㎡、胡志明 8,830 万盾/㎡、岘港 6,890 万盾/㎡，三者环比均持平。建设部 10/19 前 9 个月报告（定性、无具体价格）：Q3 交易量较上季小幅下降、公寓价格小幅回落但大城市仍高位，工业地产逆势上行。10/19–10/20 补充（二手/挂牌口径，勿混入本表一手数值）：One Mount 称河内二手均价由 2025 年约 8,500 万盾/㎡ 降至约 7,800 万盾/㎡；Batdongsan 记录 Q3 河内常见挂牌约 8,400 万盾/㎡（较 Q1 -3%）；CBRE 口径河内二手约 6,000 万盾/㎡（环比 -5%、同比 -8%）；胡志明一手约 1.1 亿盾/㎡（环比 +3%、同比 +12%，与 Knight Frank ,210 一致）。2026 Q4 数据尚未发布，quarterly 2026 Q4 仍留空。10/21 追加口径（勿混入本表）：MBS/建设部——Q3 购房贷前 12 月固定 8.5–11.5%、优惠期后浮动 13–15%（Q1–Q2 为 12–14%），27 省市报告库存约 51,950 套、5,012 个项目待处理；Savills（胡志明 Q3）——至 9 月初已解决 650 个项目法务障碍（233 个完成、688 个已提方案），前 7 个月 37 个项目获准销售含 30 个公寓项目 21,165 套，原平阳地区占可售公寓供应 55%+，Q2 一手 80% 单价超 1 亿盾/㎡、去化约 32%，Q3 未进入普遍下调周期。10/22 追加口径（勿混入本表）：One Mount——胡志明 Q3 一手成交约 1,600 套（环比 -83%、同比 -72%），河内约 1,700 套；Savills——Q3 推出约 5,800 套、成交约 1,400 套、去化仅 25%；Knight Frank 与 CBRE 去化 38–45%（环比 -20~-24pp）；Savills 预计 Q4 约 6,000 套（较原计划 -30%），One Mount 预计 2026–2027 年胡志明年均开盘 2.2–2.5 万套（此前预期 3.5 万套以上）；Batdongsan 经纪调查——36% 客户延迟观望、25% 等待降价、仅 18% 遇合适房源即成交，46% 视高利率为最大障碍；市中心公寓租金回报 3–4%，低于浮动房贷利率。10/22–10/23 补充（二手/挂牌与提案口径，勿混入本表一手数值）：Savills 河内 Q3 一手报价约 1.07 亿盾/㎡、二手约 7,500 万盾/㎡，河内居民收入近五年年均 +9%、一手价年均 +25%；CBRE 越南胡志明 Q3 二手约 6,000 万盾/㎡（净使用面积）、投资者占比高的项目降价逾 10%；DKRA 胡志明及周边二手环比 -4~7%；HoREA 提案可负担商品房 25–30 百万盾/㎡（远郊省份）至 60–70 百万盾/㎡（大城市），并统计 9 个月全国成交约 331,876 笔、Q3 92,004 笔（环比 -8%）。10/24 追加口径（勿混入本表）：Avison Young 称胡志明 Q3 推售约 11,500 套、集中于南部与西北/东北片区，整体去化降至 28%，成交集中在旧仁泽（Di An）与顺安（Thuan An）可负担段，内城高端与豪宅去化更慢；河内市建设厅 10/24 就社房售价回应称 3,000 万盾/㎡ 以上新项目由建安成本与法定利润率决定，管控重点应落在各成本项的来源与合法性（Hnasa 遵礼 2,970 万、N02 阮廌街 >3,220 万、清烈坊 Videc-长成约 3,140 万盾/㎡）。11/07 追加口径（勿混入本表）：Cushman & Wakefield 河内 Q3——公寓新推约 2,100 套（环比 -54%）、成交约 1,720 套（环比 -61%、同比 -71%）、一手均价约 1.08 亿盾/㎡（环比 -12%，主因豪宅占比收缩、中端回归，存量在售盘环比 0~+2%，非真实降价）；Avison Young 胡志明 Q3 一手约 1.02 亿盾/㎡（$3,850）、中心与守添超豪 1.86–3.98 亿盾/㎡（$7,000–15,000）、东部与南部高端 1.01–1.46 亿盾/㎡；Knight Frank 原市区一手约 1.10 亿盾/㎡；Savills 胡志明服务式公寓 146 个项目 7,000 余套、入住约 85%、均价近 60 万盾/㎡·月（租金口径，勿与本表售价或 rentTrend 混用）。",
      noteEn: "Q3 2026 (Knight Frank, Oct 6): HCMC primary $4,210/sqm (+3% QoQ, +12% YoY, luxury-led); 2,493 transactions (+40% QoQ) on 2,711 new units (+29% QoQ, +48% YoY); enlarged HCMC (incl. Binh Duong & BR-VT) 7,534 transactions, 45% absorption, primary $3,754/sqm (+2.3% QoQ), 7,203 new units. Hanoi Q3 primary $4,349/sqm (≈VND 114M, -0.15% QoQ, +25% YoY), 2,960 units sold (-40% QoQ) against only 2,558 newly launched units (-62% QoQ, -58% YoY) and total Q3 new supply of 7,776 (2,558 launches + 5,218 from existing projects), luxury ~49% of new supply, absorption down to ~38% — first QoQ dip since Hanoi overtook HCMC in Q2, with developers delaying launches on high prices and funding costs. Knight Frank projects 42,593 new HCMC apartments by end-2027 (over half in the core city). Other houses' same-quarter readings (not used in this table): CBRE — HCMC launched 3,267 apartments in Q3 (-53% YoY) at 45% absorption (-24pp QoQ) and about VND 75m/sqm primary (-2.3% QoQ, ex-VAT); Savills — Hanoi new supply -42% QoQ / -51% YoY and sales -26% QoQ / -48% YoY, with a Grade A primary-secondary gap of 28% and Grade B 17% and secondary prices down a third straight quarter; Savills (HCMC) shows overall absorption of only about 25% (~1,400 transactions) on about 5,800 units of primary stock with roughly 6,000 launches expected in Q4 (30% below the earlier forecast); CBRE (Hanoi) counted about 6,200 launches (-28% QoQ, -40% YoY) with primary asking prices -9% QoQ / -6% YoY (inner city -6%/-3%); One Mount — about 1,700 Hanoi primary transactions (-76% QoQ, -83% YoY) and about 1,600 in HCMC (-83% QoQ, -72% YoY), with nine-month absorption of 67%/43% of existing primary supply; VARS — nearly 32,000 launches and over 12,500 sales nationwide (39.3% absorption), with average prices flat QoQ at VND 79.3m/sqm in Hanoi, VND 88.3m/sqm in HCMC and VND 68.9m/sqm in Da Nang. The Ministry of Construction's Oct 19 nine-month report is qualitative with no price levels: Q3 volumes edged down QoQ, apartment prices softened slightly but stayed high in the big cities, and industrial property bucked the trend. Oct 19-20 additions (secondary/asking basis, not to be mixed into the primary figures above): One Mount puts the Hanoi secondary average at about VND 78m/sqm versus about VND 85m/sqm in 2025; Batdongsan records Q3 common asking prices near VND 84m/sqm, down 3% from Q1; CBRE has Hanoi secondary near VND 60m/sqm (-5% QoQ, -8% YoY); HCMC primary is about VND 110m/sqm (+3% QoQ, +12% YoY, consistent with Knight Frank at $4,210). on investor-heavy projects cutting over 10%, DKRA with HCMC and surrounding secondary prices down 4-7% QoQ, HoREA proposing affordable commercial housing at VND 25-30m/sqm (outlying provinces) to VND 60-70m/sqm (major cities) and counting 331,876 nationwide transactions in nine months with 92,004 in Q3 (-8% QoQ). Q4 2026 data is not out yet, so quarterly 2026 Q4 stays blank. Nov 7 addendum (not used in this table): Cushman & Wakefield puts Hanoi Q3 launches at about 2,100 units (-54% QoQ) and sales at about 1,720 (-61% QoQ, -71% YoY), with a primary average near VND 108m/sqm (-12% QoQ purely because the luxury share shrank and mid-range supply returned, while existing projects held at 0 to +2%); Avison Young shows HCMC Q3 primary at about VND 102m/sqm ($3,850), ultra-luxury in the core and Thu Thiem at VND 186-398m ($7,000-15,000) and eastern/southern high-end at VND 101-146m; Knight Frank quotes about VND 110m in the pre-merger city; Savills counts 7,000-plus serviced apartments in 146 HCMC projects at about 85% occupancy and close to VND 600,000/sqm/month (a rent measure, not comparable with the sales series or rentTrend).",
      sourceUrl: "https://www.vietnam.vn/en/gia-chung-cu-cu-giam-can-ho-moi-van-neo-cao"
    },
    quarterly: {
      hcmc: {
        "2024": [3600, 3700, 3700, 3700],
        "2025": [3750, 3800, 3850, 3870],
        "2026": [
          4080,
          4088,
          4210,
          null
        ]
      },
      hanoi: {
        "2024": [2900, 3000, 3000, 3200],
        "2025": [3200, 3400, 3600, 3800],
        "2026": [
          4000,
          4356,
          4349,
          null
        ]
      }
    },
    quarterlySecondary: {
      hcmc: {
        "2024": [2500, 2550, 2600, 2650],
        "2025": [2700, 2800, 2850, 2900],
        "2026": [
          3000,
          3050,
          2930,
          null
        ]
      },
      hanoi: {
        "2024": [2350, 2500, 2600, 2750],
        "2025": [2850, 3000, 3100, 3150],
        "2026": [
          3200,
          3100,
          2886,
          null
        ]
      }
    },
    waveMeta: {
      periods: 11,
      firstPeriod: "2024 Q1",
      lastPeriod: "2026 Q3",
      noteZh: "一手=Knight Frank 季度报告口径；二手=二手成交估算（Global Property Guide / Savills 基准，按各季权威环比折算）。共 11 期，最后一期 2026 Q3（胡志明一手 $4,210/㎡、河内 $4,349/㎡）。2026 Q3 二手：河内 Savills 7,500 万盾/㎡（≈$2,886，环比约 -7%，连续第三季下跌）；胡志明 DKRA 口径项目二手普遍环比 -4~7%，按 -4% 折算 ≈$2,930。CBRE 另有胡志明 6,000 万盾/㎡（净使用面积）与河内 6,000 万盾/㎡ 口径，与本序列不可直接比较。",
      noteEn: "Primary = Knight Frank quarterly; secondary = estimated resale series (Global Property Guide / Savills basis, rolled forward by each quarter official QoQ change). 11 periods, latest 2026 Q3 (HCMC primary $4,210/sqm, Hanoi $4,349/sqm). 2026 Q3 secondary: Hanoi VND 75m/sqm per Savills (≈$2,886, about -7% QoQ, a third straight quarterly decline); HCMC ≈$2,930 using DKRA reported -4~7% QoQ (low end). CBRE quotes VND 60m/sqm on net usable area for HCMC and Hanoi — not comparable with this series."
    }
  },

  /* ---------- 汇率 / FX ---------- */
  fx: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    usdVndAnnual: [23190, 23150, 23580, 24150, 24750, 25850, 26500],
    cnyVndAnnual: [3361, 3590, 3504, 3411, 3442, 3610, 3716],
    usdCnyRate: [6.9, 6.45, 6.73, 7.08, 7.19, 7.16, 7.13],
    monthlyUsdVnd: {
      "2020": [23180, 23190, 23200, 23250, 23280, 23270, 23260, 23240, 23220, 23200, 23150, 23100],
      "2021": [23050, 23100, 23120, 23100, 23120, 23080, 23090, 23100, 23120, 23140, 23150, 23170],
      "2022": [22900, 22950, 23000, 23050, 23100, 23300, 23700, 23900, 24300, 24890, 24750, 24700],
      "2023": [23600, 23650, 23700, 23750, 23850, 23900, 23950, 24050, 24150, 24250, 24350, 24450],
      "2024": [24500, 24550, 24700, 24800, 24900, 25000, 25050, 25150, 25200, 25250, 25350, 25450],
      "2025": [25500, 25550, 25600, 25900, 26100, 26200, 26250, 26300, 26300, 26350, 26400, 26450],
      "2026": [26480, 26500, 26520, 26540, 26560, 26580, 26600, 26610, 26630, 25960, 25850, 26090]
    },
    latest: {
      usdVnd: 25850,
      cnyVnd: 3626,
      asOf: "2026-11"
    },
    noteZh: "越南盾 2020→2026 对美元累计贬值约 11%（23,200→25,850）、对人民币约 8%——人民币同期对美元也小幅贬值，两者同向贬值相抵，故对人民币贬值更少。切换上方「基准年」可看不同起点的累计变化。注：2026 年内 VND 仍为升值（年初约 26,480 → 25,850，约 2.4%），但 11 月中旬起回吐部分涨幅。11/12 口径：SBV 中央汇率 25,623（较 11/11 的 25,611 升 12），±5% 区间 24,342–26,904；Vietcombank 25,440 现金买 / 25,470 转账买 / 25,850 卖（较 11/11 尾盘各 +10），BIDV 25,480/25,860，Agribank 25,420 转账买 / 25,800 卖——银行卖出价自 11/10 的 25,720 回升约 130 盾。人民币：VCB 3,753/3,912（买/卖）；本表 cnyVnd 为 25,850/7.13 交叉折算（3,626），与银行挂牌不同源、勿直接对比。自由市场 25,830/25,870，与银行卖出价基本持平。央行操作：SBV 自 11/11 起每周一、周三以 25,500 VND/USD 即期购汇（以越盾付款、向系统注入 VND 流动性），并保留 182 天 USD/VND 掉期（上限 20 亿美元）；短期贷款利率已降至 8–9%、中期 9–10%。外部：美元指数升至 102.87（10 月美国 CPI 环比 +0.4%、高于预期 0.3%，CME 12 月加息概率升至 87%，美元/日元 159.85、欧元 1.11），美债收益率与金价同步走高。机构预测：MBS 年底 26,800–27,000，UOB Q4 26,300、2027 Q1–Q2 26,600/26,800。购房款须以越南盾经境内账户支付，首笔入金水单务必保存（资金出境凭证）。本页按 11/12 银行卖出价 25,850 更新；月度表 10 月格 25,960、11 月格同步为 25,850，12 月格仍为历史路径值（26,090，待用户确认）。",
    noteEn: "VND depreciated ~11% vs USD (23,200 to 25,850) and ~8% vs CNY over 2020-2026 — CNY itself slipped vs USD, so the two same-direction moves offset and VND lost less against CNY. Switch the base year above to see cumulative moves from any start. Note: within 2026 VND is still stronger vs USD (about 26,480 in January to 25,850 now, ~2.4%), though it has given back part of the gain since mid-November. As of Nov 12: the SBV central rate was 25,623 (up 12 dong from 25,611 on Nov 11), with the +/-5% band at 24,342-26,904; Vietcombank quoted 25,440 cash bid / 25,470 transfer bid / 25,850 ask (10 dong higher at both ends), BIDV 25,480/25,860 and Agribank 25,420/25,800 — bank asks are about 130 dong above the 25,720 seen on Nov 10. CNY: Vietcombank 3,753 bid / 3,912 ask; the cnyVnd figure here is a 25,850/7.13 cross rate (3,626), a different basis from bank boards. The informal market quoted 25,830/25,870, roughly level with bank asks. Central bank operations: since Nov 11 the SBV has bought USD spot every Monday and Wednesday at 25,500 VND/USD, paying in dong and injecting VND liquidity, alongside a 182-day USD/VND swap of up to US$2bn; short-term lending rates have eased to 8-9% and medium-term to 9-10%. Abroad: DXY rose to 102.87 after US October CPI came in at +0.4% MoM versus 0.3% expected, lifting CME odds of a December hike to 87%, with USD/JPY at 159.85 and EUR/USD at 1.11; Treasury yields and gold moved higher. Forecasts: MBS 26,800-27,000 by year-end, UOB 26,300 for Q4 and 26,600/26,800 for Q1-Q2 2027. Property must be paid in VND via onshore accounts — keep the first inbound remittance slip (repatriation proof). The page tracks the Nov 12 bank ask of VND 25,850; the monthly table keeps 25,960 for October, uses 25,850 for November, and still carries a legacy path value of 26,090 for December (pending user confirmation).",
    sourceUrl: "https://en.vietnamplus.vn/reference-exchange-rate-down-10-vnd-on-november-10-post355117.vnp"
  },

  /* ---------- 政策追踪（含官方链接） ---------- */
  policy: [
    {
      date: "2026-11-06",
      effective: "2026-11-06",
      category: "决议 / Resolution",
      titleZh: "政府第 353/NQ-CP 号决议（10 月例会：房地产信贷与外汇信贷专项检查）",
      titleEn: "Government Resolution 353/NQ-CP (October meeting: targeted checks on property and FX credit)",
      keyZh: "要求国家银行加强对潜在风险领域信贷的检查监督，重点为房地产经营信贷与外汇信贷；信贷机构须严控信贷质量、跟踪房地产企业（尤其债务重组中的企业）到期还款能力，集中处理不良贷款并限制新增，落实 2026-09-18 第 1809 号决定批准的银行体系重组方案，依法处置交叉持股、隐性持股与操纵银行活动。货币政策须兼顾利率与汇率、货币对内与对外价值，继续引导生产经营、优先领域、出口与中小企业贷款利率下行，并加强对利率法规执行情况的检查，对不执行降息指导或存在不正当利率竞争的机构及时纠正、严肃处理。房地产：继续推进 12 万亿盾社房、工人住房及 35 岁以下首购社房贷款计划，及时解决客户获贷困难；完成 2026 年社房与租赁住房指标、加快工人住房进度。宏观目标：GDP ≥10%、全年公共投资拨付 100%、CPI 均值约 4.5%、不提高国家管理商品与服务价格。",
      keyEn: "Tells the SBV to tighten inspection and supervision of lending in risk-prone areas, specifically real estate business credit and foreign-currency credit; institutions must enforce credit quality, track the repayment capacity of property firms (especially those restructuring debt), work down bad loans while capping new ones, carry out the bank-restructuring scheme approved under Decision 1809 of Sept 18, 2026 and deal with cross-holdings, hidden ownership and manipulation of bank operations. Monetary policy must balance rates and the exchange rate and the internal and external value of the dong, keep steering lending rates down for production, priority sectors, exporters and SMEs, and step up checks on rate compliance, correcting and penalising institutions that ignore rate-cut guidance or compete improperly on rates. Housing: keep pushing the VND 12 trillion programme for social housing, worker housing and social housing bought by under-35 first-time buyers, clear obstacles to borrowers, and complete 2026 social and rental housing targets. Macro targets: GDP growth of 10% or more, 100% public investment disbursement, average CPI around 4.5%, and no increases in state-managed prices.",
      statusZh: "已颁布（2026-11-06），执行中；官方公报直链待补（vbpl.vn 检索未命中，暂引政府新闻网全文转载）",
      statusEn: "Issued Nov 6, 2026 and in force; direct Official Gazette link pending (not yet found on vbpl.vn, full text cited via the government news portal reprint)",
      links: [
        {
          zh: "政府新闻网（Chinhphu.vn）全文转载",
          en: "Government news portal (Chinhphu.vn) full text",
          url: "https://www.vietnam.vn/en/nghi-quyet-phien-hop-chinh-phu-thuong-ky-thang-10-2026"
        },
        {
          zh: "中文要点：房地产信贷与外汇信贷检查",
          en: "Chinese summary: property and FX credit checks",
          url: "https://news.qq.com/rain/a/20261109A060LZ00"
        }
      ]
    },
    {
      date: "2026-10-28",
      effective: "2026-11-07",
      category: "决议 / Resolution",
      titleZh: "河内第 96/2026/NQ-HĐND 号决议（违规项目处置与购房者保护）",
      titleEn: "Hanoi Resolution 96/2026/NQ-HDND (handling violating projects, protecting homebuyers)",
      keyZh: "就 12 个存在土地使用与建设秩序违规的都市整饰项目给出处置机制：无过错购房者不承担整改费用与损失、保留申诉诉讼权；需拆除或改变用途者，收足额补偿后 90 日内交房、交房前可原地居住，补偿由估价委员会按市价确定；腾退户优先购同项目住房、符合条件者优先购租社房免摇号；临街商铺唯一收入来源者获 6 个月地区最低工资一次性补助（开发商支付）；结构可保留者继续履约并办证。依据《首都法》02/2026/QH16 第 8 条第 2 款、第 14 条第 4 款。",
      keyEn: "Sets handling rules for 12 urban-upgrading projects with land-use and construction-order violations: blameless buyers bear no remediation costs or losses and keep recourse to complaints and courts; where demolition or repurposing is required, handover within 90 days of full compensation valued by the appraisal council at market price, with residents allowed to stay until then; displaced households get priority to buy in the same project and, if eligible, priority social housing without a lottery; shopkeepers relying solely on the converted podium get a one-off six-month regional minimum wage payment from the developer; where structures stay, buyers keep contracts and receive certificates. Based on Articles 8.2 and 14.4 of the Capital Law 02/2026/QH16.",
      statusZh: "已通过，2026-11-07 生效",
      statusEn: "Passed, effective Nov 7, 2026",
      links: [
        {
          zh: "河内市议会（决议与解读）",
          en: "Hanoi People's Council",
          url: "https://dbndhanoi.gov.vn/bai-viet/nghi-quyet-so-962026nq-hdnd-bao-ve-toi-da-quyen-loi-nguoi-mua-nha-"
        },
        {
          zh: "Vietnam.vn 要点解读",
          en: "Vietnam.vn summary",
          url: "https://www.vietnam.vn/en/nghi-quyet-so-96-2026-nq-hdnd-bao-ve-toi-da-quyen-loi-nguoi-mua-nha"
        }
      ]
    },
    {
      date: "2023-11-27",
      effective: "2024-08-01",
      category: "法律 / Law",
      titleZh: "《住房法》2023（27/2023/QH15）",
      titleEn: "Housing Law 2023 (27/2023/QH15)",
      keyZh: "外籍可在商业住宅项目购公寓/住房，50 年可续期一次（最长100年）；单楼外籍配额 ≤30%。",
      keyEn: "Foreigners may buy housing in commercial projects; 50-yr renewable (max 100); ≤30% foreign quota per building.",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "国家法律库检索",
          en: "Law library",
          url: "https://vbpl.vn"
        }
      ]
    },
    {
      date: "2024-01-18",
      effective: "2024-08-01",
      category: "法律 / Law",
      titleZh: "《土地法》2024（31/2024/QH15）",
      titleEn: "Land Law 2024 (31/2024/QH15)",
      keyZh: "土地国有；外国人仅拥有建筑物+有期限土地使用权；明确「红/粉皮书」登记制度。",
      keyEn: "Land state-owned; foreigners own building + time-limited LUR; clarifies certificate regime.",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "国家法律库检索",
          en: "Law library",
          url: "https://vbpl.vn"
        }
      ]
    },
    {
      date: "2024-07-24",
      effective: "2024-08-01",
      category: "细则 / Decree",
      titleZh: "第 95/2024/ND-CP 号法令（住房法实施细则）",
      titleEn: "Decree 95/2024/ND-CP",
      keyZh: "独栋房外籍配额每「坊」≤250 套；续期须期满前至少 3 个月申请。",
      keyEn: "Landed-house quota ≤250/ward; renewal ≥3 months before expiry.",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "政府公报",
          en: "Gov gazette",
          url: "https://chinhphu.vn"
        }
      ]
    },
    {
      date: "2024-01-01",
      effective: "2025-01-01",
      category: "法律 / Law",
      titleZh: "《房地产经营法》2023（29/2023/QH15）",
      titleEn: "Real Estate Business Law 2023",
      keyZh: "定金上限 5%；首期(含定金)≤30%；交房前累计付款≤70%（外资开发商≤50%）；可保留尾款 5% 至粉皮书下发。",
      keyEn: "Deposit ≤5%; first installment ≤30%; ≤70% pre-handover (≤50% for FIE developers); may withhold 5% until Pink Book.",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "国家法律库检索",
          en: "Law library",
          url: "https://vbpl.vn"
        }
      ]
    },
    {
      date: "2024-07-01",
      effective: "2024-07-01",
      category: "薪资 / Wage",
      titleZh: "第 74/2024/ND-CP 号法令：最低工资 +6%",
      titleEn: "Decree 74/2024/ND-CP: min wage +6%",
      keyZh: "一类地区月最低工资升至 496 万盾。",
      keyEn: "Region I min wage to VND 4.96M/month.",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "政府公报",
          en: "Gov gazette",
          url: "https://chinhphu.vn"
        }
      ]
    },
    {
      date: "2026-01-01",
      effective: "2026-01-01",
      category: "信贷 / Credit",
      titleZh: "2026 上半年房贷利率升至 12%–13%",
      titleEn: "H1 2026 mortgage rates climbed to 12–13%",
      keyZh: "利率上行+房价高企，购房需求转谨慎，市场进入调整期。",
      keyEn: "Higher rates + high prices → cautious buyers, market in adjustment.",
      statusZh: "进行中",
      statusEn: "Ongoing",
      links: [
        {
          zh: "国家银行",
          en: "State Bank",
          url: "https://www.sbv.gov.vn"
        }
      ]
    },
    {
      date: "2026-09-30",
      effective: "2026-09-30",
      category: "决议 / Resolution",
      titleZh: "第 303/NQ-CP 号决议：2026–2030 社会住房/租赁住房指标",
      titleEn: "Resolution 303/NQ-CP: social & rental housing targets 2026–2030",
      keyZh: "各地 2026–2030 社会住房+租赁住房总指标 899,857 套（出售/租购 708,834 + 租赁 191,023）；胡志明市 181,257 套、河内 84,000 套；取代第 07/NQ-CP 号决议，优先在 TOD/工业区发展租赁住房。",
      keyEn: "Local 2026–2030 target 899,857 units (708,834 sale/lease-purchase + 191,023 rental); HCMC 181,257, Hanoi 84,000; replaces Resolution 07/NQ-CP; prioritizes rental housing near TOD/industrial zones.",
      statusZh: "已发布",
      statusEn: "Issued",
      links: [
        {
          zh: "政府公报",
          en: "Gov gazette",
          url: "https://chinhphu.vn"
        }
      ]
    },
    {
      date: "2026-07-28",
      effective: "2026-07-28",
      category: "决议 / Resolution",
      titleZh: "中央第 21-NQ/TW 号决议：土地法修订方向",
      titleEn: "Resolution 21-NQ/TW: Land Law amendment direction",
      keyZh: "为修订《土地法》及配套法律定调：地价按市场/数据化重估、严控城市分拆售地、鼓励可负担租赁住房、提高空地/囤地持有成本并征收土地增值。",
      keyEn: "Sets direction for amending the Land Law: data-driven land valuation, curbs on urban land subdivision, incentives for affordable rental housing, higher holding costs on vacant/hoarded land and value-capture taxes.",
      statusZh: "已发布",
      statusEn: "Issued",
      links: [
        {
          zh: "VnEconomy 解读",
          en: "VnEconomy",
          url: "https://en.vneconomy.vn/people-at-the-center.htm"
        }
      ]
    },
    {
      date: "2026-10-02",
      effective: "待定",
      category: "法律草案 / Draft Law",
      titleZh: "《房地产经营法》修订草案（国会常委会 10/2 审议）",
      titleEn: "Draft amended Real Estate Business Law (NA Standing Committee, Oct 2)",
      keyZh: "草案 10 章 61 条（较 2023 年 10 章 83 条减 22 条）：精简投资经营条件与行政手续（含交易平台/经纪/管理人员培训认证要求）、厘清「房地产经营/项目/存量房/在建房」定义；期房首期 ≤合同价 30%（含 5% 定金），取得红本前收款 ≤95%，余 5% 转入信贷机构冻结账户、取得红本后划转、利息归买方（亦可协商其他担保方式）；非公寓住宅项目预售条件放宽为「已开工 + 具备土地使用权与建设证件」，公寓仍须完成地基；省级人委会获授权决定项目全部/部分转让。",
      keyEn: "10 chapters, 61 articles (22 fewer than the 2023 law's 10/83): trims business conditions and admin procedures (incl. training-certification for trading floors, brokers, managers) and sharpens definitions; off-plan first instalment capped at 30% of contract value (incl. 5% deposit), collections capped at 95% until the red book is issued, with the last 5% held in a frozen bank account and released on certification, interest to the buyer (other guarantee forms may be agreed); presale conditions eased for non-apartment housing to started construction plus land-use and construction documents, while apartments still need foundations; provincial committees may approve full or partial project transfers.",
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程；10/22 上午全体会议已听取呈文与审查报告并全天分组讨论，10/30 全体会议再讨论，拟 11/21 上午与《土地法》《住房法》一并表决；若通过则自 2027-07-01 施行）。10/24 分组讨论补充：有代表提议取消项目转让的前置条件，经济委员会仍在权衡受让方以托管账户或银行担保承继未缴土地款的替代方案，尚未定案。10/26 汇总：本次会议另以快速程序列入《投资法》修订草案（落实政治局 2026-06-08 第 10-NQ/TW 号决议、拟 2027-01-01 生效），与本法的准入松绑方向一致。11/02 更新（仍无结论）：国会常委会第八次会议 11/2 下午（17:00–20:00）进入第一阶段，就含本法在内的 35 项法律与决议草案的说明、意见采纳及修改完善提出意见；第二至四阶段为 11/10、11/13、11/17–18 与 11/25 上午。全会仍定于 11/21 上午与《土地法》《住房法》一并表决，表决前一律属待定。10/30 全体会议补充：代表建议以银行担保为默认机制（买方获充分说明后另签确认方可放弃）；建议第 30 条第 4 款增设「有条件项目转让」（项目合法可继续实施且未被收回土地、剩余财政义务已由主管机关确定、受让方证明财务能力，应缴款项在转让完成前或同时直接缴入预算）；第 37 条合同转让须强制确认并以电子数据更新至住房与房地产市场信息系统，明确权利义务转移时点且不新增行政手续。10/30 上午全体会议审议：建设部长陈鸿明明确投资商须施工至地基并满足全部条件后方可收定金、5% 尾款由银行担保、企业参与项目须满足 15% 自有资金条件；代表要求比对在售房源与获批规划、堵住以「预留费/登记费」变相集资、合同转让强制登记防一房多卖。",
      statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the drafted schedule the three property-law amendments — Land, Housing and Real Estate Business — go to a single vote on the morning of Nov 21). Oct 24 group talks: a deputy proposed dropping pre-transfer conditions on project transfers, while the Economic Committee is still weighing letting a transferee assume outstanding land payments under escrow or a bank guarantee — not settled. Oct 26 round-up: the session also added the draft Investment Law amendment under expedited procedure (implementing Politburo Resolution No. 10-NQ/TW of June 8, 2026, effective Jan 1, 2027), consistent with this law's direction of easing market entry. Oct 30 plenary: Minister Tran Hong Minh said deposits are allowed only after foundations are completed and all conditions met, the final 5% is bank-guaranteed, and developers must meet the 15% own-capital test; deputies pressed for matching for-sale unit lists to approved plans, closing reservation-fee fundraising loopholes and mandatory registration of contract transfers to prevent double-selling.",
      links: [
        {
          zh: "国会审议",
          en: "NA review",
          url: "https://vietnamnews.vn/politics-laws/1801111/na-standing-committee-discusses-draft-revised-housing-real-estate-business-laws.html"
        }
      ]
    },
    {
      date: "2026-10-02",
      effective: "待定",
      category: "法律草案 / Draft Law",
      titleZh: "《住房法》修订草案（国会常委会 10/2 审议）",
      titleEn: "Draft amended Housing Law (NA Standing Committee, Oct 2)",
      keyZh: "草案共 13 章 130 条（10/18 提交国会法司委的正式稿即 13 章 130 条，较 2023 版 198 条减 68 条——按政府新闻网 10/22 呈文口径），新增「租赁住房」专章；社房满 5 年后可按法定条件转售，租金由投资方与承租方按足额成本协商、不得超过省级价格框架；拟取消外籍对「独栋房/联排房」（landed house）的所有权，外籍仅保留公寓购买/继承资格（与《土地法》国有土地原则衔接）。建设部明确四大住房类别发展导向：商品房、租赁住房、公租房、政策性住房。社会住房试点政策拟入法（依据国会 201/2025/QH15 决议与政府 66.15/2026/NQ-CP 决议）；20/21 项程序下放地方，经营条件精简四分之三。",
      keyEn: "Draft 13 chapters/130 articles (the text submitted to the NA Law and Justice Committee on Oct 18 runs to 13 chapters and 130 articles, 68 fewer than 2023); adds a rental-housing chapter; social housing may be resold after five years subject to statutory conditions, with rents negotiated on a full-cost basis but capped by the provincial price framework; proposes removing foreigners' ownership of landed houses (villas/townhouses), restricting them to apartments only (aligning with Land Law state-ownership principle). MOC defines 4 housing groups: commercial, rental, public, policy. Social-housing pilots to be codified (NA Res 201/2025/QH15, Gov Res 66.15/2026/NQ-CP); 20/21 procedures decentralized, business conditions cut by 3/4.",
      statusZh: "审议中（已列入国会本次会议议程，会期 2026-10-17 开幕至 11-21 闭幕，分 10/17–11/14 与 11/20–11/21 两阶段，11/15–11/19 休会整理；拟本次通过、2027 年年中生效。10/18 下午建设部已向国会法律与司法委员会常设机构提交正式稿：13 章 130 条；按商业/租赁/公务/政策性住房四类重排并单设租赁住房发展专章（承租对象、国家与民间两种投资形式、项目条件、投资方优惠、租金与管理）；公寓改造重建规则衔接城市更新、新增公私合作方式；删除工业园区外专家与劳动者宿舍规定，将外国劳动者移出可租住社会住房对象范围；开发商配建社房/租赁房义务改由省级人委会决定实施方式（项目内留地、项目外安排土地或缴纳等值款项）。审查机构建议明确国家资金租赁住房的对象与优先顺序，并核查与《土地法》《房地产经营法》的一致性。10/16 国会办公厅吹风会确认会期 28 天（含 6 个周六、1 个周日）、备选闭幕日 11/23，共审议 47 项法律与规范性决议草案（43 项拟通过、4 项作初次意见，其中拟通过法律 39 部），11/12 首次安排一天部长质询；10/17 上午预备会议并正式开幕；10/22 上午全体会议听取呈文与审查报告、随后分组讨论（下午续），评估意见要求通过后尽早出台议定与建设部实施细则；据国会预定议程，三部修订法拟于 11/21 上午同时表决；生效时点另有报道称草案拟 2027-03-01 生效，与「2027 年年中」口径不一，待官方文本确认；10/23 媒体报道补充分组讨论焦点——强制公证范围应否由法律直接规定（司法部长黄清松主张法律规定，若授权政府须限定内容与范围）、外籍公寓 30% 上限应否保留在法律中（胡志明代表阮清心主张保留硬性上限，仅授权政府规定计算方式与多栋统筹；涉及边境、沿海、岛屿与战略设施周边的人口与国防安全考量）、外籍购买楼层面积与土地使用权衔接的产权边界及登记发证程序待明确；10/24 补充——社房 5 年后转售对象受限：草案规定付清房款满 5 年并取得证书后，转售只能卖给符合社房购买条件的对象（5 年自付清房款之日起算，非交房日），不再按 2023 年法自由按市价出售；总理黎明兴称过去存在买社房等 5 年再按市价转售牟利、把福利政策变成套利机会的现象，须严格逐笔核验；代表胡越朝建议为因工作调动、居住地变更必须搬迁者设例外机制，代表黎氏玉玲指出草案未明确转售定价原则并要求为依 2023 年法已购房、已签约者设过渡条款；开发商 G6 要求明确受理与审核主体（建议坊级人委会）、增值与装修部分处理及双方税负。11/02 更新（仍无结论）：同为国会常委会第八次会议第一阶段（11/2 17:00–20:00）审议修改完善的 35 项草案之一，后续 11/10、11/13、11/17–18、11/25 继续；全会 11/21 上午与另两部法同时表决，表决前一律属待定。截至 2026-11-02 未见官方通过文本，生效时点「2027 年年中」与「2027-03-01」两种口径仍未统一。注：目前仅为草案建议，现有业主出售权利未改变）；11/04 政府例行发布会（建设部副部长黎鸿荣）确认草案已完成并提交本届国会：第 31/38/44/59/70 条界定社房、租赁房与工人住房的受益对象、住房与收入条件及优先顺序，第 32/33/45/60/62 条定支持原则（老兵、残疾人、贫困家庭优先 + 优惠贷款），第 42/48/64 条给投资方免土地费、税收信贷优惠、允许配建部分商服摊薄成本；仍未见表决结果，维持 11/21 表决口径)；11/09–11/13 第四周（11/12 核实）：全体会议继续审议租赁住房专章，代表要求租金与目标群体承受能力挂钩并设透明度与调整责任、租赁用地优先布局大城市市区与 TOD 走廊/工业区/院校周边、受惠企业须承担租金水平与维护义务且不得转为商品房牟利、受益者不得转租牟利；并允许公寓管委会聘请专业单位协助采购、招标与合同签订（须防与运营物业的利益冲突）。11/12 全天部长质询、11/13 表决计量法、证券法等多部法律与决议；《住房法》修订草案仍按 11/21 表决口径，最终文本待官方公布核实",
      statusEn: "Under review (on the NA session agenda opening Oct 17 and closing Nov 21, 2026, in two phases Oct 17–Nov 14 and Nov 20–21 with a Nov 15–19 recess for drafting; passage expected this session, effect mid-2027. On the afternoon of Oct 18 the Ministry of Construction submitted the formal text to the standing bodies of the NA Law and Justice Committee: 13 chapters and 130 articles, regrouped into commercial, rental, official-duty and policy housing with a dedicated rental-housing chapter (eligible tenants, state and private investment models, project conditions, investor incentives, rents and management); apartment renovation rules linked to urban renewal, with public-private partnership models added; dormitory rules for experts and workers outside industrial parks dropped and foreign workers removed from eligible social-housing tenants; the developer obligation to build social or rental housing left to provincial people's committees (on-site land, off-site land or an equivalent payment). The reviewing body asked for a clear priority order for state-funded rental housing and a consistency check against the Land Law and the Law on Real Estate Business. The Oct 16 NA Office briefing confirmed a 28-day session including six Saturdays and one Sunday, with Nov 23 as an alternative closing date, 47 draft laws and normative resolutions under consideration (43 for adoption including 39 laws, four for first opinions), and a one-day interpellation of ministers on Nov 12; the preparatory meeting and formal opening were held on the morning of Oct 17; per the drafted schedule the three amended laws are set for a single vote on the morning of Nov 21; some reports put the intended entry into force at Mar 1, 2027 rather than mid-2027 - to be confirmed against the official text; Oct 23 reports add the group-discussion flashpoints: whether mandatory notarisation should be set by law itself (Justice Minister Hoang Thanh Tung backs legislating it, with any delegation bounded in content and scope), whether the 30% foreign apartment cap should stay in the law (HCMC deputy Nguyen Thanh Tam wants the hard cap retained with the government only setting the calculation method and multi-tower coordination, citing population and defence-security concerns in border, coastal, island and strategic areas), and how far foreign floor-space ownership links to land-use rights, including title boundaries and registration; 10/28 下午为全体会议专项讨论（此前记为「分组讨论」，按国会日程应为全体会议，已更正）：代表普遍要求社房与租赁住房租金挂钩居民实际支付能力，5 年后转售价按「原购买价 × 有权机关确定调整系数」封顶并配套事后审计与处罚；多名代表反对「只能卖给合格对象且不高于合同价」的一刀切（胡志明代表武玉清竹指调动工作、重病或迁居时被迫出售唯一住房构成过大障碍）；同奈代表郑春安建议为违规项目购房者单设保护条款、不得把投资方整改费用转嫁居民；建设部长称将吸收意见完善草案，仍按 11/21 上午与另两部法一并表决。) Nov 4 addendum: at the regular government briefing Deputy Minister Le Hong Vinh confirmed the amended draft is finalised and with the current National Assembly, with Articles 31/38/44/59/70 defining eligible groups, housing and income tests and priority order, Articles 32/33/45/60/62 setting support principles (veterans, disabled and poor households first, plus concessional credit) and Articles 42/48/64 granting investors land-fee exemptions, tax and credit incentives and a commercial floor-space share to offset costs. No vote result yet; the Nov 21 timing stands. Week four (Nov 9-13, checked Nov 12): plenary debate on the rental-housing chapter focused on tying rents to target groups' affordability with transparency and adjustment duties, prioritising rental land in big-city urban districts and along TOD corridors near industrial parks and universities, obliging beneficiary developers to meet rent and maintenance duties and barring conversion to for-sale housing or subletting for profit, and allowing apartment boards to hire professional units for procurement, tendering and contracts under conflict-of-interest safeguards. Nov 12 was a full-day interpellation and Nov 13 brings votes on the measurement and securities laws among others; the Housing Law draft keeps its Nov 21 vote slot pending the official text.",
      links: [
        {
          zh: "政府/国会解读",
          en: "NA review",
          url: "https://en.thevietmedia.net/vietnam-housing-law-foreigners-landed-houses-2026"
        }
      ]
    },
    {
      date: "2026-10-01",
      effective: "待定",
      category: "法律草案 / Draft Law",
      titleZh: "《土地法》修订草案（国会常委会 10/1 审议）",
      titleEn: "Draft amended Land Law (NA Standing Committee, Oct 1)",
      keyZh: "草案新增 3 类「为经济社会发展而征收土地」情形（含国际条约履约、公租/保障房项目建设、>50 公顷物流中心等）；强调「尽可能避免仅为拍卖创收而征收居民住宅用地」；拟按省定年度地价表+调整系数计算土地税费/租金/补偿，并要求土地交易经数字平台登记；目标 2027-03-01 生效（草案口径）。10/22 国会分组讨论披露：草案共 112 条（现行 2024 年《土地法》260 条），土地分类简化为农用地、非农用地、发展储备用地三类，取消省级独立土地利用规划、内容并入省级规划，乡级土地使用计划简化并数字化；每块土地设全国唯一识别码，数字登记与纸质证书同等效力，已在公布土地数据库内的材料不得要求重复提交；未使用土地 60 个月后可被收回，并拟对囤地按递增标准加征费用。",
      keyEn: "Draft adds 3 land-reclamation cases for socio-economic development (international treaties; public/rental housing; >50ha logistics hubs); stresses minimizing reclamation of residential land solely for auction revenue; would compute land levies, lease payments and compensation from annual provincial price lists plus adjustment coefficients, and require land transactions to be registered via digital platforms; targets entry into force on Mar 1, 2027 (draft).",
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程，拟本次审议通过。10/16 国会吹风会口径：修订重点是完善地价表与调整系数、健全土地财政政策，并把土地数据与相关专业数据互联互通以防止操纵与人为抬价；征收/补偿/安置方面明确可在补偿安置方案获批前收回土地的法定情形，同时增设约束与承诺条款保障被征收人合法权益、确保居住与生计条件改善；10/22 上午全体会议听取呈文与审查报告并分组讨论；10/22 下午分组讨论要点：总理黎明兴称土地分类、规划与用地计划是重点，全国仅保留国防、安全与国土三张国家级用地规划，省级不再单设土地利用规划而并入省级规划；地价由国家按「省级地价表+调整系数」确定，取代 2024 年法逐项定价与聘请咨询机构核价的机制，程序须公开透明、基于土地与专业数据；国会主席陈青敏要求本法至少稳定运行 10–15 年，避免反复修改，并严打炒作与操纵价格，补偿安置须量化为可衡量标准（住房、学校、医疗与基本服务）；国会经济与财政委员会主任范文买建议保留林地、稻田、国防安全用地的严格管控，其余用途可按发展优先序灵活管理；据国会预定议程，三部修订法拟于 11/21 上午同时表决。11/02 更新（仍无结论）：已列入国会常委会第八次会议第一阶段（11/2 17:00–20:00）35 项草案审议清单，后续 11/10、11/13、11/17–18、11/25 继续；截至 2026-11-02 尚无定稿结论）；11/03 更新（仍无结论）：政府呈文披露地价表与 K 系数拟由逐年发布改为每三年定期确定一次、首个适用期 2028-01-01 起，期间基础设施/规划/管理目标变化可即时调整；地价由国家按四项原则确定，须公开透明、防止操纵与虚高；草案 3 章 112 条，国会预计 11/21 审议表决）",
      statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the Oct 16 NA briefing, the revision focuses on improving land price tables and adjustment coefficients, reforming land-finance policy, and interlinking land data with related specialist datasets to prevent manipulation and artificial pricing; on reclamation it would specify the legal cases where land may be taken before compensation and resettlement plans are approved while adding safeguards for affected households' housing and livelihoods; per the drafted schedule the three amendments are set for a single vote on the morning of Nov 21; 10/29 全体会议正式审议（越通社）：草案 13 章 112 条，较 2024 年《土地法》减少 3 章 148 条；不再规定具体地价与地价确定咨询机构，集中完善国家定价原则与依据、地价表与地价调整系数，并补充土地使用费/租金收取比例与补偿比例；乡级土地利用计划按简化、数字化、与省级规划及城乡/行业详细规划整合的方向编制。)",
      links: [
        {
          zh: "国会吹风会",
          en: "NA briefing",
          url: "https://worldculturefestival.vn/en/quoc-hoi-khoa-16-lan-dau-chat-van-cac-bo-truong"
        }
      ]
    },
    {
      date: "2026-10-07",
      effective: "2026-10-07",
      category: "总理令 / Directive",
      titleZh: "第 68/CD-TTg 号总理令：闲置房屋土地处置纳入负责人 KPI",
      titleEn: "Directive 68/CD-TTg: idle land & housing disposal into leaders' KPIs",
      keyZh: "要求 2026 年内彻底处置闲置超 12 个月、废弃或不当使用的房屋与土地；处置进度与结果纳入部委/地方负责人绩效考核（KPI），对拖延、设障、牟利者严厉处分；全国仍有 9,662 处剩余房屋土地待明确处置方案（10 省市各超 500 处）。",
      keyEn: "Mandates full disposal within 2026 of land/housing idle >12 months, abandoned or misused; progress folded into leaders' KPIs with strict discipline for foot-dragging; 9,662 redundant properties still lack a plan (10 localities >500 each).",
      statusZh: "已发布",
      statusEn: "Issued",
      links: [
        {
          zh: "政府公报",
          en: "Gov gazette",
          url: "https://chinhphu.vn"
        }
      ]
    },
    {
      date: "2026-10-06",
      effective: "2026-10-06",
      category: "决议 / Resolution",
      titleZh: "河内第 72/2026/NQ-HĐND 号决议：租赁住房规划框架",
      titleEn: "Hanoi Resolution 72/2026/NQ-HĐND: rental housing framework",
      keyZh: "允许在城乡、TOD 开发区、人口密集区、工业区/出口加工区/高新区等地规划租赁住房；租赁住房投资项目至少 50% 面积须用于出租，其中至少 70% 出租住房预留给政策受益者。",
      keyEn: "Permits rental housing in urban/rural, TOD zones, dense areas and industrial/EPZ/hi-tech zones; ≥50% of a rental-housing project must be for rent, with ≥70% of rental units reserved for policy beneficiaries.",
      statusZh: "已发布",
      statusEn: "Issued",
      links: [
        {
          zh: "河内人民议会",
          en: "Hanoi People's Council",
          url: "https://hanoi.gov.vn"
        }
      ]
    },
    {
      date: "2026",
      effective: "2026",
      category: "法令 / Decree",
      titleZh: "第 357 号法令：住房与房地产市场信息系统/数据库（编号以官方公报核对为准）",
      titleEn: "Decree 357: housing & real-estate market information system/database (number to verify)",
      keyZh: "规范住房与房地产市场信息系统及数据库的建立、管理与运行，2026 年起生效；配合 2026 年底完成国家土地数据库、统一不动产登记系统与交易须经银行系统结算等要求，提升市场透明度（JLL GRETI 2026 越南得分 3.15、排名第 50/88，为全球改善最快市场之一）。",
      keyEn: "Governs establishment, management and operation of the housing & real-estate market information system and database, in force from 2026; supports completing the national land database by end-2026, a unified property registration system and bank-channel settlements, lifting transparency (JLL GRETI 2026: Vietnam scores 3.15, ranks 50/88, among the most-improved markets).",
      statusZh: "已生效",
      statusEn: "In force",
      links: [
        {
          zh: "国家法律库检索",
          en: "Law library",
          url: "https://vbpl.vn"
        },
        {
          zh: "VnEconomy 解读",
          en: "VnEconomy",
          url: "https://en.vneconomy.vn/edging-upwards-in-real-estate-transparency.htm"
        }
      ]
    },
    {
      date: "2026-10-19",
      effective: "待定",
      category: "法律草案 / Draft Law",
      titleZh: "《资产拍卖法》修订草案（政府 10/19 提交国会）",
      titleEn: "Draft amended Law on Property Auction (submitted to the NA, Oct 19)",
      keyZh: "个人受让住宅用地使用权的拍卖预缴保证金拟由现行水平提高至起拍价的 20%–50%，以遏制高价弃标；中标后弃标的个人禁止再次参与住宅用地拍卖，因违规导致拍卖结果被取消者不予退还保证金；全民所有、起拍总价 ≥2 亿盾的资产须通过在线拍卖系统组织。草案将该规则溯源至政府第 66.11/2026/NQ-CP 号决议（处理住宅用地拍卖障碍）。国会经济与财政委员会审查认为 50% 上限偏高、可能抬高资金成本，要求补充数据并明确档次标准。",
      keyEn: "The deposit for auctions of residential land-use rights would rise to 20–50% of the starting price to deter high bids that are never paid; defaulting winners would be barred from bidding again and would forfeit the deposit if their breach annuls the result; assets worth VND 200m or more at starting price must go through the online auction system. The draft codifies Resolution 66.11/2026/NQ-CP on removing obstacles in residential land auctions. The NA Economics & Finance Committee calls the 50% cap too high, warning of higher capital costs, and wants data plus clear tiering criteria.",
      statusZh: "已提交国会审议（10/19 上午司法部长代表政府陈述，同日国会分组讨论；拟与《土地法》《住房法》《房地产经营法》修订案衔接，配套细则拟以法令形式合并颁布）。11/03 下午全会讨论：司法部长黄清松建议保留住宅用地拍卖预缴金 20%–50% 区间，称实施九个月内因未缴足款被取消的成交占比由 2025 年 8.6% 降至 2026 年前九个月 3.1%，清化适用 50% 后弃拍由 377 宗降至 82 宗；项目用地拍卖拟维持起拍价 10%–20%；多位代表认为高预缴抬高门槛、建议以「中标即成立买卖合同」治本。",
      statusEn: "Submitted to the NA (presented by the Justice Minister on the morning of Oct 19, group discussions the same day; to be aligned with the amended Land, Housing and Real Estate Business laws, with implementing rules consolidated into a single decree). Nov 3 plenary: the Justice Minister asked to keep the 20-50% deposit band for residential land auctions, citing cancelled sales for non-payment falling to 3.1% in Jan-Sep 2026 from 8.6% in 2025 and Thanh Hoa's defaults dropping from 377 to 82 plots at the 50% level; deposits for project-land auctions would stay at 10-20% of the starting price, while several deputies warned the high deposit shuts out genuine buyers and urged treating a winning bid as a binding sale contract.",
      links: [
        {
          zh: "西贡解放日报（英文）",
          en: "SGGP English",
          url: "https://en.sggp.org.vn/prime-minister-calls-for-controls-to-keep-social-housing-prices-affordable-post130398.html"
        },
        {
          zh: "劳动报",
          en: "Lao Dong",
          url: "https://news.laodong.vn/thoi-su/thu-tuong-yeu-cau-hoan-thien-quy-dinh-dau-gia-kiem-soat-gia-nha-o-xa-hoi-1785577.ldo"
        }
      ]
    },
    {
      date: "2026-10",
      effective: "已生效（2026）",
      category: "法令 / Decree",
      titleZh: "第 147/2026/NĐ-CP 号法令：落实国会第 29/2026/QH16 号决议，处置涉土地违法与长期停滞项目",
      titleEn: "Decree 147/2026/ND-CP: implementing NA Resolution 29/2026/QH16 on land-related violations and long-stalled projects",
      keyZh: "为国会第 29/2026/QH16 号决议（针对 2024 年《土地法》生效前组织与个人的土地违法行为，以及长期停工、拖延项目）提供实施细则：明确适用对象、处置方式与办理程序，供地方据以解冻项目、恢复施工与补办手续。落地进展：依政治局第 77-KL/TW 号结论、国会第 170/2024/QH15 与 29/2026/QH16 号决议及本法令，全国 2,035 个长期停滞项目中 1,985 个已化解（97.5%）；岘港列管 354 个项目与地块、已处理 206 个（58.2%），海防 249 个中化解 239 个。地方口径强调「解决困难但不合法化既往违规」。",
      keyEn: "Provides implementing rules for NA Resolution 29/2026/QH16, which addresses land-related violations by organisations and individuals before the 2024 Land Law took effect as well as long-delayed or suspended projects: it sets the scope, treatment methods and procedures local authorities use to unfreeze projects, restart construction and regularise paperwork. Progress: under Politburo Conclusion 77-KL/TW, NA Resolutions 170/2024/QH15 and 29/2026/QH16 and this decree, 1,985 of 2,035 long-stalled projects nationwide have been resolved (97.5%); Da Nang listed 354 projects and land plots and cleared 206 (58.2%), and Hai Phong resolved 239 of 249. Localities stress 'fixing difficulties without legitimising past violations'.",
      statusZh: "已生效并进入地方执行阶段（10/31 报道口径；法令编号以官方公报核对为准）",
      statusEn: "In force and in local implementation (as reported Oct 31; decree number to be confirmed against the official gazette)",
      links: [
        {
          zh: "人民报（英文）",
          en: "Nhan Dan English",
          url: "https://en.nhandan.vn/resolving-bottlenecks-for-long-delayed-and-stagnant-projects-post168522.html"
        },
        {
          zh: "国家法律库检索",
          en: "Law library",
          url: "https://vbpl.vn"
        }
      ]
    }
  ],

  /* ---------- 动态消息 / News Feed（利好/利坏/政策/市政） ---------- */
  newsFeed: [
    { date: "2026-11-12", tag: "数据 / Data", tagClass: "mid", zh: "11/12 汇率：SBV 中央汇率 25,623（较 11/11 的 25,611 升 12），±5% 区间 24,342–26,904；Vietcombank 25,440 现金买 / 25,470 转账买 / 25,850 卖（两端各 +10），BIDV 25,480/25,860，Agribank 25,420/25,800，银行卖出价自 11/10 的 25,720 回升约 130 盾；自由市场 25,830/25,870，与银行卖出价基本持平。外部：美国 10 月 CPI 环比 +0.4%（预期 0.3%），CME 12 月加息概率升至 87%，美元指数回升至 102.87，美元/日元 159.85。本页取 25,850。", en: "FX on Nov 12: the SBV central rate was 25,623 (up 12 dong from 25,611 on Nov 11) with the +/-5% band at 24,342-26,904; Vietcombank quoted 25,440 cash bid / 25,470 transfer bid / 25,850 ask (10 dong higher at both ends), BIDV 25,480/25,860 and Agribank 25,420/25,800, lifting bank asks about 130 dong above the 25,720 of Nov 10; the informal market traded 25,830/25,870, roughly level with bank asks. Abroad, US October CPI rose 0.4% MoM versus 0.3% expected, CME odds of a December hike climbed to 87%, DXY recovered to 102.87 and USD/JPY reached 159.85. The page adopts 25,850.", src: "https://www.vietnam.vn/en/ty-gia-usd-bat-tang-ap-luc-tu-ky-vong-fed-nang-lai-suat" },
    { date: "2026-11-12", tag: "政策 / Policy", tagClass: "good", zh: "降息落地与吸存竞争并行：SBV 要求 6 个月以上新发生定存利率降 0.5–1pp，11 月初国有与外资行挂牌已降约 0.5pp、股份行降 0.5–0.7pp，10 月底新发生存款均息较 10 月中降 0.4pp、新发放贷款降 0.2–0.5pp；但银行仍加码促销吸存——Cake by VPBank 6 个月挂牌 6.9% 再加 2.2pp 至 9.1%，Techcombank 加 1.7pp 至 8.4%，MB 加 2.35–2.9pp 至 8.2%，PVcomBank 12–13 个月 ≥2 万亿盾 10%，MSB ≥5,000 亿盾 9%。10 月底全系统信贷逾 20.88 千万亿盾（较 2025 年底 +12.27%），10 月中吸存 +11.22%，存贷缺口由 2 千万亿盾收窄至 1.5 千万亿盾以下，存款中约 80% 为短期。SSI：Q3 存款环比 +4.5% 首超信贷 +3.4%，但 NIM 短期承压。", en: "Rate cuts meet deposit competition: the SBV has asked banks to cut rates on new deposits of six months or more by 0.5-1pp; by early November listed rates had fallen about 0.5pp at state-owned and foreign banks and 0.5-0.7pp at joint-stock banks, with average new-deposit rates down 0.4pp from mid-October and new-loan rates down 0.2-0.5pp. Banks are still buying funds: Cake by VPBank pays a 6.9% six-month board rate plus 2.2pp for 9.1%, Techcombank adds 1.7pp for 8.4%, MB adds 2.35-2.9pp for 8.2%, PVcomBank offers 10% on 12-13 months from VND 2bn and MSB 9% from VND 500bn. System credit exceeded VND 20.88 quadrillion at end-October (+12.27% YTD) against deposits up 11.22% by mid-October, narrowing the funding gap from VND 2 quadrillion to under 1.5 quadrillion, with about 80% of deposits short-term. SSI notes Q3 deposits rose 4.5% QoQ, outpacing credit at 3.4%, while NIM faces near-term pressure.", src: "https://vietnamnews.vn/economy/1803982/rate-cuts-face-test-as-banks-compete-for-deposits.html" },
    { date: "2026-11-12", tag: "数据 / Data", tagClass: "bad", zh: "Q3 各机构口径汇总（量缩、价稳、结构分化）：Savills 河内一手均价 1.07 亿盾/㎡（环比微降）、二手 7,500 万盾/㎡，成交环比 -26%、同比 -48%；Cushman & Wakefield 河内新供约 2,100 套（环比 -54%）、成交近 1,720 套（环比 -61%、同比 -71%），一手均价约 1.08 亿盾/㎡（环比 -12%，主因高端占比收窄、存量项目反涨 0–2%），联排一手 2.68 亿盾/㎡（环比 +11%、同比 -5%）；VARS 河内 7,930 万、胡志明 8,830 万、岘港 6,890 万盾/㎡，环比均持平，较 2019Q1 分别 +97%/+69.8%/+76.2%；DKRA 胡志明及周边 108 个项目 13,215 套在售、成交 3,471 套（环比 -66%、去化约 26%），二手季内跌 4–7%；HoREA：开发商一手降约 5%、个别转售降 20–30% 仍难成交，胡志明前 9 个月无新增可负担供给、中段产品仅占供应 7.1%；2026 年房贷约 14–16%，房价收入比 30.2。", en: "Q3 read-across (volumes down, prices flat, mix shifting): Savills puts Hanoi primary apartments at VND 107m/sqm (slightly lower QoQ) and secondary at VND 75m/sqm, with sales down 26% QoQ and 48% YoY; Cushman & Wakefield records about 2,100 new Hanoi units (-54% QoQ) and nearly 1,720 sales (-61% QoQ, -71% YoY), primary prices near VND 108m/sqm (-12% QoQ on a narrower luxury share while existing projects rose 0-2%) and townhouses at VND 268m/sqm (+11% QoQ, -5% YoY); VARS has Hanoi at VND 79.3m, HCMC VND 88.3m and Da Nang VND 68.9m/sqm, all flat QoQ and up 97%/69.8%/76.2% versus Q1 2019; DKRA counts 13,215 units on sale across 108 HCMC-area projects with 3,471 sold (-66% QoQ, ~26% absorption) and secondary prices down 4-7% in the quarter; HoREA says developers cut primary prices about 5% while some resales fell 20-30% without finding buyers, HCMC saw no new affordable supply in nine months and the mid-market is just 7.1% of supply; 2026 mortgages run 14-16% and the price-to-income ratio is 30.2.", src: "https://yuenan.com/zh-hant/news-291880" },
    { date: "2026-11-12", tag: "新盘 / Launch", tagClass: "good", zh: "外资合资再落一子：Gamuda Land 与日本阪急阪神不动产 11/5 签署战略合资协议，共同开发胡志明市北门户、占地 7.9 公顷的 Norton Park 住宅区，马方主导规划开发、日方输入轨道与 TOD 经验；地块紧邻 VSIP I 工业区、AEON Mall 与 Song Be 高尔夫球场，并靠近规划中的地铁 2 号线 C8 站，为 Gamuda 快周转策略下第七个收购项目。", en: "Another foreign JV: on Nov 5 Gamuda Land and Japan's Hankyu Hanshin Properties signed a strategic JV to co-develop Norton Park, a 7.9-hectare residential area at HCMC's northern gateway, with Gamuda leading planning and development and the Japanese partner contributing rail and TOD expertise. The site sits beside VSIP I, AEON Mall and Song Be golf course and near the planned Metro Line 2 C8 station, and is the seventh acquisition under Gamuda's quick-turnaround strategy.", src: "https://fttland.com/tin-tuc/tin-nhanh-bds-viet-nam-20261106.html" },
    { date: "2026-11-12", tag: "市政 / Infra", tagClass: "good", zh: "地铁 2 号线进入主体施工：全线 11 站已有 5 站开工、506 个钻孔勘察完成，导墙与地连墙同步推进，累计拨付约 6.6 万亿盾（约当调整后计划 88%）；11/6 起 13 条公交改线配合越南国家大学城区与 ST07（Bay Hien）、ST08（Nguyen Hong Dao）站施工，11/7 起长征街部分路段限行。受影响商户（Nhieu Loc 坊 65 家、新山二坊数十户）已申请税费减免，CMTT 街围挡工期至 2027 年 2 月及 10 月。胡志明前 10 月公共投资 126,613 亿盾（计划 85.8%）、已拨付 114,412 亿盾（77.5%）。", en: "Metro Line 2 moves into main construction: 5 of 11 stations are under way with 506 boreholes completed and diaphragm walls progressing, and about VND 6,600bn disbursed (roughly 88% of the adjusted plan). From Nov 6 thirteen bus routes were rerouted for works at the National University urban area and stations ST07 (Bay Hien) and ST08 (Nguyen Hong Dao), with truck restrictions on Truong Chinh street from Nov 7. Affected businesses (65 in Nhieu Loc ward and dozens in Tan Son Nhat ward) have requested tax relief, with Cach Mang Thang Tam barriers running to February and October 2027. HCMC public investment reached VND 126,613bn in ten months (85.8% of plan), with VND 114,412bn disbursed (77.5%).", src: "https://www.vietnam.vn/en/tien-do-moi-nhat-6-du-an-trong-diem-tai-tphcm" },
    { date: "2026-11-12", tag: "政策 / Policy", tagClass: "mid", zh: "国会第四周（11/9–13）与社房进度：本周审议《住房法》修订草案租赁住房专章——代表要求租金与目标群体承受能力挂钩、租赁用地优先布局于大城市市区、TOD 走廊、工业区与院校周边，并允许公寓管委会聘请专业单位协助（须防利益冲突）；11/12 全天质询、11/13 表决多项法律与决议（住房法最终表决时点待核实）。建设部：全国社房 954 个项目、约 92.63 万套、总投资约 8,555,570 亿盾，已完工 366 个项目 22.6 万余套；2026 年底预计完成 87,601 套（计划 90%）；租赁住房 10 月止建成 9,028 套（53%），全年预计 16,944 套（303/NQ-CP 指标 99%）。河内 NHS Trung Van/Phuong Canh 164 套社房转售，1,660–2,020 万盾/㎡，12/9–2027/1/22 受理。", en: "Congress week four (Nov 9-13) and social housing: the Housing Law amendment's rental-housing chapter was debated, with delegates demanding that rents be tied to target groups' affordability, rental land prioritised in big-city urban districts, TOD corridors and near industrial parks and universities, and apartment boards allowed to hire professional support units under conflict-of-interest safeguards; Nov 12 was a full-day question session and Nov 13 brings votes on several laws (the Housing Law's final vote timing is unverified). The construction ministry reports 954 social housing projects, about 926,300 units and VND 855.557 trillion of investment, with 366 projects and more than 226,000 units completed; 87,601 units are expected by end-2026 (90% of plan), while rental housing reached 9,028 units by October (53%) and should hit 16,944 for the year (99% of the 303/NQ-CP target). Hanoi is reselling 164 social units at NHS Trung Van and Phuong Canh for VND 16.6-20.2m/sqm, with applications open Dec 9 to Jan 22, 2027.", src: "https://www.vietnam.vn/zh-cn/quoc-hoi-chat-van-2-bo-truong-va-thong-qua-nhieu-noi-dung-quan-trong" },
    { date: "2026-11-11", tag: "政策 / Policy", tagClass: "good", zh: "HoREA 建议把商业住房用地受让试点写入《土地法》修订草案：现行 2014 年《住房法》与 2024 年《土地法》禁止投资者受让住宅用地开发商品房，致 2,750 个项目受阻；国会 2024 年第 171 号决议试点后已有 742 块土地获批（5,686 公顷，其中 265 块为企业已持地、470 块为自行购地），按每公顷 300–500 亿盾估算对应投资 600 万–1,000 万亿盾；胡志明已有 974 个项目登记、361 块土地 2,284.52 公顷获市议会通过。协会主张不必等 2030 年试点总结，直接入法稳定预期。", en: "HoREA wants the commercial-housing land transfer pilot written into the Land Law amendment: the 2014 Housing Law and 2024 Land Law bar investors from acquiring residential land for commercial projects, stalling 2,750 projects; under the National Assembly's 2024 Resolution 171, 742 land plots (5,686 hectares) have been approved, 265 already held by investors and 470 self-acquired, implying VND 600-1,000 trillion of investment at VND 30-50bn per hectare. HCMC has 974 registered projects, with 361 plots covering 2,284.52 hectares cleared by the city council. The association argues the mechanism should go into law now rather than wait for a 2030 pilot review.", src: "https://news.qq.com/rain/a/20261109A0381K00" },
    { date: "2026-11-12", tag: "中性 / Neutral", tagClass: "mid", zh: "胡志明市收回近 9300 平方米土地，涉及一家房地产企业。此举旨在纠正违规用地行为，强化土地管理秩序，确保资源合理配置与城市发展规划的一致性。", en: "Ho Chi Minh City reclaims nearly 9,300 sqm of land from a real estate firm. This action corrects irregular land use, strengthens management order, and ensures alignment with urban planning.", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxOQ2pTOGNiSXR1MmplSUo4bTZNN282SFpKNDQ5YXB6d1ZoQm1ISlBLNWZ2ZGJaTXVBV1FnMy1ta2dIZGdtNEpab3BoWjFmWW9VaXY3R3N5RU02ODR5eHZfeUR6N0ZoTGNacWpEWlZVQ01kdTQ1Sld0SUxLTDVFTTlSY3I0dmlBeDZESmpfY0tPLThkVTJnc1YwTU5ra2FpNmJnWkZybHhB?oc=5" },
    { date: "2026-11-11", tag: "数据 / Data", tagClass: "mid", zh: "Thị trường bất động sản đang chuyển dịch như thế nào?", en: "Thị trường bất động sản đang chuyển dịch như thế nào?", src: "https://news.google.com/rss/articles/CBMikwFBVV95cUxPdkgycURrMjhNSE1qXzNlaEp2TkJiamZ1S2JjV1FMdjkzMGMtcm9OQ2prUEZkX3phX01oRW9hdndzRXE5N3FvQXkxNmtjc1hwQ3B4RHhNem1vZnpiRnh4U01LRU9OZVViRmd5QXdOMEV6ajh4VUxxNVd3R2p3RkVac0NibmR3bThSWXZhS1JGbnpxSFE?oc=5" },
    { date: "2026-11-11", tag: "利坏 / Negative", tagClass: "bad", zh: "Dư nợ kinh doanh bất động sản vượt 1,14 triệu tỷ đồng tại 12 ngân hàng", en: "Dư nợ kinh doanh bất động sản vượt 1,14 triệu tỷ đồng tại 12 ngân hàng", src: "https://news.google.com/rss/articles/CBMisAFBVV95cUxQMURZTmstUjNBRlNRUExoREVsZWYzXzlaMGhqaFMtVDRhejh1RTVvWW9TNWd5OXNyamlIaVBpQkF6c0FhdTVJajZyd3p0a0ZmNF9XU240Y1hVN3FZMHRJQk10R2RmR3dEMGRlVjZweGpJd1BSbnhldTB6Sm5LYzZoZUtoLUNYREg2am5xb2UyelNVR0syekNPOEEwSHBVbGpJUkI1TlpBOWFOM3ByeVNmXw?oc=5" },
    { date: "2026-11-11", tag: "数据 / Data", tagClass: "mid", zh: "Bất động sản vào chu kỳ mới: ‘Đua’ tạo giá trị thực", en: "Bất động sản vào chu kỳ mới: ‘Đua’ tạo giá trị thực", src: "https://news.google.com/rss/articles/CBMikAFBVV95cUxNbkptWlJ2eXZJTUx5azkwdTFYNUYyLWxobk1HNjVxSUZTOUZNY2EwQlh1YWZqdUpMdGcya2NKZmM1UnBCVTBDNjBrVEdPVkxYZzF3Vk81UW5iZ1F3aEZmRldKXy1xTkY3MUpwVE84X1hXckJILVFOZ1BBajUtRnpFWWhWTWxoMUVnLVp2eDdDVnI?oc=5" },
    { date: "2026-11-12", tag: "数据 / Data", tagClass: "mid", zh: "Vũ Yên trong chuyển động mới của thị trường bất động sản Hải Phòng", en: "Vũ Yên trong chuyển động mới của thị trường bất động sản Hải Phòng", src: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNQ09yMThPeWdjdWViWTdGS2FJeUk5d0VTR1NPWVlvYmdlSFM0YmN2ZGVaWFh4U1Back1ycVVkSzJhNXFrcUpYNno3Q0NYSktEcHZLdS1mRFMyTE9naHF6SklQenlDZEJtWUM3X1R5eVNIRzlFUWdqdVVrdVljbzdGLVpWYjdaMjZYNWFFTkcyNVZ0b2ZSeW96dHE1Wk1qdWFsOW1hQ2FoTlVWUQ?oc=5" },
    { date: "2026-11-11", tag: "政策 / Policy", tagClass: "mid", zh: "央行即期购汇落地：SBV 公告自 11/11 起每周一、周三开展即期购汇（spot），干预购汇价 25,500 VND/USD，以越盾向信贷机构付款、直接向银行系统注入 VND 流动性；与此前带反向承诺的掉期不同，属补充年末流动性工具。叠加 11/5 起的 182 天 USD/VND 远期掉期，央行在稳汇率与保资金面之间双向操作。若遇节假日顺延至下一工作日。", en: "SBV launches spot USD buying: from Nov 11 the central bank will buy USD spot every Monday and Wednesday at an intervention rate of VND 25,500, paying in dong and directly injecting VND liquidity into the banking system — a liquidity tool distinct from its swaps with a reverse commitment. Together with the 182-day USD/VND forward swap started on Nov 5, the SBV is now operating in both directions to steady the exchange rate while easing year-end funding. Sessions falling on a holiday move to the next working day.", src: "https://www.vietnam.vn/en/gia-vang-tang-usd-tiep-tuc-ha-nhiet" },
    { date: "2026-11-10", tag: "数据 / Data", tagClass: "mid", zh: "11/10 汇率：SBV 中央汇率 25,600（较 11/9 降 10 盾），±5% 区间 24,320–26,880；Vietcombank 早盘买入 25,340、卖出 25,720（两端各 -60），BIDV 25,350/25,730（各 -50），银行卖出价再创 2025 年 3 月底以来新低、月初至今约 -270 盾。人民币 VCB 3,766/3,887（-7）、BIDV 3,753/3,898（-5）。自由市场 25,800–25,850，与银行卖出价差收窄至约 100 盾。美元指数 101.68（-0.62%），CME 12/8–9 加息概率约 82%。", en: "FX Nov 10: the SBV set the central rate at 25,600 (10 dong below Nov 9) with a +/-5% band of 24,320-26,880; Vietcombank quoted 25,340 bid / 25,720 ask at the open (60 dong lower at both ends) and BIDV 25,350/25,730 (50 dong lower), pushing bank asks to a fresh low since late March 2025 and about 270 dong below the start of the month. CNY: Vietcombank 3,766/3,887 (7 lower), BIDV 3,753/3,898 (5 lower). The informal market quoted 25,800-25,850, narrowing the premium over bank asks to roughly 100 dong. DXY slipped to 101.68 (-0.62%) and CME puts the odds of a Dec 8-9 hike at about 82%.", src: "https://en.vietnamplus.vn/reference-exchange-rate-down-10-vnd-on-november-10-post355117.vnp" },
    { date: "2026-11-10", tag: "利坏 / Negative", tagClass: "bad", zh: "资金面：VDSC 估算银行体系信贷余额与存款之差约 2.35 千万亿盾（与年初相当、约为 2025 年初两倍），银行转向境外补缺口——HDBank 国际银团由 4.5 亿增至 7.21 亿美元（+60%）、VPBank 6 月底签 14.4 亿美元可持续挂钩贷款、MB 上半年 5.5 亿美元、VIB 2.85 亿美元 3 年期（境外筹资余额约 16 亿、2027 年拟增至 20 亿）、Techcombank 拟寻 10 亿美元、SHB 拟发新元国际债、ACB 洽谈约 3 亿美元。存款降息与信贷高增并行，长期限资金来源仍是房贷利率下行的约束。", en: "Funding gap: VDSC estimates the gap between system credit and deposits at about VND 2.35 quadrillion (flat versus the start of 2026, roughly double early 2025), pushing banks offshore — HDBank upsized its syndicated loan from $450m to $721m (+60%), VPBank signed a $1.44bn sustainability-linked facility in late June, MB raised $550m in H1, VIB closed a $285m three-year loan (offshore book about $1.6bn, targeting $2bn by 2027), Techcombank is seeking $1bn, SHB plans SGD-denominated international bonds and ACB is in talks for about $300m. Deposit rate cuts alongside strong credit growth mean long-tenor funding remains the binding constraint on lower mortgage rates.", src: "https://news.qq.com/rain/a/20261109A07G9800" },
    { date: "2026-11-10", tag: "政策 / Policy", tagClass: "mid", zh: "胡志明市第 96/2026/QĐ-UBND 号决定：公寓管理与运营费价格上限接近翻倍，11/25 生效，统一原市域与合并前平阳、巴地—头顿区域的口径。投资商、公寓管委会与运营单位须按规定收取、专款专用并公开全部收支；聘管理公司时由管委会签约并监督、向业主大会报告。社房与安置房项目的垃圾清运、电梯等费用可按地方机制单列。官方公报直链待补，暂引 Vietnam.vn 解读。", en: "HCMC Decision 96/2026/QD-UBND nearly doubles the price ceiling for apartment management and operation services, effective Nov 25, unifying the framework across the pre-merger city and the former Binh Duong and Ba Ria-Vung Tau areas. Developers, management boards and operators must collect and spend according to the rules, ring-fence the funds and disclose all revenue and expenditure; where a management company is hired, the board signs and supervises the contract and reports to the owners meeting. Waste collection and elevator costs may be billed separately for social and resettlement housing. Direct Official Gazette link pending; the Vietnam.vn explainer is cited for now.", src: "https://www.vietnam.vn/en/tp-hcm-nang-tran-phi-quan-ly-chung-cu-gan-gap-doi-cu-dan-co-phai-dong-them-tien" },
    { date: "2026-11-10", tag: "政策 / Policy", tagClass: "good", zh: "财政部向国会提交税法修订草案：对荒废、未投入使用或延迟投入使用的土地按 0.2% 征收非农业土地使用税，且不设免税面积限额（一经认定即全额计征），认定标准依《土地法》；若获通过自 2027-01-01 施行。Avison Young 认为可抑制囤地与短线炒规划，但须先明确「主观延误/客观受阻」的认定标准与时限，避免把手续、规划调整、征地未交地等客观因素一律等同荒废。", en: "The Ministry of Finance has submitted a tax bill to the National Assembly taxing idle, unused or delayed land at 0.2% of non-agricultural land use tax with no exempt area threshold (once classified, the entire area is taxed), with classification following the Land Law; it would apply from Jan 1, 2027 if passed. Avison Young says it would curb land hoarding and speculation on planning upside, but clear criteria and timelines are needed to separate subjective delay from objective blockage such as procedures, planning changes or undelivered sites.", src: "https://news.qq.com/rain/a/20261110A05AZH00" },
    { date: "2026-11-10", tag: "利坏 / Negative", tagClass: "bad", zh: "河内二手公寓两年上涨后首现同比下跌：CBRE 三季度二手均价约 6,000 万盾/㎡、同比 -8%，主要压力来自高杠杆投资者，借贷成本超出中期承受能力后被迫降价换成交；Avison Young 称现金买家议价优势扩大，部分卖家需让价 8–12% 才能找到买家；One Mount 二季度河内成交约 4,700 宗（环比 -23%、同比 -64%），菩提坊 -76%、越兴坊 -68%、西部各坊 -70%。", en: "Hanoi secondary apartments post their first year-on-year decline after two years of gains: CBRE puts the Q3 average at about VND 60 million/sqm, down 8% YoY, with pressure coming mainly from highly leveraged investors forced to cut prices once borrowing costs exceeded their medium-term capacity. Avison Young says cash buyers now have the upper hand, with some sellers needing to accept 8-12% discounts to close; One Mount reports about 4,700 Hanoi transactions in Q2 (-23% QoQ, -64% YoY), with Bo De down 76%, Viet Hung 68% and western wards 70%.", src: "https://new.qq.com/rain/a/20261110A06ZQM00" },
    { date: "2026-11-10", tag: "利好 / Positive", tagClass: "good", zh: "胡志明前十个月注册 FDI 191 亿美元、约为去年同期的 4.2 倍、占全国 30% 以上；市府定 Q4 GRDP 增长 13.23%、全年逾 10%，年末须动员逾 1.2 千万亿盾（约 467 亿美元）发展投资。921 个长期停滞项目中已化解 309 个（33.55%），其余 612 个已明确处置方向；出口加工区与工业园区前十个月到位投资逾 46.2 亿美元，全年预计 53.8 亿（+15%）。", en: "HCMC attracted $19.1bn of registered FDI in ten months, about 4.2 times a year earlier and over 30% of the national total; the city targets 13.23% GRDP growth in Q4 and more than 10% for the year, requiring over VND 1.2 quadrillion (about $46.7bn) of development investment in the final two months. Of 921 long-stalled projects, 309 (33.55%) have been resolved and the remaining 612 have identified solutions; export processing and industrial zones drew over $4.62bn of disbursed investment in ten months, with $5.38bn expected for the year (+15%).", src: "https://e.vnexpress.net/news/business/foreign-investment-in-hcmc-surges-4-2-fold-5142420.html" },
    { date: "2026-11-10", tag: "市政 / Infra", tagClass: "mid", zh: "胡志明市批准研究设立地方国有独资铁路企业（由城市铁路管委会 MAUR 牵头，落实《城市发展法》第 18/2026/QH16 号机制），为城轨建设运营与 TOD 综合开发建立组织基础；市议会 10/30 通过自贸区与综合物流区决议，规划 10 个物流枢纽（吉莱、隆平、铃中、西贡高科技园、新坚、协福、古芝、霍门、平庆、新山一机场周边），并在盖梅下港附近设约 4,165 公顷自贸区，区内基础设施投资可享地租减免与最长 7 年利率支持。", en: "HCMC has approved a study on setting up a wholly city-owned railway company, led by the urban railway board MAUR, to implement mechanisms under the Urban Development Law (18/2026/QH16) and give the metro network an institutional base for construction, operations and TOD development. The city council also passed a resolution on Oct 30 for free trade zones and integrated logistics zones, planning 10 logistics hubs (Cat Lai, Long Binh, Linh Trung, Saigon Hi-Tech Park, Tan Kien, Hiep Phuoc, Cu Chi, Hoc Mon, Binh Khanh and around Tan Son Nhat airport) plus a 4,165-hectare free trade zone near Cai Mep Ha port, with land rent exemptions and up to seven years of interest support for infrastructure investors.", src: "https://e.vnexpress.net/news/business/hcmc-plans-logistics-hub-network-across-10-locations-5142451.html" },
    { date: "2026-11-10", tag: "数据 / Data", tagClass: "mid", zh: "胡志明市前十个月房地产收入增长 10.8%。", en: "Ho Chi Minh City real estate revenue rose 10.8% in ten months.", src: "https://news.google.com/rss/articles/CBMingFBVV95cUxQOHBmbi1JQm1XY29xaU9iMDIyQ0M0WXFQanNKb25wbnNaLUZGUVV0VVQwNVZEeHhtRHNlbHJPajJReXA4MVZVVU5NQno2b0VnenFrZWcwMzB6RGFWdEtJZUpoc1NLTkRETkVVVGlRaHFNZVF4T3h6SF9jM1dHb1d6azFIOTQ1ZldhRXBWbVVGelpZQ2poYm01UXZCVHhxUQ?oc=5" },
    { date: "2026-11-10", tag: "中性 / Neutral", tagClass: "mid", zh: "十二家银行房地产贷款余额超 1.14 百万兆越南盾。", en: "Loan balances at twelve banks exceed 1.14 million trillion VND.", src: "https://news.google.com/rss/articles/CBMisgFBVV95cUxOZEZLYnlRa3R5Q0lSYk5mZGVQWHNPeEszc2xkTF9TWDNrRDhMdGJEVlItend2ZHVfbTM1UElHVnBNb19UMjI3cmx1VGdHQ3M4Y3k0SEdndkhRb1VIY2llUnlzSHB4TVJUaDRZRmFTNzZETnRDWU9pSm13NFIxOGZWVHRBNU4wWGJQLTdrSm5zcFVGck4xa1V1S0hhaUwxdFpZSG1QYXpRY0JidGVZU0VoOFV3?oc=5" },
    { date: "2026-11-10", tag: "利坏 / Negative", tagClass: "bad", zh: "十二家银行房地产贷款余额增长近 22%。", en: "Loan balances at twelve banks increased nearly 22%.", src: "https://news.google.com/rss/articles/CBMiigFBVV95cUxNbm1GOXBzYmdkRXNfMUpBaXhNOHdxNUpnbHhxV2NvTlVUUnJLeUV2Nzg4bDh6THJtT25KaG56WW5wN1R4T0VKRVkyLXRjMFctc3Ywc3Y1LVBTZjR6ODRvMExpanlGcnJTb3o5N1lHVjR3N0VBVlNzYVZMRmV3TXZuSHhqU2tRU292VVE?oc=5" },
    { date: "2026-11-09", tag: "利坏 / Negative", tagClass: "bad", zh: "[Video] Dư nợ cho vay bất động sản tại 12 ngân hàng tăng gần 22%", en: "[Video] Dư nợ cho vay bất động sản tại 12 ngân hàng tăng gần 22%", src: "https://news.google.com/rss/articles/CBMingFBVV95cUxQQm5ROU9saWl2bWJsR29TWnJnektCOUw2a0N2MnF3d3Fjend3cEduWEw3LUd2SEdnemxjeHJCdF9NUkZ6T2NPY3Zzalc5LTQ4MWpYalZlYXEzMmw0VXUwVXJHYU9lWW9MeHJxVlJ5Y3Q5bVBlQlBzQVJDRURyU2JraGRIZklpLWFDVGMxNzlNdjJJNGRrWnRLVUFWUXdYdw?oc=5" },
    { date: "2026-11-10", tag: "数据 / Data", tagClass: "mid", zh: "胡志明市预计从土地拍卖中收取近 97000 越南盾。", en: "Ho Chi Minh City expects to collect nearly 97,000 billion VND from land auctions.", src: "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNVW5XUlhPbjg3cERIYkdKTWVWdEFxTGo5SnVQVTFOSU84c25SNHAxdWNPOGoyUThuY1Fyc0FyUTlONHpBd0RPM29rYmVIQWhhcktCb2ZLb0N3TEhSd1hxd2xzQWNGamlGaWV3UzdPbUUtSm5XRHh1VDI3RXAzUVZZWkhlbTc2MWJMMjRuRElwcmVtdmR0LXNEUVM0OUp5dUYteURtc0ZZRzNMT0RJVjNUbFlDc19jVEltTGhKM1kwZUVfT0U5UWtPYnRwSG45d1o0YjFIVXJIT3I3dw?oc=5" },
    { date: "2026-11-10", tag: "数据 / Data", tagClass: "mid", zh: "Lợi nhuận doanh nghiệp tăng 46,1%, nhóm bất động sản tăng 364,6%", en: "Lợi nhuận doanh nghiệp tăng 46,1%, nhóm bất động sản tăng 364,6%", src: "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNRUpMaXhwMmVxSW5JXzF3Vnd1cWVtQ05ybE5wUWlLcUFUWjktYWw3UTkwUXZwUkc3Sm84VXA2ZUZocEZ0TXRpY1JyMTRRcmhocW9OX2MyUHR0NTFUMmN4R2RsR3M2YWFkQUs5RnlsMTBqNlFFdXpvRW11OWRmeS0wVU4zSE9WMWtrV2RmZ0ZuLVRycS1vaW9HYTh3TnBjWGpLUDhTRnZORkhjM2M?oc=5" },
    { date: "2026-11-09", tag: "数据 / Data", tagClass: "mid", zh: "11/9 汇率：SBV 中央汇率 25,610（较 11/6 的 25,615 降 5 盾），±5% 区间 24,330–26,891，国家银行交易中心参考 24,385/26,845。Vietcombank 与 BIDV 早盘同报买入 25,370/25,400、卖出 25,780（VCB 两端各 -30、BIDV -25），银行美元卖出价连续第三个交易日守在 25,780，仍是 2025 年 3 月底以来低位、月初至今约 -210 盾。人民币同步下行：VCB 3,773/3,894（-9）、BIDV 3,758/3,903；本表 cnyVnd 仍按 25,780/7.13 交叉折算 3,616，与银行挂牌不同源勿直接对比。外部：美元指数连续第二周收涨——周初受油价回落与中期选举后情绪切换压制，周五美国 10 月非农远超预期后反弹（新增口径两源分歧 16.5 万 vs 6.5 万，已标待核实，失业率 4.1%），同期美债收益率全线下行、油价大跌，说明本轮美元走强更多来自数据前的仓位调整与避险需求，而非利差优势。本周焦点：美国 11 月 CPI。", en: "Nov 9 FX: the SBV cut its central rate to 25,610 (5 dong below 25,615 on Nov 6) with the +/-5% band at 24,330-26,891 and the SBV trading desk at 24,385/26,845. Vietcombank and BIDV both quoted 25,370-25,400 bid and 25,780 ask at the open (Vietcombank 30 dong and BIDV 25 dong lower at both ends), so bank asks have held at 25,780 for a third session, still the lowest since late March 2025 and about 210 dong below the start of the month. The yuan slid in tandem: Vietcombank 3,773/3,894 (9 lower) and BIDV 3,758/3,903, while the cnyVnd figure here remains a 25,780/7.13 cross at 3,616 and is not directly comparable with bank boards. Abroad, DXY rose for a second straight week, having been capped early by softer oil and a post-midterm mood shift before rebounding on Friday when US October payrolls beat expectations (165,000 vs 65,000 depending on source, flagged unverified; unemployment 4.1%) even as Treasury yields fell across maturities and oil dropped sharply, pointing to positioning and safe-haven demand rather than a rate advantage. Next focus: US November CPI.", src: "https://www.vietnam.vn/en/ty-gia-hom-nay-ngay-9-11-gia-usd-va-ndt-noi-dai-da-giam" },
    { date: "2026-11-09", tag: "政策 / Policy", tagClass: "mid", zh: "11/6 政府第 353/NQ-CP 号决议（10 月例会）明确下一阶段信贷口径：总理要求国家银行加强对潜在风险领域信贷的检查监督，重点为房地产经营信贷与外汇信贷；要求信贷机构严控信贷质量，跟踪房地产企业——尤其是正在重组债务者——的到期还款能力，集中处理不良贷款、限制新增不良，落实 9/18 第 1809 号决定批准的银行体系重组方案，并依法处理交叉持股、隐性持股与操纵银行活动。货币政策要求兼顾利率与汇率、货币对内与对外价值，继续引导生产经营、优先领域、出口与中小企业贷款利率下行，同时加强对利率法规执行情况的检查，对不执行降息指导、存在不正当利率竞争的机构及时纠正、严肃处理。房地产相关：继续推进 12 万亿盾社房、工人住房及 35 岁以下首购社房贷款计划，及时解决客户获贷困难；并要求完成 2026 年社房与租赁住房指标、加快工人住房进度。含义：降息仍是政治任务，但房地产信贷进入「边降边查」阶段，开发端融资与外汇敞口是下一轮检查重点。", en: "Resolution 353/NQ-CP of Nov 6 (October cabinet meeting) sets the next credit stance: the Prime Minister tells the SBV to tighten inspection and supervision of lending in risk-prone areas, specifically real estate business credit and foreign-currency credit, to enforce credit quality, track the repayment capacity of property firms especially those restructuring debt, to work down bad loans and cap new ones, to carry out the bank-restructuring scheme approved under Decision 1809 of Sept 18, and to deal with cross-holdings, hidden ownership and manipulation of bank operations. Monetary policy must balance rates and the exchange rate and the internal and external value of the dong, keep steering lending rates down for production, priority sectors, exporters and SMEs, and step up checks on rate compliance, correcting and penalising institutions that ignore rate-cut guidance or compete improperly on rates. On housing: keep pushing the VND 12 trillion programme for social housing, worker housing and social housing bought by under-35 first-time buyers, and clear obstacles to borrowers; also complete 2026 social and rental housing targets and speed up worker housing. The read-across: rate cuts remain a political mandate, but property credit is now in a cut-and-inspect phase, with developer funding and FX exposure the next inspection focus.", src: "https://www.vietnam.vn/en/nghi-quyet-phien-hop-chinh-phu-thuong-ky-thang-10-2026" },
    { date: "2026-11-09", tag: "利好 / Positive", tagClass: "good", zh: "11/9 Knight Frank 最新报告：至 2027 年底大胡志明（含原平阳、原巴地—头顿）公寓市场将新增约 42,593 套，其中 22,187 套位于原胡志明市区域；新增供给按区域与价位分层——核心区继续偏高端与豪宅，原平阳与原巴地—头顿承接更多中端与经济型，报告认为原平阳仍是最重要的卫星市场，价格将上涨但仍低于胡志明市，从而支撑居住需求。DKRA 预测 Q4 新推 7,000–10,000 套（环比小幅回升），集中在胡志明市东部、南部与原平阳，A 级占市中心、B/C 级在郊区。价格：当前一手均价 4,210 美元/㎡（环比 +3%，折逾 1 亿盾/㎡）。含义：中期不缺供给量、缺的是匹配购买力的价位——这与 C&W、One Mount 的成交 -6~8 成、去化 26–43% 互为印证，2027 年去化压力主要看原平阳中端盘能否接住外溢需求。", en: "Knight Frank's latest report (Nov 9) sees about 42,593 new apartments in greater HCMC, including former Binh Duong and Ba Ria-Vung Tau, by end-2027, of which 22,187 are in the former HCMC area; the pipeline is layered by location and price, with the core staying high-end and luxury while former Binh Duong and Ba Ria-Vung Tau absorb more mid-range and affordable product. The report calls former Binh Duong the key satellite market, where prices should rise but stay below HCMC and so support owner-occupier demand. DKRA expects 7,000-10,000 new units in Q4, a modest rebound concentrated in eastern and southern HCMC and former Binh Duong, with grade A in the centre and B/C in the suburbs. Pricing: primary average is $4,210 per sqm, up 3% QoQ and above VND 100 million per sqm. The read-across: the medium-term issue is not volume but price points that match incomes, which chimes with Cushman & Wakefield and One Mount reporting sales down 60-80% and absorption at 26-43%; 2027 absorption hinges on whether mid-range projects in former Binh Duong can capture spillover demand.", src: "https://yuenan.com/zh-hant/news-270867" },
    { date: "2026-11-09", tag: "中性 / Neutral", tagClass: "mid", zh: "11/9 胡志明经纪端反馈：定存利率下调后咨询量与看房预约回升，但成交尚未启动。吉莱区十年资历经纪称客户重新询价、挂盘频率回升，持币投资客因定存收益下降重回市场，但目前只停留在咨询；文来坊经纪称 10 月底以来咨询增加、本周已有两组预约看房。背景：11 月初 46 家银行 6 个月以上挂牌定存全部下调 0.5–0.7pp（国有与外资约 0.5pp），10 月底短期贷款利率降至 8–9%、中期 9–10%。C&W 数据：前 9 个月河内公寓消化约 11,300 套，Q3 成交 1,720 套（-61%/-71%）；胡志明 Q3 公寓价 -1%、均价约 6,900 万盾/㎡（二手口径）。Batdongsan 南部总监丁明俊提醒：历次降息都会带动搜索量与询价，但「调整后的利率仍高于购房者预期」。含义：目前是心态回归而非购买力回归，真正拐点要看 Q4 成交与 11/21 三部法表决结果。", en: "Nov 9 broker feedback from HCMC: inquiries and viewing bookings picked up after deposit-rate cuts but deals have not followed. A broker with a decade in Cat Lai says clients are asking again and listing frequency has risen, with cash-rich investors returning because deposit yields fell, though so far only inquiries; a Van Khe broker reports more enquiries since late October and two viewings booked this week. Background: in early November all 46 banks cut listed rates for 6-month-plus deposits by 0.5-0.7pp (about 0.5pp at state-owned and foreign banks), and late-October short-term lending rates eased to 8-9% with medium-term at 9-10%. Cushman & Wakefield: Hanoi absorbed about 11,300 apartments in the first nine months, with Q3 sales at 1,720 (-61%/-71%); HCMC apartment prices slipped 1% in Q3 to about VND 69 million per sqm on a resale basis. Batdongsan's southern director Dinh Minh Tuan cautions that every rate cut lifts searches and enquiries, yet adjusted rates remain above buyer expectations. The read-across: this is a recovery in sentiment, not in purchasing power; the real turn depends on Q4 transactions and the Nov 21 vote on the three revised laws.", src: "https://www.vietnam.vn/zh-cn/lai-suat-huy-dong-giam-thi-truong-can-ho-tang-luot-do-hoi" },
    { date: "2026-11-09", tag: "数据 / Data", tagClass: "mid", zh: "11/9 河内批准 Starlake Hanoi（西湖西都市中心）K1-HH2 地块部分转让：大宇建设（Daewoo E&C）关联开发主体 THT Development 将 11,483 ㎡ 混合用地（公共服务+商业+高端住宅）转让给 Sunshine Group 子公司春罗投资建设（Xuân La），交易总额约 2.277 万亿盾，其中土地使用费约 1.566 万亿盾、项目权转让约 711 亿盾。Starlake 总规模 186.3 公顷、规划人口 24,300 人，含住宅、政府办公、酒店与教育商业娱乐设施，因临近西湖且处连接内排机场的走廊，常被称「河内江南」。含义：批文只代表转让获批，不等于全部行政手续完成或可立即开工；对西湖西—春罗板块的高端供给与定价有直接影响，后续建设许可、产品定位与开工时间待观察。", en: "Hanoi on Nov 9 approved a partial land transfer inside Starlake Hanoi, the West Lake West new urban centre: THT Development, a Daewoo E&C affiliate and the project developer, is transferring the 11,483 sqm K1-HH2 site, zoned for public services, retail and high-end housing, to Xuan La Investment and Construction, a Sunshine Group subsidiary, in a deal worth about VND 2.277 trillion - some VND 1.566 trillion in land-use fees plus VND 71.1 billion for project rights. Starlake spans 186.3 hectares for a planned 24,300 residents and mixes housing with government offices, hotels, schools, retail and leisure; its position by West Lake on the corridor to Noi Bai airport has earned it the nickname Gangnam of Hanoi. The read-across: approval of the transfer does not mean all administrative steps are done or that construction can start at once, but it directly affects high-end supply and pricing in the West Lake West-Xuan La area, with permits, product positioning and a start date still to watch.", src: "https://en.fnnews.com/news/202611091253189312" },
    { date: "2026-11-09", tag: "新盘 / Launch", tagClass: "good", zh: "河内房地产交易量大幅下降，公寓价格仍维持在每平方米超过 1 亿越南盾。", en: "Hanoi property liquidity drops sharply; apartment prices remain above 100 million VND per sqm.", src: "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOS2N4SzBLdXR4VVZvdnprcWlUMzhDSmpnRmQ5S0pLclN3NjZnT08zRVFDdlpZYXRUcUpWal9mM01QSk1Xa21tZXdHYy1veEUyM1VNS0wyN0p0ajUzVVNRcHViOVB6MWxHR3U2aGZKWGo4VjN5YTk4TXVZUjRaenB0TXl3eWFzb01UOExQdlNQcV9HZEpKU19Lc1p5ZE1wOFd1bVIwblBhWjA0UzRHemN0WUtJMkN1dzZTWGpYa2p6ZE1YeDJxa1d2SGhMdUhldmZOMU1z?oc=5" },
    { date: "2026-11-09", tag: "中性 / Neutral", tagClass: "mid", zh: "2026 年底南方房地产市场预计将呈现活跃态势。", en: "Southern real estate expected to be lively by end of 2026.", src: "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOUWJtZmRNenlxNU9uR0E0YmhZLUNDaGxVSUhBbjJkdDIzOEhHa1ZoWWVnSlBsOEt6Z0ZpNjJySHNibmtnOUxCNFJmNEVGcDlGNFlLemxYcjNVTmw5d25sOUtaRFFURkRqWXotU1RmeVllQjVnQ3NqWnJIQ01MYTlkSktEd1l3UVpMUFROOHFpbGlsQV8zSjlWVlRNSS1yMmx5MlhzZzBVbHM?oc=5" },
    { date: "2026-11-09", tag: "市政 / Infra", tagClass: "good", zh: "11 月 9 日建设动态：河内将道路 70 项目投资增至超过 8100 亿越南盾。", en: "Nov 9 construction update: Hanoi increases Road 70 project funding to over 81 billion VND.", src: "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNWG9LWXEtV2g2bTdhcGN3NDlHMHZoMnNWRHV5Nk1jaVBaR1hLRjZUaVRSR3c5UE44d3pTSUE4ejlvUERzWDUxRHlfaE5DMHcxMk1pQnp6d1J6UkZQOVhjeEthb1NHME9YcjRISnlVLXI3c2JZSHZVaWRFd0RYSGY0N1hGNHE1UFg5MFdOQ2lNNlVldWlKMTE3Z3hZRDFDWUl0TDhFSUw0ZEREc203endsVmNFX0tzRmdnMzE1emNfUmkzYWJPalg2UXhzeURVcEotaDU1UDhHRXdGUjVfc0ZqYTJR?oc=5" },
    { date: "2026-11-09", tag: "复盘 / Weekly", tagClass: "neutral", zh: "本周复盘（11/3–11/9）：①利率——11 月初全国 46 家商业银行已全部下调 6 个月以上挂牌定存 0.5–0.7pp，10 月底新发生存款均息较 10 月中旬 -0.4pp、新发生贷款 -0.2~0.5pp；但「暗补」反向抬升实付（VPBank 11/6 起 +2.2pp 至 11/11，6–11 月 8.8%、12 月 8.9%；MB 32 周年加成扩至 6–12 月 +2.35~2.9pp、最高 8.2%；Techcombank 首笔 +1.7pp 后 12 月 8.6%），挂牌与实际价差扩至 2.5–3.7pp，房贷仍 12–16%、未同步。②汇率——银行美元卖出价整周 -210 盾：VCB 25,990（10/31）→25,780（11/8），BIDV 约 -240，彻底脱离 26,000 并创 2025 年 3 月底以来新低；SBV 中央汇率 25,637→25,615（-22）；自由市场 26,070/26,130、与银行价差约 350 盾。外部美元反因美国 10 月非农超预期走强，DXY 周末 102.28（周 +0.39%），内外分化加大。③政策——11/7 国会通过 2027 年社经决议（GDP ≥10%、CPI 约 4.5%、人均 6,100 美元）；《住房法》《土地法》《房地产经营法》三部修订仍在议程、拟 11/21 表决；河内第 96/2026/NQ-HĐND 号决议 11/7 生效；建设部就修订草案第 31/38/44/59/70 条（受益对象）、第 42/48/64 条（投资优惠）逐条说明。④市场——河内量价双弱：C&W Q3 新推 2,100 套（-54%）、成交 1,720 套（-61%/-71%）、一手 1.08 亿盾/㎡（-12% 系结构）；CBRE 二手 6,000 万盾/㎡（-5%/-8%，首次同比转跌）、成交 3,900 套（-33%/-66%，2024 Q1 以来最低）；Savills 成交 -26%/-48%；Batdongsan 二手挂牌指数年内 -15%。胡志明一手仍高（Q2 80% 超 1 亿盾/㎡、去化约 32%），二手无红本仍涨价（Rivera Park 8,000–8,500 万、Richmond City 7,000–7,500 万盾/㎡）。⑤市政/新盘——胡志明 10 月基建 222,430 亿盾（+43.1%）、前 10 月拨付 77.5%；地铁 2 号线 5/11 站开工、拨付 88%，11/6–11/7 起 ST07/ST08 围挡致 13 条公交改线至 12/31；Win City 启 Victory Gallery（3,290 万盾/㎡ 起）、Tara Maison 294 套、Diamond Sky 推「买一赠一」抽奖。⑥下周关注——11/21 三部法表决结果（决定 2027 供应与预售规则）、Q4 约 3 万套新推落地情况、12/5 河内龙边 CT2 地块拍卖（起拍 5,500 万盾/㎡）、11 月 CPI 与信贷数据。", en: "Weekly review, Nov 3-9: (1) Rates - all 46 commercial banks have cut listed 6-month-plus deposit rates by 0.5-0.7pp this month, with late-October new-deposit averages 0.4pp and new-loan averages 0.2-0.5pp below mid-October; but bonus add-ons push actual payouts back up (VPBank adds 2.2pp from Nov 6 to Nov 11 for 8.8% at 6-11 months and 8.9% at 12; MB's 32nd-anniversary bonus widened to 6-12 months at 2.35-2.9pp for up to 8.2%; Techcombank's first-deposit bonus of 1.7pp lifts 12 months to 8.6%), widening the board-versus-paid gap to 2.5-3.7pp while mortgages stay at 12-16%. (2) FX - bank dollar asks fell 210 dong on the week, Vietcombank from 25,990 on Oct 31 to 25,780 on Nov 8 and BIDV about 240 lower, fully clear of the 26,000 mark and the lowest since late March 2025; the SBV central rate eased 22 dong to 25,615 while the informal market quoted 26,070/26,130, about 350 dong above banks. Abroad the dollar strengthened on a payrolls beat, DXY closing at 102.28 (+0.39% on the week), so domestic and external moves diverged. (3) Policy - on Nov 7 the National Assembly passed the 2027 socio-economic resolution (GDP 10% or more, CPI around 4.5%, GDP per capita $6,100); the amended Housing, Land and Real Estate Business laws remain on the agenda for a Nov 21 vote; Hanoi's Resolution 96/2026/NQ-HDND took effect on Nov 7; the Construction Ministry detailed Articles 31/38/44/59/70 on beneficiaries and 42/48/64 on investor incentives. (4) Market - Hanoi weakened on both volume and price: C&W put Q3 launches at 2,100 (-54%) and sales at 1,720 (-61%/-71%) with a VND 108m/sqm primary average (-12% on mix); CBRE has secondary at VND 60m/sqm (-5%/-8%, the first annual fall) and 3,900 sales (-33%/-66%, the weakest since Q1 2024); Savills sales fell 26%/48% and Batdongsan's secondary asking index is down 15% year-to-date. HCMC primary prices stay high (80% above VND 100m/sqm in Q2, absorption around 32%) while unregistered resale keeps rising (Rivera Park VND 80-85m, Richmond City VND 70-75m/sqm). (5) Infrastructure and launches - HCMC October capex VND 22,243bn (+43.1%) with 77.5% of the 10-month plan disbursed; metro line 2 has five of 11 stations started and 88% disbursed, and barriers at ST07/ST08 rerouted 13 bus routes from Nov 6-7 through Dec 31; Win City opened Victory Gallery from VND 32.9m/sqm, Tara Maison launched 294 units and Diamond Sky runs a buy-one-win-one draw. (6) Next week - the Nov 21 vote on the three laws (setting 2027 supply and presale rules), delivery of roughly 30,000 Q4 launches, the Dec 5 Hanoi Long Bien CT2 land auction from VND 55m/sqm, and November CPI and credit data.", src: "https://vietnamnews.vn/economy/1803586/viet-nam-to-complete-87-601-social-housing-units-in-2026.html" },
    { date: "2026-11-08", tag: "数据 / Data", tagClass: "good", zh: "11/8 周末汇率：SBV 周日无牌价调整，中央汇率维持 25,615（与 11/6 持平，周内 -22 盾），汇率中心参考区间 24,385/26,845；Vietcombank 现金买入 25,370、转账买入 25,400、卖出 25,780（较上周末 -210），BIDV 25,395/25,775、VietinBank 约 25,225/25,765——银行卖出价全面退回 25,765–25,780 区间，为 2025 年 3 月底以来最低、较 10 月底的 25,990 一周内回落约 210 盾。自由市场 26,070/26,130（较上周末约 -210），与 VCB 卖出价差约 350 盾，显示系统外美元需求仍偏高但未形成推升银行牌价的压力。其他币种同步回落：欧元 VCB 买入 28,143/卖出 29,332（周 -293）、英镑 33,723/34,803（周 -382）、日元 157.25/166.4（周 -2.26）。外部：DXY 周末收 102.28（周 +0.39%）——周初因油价回落、美债收益率下行与中期选举后情绪切换一度跌近 101，周五美国 10 月非农超预期后单日反弹约 0.75%；非农新增口径两源分歧（16.5 万 vs 6.5 万）已标待核实，失业率降至 4.1%，市场据此推迟美联储宽松预期。机构：TVS 认为 Q4 美元仍有上行压力，但出口、侨汇与 FDI 到位形成的美元供给可对冲，涨幅可控。", en: "Nov 8 weekend FX: the SBV made no Sunday fixing, leaving the central rate at 25,615 (flat vs Nov 6, 22 dong lower on the week) with the official band at 24,385/26,845; Vietcombank quoted 25,370 cash bid, 25,400 transfer bid and 25,780 ask (210 dong lower on the week), BIDV 25,395/25,775 and VietinBank about 25,225/25,765, so bank asks now cluster at 25,765-25,780, the lowest since late March 2025 and about 210 dong below the 25,990 seen at the end of October. The informal market quoted 26,070/26,130 (about 210 lower on the week), roughly 350 dong above Vietcombank, indicating offshore-style demand remains elevated without yet forcing bank boards higher. Other currencies fell in tandem: Vietcombank euro at 28,143 bid / 29,332 ask (293 lower on the week), sterling 33,723/34,803 (382 lower) and yen 157.25/166.4 (2.26 lower). Abroad, DXY closed the week at 102.28 (+0.39%), having slid toward 101 early on softer oil, lower Treasury yields and a post-midterm mood shift before rebounding about 0.75% on Friday after US October payrolls beat expectations; the payroll figure is reported inconsistently (165,000 vs 65,000) and is flagged unverified, while unemployment fell to 4.1% and pushed back Fed easing bets. TVS expects continued Q4 dollar pressure but sees it contained by export, remittance and FDI dollar supply.", src: "https://www.vietnam.vn/en/ti-gia-usd-hom-nay-8-11-usd-the-gioi-phuc-hoi-manh-sau-bao-cao-viec-lam-my" },
    { date: "2026-11-07", tag: "市政 / Infra", tagClass: "mid", zh: "11/6–11/7 起胡志明地铁 2 号线两处车站围挡施工，13 条公交临时改线至 12/31：11/7 10:00 起 ST08 阮鸿道站（Nguyễn Hồng Đạo）周边设围挡，23 路（堤岸车站—高隆桥）与 64 路（东部车站—莲潭）改道，张正街（Trường Chinh）自张公定至同登段禁止卡车与客车通行（公交除外）；11/6 10:00 起 ST07 七贤站（Bảy Hiền）附近因大学都市区中轴路与三区三路（阮平谦）封闭，8/10/19/33/50/52/53/99/166/170/60-5 共 11 条线路改道（改走阮贤、新立、621 路、清江、谢光宝等）。含义：两站从勘察转入实体围挡，是 2 号线（滨城—参良）由管线迁移进入主体施工的标志；沿线第七郡、新平、富润一带的道路通行与临街商业客流在未来 14 个月持续受压，但站点 500 m 内 TOD 预期同步升温。", en: "From Nov 6-7 HCMC put up construction barriers at two metro line 2 stations, temporarily rerouting 13 bus routes through Dec 31: from 10:00 on Nov 7 barriers around ST08 Nguyen Hong Dao station diverted routes 23 (Cho Lon-Cau Lon) and 64 (Mien Dong-Dam Sen), with trucks and passenger vehicles barred from Truong Chinh between Truong Cong Dinh and Dong Den apart from buses; from 10:00 on Nov 6 the closure of the university township spine road and part of interzone road 3 (Nguyen Binh Khiem) near ST07 Bay Hien rerouted 11 routes (8, 10, 19, 33, 50, 52, 53, 99, 166, 170 and 60-5) via Nguyen Hien, Tan Lap, road 621, Thanh Giang and Ta Quang Buu. The shift from survey to physical hoarding marks line 2 (Ben Thanh-Tham Luong) moving from utility diversion into main construction: street access and street-front trade in District 7, Tan Binh and Phu Nhuan stay under pressure for 14 months while TOD expectations within 500 m of the stations firm up.", src: "https://en.sggp.org.vn/ho-chi-minh-city-adjusts-13-bus-routes-to-accommodate-transport-construction-post130810.html" },
    { date: "2026-11-07", tag: "利好 / Positive", tagClass: "good", zh: "11/6–11/7 河内拟对老城区住房困难户开设社房「免摇号」通道：还剑坊（Hoàn Kiếm）拟按自愿登记，向人均居住面积不足 5 ㎡ 的多户合住户配售社房，首批覆盖 902 户、3,621 人。按市人委会提交市议会的方案：每户仅可购或租购 1 套、仅享受 1 次；须在本决议通过前已在老城区/古街落户并实际居住、人均 <5 ㎡、符合现行社房资格、自愿登记并经坊人委会核准；配售须全家迁出原住房并注销原租约。2026 年首批 552 套、分布 9 个项目（南岭、大模、丹凤、石室、永兴、麋泠、福盛等），2027 年继续配售，每个项目不超过可售房源的 20%；同等条件下按人均面积最少、家有老人或残疾人、贫困户、登记先后排序；优先选择靠近公共交通、尤其接驳城轨的项目。含义：这是把「极端拥挤户」从排队摇号中单列的直接干预，规模虽小（552 套），但为老城区更新与社房去化提供了可复制的行政路径。", en: "Nov 6-7 Hanoi moved to open a no-lottery social housing channel for overcrowded Old Quarter households: Hoan Kiem ward would let households averaging under 5 sqm per person register voluntarily to buy or rent-to-buy social units, covering 902 households and 3,621 people in the first phase. Under the proposal submitted by the city government to the People's Council, each household may buy or rent-to-buy only one unit and only once; applicants must have registered and actually lived in the Old Quarter or old streets before the resolution passes, average under 5 sqm, meet existing social housing criteria, register voluntarily and be approved by the ward; buyers must move the whole household out and surrender any state lease. Some 552 units across nine projects (Linh Nam, Dai Mo, Dan Phuong, Thach That, Vinh Hung, Me Linh, Phuc Thinh and others) are planned for 2026 with more in 2027, capped at 20% of sellable stock per project, ranked by smallest floor area per person, elderly or disabled members, poor or near-poor status and registration order, and prioritising projects near public transport, especially metro links. The programme singles out the most overcrowded households from the lottery queue; small at 552 units, it creates a replicable administrative route for Old Quarter renewal and social housing absorption.", src: "https://vietnamnet.vn/en/over-900-households-in-hanoi-old-quarter-nay-buy-social-housing-without-lottery-2569781.html" },
    { date: "2026-11-08", tag: "新盘 / Launch", tagClass: "good", zh: "11/8 万福集团（Vạn Phúc Group）启动 Diamond Sky「买一赠一·双宅」抽奖：11/1/2026–11/1/2027 期间购买 Diamond Sky 房源的客户，可参与抽奖获得同项目另一套公寓（价值近 80 亿盾）。项目位于万福城（198 公顷）第 13 号国道沿线、西贡河边，2 栋约 20 层、296 套公寓 + 7 间商铺，配套 3 万 ㎡ Diamond Mall（3 层裙楼）、16 公顷大日湖、3.4 km 江畔长滩公园、2.1 km 白溪运河；现有配套含 EMASI 国际双语学校、红庞国际大学医院、Marina Royal 游艇码头与音乐喷泉广场。另有 Golden Shophouse、Royal Van Phuc 两条商住产品线，现房交付、法务已完备可即用即租。区位催化：第 13 号国道规划拓宽至 60 m、10–14 车道；胡志明—土龙木地铁 2 号线 C16 站规划于项目前。提示：抽奖属营销手段，非价格下调，成交单价与折扣仍需以合同为准；该批 296 套的去化与官方价目未公布，待核实。", en: "Nov 8 Van Phuc Group launched Diamond Sky's buy-a-home-win-a-home draw: buyers from Nov 1 2026 to Nov 1 2027 can enter to win a second apartment in the same project worth close to VND 8bn. The project sits on National Highway 13 inside the 198 ha Van Phuc City by the Saigon River, with two towers of about 20 storeys, 296 apartments and 7 shophouses, plus a 30,000 sqm three-level Diamond Mall, the 16 ha Dai Nhat lake, a 3.4 km riverside park and the 2.1 km Song Trang canal; existing amenities include EMASI international bilingual school, Hong Bang International University Hospital, the Marina Royal harbour and a musical-fountain plaza. Two commercial townhouse lines, Golden Shophouse and Royal Van Phuc, are completed and ready to use or let. Location catalysts: Highway 13 is to be widened to 60 m and 10-14 lanes, and HCMC-Thu Dau Mot metro line 2 is planned with station C16 in front of the township. Note: the draw is a marketing device rather than a price cut, so contracted unit prices and discounts still govern; absorption and official price lists for the 296 units are unpublished and unverified.", src: "https://www.vietnam.vn/en/co-hoi-trung-can-thu-hai-gan-8-ty-dong-khi-mua-diamond-sky" },
    { date: "2026-11-06", tag: "新盘 / Launch", tagClass: "good", zh: "房地产市场降温，但公寓仍吸引买家；房贷利率下降影响市场走向。", en: "Real estate market cools down yet apartments remain popular; lower mortgage rates impact trends.", src: "https://news.google.com/rss/articles/CBMiowFBVV95cUxNSTFkN0V3TUgtdjExcVR4d1pqV25oa0hGc1hWVlNRY0ljdGZfOGJCT1VGN3JQQVdiaENpWWJmNzE5ZXJ1R0xJZmExYUNRMEFUYVdpcHlpQjNYNEt4b25aVTZSWlpRcHBCeThsYmdmQ21iYUVYZWlNaDNZR0dmQ1RSeER3dGF3SUx6U3pBaW9VQWFhVUZDUDFCUk8zQ3ZzbjhGdFdN?oc=5" },
    { date: "2026-11-06", tag: "数据 / Data", tagClass: "mid", zh: "房地产市场方向发生转变，具体变化需进一步观察。", en: "Real estate market direction shifts; further observation needed for details.", src: "https://news.google.com/rss/articles/CBMidkFVX3lxTE5OVEVFVDlBaUtWVlVCd0NkSzNmOFlVcllNNktYNzhOTmx5VUtxLVJCN250TDg3aDRNRzdaS1J4UXgxOEtBWnEyZmtGSlBiTzRJZVY1bFpXZnU4TEdkb0R1LTFKYXNtQXRYbHVUT096NVRicm0ta3c?oc=5" },
    { date: "2026-11-07", tag: "数据 / Data", tagClass: "mid", zh: "河内房地产流动性停滞，价格仍维持高位；降息是否足以拉动复苏尚待观察。", en: "Hanoi real estate liquidity stalls with high prices; rate cuts may not fully revive market.", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxOZ0gtT1c1dmpnajBBMWlfS1RpcS1Iek1XME5zdzk2Y1JyTzdRMzIzaWdvbVNwZWJrUEMxQnVQOUZ3ZzJ3ajR5SW1CeUk0T2VkaE1zNW9neTZOenduN2oyUTJGN05NaTM5VzBGSmVtM0hrS1FzQkc4NEgzTHIzc3FLZUUwS2NoU19VbkVlcmtNc1RvQk5QSGUyMlVHNE9LaFo1MEJyOGZB?oc=5" },
    { date: "2026-11-07", tag: "数据 / Data", tagClass: "mid", zh: "河内房地产价格是否回归真实价值，市场仍在观察中。", en: "Hanoi real estate prices may return to true value; market watches closely.", src: "https://news.google.com/rss/articles/CBMilwFBVV95cUxNeGw2SEtHbnl5cWplQW5Pc3QyaTRlZWxleTZwdDNEMnBJa2M2SkJ3VzFBLVllekhETUtFMXpybV9FSTZxT3ZWc1hYbUpXalZIaERodVVwallKNnE5dnZ1SzlQYnBWdUx4cDRFU3ExeGFaaHdkT3FxZ3RKUjdzZmhNM25OZGc4RmhqdlVSS2pqZnV4WE1lUDBv?oc=5" },
    { date: "2026-11-07", tag: "市政 / Infra", tagClass: "good", zh: "南部区域基础设施发展将推动房地产空间扩展。", en: "Southern infrastructure development drives real estate space expansion.", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxNbXZXTXNfWHNkUW1HMlBaRThLdG9RVFpOX21heW4ya3NVRVNDcHprS0tNY0dZS3dGTTFXWXE3Q3JUTUdGVVNmM002cDFtN0w2NUVfTExPVm9pWmFDc0JQWjllZC1BbGZGdGVGX0ZkTGpIWWNGODVza0o1ejNOa1ZkYTlvYlZfQ1JhQndrZzQtT2JSdGo2dGE0QmVsMTlac0tfYTlkaDRB?oc=5" },
    { date: "2026-11-06", tag: "利坏 / Negative", tagClass: "bad", zh: "河内龙边区公寓用地拍卖起拍价 5500 万越南盾/平方米，引发是否抄底讨论。", en: "Hanoi auctions Long Bien apartment land starting at 55 million VND/sqm; timing for bottom fishing questioned.", src: "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNNkVtdkVvY3lSYTF5cWpZa00wbnI2c1dLVkljVy1OeHV1V2J5U0ZlZnY0NEZvMVZmbXJ4cjMwbWZNVTlsZzA4M19XbkhYUWJJUUhSQUNYcWlSMUMzYWFjbmdKVTNOSDhEWDVWdXU5U1NNLWZvbnprZU4ybGJuSUhfaUxHRWtXMUczeU1YenVsYzFCOEI3RUg5ZFdGXzY4LVBYOTVmdHpHbE45OU1YSGNCUHZwTTZ2clJXWnJJWVl4UDRRemxQMzVhZmNScFJEM1la?oc=5" },
    { date: "2026-11-08", tag: "利好 / Positive", tagClass: "good", zh: "胡志明市房地产收入实现两位数增长，市场表现积极。", en: "Ho Chi Minh City real estate revenue grows double digits; market shows positivity.", src: "https://news.google.com/rss/articles/CBMikAFBVV95cUxQbkxOUTJ2R08zN01lSnVLdVh4cHhFMkJHUlFCNHEwTk5rbzhRSWtERXNybWVXNWtRb1FjQlVvM2EyWmsyNnRZcVNET1YtRzBwdnlPTDh0aW5wbk9yR2FtV0xrQ2dJOV9JSDhsOTN6Snhoc2FKRG41MWRCOWxCcXNfUkFhOFZxY18yUksycTVoSXg?oc=5" },
    { date: "2026-11-07", tag: "数据 / Data", tagClass: "good", zh: "11/7 汇率：SBV 中央汇率 25,615，与 11/6 持平，为约三个月低位（距 10/14 高点 25,646 回落 31 盾），±5% 区间 24,334–26,896；Vietcombank 买入 25,430 / 卖出 25,810，银行整体约 25,400/25,780、较本月初回落约 200 盾，美元卖出价续处一年半低位（约合 2025 年 3 月底水平）、年初至今约 -1.1%。自由市场报价分歧：民智报 25,840/25,940、前锋报 26,070/26,130（同日），按待核实处理。基本面：10 月贸易顺差 73.1 亿美元（9 月 13 亿，年内第二次连续顺差）、前 10 个月 FDI 实际到位 240.8 亿美元（+13.1%）；金价 4,065 美元/盎司、SJC 金条 1.38–1.41 亿盾/两。机构：MBS 年底 26,400–26,600、TVS 看上行但可控、UOB Q4 26,300。", en: "Nov 7 FX: the SBV central rate held at 25,615, a three-month low (31 dong below the Oct 14 peak of 25,646), with the +/-5% band at 24,334-26,896; Vietcombank quoted 25,430 bid / 25,810 ask and banks overall around 25,400/25,780, about 200 dong lower than the start of the month and back to late-March 2025 levels, roughly 1.1% below the 2026 open. Free-market quotes diverge (Dan Tri 25,840/25,940 vs Tien Phong 26,070/26,130 on the same day) and are flagged unverified. Fundamentals: October trade surplus of $7.31bn ($1.3bn in September, a second straight surplus) and 10-month FDI disbursement of $24.08bn (+13.1%); gold $4,065/oz with SJC bars at VND 138-141m per tael. Forecasts: MBS 26,400-26,600 by year-end, TVS sees controlled upside, UOB 26,300 for Q4.", src: "https://www.vietnam.vn/en/gia-usd-tu-do-va-ngan-hang-dong-loat-di-xuong" },
  ],

  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  hotTopics: [
    { date: "2026-11-12", rank: 1, heat: 91, tag: "中性 / Neutral", tagClass: "mid", raw: false,
      titleZh: "楼市不缺房缺钱", titleEn: "Real Estate: Shortage of Homes, Not Money",
      zh: "房地产市场不缺房缺钱，市场进入新周期。专家分析五大趋势重塑格局，强调从增量转向存量竞争，开发商需聚焦真实价值创造以激活需求。", en: "Real estate lacks homes not money; market enters new cycle. Experts highlight five trends reshaping the landscape, emphasizing a shift from incremental to stock competition and focusing on real value creation.", vi: "Bất động sản thiếu nhà, không thiếu tiền",
      srcName: "24HMoney", src: "https://news.google.com/rss/articles/CBMihwFBVV95cUxPczdKeFBzLUZ1a3Z4c3FMa2ZHMWluUVJRTHhfdTNiNXhQaHFPdzVzUVdVRGZTeWYtUHZoWVFnalNaRkw5WnlYZnJEcG5MV3VaWHZBU0l5Wmd6cjF0R3F3UkpMazhNUVhMM2JyVlUxQTRWekI1dzQxckJEMXBYd3NuWnlDTXEwRVk?oc=5",
      coverage: 4, related: [{ n: "VietnamFinance", u: "https://news.google.com/rss/articles/CBMilwFBVV95cUxNeFlxTEF5WDlVaXpmZEVJMVNaVFptZFE4R0FQNTBTdk44WGNmT3FQYnlrNEtDaHVsU3lJSnlMZ2FDeEZFelI5Ql9xOTBMbk84aWJUVktYWk5CNVd2cDBYd3ljUVl0SzdiSW9mVWtaY1F6Q3VBbzU0YXdiNjl3YWdzeUVzMFZoUVM1UXFwQjdrb1ZpQ01WUURF?oc=5" }, { n: "Báo Tiền Phong", u: "https://news.google.com/rss/articles/CBMikwFBVV95cUxPdkgycURrMjhNSE1qXzNlaEp2TkJiamZ1S2JjV1FMdjkzMGMtcm9OQ2prUEZkX3phX01oRW9hdndzRXE5N3FvQXkxNmtjc1hwQ3B4RHhNem1vZnpiRnh4U01LRU9OZVViRmd5QXdOMEV6ajh4VUxxNVd3R2p3RkVac0NibmR3bThSWXZhS1JGbnpxSFE?oc=5" }, { n: "CafeF", u: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNQ09yMThPeWdjdWViWTdGS2FJeUk5d0VTR1NPWVlvYmdlSFM0YmN2ZGVaWFh4U1Back1ycVVkSzJhNXFrcUpYNno3Q0NYSktEcHZLdS1mRFMyTE9naHF6SklQenlDZEJtWUM3X1R5eVNIRzlFUWdqdVVrdVljbzdGLVpWYjdaMjZYNWFFTkcyNVZ0b2ZSeW96dHE1Wk1qdWFsOW1hQ2FoTlVWUQ?oc=5" }] },
    { date: "2026-11-11", rank: 2, heat: 91, tag: "利坏 / Negative", tagClass: "bad", raw: false,
      titleZh: "房企贷款余额超万亿", titleEn: "Real Estate Loan Balance Exceeds Trillion",
      zh: "十二家银行房地产经营贷款余额超 1.14 万亿，增速放缓。新规与严格筛选成为关键因素，促使信贷投放更加审慎，行业面临去杠杆压力。", en: "Loans for real estate business at twelve banks exceed 1.14 trillion, with growth slowing. New regulations and strict screening become key factors, prompting more prudent credit allocation amid deleveraging pressure.", vi: "Dư nợ kinh doanh bất động sản vượt 1,14 triệu tỷ đồng tại 12 ngân hàng",
      srcName: "Tạp chí Doanh nghiệp và Hội nhập", src: "https://news.google.com/rss/articles/CBMisAFBVV95cUxQMURZTmstUjNBRlNRUExoREVsZWYzXzlaMGhqaFMtVDRhejh1RTVvWW9TNWd5OXNyamlIaVBpQkF6c0FhdTVJajZyd3p0a0ZmNF9XU240Y1hVN3FZMHRJQk10R2RmR3dEMGRlVjZweGpJd1BSbnhldTB6Sm5LYzZoZUtoLUNYREg2am5xb2UyelNVR0syekNPOEEwSHBVbGpJUkI1TlpBOWFOM3ByeVNmXw?oc=5",
      coverage: 4, related: [{ n: "Báo Nhân Dân điện tử", u: "https://news.google.com/rss/articles/CBMingFBVV95cUxQQm5ROU9saWl2bWJsR29TWnJnektCOUw2a0N2MnF3d3Fjend3cEduWEw3LUd2SEdnemxjeHJCdF9NUkZ6T2NPY3Zzalc5LTQ4MWpYalZlYXEzMmw0VXUwVXJHYU9lWW9MeHJxVlJ5Y3Q5bVBlQlBzQVJDRURyU2JraGRIZklpLWFDVGMxNzlNdjJJNGRrWnRLVUFWUXdYdw?oc=5" }, { n: "Thương gia", u: "https://news.google.com/rss/articles/CBMipAFBVV95cUxNS211dVh3cXpUMTNPa0k1a0hST21fN3BVcDdtS0Y2YXA5YnJhV2lOOXRKbGlva3ZwOTFVVl9vc0VoZVVFYjN2cVlqUlVtVGx5alFXNXBsYlZFeGhVekx3VF9WNk9QbWcwZzlUbVd0TDJNYTlWbkdOUlplVS1JUmVlUTJ0bTVkeUhjME5aYlR0aFctcjIzbW9EalVBMzhRN2VYMjFHM9IBowFBVV95cUxNZjZwQllyTk05eXRIbmU1WVA2NVVteC1LSUNBUEp4VmVmMXhTaTllTTFHeWV6d0Fjdi1lTlZHWW1tQVNwSk9KaXB0SEVNTlB0YWNlekkyLWUwQVd0ODN6OS11b3VNS3d4NDRtVzhOUWtYRGJKaTMtOEJoOTh2MHNReDdQNDhrMWVvVG40Y21xQmNNQnlYRktHLVJTb1RuN2RKdVQw?oc=5" }, { n: "Thời báo Tài chính Việt Nam", u: "https://news.google.com/rss/articles/CBMiugFBVV95cUxNdXJvMjlqakNDTVJlM0tGMThnTjRpMXJ6NzNjZUFwQUp0UThzbVZldDFHWEFNSWRIYWJfdXFoeHl3RDZJSWNQWDhMeDktTExBRzROSFR2bW1lOEdqU3BGTmVuWk1QdEV2a3gzb0FQMS1iSkxyU3luaEZuckpUdlAwVU9reHp4RF8yM3h1RGs3cC1wWExub0d6WE1QSElINWRYbERHcDBCeDFvYzNVcDdzczI0el9NSTdZQVE?oc=5" }] },
    { date: "2026-11-10", rank: 3, heat: 100, tag: "新盘 / Launch", tagClass: "good", raw: false,
      titleZh: "胡志明市新公寓管理费框架", titleEn: "HCMC New Apartment Management Fee Framework",
      zh: "胡志明市发布新公寓管理费率框架，最高达每平方米每月 24700 越南盾。新规旨在规范物业管理服务，提升居住品质，同时平衡开发商与业主利益。", en: "Ho Chi Minh City releases new apartment management fee framework, maxing at 24,700 VND per sqm monthly. The regulation aims to standardize services and balance developer-owner interests.", vi: "TP.HCM ban hành khung giá quản lý chung cư mới, cao nhất gần 25.000 đồng/m2/tháng",
      srcName: "CafeLand", src: "https://news.google.com/rss/articles/CBMiugFBVV95cUxQcUxsSkxLRWVOamx2WU9FREZSVWtqV3U1WThQLTh3UnI3TjBzLUNqbjhTSWZWNDFnVHdQMGxXNmlkbHpreVdxdXd0OUNubjg2WFJSUHdPTVRiWW1vQk5wbEY1YVNRbUwtR1hhZDRsV3NyYmgzdW5mTVV2TWZuVFhhSmxoY2FTVkZMR3NNOVRqWGVFdG1UcGlNYkpDWDZ2TnFBWDVJczJjV21tcEVkcXRhM1dGR0pfRk9NcEE?oc=5",
      coverage: 7, related: [{ n: "Báo Công Lý", u: "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPUHplVy1BM0szUGx3WVpYeVNCdWg3Mkt6N0ZYcXl0eU1qTWg1M3VSc1JLdlZqbjF0OU5Uem0tWlI3QjZOdTRrWTNFUjJ0cy0wRzZBU2U5LWpXMmRkWU92bmkwYUt0VnZITEF2aGZyLXBseVNmbW5zdlA2RDdRRmVOdXQ4ZzhzWGEtWjd2eVduTG9wRjFCVkxmYUUtVDhWcXFaZ2ZmZ3NQb1A?oc=5" }, { n: "VOV.VN", u: "https://news.google.com/rss/articles/CBMingFBVV95cUxOVHI4a05uQ294MHdfejl1bE4tY1RpblRCdDFmN2MwSzJiNE9maldZZmFfM1FXX1VWRkpuRDd4Vk9peDU2bDBtZzdMcHE0SzVqaXpNSlhMU0lCc0lMRnpPZ1ZYRVlaa3Y5NzZ2YXA5RDBUSDk4VTNKTjlmQU5CbHowb0J2N2FPMkhKaGwwUVotUnVwdTZYZ1gwbktpM1pPdw?oc=5" }, { n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMitAFBVV95cUxPU0xpMGZidEtsd3ZSZWtyLW1YOVlRUlpnWm9nVGJWSmx6YXVRcDFFcGV1MmZ3cnlrN29uczN5alFWZnRPRHUxTnRVSUxiamdJaGFyd0N0NmdsOHhYUGtkdkVZd0dsWmdFcU54TU1VUEJ6U0FVYUYwOENjdjF0RGNmTEVPTTRjSTF3ejU4bTYtTTdUbkVlQXdEdTdFMEtoNlcweGIwa0Q0Zkg5Wnp2WWFoZVNUWkY?oc=5" }] },
    { date: "2026-11-11", rank: 4, heat: 80, tag: "中性 / Neutral", tagClass: "mid", raw: false,
      titleZh: "五大趋势塑造新周期", titleEn: "Five Trends Shaping New Cycle",
      zh: "识别五大趋势塑造房地产新周期：市场面貌将显著不同。律师指出四大方向将定义未来格局，强调从规模扩张转向价值创造与可持续发展。", en: "Identify five trends shaping the new real estate cycle: market appearance will differ significantly. Lawyers point to four directions defining future patterns, emphasizing value creation over scale expansion.", vi: "Nhận diện 5 chuyển động đang định hình chu kỳ bất động sản mới",
      srcName: "batdongsan.baoxaydung.vn", src: "https://news.google.com/rss/articles/CBMiugFBVV95cUxPQTJlWVFrMlNYSHVUYk9pU3VXSWk3YnZMZWh5ZlAzU18wUnR4QjJpUEVueDBpcHpaZ3owTWhoaUx5NWFSRDh1VGRJUTN3OEx4SEFWaVF4YThjNlRsOG0tbzJEM2ZCQVI2d3dLemgzZnpVd2dlelZENGItcEZXeVp4YmR2ZWd1QjRjMjh6b29VSGQ0Tm9Ic3oyVngxcmJjdnd4MElRRG4weXN3TzZQWEZ1NUtJYVJWdVJRbFE?oc=5",
      coverage: 3, related: [{ n: "Báo Pháp Luật Việt Nam", u: "https://news.google.com/rss/articles/CBMikAFBVV95cUxNN3lvYWh3dEsyTW1NdHVnenF6R1h1OENIVlBqLWRuZFY0anZ3NXgxUHZHS1BrQ0E2aFBGOHN3RjB3ZVNYRnQ0Wm5BWFhPWmF3YW9od1Q0Mm5PS0tGWmFLRUFSdFVqUGNzWnVicFR0NGtkSnNWVzYxdHpqMERzbUgwOE1FYnI3SE9nZHBzVC1VSTM?oc=5" }, { n: "nguoiquansat.vn", u: "https://news.google.com/rss/articles/CBMizAFBVV95cUxPdXhCYWhWZGNhZ0lmRmRJdGNKNXZHNTRjYnItNVB5MDVQZnJnSHFCVW5lVndHS1BTbWg3bEh0MHN0WG90YTZ6VFhVS2hQWVQ2Z2lnbGVRcGh2V2JlRFNoQnlBM1U4WmE2T0ZIclp0SzVlcHZVYjZERGhrVmtwcm5TWlU2UnZ4TUNrS2RfN3NhTXRUYTU5RHh3S1gyYnJnSzVUU2FLbXhrdzBzOUljNE1UbVhXc3Jyam5POGp6a25CaVJiZVFTLWNTREJmSkI?oc=5" }] },
    { date: "2026-11-11", rank: 5, heat: 80, tag: "中性 / Neutral", tagClass: "mid", raw: false,
      titleZh: "2026 地产论坛激活新周期", titleEn: "2026 Real Estate Forum Activates New Cycle",
      zh: "2026 房地产论坛旨在激活新周期，通过新趋势与新战略激发市场需求。行业需调整策略以应对结构性变化，推动市场健康复苏与持续增长动力。", en: "2026 Real Estate Forum aims to activate the new cycle by stimulating demand through new trends and strategies. The industry must adjust tactics to address structural changes for healthy recovery.", vi: "Diễn đàn Bất động sản 2026: Kích hoạt chu kì mới",
      srcName: "Trung tâm Nội dung số và Truyền thông", src: "https://news.google.com/rss/articles/CBMimwFBVV95cUxOdHktcm9XVHl5MHNOYXVfQ0lMVEtOQzZsVVd1cXNrYWttcTl4NTRCaG43d3lpS1NfTWhVcmNBLXpSTXFtMXM5MWMxSkIwaThIWDYzbkZsMnNpV0JUdU8xM0lZdk52WUpfQ21ndHdGVnBxYm1HLURDZGJRZUtOTm54aE9yZmtpN3QtZGttaVB5TGZ4T2dnaEhoUzJGbw?oc=5",
      coverage: 3, related: [{ n: "Báo Nhân Dân điện tử", u: "https://news.google.com/rss/articles/CBMisgFBVV95cUxNeEk0NXhRSUxxYjBHa0ViV3hQekEyZkV1ZmliYlhJWHc5bFBEUDFCbVF3YWlBQXlPYldVRzRiVTR4N0syaVB5Tk1seGdLb0pxY3RBR2s2aFlyUHF0VVd2cENvZk83b2V6LVJkZExFQnVIUy1UTlpSR1VObDE0RjhrU0ZBdXc4em42d25qdnlQcEF2dGFhU2tJNzViSnNUdnRlMzJZS3EzMUM4N0oyMnNTNmtB?oc=5" }, { n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNN3A3Y3NScXhCLXUzYjVwYXRfLTdwbnJieXNWN213ZUpIVEtKMVZPRkxNWXV4XzBUMUdUdnRHekMwa0dpNHktUHNMcm5ZM1RiOU0wd0lWRlNGZTk2Y1d6UzJOWWdzbW9RbkdYWXJYNmhPb3VadUttYUNZZk9aSkFEcVRkbzhkOEVWZGliem9OOWpEc3N6bUh0aWVTMkhCY0l4cU9VbXFtSVhvZ0NRWmlaMU5fM2tWcUtKMnpiVA?oc=5" }] },
    { date: "2026-11-11", rank: 6, heat: 80, tag: "市政 / Infra", tagClass: "good", raw: false,
      titleZh: "岘港开工四千五百保障房", titleEn: "Da Nang Launches 4,500 Affordable Homes",
      zh: "岘港将开工 4500 套保障房，胡志明市推动 29 社升格为坊。两地同步推进住房供应与行政优化，旨在改善民生并提升城市治理效率与居民生活质量。", en: "Da Nang to launch 4,500 affordable homes; HCMC accelerates upgrading 29 communes to wards. Both cities advance housing supply and administrative optimization to improve livelihoods and governance efficiency.", vi: "Bất động sản 24h: Đà Nẵng sẽ khởi công thêm 4.500 căn NOXH, TP.HCM thúc tiến độ đưa 29 xã lên phường",
      srcName: "CafeLand", src: "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQX0RCZHpKRm1zeDMxV3hiRS1abG50NHdQSkFQbEVJUjhaSlFBRUtyUVNrbF9NWGd3elNnYngzRHN1RTB3YmxpWXF3V1hwTVVJZFBOREUyRF90T3VDTXZIczFabDlsQTJZWkZsYjZwMVBXTUdwNFhlYUNSSlV1NHdpQWp6QzBXQmt0UE95MzNaM194YkVJUzNROThXNFdlaHVhV1ZyeDhiM0dOTmFaWjJsN1M0RDdzWWM1ajB6b2t2NHpqWmY4Umx1dFU2a0VvYngwWUE?oc=5",
      coverage: 3, related: [{ n: "Vietnam.vn", u: "https://news.google.com/rss/articles/CBMipAFBVV95cUxPVHFqd2YyUkhVYnR1UGU2SEtkM0w4N3ZGTDFRRUlBTjZkV1J3Y2ZqNkVpUTRTbEpTc1RJSFlxTks1OTBpYXNrV195bHhQOWJwbEFkUW9wM1h0SVo4SVFub3pRcjdOTE9WQmo3VG5zWVdrbXFSSmV3WVQxT3dLMjdBS0F2MFdCZUJJV0ZLdWFlWWhMcE5QUXN2QzhEX1B0ZFFrVDliVw?oc=5" }, { n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPZjdYcjF2UllTOVY5cHB1V3JjV2p0R2NISEJiZGpBRlpNNDlZNmRPNmdDUF9MelJQOENxaUR6QnUtcVVIZEI4U1kyMXY2ME14QjVrYzBsNzlvTWZNU1pLR3hQQnFBVjJjNlhabEtKZVJvSUExT3pJWnlhR0hhc29rb1ZWTnVvM2ZiWmFrMy1fb3F5WEhPT3ZQSGNYak5jc09tNGVnX0UwRW1pRnc5VHlvUE5LOC11OTY2S2RZ?oc=5" }] },
    { date: "2026-11-12", rank: 7, heat: 69, tag: "中性 / Neutral", tagClass: "mid", raw: false,
      titleZh: "胡志明市收回九千三百平米土地", titleEn: "HCMC Reclaims 9,300 Sqm Land",
      zh: "胡志明市收回近 9300 平方米土地，涉及一家房地产企业。此举旨在纠正违规用地行为，强化土地管理秩序，确保资源合理配置与城市发展规划的一致性。", en: "Ho Chi Minh City reclaims nearly 9,300 sqm of land from a real estate firm. This action corrects irregular land use, strengthens management order, and ensures alignment with urban planning.", vi: "TP.HCM thu hồi gần 9.300 m2 đất của một doanh nghiệp bất động sản",
      srcName: "CafeLand", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxOQ2pTOGNiSXR1MmplSUo4bTZNN282SFpKNDQ5YXB6d1ZoQm1ISlBLNWZ2ZGJaTXVBV1FnMy1ta2dIZGdtNEpab3BoWjFmWW9VaXY3R3N5RU02ODR5eHZfeUR6N0ZoTGNacWpEWlZVQ01kdTQ1Sld0SUxLTDVFTTlSY3I0dmlBeDZESmpfY0tPLThkVTJnc1YwTU5ra2FpNmJnWkZybHhB?oc=5",
      coverage: 2, related: [{ n: "VnExpress · Bất động sản", u: "https://vnexpress.net/doanh-thu-bat-dong-san-tp-hcm-tang-truong-hai-con-so-5142198.html" }] },
    { date: "2026-11-11", rank: 8, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: false,
      titleZh: "新周期竞逐真实价值", titleEn: "New Cycle Competes for Real Value",
      zh: "房地产进入新周期，竞争焦点转向创造真实价值。企业需摒弃盲目扩张，注重产品品质与长期回报，以应对市场结构性调整并赢得消费者信任与支持。", en: "Real estate enters new cycle; competition shifts to creating real value. Firms must abandon blind expansion, focusing on product quality and long-term returns to win consumer trust amid structural adjustments.", vi: "Bất động sản vào chu kỳ mới: ‘Đua’ tạo giá trị thực",
      srcName: "Thời Báo Ngân Hàng", src: "https://news.google.com/rss/articles/CBMikAFBVV95cUxNbkptWlJ2eXZJTUx5azkwdTFYNUYyLWxobk1HNjVxSUZTOUZNY2EwQlh1YWZqdUpMdGcya2NKZmM1UnBCVTBDNjBrVEdPVkxYZzF3Vk81UW5iZ1F3aEZmRldKXy1xTkY3MUpwVE84X1hXckJILVFOZ1BBajUtRnpFWWhWTWxoMUVnLVp2eDdDVnI?oc=5",
      coverage: 2, related: [{ n: "Báo Dân trí", u: "https://news.google.com/rss/articles/CBMivgFBVV95cUxNdzNaSkljUlljd3pRdlY3VmFqWGI0WXhxb3RkTi1vYUg4djhJbVZiZTY1VDVlSE1Oa29famFiSmpPOWVPTFBCWVJpaFA2ZHd2dm9WVFlxcGhDWHIwU2tMVU9OVVFwMllpNFVfRFAzOG5XRjdUNzA4YkhLTEdkSXlobWlSdUw1ZWdfSEFqZUlPM1FYVWJETS12WERWYUVoOVVqcElBSk1ETnlGbzlUZ1dMUk1BLTFhWm5BRFpWTklB?oc=5" }] },
    { date: "2026-11-12", rank: 9, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: false,
      titleZh: "嘉德地产因信息披露违规被罚", titleEn: "Gia Duc Real Estate Fined for Disclosure Violation",
      zh: "嘉德房地产因信息披露违规被罚款 9250 万越南盾。此处罚警示企业必须严格遵守透明披露义务，维护市场秩序与投资者权益，避免法律风险影响项目推进。", en: "Gia Duc real estate fined 92.5 million VND for information disclosure violations. This penalty warns firms to strictly comply with transparency obligations, protecting market order and investor rights.", vi: "Bất động sản Gia Đức bị phạt 92,5 triệu đồng vì vi phạm công bố thông tin",
      srcName: "Thuonghieucongluan.com.vn", src: "https://news.google.com/rss/articles/CBMivAFBVV95cUxNRG0xZ1RlRFgtdE1ieFFseEZYdzJIc005b3lyd1ROOHJoMkFiVnptS044OUhfWVl6bWZOMG92VDN5OVJTeXhWeDRCTGpadEhEQmRqZ2JlLU04dDNTLXFCcDhqeGRORmZKTG5XTnloeG1XVmtqZWdIMWxudkhlOXFpUGRnVDZwN2hGOVc1RGFpczA5RUFRWVF5QzhJZXdkdGs3dm05eF9rRFdqeGVncXQ4MXpJa3BBU0stRGdMYQ?oc=5",
      coverage: 2, related: [{ n: "CafeF", u: "https://news.google.com/rss/articles/CBMingFBVV95cUxQdlNqVHRUbHEzc0JFdkpPMFFiZE5ObXBQYTREMzNJNzg4V3dlWGRHRXpBbW9XNXR5WTNac0hOWU5VQTlLU1BvY2lwYkc4N1BIdWFzS2ZUeFo2MTBQUGM4Wl81bTVGbVFITnRBZU5DUXVRUzRObnNwbXNaUEF3QnljOGl5OTMwT2NkRjRfVG5FTjZqbHlXTnFGZGJhZnVRQQ?oc=5" }] },
    { date: "2026-11-12", rank: 10, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: false,
      titleZh: "CBRE 高管：两年房价涨超百分之二十五", titleEn: "CBRE Executive: Prices Up Over 25% in Two Years",
      zh: "CBRE 越南高管称，过去两年房价年均涨幅超 25%。强劲增长反映市场活力，但未来需关注供需平衡与政策调控，确保可持续健康发展而非单纯价格驱动。", en: "CBRE Vietnam executive notes annual price growth exceeding 25% over two years. Strong growth reflects market vitality, but future focus must shift to supply-demand balance and sustainable development.", vi: "Sếp CBRE Việt Nam: Sau 2 năm giá bất động sản tăng hơn 25%/năm",
      srcName: "nguoiquansat.vn", src: "https://news.google.com/rss/articles/CBMinAFBVV95cUxPRHFZaVJhdHVQR0RYMnY1MThZRVNtb2N3Vlk2SVd5LWpaRzl2X1NqMnJVck9PSnMweUdmRGdtTFBpYTNvT1VIcnVnVDhqdzJUbW9Dd2FnNUxidmpXWDFCaUVSUzdIeDZ4c2VMZU1xSGVjRjR3Sm9KbzZycTVvcHY1RmJxTHFxNjdNTmtfdXNLN2Q1QjM3S1VudU11c1o?oc=5",
      coverage: 2, related: [{ n: "VnEconomy", u: "https://news.google.com/rss/articles/CBMiekFVX3lxTE1LS1QyaGlpSk1Bcy1heV9nV3N4WGM2Z2k5NUlMTDNhRWlLc0IySEFUN2JhcmZTSEZsZ1ZJMWRDWFZBMUg5SlhIQXFPOU9PUWE1dG5kbnlDVmpaT1cyZzUxQ2o1MGp5djRVSHBld0htc0s3em1WemhtaDZ3?oc=5" }] },
    { date: "2026-11-11", rank: 11, heat: 69, tag: "利坏 / Negative", tagClass: "bad", raw: false,
      titleZh: "解开停滞项目死结", titleEn: "Unsticking Stalled Projects",
      zh: "解决停滞房地产项目的“死结”，需政府与企业协同努力。以广治省为例，全面审查七十二个项目并果断处置，旨在盘活存量资产，恢复市场信心与流动性。", en: "Unsticking stalled real estate projects requires government-enterprise collaboration. Quang Tri reviews 72 projects decisively to revitalize assets, restore market confidence, and improve liquidity.", vi: "Gỡ 'nút thắt' dự án bất động sản đình trệ",
      srcName: "Báo Tiền Phong", src: "https://news.google.com/rss/articles/CBMiggFBVV95cUxQSEYzbmY1b2RLODFNRG9vRlppNEdZcElIeGZEeENXRjJnalpuSW5nRWJuMVQ2LVVabl9HNnhMRlBhMHd3Y0xXazJsMV9vY0lQZ3QyUHNDLUIzck54T1R4RjROSktEcHdtMVp2Z0hQaUE1NDdKMkhzYmhDc2pCMlUwMkFB?oc=5",
      coverage: 2, related: [{ n: "VnEconomy", u: "https://news.google.com/rss/articles/CBMimgFBVV95cUxOTnktQ1VkMUtWMzYwNFREZ3lkU2ZNQUN4N09GZU9fZ1FmU0x6V25rRjV2RmtZdzdaYjNVTVhTeHJMakRXaWNxODVhc0k0Y254U012QmQzdVRYZ29YblV0dzB6NHhSQTZxd1FmVVhJdmlWOHQ2eEl3anJ0ZHRnc3dGUnE1T2JISzl6RzJNSTFPM3VvLVM2YkhzczFB?oc=5" }] },
    { date: "2026-11-11", rank: 12, heat: 80, tag: "中性 / Neutral", tagClass: "mid", raw: false,
      titleZh: "解决 Cần Giờ 三大居住难题", titleEn: "Solving Three Can Gio Living Challenges",
      zh: "解决 Cần Giờ 房地产吸引居住者的三大难题。Vinhomes Green Paradise 通过优化配套与服务成功示范，为偏远地区开发提供可复制的经验与策略参考。", en: "Solving three challenges attracting residents to Can Gio real estate. Vinhomes Green Paradise offers a replicable model through optimized amenities and services for remote area development.", vi: "Ba bài toán hút người ở cho bất động sản Cần Giờ",
      srcName: "VnExpress", src: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPQVlFcGZOLU0wOE02b1plc2MxTHNMaUJINkRQTWM2Z3JyVUc0NV93ZFQ5MFNIY3VpZ0Jjb1Mwb2pCSWVSNWY3SkhkOTRxc0ZwV1hXMlRYenlQTlZudVJraFBqLUN6UDNISU4xZzVZTUMyX0x4OU9ZbVZuQk9WbTRka3R6b0lNR09YbTJn?oc=5",
      coverage: 3, related: [{ n: "Báo Tiền Phong", u: "https://news.google.com/rss/articles/CBMirAFBVV95cUxOZWl6SXo4UHNsY1FJdm1uRWZfRDZsNXE0c0pqUF9rdGIydDFjUlg4Q3dZSF9FY3VobkZoSE52YW42Snl6UXljM1hVRDMwQ1pvWlFLVWR0cnJwWU00YUdNd0U1Q0otdTRlYXg1OTJfdjJJdVQ2bzg5QmxHTm5iREtTdG5DUXlicmFQb25HRkRNRFNqRmlQRlJ0VWNxV01kU2ZVVmpyckVOeEZZeWNM?oc=5" }, { n: "VnExpress · Bất động sản", u: "https://vnexpress.net/cach-vinhomes-green-paradise-thu-hut-cu-dan-toi-can-gio-5143907.html" }] },
  ],

  /* ---------- 胡志明分区年度新盘（加管理费/宽带/链接/付款） ---------- */
  hcmcDistricts: [
    {
      district: "第1区",
      districtEn: "District 1",
      name: "Grand Marina Saigon",
      nameEn: "Grand Marina Saigon (Marriott)",
      year: 2022,
      priceLow: 6000,
      priceHigh: 9000,
      priceUnit: "USD/㎡",
      area: "45–320 ㎡",
      typeZh: "奢华公寓 / 服务式住宅",
      typeEn: "Luxury / serviced",
      foreignOk: true,
      launch: "2022 Q2",
      units: 433,
      developerZh: "Masterise Homes × Marriott",
      developerEn: "Masterise Homes × Marriott",
      mgmtFee: "约 30,000–40,000 盾/㎡·月（酒店式管理）",
      internet: "物业统一接入为主（独占概率高），约 40–60 万盾/月",
      down: "30% 起",
      payment: "按工程节点分期，交房前≤70%，尾款5%至粉皮书",
      link: "https://grandmarinasaigon.com.vn",
      noteZh: "河畔地标，万豪品牌管理，外籍可购。",
      noteEn: "Riverside landmark, Marriott-managed, foreign-eligible.",
      priceNoteZh: "6,000–9,000 为 2022 开盘价区间（按户型/楼层/朝向，非时间序列）。",
      priceNoteEn: "6,000–9,000 is the 2022 launch range by unit type/floor/view — not a time series.",
      currentPrice: "二手约 9,000–13,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "Studio",
          typeEn: "Studio",
          area: "40–50 ㎡",
          price: "≈6,000–7,000",
          totalZh: "约 24–35 万美元",
          totalEn: "≈$240–350K",
          resaleZh: "≈8,800–10,300 USD/㎡（2026-10 估算）",
          resaleEn: "≈8,800–10,300 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "1 房",
          typeEn: "1BR",
          area: "51–58 ㎡",
          price: "≈6,500–8,000",
          totalZh: "约 33–46 万美元",
          totalEn: "≈$330–460K",
          resaleZh: "≈9,500–11,700 USD/㎡（2026-10 估算）",
          resaleEn: "≈9,500–11,700 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "78–100 ㎡",
          price: "≈6,800–9,000",
          totalZh: "约 53–90 万美元",
          totalEn: "≈$530–900K",
          resaleZh: "≈10,000–13,200 USD/㎡（2026-10 估算）",
          resaleEn: "≈10,000–13,200 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "106–143 ㎡",
          price: "≈7,000–9,000+",
          totalZh: "约 74–129 万美元+",
          totalEn: "≈$740K–1.29M+",
          resaleZh: "≈10,300–13,200 USD/㎡（2026-10 估算）",
          resaleEn: "≈10,300–13,200 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "豪华/总统",
          typeEn: "Premium/Penthouse",
          area: "121–265 ㎡",
          price: "≈8,000–9,500",
          totalZh: "约 97–250 万美元+",
          totalEn: "≈$970K–2.5M+",
          resaleZh: "≈11,700–13,900 USD/㎡（2026-10 估算）",
          resaleEn: "≈11,700–13,900 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第1区",
      districtEn: "District 1",
      name: "Vinhomes Golden River",
      nameEn: "Vinhomes Golden River",
      year: 2021,
      priceLow: 4500,
      priceHigh: 7000,
      priceUnit: "USD/㎡",
      area: "50–180 ㎡",
      typeZh: "高端公寓",
      typeEn: "High-end",
      foreignOk: true,
      launch: "2021",
      units: 3000,
      developerZh: "Vinhomes（Vingroup）",
      developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "23,000 盾/㎡·月（含泳池/健身房）；车位 210–220 万盾/月，摩托 20 万盾/月",
      internet: "VNPT 为主，100–300Mbps 约 20–35 万盾/月",
      down: "30% 起",
      payment: "分期 30/30/30/10 或一次性",
      link: "https://vinhomes.vn",
      noteZh: "核心区综合体，配 Vinschool/Vinmec，外籍配额充足。",
      noteEn: "Core complex with Vinschool/Vinmec; ample foreign quota.",
      currentPrice: "二手约 6,000–7,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "50–60 ㎡",
          price: "≈4,500–5,500",
          totalZh: "约 22–33 万美元",
          totalEn: "≈$225–330K",
          resaleZh: "≈5,300–6,500 USD/㎡（2026-10 估算）",
          resaleEn: "≈5,300–6,500 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "78–100 ㎡",
          price: "≈4,800–6,000",
          totalZh: "约 37–60 万美元",
          totalEn: "≈$370–600K",
          resaleZh: "≈5,600–7,000 USD/㎡（2026-10 估算）",
          resaleEn: "≈5,600–7,000 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "120–160 ㎡",
          price: "≈5,000–7,000",
          totalZh: "约 60–112 万美元",
          totalEn: "≈$600K–1.12M",
          resaleZh: "≈5,900–8,200 USD/㎡（2026-10 估算）",
          resaleEn: "≈5,900–8,200 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第2区（守添）",
      districtEn: "District 2 (Thu Thiem)",
      name: "Empire City / Cove Residences",
      nameEn: "Empire City · Cove",
      year: 2023,
      priceLow: 4500,
      priceHigh: 8000,
      priceUnit: "USD/㎡",
      area: "60–250 ㎡",
      typeZh: "超高层豪宅",
      typeEn: "Luxury high-rise",
      foreignOk: true,
      launch: "2023",
      units: 1500,
      developerZh: "Keppel Land × 天日集团（Gaw NP）",
      developerEn: "Keppel Land × Gaw NP (Tien Phuoc)",
      mgmtFee: "约 25,000–32,000 盾/㎡·月",
      internet: "FPT/VNPT，约 25–40 万盾/月",
      down: "30% 起",
      payment: "工程节点分期",
      link: "https://empirecity.vn",
      noteZh: "守添核心，江景豪宅，外籍热点。",
      noteEn: "Thu Thiem core, river-view luxury, expat hotspot.",
      currentPrice: "二手约 6,500–9,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "60–75 ㎡",
          price: "≈4,800–6,000",
          totalZh: "约 29–45 万美元",
          totalEn: "≈$290–450K",
          resaleZh: "≈6,100–7,700 USD/㎡（2026-10 估算）",
          resaleEn: "≈6,100–7,700 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "90–115 ㎡",
          price: "≈5,200–7,000",
          totalZh: "约 47–80 万美元",
          totalEn: "≈$470–800K",
          resaleZh: "≈6,700–9,000 USD/㎡（2026-10 估算）",
          resaleEn: "≈6,700–9,000 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "140–180 ㎡",
          price: "≈5,500–8,000",
          totalZh: "约 77–144 万美元",
          totalEn: "≈$770K–1.44M",
          resaleZh: "≈7,000–10,200 USD/㎡（2026-10 估算）",
          resaleEn: "≈7,000–10,200 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第2区（守德）",
      districtEn: "District 2 (Thu Duc)",
      name: "The Global City",
      nameEn: "The Global City",
      year: 2025,
      priceLow: 3500,
      priceHigh: 6000,
      priceUnit: "USD/㎡",
      area: "50–160 ㎡",
      typeZh: "综合社区 / 高端",
      typeEn: "Township / high-end",
      foreignOk: true,
      launch: "2025",
      units: 1200,
      developerZh: "Masterise Homes",
      developerEn: "Masterise Homes",
      mgmtFee: "约 15,000–20,000 盾/㎡·月",
      internet: "FPT/Viettel，约 20–35 万盾/月",
      down: "30% 起",
      payment: "工程节点分期",
      link: "https://theglobalcity.com.vn",
      noteZh: "2025–26 供应主力，国际学校+商业配套。",
      noteEn: "Key 2025-26 supply; intl school & retail.",
      currentPrice: "≈4,500–5,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "51–56 ㎡",
          price: "≈3,500–4,200",
          totalZh: "约 18–24 万美元",
          totalEn: "≈$180–240K",
          resaleZh: "≈3,700–4,400 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,700–4,400 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "76–81 ㎡",
          price: "≈3,800–4,600",
          totalZh: "约 29–37 万美元",
          totalEn: "≈$290–370K",
          resaleZh: "≈4,000–4,800 USD/㎡（2026-10 估算）",
          resaleEn: "≈4,000–4,800 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "100–130 ㎡",
          price: "≈4,000–6,000",
          totalZh: "约 40–78 万美元",
          totalEn: "≈$400–780K",
          resaleZh: "≈4,200–6,300 USD/㎡（2026-10 估算）",
          resaleEn: "≈4,200–6,300 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第7区（富美兴）",
      districtEn: "District 7 (Phu My Hung)",
      name: "The Horizon / Midtown",
      nameEn: "The Horizon · Midtown",
      year: 2022,
      priceLow: 2500,
      priceHigh: 4000,
      priceUnit: "USD/㎡",
      area: "55–200 ㎡",
      typeZh: "中高端公寓",
      typeEn: "Mid-to-high end",
      foreignOk: true,
      launch: "2022",
      units: 900,
      developerZh: "富美兴（Phú Mỹ Hưng）",
      developerEn: "Phu My Hung Corp.",
      mgmtFee: "约 10,000–12,000 盾/㎡·月",
      internet: "FPT/VNPT，约 18–30 万盾/月",
      down: "20–30%",
      payment: "分期或一次性",
      link: "https://phumyhung.vn",
      noteZh: "学区/生活型社区，韩/华家庭集中。",
      noteEn: "School/lifestyle community; Korean/Chinese families.",
      currentPrice: "二手约 3,000–4,300 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "55–65 ㎡",
          price: "≈2,500–3,200",
          totalZh: "约 14–21 万美元",
          totalEn: "≈$140–210K",
          resaleZh: "≈2,800–3,600 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,800–3,600 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "80–100 ㎡",
          price: "≈2,700–3,600",
          totalZh: "约 22–36 万美元",
          totalEn: "≈$220–360K",
          resaleZh: "≈3,000–4,000 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,000–4,000 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "120–160 ㎡",
          price: "≈3,000–4,000",
          totalZh: "约 36–64 万美元",
          totalEn: "≈$360–640K",
          resaleZh: "≈3,400–4,500 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,400–4,500 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第9区（守德）",
      districtEn: "District 9 (Thu Duc)",
      name: "Vinhomes Grand Park",
      nameEn: "Vinhomes Grand Park",
      year: 2023,
      priceLow: 1600,
      priceHigh: 2500,
      priceUnit: "USD/㎡",
      area: "45–120 ㎡",
      typeZh: "中端刚需公寓",
      typeEn: "Mid-range",
      foreignOk: true,
      launch: "2023",
      units: 8000,
      developerZh: "Vinhomes（Vingroup）",
      developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "约 7,000–10,000 盾/㎡·月",
      internet: "FPT/Viettel/VNPT，约 18–28 万盾/月",
      down: "20–30%",
      payment: "分期 30/30/30/10",
      link: "https://vinhomes.vn",
      noteZh: "东向新兴城区，地铁1号线辐射，性价比。",
      noteEn: "Eastern corridor, Metro L1 reach, value play.",
      currentPrice: "二手约 2,000–2,600 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "45–50 ㎡",
          price: "≈1,600–2,000",
          totalZh: "约 7–10 万美元",
          totalEn: "≈$72–100K",
          resaleZh: "≈1,800–2,200 USD/㎡（2026-10 估算）",
          resaleEn: "≈1,800–2,200 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "60–75 ㎡",
          price: "≈1,700–2,300",
          totalZh: "约 10–17 万美元",
          totalEn: "≈$102–172K",
          resaleZh: "≈1,900–2,600 USD/㎡（2026-10 估算）",
          resaleEn: "≈1,900–2,600 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "90–110 ㎡",
          price: "≈1,900–2,500",
          totalZh: "约 17–27 万美元",
          totalEn: "≈$171–275K",
          resaleZh: "≈2,100–2,800 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,100–2,800 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "第7区/新月湾",
      districtEn: "Dist.7 / The Crescent",
      name: "Triton Crown",
      nameEn: "Triton Crown (Phu My Hung)",
      year: 2026,
      priceLow: null,
      priceHigh: null,
      priceUnit: "USD/㎡",
      area: "60–180 ㎡",
      typeZh: "奢华公寓（新月湾核心）",
      typeEn: "Luxury (The Crescent)",
      foreignOk: true,
      launch: "2026-09 底发布 · 2026-10-18 首期开盘（A 座）",
      units: 297,
      developerZh: "Phú Mỹ Hưng（富美兴）",
      developerEn: "Phu My Hung Development Corp.",
      mgmtFee: "官方未公示（参考富美兴同区约 20,000–30,000 盾/㎡·月）",
      internet: "物业统一接入为主，约 40–60 万盾/月",
      down: "首期 400+ 客户抽签选房（2026-10-18）；定金/首付以开发商公示为准",
      payment: "官方未公示（以售楼处为准）",
      link: "https://phumyhung.vn/en/phu-my-hung-to-launch-sales-of-triton-crown-apartments-near-crescent-lake",
      noteZh: "新月湾最后一批四面临路住宅地之一：Handel Architects 设计、SOM 总体规划，2 座 16/18 层塔楼，297 套 + 28 间商铺，2026-07 获 4 项 EDGE 预认证。首场开盘逾 400 组客户抽签，逾 80% 为自住/经商用途。",
      noteEn: "One of the last four-frontage residential plots in The Crescent: Handel Architects design within an SOM master plan, two 16/18-storey towers, 297 units + 28 shophouses, 4 EDGE preliminary certificates in Jul 2026. First sales event drew 400+ buyers; over 80% bought for own use or business.",
      priceNoteZh: "官方价目未公示（待核实）：2026-09 底发布、2026-10-18 首期开盘 A 座；租金挂牌 25–90 百万盾/月。",
      priceNoteEn: "Official price list not published (to be verified): released late Sep 2026, Tower A launched Oct 18, 2026; rental listings 25–90m VND/month.",
      currentPrice: "新盘在售（官方价目未公示）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "≈60 ㎡",
          price: "待核实",
          totalZh: "待核实（官方未公示）",
          totalEn: "TBC (not published)",
          resaleZh: "新盘在售，暂无二手价",
          resaleEn: "New launch — no resale market yet"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "≈90 ㎡",
          price: "待核实",
          totalZh: "待核实（官方未公示）",
          totalEn: "TBC (not published)",
          resaleZh: "新盘在售，暂无二手价",
          resaleEn: "New launch — no resale market yet"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "≈120 ㎡",
          price: "待核实",
          totalZh: "待核实（官方未公示）",
          totalEn: "TBC (not published)",
          resaleZh: "新盘在售，暂无二手价",
          resaleEn: "New launch — no resale market yet"
        },
        {
          type: "4 房",
          typeEn: "4BR",
          area: "≈170 ㎡",
          price: "待核实",
          totalZh: "待核实（官方未公示）",
          totalEn: "TBC (not published)",
          resaleZh: "新盘在售，暂无二手价",
          resaleEn: "New launch — no resale market yet"
        }
      ]
    },
    {
      district: "第7区（富顺）",
      districtEn: "Dist.7 / Phu Thuan",
      name: "Vlasta Premier – Phú Thuận",
      nameEn: "Vlasta Premier Phu Thuan",
      year: 2026,
      priceLow: 3050,
      priceHigh: 3550,
      priceUnit: "USD/㎡",
      area: "50–101 ㎡",
      typeZh: "中高端公寓（河畔）",
      typeEn: "Upper-mid riverside condo",
      foreignOk: true,
      launch: "2026（首期）",
      units: 602,
      developerZh: "Văn Phú Invest (VPI)",
      developerEn: "Van Phu Invest (VPI)",
      mgmtFee: "官方未公示（参考同区约 15,000–22,000 盾/㎡·月）",
      internet: "约 30–50 万盾/月",
      down: "代理口径：约 20% 可收房，另有最高 13% 折扣、24 个月 0% 利率贷款、3 年免管理费",
      payment: "按工程节点分期（以开发商公示为准）",
      link: "https://apartment.vn/?p=4628",
      noteZh: "Văn Phú Invest 在南方的首个高端项目：2 座 35 层塔楼、602 套 + 136 间商铺，每层仅 11 套，顶层复式。首期 2026 年开盘，约 8,000 万盾/㎡（含增值税，≈3,080 USD/㎡），低于富美兴旗舰盘。交房时间尚未确认。",
      noteEn: "Van Phu Invest’s first premium project in the south: two 35-storey towers, 602 units plus 136 commercial units, only 11 apartments per floor and duplex penthouses on top. Phase 1 opened 2026 at about VND 80m/sqm incl. VAT (≈USD 3,080), below flagship Phu My Hung projects. Handover date not yet confirmed.",
      priceNoteZh: "3,050–3,550 为 2026 首期开盘价区间（约 8,000–9,200 万盾/㎡，按户型/楼层/朝向，非时间序列）。",
      priceNoteEn: "3,050–3,550 is the 2026 phase-1 launch spread (≈VND 80–92m/sqm) by unit type/floor/view — not a time series.",
      currentPrice: "首期在售（≈8,000 万盾/㎡ 起，含税）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "≈50 ㎡",
          price: "≈3,050–3,550",
          totalZh: "约 15–18 万美元（40–46 亿盾）",
          totalEn: "≈$154–177K (VND 4.0–4.6bn)",
          resaleZh: "首期在售，暂无二手价",
          resaleEn: "Phase 1 selling — no resale market yet"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "≈77 ㎡",
          price: "≈3,200–3,550",
          totalZh: "约 26 万美元（约 67 亿盾）",
          totalEn: "≈$258K (≈VND 6.7bn)",
          resaleZh: "首期在售，暂无二手价",
          resaleEn: "Phase 1 selling — no resale market yet"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "≈101 ㎡",
          price: "≈3,100–3,350",
          totalZh: "约 32 万美元（约 84 亿盾）",
          totalEn: "≈$323K (≈VND 8.4bn)",
          resaleZh: "首期在售，暂无二手价",
          resaleEn: "Phase 1 selling — no resale market yet"
        }
      ]
    },
    {
      district: "第2区（安富/南拉切克）",
      districtEn: "Dist.2 / An Phu",
      name: "Eaton Park",
      nameEn: "Eaton Park (Gamuda Land)",
      year: 2024,
      priceLow: 4800,
      priceHigh: 5500,
      priceUnit: "USD/㎡",
      area: "50–105 ㎡",
      typeZh: "高端品牌住宅",
      typeEn: "Luxury branded residences",
      foreignOk: true,
      launch: "2024 Q3（8 月首期）",
      units: 1968,
      developerZh: "Gamuda Land（马来西亚）",
      developerEn: "Gamuda Land (Malaysia)",
      mgmtFee: "参考同档约 22,000–30,000 盾/㎡·月",
      internet: "约 40–60 万盾/月",
      down: "5% 签约，交房前约 45%（3 年内每半年约 10%）",
      payment: "交房后付 50%，取得产权证付尾款 5%",
      link: "https://saigonluxury.com.vn/eng/eaton-park-mai-chi-tho-gamuda-land",
      noteZh: "Gamuda Land 在南拉切克的首个品牌住宅：6 座 29–39 层塔楼、1,968 套 + 12 套顶层复式，紧邻迈志道与地铁 1 号线。2024 年 8 月首期开盘约 5,000 USD/㎡；2026-10 挂牌 72.9㎡ 2 房约 37.4 万美元（≈5,120 USD/㎡）。交付时间口径不一（2027 年初/2028 年底），以合同为准。",
      noteEn: "Gamuda Land’s first branded residences in South Rach Chiec: six 29–39-storey towers, 1,968 units plus 12 penthouses, next to Mai Chi Tho Blvd and Metro Line 1. Phase 1 launched Aug 2024 at about USD 5,000/sqm; Oct 2026 listings show a 72.9 sqm 2BR at ~USD 374K (≈USD 5,120/sqm). Handover timing varies by source (early 2027 vs late 2028) — defer to the contract.",
      priceNoteZh: "4,800–5,500 为 2024 首期开盘价区间（按户型/楼层/朝向，非时间序列）。",
      priceNoteEn: "4,800–5,500 is the 2024 phase-1 launch spread by unit type/floor/view — not a time series.",
      currentPrice: "在建在售 ≈5,100–5,500 USD/㎡（2026-10 挂牌）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "50.6–54.9 ㎡",
          price: "≈4,800–5,200",
          totalZh: "约 24–29 万美元",
          totalEn: "≈$240–290K",
          resaleZh: "在建未交付，转售/二手极少",
          resaleEn: "Under construction — few resale listings"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "74.9–79.2 ㎡",
          price: "≈4,900–5,300",
          totalZh: "约 37–42 万美元",
          totalEn: "≈$370–420K",
          resaleZh: "在建未交付，转售/二手极少",
          resaleEn: "Under construction — few resale listings"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "≥104.7 ㎡",
          price: "≈5,000–5,500",
          totalZh: "约 52–58 万美元",
          totalEn: "≈$520–580K",
          resaleZh: "在建未交付，转售/二手极少",
          resaleEn: "Under construction — few resale listings"
        }
      ]
    }
  ],
  hcmcDistrictsNoteZh: "「开盘价区间」= 该盘 2022–2025 年首次开盘时的挂牌价范围，是「同一年份内不同户型/楼层/朝向」的价差，不是随时间上涨的序列（如 Grand Marina 的 6,000–9,000 是 2022 开盘时小户型至豪宅的价差，非 2022=6,000→2026=9,000）。每盘另列「当前二手价」作对照；点户型可看面积/单价/总价与示意户型图。",
  hcmcDistrictsNoteEn: "「Launch price range」 = the asking-price spread across unit types/floors/views at first launch (2022–2025), not a time series (e.g. Grand Marina's 6,000–9,000 is the 2022 launch spread from small units to penthouses — NOT 2022=6,000→2026=9,000). A current resale price is listed for comparison; click a unit type for area, unit & total price and a schematic floor plan.",

  /* ---------- 河内高端楼盘（参照胡志明分区表） ---------- */
  hanoiDistricts: [
    {
      district: "西湖/巴亭",
      districtEn: "Tay Ho / Ba Dinh",
      name: "Golden Westlake",
      nameEn: "Golden Westlake",
      year: 2019,
      priceLow: 3000,
      priceHigh: 4500,
      priceUnit: "USD/㎡",
      area: "90–400 ㎡",
      typeZh: "湖畔豪宅/别墅",
      typeEn: "Lakeside luxury / villas",
      foreignOk: true,
      launch: "2019",
      units: 400,
      developerZh: "BRG Group",
      developerEn: "BRG Group",
      mgmtFee: "约 25,000–35,000 盾/㎡·月",
      internet: "FPT/VNPT，约 25–40 万盾/月",
      down: "30% 起",
      payment: "工程节点分期",
      link: "https://www.google.com/search?q=Golden+Westlake+Hanoi+official",
      noteZh: "西湖畔老牌豪宅，外派/使领馆需求刚性。",
      noteEn: "Established lakeside luxury; sticky expat/embassy demand.",
      currentPrice: "二手约 3,500–5,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "2 房",
          typeEn: "2BR",
          area: "90–120 ㎡",
          price: "≈3,000–4,000",
          totalZh: "约 27–48 万美元",
          totalEn: "≈$270–480K",
          resaleZh: "≈3,400–4,500 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,400–4,500 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "140–200 ㎡",
          price: "≈3,200–4,500",
          totalZh: "约 45–90 万美元",
          totalEn: "≈$450–900K",
          resaleZh: "≈3,600–5,100 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,600–5,100 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "别墅",
          typeEn: "Villa",
          area: "250–400 ㎡",
          price: "≈3,500–5,000",
          totalZh: "约 88–200 万美元",
          totalEn: "≈$875K–2M",
          resaleZh: "≈4,000–5,700 USD/㎡（2026-10 估算）",
          resaleEn: "≈4,000–5,700 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "纸桥/北慈廉",
      districtEn: "Cau Giay / Bac Tu Liem",
      name: "D'Palais de Louis",
      nameEn: "D'Palais de Louis",
      year: 2021,
      priceLow: 2800,
      priceHigh: 4000,
      priceUnit: "USD/㎡",
      area: "70–180 ㎡",
      typeZh: "高端公寓",
      typeEn: "High-end",
      foreignOk: true,
      launch: "2021",
      units: 520,
      developerZh: "Tân Hoàng Minh",
      developerEn: "Tan Hoang Minh",
      mgmtFee: "约 15,000–20,000 盾/㎡·月",
      internet: "FPT/VNPT，约 20–35 万盾/月",
      down: "30% 起",
      payment: "工程节点分期",
      link: "https://www.google.com/search?q=D+Palais+de+Louis+Hanoi+official",
      noteZh: "新 CBD 门户，配套成熟。",
      noteEn: "New-CBD gateway, mature amenities.",
      currentPrice: "二手约 3,200–4,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "2 房",
          typeEn: "2BR",
          area: "70–85 ㎡",
          price: "≈2,800–3,600",
          totalZh: "约 20–31 万美元",
          totalEn: "≈$196–306K",
          resaleZh: "≈3,200–4,100 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,200–4,100 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "110–140 ㎡",
          price: "≈3,000–4,000",
          totalZh: "约 33–56 万美元",
          totalEn: "≈$330–560K",
          resaleZh: "≈3,400–4,500 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,400–4,500 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "复式",
          typeEn: "Duplex",
          area: "150–180 ㎡",
          price: "≈3,300–4,200",
          totalZh: "约 50–76 万美元",
          totalEn: "≈$495–756K",
          resaleZh: "≈3,700–4,800 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,700–4,800 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "巴亭/柳街",
      districtEn: "Ba Dinh / Lieu Giai",
      name: "Vinhomes Metropolis",
      nameEn: "Vinhomes Metropolis",
      year: 2020,
      priceLow: 2500,
      priceHigh: 3500,
      priceUnit: "USD/㎡",
      area: "50–150 ㎡",
      typeZh: "高端公寓",
      typeEn: "High-end",
      foreignOk: true,
      launch: "2020",
      units: 1200,
      developerZh: "Vinhomes（Vingroup）",
      developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "约 18,000 盾/㎡·月",
      internet: "VNPT 20–35万盾/月",
      down: "30% 起",
      payment: "30/30/30/10",
      link: "https://vinhomes.vn",
      noteZh: "柳街核心，办公+商业+公寓综合体。",
      noteEn: "Lieu Giai core, mixed-use.",
      currentPrice: "二手约 2,800–4,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "50–60 ㎡",
          price: "≈2,500–3,000",
          totalZh: "约 12–18 万美元",
          totalEn: "≈$125–180K",
          resaleZh: "≈2,800–3,400 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,800–3,400 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "75–95 ㎡",
          price: "≈2,600–3,300",
          totalZh: "约 20–31 万美元",
          totalEn: "≈$195–313K",
          resaleZh: "≈2,900–3,700 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,900–3,700 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "110–150 ㎡",
          price: "≈2,800–3,500",
          totalZh: "约 31–52 万美元",
          totalEn: "≈$308–525K",
          resaleZh: "≈3,200–4,000 USD/㎡（2026-10 估算）",
          resaleEn: "≈3,200–4,000 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "南慈廉",
      districtEn: "Nam Tu Liem",
      name: "Masteri West Heights",
      nameEn: "Masteri West Heights",
      year: 2023,
      priceLow: 2200,
      priceHigh: 3200,
      priceUnit: "USD/㎡",
      area: "50–140 ㎡",
      typeZh: "高端公寓",
      typeEn: "High-end",
      foreignOk: true,
      launch: "2023",
      units: 1500,
      developerZh: "Masterise Homes",
      developerEn: "Masterise Homes",
      mgmtFee: "约 12,000–16,000 盾/㎡·月",
      internet: "FPT/Viettel 20–35万盾/月",
      down: "30% 起",
      payment: "工程节点分期",
      link: "https://masterisehomes.com",
      noteZh: "河内西向供应主力，国际学校环绕。",
      noteEn: "Key west-side supply; intl schools nearby.",
      currentPrice: "≈2,500–3,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "50–58 ㎡",
          price: "≈2,200–2,800",
          totalZh: "约 11–16 万美元",
          totalEn: "≈$110–162K",
          resaleZh: "≈2,400–3,100 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,400–3,100 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "72–85 ㎡",
          price: "≈2,400–3,000",
          totalZh: "约 17–25 万美元",
          totalEn: "≈$173–255K",
          resaleZh: "≈2,700–3,300 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,700–3,300 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "100–140 ㎡",
          price: "≈2,600–3,200",
          totalZh: "约 26–45 万美元",
          totalEn: "≈$260–448K",
          resaleZh: "≈2,900–3,600 USD/㎡（2026-10 估算）",
          resaleEn: "≈2,900–3,600 USD/sqm (Oct 2026 est.)"
        }
      ]
    },
    {
      district: "西湖/Ciputra",
      districtEn: "Tay Ho / Ciputra",
      name: "Noble West Lake",
      nameEn: "Noble West Lake",
      year: 2026,
      priceLow: 7000,
      priceHigh: 9000,
      priceUnit: "USD/㎡",
      area: "80–300 ㎡",
      typeZh: "品牌豪宅",
      typeEn: "Branded luxury",
      foreignOk: true,
      launch: "2026 Q4 预计",
      units: 300,
      developerZh: "Noble（越南本土）",
      developerEn: "Noble (Vietnam)",
      mgmtFee: "待公布",
      internet: "待公布",
      down: "30% 起",
      payment: "待公布",
      link: "https://www.google.com/search?q=Noble+West+Lake+Ciputra+Hanoi+official",
      noteZh: "2026 Q1 动工，Ciputra 内湖景品牌豪宅，外籍配额紧张。",
      noteEn: "Broke ground Q1 2026; Ciputra lake-view branded luxury, tight foreign quota.",
      currentPrice: "待开盘（预计 8,000–10,000 USD/㎡）",
      unitsBreakdown: [
        {
          type: "2 房",
          typeEn: "2BR",
          area: "80–110 ㎡",
          price: "≈7,000–8,500",
          totalZh: "约 56–94 万美元",
          totalEn: "≈$560–935K",
          resaleZh: "尚未开盘，暂无二手价",
          resaleEn: "Not launched yet — no resale market"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "130–180 ㎡",
          price: "≈7,500–9,000",
          totalZh: "约 98–162 万美元",
          totalEn: "≈$975K–1.62M",
          resaleZh: "尚未开盘，暂无二手价",
          resaleEn: "Not launched yet — no resale market"
        },
        {
          type: "复式/顶复",
          typeEn: "Duplex/Penthouse",
          area: "200–300 ㎡",
          price: "≈8,000–9,500",
          totalZh: "约 160–285 万美元",
          totalEn: "≈$1.6M–2.85M",
          resaleZh: "尚未开盘，暂无二手价",
          resaleEn: "Not launched yet — no resale market"
        }
      ]
    },
    {
      district: "西湖",
      districtEn: "Tay Ho",
      name: "Parc Régent (ParkCity)",
      nameEn: "Parc Régent (ParkCity)",
      year: 2026,
      priceLow: 4200,
      priceHigh: 5300,
      priceUnit: "USD/㎡",
      area: "60–200 ㎡",
      typeZh: "高端",
      typeEn: "High-end",
      foreignOk: true,
      launch: "2026 Q1",
      units: 600,
      developerZh: "ParkCity Group（马来西亚）",
      developerEn: "ParkCity Group (Malaysia)",
      mgmtFee: "约 18,000–24,000 盾/㎡·月",
      internet: "FPT/VNPT 20–35万盾/月",
      down: "30% 起",
      payment: "分期+早付折扣",
      link: "https://www.parkcity.com.my",
      noteZh: "ParkCity 社区内新推，外籍配额充足。",
      noteEn: "New phase in ParkCity; ample foreign quota.",
      currentPrice: "≈4,700–5,300 USD/㎡（2026-10）",
      unitsBreakdown: [
        {
          type: "1 房",
          typeEn: "1BR",
          area: "60–70 ㎡",
          price: "≈4,200–4,800",
          totalZh: "约 25–34 万美元",
          totalEn: "≈$252–336K",
          resaleZh: "≈4,400–5,100 USD/㎡（2026-10 估算）",
          resaleEn: "≈4,400–5,100 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "2 房",
          typeEn: "2BR",
          area: "85–110 ㎡",
          price: "≈4,500–5,300",
          totalZh: "约 38–58 万美元",
          totalEn: "≈$382–583K",
          resaleZh: "≈4,700–5,600 USD/㎡（2026-10 估算）",
          resaleEn: "≈4,700–5,600 USD/sqm (Oct 2026 est.)"
        },
        {
          type: "3 房",
          typeEn: "3BR",
          area: "130–200 ㎡",
          price: "≈4,800–5,300",
          totalZh: "约 62–106 万美元",
          totalEn: "≈$624K–1.06M",
          resaleZh: "≈5,100–5,600 USD/㎡（2026-10 估算）",
          resaleEn: "≈5,100–5,600 USD/sqm (Oct 2026 est.)"
        }
      ]
    }
  ],

  /* ---------- 楼盘数据库（价格历史/管理费/宽带/配额/标签） ---------- */
  projects: [
    {
      name: "Vinhomes Golden River",
      nameEn: "Vinhomes Golden River",
      district: "第1区",
      districtEn: "D1",
      segment: "高端",
      segmentEn: "High-end",
      year: 2021,
      priceLow: 4500,
      priceHigh: 7000,
      unit: "USD/㎡",
      area: "50–180",
      foreignOk: true,
      rentYield: "4–5%",
      priceHistory: {
        "2021": 4800,
        "2022": 5200,
        "2023": 5600,
        "2024": 6200,
        "2025": 6800,
        "2026": 7200
      },
      mgmtFee: "23,000 盾/㎡·月",
      internet: "VNPT 20–35万盾/月",
      quota: {
        total: 3000,
        foreignSold: 620
      },
      down: "30% 起",
      payment: "30/30/30/10",
      tags: {
        zh: [
          "核心区",
          "医疗",
          "学区"
        ],
        en: [
          "Core",
          "Medical",
          "School"
        ]
      },
      link: "https://vinhomes.vn",
      launch: "2021",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "Grand Marina Saigon",
      nameEn: "Grand Marina Saigon",
      district: "第1区",
      districtEn: "D1",
      segment: "奢华",
      segmentEn: "Luxury",
      year: 2022,
      priceLow: 6000,
      priceHigh: 9000,
      unit: "USD/㎡",
      area: "45–320",
      foreignOk: true,
      rentYield: "3–4%",
      priceHistory: {
        "2022": 6800,
        "2023": 7300,
        "2024": 7900,
        "2025": 8400,
        "2026": 8700
      },
      mgmtFee: "约 30,000–40,000 盾/㎡·月",
      internet: "物业统一（独占）",
      quota: {
        total: 433,
        foreignSold: 185
      },
      down: "30% 起",
      payment: "工程节点",
      tags: {
        zh: [
          "核心区",
          "投资"
        ],
        en: [
          "Core",
          "Investment"
        ]
      },
      link: "https://grandmarinasaigon.com.vn",
      launch: "2022 Q2",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "The Metropole Thu Thiem",
      nameEn: "The Metropole Thu Thiem",
      district: "第2区",
      districtEn: "D2",
      segment: "奢华",
      segmentEn: "Luxury",
      year: 2023,
      priceLow: 6000,
      priceHigh: 9500,
      unit: "USD/㎡",
      area: "70–280",
      foreignOk: true,
      rentYield: "3–4%",
      priceHistory: {
        "2023": 6800,
        "2024": 7400,
        "2025": 7900,
        "2026": 8200
      },
      mgmtFee: "约 25,000–32,000 盾/㎡·月",
      internet: "FPT/VNPT 25–40万盾/月",
      quota: {
        total: 1260,
        foreignSold: 440
      },
      down: "30% 起",
      payment: "工程节点",
      tags: {
        zh: [
          "核心区",
          "投资"
        ],
        en: [
          "Core",
          "Investment"
        ]
      },
      link: "https://sonkimland.com",
      launch: "2023",
      salesZh: "已交付 · 少量在售",
      salesEn: "Delivered · limited primary stock"
    },
    {
      name: "The Global City",
      nameEn: "The Global City",
      district: "第2区/守德",
      districtEn: "D2/Thu Duc",
      segment: "高端",
      segmentEn: "High-end",
      year: 2025,
      priceLow: 3500,
      priceHigh: 6000,
      unit: "USD/㎡",
      area: "50–160",
      foreignOk: true,
      rentYield: "4–5%",
      priceHistory: {
        "2025": 4200,
        "2026": 4500
      },
      mgmtFee: "约 15,000–20,000 盾/㎡·月",
      internet: "FPT/Viettel 20–35万盾/月",
      quota: {
        total: 4500,
        foreignSold: 1050
      },
      down: "30% 起",
      payment: "工程节点",
      tags: {
        zh: [
          "学区",
          "生活"
        ],
        en: [
          "School",
          "Lifestyle"
        ]
      },
      link: "https://theglobalcity.com.vn",
      launch: "2025",
      salesZh: "在建 · 分期在售",
      salesEn: "Under construction · phased sales"
    },
    {
      name: "Lumiere Riverside",
      nameEn: "Lumiere Riverside",
      district: "第2区",
      districtEn: "D2",
      segment: "高端",
      segmentEn: "High-end",
      year: 2022,
      priceLow: 3800,
      priceHigh: 5500,
      unit: "USD/㎡",
      area: "55–180",
      foreignOk: true,
      rentYield: "4–5%",
      priceHistory: {
        "2022": 4200,
        "2023": 4600,
        "2024": 5000,
        "2025": 5400,
        "2026": 5700
      },
      mgmtFee: "约 18,000 盾/㎡·月",
      internet: "FPT/VNPT 20–35万盾/月",
      quota: {
        total: 1280,
        foreignSold: 380
      },
      down: "30% 起",
      payment: "工程节点",
      tags: {
        zh: [
          "生活",
          "投资"
        ],
        en: [
          "Lifestyle",
          "Investment"
        ]
      },
      link: "https://masterisehomes.com",
      launch: "2022",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "Midtown Phu My Hung",
      nameEn: "Midtown Phu My Hung",
      district: "第7区",
      districtEn: "D7",
      segment: "中高端",
      segmentEn: "Mid-high",
      year: 2022,
      priceLow: 2800,
      priceHigh: 4200,
      unit: "USD/㎡",
      area: "60–200",
      foreignOk: true,
      rentYield: "4–5%",
      priceHistory: {
        "2022": 3200,
        "2023": 3400,
        "2024": 3700,
        "2025": 3900,
        "2026": 4100
      },
      mgmtFee: "约 10,000–12,000 盾/㎡·月",
      internet: "FPT/VNPT 18–30万盾/月",
      quota: {
        total: 900,
        foreignSold: 270
      },
      down: "20–30%",
      payment: "分期/一次性",
      tags: {
        zh: [
          "学区",
          "生活",
          "医疗"
        ],
        en: [
          "School",
          "Lifestyle",
          "Medical"
        ]
      },
      link: "https://phumyhung.vn",
      launch: "2022",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "Sunrise Riverside",
      nameEn: "Sunrise Riverside",
      district: "第7区/芽𡶀",
      districtEn: "D7/Nha Be",
      segment: "中端",
      segmentEn: "Mid",
      year: 2021,
      priceLow: 2200,
      priceHigh: 3200,
      unit: "USD/㎡",
      area: "50–150",
      foreignOk: true,
      rentYield: "5–6%",
      priceHistory: {
        "2021": 2400,
        "2022": 2600,
        "2023": 2800,
        "2024": 3000,
        "2025": 3200,
        "2026": 3350
      },
      mgmtFee: "约 9,000 盾/㎡·月",
      internet: "FPT/Viettel 18–28万盾/月",
      quota: {
        total: 1500,
        foreignSold: 300
      },
      down: "20–30%",
      payment: "分期",
      tags: {
        zh: [
          "生活"
        ],
        en: [
          "Lifestyle"
        ]
      },
      link: "https://namlonggroup.com",
      launch: "2021",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "Vinhomes Grand Park",
      nameEn: "Vinhomes Grand Park",
      district: "第9区",
      districtEn: "D9",
      segment: "中端",
      segmentEn: "Mid",
      year: 2023,
      priceLow: 1600,
      priceHigh: 2500,
      unit: "USD/㎡",
      area: "45–120",
      foreignOk: true,
      rentYield: "5–6%",
      priceHistory: {
        "2023": 1900,
        "2024": 2100,
        "2025": 2300,
        "2026": 2450
      },
      mgmtFee: "约 7,000–10,000 盾/㎡·月",
      internet: "FPT/Viettel/VNPT 18–28万盾/月",
      quota: {
        total: 8000,
        foreignSold: 820
      },
      down: "20–30%",
      payment: "30/30/30/10",
      tags: {
        zh: [
          "投资",
          "学区"
        ],
        en: [
          "Investment",
          "School"
        ]
      },
      link: "https://vinhomes.vn",
      launch: "2023",
      salesZh: "分期交付 · 在售",
      salesEn: "Phased handover · selling"
    },
    {
      name: "Masteri Centre Point",
      nameEn: "Masteri Centre Point",
      district: "第9区",
      districtEn: "D9",
      segment: "中高端",
      segmentEn: "Mid-high",
      year: 2022,
      priceLow: 2000,
      priceHigh: 3000,
      unit: "USD/㎡",
      area: "45–110",
      foreignOk: true,
      rentYield: "5–6%",
      priceHistory: {
        "2022": 2300,
        "2023": 2500,
        "2024": 2700,
        "2025": 2900,
        "2026": 3050
      },
      mgmtFee: "约 10,000 盾/㎡·月",
      internet: "FPT/Viettel 18–30万盾/月",
      quota: {
        total: 2500,
        foreignSold: 480
      },
      down: "20–30%",
      payment: "分期",
      tags: {
        zh: [
          "投资",
          "生活"
        ],
        en: [
          "Investment",
          "Lifestyle"
        ]
      },
      link: "https://masteri.com.vn",
      launch: "2022",
      salesZh: "已交付 · 二手为主",
      salesEn: "Delivered · resale-driven"
    },
    {
      name: "Eaton Park",
      nameEn: "Eaton Park (Gamuda Land)",
      district: "第2区",
      districtEn: "District 2",
      segment: "高端",
      segmentEn: "Luxury",
      year: 2024,
      priceLow: 4800,
      priceHigh: 5500,
      unit: "USD/㎡",
      area: "50–105",
      foreignOk: true,
      rentYield: "在建（待交付）",
      priceHistory: {
        "2024": 5000,
        "2026": 5120
      },
      mgmtFee: "参考同档约 22,000–30,000 盾/㎡·月",
      internet: "物业统一接入为主，约 40–60 万盾/月",
      quota: {
        total: 1968,
        foreignSold: 0
      },
      down: "5% 签约，交房前约 45%",
      payment: "交房后 50%，产权证 5%",
      tags: {
        zh: [
          "新盘在售",
          "地铁 1 号线"
        ],
        en: [
          "Selling",
          "Metro L1"
        ]
      },
      link: "https://saigonluxury.com.vn/eng/eaton-park-mai-chi-tho-gamuda-land",
      launch: "2024 Q3",
      salesZh: "在建 · 在售",
      salesEn: "Under construction · selling"
    },
    {
      name: "Vlasta Premier – Phú Thuận",
      nameEn: "Vlasta Premier Phu Thuan",
      district: "第7区",
      districtEn: "District 7",
      segment: "中高端",
      segmentEn: "Upper-mid",
      year: 2026,
      priceLow: 3050,
      priceHigh: 3550,
      unit: "USD/㎡",
      area: "50–101",
      foreignOk: true,
      rentYield: "首期在售（待交付）",
      priceHistory: {
        "2026": 3080
      },
      mgmtFee: "官方未公示（参考同区 15,000–22,000 盾/㎡·月）",
      internet: "约 30–50 万盾/月",
      quota: {
        total: 602,
        foreignSold: 0
      },
      down: "约 20% 可收房（代理口径）",
      payment: "按工程节点分期",
      tags: {
        zh: [
          "新盘首期",
          "河畔"
        ],
        en: [
          "Phase 1",
          "Riverside"
        ]
      },
      link: "https://apartment.vn/?p=4628",
      launch: "2026",
      salesZh: "首期在售",
      salesEn: "Phase 1 selling"
    },
    {
      name: "Triton Crown",
      nameEn: "Triton Crown (Phu My Hung)",
      district: "第7区/新月湾",
      districtEn: "Dist.7 / The Crescent",
      segment: "奢华",
      segmentEn: "Luxury",
      year: 2026,
      priceLow: null,
      priceHigh: null,
      unit: "USD/㎡",
      area: "60–180",
      foreignOk: true,
      rentYield: "租金挂牌 25–90 百万盾/月",
      priceHistory: {},
      mgmtFee: "官方未公示（参考富美兴同区 20,000–30,000 盾/㎡·月）",
      internet: "物业统一接入为主，约 40–60 万盾/月",
      quota: {
        total: 297,
        foreignSold: 0
      },
      down: "首期抽签选房（2026-10-18）",
      payment: "官方未公示",
      tags: {
        zh: [
          "新开盘",
          "新月湾核心"
        ],
        en: [
          "Just launched",
          "The Crescent"
        ]
      },
      link: "https://phumyhung.vn/en/phu-my-hung-to-launch-sales-of-triton-crown-apartments-near-crescent-lake",
      launch: "2026-10-18",
      salesZh: "新开盘 · 在售",
      salesEn: "Just launched · selling"
    }
  ],

  /* ---------- 租金行情（月租估算，VND 百万盾/月；币种可切换） ---------- */
  rents: {
    asOfZh: "2026-10 估算（含物业费口径因盘而异，签约以房东报价为准）",
    asOfEn: "Oct 2026 estimate (mgmt-fee basis varies; confirm with landlord)",
    yieldBasisZh: "口径：表中「毛租金回报」按【当前市价】计算（年租金 ÷ 当前二手价），非按开盘价。若你当年按较低开盘价买入并持有至今，你的「成本回报率（yield-on-cost）」会明显高于表列值（例如 Grand Marina 按 6,000 开盘价买入的成本回报 ≈ 表中回报 × 当前价/开盘价）。",
    yieldBasisEn: "Basis: gross yield uses the CURRENT market value (annual rent ÷ current resale price), not the launch price. If you bought at a lower launch price, your yield-on-cost is notably higher (e.g. Grand Marina bought at $6,000: yield-on-cost ≈ listed yield × current/launch price).",
    noteZh: "外籍常见非公渠道「房东直租」无 10% 租金税（开票才产生）；物业费/宽带另付。",
    noteEn: "Direct landlord leases (common for expats) carry no 10% rental tax (only invoiced channels); mgmt fee & internet extra.",
    items: [
      {
        nameZh: "Grand Marina Saigon",
        nameEn: "Grand Marina Saigon",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第1区",
        districtEn: "D1",
        yieldText: "3–4%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "51–58 ㎡",
            areaEn: "51–58 sqm",
            rentVnd: [30, 42]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "78–100 ㎡",
            areaEn: "78–100 sqm",
            rentVnd: [45, 75]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "106–143 ㎡",
            areaEn: "106–143 sqm",
            rentVnd: [70, 110]
          }
        ]
      },
      {
        nameZh: "Vinhomes Golden River",
        nameEn: "Vinhomes Golden River",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第1区",
        districtEn: "D1",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "50–60 ㎡",
            areaEn: "50–60 sqm",
            rentVnd: [24, 35]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "78–100 ㎡",
            areaEn: "78–100 sqm",
            rentVnd: [35, 50]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "120–160 ㎡",
            areaEn: "120–160 sqm",
            rentVnd: [45, 68]
          }
        ]
      },
      {
        nameZh: "The Metropole Thu Thiem",
        nameEn: "The Metropole Thu Thiem",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第2区",
        districtEn: "D2",
        yieldText: "3–4%",
        rows: [
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "90–120 ㎡",
            areaEn: "90–120 sqm",
            rentVnd: [40, 62]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "140–200 ㎡",
            areaEn: "140–200 sqm",
            rentVnd: [55, 88]
          }
        ]
      },
      {
        nameZh: "Empire City",
        nameEn: "Empire City",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第2区/守添",
        districtEn: "D2/Thu Thiem",
        yieldText: "3.5–5%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "60–75 ㎡",
            areaEn: "60–75 sqm",
            rentVnd: [22, 32]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "90–115 ㎡",
            areaEn: "90–115 sqm",
            rentVnd: [35, 55]
          }
        ]
      },
      {
        nameZh: "Lumiere Riverside",
        nameEn: "Lumiere Riverside",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第2区",
        districtEn: "D2",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "70–95 ㎡",
            areaEn: "70–95 sqm",
            rentVnd: [25, 38]
          }
        ]
      },
      {
        nameZh: "The Global City",
        nameEn: "The Global City",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第2区/守德",
        districtEn: "D2/Thu Duc",
        yieldText: "5–6%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "51–56 ㎡",
            areaEn: "51–56 sqm",
            rentVnd: [15, 20]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "76–81 ㎡",
            areaEn: "76–81 sqm",
            rentVnd: [21, 30]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "100–130 ㎡",
            areaEn: "100–130 sqm",
            rentVnd: [28, 42]
          }
        ]
      },
      {
        nameZh: "Midtown Phu My Hung",
        nameEn: "Midtown Phu My Hung",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第7区",
        districtEn: "D7",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "80–100 ㎡",
            areaEn: "80–100 sqm",
            rentVnd: [24, 33]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "120–160 ㎡",
            areaEn: "120–160 sqm",
            rentVnd: [32, 45]
          }
        ]
      },
      {
        nameZh: "Sunrise Riverside",
        nameEn: "Sunrise Riverside",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第7区/芽𡶀",
        districtEn: "D7/Nha Be",
        yieldText: "5–6%",
        rows: [
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "65–90 ㎡",
            areaEn: "65–90 sqm",
            rentVnd: [16, 22]
          }
        ]
      },
      {
        nameZh: "Vinhomes Grand Park",
        nameEn: "Vinhomes Grand Park",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第9区",
        districtEn: "D9",
        yieldText: "5–6%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "45–50 ㎡",
            areaEn: "45–50 sqm",
            rentVnd: [10, 13]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "60–75 ㎡",
            areaEn: "60–75 sqm",
            rentVnd: [13, 19]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "90–110 ㎡",
            areaEn: "90–110 sqm",
            rentVnd: [18, 26]
          }
        ]
      },
      {
        nameZh: "Masteri Centre Point",
        nameEn: "Masteri Centre Point",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第9区",
        districtEn: "D9",
        yieldText: "5–6%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "45–55 ㎡",
            areaEn: "45–55 sqm",
            rentVnd: [10, 14]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "65–85 ㎡",
            areaEn: "65–85 sqm",
            rentVnd: [14, 20]
          }
        ]
      },
      {
        nameZh: "Golden Westlake",
        nameEn: "Golden Westlake",
        cityZh: "河内",
        cityEn: "Hanoi",
        districtZh: "西湖",
        districtEn: "Tay Ho",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "90–120 ㎡",
            areaEn: "90–120 sqm",
            rentVnd: [30, 45]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "140–200 ㎡",
            areaEn: "140–200 sqm",
            rentVnd: [45, 70]
          }
        ]
      },
      {
        nameZh: "Vinhomes Metropolis",
        nameEn: "Vinhomes Metropolis",
        cityZh: "河内",
        cityEn: "Hanoi",
        districtZh: "巴亭/柳街",
        districtEn: "Ba Dinh",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "50–60 ㎡",
            areaEn: "50–60 sqm",
            rentVnd: [14, 19]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "75–95 ㎡",
            areaEn: "75–95 sqm",
            rentVnd: [20, 28]
          }
        ]
      },
      {
        nameZh: "Triton Crown",
        nameEn: "Triton Crown",
        cityZh: "胡志明",
        cityEn: "HCMC",
        districtZh: "第7区/新月湾",
        districtEn: "D7 / The Crescent",
        yieldText: "待核实（售价未公示）",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "≈60 ㎡",
            areaEn: "≈60 sqm",
            rentVnd: [25, 32]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "≈90 ㎡",
            areaEn: "≈90 sqm",
            rentVnd: [38, 48]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "≈120 ㎡",
            areaEn: "≈120 sqm",
            rentVnd: [52, 65]
          },
          {
            typeZh: "4 房",
            typeEn: "4BR",
            areaZh: "≈170 ㎡",
            areaEn: "≈170 sqm",
            rentVnd: [75, 90]
          }
        ]
      },
      {
        nameZh: "Masteri West Heights",
        nameEn: "Masteri West Heights",
        cityZh: "河内",
        cityEn: "Hanoi",
        districtZh: "南慈廉/Vinhomes Smart City",
        districtEn: "Nam Tu Liem",
        yieldText: "4–5%",
        rows: [
          {
            typeZh: "1 房",
            typeEn: "1BR",
            areaZh: "≈45 ㎡",
            areaEn: "≈45 sqm",
            rentVnd: [10, 14]
          },
          {
            typeZh: "2 房",
            typeEn: "2BR",
            areaZh: "≈64 ㎡",
            areaEn: "≈64 sqm",
            rentVnd: [16, 22]
          },
          {
            typeZh: "3 房",
            typeEn: "3BR",
            areaZh: "≈75 ㎡",
            areaEn: "≈75 sqm",
            rentVnd: [24, 32]
          }
        ]
      }
    ]
  },
  newLaunches: [
    {
      name: "Celesta Gold",
      nameEn: "Celesta Gold (Keppel)",
      city: "胡志明",
      cityEn: "HCMC",
      district: "芽郫/Nhà Bè · 阮友寿",
      districtEn: "Nha Be / Nguyen Huu Tho",
      launch: "2026 Q4 预计",
      price: 3850,
      unit: "USD/㎡",
      typeZh: "高端养生公寓",
      typeEn: "Wellness luxury",
      foreignOk: true,
      statusZh: "即将开盘",
      statusEn: "Upcoming",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Celesta+Gold+Nha+Be+Ho+Chi+Minh",
      saleUrl: "https://www.keppel.com",
      saleTimeZh: "2026 下半年推售（Keppel 口径：与 Gladia By The Waters、Estiva Charm 合计 979 套于 2026 下半年推向市场）；官方价目尚未公示，开盘日以开发商公告为准（2026-11-02 复核）",
      saleTimeEn: "Launching in H2 2026 (Keppel: 979 units across Celesta Gold, Gladia By The Waters and Estiva Charm); no official price list yet — confirm the launch date with the developer (re-checked Nov 2, 2026)",
      developer: "Keppel（新加坡）× Phu Long × 野村不动产越南",
      developerEn: "Keppel (Singapore) × Phu Long × Nomura Real Estate Vietnam",
      devType: "jv",
      quotaZh: "法定 30%/栋（具体楼栋配额待开盘公示，2026-11-02 待核实）",
      quotaEn: "Statutory 30%/building (per-tower quota pending launch disclosure; to verify as of Nov 2, 2026)",
      presaleZh: "2026-05-07 动工；2 栋 25 层、420 套公寓 + 12 套 officetel + 5 套商铺，占地 1.28 公顷、建筑密度约 35%，BCA Green Mark Gold 标准；预计 2027 Q4 迎首批住户（代理商口径 2027–2028，以合同为准）",
      presaleEn: "Groundbreaking 7 May 2026; two 25-storey towers with 420 apartments, 12 officetels and 5 shophouses on 1.28 ha at ~35% density, BCA Green Mark Gold; first residents expected Q4 2027 (agents cite 2027-2028 — follow the sale contract)",
      promoZh: "官方价目未公示；市场估算约 1 亿盾/㎡（≈$3,850），2 房约 70 ㎡ 折前约 70 亿盾，折扣与付款方案以开发商公告为准（待核实）",
      promoEn: "No official price list; market estimate ≈VND 100m/sqm (≈$3,850) with ~70 sqm two-bedrooms near VND 7bn before discounts — discounts and payment schedules await developer announcement (to verify)",
      unitsZh: "约 50 ㎡ 1 房 至 约 150 ㎡ 家庭户型；交付 2027 Q4",
      unitsEn: "From ~50 sqm 1BR to ~150 sqm family units; handover Q4 2027",
      unitsShortZh: "1 房约 50 ㎡ / 2 房约 70 ㎡ / 大户型至 150 ㎡",
      unitsShortEn: "1BR ~50 sqm / 2BR ~70 sqm / up to 150 sqm",
      priceNow: "≈1 亿盾/㎡（≈$3,850，市场估算、官方价目未公示；2026-11-02）"
    },
    {
      name: "The Global City",
      nameEn: "The Global City",
      city: "胡志明",
      cityEn: "HCMC",
      district: "第2区/守德",
      districtEn: "D2/Thu Duc",
      launch: "2025 Q3–在售",
      price: 4500,
      unit: "USD/㎡",
      typeZh: "综合社区",
      typeEn: "Township",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=The+Global+City+Thu+Duc+Ho+Chi+Minh",
      saleUrl: "https://theglobalcity.com.vn",
      priceNow: "≈4,500–5,500 USD/㎡（2026-10）",
      developer: "Masterise Homes",
      developerEn: "Masterise Homes",
      devType: "local",
      quotaZh: "法定 30%/栋；CT5 Masteri Park Place 外籍配额在售，热门楼栋临近满额",
      quotaEn: "Statutory 30%/building; CT5 Masteri Park Place quota on sale, hot towers near full",
      presaleZh: "SOHO 区已交付；公寓 2026 起分期交付，CT5 约 1,600 套分期推售中",
      presaleEn: "SOHO zone handed over; apartments deliver from 2026, CT5 ~1,600 units in phased release",
      promoZh: "早付最高 12% 折扣+额外 3%（合计至 15%）；每 6 个月付 10% 分期；0% 利率支持贷款（70% 贷款额，支持至 2028-10）；赠 24 个月管理费；老业主再减 2%",
      promoEn: "Up to 12% early-pay + extra 3% (total 15%); 10% every 6 months; 0% rate-support loan (70% LTV, to Oct 2028); 24-mo mgmt fee waived; 2% resident discount",
      unitsZh: "1房 51–56㎡ ≈ 65–88 亿盾（$24.7–33万）；2房 76–81㎡ ≈ 88–134 亿盾（$33–50万）；交房 2028 Q1",
      unitsEn: "1BR 51–56sqm ≈ VND 6.5–8.8bn ($247–330K); 2BR 76–81sqm ≈ VND 8.8–13.4bn ($330–505K); handover Q1 2028",
      unitsShortZh: "1房 51–56㎡ / 2房 76–81㎡",
      unitsShortEn: "1BR 51–56sqm / 2BR 76–81sqm"
    },
    {
      name: "The Privé",
      nameEn: "The Privé",
      city: "胡志明",
      cityEn: "HCMC",
      district: "守德",
      districtEn: "Thu Duc",
      launch: "2025 Q3",
      price: 5500,
      unit: "USD/㎡",
      typeZh: "奢华",
      typeEn: "Luxury",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=The+Prive+Thu+Duc+Ho+Chi+Minh",
      saleUrl: "https://www.google.com/search?q=The+Prive+Thu+Duc+official+sales",
      priceNow: "≈5,500–6,500 USD/㎡（2026-10）",
      developer: "Masterise Homes",
      developerEn: "Masterise Homes",
      devType: "local",
      quotaZh: "法定 30%/栋（待开发商书面确认余量）",
      quotaEn: "Statutory 30%/building (remaining quota per written developer confirmation)",
      presaleZh: "在售，分期推售",
      presaleEn: "On sale, phased release",
      promoZh: "以售楼处当期政策为准（早付折扣与分期方案常见 6.5%–12%）",
      promoEn: "Per current sales gallery policy (early-pay discounts & plans typically 6.5%–12%)",
      unitsZh: "1房 50–60㎡ / 2房 70–90㎡ / 3房 110–140㎡ / 4房 160㎡+，详情以售楼处户型册为准",
      unitsEn: "1BR 50–60 / 2BR 70–90 / 3BR 110–140 / 4BR 160+ sqm, see gallery floor plans",
      unitsShortZh: "1房50–60㎡ / 2房70–90㎡ / 3房110–140㎡ / 4房160㎡+",
      unitsShortEn: "1BR 50–60 / 2BR 70–90 / 3BR 110–140 / 4BR 160+ sqm"
    },
    {
      name: "Elysian",
      nameEn: "Elysian",
      city: "胡志明",
      cityEn: "HCMC",
      district: "守德",
      districtEn: "Thu Duc",
      launch: "2025 Q3",
      price: 3200,
      unit: "USD/㎡",
      typeZh: "中高端",
      typeEn: "Mid-high",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Elysian+Apartments+Thu+Duc+Ho+Chi+Minh",
      saleUrl: "https://www.google.com/search?q=Elysian+Thu+Duc+Gia+Dinh+official+sales",
      priceNow: "≈3,200–3,800 USD/㎡（2026-10）",
      developer: "Gamuda Land（马来西亚）",
      developerEn: "Gamuda Land (Malaysia)",
      devType: "foreign",
      quotaZh: "法定 30%/栋（外资开发商，外籍销售经验成熟）",
      quotaEn: "Statutory 30%/building (foreign developer, mature expat sales process)",
      presaleZh: "在售，预计 2027 交付",
      presaleEn: "On sale, handover expected 2027",
      promoZh: "分期付款常见 1–3 年期；早付折扣 5%–10%（以当期公示为准）",
      promoEn: "Installment plans typically 1–3 years; 5%–10% early-pay discount (per current announcement)",
      unitsZh: "1房 48–56㎡ / 2房 70–80㎡ / 3房 95–120㎡ / 复式 130㎡+，详情以售楼处为准",
      unitsEn: "1BR 48–56 / 2BR 70–80 / 3BR 95–120 / duplex 130+ sqm, see gallery",
      unitsShortZh: "1房48–56㎡ / 2房70–80㎡ / 3房95–120㎡ / 复式130㎡+",
      unitsShortEn: "1BR 48–56 / 2BR 70–80 / 3BR 95–120 / duplex 130+ sqm"
    },
    {
      name: "Khai Hoan Prime",
      nameEn: "Khai Hoan Prime",
      city: "胡志明",
      cityEn: "HCMC",
      district: "南部/芽𡶀",
      districtEn: "South/Nha Be",
      launch: "2025 Q3",
      price: 2800,
      unit: "USD/㎡",
      typeZh: "中端",
      typeEn: "Mid",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Khai+Hoan+Prime+Nha+Be+Ho+Chi+Minh",
      saleUrl: "https://www.google.com/search?q=Khai+Hoan+Prime+official+sales",
      priceNow: "≈2,800–3,300 USD/㎡（2026-10）",
      developer: "Keen Land",
      developerEn: "Keen Land",
      devType: "local",
      quotaZh: "法定 30%/栋（中端盘配额相对充裕）",
      quotaEn: "Statutory 30%/building (mid-range quota relatively ample)",
      presaleZh: "在售",
      presaleEn: "On sale",
      promoZh: "以售楼处当期政策为准",
      promoEn: "Per current sales gallery policy",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准",
      unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery",
      unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡",
      unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm"
    },
    {
      name: "Noble West Lake Ha Noi",
      nameEn: "Noble West Lake Ha Noi",
      city: "河内",
      cityEn: "Hanoi",
      district: "西湖/Ciputra",
      districtEn: "Tay Ho/Ciputra",
      launch: "2026 Q1 动工",
      price: 8200,
      unit: "USD/㎡",
      typeZh: "品牌豪宅",
      typeEn: "Branded luxury",
      foreignOk: true,
      statusZh: "即将开盘",
      statusEn: "Upcoming",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Noble+West+Lake+Ciputra+Hanoi",
      saleUrl: "https://www.google.com/search?q=Noble+West+Lake+Hanoi+official+sales",
      saleTimeZh: "待定（2026-11-11 复核仍无官方开售公示；10 月集团口径只披露施工与同系项目交付进度，预计 2026 Q4–2027 Q1 开盘，有公示后自动更新）",
      saleTimeEn: "TBD (no official launch announcement as of Nov 11, 2026; October group updates covered construction and sister-project handovers only; launch expected Q4 2026 – Q1 2027; auto-updated once announced)",
      developer: "Noble（越南本土）",
      developerEn: "Noble (Vietnam)",
      devType: "local",
      quotaZh: "法定 30%/栋（豪宅盘外籍配额紧张，建议开盘前登记）",
      quotaEn: "Statutory 30%/building (luxury quota tight — register before launch)",
      presaleZh: "2026 Q1 动工；开发商 10 月第三周通报：试桩、导墙与地连墙均已完成，CT5/CT6 两个标段主桩施工加速（10 月初口径为主桩约 80%、CT5 地连墙约 50%，以本次通报为准）；项目约 6 公顷、12 栋 40 层塔楼+3 层地下，邻武志功街、Lotte Mall 西湖对面，尚未开售",
      presaleEn: "Ground broken Q1 2026; per the developer's third-week-of-October update, test piles, guide walls and diaphragm walls are complete with main piling accelerating at both CT5 and CT6 (early October had main piles about 80% and CT5 walls about 50%; this update supersedes); ~6ha, 12 towers of 40 floors plus 3 basements, on Vo Chi Cong street opposite Lotte Mall West Lake - not yet on sale",
      promoZh: "预售期政策未公布",
      promoEn: "Pre-launch policy not yet published",
      unitsZh: "品牌豪宅户型待公布",
      unitsEn: "Branded-luxury floor plans TBA",
      unitsShortZh: "待公布",
      unitsShortEn: "TBA"
    },
    {
      name: "Parc Régent (ParkCity)",
      nameEn: "Parc Régent (ParkCity)",
      city: "河内",
      cityEn: "Hanoi",
      district: "西湖",
      districtEn: "Tay Ho",
      launch: "2026 Q1 动工",
      price: 4700,
      unit: "USD/㎡",
      typeZh: "高端",
      typeEn: "High-end",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Parc+Regent+ParkCity+Tay+Ho+Hanoi",
      saleUrl: "https://www.parkcity.com.my",
      priceNow: "≈4,700–5,300 USD/㎡（2026-10）",
      developer: "ParkCity Group（马来西亚）",
      developerEn: "ParkCity Group (Malaysia)",
      devType: "foreign",
      quotaZh: "法定 30%/栋",
      quotaEn: "Statutory 30%/building",
      presaleZh: "在售（首期推售中）",
      presaleEn: "On sale (first phase releasing)",
      promoZh: "外资开发商常见分期+早付折扣，以当期公示为准",
      promoEn: "Foreign developers typically offer installments + early-pay discounts; per current announcement",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准",
      unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery",
      unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡",
      unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm"
    },
    {
      name: "Maison Privée",
      nameEn: "Maison Privée (CapitaLand)",
      city: "河内",
      cityEn: "Hanoi",
      district: "Ciputra",
      districtEn: "Ciputra",
      launch: "2026 Q2 发布",
      price: 7460,
      unit: "USD/㎡",
      typeZh: "高端合资",
      typeEn: "High-end JV",
      foreignOk: true,
      statusZh: "即将开盘",
      statusEn: "Upcoming",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Ciputra+Hanoi",
      saleUrl: "https://www.capitaland.com",
      saleTimeZh: "待定（2026-11-11 复核仍无官方开售公示；2026-10-16 获 PropertyGuru 越南房产奖三项——河内优秀高端公寓、优秀公寓设计、AEG 高端生活空间，项目 490 套、总投资约 11.7 万亿盾、预计 2029 Q1 交付，目标越南首个 WELL 住宅预认证；10 月 Batdongsan 挂牌参考要价 1.94–2.25 亿盾/㎡，非开发商价目，有公示后自动更新）",
      saleTimeEn: "TBD (no official launch announcement as of Nov 11, 2026; won three PropertyGuru Vietnam Property Awards 2026 titles on Oct 16 — Best Luxury Condo Hanoi, Best Condo Design, AEG luxury living — 490 units, about VND 11.7tn of investment, handover expected Q1 2029, targeting Vietnam's first WELL residential pre-certification; October Batdongsan listings showed reference asks of VND 194-225m/sqm, not a developer price list; auto-updated once announced)",
      developer: "CapitaLand（新加坡）× 三菱地所 × 野村不动产",
      developerEn: "CapitaLand (Singapore) × Mitsubishi Estate × Nomura Real Estate",
      devType: "jv",
      quotaZh: "法定 30%/栋（新加坡开发商，外籍销售流程规范）",
      quotaEn: "Statutory 30%/building (Singapore developer, disciplined foreign sales process)",
      presaleZh: "已发布，分批开售；位于 Ciputra 城区中心（建筑密度约 14%），配 68 项设施、拟申请 WELL 住宅认证",
      presaleEn: "Launched, selling in batches; in the heart of Ciputra (construction density ~14%) with 68 amenities and aiming for WELL residential certification",
      promoZh: "预售期政策未公布",
      promoEn: "Pre-launch policy not yet published",
      unitsZh: "高端户型待分批公布",
      unitsEn: "High-end plans to be released in batches",
      unitsShortZh: "待分批公布",
      unitsShortEn: "TBA by batch",
      priceNow: "≈7,460–8,660 美元/㎡（按 2026-10 Batdongsan 挂牌参考 1.94–2.25 亿盾/㎡、以 25,990 折算；开发商价目未公示）"
    },
    {
      name: "Mandarin Garden 3",
      nameEn: "Mandarin Garden 3 (Hoa Phat)",
      city: "河内",
      cityEn: "Hanoi",
      district: "炎坊/Yen So",
      districtEn: "Yen So",
      launch: "2026 Q4 预计",
      price: 2800,
      unit: "USD/㎡",
      typeZh: "中高端",
      typeEn: "Mid-high",
      foreignOk: true,
      statusZh: "即将开盘",
      statusEn: "Upcoming",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Mandarin+Garden+Yen+So+Hanoi",
      saleUrl: "https://hoaphat.com.vn",
      saleTimeZh: "待定（预计 2026 Q4；2026-11-11 复核仍无官方开售公示，有公示后自动更新）",
      saleTimeEn: "TBD (expected Q4 2026; no official announcement as of Nov 11, 2026; auto-updated once announced)",
      developer: "Hoa Phat（越南本土钢铁巨头）",
      developerEn: "Hoa Phat (Vietnam steel group)",
      devType: "local",
      quotaZh: "法定 30%/栋（中端盘配额相对充裕）",
      quotaEn: "Statutory 30%/building (mid-range quota relatively ample)",
      presaleZh: "预计 2026 Q4 开售",
      presaleEn: "Sales expected Q4 2026",
      promoZh: "预售期政策未公布",
      promoEn: "Pre-launch policy not yet published",
      unitsZh: "中高端户型待公布",
      unitsEn: "Mid-high-end floor plans TBA",
      unitsShortZh: "待公布",
      unitsShortEn: "TBA"
    },
    {
      name: "Sunshine Continental",
      nameEn: "Sunshine Continental",
      city: "河内",
      cityEn: "Hanoi",
      district: "慈廉",
      districtEn: "Tu Liem",
      launch: "2026 Q1 动工",
      price: 6000,
      unit: "USD/㎡",
      typeZh: "高端",
      typeEn: "High-end",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=Sunshine+Continental+Tu+Liem+Hanoi",
      saleUrl: "https://sunshinegroup.vn",
      priceNow: "≈6,000–6,800 USD/㎡（2026-10）",
      developer: "Sunshine Group",
      developerEn: "Sunshine Group",
      devType: "local",
      quotaZh: "法定 30%/栋",
      quotaEn: "Statutory 30%/building",
      presaleZh: "在售",
      presaleEn: "On sale",
      promoZh: "Sunshine 系常见分期 2–3 年+早付折扣，以当期公示为准",
      promoEn: "Sunshine typically offers 2–3yr installments + early-pay discounts; per current announcement",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准",
      unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery",
      unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡",
      unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm"
    },
    {
      name: "The Reflection West Lake",
      nameEn: "The Reflection West Lake",
      city: "河内",
      cityEn: "Hanoi",
      district: "西湖",
      districtEn: "Tay Ho",
      launch: "2026",
      price: 5800,
      unit: "USD/㎡",
      typeZh: "高端",
      typeEn: "High-end",
      foreignOk: true,
      statusZh: "在售",
      statusEn: "On sale",
      gmaps: "https://www.google.com/maps/search/?api=1&query=The+Reflection+West+Lake+Tay+Ho+Hanoi",
      saleUrl: "https://www.google.com/search?q=The+Reflection+West+Lake+Hanoi+official+sales",
      priceNow: "≈5,800–6,500 USD/㎡（2026-10）",
      developer: "待核实",
      developerEn: "TBC",
      devType: "tbc",
      quotaZh: "法定 30%/栋",
      quotaEn: "Statutory 30%/building",
      presaleZh: "在售",
      presaleEn: "On sale",
      promoZh: "以售楼处当期政策为准",
      promoEn: "Per current sales gallery policy",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准",
      unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery",
      unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡",
      unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm"
    }
  ],
  launchesNoteZh: "「当前价格区间」为开盘超 6 个月在售盘的二手/尾盘估算（2026-10 口径，2026-11-02 复核未变）；2026 Q4 供应窗口：河内 Savills 预计 11 个新项目约 7,000 套、胡志明 Avison Young 预计约 8 个项目约 10,000 套准备入市；外籍配额均为《住房法 2023》法定 30%/栋口径，实际余量以开发商盖章确认函为准；户型价格为含 VAT 的参考区间（Masteri Park Place 为公开价目口径）。「待定」= 官方暂未公示，自动化有数据后自动填写。",
  launchesNoteEn: "Current ranges are resale/inventory estimates (Oct 2026 basis, re-checked Nov 2 unchanged); Q4 2026 pipeline: Savills expects 11 projects / ~7,000 units in Hanoi, Avison Young about 8 projects / ~10,000 units in HCMC; foreign quota follows the statutory 30%/building cap (Housing Law 2023) — remaining quota per written developer confirmation; unit prices are VAT-inclusive reference ranges (Masteri Park Place per public price list). 「TBD」= awaiting official announcement; auto-filled once data is available.",

  /* ---------- 河内 vs 胡志明大涨归因（VARS IRE / Batdongsan / 汇总） ---------- */
  hanoiAnalysis: {
    titleZh: "为什么河内涨得比胡志明猛？",
    titleEn: "Why has Hanoi outpaced HCMC?",
    summaryZh: "2023 年初河内均价还比胡志明低 23%（3,800 万 vs 4,700 万盾/㎡）；到 2025 年中反超 11%，2026 Q2 一手均价 $4,356 vs $4,088 首次全面反超。核心是「供给收缩 + 成本推升 + 基建兑现」三力叠加，胡志明则因供应恢复与盘子大而涨幅温和。",
    summaryEn: "In early 2023 Hanoi was 23% cheaper than HCMC (VND 38M vs 47M/sqm); by mid-2025 it was 11% dearer and in 2026 Q2 the primary average ($4,356 vs $4,088) overtook HCMC for the first time. Supply contraction + cost-push + infrastructure delivery compounded; HCMC stayed mild on larger supply.",
    caveatZh: "⚠️ 口径纠偏（重要）：「河内均价反超胡志明」是【市场均价】口径，主要由供给结构导致——河内 2026 新推盘几乎全是高端/豪宅（无 C 级、6,000 万盾/㎡ 以下项目绝迹），拉高了均价；而胡志明仍有中端与郊区盘摊薄。CBRE 明确：按【同档次】对比，河内价格实际仍【低于】胡志明。也就是说，不是「同样的房子河内更贵」，而是「河内市场上只剩贵房子」。判断两地真实贵贱，务必看同档次单价，而非均价。",
    caveatEn: "⚠️ Important caveat: 「Hanoi overtook HCMC」 is an AVERAGE-price claim driven by supply mix — in 2026 nearly all of Hanoi's new supply is high-end/luxury (zero Grade-C; nothing below VND 60M/sqm), pulling the average up, while HCMC retains mid-range and suburban stock. CBRE is explicit: on a LIKE-FOR-LIKE (same segment) basis, Hanoi is still CHEAPER than HCMC. So it is not 'the same home is dearer in Hanoi' but 'Hanoi's market now only sells expensive homes'. Judge true affordability by same-segment unit price, not the average.",
    factors: [
      {
        iconZh: "📜",
        tZh: "2024《土地法》成本冲击",
        tEn: "2024 Land Law cost shock",
        dZh: "2024-08 与 103/2024 号法令实施后，项目地价与土地使用费按市场价重估，土地成本占开发成本比例跳升，开发商被迫抬价——VARS IRE 认定这是首要推手；重启的旧项目还叠加历史财务成本。",
        dEn: "From Aug 2024 (Decree 103/2024) project land prices were re-valued at market rates; land cost now dominates the cost stack, forcing developers to raise prices (VARS IRE cites this as the top driver); restarted projects add legacy financial costs."
      },
      {
        iconZh: "📉",
        tZh: "供给极度短缺",
        tEn: "Severe supply shortage",
        dZh: "河内新供应 2023–2025 连续处于历史低位：2025 全年仅约 2.45 万套新增，且 40%+ 集中在 1.2 亿盾/㎡ 以上高端段，中低端几乎断供；胡志明靠合并平阳后郊区盘补量（合并后均价 5,700 万盾/㎡，比河内低 25%）。",
        dEn: "Hanoi added only ~24,500 units in 2025 with 40%+ priced above VND 120M/sqm — the affordable segment nearly vanished; HCMC's post-merger suburbs keep adding volume (post-merger avg VND 57M/sqm, 25% below Hanoi)."
      },
      {
        iconZh: "🚇",
        tZh: "基建集中兑现",
        tEn: "Infrastructure delivery",
        dZh: "河内四环、Trần Hưng Đạo 大桥、Tứ Liên 大桥、地铁 2A/3 号线与内排机场 T3 在 2024–2028 密集落地，近郊（嘉林、怀德、纸桥-南慈廉）通勤时间骤减，地价与房价沿走廊重估；胡志明地铁红利（1号线）已提前计入价格。",
        dEn: "Hanoi's Ring Road 4, Tran Hung Dao & Tu Lien bridges, metro lines 2A/3 and Noi Bai T3 land 2024–2028, re-rating near-central districts (Gia Lam, Hoai Duc, Cau Giay); HCMC's metro-line-1 premium was largely priced in beforehand."
      },
      {
        iconZh: "🏭",
        tZh: "外资 FDI 与产业人口",
        tEn: "FDI & industrial jobs",
        dZh: "三星、富士康、LG 与电子业集群持续向河内-北宁-兴安走廊加码，高薪工程师涌入「西湖-南慈廉-嘉林」租房购房；叠加 2024–2025 越南整体 FDI 创新高，首都圈承接最集中。",
        dEn: "Samsung, Foxconn, LG and electronics clusters keep expanding along the Hanoi–Bac Ninh–Hung Yen corridor; well-paid engineers fuel rental and purchase demand in Tay Ho–Nam Tu Liem–Gia Lam, atop record national FDI in 2024–25."
      },
      {
        iconZh: "💰",
        tZh: "资金面：避险资金涌入",
        tEn: "Capital flows into bricks",
        dZh: "金市/股市波动后资金寻找避险资产，信贷宽松期低成本资金流入地产；北部资金同时南下买胡志明（Q2 2025 占胡志明公寓搜索 61%，同比+17pp），进一步证明河内已贵到外溢。",
        dEn: "Money rotated from gold/stocks into property during easy credit; northern capital also flowed south (61% of HCMC apartment searches in Q2 2025, +17pp YoY) — evidence Hanoi had already become expensive enough to spill over."
      },
      {
        iconZh: "🏙️",
        tZh: "结构性起点差异",
        tEn: "The starting-point gap",
        dZh: "2023 年初河内深跌后基数低（38M 盾/㎡ vs 胡志明 47M），叠加首都「迁府」预期与行政区划改革，补涨弹性天然更大——涨幅差里有一半是低基数修复，而非胡志明基本面变差。",
        dEn: "Hanoi started 2023 from a deeper trough (VND 38M vs 47M/sqm); with capital-relocation expectations and admin reform, mean-reversion did half the work — the growth gap is partly low-base catch-up, not HCMC deterioration."
      }
    ],
    sourceLinks: [
      {
        t: "VARS IRE（劳动报）",
        url: "https://news.laodong.vn/bat-dong-san/loat-nguyen-nhan-kien-gia-chung-cu-tang-manh-1597281.ldo"
      },
      {
        t: "Batdongsan H1 2025 市场报告",
        url: "https://metrohousevietnam.com?p=1543/"
      },
      {
        t: "Bamboo Routes 价格全景",
        url: "https://bambooroutes.com/blogs/news/vietnam-price-forecasts"
      }
    ]
  },

  /* ---------- 投资选项（面向外籍买家，2026-10 口径） ---------- */
  investOptions: {
    titleZh: "若现在要投资越南房产：四个方向",
    titleEn: "If investing now: four options",
    noteZh: "以下为基于公开数据的策略方向（非投资建议）。外籍限制：只能买商业住宅公寓（30%/栋配额、50 年产权），不可买土地/独栋别墅。gross yield 为毛回报，未扣管理费/税/空置。",
    noteEn: "Strategy directions from public data (not investment advice). Foreigner limits: condos in licensed projects only (30%/building quota, 50-year leasehold) — no land or landed villas. Gross yields, before fees/tax/vacancy.",
    options: [
      {
        nameZh: "守德东走廊（胡志明）",
        nameEn: "Thu Duc East corridor (HCMC)",
        iconZh: "🏗️",
        yieldText: "毛租金 6–8%",
        entryZh: "入场 ≈ $2,800–5,500/㎡",
        dZh: "地铁 2 号线（2030）+ 隆城机场（2030）双利好，Thu Thiem 金融中心租赁外溢；期房分期（每 6 个月 10%）+ 早付折扣最高 15%，杠杆友好。适合：中长期持有、吃基建兑现。代表盘：The Global City / Masteri Park Place / Elysian。",
        dEn: "Metro L2 (2030) + Long Thanh airport (2030), Thu Thiem rental spillover; staged payments (10%/6mo) + up-to-15% early-pay discounts make leverage friendly. Suits: medium-term holds riding infrastructure. E.g. The Global City / Masteri Park Place / Elysian.",
        riskZh: "风险：2028 才交房，地铁/机场时间表可能延后",
        riskEn: "Risk: handover 2028; metro/airport dates can slip"
      },
      {
        nameZh: "西湖 + 嘉林（河内）",
        nameEn: "Tay Ho + Gia Lam (Hanoi)",
        iconZh: "🏙️",
        yieldText: "毛租金 5–8%",
        entryZh: "入场 ≈ $2,600–5,500/㎡",
        dZh: "西湖服务式公寓外派需求刚性（使领馆/外企高管），租金回报 6–8%；嘉林（Vinhomes Ocean Park 一带）单价低、靠地铁规划补涨，是河内成交量主力。适合：现金流优先、想要已建成资产。",
        dEn: "Tay Ho serviced apartments enjoy sticky expat demand (embassies/MNCs) at 6–8% yields; Gia Lam (Vinhomes Ocean Park area) offers low entry prices with metro-driven upside. Suits: cash-flow-first buyers wanting completed assets.",
        riskZh: "风险：河内涨幅已兑现较多，追高风险大于胡志明",
        riskEn: "Risk: much of the rerating has happened; chasing risk is higher"
      },
      {
        nameZh: "岘港（度假+数字游民）",
        nameEn: "Da Nang (resort & nomads)",
        iconZh: "🏖️",
        yieldText: "毛租金 4.5–9%",
        entryZh: "入场 ≈ $1,357–3,800/㎡",
        dZh: "房价约为胡志明一半，自由贸易区+莲沼港扩建将城市从旅游转型为全年商业枢纽；短租民宿旺季年化可达 6–9%，欧美韩数字游民需求增长。适合：小额入场+能接受季节性空置。",
        dEn: "Prices are roughly half of HCMC; the Free Trade Zone and Lien Chieu port turn the city into a year-round hub; short-term rental annualized 6–9% in season with growing Western/Korean nomad demand. Suits: small tickets + tolerance for seasonal vacancy.",
        riskZh: "风险：旅游淡旺季空置率高，二手流动性弱于两大城市",
        riskEn: "Risk: seasonal vacancy; weaker resale liquidity"
      },
      {
        nameZh: "平阳/工业走廊（纯收租）",
        nameEn: "Binh Duong / industrial belt",
        iconZh: "🏭",
        yieldText: "毛租金 5–10%",
        entryZh: "入场 ≈ $1,100–1,700/㎡（住宅）；仓储物流另计",
        dZh: "制造业+电商枢纽，工人/工程师租住需求刚性，公寓 5–7%、仓储物流 8–10% 为越南最高梯队；但增值慢于主城、二手市场薄。适合：高现金流、低单价、不指望暴击。",
        dEn: "Manufacturing + e-commerce hub with sticky worker/engineer rental demand: condos 5–7%, logistics/warehousing 8–10% — Vietnam's top yield tier; but slower appreciation and thin resale. Suits: yield-first, low-ticket, no moonshot expectations.",
        riskZh: "风险：产业外迁/关税冲击敏感，退出渠道有限",
        riskEn: "Risk: sensitive to re-shoring/tariff shocks; limited exit channels"
      }
    ],
    sourceLinks: [
      {
        t: "Invest Vietnam 市场展望",
        url: "https://blog.investvietnam.co/vietnam-real-estate-market-forecast-2025-2026-what-investors-need-to-know/"
      },
      {
        t: "Own Property Abroad 价格数据",
        url: "https://ownpropertyabroad.com/vietnam/vietnam-house-prices-trends/"
      },
      {
        t: "Realting 外籍购房指南",
        url: "https://realting.com/news/how-to-buy-a-house-in-vietnam"
      }
    ]
  },
  housingMeta: {
    noteZh: "外籍只能购买「商业住宅项目」（Housing Law 2023）；普通住宅/社会住房不可售外籍。越南城市无市政天然气管道入户，普遍为「中央气瓶房+管道入户」（新中高端盘，配泄漏报警与集中计量）或「户内罐装煤气」（旧盘/中低端）。以下为代表性核实，签约前请物业书面确认。",
    noteEn: "Foreigners may only buy in commercial housing projects (Housing Law 2023); social/ordinary housing is off-limits. Vietnam cities have no piped city-gas network — apartments use a central LPG room with in-unit piping (new mid/high-end, leak alarms) or in-unit cylinders (older/lower-end). Verify with property mgmt in writing before signing.",
    byProject: {
      "Grand Marina Saigon": {
        gasZh: "中央燃气系统+管道入户（户内计量）",
        gasEn: "Central LPG system, piped in-unit"
      },
      "Vinhomes Golden River": {
        gasZh: "中央燃气系统（含泄漏报警）",
        gasEn: "Central LPG system (leak alarms)"
      },
      "Empire City": {
        gasZh: "中央燃气系统",
        gasEn: "Central LPG system"
      },
      "The Global City": {
        gasZh: "中央燃气系统（分期接入）",
        gasEn: "Central LPG (per phase)"
      },
      "The Horizon / Midtown": {
        gasZh: "中央瓶组站+管道入户",
        gasEn: "Central cylinder bank, piped"
      },
      "Vinhomes Grand Park": {
        gasZh: "中央燃气系统",
        gasEn: "Central LPG system"
      },
      "Masteri Centre Point": {
        gasZh: "中央燃气系统",
        gasEn: "Central LPG system"
      },
      "Lumiere Riverside": {
        gasZh: "中央燃气系统",
        gasEn: "Central LPG system"
      },
      "Sunrise Riverside": {
        gasZh: "户内罐装为主（部分楼栋中央瓶组）",
        gasEn: "Mostly in-unit cylinders"
      }
    },
    defaultGasZh: "以物业确认为准（新盘多为中央瓶组+管道入户）",
    defaultGasEn: "Verify with mgmt (new builds: central L bank + piping)"
  },

  /* ---------- 外籍配额查询（估算，需向建设厅核实） ---------- */
  quotaDisclaimerZh: "以下为公开销售信息与市场估算（示意），实际剩余配额请以开发商书面确认或建设厅公示为准——签约前务必索取盖章的配额确认函。",
  quotaDisclaimerEn: "Estimates from public sales info (illustrative). Verify remaining quota with written developer confirmation / Dept of Construction before signing.",

  /* ---------- 烂尾/争议案例库 ---------- */
  failedCases: [
    {
      name: "The Hallmark（守添）",
      nameEn: "The Hallmark (Thu Thiem)",
      developerZh: "万盛发集团（Vạn Thịnh Phát）",
      developerEn: "Van Thinh Phat Group",
      year: "2022–2024",
      eventZh: "开发商万盛发系资金链断裂（SCB 案），2022 年停工，业主集体维权，后由新投资方接手复工。",
      eventEn: "Van Thinh Phat-linked SCB case froze the project in 2022; owners protested; later revived by new investors.",
      statusZh: "已复工",
      statusEn: "Revived",
      link: "https://vnexpress.net",
      latestZh: "2026-11 复核：公开渠道未见新的官方进展披露，维持「已复工」判断；该项目属万盛发/SCB 案关联资产处置序列。",
      latestEn: "Nov 2026 recheck: no new official disclosure found; status unchanged as \"revived\". Part of the Van Thinh Phat / SCB asset-resolution sequence."
    },
    {
      name: "Khải Hoàn–Minh Châu II（平政）",
      nameEn: "Khai Hoan-Minh Chau II (Binh Chanh)",
      developerZh: "Khải Hoàn Land（凯还地产）",
      developerEn: "Khai Hoan Land",
      year: "2008–2017",
      eventZh: "2008 年金融危机后长期停工近十年，购房者苦等多年维权，最终分期解决，成为本地「烂尾」教科书案例。",
      eventEn: "Stalled nearly a decade after the 2008 crisis; buyers waited years before a phased settlement — a textbook stall case.",
      statusZh: "已解决",
      statusEn: "Resolved",
      link: "https://vnexpress.net",
      latestZh: "2026-11 复核：案件已分期解决完毕，作为本地「烂尾」教科书案例保留；无新增争议。",
      latestEn: "Nov 2026 recheck: settled in phases and closed; kept as a textbook local stall case, no new disputes."
    },
    {
      name: "Golden An Phú（第2郡）",
      nameEn: "Golden An Phu (D2)",
      developerZh: "Golden Land（待核实）",
      developerEn: "Golden Land (TBC)",
      year: "2010–2020s",
      eventZh: "延期交付超过十年，法律纠纷复杂，多次调解未果，是「老烂尾」代表。",
      eventEn: "Handover delayed over a decade with tangled legal disputes — a representative long-stalled project.",
      statusZh: "悬而未决",
      statusEn: "Unresolved",
      link: "https://tuoitre.vn",
      latestZh: "2026-11 复核：仍未见权威渠道披露最终处置结论，维持「悬而未决」。胡志明市本轮停滞项目清理中 838 个项目仅剩 28 个因跨法域问题仍在审查，本项目是否列入尚待核实。",
      latestEn: "Nov 2026 recheck: no authoritative final resolution disclosed; still \"unresolved\". Of HCMC's 838 stalled projects only 28 remain under review for cross-legal-regime issues — whether this project is among them is unconfirmed."
    },
    {
      name: "Hưng Thịnh 系部分项目（2023 风波）",
      nameEn: "Hung Thinh projects (2023 turbulence)",
      developerZh: "兴盛集团（Hưng Thịnh）",
      developerEn: "Hung Thinh Corporation",
      year: "2023",
      eventZh: "房地产债券收紧期，部分项目停工延期，公司通过债务重组+政府协调逐步恢复。",
      eventEn: "Bond-credit squeeze stalled several projects; revived via restructuring + government coordination.",
      statusZh: "逐步复工",
      statusEn: "Gradually resumed",
      link: "https://tuoitre.vn",
      latestZh: "2026-11 复核：公司已完成债务重组，多数项目恢复施工；2026 年胡志明市公布 37 个符合未来销售条件的楼盘（21,165 套），较 2025 年全年增长 133%，显示解困产能正在释放。",
      latestEn: "Nov 2026 recheck: restructuring completed and most projects resumed. In 2026 HCMC cleared 37 projects (21,165 units) as eligible for future sale, up 133% vs full-year 2025 — unblocked supply is coming to market."
    },
    {
      name: "Saigon LightHouse（阮必成街 448 号）",
      nameEn: "Saigon LightHouse (448 Nguyen Tat Thanh)",
      developerZh: "BT 合同项目（2016 年签约）",
      developerEn: "Build-transfer project (contract signed 2016)",
      year: "2016–2026",
      eventZh: "源自 2016 年 BT（建设-移交）合同，2018 年初基建完工移交，但因土地使用费计算时点争议，土地支付被搁置多年，项目停滞近十年。列入胡志明市重点解困清单后走完全部法律程序。",
      eventEn: "Originating from a 2016 build-transfer contract; infrastructure was completed and handed over in early 2018, but land payment was frozen for years over the land-fee calculation date, stalling the project for nearly a decade. All legal procedures were completed after it was placed on the city priority unblocking list.",
      statusZh: "已复工（2026-07 动工）",
      statusEn: "Restarted (groundbreaking Jul 2026)",
      latestZh: "2026-07 初正式动工，是胡志明市解困清单的标志性案例之一；官方称共耗时 10 年解决法律问题。",
      latestEn: "Broke ground in early July 2026 — a flagship case on HCMC's unblocking list; officials say resolving the legal issues took 10 years.",
      link: "https://en.nhandan.vn/reviving-stalled-projects-to-create-new-growth-momentum-for-ho-chi-minh-city-post164913.html"
    },
    {
      name: "The Grand Manhattan（第一郡）",
      nameEn: "The Grand Manhattan (District 1)",
      developerZh: "Novaland（诺瓦集团）",
      developerEn: "Novaland",
      year: "2022–2026",
      eventZh: "位于郭婆街与郭江街临街地块、占地约 1.4 万㎡，含 3 栋 38 层塔楼、逾 1,000 套公寓。因集团债务重组与法务问题停工逾三年。",
      eventEn: "A ~14,000 sqm site fronting Co Giang and Co Bac streets with three 38-storey towers and over 1,000 apartments. Idle for more than three years amid the group's debt restructuring and legal issues.",
      statusZh: "已复工 · 2026 Q3 起交房",
      statusEn: "Restarted · handover from Q3 2026",
      latestZh: "2026 年进入冲刺施工阶段，自三季度起向客户交房，参考售价约 3.5 亿盾/㎡。集团称政府与胡志明市领导推动解困是关键。",
      latestEn: "Entered the final construction push in 2026 with handovers from Q3; reference price around VND 350 million/sqm. The group credits government and city leaders for clearing the legal path.",
      link: "https://en.nhandan.vn/reviving-stalled-projects-to-create-new-growth-momentum-for-ho-chi-minh-city-post164913.html"
    },
    {
      name: "Noble Rivera（原 Noble Palace Riverside，河内福寿）",
      nameEn: "Noble Rivera (ex-Noble Palace Riverside, Phuc Tho, Hanoi)",
      developerZh: "原 Vimedimex 系（待核实）",
      developerEn: "Vimedimex-linked (TBC)",
      year: "2006–2026",
      eventZh: "占地约 400 公顷、总投资约 20 亿美元的大型项目，停工近 20 年后重启，是河内「老烂尾」中体量最大的一批。",
      eventEn: "A ~400 hectare, ~USD 2 billion master-planned project restarted after nearly 20 years idle — among the largest of Hanoi's long-stalled projects.",
      statusZh: "已复工（2026）",
      statusEn: "Restarted (2026)",
      latestZh: "2026 年复工。全国口径约 4,500 个项目积压、涉及资金逾 300 万亿盾，已化解 1,000 余个、释放约 80 万亿盾。",
      latestEn: "Restarted in 2026. Nationwide roughly 4,500 projects remain stuck with over VND 3,000 trillion tied up; more than 1,000 have been unblocked, releasing ~VND 800 trillion.",
      link: "https://aveluro.com/news/NVL/sector-sentiment-2026-08-05-du-an-bat-dong-san-dong-loat-hoi-sinh-sau-go-phap-ly"
    },
    {
      name: "NO-11 公寓（河内 Dịch Vọng）",
      nameEn: "NO-11 apartments (Dich Vong, Hanoi)",
      developerZh: "待核实",
      developerEn: "TBC",
      year: "2010s–2026",
      eventZh: "长期停滞的公寓项目，2025 年底取得施工许可，2026 年恢复推进，属本轮「解困潮」中获证复工的一类。",
      eventEn: "A long-stalled apartment project that received its building permit in late 2025 and resumed in 2026 — one of the projects restarted in the current unblocking wave.",
      statusZh: "已获施工许可 · 复工推进中",
      statusEn: "Permit granted · works resuming",
      latestZh: "2025 年底获施工许可，2026 年推进；具体交付节点待核实。",
      latestEn: "Permit granted in late 2025, progressing through 2026; delivery milestones still to be verified.",
      link: "https://aveluro.com/news/NVL/sector-sentiment-2026-08-05-du-an-bat-dong-san-dong-loat-hoi-sinh-sau-go-phap-ly"
    }
  ],
  failedCasesNoteZh: "规避要点：查开发商交付记录→查项目法律文件（投资许可/施工许可/消防验收）→分期付款交房前≤70%→保留尾款5%至粉皮书→优先头部开发商。",
  failedCasesNoteEn: "Mitigation: check developer track record → verify legal dossier (investment/construction permits, fire approval) → ≤70% pre-handover → withhold 5% until Pink Book → prefer tier-1 developers.",

  /* ---------- 地铁 / Metro（from/to 用于图例始发终到） ---------- */
  metro: [
    {
      line: "1号线",
      lineEn: "Line 1",
      from: "滨城",
      fromEn: "Ben Thanh",
      to: "仙泉",
      toEn: "Suoi Tien",
      name: "滨城–仙泉",
      nameEn: "Ben Thanh–Suoi Tien",
      status: "operating",
      statusZh: "已通车",
      statusEn: "Operating",
      since: "2024-12-22",
      expect: "—",
      length: "19.7 km",
      stations: 14,
      color: "#1a7f4f",
      progress: 100,
      target: null,
      planStart: "2024-12-22",
      basisZh: "2024-12-22 正式商业运营，日均客流稳定；全长 19.7 km、14 站（含地下 3 站）。",
      basisEn: "In commercial operation since 2024-12-22; 19.7 km / 14 stations.",
      latestZh: "2026-10：1 号线延伸段（平阳新城–仙泉，约 31–32.8 km）已完成中期报告，拟 2026-12 报批，目标 2030。",
      latestEn: "Oct 2026: the Line 1 extension (Binh Duong New City–Suoi Tien, ~31–32.8 km) finished its mid-term report, to be submitted in Dec 2026, targeting 2030.",
      stops: [
        "滨城",
        "歌剧院",
        "巴逊",
        "文圣",
        "新港",
        "草田",
        "安富",
        "沥节",
        "福隆",
        "平泰",
        "守德",
        "高新园区",
        "国家大学",
        "仙泉"
      ],
      stopsEn: [
        "Ben Thanh",
        "Opera House",
        "Ba Son",
        "Van Thanh",
        "Tan Cang",
        "Thao Dien",
        "An Phu",
        "Rach Chiec",
        "Phuoc Long",
        "Binh Thai",
        "Thu Duc",
        "Hi-Tech Park",
        "Nat. University",
        "Suoi Tien"
      ],
      path: [[10.7708, 106.6978], [10.7767, 106.7033], [10.7819, 106.7083], [10.796, 106.7155], [10.798, 106.7185], [10.8005, 106.7337], [10.803, 106.744], [10.812, 106.76], [10.8214, 106.7581], [10.831, 106.786], [10.8405, 106.7945], [10.85, 106.805], [10.868, 106.803], [10.8794, 106.8139]]
    },
    {
      line: "2号线西段",
      lineEn: "Line 2 West",
      from: "滨城",
      fromEn: "Ben Thanh",
      to: "tham Lương",
      toEn: "Tham Luong",
      name: "滨城– tham Lương",
      nameEn: "Ben Thanh–Tham Luong",
      status: "building",
      statusZh: "在建",
      statusEn: "Building",
      since: "2026-01-15 开工",
      expect: "2030-12 通车",
      length: "11.3 km",
      stations: 11,
      color: "#2563eb",
      progress: 12,
      target: "2030-12",
      planStart: "2026-01-15",
      basisZh: "11 站（10 地下+1 高架）：10/22 官方口径已开工 5 站，10 月底再加 3 站、12 月完成剩余 3 站；高架段与车辆段 11 月初同步开工。2026 年度资本 7,500 亿盾已拨付 6,600 亿（≈88%）。工程主体结构完成率仍处个位数，故形象进度取约 12%（估算）。",
      basisEn: "11 stations (10 underground + 1 elevated): 5 under construction per MAUR on 10/22, +3 by end-Oct and the last 3 in Dec; elevated section and depot start early Nov. FY2026 capital 7,500 bn VND, 6,600 bn disbursed (~88%). Structural completion is still single-digit, so visual progress is estimated at ~12%.",
      latestZh: "2026-10-15：承建方 Bachy Soletanche Vietnam 举行 ST6 站开工仪式；目标 2029-03 完成主体、2030 年底前商业运营。拆迁交地已 100%。",
      latestEn: "15 Oct 2026: contractor Bachy Soletanche Vietnam broke ground on station ST6; main structures due Mar 2029, commercial operation before end-2030. Land clearance 100%.",
      stops: [
        "滨城",
        "骚坛",
        "民主",
        "和平",
        "富寿",
        "新平",
        "参良"
      ],
      stopsEn: [
        "Ben Thanh",
        "Tao Dan",
        "Dan Chu",
        "Hoa Hung",
        "Phu Tho",
        "Tan Binh",
        "Tham Luong"
      ],
      path: [[10.7722, 106.6984], [10.7765, 106.6915], [10.7835, 106.682], [10.792, 106.6735], [10.8, 106.666], [10.809, 106.658], [10.82, 106.65], [10.83, 106.643]]
    },
    {
      line: "2号线东段",
      lineEn: "Line 2 East",
      from: "滨城",
      fromEn: "Ben Thanh",
      to: "守添",
      toEn: "Thu Thiem",
      name: "滨城–守添",
      nameEn: "Ben Thanh–Thu Thiem",
      status: "building",
      statusZh: "在建",
      statusEn: "Building",
      since: "2026-04-30 开工",
      expect: "2030-04",
      length: "6.2 km",
      stations: 6,
      color: "#2563eb",
      progress: 8,
      target: "2030-12",
      planStart: "2026-04-30",
      basisZh: "2026-04-29/30 开工，全长 6.2 km、6 站，目前处于管线迁改与围护结构阶段，形象进度约 8%（估算）。",
      basisEn: "Started 29–30 Apr 2026; 6.2 km / 6 stations. Currently in utility relocation and diaphragm-wall stage; visual progress ~8% (est.).",
      latestZh: "2026-10：官方口径目标 2030 年建成，与西段同步推进；过西贡河段为控制性节点。",
      latestEn: "Oct 2026: official target remains 2030, running in parallel with the western section; the Saigon River crossing is the critical node.",
      stops: [
        "滨城",
        "白藤",
        "守添"
      ],
      stopsEn: [
        "Ben Thanh",
        "Bach Dang",
        "Thu Thiem"
      ],
      path: [[10.7722, 106.6984], [10.7728, 106.701], [10.7765, 106.721], [10.778, 106.729]]
    },
    {
      line: "滨城–芹椰",
      lineEn: "Ben Thanh–Can Gio",
      from: "滨城",
      fromEn: "Ben Thanh",
      to: "芹椰",
      toEn: "Can Gio",
      name: "跨海市域线",
      nameEn: "Coastal line",
      status: "building",
      statusZh: "在建",
      statusEn: "Building",
      since: "2025-12-19 开工",
      expect: "2028",
      length: "约54 km",
      stations: null,
      color: "#f59e0b",
      progress: 10,
      target: "2028-12",
      planStart: "2025-12-19",
      basisZh: "2025-12-19 开工，全长约 54 km；2026 年度补偿安置预算已拨付 73%，土地移交投资者计划 11 月进行。主体工程尚未全面开工，形象进度约 10%（估算）。",
      basisEn: "Groundbreaking 19 Dec 2025; ~54 km. 73% of the FY2026 compensation/resettlement budget disbursed, land handover to investors scheduled for November. Main works not yet fully underway; visual progress ~10% (est.).",
      latestZh: "2026-10-19：胡志明市计划 2026 年底前再开工 5 条、合计逾 167 km 的线路；本线目标 2028 年通车。",
      latestEn: "19 Oct 2026: HCMC plans to break ground on five more lines totalling over 167 km by end-2026; this line targets 2028.",
      stops: [
        "滨城",
        "芽郫",
        "芹椰"
      ],
      stopsEn: [
        "Ben Thanh",
        "Nha Be",
        "Can Gio"
      ],
      path: [[10.7708, 106.6978], [10.74, 106.71], [10.7, 106.75], [10.63, 106.8], [10.55, 106.86], [10.52, 106.88]]
    },
    {
      line: "守添–隆城",
      lineEn: "Thu Thiem–Long Thanh",
      from: "守添",
      fromEn: "Thu Thiem",
      to: "隆城机场",
      toEn: "Long Thanh Airport",
      name: "机场快线",
      nameEn: "Airport rail",
      status: "building",
      statusZh: "在建",
      statusEn: "Building",
      since: "2026-06-30 开工",
      expect: "2030",
      length: "约47.7 km",
      stations: 19,
      color: "#8b5cf6",
      progress: 5,
      target: "2030-12",
      planStart: "2026-06-30",
      basisZh: "2026-06-30 开工，全长约 47.7 km、19 站，目前处于前期工程与征地阶段，形象进度约 5%（估算）。",
      basisEn: "Started 30 Jun 2026; ~47.7 km / 19 stations. Still in preliminary works and land acquisition; visual progress ~5% (est.).",
      latestZh: "2026-10：隆城国际机场整体工程量已完成逾 80%，本线为配套轨道接入，目标 2030 通车。",
      latestEn: "Oct 2026: Long Thanh International Airport is over 80% complete; this line is the rail link, targeting 2030.",
      stops: [
        "守添",
        "仁泽",
        "隆城机场"
      ],
      stopsEn: [
        "Thu Thiem",
        "Nhon Trach",
        "Long Thanh Airport"
      ],
      path: [[10.776, 106.729], [10.79, 106.76], [10.77, 106.8], [10.75, 106.85], [10.76, 106.92], [10.78, 107]]
    },
    {
      line: "6号线",
      lineEn: "Line 6",
      from: "新山一机场",
      fromEn: "Tan Son Nhat",
      to: "富友",
      toEn: "Phu Huu",
      name: "新山一–富友",
      nameEn: "Tan Son Nhat–Phu Huu",
      status: "approved",
      statusZh: "已批待开工",
      statusEn: "Approved",
      since: "2026-12 预计开工",
      expect: "2030",
      length: "22.85 km",
      stations: null,
      color: "#e5484d",
      progress: 0,
      target: "2030-12",
      planStart: "2026-12",
      basisZh: "一期（新山一机场–富友，22.85 km）已完成中期报告，拟 2026-12 报批后开工；正与国防部就机场片区国防用地完成协议程序。尚未开工，进度 0%。",
      basisEn: "Phase 1 (Tan Son Nhat–Phu Huu, 22.85 km) finished its mid-term report, to be submitted for approval in Dec 2026 before construction. Agreement procedures with the Ministry of Defence over airport-area defence land are being finalised. Not started, 0%.",
      latestZh: "2026-10：MAUR 争取 2026 年 12 月获批，作为 2026 年底集中开工的 3 条新线之一。",
      latestEn: "Oct 2026: MAUR aims for approval in Dec 2026, one of three new lines to be started around end-2026.",
      stops: [
        "新山一机场",
        "富友"
      ],
      stopsEn: [
        "Tan Son Nhat",
        "Phu Huu"
      ],
      path: [[10.8188, 106.6587], [10.815, 106.68], [10.81, 106.7], [10.805, 106.72], [10.798, 106.74], [10.79, 106.76]]
    },
    {
      line: "平阳新城线",
      lineEn: "Binh Duong New City line",
      from: "平阳新城",
      fromEn: "BD New City",
      to: "仙泉",
      toEn: "Suoi Tien",
      name: "平阳新城–仙泉",
      nameEn: "BD New City–Suoi Tien",
      status: "approved",
      statusZh: "已批待开工",
      statusEn: "Approved",
      since: "2026-12 预计开工",
      expect: "2030",
      length: "32.8 km",
      stations: 17,
      color: "#14b8a6",
      progress: 0,
      target: "2030-12",
      planStart: "2026-12",
      basisZh: "即 1 号线延伸段（平阳新城–仙泉，约 31–32.8 km、17 站）：走向方案已由规划建筑局呈报，补偿项目单独获批实施，中期报告已完成，拟 2026-12 获批开工。尚未开工，进度 0%。",
      basisEn: "The Line 1 extension (Binh Duong New City–Suoi Tien, ~31–32.8 km, 17 stations): the alignment plan has been submitted by the planning department, the compensation project approved separately, mid-term report done; approval and start targeted Dec 2026. Not started, 0%.",
      latestZh: "2026-10：与 2 号线北段、6 号线一期同批推进，三条新线合计约 90 km、初步总投资逾 254 万亿盾。",
      latestEn: "Oct 2026: advanced in the same batch as Line 2 North and Line 6 phase 1 — three new lines totalling ~90 km with preliminary investment above VND 254 trillion.",
      stops: [
        "平阳新城",
        "仙泉"
      ],
      stopsEn: [
        "Binh Duong New City",
        "Suoi Tien"
      ],
      path: [[11.03, 106.68], [10.99, 106.71], [10.95, 106.745], [10.918, 106.78], [10.898, 106.804], [10.8794, 106.8139]]
    },
    {
      line: "2号线北段",
      lineEn: "Line 2 North",
      from: "土龙木",
      fromEn: "Thu Dau Mot",
      to: "骚坛",
      toEn: "Tao Dan",
      name: "土龙木–骚坛",
      nameEn: "Thu Dau Mot–Tao Dan",
      status: "approved",
      statusZh: "已批待开工",
      statusEn: "Approved",
      since: "2026-12 预计开工",
      expect: "2030",
      length: "33.2 km",
      stations: null,
      color: "#0891b2",
      progress: 0,
      target: "2030-12",
      planStart: "2026-12",
      basisZh: "2026-10 官方口径：全长 33.2 km，与平阳新城线、6 号线一期同批，拟 2026-12 获批后开工。尚未开工，进度 0%。",
      basisEn: "Oct 2026 official: 33.2 km, in the same batch as the Binh Duong line and Line 6 phase 1, approval and start targeted Dec 2026. Not started, 0%.",
      latestZh: "2026-10：三条新线合计约 90 km、初步总投资逾 254 万亿盾（≈98 亿美元），目标 2030 建成。",
      latestEn: "Oct 2026: the three new lines total ~90 km with preliminary investment above VND 254 trillion (~USD 9.8 bn), targeted for 2030.",
      stops: [
        "土龙木",
        "骚坛"
      ],
      stopsEn: [
        "Thu Dau Mot",
        "Tao Dan"
      ],
      path: [[11.02, 106.66], [10.98, 106.68], [10.93, 106.69], [10.88, 106.69], [10.83, 106.69], [10.79, 106.692], [10.771, 106.692]]
    }
  ],
  metroSourceUrl: "https://news.laodong.vn/xa-hoi/metro-tphcm-vao-giai-doan-but-toc-1692893.ldo",

  /* ---------- 地图 POI（坐标为近似示意） ---------- */
  mapPois: {
    projects: [
      {
        n: "Vinhomes Golden River",
        lat: 10.7768,
        lng: 106.7092
      },
      {
        n: "Grand Marina Saigon",
        lat: 10.7746,
        lng: 106.7033
      },
      {
        n: "The Marq",
        lat: 10.779,
        lng: 106.7029
      },
      {
        n: "The Metropole Thu Thiem",
        lat: 10.78,
        lng: 106.73
      },
      {
        n: "Empire City",
        lat: 10.7823,
        lng: 106.7332
      },
      {
        n: "The Global City",
        lat: 10.8015,
        lng: 106.7452
      },
      {
        n: "Lumiere Riverside",
        lat: 10.7903,
        lng: 106.7375
      },
      {
        n: "Midtown Phu My Hung",
        lat: 10.7335,
        lng: 106.7037
      },
      {
        n: "Sunrise Riverside",
        lat: 10.724,
        lng: 106.7135
      },
      {
        n: "Vinhomes Grand Park",
        lat: 10.8487,
        lng: 106.8335
      },
      {
        n: "Masteri Centre Point",
        lat: 10.8445,
        lng: 106.8285
      }
    ],
    metro: [
      {
        n: "Ben Thanh 滨城 (L1)",
        lat: 10.7708,
        lng: 106.6978
      },
      {
        n: "Ba Son 巴逊 (L1)",
        lat: 10.7819,
        lng: 106.7083
      },
      {
        n: "Van Thanh (L1)",
        lat: 10.796,
        lng: 106.7155
      },
      {
        n: "Thao Dien (L1)",
        lat: 10.8005,
        lng: 106.7337
      },
      {
        n: "An Phu (L1)",
        lat: 10.803,
        lng: 106.744
      },
      {
        n: "Phuoc Long (L1)",
        lat: 10.8214,
        lng: 106.7581
      },
      {
        n: "Thu Duc (L1)",
        lat: 10.8405,
        lng: 106.7945
      },
      {
        n: "Suoi Tien 仙泉 (L1)",
        lat: 10.8794,
        lng: 106.8139
      },
      {
        n: "Tao Dan (L2在建)",
        lat: 10.771,
        lng: 106.692
      },
      {
        n: "Hoa Hung (L2在建)",
        lat: 10.789,
        lng: 106.674
      },
      {
        n: "Thu Thiem 守添 (L2东段在建)",
        lat: 10.776,
        lng: 106.722
      }
    ],
    hospitals: [
      {
        n: "FV Hospital (D7)",
        lat: 10.7295,
        lng: 106.7235
      },
      {
        n: "Vinmec Central Park",
        lat: 10.7898,
        lng: 106.7172
      },
      {
        n: "BV Nhan Dan 115",
        lat: 10.7757,
        lng: 106.6655
      },
      {
        n: "Vinmec Golden River 诊所",
        lat: 10.7772,
        lng: 106.7088
      },
      {
        n: "Saigon General Hospital",
        lat: 10.7828,
        lng: 106.7052
      }
    ],
    schools: [
      {
        n: "ISHCMC 国际学校",
        lat: 10.7955,
        lng: 106.741
      },
      {
        n: "BIS An Phu",
        lat: 10.8052,
        lng: 106.7535
      },
      {
        n: "SSIS 西贡南国际学校",
        lat: 10.7315,
        lng: 106.6885
      },
      {
        n: "Vinschool Golden River",
        lat: 10.7765,
        lng: 106.708
      }
    ],
    malls: [
      {
        n: "Vincom Dong Khoi",
        lat: 10.7768,
        lng: 106.7042
      },
      {
        n: "Takashimaya",
        lat: 10.7738,
        lng: 106.7012
      },
      {
        n: "Crescent Mall (PMH)",
        lat: 10.7318,
        lng: 106.7025
      },
      {
        n: "SC VivoCity",
        lat: 10.7415,
        lng: 106.7125
      },
      {
        n: "Vincom Mega Mall Grand Park",
        lat: 10.848,
        lng: 106.833
      },
      {
        n: "Estella Place",
        lat: 10.8022,
        lng: 106.7392
      },
      {
        n: "AEON Mall Tan Phu",
        lat: 10.8013,
        lng: 106.627
      }
    ],
    transport: [
      {
        n: "新山一国际机场 TSN",
        lat: 10.8187,
        lng: 106.652
      },
      {
        n: "西贡火车站",
        lat: 10.8063,
        lng: 106.664
      },
      {
        n: "东部新客运站",
        lat: 10.8712,
        lng: 106.7905
      },
      {
        n: "滨城巴士枢纽",
        lat: 10.7716,
        lng: 106.6972
      }
    ]
  },

  /* ---------- 银行 V2（核实修正 + 外籍定存） ---------- */
  banks: {
    local: [
      {
        name: "Vietcombank",
        teaser: "5.5–5.7%",
        teaserPeriod: "前 6–12 个月",
        float: "≈12–16%",
        ltv: "最高100%",
        tenor: "最长30年",
        promoZh: "国有大行，网点最多",
        promoEn: "State bank, widest network"
      },
      {
        name: "BIDV",
        teaser: "5.5%",
        teaserPeriod: "前 12 个月（1 年）",
        float: "≈12–16%",
        ltv: "最高80%",
        tenor: "最长30年",
        promoZh: "国有大行，工资代发客户可再降 0.3–0.5%",
        promoEn: "Payroll clients get 0.3–0.5% off"
      },
      {
        name: "VietinBank",
        teaser: "6–8.2%",
        teaserPeriod: "按期限固定",
        float: "无浮动尾部",
        ltv: "最高80%",
        tenor: "最长25年",
        promoZh: "按期限固定，无浮动尾部",
        promoEn: "Fixed by tenor, no float tail"
      },
      {
        name: "ACB",
        teaser: "5.5%",
        teaserPeriod: "前 5 年（首套）",
        float: "≈12–16%",
        ltv: "最高90%",
        tenor: "最长30年",
        promoZh: "首套房专属包，5 年优惠期最长",
        promoEn: "First-home package, 5-yr teaser"
      },
      {
        name: "SHB",
        teaser: "3.99% 起",
        teaserPeriod: "仅 3–6 个月",
        float: "≈12–16%",
        ltv: "最高90%",
        tenor: "最长35年",
        promoZh: "促销期利率全市场最低，但仅 3–6 个月",
        promoEn: "Lowest teaser but only 3–6 months"
      },
      {
        name: "Agribank",
        teaser: "5.5%",
        teaserPeriod: "前 3 年",
        float: "≈12–16%",
        ltv: "最高75%",
        tenor: "最长40年",
        promoZh: "35 岁以下首套专项，期限最长 40 年",
        promoEn: "Under-35 first home; 40-yr tenor"
      }
    ],
    foreign: [
      {
        name: "HSBC Vietnam",
        rate: "官方资格仅列越南籍/越侨",
        ltv: "外籍基本不放贷",
        tenor: "—",
        noteZh: "实测：外籍（即便有工作签证+TRC）通常无法申请，仅个案特批",
        noteEn: "Reality: foreigners (even with WP+TRC) generally cannot apply; case-by-case exceptions only"
      },
      {
        name: "Standard Chartered VN",
        rate: "个案报价 8–9%",
        ltv: "最高70–75%",
        tenor: "按TRC有效期",
        noteZh: "需 TRC+工作许可+本地收入，个案审批",
        noteEn: "TRC+WP+local income, case-by-case"
      },
      {
        name: "Shinhan Bank VN",
        rate: "7.95–8.1%（12–36月固定）",
        ltv: "个案",
        tenor: "按TRC有效期",
        noteZh: "对外籍相对最友好",
        noteEn: "Most foreigner-friendly"
      },
      {
        name: "Woori Bank VN",
        rate: "5.6%起（第1年）",
        ltv: "最高80%",
        tenor: "个案",
        noteZh: "韩籍客户为主，其他国籍需核实",
        noteEn: "Mainly Korean clients; others verify"
      }
    ],
    foreignNoteZh: "重要核实结论（2026）：越南并无法律禁止外国人贷款，但实操中绝大多数银行不向纯外籍放贷——HSBC 官方资格仅面向越南籍与越侨；渣打/新韩个案审批，且贷款期限被暂住卡有效期（常为 2–3 年）锁死，月供压力大。外籍获批率估计仅 10–20%。多数外籍买家选择全款或开发商分期（交房前≤70%）。借款利率 8–13% vs 租金回报 3.5–6%，融资多为负杠杆，全款/境外融资通常更划算。",
    foreignNoteEn: "Verified (2026): no law bans foreigner loans, but in practice most banks do not lend to pure foreigners — HSBC officially serves only Vietnamese nationals & Viet Kieu; StanChart/Shinhan are case-by-case with term capped to TRC validity (2–3 yrs). Approval odds ~10–20%. Most foreign buyers pay cash or use developer installments (≤70% pre-handover). Rates 8–13% vs yields 3.5–6% — usually negative leverage; cash or offshore financing wins.",
    downPaymentZh: "本地人首付约 20–30%；外籍若能获批通常需 30–50% 首付；开发商分期首付 30%（首期含定金≤30%）。",
    downPaymentEn: "Locals ~20–30% down; qualified foreigners 30–50%; developer installments 30% first payment (incl. deposit).",
    depositRates: [
      {
        termZh: "活期 / 1 个月以下",
        termEn: "Demand / under 1 month",
        rate: "0.1–0.2%"
      },
      {
        termZh: "1–6 个月",
        termEn: "1–6 months",
        rate: "4.0–4.6%"
      },
      {
        termZh: "6–12 个月",
        termEn: "6–12 months",
        rate: "挂牌 2.9–7.9%（11/05 口径：全国 46 家商业银行已全部下调 6 个月以上挂牌利率 0.5–0.7pp；11/5 国家银行第二区域分行（辖胡志明市、同奈）要求辖区银行新发生 6 个月以上存款均息较 10/11–20 报备期再降 ≥0.5pp，以实际交易数据考核，10 月底新发生存款均息较 10 月中 -0.4pp；线上 12 个月期最高 7.0%——MBV/PGBank/Sacombank/VCBNeo/VIB，VPBank 18 个月 7.4% 全表最高；Eximbank 11/02 再降 0.5pp 至柜面 6–11 月 4.2%/12 月 4.5%、线上 12 月 4.7%；国有四大行线上 12/18 个月 6.8%）：GPBank 线上 1–2 月 3.6%（低端代表）、12–36 月 5.05%；国有四大行 6/9 月 3.0%（柜面）、12 月 5.4%、24 月 5.5%（线上 6/9/12 月 6.6%/6.6%/6.8%）；MSB 10/29 降 0.5pp 后线上 6–11 月 5.8%、12 月 6.3%、13–24 月 6.1%、36 月 5.6%（专属：≤50 亿盾首次单账户 12/15/24 月 7.0%、VIP ≥5,000 亿盾 12/13 月 9.0%）；VietABank 6–11 月 5.5%、12–13 月 5.6%、15–18 月 5.7%、24–36 月 5.8%；7% 及以上——VCBNeo/MBV 6–18 月 7.0%、VIB 12 月 7.0%、PGBank 12 月 7.0%、Sacombank 12 月 7.0%（24–36 月 7.3%）、VPBank 18 月 7.4%、Saigonbank 13 月 7.9%（全表最高）；Techcombank 6–11 月 6.05%、12 月 6.25%、18 月 5.35%（10/28 较 10/22 再降 0.2–0.4pp）、LPBank 6.5%/6.7%、BVBank 6.7%/6.9%、VPBank 6.6%/6.7%、SeABank 4.15–4.75%、PVcomBank 4.8–5.8%、HDBank 5.0%、SCB 2.9–3.7%。加成促销：MB 周末 6 月期 ≥1 亿盾 8.2%（10/31 前）、Techcombank 首笔 12 月 +1.5pp 后 7.75%（会员最高 8.25%）；Cake by VPBank 首存 +2.2pp 促销 10/31 到期；10/31 复盘：10 月累计约 30 家下调 6 个月以上定存，但挂牌 6.6–7% 叠加 1–3pp 加成后实际吸存仍达 8.3–9%，挂牌价与实付价差未收敛；11/1 追踪：11 月初各银行挂牌定存普降约 0.5pp（CafeF 11/1，响应 SBV 要求 6 个月以上至少降 0.5pp），12 月期多数降至 7% 以下，存单（CD）利率同步小幅下调；10 月底银行体系存款较此前增逾 100 万亿盾，吸存与降贷成本之间的平衡压力上升；11/2 更新：降息银行累计约 30 家（明细见资讯 11/03 条）——Eximbank 11/2 降 0.5pp 至 6–11 月 4.2%、12 月 4.5%，Techcombank/Sacombank/MSB 各 -0.5pp，NCB ≤-0.6pp、SeABank 18–36 月 ≤-0.7pp；BIDV 自 11 月柜面 -0.5pp（个人最高 5.4%、线上 6.8%、企业 12–60 月 4%）；11/07 复核：国有四大行柜面 1 月 2.1–2.6%、3 月 2.4–2.9%、6 月 3.0–3.5%、12 月统一 5.4%、24 月统一 5.5%、36 月 VCB 4.8% / BIDV·Vietin 5.5%（Lao Dong 11/7 早间牌价）；但加成促销反向抬升实付——VPBank 11/6 起线上 ≥1,000 万盾（<100 亿盾）+2.2pp 至 11/11，6–11 月实际 8.8%、12 月 8.9%，≥100 亿盾实际 9.0%/9.1%；MB 32 周年加成由 6 月期扩至 6–12 月 +2.35~2.9pp，最高 8.2%；Techcombank 首笔 +1.7pp 后 3/6/12 月最高 4.75%/8.4%/8.6%；11/08 周末复核：各行列示牌价未再调整（周日无新牌价），唯一变化是 SBV 于 11/5 起首次开展 182 天（约 6 个月）USD/VND 远期掉期，为信贷机构补充更长期限的 VND 资金（此前多为 1–2 周短期限），有助压降短期流动性压力、为后续降贷腾空间；实际付息仍以加成促销为主（见上文 VPBank/MB/Techcombank）；11/09 复核：周一各行列示牌价未再调整，46 家已完成 6 个月以上降幅，SBV 口径新发生存款均息较 10 月中旬 -0.4pp、新发生贷款 -0.2~0.5pp，短期贷款降至 8–9%、中期 9–10%（11/9 VTV 报道）；11/10 复核：46/46 家商业银行 6 个月以上挂牌已全部下调（SBV 口径新发生存款均息较 10 月中旬 -0.4pp、新发生贷款 -0.2~0.5pp），短期贷款降至 8–9%、中期 9–10%；但信贷—存款缺口约 2.35 千万亿盾（VDSC）推动银行转向境外融资（HDBank 7.21 亿美元银团、VPBank 14.4 亿、MB 5.5 亿、VIB 2.85 亿、Techcombank 拟 10 亿），长期限资金成本未实质缓解。"
      },
      {
        termZh: "1 年期（12 个月）",
        termEn: "1 year (12 months)",
        rate: "国有柜面 5.4%（VCB/BIDV/Agri，10/20 起；24 月 5.5%）· 国有线上 6.8%（Agri/MB/VCB/Vietin，10/28 表）· MSB 6.3%（10/29 起，较前降 0.5pp；专属首客 7.0%、VIP 9.0%）· VietABank 5.6%（10/29）· GPBank 5.05%（10/29）· MBV/VCBNeo/VIB/PGBank/Sacombank 7.0% · Saigonbank 6.7%（13 月 7.9%）· VPBank 6.7% · Techcombank 6.25%（10/28 起，较 10/22 降 0.4pp）· LPBank 6.7% · SeABank 4.5%/PVcomBank 5.1% · 加成后实际：MB 6 月 8.2%、Techcombank 12 月 7.75–8.25% · 11/1 起随 11 月初普降再降约 0.5pp，12 月期多数落入 7% 以下区间；11/2 逐家落地：Eximbank 12 月 4.5%、BIDV 个人柜面最高 5.4%（线上 6.8%）、NCB/SeABank 再降 0.6–0.7pp，全市场 12 月期仍以 5.4–7.0% 为主；11/07 复核：四大行柜面 12 月统一 5.4%、24 月 5.5%（无误）；加成后实际付息已上抬——VPBank 12 月 8.9–9.1%（11/11 止）、MB 12 月最高 8.2%、Techcombank 12 月最高 8.6%，与挂牌价差扩大至 2.5–3.7pp；11/09 复核：牌价未再调整（周一无新口径）"
  },
      {
        termZh: "2 年期（12–24 个月）",
        termEn: "2 years (12–24 months)",
        rate: "5.9–7.3%"
      },
      {
        termZh: "3 年以上（含 5 年期）",
        termEn: "3 years+ (incl. 5-year)",
        rate: "国有 24 月 5.5–6%、36–60 月 4.8–5.3% · 股份 6.6–7.8%"
      },
      {
        termZh: "USD 存款",
        termEn: "USD deposits",
        rate: "0%"
      },
      {
        termZh: "大额 CD / 外宾专案",
        termEn: "Large CDs / expat program",
        rate: "最高 8.5–9.6%"
      }
    ],
    loanRates: [
      {
        termZh: "优先领域短期贷款（≤1 年）",
        termEn: "Priority-sector short-term (≤1 year)",
        rate: "≈3.9%（法定上限 4%）"
      },
      {
        termZh: "一般 VND 贷款（新贷 + 存量）",
        termEn: "General VND loans (new + outstanding)",
        rate: "8.1–10.5%"
      },
      {
        termZh: "房贷（住宅抵押，优惠期后浮动）",
        termEn: "Mortgage (post-promo floating)",
        rate: "12–16%（平均 14–16%）。10/27 定向优惠落地：Vietcombank 2 万亿盾额度（河内/胡志明及周边、已办红本）较常规个人房贷低 1pp、最长 35 年；BIDV 3 万亿盾个人包（购已办证住房/建房/修房），固定 12 月 9.5%、18 月 10%、24 月 10.5%，较常规低 2pp、最长 30 年。10/25 复核：本轮降息未覆盖购房贷，商业银行购房贷 11–14%、优惠期后浮动 13–15%，个别 16%；DKRA 11 家银行 12–24 月固定约 10.9%，VARS IRE 10 家银行优惠 8.5–11%。10/30 追加：DXS-FERI 预测最可行情景下 2026 年底浮动贷款利率仍 11–13%"
      },
      {
        termZh: "USD 贷款",
        termEn: "USD loans",
        rate: "4.1–5.4%"
      }
    ],
    depositVsLoanNoteZh: "「贷款 ≈ 存款两倍多」复核结论：不完全准确，需分档——① 一般经营贷（8.1–10.5%）约为同期存款（6.1–7.6%）的 1.1–1.7 倍；② 住房按揭优惠期后浮动利率（12–16%、均值 14–16%）约为 1 年期存款（5.9–7.6%）的 1.6–2.7 倍，仅高个案（16% vs 6.1%）超过 2.6 倍。即：经营贷约 1.1–1.7 倍、按揭约 1.6–2.7 倍；以国有四大行 1 年期存款 5.9% 为基准时，按揭已普遍在两个「两倍」上下。",
    depositVsLoanNoteEn: "Re-check of 'loan ≈ 2× deposit': not universal — ① general business loans (8.1–10.5%) are 1.1–1.7× same-term deposits (6.1–7.6%); ② post-promo floating mortgages (12–16%, avg 14–16%) are 1.6–2.7× the 1-yr deposit (5.9–7.6%); only extremes (16% vs 6.1%) exceed 2.6×. So business ~1.1–1.7×, mortgages ~1.6–2.7×; measured against the Big-4 1-yr deposit of 5.9%, mortgages now sit around or above 2×.",
    localNoteZh: "越南房贷普遍为「优惠期固定利率 + 之后浮动」结构：1 年期固定（BIDV 等）约 5.5%，5 年期固定（ACB 首套包）约 5.5%，优惠期结束后统一浮动至 12–16%（2026 Q4 口径、均值 14–16%）。定息期越短、越要留意浮动跳升风险。10/18 SBV 已要求优先领域贷款利率下调 1.5–2 个百分点，10/19 行长会议后 Agribank（最多 2pp）、BIDV（10/15 起 6–7%）、Sacombank（企业贷 8.5%）等已落地，但均属短期经营类、非按揭。10/20 存款端降息落地（VCB/Agri 6 月以上降 0.5pp、VietinBank 早降午回、BIDV 未动，至当日下午 16 家银行已挂新牌价、12 月期多数跌破 7%），但房贷浮动利率仍未跟进，实际月供压力未减。10/24 进展：多家银行已公布贷款利率下调 1.5–3pp（Agribank、BIDV、VietinBank、MB、LPBank、SHB、ACB、TPBank、SeABank、OCB、Nam A Bank、BVBank），但以经营类为主；SBV 口径新发放+存量贷款平均 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp），房贷浮动仍 12–16%。10/28 追记：挂牌定存整体未动，但 Techcombank 线上 12 月再降至 6.25%、MB 以周末与周年券把 6 月实际付息推至 8.2%，存款端成本并未实质缓解；房贷浮动利率仍 12–16%，未见跟进下调。10/30 追记：10 月累计近 30 家银行下调定存挂牌，但 DXS-FERI 判断至 2026 年底浮动贷款利率仍维持 11–13%，企业融资成本未实质下降；BIDV Home 认为更广泛降息需待 2027 年公共投资与征地补偿资金放量。10/31 追记：至 10 月底银行美元卖出价跌破 26,000，VND 转强缓解输入型通胀与外汇压力；但存款端降幅被加成促销抵销（实际吸存 8.3–9%），房地产与购房类贷款仍 12–14%、浮动 15–16%，年内月供压力未见改善。",
    localNoteEn: "Vietnamese mortgages are typically 'fixed teaser + floating thereafter': 1-yr fixed (BIDV etc.) ≈5.5%, 5-yr fixed (ACB first-home) ≈5.5%, then all float to 12–16% (Q4 2026, avg 14–16%). The shorter the fixed term, the bigger the float-jump risk. On Oct 18 the SBV ordered 1.5–2pp cuts for priority-sector lending; after the Oct 19 governor's meeting Agribank (up to 2pp), BIDV (6–7% from Oct 15) and Sacombank (corporate at 8.5%) have moved, but all on short-term business credit rather than home loans, so whether and how far mortgage rates follow is still open.Oct 28: deposit boards were broadly flat, but Techcombank cut its online 12-month rate again to 6.25% while MB used weekend and anniversary vouchers to pay 8.2% at 6 months — funding costs have not really eased, and floating mortgage rates remain 12-16% with no follow-through cut.",
    deposits: [
      {
    bank: "46 家全部下调（11/4 口径）",
    rate: "6 个月以上挂牌 -0.5~-0.7pp · 新发生存款均息 -0.4pp · 新发生贷款 -0.2~0.5pp · 12 月期主流 5.4–7.0%",
    noteZh: "11/4 政府例行发布会（SBV 副行长范清河）：全国 46 家商业银行已全部下调 6 个月及以上挂牌存款利率，降幅 0.5–0.7pp；10 月底新发生存款平均利率较 10 月中旬降约 0.4pp、新发生贷款降 0.2–0.5pp；20 多家银行公布优先领域优惠包（-1.5~2pp）；11/3 央行通知开展 6 个月期外币/越盾掉期以压低利率。此前 11/2 新增落地：Eximbank 下调 6–12 个月 0.5pp（6–11 月 4.2%、12 月 4.5%）；Techcombank、Sacombank、MSB 各降 0.5pp；NCB 6 个月以上最多降 0.6pp；SeABank 18–36 个月最多降 0.7pp；BIDV 自 11 月起柜面 6 个月以上降 0.5pp，个人定存最高 5.4%、线上最高 6.8%、企业 12–60 月 4%。至此公开宣布下调至少一个期限的银行约 30 家（Agribank、BIDV、VCB、Vietin、LPBank、VietBank、BVBank、Bac A Bank、BaoViet Bank、OCB、HDBank、KienlongBank、Nam A、NCB、Sacombank、TPBank、VPBank、ABBank、MBV、PVcomBank、SHB、MB、SeABank、Techcombank、PGBank、Saigonbank、GPBank、MSB、VietABank、Eximbank）。配套信贷：Techcombank 40 万亿盾、Sacombank 20 万亿盾（个人，降 1.5–2pp）、MSB 10 万亿盾（企业，7.5% 起）、Agribank/VCB/VietinBank 最高降 2pp。提示：挂牌与实际付息仍双轨，存款成本下降尚未传导至房贷利率（仍 12–16%）。",
        noteEn: "New on Nov 2: Eximbank cut 0.5pp on 6-12 months (4.2% for 6-11m, 4.5% for 12m); Techcombank, Sacombank and MSB each cut 0.5pp; NCB up to 0.6pp beyond six months; SeABank up to 0.7pp on 18-36 months; BIDV cut counter rates 0.5pp from November — individuals max 5.4%, online max 6.8%, corporates 4% for 12-60 months. About 30 banks have now announced a cut on at least one tenor: Agribank, BIDV, VCB, VietinBank, LPBank, VietBank, BVBank, Bac A Bank, BaoViet Bank, OCB, HDBank, KienlongBank, Nam A, NCB, Sacombank, TPBank, VPBank, ABBank, MBV, PVcomBank, SHB, MB, SeABank, Techcombank, PGBank, Saigonbank, GPBank, MSB, VietABank and Eximbank. Matching credit programmes: Techcombank VND 40tn, Sacombank VND 20tn for individuals (1.5-2pp), MSB VND 10tn for corporates (from 7.5%), and up to 2pp at Agribank, VCB and VietinBank. Caveat: board and paid rates remain two tracks, and cheaper deposits have yet to reach mortgage pricing (still 12-16%)."
      },
      {
        bank: "全系统 11 月初普降（11/1 口径）",
        rate: "6 个月以上挂牌定存普遍下调约 0.5pp · 12 月期多数降至 7% 以下 · 存单（CD）同步小幅下调",
        noteZh: "背景：SBV 10 月底要求各商业银行将 6 个月及以上挂牌存款利率至少下调 0.5pp，同时下调贷款利率并优先支持生产经营领域（第 9736/NHNN-CSTT 号公文口径延续）。11 月初 VCB、BIDV、CTG 等主要银行同步调整，12 个月期挂牌多数落入 7% 以下；部分银行仍在挂牌之上叠加优惠，实际执行年利率个别逾 8.3%、甚至高于 9%（挂牌与实付双轨未收敛）。存款端：银行体系存款较此前增逾 100 万亿盾，短期存款（12 个月以下）占总量约 80%（SBV 行长 10/31 国会口径），滚存率高使低成本资金相对稳定。逐家新牌价待官方牌价表核实。",
        noteEn: "Context: in late October the SBV told commercial banks to cut boards of 0.5pp or more on deposits of six months and longer, while also lowering lending rates with priority for production and business (continuing Official Letter 9736/NHNN-CSTT). Major banks including VCB, BIDV and CTG adjusted in early November, leaving most 12-month boards below 7%; some banks still stack bonuses on top, pushing effective yields above 8.3% and in some cases past 9%, so board and paid rates remain two tracks. Funding: system deposits rose by more than VND 100tn, and short-term deposits (under 12 months) account for about 80% of the total per the SBV governor's Oct 31 testimony to the National Assembly, with high rollover rates keeping low-cost funding relatively stable. Per-bank new boards to be verified against official rate tables."
      },
      {
        bank: "国有四大行（VCB/BIDV/Vietin/Agri）",
        rate: "10/27：VCB 柜面 12 月 5.4% / 24 月 5.5%、BIDV 同（较 10/17 各降 0.5pp）、Agri 5.4%/5.5% · VietinBank 回调后 12 月 5.9% / 24 月 6%",
        noteZh: "两套口径已澄清（10/14）：柜面（BIDV 10/13 调查）1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%。10/19 逐家调查 BIDV 牌价未变（1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%）——国有行当时尚未落地 10/18 要求的 0.5pp 降幅。10/20 落地情况（各行不同步）：Vietcombank 6/9 月 3.5%→3.0%、12 月 5.9%→5.4%、24 月 6%→5.5%、36–60 月 5.3%→4.8%（6 月以下不变：1–2 月 2.1%、3 月 2.4%）；Agribank 6–11 月 4%→3.5%、12–18 月 5.9%→5.4%、24 月 6%→5.5%，柜面最高 5.5%（1–2 月 2.6%、3–5 月 2.9%）；VietinBank 早间同步下调至 3.0%/5.4%/5.5%，当日下午回调 0.5pp 至 3.5%/5.9%/6%；BIDV 10/20 牌价未变（6/9 月 3.5%、12–18 月 5.9%、24/36 月 6%）。线上促销口径（VCB 弹性储蓄 9 月 7.2%、12 月 7.4%）未随柜面同步，实际新价待核实。10/21 追记：Vietcombank 确认按 6 个月以上再降 0.5pp 执行（12 月 5.4%，与本表 10/20 数值一致）；BIDV、VietinBank 10/21 未见新牌价公布，仍为 12–18 月 5.9%、24/36 月 6%。10/22 追记：BIDV 线上牌价维持 4.75–6.8%（1–5 月 4.75%、6–11 月与 15/18 月 6.6%、12/13/24/36 月 6.8%），国有行线上档位未随柜面同步下调。10/27 现场调查（Lao Dong 10:33）：BIDV 1–2 月 2.1%、3 月 2.4%、6/9 月 3.0%、12/13/15/18 月 5.4%、24/36 月 5.5%（较 10/17 各降 0.5pp）；VCB 同日同价（12 月 5.4%、24 月 5.5%），柜面与线上同期档位已趋同（线上仅列至 24 月）。口径提示：另有汇总表把四大行 12 月列为 6.8%，与逐家现场调查的 5.4% 冲突，疑为含加成的线上促销价或旧表，待核实",
        noteEn: "Two schedules clarified (Oct 14): counter (BIDV survey, Oct 13) 2.1% (1–2m), 2.4% (3–5m), 3.5% (6–9m), 5.9% (12–18m), 6.0% (24–36m); online 4.75% (1–5m), 6.6% (6–11m), 6.8% (12/13/24/36m), 6.6% (15/18m). A Oct 19 survey found BIDV's board unchanged — counter 2.1%/2.4%/3.5%/5.9%/6.0% and online 4.75%/6.6%/6.8%/6.6% — so the state banks had yet to implement the 0.5pp cut ordered on Oct 18. Outcomes on Oct 20 differed by bank: Vietcombank cut 6/9-month to 3.0% from 3.5%, 12-month to 5.4% from 5.9%, 24-month to 5.5% from 6% and 36-60-month to 4.8% from 5.3% (sub-6-month unchanged at 2.1% for 1-2 months and 2.4% for 3 months); Agribank cut 6-11-month to 3.5% from 4%, 12-18-month to 5.4% from 5.9% and 24-month to 5.5% from 6%, with a counter maximum of 5.5% (2.6% at 1-2 months, 2.9% at 3-5 months); VietinBank cut to 3.0%/5.4%/5.5% in the morning then reversed the 0.5pp in the afternoon to 3.5%/5.9%/6%; BIDV left its Oct 20 board unchanged (3.5% at 6/9 months, 5.9% at 12-18 months, 6% at 24/36 months). Online promotional tiers (VCB flexible savings at 7.2% for 9 months and 7.4% for 12) did not move with the counter board — new levels to be verified. Oct 21 addendum: Vietcombank confirmed the 0.5pp cut on 6 months+ (12m at 5.4%, matching the Oct 20 figures here); no new BIDV or VietinBank boards on Oct 21, still 5.9% at 12-18m and 6% at 24/36m. Oct 22 addendum: BIDV's online board is unchanged at 4.75-6.8% (4.75% at 1-5m, 6.6% at 6-11m and 15/18m, 6.8% at 12/13/24/36m), so state-bank online tiers had not followed the counter cuts. Oct 27 on-site survey (Lao Dong, 10:33): BIDV 2.1% (1-2m), 2.4% (3m), 3.0% (6/9m), 5.4% (12/13/15/18m) and 5.5% (24/36m), each 0.5pp below Oct 17; Vietcombank matched at 12m 5.4% and 24m 5.5%, so counter and online tiers have now converged (the online board lists only up to 24 months). Caveat: one aggregator table still shows 6.8% at 12 months for the Big-4, conflicting with the 5.4% branch survey, likely a promo-inclusive online rate or a stale board — flagged for verification"
      },
      {
        bank: "ACB（10/19 公布、10/20 生效）",
        rate: "调整前 6个月 7.9% · 12个月 8.0%（新牌价待生效后核实）",
        noteZh: "10/19 宣布下调定存牌价、自 10/20 起适用；同时推出企业贷款降 1.5–2pp 方案（此前 1pp 方案已投放约 5 万亿盾）",
        noteEn: "Cut its deposit board on Oct 19 effective Oct 20 (new levels to be verified once live); also launched a 1.5–2pp corporate lending cut after its earlier 1pp programme disbursed about VND 5tn"
      },
      {
        bank: "Vietcombank CD（线上凭证）",
        rate: "12个月 7.9%",
        noteZh: "面值10万盾起",
        noteEn: "from VND 100k"
      },
      {
        bank: "股份制银行（Sacombank/LPBank/Saigonbank 等）",
        rate: "12个月 5.6–7.5%",
        noteZh: "10/19 降息后：LPBank 6月 6.5%、12月 6.7%、13–18月 6.55%（柜面 12–18月 6.1%、24–25月 6.3%、48–60月 5.2%）；VietBank 6–8月 5.4%、9–11月 5.5%、12–14月 5.6%、18–36月 5.9%；BVBank 12月柜面 6.05%、线上 6.9%；Nam A Bank 6月以上降 0.5pp。10/15 未调整口径：Sacombank 12/18月 7.5%、Saigonbank 7.2%/7.0%、Bac A Bank 7.1%、VIB 与 MBV 7.0%、MSB 6.8%；10/20 下午全市场已有 16 家银行公布新牌价，12 个月期多数跌破 7%（部分行低于 6%）。10/21 再降：SHB 6–36 月 -0.5pp（6–8 月 5.7%、9–11 月 5.9%、12–13 月 6.0%、15–18 月 6.1%、24–36 月 6.2%，为 4 月以来首次调整）；ABBank 6–60 月 -0.5pp；SeABank 线上 1–15 月 -0.5pp、18–36 月 -0.7pp（12 月 4.5%、18–36 月 4.75%）",
        noteEn: "After the Oct 19 cuts: LPBank 6m 6.5%, 12m 6.7%, 13–18m 6.55% (counter 12–18m 6.1%, 24–25m 6.3%, 48–60m 5.2%); VietBank 5.4% (6–8m), 5.5% (9–11m), 5.6% (12–14m), 5.9% (18–36m); BVBank 12m 6.05% at the counter and 6.9% online; Nam A Bank cut 0.5pp beyond six months. Unchanged Oct 15 readings: Sacombank 7.5% (12/18m), Saigonbank 7.2%/7.0%, Bac A Bank 7.1%, VIB and MBV 7.0%, MSB 6.8%. More cuts on Oct 21: SHB -0.5pp across 6-36m (5.7% at 6-8m, 5.9% at 9-11m, 6.0% at 12-13m, 6.1% at 15-18m, 6.2% at 24-36m — its first change since April); ABBank -0.5pp across 6-60m; SeABank online -0.5pp for 1-15m and -0.7pp for 18-36m (12m 4.5%, 18-36m 4.75%)"
      },
      {
        bank: "VPBank / MB / Techcombank（10/12–10/28 调整）",
        rate: "VPBank 10/26 起 线上 6–11月 6.6%、12–13月 6.7%、1–5月 4.75%、15–18月 7.4%、24月 7.1%、36月 6%（10/21 降 0.5pp、10/26 再降 0.4pp；≥10 亿盾 6–11月 7.0%、12–13月 7.1%）· MB 10/21 起 6–11月 5.3%、12–18月 5.85%、24–60月 6.5%（10/28 表列 6/9月 6.6%、12/18月 6.8% 为含加成口径）· Techcombank 10/28 起 线上 3月 4.55%、6–11月 6.05%、12月 6.25%、18月 5.35%（较 10/22 再降 0.2pp / 0.4pp）；首笔加成 1.5pp 后 12月 7.75%、会员最高 8.25% · 11/6 新增加成：VPBank 线上 ≥1,000 万盾 +2.2pp（<100 亿盾）/ +2.0pp（≥100 亿盾），6–11 月实际 8.8–9.0%、12 月 8.9–9.1%（至 11/11）· MB 32 周年加成扩至 6–12 月 +2.35~2.9pp、最高 8.2% · Techcombank 首笔 +1.7pp 后 3/6/12 月最高 4.75%/8.4%/8.6%",
        noteZh: "含促销加成；Techcombank 首次开户 3/6/12 月最多加 1 个百分点、符合产品条件整体加 1.5pp；10/15 表列 MB 6/9/12 月线上 6.6%/6.6%/6.8%，同表另列 5.8%/5.8%/6.35% 一行（疑为柜面或特定产品口径，仍待 MB 官方确认）；MB 部分网点对 10 亿盾及以上的 6 月期给到最高 9%/年（10/15 报道）。10/21 MB 跟进降息：6–60 月全线 -0.5pp（线上 6–11 月 5.3%、12–18 月 5.85%、24–60 月 6.5%）；VPBank 线上 15/18 月同步 -0.5pp。10/22 Techcombank 跟进：线上「Phát Lộc」1–12 月 -0.1pp、13–36 月 -0.5pp 统一 5.35%。10/26 VPBank 再降 0.4pp（6–13 月），10 亿盾以上 6–11 月 7.0%、12–13 月 7.1%；VnExpress 同日调查显示网点实际报价高于挂牌 1–3pp（VPBank 6 月 9.1%、12 月 9.2%，MB 生日券 8.2%）。10/28 更新（越南网 10/28 调查）：Techcombank 线上再降——3 月 4.55%、6–11 月 6.05%、12 月 6.25%（10/22 为 6.45%/6.65%）、18 月 5.35%，13–36 月维持 5.35%；首笔 +1.5pp 后 12 月 7.75%，满足会员条件可达 8.25%。MB 挂牌未变（3 月 4.75%、6/9 月 6.6%、12/18 月 6.8%、24–60 月 6.5%），但促销把实际付息推高到 8.2%——每周六日 App 定期 6 月期、≥1 亿盾、需输入特定代码；另为 32 周年向直播渠道领券客户开放 ≥1,000 万盾、≥6 月的 8.2%（均执行至 10/31）。MB 同时对农林、出口生产、中小企业、配套工业、高科技五个优先领域贷款利率降 1.5–2pp、下限 7.9%。11/07 追记（ZNews/Vietnam.vn）：加成促销成为主流「暗补」——VPBank 11/6 公布线上促销码，<100 亿盾加 2.2pp、≥100 亿盾加 2.0pp，适用 6–12 月期至 11/11，使 6–11 月实际达 8.8%、12 月 8.9%（≥100 亿盾 9.0%/9.1%），明显高于该行 15–18 月挂牌 7.4%；另对 500 万–10 亿盾 1–36 月普存加 1pp 至 11/30。MB 把 32 周年加成由 6 月期扩至 6–12 月，加成 2.35–2.9pp，实际最高 8.2%（挂牌 6–11 月 5.3%、12 月 5.85%）。Techcombank 每月首笔 3/6/12 月最多加 1.7pp，实际 4.75%/8.4%/8.6%。即：挂牌端在 SBV 要求下普遍回落，实付端因季末冲量与年末吸存反而抬升，存贷利差压缩对房贷传导仍有限。",
        noteEn: "incl. promo add-ons; Techcombank adds up to 1pp for first-time savers on 3/6/12 months and up to 1.5pp where product conditions are met; the Oct 15 table lists MB online 6.6%/6.6%/6.8% for 6/9/12 months alongside a 5.8%/5.8%/6.35% row (likely counter or product-specific — still to be confirmed with MB); some MB branches pay up to 9%/yr on 6-month deposits of VND 1bn+ (reported Oct 15). MB followed the Oct 21 cut with -0.5pp across 6-60 months (online 5.3% at 6-11m, 5.85% at 12-18m, 6.5% at 24-60m) and VPBank cut 0.5pp on its online 15/18-month tiers. Techcombank followed on Oct 22 (-0.1pp for 1-12 months, 13-36 months to a flat 5.35%). Oct 26: VPBank cut a further 0.4pp on 6-13 months, with 7.0%/7.1% for VND 10bn+ deposits, while a VnExpress survey found branches quoting 1-3pp above the boards (VPBank 9.1% at 6m and 9.2% at 12m, MB 8.2% with a birthday voucher). Oct 28 update (Vietnam.vn survey): Techcombank cut online rates again — 4.55% at 3 months, 6.05% at 6-11 months, 6.25% at 12 months (from 6.45%/6.65% on Oct 22) and 5.35% at 18 months, with 13-36 months held at 5.35%; the 1.5pp first-deposit bonus takes 12 months to 7.75% and to 8.25% where membership conditions are met. MB's board is unchanged (4.75% at 3m, 6.6% at 6/9m, 6.8% at 12/18m, 6.5% at 24-60m), but promotions lift actual payouts to 8.2% — weekend app deposits at 6 months from VND 100m with a code, plus 8.2% for 6 months or longer from VND 10m for customers holding 32nd-anniversary livestream vouchers (both run to Oct 31). MB also cut lending rates 1.5-2pp for five priority sectors (agriculture, export production, SMEs, supporting industries, high tech) with a 7.9% floor. Nov 7 addendum (ZNews/Vietnam.vn): bonus add-ons have become the main hidden subsidy — from Nov 6 VPBank offers +2.2pp on online deposits of VND 10m-100bn and +2.0pp above VND 100bn for 6-12 month terms through Nov 11, lifting effective yields to 8.8% (6-11m) and 8.9% (12m), or 9.0%/9.1% above VND 100bn, well above its own 7.4% board for 15-18 months, plus +1pp on VND 5m-1bn 1-36 month deposits to Nov 30. MB extended its 32nd-anniversary bonus from 6 months to 6-12 months at 2.35-2.9pp, bringing the effective maximum to 8.2% against a 5.3%/5.85% board. Techcombank pays up to +1.7pp on the first deposit each month for 3/6/12 month terms, an effective 4.75%/8.4%/8.6%. Net: boards fell as the SBV demanded, but actual payouts rose on quarter-end and year-end funding targets, so transmission into mortgage pricing remains limited."
      },
      {
        bank: "HDBank（10/18 调查）",
        rate: "线上 6月 5%+最高 2.35pp 加成=7.35% · 13月专案 7.6% · 12月 5.3% · 18月 5.6%",
        noteZh: "常规线上牌价 1–2月 4.2%、3–5月 4.3%、6月 5%、7–11月 4.8%、12月 5.3%、18月 5.6%、24/36月 5%；「黄金储蓄日」加成仅限周六日及双数日（10/10、11/11、12/12），6 月期 ≥1 亿盾最高加 2.35pp、2,000 万–1 亿盾加 2.1pp；另有 13 月期专案 7.6%",
        noteEn: "Standard online board: 4.2% (1–2m), 4.3% (3–5m), 5% (6m), 4.8% (7–11m), 5.3% (12m), 5.6% (18m), 5% (24/36m); the Golden Savings Day add-on applies only at weekends and on double dates (Oct 10, Nov 11, Dec 12), up to 2.35pp on 6-month deposits of VND 100m+ and 2.1pp for VND 20–100m; a separate 13-month product pays 7.6%"
      },
      {
        bank: "BAC A BANK / PGBank / Saigonbank（10/23 更新）",
        rate: "BAC A BANK 6月 7.05%·12月 7.1%（10/12 牌价）；PGBank 10/23 起柜面 6–9月 6.1%、12–13月 6.2%、18–36月 6.8%，线上 6–9月 6.9%、12–13月 7.0%；Saigonbank 10/23 线上 6月 6.4%、7–11月 6.1%、12月 6.7%、18月 6.5%、24月 6.0%、36月 6.1%、13月 7.9%",
        noteZh: "PGBank 10/23 下调 0.5pp（柜面普通定存与原 Phuc An Khang 同幅；1–5 月维持 4.75%、18–36 月维持 6.8%），线上渠道未跟随，仍为 1–5 月 4.75%、6–9 月 6.9%、12–13 月 7.0%、18–36 月 6.8%。Saigonbank 同日线上降 0.5pp，1–5 月维持 4.75% 上限，13 月期 7.9% 为该行最高且柜面线上同价。BAC A BANK 未见 10 月新调整。至 10/23 全系统累计 22 家银行已按 SBV 第 9736 号公文降定存；SBV 9 月口径 6–12 月平均定存 8.1%（含促销加成，高于挂牌价口径）。",
        noteEn: "PGBank cut 0.5pp on Oct 23 across counter savings and the Phuc An Khang product (1-5m held at 4.75%, 18-36m at 6.8%) while its online board stayed at 4.75% (1-5m), 6.9% (6-9m), 7.0% (12-13m) and 6.8% (18-36m). Saigonbank cut online rates 0.5pp the same day, holding 1-5m at the 4.75% ceiling and keeping a 7.9% 13-month offer as its highest, identical across counter and online. No new BAC A BANK change was seen in October. As of Oct 23, 22 banks had cut deposit rates under SBV Letter No.9736; the SBV's September series shows average 6-12 month deposits at 8.1% including promotional premiums, above posted-board levels."
      },
      {
        bank: "OCB 外宾专案 CD",
        rate: "最高 8.5%（1–36月）",
        noteZh: "面值1亿盾起",
        noteEn: "min VND 100M"
      },
      {
        bank: "PVcomBank（大额）",
        rate: "最高 10%（12–13月，≥2 万亿盾）· 线上 10/21 起 12月 5.1%",
        noteZh: "柜面 10% 为 ≥2 万亿盾的 12/13 月期「Regular」产品、到期付息；线上 App 促销 10/21 下调：1–5 月 -0.25pp 至 4.5%、6–36 月 -0.5pp（6–11 月 4.8%、12 月 5.1%、13 月 5.3%、15–36 月 5.8%）；10/10 前后 10.4%/年 的短期券已不在最新牌价内（是否停发待核实）",
        noteEn: "counter 10% applies to the 12/13-month Regular product from VND 2,000bn, interest at maturity; the online app promo was cut on Oct 21: 1-5m -0.25pp to 4.5% and 6-36m -0.5pp (4.8% at 6-11m, 5.1% at 12m, 5.3% at 13m, 5.8% at 15-36m); the earlier 10.4%/yr short-dated certificate tier from VND 5m has been withdrawn with this round"
      },
      {
        bank: "Cake by VPBank（促销）",
        rate: "挂牌 6.9%（6–24 月）· 叠加 +2.2pp 加成后最高 9.1%",
        noteZh: "10/21 17:00 起下调：6–9 月 7.2%→6.9%、10–24 月 7.4%→6.9%（-0.5pp），1–5 月维持 4.75%、36 月 6.3%；9/22–10/31 对首次存款与续存客户加 2.2pp，6–13 月实际最高 9.1%（此前 9.6%），续存需 ≥500 万盾",
        noteEn: "Cut from 17:00 on Oct 21: 6-9m 7.2% to 6.9% and 10-24m 7.4% to 6.9% (-0.5pp), 1-5m held at 4.75% and 36m at 6.3%; the 2.2pp first-deposit/renewal bonus from Sep 22 to Oct 31 lifts 6-13 month effective rates to a maximum 9.1% (from 9.6%), with renewals requiring VND 5m+"
      },
      {
        bank: "NCB / Vikki（线上促销）",
        rate: "9.1–9.35%",
        noteZh: "1 亿盾起、线上。GPBank 已从本条移出：10/29 挂牌为线上 3.6–5.05%、柜面最高 4.6%，与 9% 档促销不符（原并列疑为旧口径或特定产品，待核实）",
        noteEn: "≥VND 100M, online. GPBank removed from this row: its Oct 29 board runs 3.6-5.05% online and up to 4.6% at the counter, which does not fit the 9% promotional tier (the earlier grouping looks like an outdated or product-specific reading; to verify)"
      },
      {
        bank: "MSB / VietABank / GPBank（10/29 各降 0.5pp）",
        rate: "MSB 线上 1–5月 4.75%、6–11月 5.8%、12月 6.3%、13–24月 6.1%、36月 5.6%（专属：≤50 亿盾首客 6月 6.5%、12/15/24月 7.0%；VIP ≥5,000 亿盾 12/13月 9.0%）· VietABank 线上 1–2月 4.7%、3–5月 4.75%、6–11月 5.5%、12–13月 5.6%、15–18月 5.7%、24–36月 5.8%（柜面 6–18月 5.3–5.5%、24–36月 5.6%）· GPBank 线上 1–2月 3.6%、3–5月 3.7%、6–8月 4.75%、9月 4.85%、12–36月 5.05%（柜面 12–36月 4.6%）",
        noteZh: "三家同日下调 6–36 月期 0.5 个百分点，10 月累计降息银行增至 29 家，降幅集中在长端。MSB 专属利率需满足「≤50 亿盾、此前在该行无存款、仅开一个储蓄账户」，VIP 档门槛 5,000 亿盾，非普遍可得；GPBank 为全市场最低档（12–36 月 5.05%）",
        noteEn: "All three cut 6-36 month terms by 0.5pp on the same day, lifting October's total to 29 banks, with the deepest cuts at the long end. MSB's special rates require a balance of no more than VND 5bn, no prior deposits and a single savings account, while the VIP tier needs VND 500bn; GPBank now sits at the market floor (5.05% for 12-36m)"
      },
      {
        bank: "全市场新发定存（SBV 官方口径）",
        rate: "平均约 6.38%/年（9/20 口径）；SBV 9 月口径 6–12 月均 8.1%、贷款均 10.9%；10/24 SBV 口径新发放+存量贷款均 8.4–10.9%；10/27 挂牌多数 ≤7%（7% 以上仅 VCBNeo/MBV/VIB/PGBank/Sacombank 24-36 月/VPBank 大额/Saigonbank 13 月 7.9%）；10/31 行业协会口径：至少 22 家承诺对经营与优先领域贷款利率降 1.5–2pp、15 家公布优惠包合计逾 451 万亿盾（约全系统贷款 2.2%，集中在 6 个月以下流动资金，无购房/消费方案），房地产等受控领域仍 12–14%、浮动 15–16%",
        noteZh: "10/29 追加：MSB/VietABank/GPBank 同日降 0.5pp（6–36 月），10 月累计 29 家银行降息，挂牌下限降至 3.6%（GPBank 线上 1–2 月）、12–36 月 5.05% 为全市场最低档；12 月期国有柜面 5.4%、线上 6.8%，Saigonbank 13 月 7.9% 仍为全表最高。10/26 追加：全系统挂牌已普遍落至 7% 以下（国有四大行线上 12 月 6.8%、VPBank 6.7%、Sacombank 7.0%、MBV 7.0%），但 VnExpress 同日调查显示实际动员成本仍高 1–3pp（BIDV 7.8–8.0%、VPBank 9.1–9.2%、NCB App 9%、SHB App 8.1–8.3%），即 0.5pp 指令对银行真实资金成本的缓解小于挂牌降幅所示。VDSC 判断 2026 年内定存利率持平或不再回升、2027 年续降空间有限。10/24 追加：SBV 称新发放与存量贷款平均年利率 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp）；至 10/14 信贷余额近 21 千万亿盾（+11.44%）、9 月居民存款 11.43 千万亿盾（+10.63%）、企业存款 6.34 千万亿盾。SBV 9 月数据（10/22 晚发布）：6–12 月平均定存 8.1%（环比 +0.1pp、一年前 5.5%），连续 11 个月上升但月增幅由 0.3pp 放缓至 0.1pp；24 月以上最高 8.2%；含促销加成的实际 12/24 月常见 9.3%/9.8%；9 月平均贷款利率 10.9%（较 2025 年底 +近 2pp），优先领域短期仍贴 4% 上限。此前 9/20 口径新发定存 6.38%、较 2025 年底 +1.15pp。政策端：10/18 SBV 要求 6 个月以上定存挂牌至少降 0.5pp；10/21 第 9736/NHNN-CSTT 号公文再压实（6 个月以上新发生交易平均利率较 10/11–20 报备期降 ≥0.5pp，未达标或被下调信贷增长指标）；至 10/26 已有 23 家以上银行降牌价（含四大行）。10/27 快照（35 家线上）：3 月 1.9%（SCB 最低）–4.75%；6 月 2.9%（SCB）–7.0%（VCBNeo，VPBank 对 ≥100 亿盾同价）；12 月 3.7%（SCB）–7.1%（VPBank ≥100 亿盾），MBV/PGBank/VIB/VCBNeo 与 Sacombank（≥5 亿盾）均 7.0%；24 月最高 7.3%（Sacombank，10/20 起由 7.8% 下调，仅限线上 ≥5 亿盾 24–36 月）；Saigonbank 13 月 7.9% 仍为全表最高（柜面线上同价）。Cake by VPBank 首存 +2.2pp 促销至 10/31，实际最高 9.1%，属条件性、将到期，未计入挂牌",
        noteEn: "Oct 29 update: MSB, VietABank and GPBank each cut 0.5pp on 6-36 month terms, taking October to 29 banks; the board floor is now 3.6% (GPBank online, 1-2 months) with 5.05% for 12-36 months, while Big-4 counter 12-month rates sit at 5.4% (6.8% online) and Saigonbank's 13-month 7.9% remains the table high. SBV September data (released on the evening of Oct 22): average 6-12 month deposits 8.1% (+0.1pp MoM, 5.5% a year earlier), an 11th straight monthly rise but slowing from 0.3pp; terms above 24 months peak at 8.2%; effective 12/24-month rates including premiums commonly 9.3%/9.8%; average lending rates 10.9% in September, nearly 2pp above end-2025, with priority-sector short-term loans at the 4% ceiling. Earlier, the Sep 20 series showed new deposits at 6.38%, +1.15pp vs end-2025. Policy: on Oct 18 the SBV ordered listed rates for 6-month-plus terms cut by at least 0.5pp; Letter No.9736/NHNN-CSTT of Oct 21 hardened this, and by Oct 23 22 banks had repriced. Oct 27 snapshot (35 online boards): 3 months ranges from 1.9% (SCB, lowest) to 4.75%; 6 months 2.9% (SCB) to 7.0% (VCBNeo, matched by VPBank on VND 10bn+); 12 months 3.7% (SCB) to 7.1% (VPBank, VND 10bn+), with MBV, PGBank, VIB, VCBNeo and Sacombank (VND 500m+) all at 7.0%; the top 24-month rate is 7.3% (Sacombank, cut from 7.8% on Oct 20 and limited to online deposits of VND 500m+ over 24-36 months); Saigonbank keeps the highest public rate at 7.9% for 13 months, identical at counter and online. Cake by VPBank still pays an extra 2.2pp for first-time depositors through Oct 31, an effective 9.1% maximum that is conditional, expiring and excluded from posted boards"
      },
      {
        bank: "11/11–11/12 促销加价（挂牌普降后）",
        rate: "Cake by VPBank 6 月挂牌 6.9% + 2.2pp 首存/续存加成 = 9.1%；Techcombank 6 月加 1.7pp 至 8.4%；MB 加 2.35–2.9pp 至 8.2%；PVcomBank 12–13 月 ≥2 万亿盾 10%；MSB ≥5,000 亿盾 9%",
        noteZh: "挂牌降、实付不降：11 月首周数字银行以「加成」对冲降息，条件为首次开户或指定续存、限期与金额门槛；国有与外资行挂牌已降约 0.5pp、股份行降 0.5–0.7pp（SBV 11/4 发布会口径，要求 6 个月以上新发生定存降 0.5–1pp）。同期信贷余额逾 20.88 千万亿盾（较 2025 年底 +12.27%）、吸存 +11.22%（10 月中），存贷缺口由 2 千万亿盾收窄至 1.5 千万亿盾以下，短期存款占比约 80%，故银行仍需高价吸存。SSI：Q3 存款环比 +4.5% 首次超过信贷 +3.4%，但 NIM 短期承压；对借款人而言降息传导仍取决于资金成本。",
        noteEn: "Boards down, effective rates not: in the first week of November digital banks offset the cuts with add-ons conditional on first-time or selected renewals, time limits and minimum balances. Listed rates have fallen about 0.5pp at state-owned and foreign banks and 0.5-0.7pp at joint-stock banks after the SBV asked for 0.5-1pp cuts on new six-month-plus deposits (Nov 4 briefing). System credit exceeded VND 20.88 quadrillion (+12.27% YTD) versus deposits up 11.22% by mid-October, narrowing the gap from VND 2 quadrillion to under 1.5 quadrillion, with about 80% of deposits short-term, so banks keep paying up. SSI notes Q3 deposits rose 4.5% QoQ, the first time above credit growth of 3.4%, while NIM faces near-term pressure and pass-through to borrowers still depends on funding costs."
      }
    ],
    depositNoteZh: "外籍可开定存：凭护照+签证/TRC；注意存款期限不得超过居留有效期；个人利息免税；存款保险仅覆盖 1.25 亿盾/人/行。",
    depositNoteEn: "Foreigners can open term deposits (passport+visa/TRC); term cannot exceed your legal stay; interest tax-free; deposit insurance caps at VND 125M/person/bank.",
    interestTaxZh: "利息税（2026 核实，以开户行执行为准）：越南居民 VND 银行存款利息免个税；非居民外籍人士的 VND 存款利息实务中部分银行按 5% 代扣（部分税收协定可降低），USD 存款利息多数口径为 0%。开户前请银行书面确认代扣口径并保留扣税凭证。",
    interestTaxEn: "Interest tax (2026, bank practice prevails): VND deposit interest is PIT-exempt for residents; non-resident foreigners' VND interest may face 5% withholding at some banks (DTA may reduce); USD deposits mostly 0%. Get written confirmation from your bank.",
    sourceUrl: "https://danangvisarun.com/blog/vietnam-mortgage-foreigners-2026-ltv-rates-banks"
  },

  /* ---------- 资金入境与定存指南（外籍工签·薪转本地定存） ---------- */
  fundsGuide: {
    titleZh: "资金入境与定存指南：工资在汇丰（2%）→ 转入本地银行定存（6.8–8.5%）",
    titleEn: "Funds-in & deposit guide: HSBC salary (2%) → local VND term deposit (6.8–8.5%)",
    stepsZh: [
      "① 合规入境路径（务必走银行）：工资/积蓄以「电汇汇款」入金越南本地银行外币账户——申报用途填 salary remittance，附劳动合同/工资单；避免携带大额现金入境（≥1.5 万美元需申报，现金入金还易触发反洗钱审查且无法提供合法来源凭证）。",
      "② 账户与换汇：持护照+TRC 开立外币账户与 VND 账户；汇入美元/人民币后按即期牌价结汇为 VND（保留结汇水单）——这是未来资金汇出境的合法凭证链。",
      "③ 开立 VND 定存：12 个月挂牌利率国有大行 ≈6.8%、股份制 7.3–7.8%、外宾专案 CD 最高 8.5–9%（门槛多为 1 亿盾）；定存期限不得超过 TRC 有效期，到期可在 TRC 续签后续存。",
      "④ 税务要点：越南居民（183 天规则）VND 存款利息免个税；非居民外籍的 VND 利息部分银行按 5% 代扣（有税收协定可争取优惠），USD 存款利息多为 0%——开户前让银行书面确认并保留扣税单。",
      "⑤ 未来汇出：凭当初的入金水单+完税凭证，卖房款/利息可经银行审核后汇出——这就是为什么第一步必须走电汇而非现金。",
      "⑥ CRS 提示：越南已加入 CRS；若你同时是中国税务居民，境内账户信息可能被交换回中国税务机关——大额资金路径建议提前咨询跨境税务顾问，保留全套凭证使来源可解释（工资结汇是最干净的路径）。",
      "⚠️ 本指南为一般信息，不构成税务/法律意见；大额操作前请咨询越南执业税务师。"
    ],
    stepsEn: [
      "① Compliant path (bank wire only): remit salary/savings into your Vietnamese bank's FX account with purpose 'salary remittance' + employment contract/payslips. Avoid carrying bulk cash (declarable ≥US$15,000; cash deposits trigger AML review and leave no clean source trail).",
      "② Account & FX: open FX + VND accounts with passport+TRC; convert to VND at spot and KEEP the FX receipts — your future proof-of-funds chain for repatriation.",
      "③ Open VND term deposit: 12-mo ≈6.8% state banks, 7.3–7.8% joint-stock, expat CDs up to 8.5–9% (min VND 100M typical); term cannot exceed TRC validity — roll over after TRC renewal.",
      "④ Tax: VND deposit interest is PIT-exempt for Vietnam tax residents (183-day rule); non-resident foreigners' VND interest may face 5% withholding (DTA may help); USD interest mostly 0% — get written confirmation from the bank.",
      "⑤ Repatriation later: with original remittance slips + tax receipts, sale proceeds/interest can be wired out after bank review — the reason step ① must be a wire, never cash.",
      "⑥ CRS note: Vietnam joins CRS; if you remain a Chinese tax resident, account data may be exchanged back — consult a cross-border tax adviser for large amounts and keep a full paper trail (salary conversion is the cleanest route).",
      "⚠️ General information only, not tax/legal advice; engage a Vietnamese tax practitioner for large transactions."
    ]
  },

  /* ---------- 外籍福利 V2（拓展：医院/驾照/产权解读） ---------- */
  benefits: [
    {
      itemZh: "强制性社会保险（疾病、生育、工伤）",
      itemEn: "Compulsory social insurance",
      available: true,
      noteZh: "持≥3个月工作许可须参保（143/2018/ND-CP）",
      noteEn: "Mandatory for WP ≥3 months (Decree 143/2018)"
    },
    {
      itemZh: "医疗保险 BHYT — 可用医院",
      itemEn: "Health insurance BHYT — usable hospitals",
      available: true,
      noteZh: "主要覆盖公立医院（如115、Chợ Rẫy、大水镬）；报销比例 80–100%（按转诊层级）；私立如 Vinmec/FV 基本需商业保险或自费",
      noteEn: "Mainly public hospitals (115, Cho Ray, etc.); 80–100% reimbursement by referral tier; private (Vinmec/FV) mostly needs commercial insurance or self-pay"
    },
    {
      itemZh: "开设银行账户 / 定期存款",
      itemEn: "Bank account & term deposits",
      available: true,
      noteZh: "护照+签证/TRC 可开；12个月定存 6.8–8.5%",
      noteEn: "Passport+visa/TRC; 12-mo deposits 6.8–8.5%"
    },
    {
      itemZh: "中国驾照 → 越南驾照（汽车）",
      itemEn: "China license → VN license (car)",
      available: true,
      noteZh: "中越无驾照互认，不能直接使用；需持 TRC+3个月居留，公证翻译后申请换发（有外国驾照者免理论考，直接发 B 级）；费用 13.5 万盾，5–7 个工作日",
      noteEn: "No CN-VN reciprocity; needs TRC+3mo stay, notarized translation; conversion exempt from theory (issued Class B); fee 135k VND, 5–7 days"
    },
    {
      itemZh: "摩托车驾照 A1/A2（外籍考取）",
      itemEn: "Motorbike license A1/A2 (foreigners)",
      available: true,
      noteZh: "A1(<175cc)：理论考（越南语机考30题/题库600，21题及格）+ 实操绕8字窄桥；持汽车驾照者免理论只考实操；<50cc 踏板无需驾照；考试费约 6–7万盾/次",
      noteEn: "A1(<175cc): theory (Vietnamese, 30/600 bank, pass 21) + figure-8 practical; car-license holders exempt from theory; <50cc no license needed; fees ~60–70k VND/attempt"
    },
    {
      itemZh: "体检指定医院（驾照）",
      itemEn: "Designated health-check hospitals (license)",
      available: true,
      noteZh: "115医院、Chưng Vương、西贡综合医院、FV 医院等指定机构",
      noteEn: "115, Trung Vuong, Saigon General, FV Hospital etc."
    },
    {
      itemZh: "购买 50 年产权住房",
      itemEn: "Buy 50-yr leasehold housing",
      available: true,
      noteZh: "见「产权与风险」；5种路径获「类永久」权益",
      noteEn: "See Ownership module; 5 paths to quasi-freehold"
    },
    {
      itemZh: "子女入读国际学校",
      itemEn: "Children in intl schools",
      available: true,
      noteZh: "凭居留身份，无户籍限制",
      noteEn: "Residency-based, no hukou limit"
    },
    {
      itemZh: "购买社会住房/保障房",
      itemEn: "Social housing access",
      available: false,
      noteZh: "一般仅限越南籍",
      noteEn: "Citizens only"
    },
    {
      itemZh: "投票权 / 政治权利",
      itemEn: "Voting / political rights",
      available: false,
      noteZh: "不适用",
      noteEn: "N/A"
    }
  ],
  ownershipPaths: [
    {
      zh: "与越南籍公民结婚 → 享与本地人同等的永久产权",
      en: "Marry a Vietnamese citizen → same permanent rights as locals"
    },
    {
      zh: "50年期满前 3 个月申请续期一次（再+50年，最长100年）",
      en: "Apply once ≥3 months before expiry (renew +50yrs, max 100)"
    },
    {
      zh: "出售给越南籍买家 → 对方获永久产权，你可回收全款",
      en: "Sell to Vietnamese buyer → they get permanent title; you recover full value"
    },
    {
      zh: "继承：合法继承人可继承（或继承折价款）",
      en: "Inheritance: heirs inherit the unit (or its value)"
    },
    {
      zh: "通过外商投资企业（FIE）持有经营性物业（非住宅路径）",
      en: "Hold commercial property via an FIE (non-residential route)"
    }
  ],

  /* ---------- 租房实况（非公渠道说明） ---------- */
  leaseReality: {
    zh: "实况说明：像 Golden River 这类盘，大量房源是「房东直租」——与房东个人签合同、无正式发票，因此不涉及 10% 租金税（该税只在通过中介/公司渠道、开票时产生）。但物业管理费照付（Golden River 约 23,000 盾/㎡·月，含泳池健身房；车位 210–220 万盾/月），宽带等自付。非公渠道的风险：无发票难申报临时居留/签证材料、维修责任靠合同约定、纠纷维权难，建议至少签书面双语合同+押金收据。",
    en: "Reality: many units (e.g., Golden River) are direct landlord leases — private contract, no invoice, so the 10% rental tax does not apply (it arises only via agency/corporate invoiced channels). Management fees still apply (Golden River ~23,000 VND/sqm/mo incl. gym/pool; parking 2.1–2.2M/mo). Risks of informal leases: no invoice for TRC/visa paperwork, repair terms rely on the contract, dispute resolution is hard — at minimum sign a bilingual written contract + deposit receipt."
  },

  /* ---------- 产权与风险 ---------- */
  ownership: {
    termZh: "50 年（自「粉皮书」签发日起算），可续期一次、最长合计 100 年。",
    termEn: "50 years (from Pink Book issue date), renewable once, max 100 years total.",
    rights: [
      {
        zh: "可拥有公寓/独栋房（仅限商业住宅项目）",
        en: "Own apartments/houses (commercial projects only)"
      },
      {
        zh: "可出租（开票渠道需缴约 10% 租金税；房东直租不开票则不产生）",
        en: "May rent out (~10% tax only via invoiced channels)"
      },
      {
        zh: "可出售：卖给越南人→转为永久产权；卖给外国人→继承剩余年限",
        en: "Sell: to Vietnamese → permanent; to foreigner → remaining term"
      },
      {
        zh: "可继承（按越南继承法）",
        en: "Inheritable (Vietnamese succession law)"
      },
      {
        zh: "不拥有土地本身，仅拥有建筑物 + 有期限土地使用权",
        en: "No land ownership — building + time-limited LUR only"
      }
    ],
    contractTypes: [
      {
        zh: "买卖合同 SPA（期房/一手）",
        en: "SPA (off-plan/primary)",
        descZh: "与开发商签订，分期付款，交房前累计≤70%",
        descEn: "With developer; staged payments ≤70% pre-handover"
      },
      {
        zh: "长期租赁协议 LTRA（配额满时）",
        en: "LTRA (quota full)",
        descZh: "无产权，仅长期使用权",
        descEn: "No title; long-term use right only"
      },
      {
        zh: "粉皮书（Pink Book）",
        en: "Pink Book",
        descZh: "竣工验收付清后签发，载明 50 年期限",
        descEn: "Issued post-completion; records the 50-yr term"
      }
    ],
    risks: [
      {
        zh: "配额已满（30%/250套）",
        en: "Quota exhausted",
        levelZh: "高",
        levelEn: "High",
        tipZh: "签约前要求开发商书面确认剩余配额",
        tipEn: "Written quota confirmation before signing"
      },
      {
        zh: "国防/安全限制区",
        en: "Defense/security zones",
        levelZh: "高",
        levelEn: "High",
        tipZh: "核实项目是否获准对外籍销售",
        tipEn: "Verify foreign-eligibility approval"
      },
      {
        zh: "开发商延期/烂尾",
        en: "Developer delay/default",
        levelZh: "中",
        levelEn: "Medium",
        tipZh: "查交付记录；交房前≤70%；见「案例库」",
        tipEn: "Check track record; ≤70% pre-handover; see Cases"
      },
      {
        zh: "粉皮书办理延迟",
        en: "Pink Book delay",
        levelZh: "中",
        levelEn: "Medium",
        tipZh: "保留尾款 5% 至粉皮书下发",
        tipEn: "Withhold 5% until Pink Book issued"
      },
      {
        zh: "房贷浮动利率",
        en: "Floating mortgage rates",
        levelZh: "中",
        levelEn: "Medium",
        tipZh: "优惠期后 9–13%；期限受 TRC 限制",
        tipEn: "Post-promo 9–13%; term capped by TRC"
      },
      {
        zh: "转售流动性受限",
        en: "Resale liquidity limits",
        levelZh: "中",
        levelEn: "Medium",
        tipZh: "外籍配额满时仅能卖给本地人",
        tipEn: "Quota-full → locals only"
      },
      {
        zh: "汇兑与资金出境",
        en: "FX & repatriation",
        levelZh: "中",
        levelEn: "Medium",
        tipZh: "首笔入金留存水单（giấy báo có），全程同名账户",
        tipEn: "Keep first inbound remittance slip; same-name accounts throughout"
      },
      {
        zh: "50 年期限政策不确定",
        en: "50-yr term policy uncertainty",
        levelZh: "低",
        levelEn: "Low",
        tipZh: "按长期租赁型投资规划回报",
        tipEn: "Plan as long-leasehold investment"
      }
    ]
  },

  /* ---------- 购房税费（外籍，2026 口径） ---------- */
  taxes: {
    noteZh: "越南目前【无年度房产税】。购房一次性税费以「合同价」为基数；外籍出售时个税 2%。以下为常规口径，最终以开发商/税务局书面确认为准。",
    noteEn: "Vietnam currently has NO annual property tax. One-off purchase taxes are based on the contract value; foreign sellers pay 2% PIT. Standard figures — confirm in writing with the developer/tax office.",
    items: [
      {
        itemZh: "增值税 VAT（一手新房）",
        itemEn: "VAT (new primary)",
        rateZh: "10%",
        noteZh: "开发商报价常已含 VAT，签约前确认是否含税",
        noteEn: "Developer quotes often already VAT-inclusive — confirm"
      },
      {
        itemZh: "登记费/契税（lệ phí trước bạ）",
        itemEn: "Registration fee",
        rateZh: "0.5%",
        noteZh: "按合同价 0.5%，发证前缴纳",
        noteEn: "0.5% of contract value, paid before certificate"
      },
      {
        itemZh: "维护基金（phí bảo trì）",
        itemEn: "Maintenance fund",
        rateZh: "2%",
        noteZh: "交房时一次性缴纳，用于日后共用部位维修",
        noteEn: "One-off at handover, for common-area maintenance"
      },
      {
        itemZh: "出售个税 PIT",
        itemEn: "Capital-gains PIT (sale)",
        rateZh: "2%",
        noteZh: "外籍出售按成交价 2%（或增值的 25% 二选一，实务多选 2%）",
        noteEn: "Foreign sellers 2% of sale price (or 25% of gain — 2% is the norm)"
      },
      {
        itemZh: "租金收入税（开票渠道）",
        itemEn: "Rental income tax (invoiced)",
        rateZh: "5%+5%",
        noteZh: "个税 5% + 增值税 5% = 10%；房东直租不开票不产生",
        noteEn: "5% PIT + 5% VAT = 10%; direct leases without invoice incur none"
      },
      {
        itemZh: "年度房产税",
        itemEn: "Annual property tax",
        rateZh: "无",
        noteZh: "越南暂未开征年度持有税",
        noteEn: "None — no annual holding tax yet"
      }
    ]
  },

  /* ---------- 产权证（土地证/房产证/粉皮书）说明 ---------- */
  certificates: {
    noteZh: "越南把「土地使用权证」与「房屋所有权」合并为单一权证——俗称【粉皮书】（Sổ hồng，正式名「土地使用权、房屋及其他附着资产所有权证」）。要点：① 项目层面：开发商在动工前须取得项目土地使用权证/投资许可/施工许可，这是楼盘能否合法预售的前提；② 单元层面：购房者在【竣工验收 + 付清房款】后，才可申请本单元的粉皮书，载明 50 年期限与业主姓名；③ 因此：期房/在建盘（如 2025–2026 新盘）交付前尚无单元粉皮书，只有开发商的项目土地证——这是正常流程，并非「缺证」。签约前应核对项目是否已取得预售许可（红皮书/项目土地使用证）。",
    noteEn: "Vietnam merges land-use rights and house ownership into a single title — the 「Pink Book」 (Sổ hồng, formally 'Certificate of Land Use Right, House & Assets'). Key points: ① Project level: the developer must hold the project land-use right/investment/construction permits before legal pre-sale; ② Unit level: buyers only obtain their unit Pink Book after handover + full payment, showing the 50-yr term and owner name; ③ Hence off-plan/under-construction projects (2025–2026 launches) have NO unit Pink Book yet — only the developer's project land title — which is normal, not a defect. Verify pre-sale approval (project land-use certificate) before signing."
  },

  /* ---------- 房地产改革十年轨迹（2015 – 2026） ---------- */
  reforms: {
    spanZh: "2015 – 2026（越南房地产制度从「首次对外籍开放」到「三部法重构」的 11 年）",
    spanEn: "2015 – 2026 — 11 years from opening to foreigners to a three-law overhaul",
    noteZh: "按时间正序。五条主线：① 产权与开放（2015 住房法首次允许外籍购房）→ ② 融资收紧与爆雷（2022 债券 65 号令）→ ③ 三部法重构（2024-08-01 提前生效，取消地价框架）→ ④ 供给纠偏（2025–26 保障房/租赁住房特殊机制 + 新地价表推成本）→ ⑤ 存量解冻与再立法（2026 下半年：309 号决议指标、68 号总理令、147/2026 号法令，以及 11/21 三部法表决）。",
    noteEn: "Chronological. Five threads: ① ownership & opening (2015 Housing Law allowed foreigners) → ② credit squeeze & defaults (2022 Bond Decree 65) → ③ three-law overhaul (effective 2024-08-01, land-price framework scrapped) → ④ supply rebalancing (2025-26 social/rental-housing mechanisms + new land price tables raising costs) → ⑤ unfreezing stock and re-legislating (H2 2026: Resolution 303 targets, Directive 68, Decree 147/2026, and the Nov 21 vote on three laws).",
    items: [
      {
        year: 2015,
        dateZh: "2015-07-01",
        dateEn: "Jul 1, 2015",
        tagZh: "对外开放",
        tagEn: "Opening",
        tagClass: "ok",
        titleZh: "《住房法 2014》(65/2014/QH13) 生效——外籍首次获准购房",
        titleEn: "Housing Law 2014 takes effect — foreigners allowed to buy for the first time",
        descZh: "废除「须与越南籍公民结婚或长期居留」等旧限制：持合法入境签证的外籍个人/组织可购买商品房。公寓单栋外籍上限 30%，别墅项目上限 250 套；产权 50 年，到期可续。同步生效的还有《房地产经营法 2014》(66/2014/QH13)。",
        descEn: "Scrapped old restrictions (marriage/long residence): foreigners with valid entry may buy commercial housing. Caps: 30% of units per apartment building, 250 units per villa project; 50-year tenure, renewable. Real Estate Business Law 2014 (66/2014/QH13) took effect the same day.",
        link: "https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=14307"
      },
      {
        year: 2016,
        dateZh: "2016-07-01",
        dateEn: "Jul 1, 2016",
        tagZh: "投资准入",
        tagEn: "Investment",
        tagClass: "mid",
        titleZh: "《投资法 2015》《企业法 2014》生效——外资准入改负面清单",
        titleEn: "Investment Law 2015 & Enterprise Law 2014 — negative-list regime",
        descZh: "外资准入由「审批制」转为「负面清单 + 备案制」，房地产属有条件准入行业；配套《建设和住房法》修订，为后续外资开发商进入铺路。",
        descEn: "Shifted from case-by-case approval to a negative list plus registration; real estate remained conditional. Paved the way for foreign developers.",
        link: "https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=14308"
      },
      {
        year: 2017,
        dateZh: "2017 全年",
        dateEn: "FY2017",
        tagZh: "细化执行",
        tagEn: "Implementation",
        tagClass: "mid",
        titleZh: "76/2015/NĐ-CP 实施细则落地——预售门槛与注册资本要求明确",
        titleEn: "Decree 76/2015 implementing rules — pre-sale thresholds & capital requirements",
        descZh: "明确住房法下外籍购房的具体手续、预售条件与开发商注册资本门槛，外籍成交进入常态化（当年主要 Grade A 盘开售即满 30% 配额）。",
        descEn: "Clarified paperwork for foreign purchases, pre-sale conditions and developer capital thresholds; Grade A launches routinely filled their 30% foreign quota.",
        link: "https://vbpl.vn"
      },
      {
        year: 2018,
        dateZh: "2018-01-14",
        dateEn: "Jan 14, 2018",
        tagZh: "外部催化",
        tagEn: "External",
        tagClass: "mid",
        titleZh: "CPTPP 对越南生效——外资与制造业南迁启动",
        titleEn: "CPTPP enters into force for Vietnam — manufacturing relocation begins",
        descZh: "关税与制度红利吸引制造业南迁，工业地产与员工住房需求上行；当年 GDP 增速 7.08%，胡志明均价 $1,714/㎡（CBRE）、河内 $1,304/㎡。",
        descEn: "Tariff/institutional dividends pulled manufacturing south, lifting industrial & worker housing demand; GDP +7.08%; HCMC averaged $1,714/sqm (CBRE), Hanoi $1,304.",
        link: "https://www.moit.gov.vn"
      },
      {
        year: 2019,
        dateZh: "2019-08-20",
        dateEn: "Aug 20, 2019",
        tagZh: "国家战略",
        tagEn: "Strategy",
        tagClass: "mid",
        titleZh: "政治局决议 50-NQ/TW——外资从「求量」转向「求质」",
        titleEn: "Politburo Resolution 50-NQ/TW — FDI from volume to quality",
        descZh: "设定 2021–2025 到位外资 1,000–1,500 亿美元、2026–2030 每年 300–400 亿美元目标，要求向高新技术/绿色 FDI 倾斜，直接影响产业园区与配套住房布局。",
        descEn: "Targets US$100–150bn disbursed FDI for 2021-25 and US$30–40bn/yr for 2026-30, tilting toward high-tech & green FDI — directly shaping industrial parks and worker housing.",
        link: "https://tulieuvankien.dangcongsan.vn"
      },
      {
        year: 2021,
        dateZh: "2021-02-15",
        dateEn: "Feb 15, 2021",
        tagZh: "行业收紧",
        tagEn: "Tightening",
        tagClass: "warn",
        titleZh: "148/2020/NĐ-CP 生效——房地产经营门槛显著提高",
        titleEn: "Decree 148/2020 — materially higher bar for developers",
        descZh: "提高注册资本与项目资本金要求、收紧预售许可与分期收款条件，中小开发商出清加速，供应端开始收缩——为 2022 后的价格上行埋下伏笔。",
        descEn: "Raised capital requirements, tightened pre-sale licensing and instalment terms; smaller developers were squeezed out and supply began contracting — seeding the later price surge.",
        link: "https://vbpl.vn"
      },
      {
        year: 2022,
        dateZh: "2022-09-16",
        dateEn: "Sep 16, 2022",
        tagZh: "融资爆雷",
        tagEn: "Credit shock",
        tagClass: "bad",
        titleZh: "65/2022/NĐ-CP 收紧企业债——房企流动性危机爆发",
        titleEn: "Decree 65/2022 tightens corporate bonds — developer liquidity crisis",
        descZh: "限制债券投资者范围、要求评级与抵押，叠加 SCB/万盛发案与新皇明债券事件，多个项目停工（如 The Hallmark），购房信心重创，2022 年底至 2023 年初成交量断崖。",
        descEn: "Restricted bond investors, required ratings and collateral; together with the SCB/Van Thinh Phat and Tan Hoang Minh cases, projects stalled (e.g. The Hallmark) and transactions collapsed into early 2023.",
        link: "https://vnexpress.net"
      },
      {
        year: 2023,
        dateZh: "2023-03-05",
        dateEn: "Mar 5, 2023",
        tagZh: "救市",
        tagEn: "Rescue",
        tagClass: "mid",
        titleZh: "08/2023/NĐ-CP + 33/NQ-CP——债券展期与 120 万亿盾保障房信贷包",
        titleEn: "Decree 08/2023 + Resolution 33 — bond rollovers & VND120tn social-housing credit",
        descZh: "允许债券展期、以资产偿付，缓释违约；同步推出 120 万亿盾优惠信贷包支持保障房与工人住房（购房人利率后续下调至约 6.1%/年）。",
        descEn: "Allowed bond extension and asset settlement, easing defaults; launched a VND120tn preferential credit package for social & worker housing (buyer rate later cut to ~6.1%/yr).",
        link: "https://chinhphu.vn"
      },
      {
        year: 2023,
        dateZh: "2023-11-27",
        dateEn: "Nov 27, 2023",
        tagZh: "立法重构",
        tagEn: "Legislation",
        tagClass: "ok",
        titleZh: "《住房法 2023》(27/2023/QH15) 通过",
        titleEn: "Housing Law 2023 (27/2023/QH15) passed",
        descZh: "延续外籍 50 年产权与 30%/栋配额；新增：取消「须在越居留」表述、明确续期程序、强化保障房定义与配额、规定开发商须公开项目法律文件。11-29 通过《房地产经营法 2023》(61/2023/QH15)，2024-01-18 通过《土地法 2024》(31/2024/QH15)。",
        descEn: "Retains 50-yr foreign tenure and 30%/building cap; adds clearer renewal procedures, removes residency wording, strengthens social-housing definitions and mandates disclosure of project legal dossiers. Real Estate Business Law 2023 (Nov 29) and Land Law 2024 (Jan 18, 2024) followed.",
        link: "https://vbpl.vn"
      },
      {
        year: 2024,
        dateZh: "2024-08-01",
        dateEn: "Aug 1, 2024",
        tagZh: "三部法生效",
        tagEn: "Three laws live",
        tagClass: "ok",
        titleZh: "土地法 2024 / 住房法 2023 / 房地产经营法 2023 提前生效",
        titleEn: "Land Law 2024, Housing Law 2023 & RE Business Law 2023 take effect early",
        descZh: "原定 2025-01-01，提前至 2024-08-01。核心变化：取消「地价框架」，改按年度市场地价表定价；扩大土地征收的「商业开发」适用；强化预售与资金监管。各省市随即上调地价表（胡志明/河内部分地块上调数倍），土地成本成为 2025–26 房价上行的主要推手之一。",
        descEn: "Moved up from Jan 1, 2025 to Aug 1, 2024. Core change: the land-price framework was abolished in favour of annual market-based land price tables; eminent domain for commercial development was widened; pre-sale and escrow rules strengthened. Provinces promptly raised land prices (several-fold in parts of HCMC/Hanoi) — a key driver of the 2025-26 price surge.",
        link: "https://vbpl.vn"
      },
      {
        year: 2025,
        dateZh: "2025-05-29",
        dateEn: "May 29, 2025",
        tagZh: "保障房",
        tagEn: "Social housing",
        tagClass: "ok",
        titleZh: "国会决议 201/2025/QH15——保障房特殊机制试点",
        titleEn: "NA Resolution 201/2025/QH15 — pilot special mechanisms for social housing",
        descZh: "设立国家住房发展基金、简化投资审批（「绿色通道」并行办理）、允许以划拨土地建设保障房；10-01 配套 Nghị định 192/2025/NĐ-CP 生效。另通过决议 171（商业住房土地使用权协议试点）、决议 254（化解土地法实施困难）。",
        descEn: "Created a National Housing Development Fund, streamlined investment approval (parallel 'green channel'), allowed allocated land for social housing; Decree 192/2025/NĐ-CP followed on Oct 1. Also Resolution 171 (commercial housing via land-use agreements) and 254 (unblocking Land Law issues).",
        link: "https://quochoi.vn"
      },
      {
        year: 2026,
        dateZh: "2026-01-01",
        dateEn: "Jan 1, 2026",
        tagZh: "成本推升",
        tagEn: "Cost push",
        tagClass: "warn",
        titleZh: "新地价表正式年度化适用——开发成本再上台阶",
        titleEn: "Annual market land-price tables take effect — another step up in cost",
        descZh: "土地法 2024 要求自 2026-01-01 起地价表逐年更新（不再 5 年一调），胡志明/河内调整系数上调。叠加 2025 年 8 月以来利率上行，2026 Q2 起流动性明显回落（全国成交环比 -24%），市场进入「分化与筛选」阶段。",
        descEn: "Land Law 2024 requires annual land price tables from Jan 1, 2026; HCMC/Hanoi raised adjustment coefficients. With rising rates since Aug 2025, liquidity fell sharply in 2026 Q2 (national transactions -24% QoQ) — a phase of divergence and filtering.",
        link: "https://moc.gov.vn"
      },
      {
        year: 2026,
        dateZh: "2026-07-24",
        dateEn: "Jul 24, 2026",
        tagZh: "外部关税",
        tagEn: "Tariff",
        tagClass: "warn",
        titleZh: "美国对越关税切换为 Section 301 · 12.5%",
        titleEn: "US shifts to Section 301 · 12.5% on Vietnamese goods",
        descZh: "路径：2025-04 威胁 46% → 2025-07 双边框架 20%（转口 40%）→ 2026-02-20 美最高法院裁定 IEEPA 不授权关税、02-24 起停征并回落至 10%（Section 122）→ 2026-07-24 Section 122 的 150 天上限到期，USTR 依强迫劳动调查对 60 国实施 Section 301，越南列 12.5% 档。转口 40% 罚则在各阶段存口径争议，以 CBP 执法为准。直接影响：出口制造业与工业地产的选址/扩产节奏，进而影响外派与本地白领的住房需求。",
        descEn: "Path: Apr 2025 threatened 46% → Jul 2025 framework 20% (40% transshipment) → Feb 20, 2026 Supreme Court held IEEPA does not authorize tariffs; collection stopped Feb 24 and fell to 10% (Sec 122) → Jul 24, 2026 Sec 122's 150-day limit lapsed and USTR imposed Sec 301 rates on 60 partners under a forced-labour probe, Vietnam at 12.5%. The 40% transshipment penalty's survival is disputed across stages — defer to CBP enforcement. Impact: export manufacturing and industrial-park expansion cadence, hence housing demand from expats and local white-collar workers.",
        link: "https://www.vietnam-briefing.com/doing-business-guide/vietnam/taxation-and-accounting/vietnam-custom-duties-import-export-regulations"
      },
      {
        year: 2026,
        dateZh: "2026-09-30",
        dateEn: "Sep 30, 2026",
        tagZh: "供给",
        tagEn: "Supply",
        tagClass: "ok",
        titleZh: "第 303/NQ-CP 号决议：2026–2030 社会住房与租赁住房指标下达地方",
        titleEn: "Resolution 303/NQ-CP: 2026–2030 social & rental housing targets assigned to localities",
        descZh: "政府把 2026–2030 年社会住房、租赁住房建设指标分解到各省市，与土地供应、审批和考核挂钩。租赁住房首次作为独立类别单列，与《住房法》修订方向（住房分商业/租赁/公务/政策四类，优先发展租赁住房）一致。",
        descEn: "The Government allocated 2026–2030 social- and rental-housing targets to provinces and cities, tying them to land supply, approvals and performance reviews. Rental housing is listed as a standalone category for the first time, matching the draft Housing Law (commercial / rental / official / policy housing, with rental prioritised).",
        link: ""
      },
      {
        year: 2026,
        dateZh: "2026-10-07",
        dateEn: "Oct 7, 2026",
        tagZh: "总理令",
        tagEn: "Directive",
        tagClass: "warn",
        titleZh: "第 68/CD-TTg 号总理令：闲置房屋土地处置纳入负责人 KPI",
        titleEn: "Directive 68/CD-TTg: idle housing/land resolution folded into officials’ KPIs",
        descZh: "要求各地限期清理闲置、停滞的房屋与土地项目，处置结果纳入地方负责人年度考核；与政治局第 77-KL/TW 号结论、国会第 170/2024/QH15 与 29/2026/QH16 号决议一脉相承，目标是解冻项目、恢复施工而不是追溯既往。",
        descEn: "Localities must clear idle and stalled housing/land projects within set deadlines, with results counted in annual leadership assessments. It continues Politburo Conclusion 77-KL/TW and NA Resolutions 170/2024/QH15 and 29/2026/QH16 — the goal is unfreezing projects and restarting construction, not retroactive punishment.",
        link: ""
      },
      {
        year: 2026,
        dateZh: "2026-10-17",
        dateEn: "Oct 17, 2026",
        tagZh: "立法",
        tagEn: "Legislation",
        tagClass: "mid",
        titleZh: "第十六届国会第二次会议开幕：47 部草案，三部法拟 11/21 上午表决",
        titleEn: "16th National Assembly opens 2nd session: 47 drafts, three property laws set for a Nov 21 vote",
        descZh: "会期 10/17–11/14、11/20–21（备用 11/23），拟通过 43 部法律与决议。《土地法》《住房法》《房地产经营法》三部修订草案均安排在 11 月 21 日上午表决，表决前条款仍可能调整；住房法方向为分四类住房并优先发展租赁住房，土地法方向为对囤地按年递增收费、60 个月未使用即收回。",
        descEn: "Sitting 17 Oct–14 Nov and 20–21 Nov (23 Nov as backup), with 43 laws and resolutions expected to pass. The amended Land, Housing and Real Estate Business Laws are all scheduled for a vote on the morning of Nov 21; text may still change. The Housing Law splits housing into four categories and prioritises rental; the Land Law adds rising annual charges for hoarded land and recovery after 60 months of non-use.",
        link: "https://cn.nhandan.vn/article-post161404.html"
      },
      {
        year: 2026,
        dateZh: "2026-10-30",
        dateEn: "Oct 30, 2026",
        tagZh: "草案焦点",
        tagEn: "Draft focus",
        tagClass: "mid",
        titleZh: "三部法修订草案焦点：银行担保、有条件项目转让、合同转让电子登记",
        titleEn: "Draft-law flashpoints: bank guarantees, conditional project transfers, e-registration of contract transfers",
        descZh: "审议焦点：预售房款拟默认由银行提供付款担保；第 30 条「有条件项目转让」；第 37 条要求合同转让以电子数据方式强制登记。三条均以提高购房者资金安全与交易透明度为目标，最终条款以 11/21 表决文本为准。",
        descEn: "Key points under review: presale payments to be bank-guaranteed by default; Article 30 on conditional project transfers; Article 37 mandating electronic registration of contract transfers. All three aim at buyer payment safety and transaction transparency — final wording depends on the Nov 21 vote.",
        link: ""
      },
      {
        year: 2026,
        dateZh: "2026-10",
        dateEn: "Oct 2026",
        tagZh: "化解存量",
        tagEn: "Unfreezing",
        tagClass: "ok",
        titleZh: "第 147/2026/NĐ-CP 号法令：为第 29/2026/QH16 号决议提供实施细则",
        titleEn: "Decree 147/2026/ND-CP: implementing rules for Resolution 29/2026/QH16",
        descZh: "明确 2024 年《土地法》生效前的土地违法行为与长期停滞项目的适用对象、处置方式与办理程序，供地方解冻项目。落地进展：全国 2,035 个长期停滞项目中 1,985 个已化解（97.5%）；岘港列管 354 个项目与地块、已处理 206 个（58.2%），海防 249 个中化解 239 个。地方口径强调「解决困难但不合法化既往违规」。",
        descEn: "Sets scope, treatment and procedures for pre-2024 land violations and long-stalled projects so localities can unfreeze them. Progress: 1,985 of 2,035 stalled projects nationwide resolved (97.5%); Da Nang handled 206 of 354 listed projects/plots (58.2%), Hai Phong 239 of 249. Localities stress \"resolve difficulties without legitimising past violations\".",
        link: ""
      }
    ]
  },

  /* ---------- 十年房价追踪（2016–2026） ---------- */
  price10y: {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    fxUsdVnd: [22275, 22700, 22825, 23175, 23190, 23150, 23580, 24150, 24750, 25850, 26480],
    nationalVndM: [20, 22, 24, 26, 28, 31, 35, 40, 48, 60, 72],
    hcmcUsd: [1430, 1558, 1714, 1900, 2700, 3000, 3300, 3400, 3700, 3800, 4088],
    hanoiUsd: [1180, 1287, 1304, 1380, 1500, 1700, 1800, 2500, 3000, 3524, 4356],
    caliberZh: "口径说明：2016–2019 采用 CBRE/Savills 年度报告的「新盘平均要价」；2020 年起采用 Knight Frank/CBRE 季度一手均价年化——2020 年出现口径结构性上移（胡志明 +42%），跨段比较须谨慎。全国列为「含省级/二线市场的估算值」（建设部与 GSO 口径插值），用于看趋势，不用于交易定价。2026 年胡志明取 Knight Frank Q2 年化 $4,088（Q3 已升至 $4,210）。",
    caliberEn: "Caliber: 2016-19 use CBRE/Savills reported average primary asking prices; from 2020 Knight Frank/CBRE quarterly primary averages annualised — a structural step-up occurs at 2020 (HCMC +42%), so cross-segment comparison needs care. The national column is an estimate incl. provincial/secondary markets (MOC & GSO interpolation) for trend only, not for pricing. 2026 HCMC uses Knight Frank Q2 annualised $4,088 (Q3 rose to $4,210).",
    insightZh: "十年三个拐点：① 2015–2019 缓慢上行（胡志明 +10%/年，河内几乎横盘，河内 2018 年仅 +1%）；② 2020–2023 供应断档 + 债券危机，胡志明从 $1,900 冲到 $3,400，河内 2023 年因供应崩塌单年跳涨；③ 2024–2026 河内反超——2023 年初河内还比胡志明低 23%，2026 Q2 一手均价 $4,356 vs $4,088 首次反超，但 2026 Q2 起流动性回落、二手率先转跌，属于「价格高位的分化调整」而非趋势反转。",
    insightEn: "Three inflection points: ① 2015-19 slow grind (HCMC +10%/yr, Hanoi nearly flat at +1% in 2018); ② 2020-23 supply drought plus the bond crisis pushed HCMC from $1,900 to $3,400 while Hanoi jumped on collapsed supply; ③ 2024-26 Hanoi overtakes — 23% cheaper than HCMC in early 2023, Hanoi's 2026 Q2 primary $4,356 vs $4,088 is its first lead. Yet liquidity fell from 2026 Q2 and secondary prices turned down first — a high-level divergence, not a trend reversal.",
    sourceUrl: "https://www.knightfrank.com.vn"
  },

  /* ---------- 房产分档（外籍高端 / 本地中产 / 保障房） ---------- */
  segments: {
    noteZh: "三档口径：① 外籍/外派高端＝Grade A 及以上、外国人可购（受 30%/栋配额）；② 本地白领与中产普通商品房＝Grade B/C，越南籍为主，是城市真实负担所在；③ 社会保障房（NƠXH）＝国家给中低收入/工人的保障性住房，外籍不可购。",
    noteEn: "Three tiers: ① Expat/luxury = Grade A and above, foreigner-eligible (30%/building quota); ② Local white-collar & middle-class commercial housing = Grade B/C, mostly Vietnamese — where real affordability stress sits; ③ Social housing (NƠXH) = state-supported housing for lower-income/workers, foreigners excluded.",
    tiers: [
      {
        key: "luxury",
        cls: "ok",
        nameZh: "① 外籍 / 外派高端（Grade A 及以上）",
        nameEn: "① Expat / Luxury (Grade A+)",
        priceZh: "胡志明 $4,000–9,000/㎡ ｜ 河内 $3,500–7,000/㎡",
        priceEn: "HCMC $4,000-9,000/sqm | Hanoi $3,500-7,000/sqm",
        areaZh: "50–250 ㎡（1–4 房，顶层/复式更大）",
        areaEn: "50-250 sqm (1-4BR; penthouses/duplexes larger)",
        totalZh: "总价约 $25 万 – 200 万（胡志明守添/D1/D2 最贵）",
        totalEn: "c. US$0.25-2.0m total (Thu Thiem/D1/D2 priciest)",
        rentZh: "月租 $1,200–5,000；毛租金回报 3–5%（按当前市价）",
        rentEn: "US$1,200-5,000/month; 3-5% gross yield on current value",
        buyerZh: "外派高管、外籍长住、越南高净值、纯投资客；受 30%/栋配额与 50 年产权约束",
        buyerEn: "Expat executives, long-stay foreigners, Vietnamese HNWIs, investors; subject to the 30%/building quota and 50-yr tenure",
        projZh: "胡志明：Grand Marina Saigon、Empire City/Cove、The Global City、Masteri Thao Dien｜河内：Golden Westlake、D'Palais de Louis、Vinhomes Metropolis",
        projEn: "HCMC: Grand Marina Saigon, Empire City/Cove, The Global City, Masteri Thao Dien | Hanoi: Golden Westlake, D'Palais de Louis, Vinhomes Metropolis"
      },
      {
        key: "mid",
        cls: "mid",
        nameZh: "② 本地白领 / 中产 普通商品房（Grade B–C）",
        nameEn: "② Local white-collar / middle-class (Grade B-C)",
        priceZh: "胡志明 4,700 万–8,300 万盾/㎡（$1,800–3,200）｜河内 5,200 万–9,100 万盾/㎡（$2,000–3,500）",
        priceEn: "HCMC VND47-83m/sqm ($1,800-3,200) | Hanoi VND52-91m/sqm ($2,000-3,500)",
        areaZh: "45–75 ㎡（2 房为主，少量 1 房/3 房）",
        areaEn: "45-75 sqm (mostly 2BR, some 1/3BR)",
        totalZh: "总价约 25 亿 – 60 亿盾（$9.6 万 – 23 万）",
        totalEn: "c. VND2.5-6.0bn (US$96k-230k) total",
        rentZh: "月租 800 万 – 2,000 万盾；毛租金回报 2.5–4%",
        rentEn: "VND8-20m/month; 2.5-4% gross yield",
        buyerZh: "本地白领（月入 1,500 万–4,000 万盾）、双职工家庭、教师医生公务员；购需依赖 20–30 年按揭，利率上行对这一档杀伤最大",
        buyerEn: "Local white-collar (VND15-40m/month), dual-income families, teachers/doctors/civil servants; rely on 20-30yr mortgages — most rate-sensitive tier",
        projZh: "胡志明：Vinhomes Grand Park（守德）、The Horizon/Midtown（7区）、平新/新富郡中端盘｜河内：河东、南慈廉、黄梅、龙编",
        projEn: "HCMC: Vinhomes Grand Park (Thu Duc), The Horizon/Midtown (D7), mid-tier in Binh Tan/Tan Phu | Hanoi: Ha Dong, Nam Tu Liem, Hoang Mai, Long Bien"
      },
      {
        key: "social",
        cls: "warn",
        nameZh: "③ 社会保障房 NƠXH（国家保障 · 外籍不可购）",
        nameEn: "③ Social housing NƠXH (state-supported · foreigners excluded)",
        priceZh: "河内在售 1,980 万–2,900 万盾/㎡（含 VAT）｜胡志明 2,450 万–3,070 万盾/㎡｜政府 2026 全国目标均价 2,000 万–2,500 万盾/㎡",
        priceEn: "Hanoi on-sale VND19.8-29m/sqm (VAT incl.) | HCMC VND24.5-30.7m/sqm | gov't 2026 national target VND20-25m/sqm",
        areaZh: "28–70 ㎡（30–60 ㎡为主力）",
        areaEn: "28-70 sqm (30-60 sqm core)",
        totalZh: "总价约 9.9 亿 – 17.5 亿盾（$3.8 万 – 6.7 万）",
        totalEn: "c. VND0.99-1.75bn (US$38k-67k) total",
        rentZh: "租/租购：河内玉回约 21.6 万盾/㎡·月｜胡志明 Long Truong 约 16.2 万盾/㎡·月（含 5% VAT）",
        rentEn: "Rent/rent-to-buy: Hanoi Ngoc Hoi c. VND216k/sqm/mo | HCMC Long Truong c. VND162k/sqm/mo (5% VAT incl.)",
        buyerZh: "低收入家庭、工人、公务员、武装力量（须满足收入/户籍/社保条件，且名下无房）；与商品房价差已达 3–5 倍",
        buyerEn: "Low-income households, factory workers, civil servants, armed forces (income/residence/insurance criteria, no prior home); now a 3-5x gap vs commercial housing",
        projZh: "河内：金花 CT2（1,980 万/㎡）、河定新城（2,500 万/㎡）、新立（2,900 万/㎡）、玉回地块1（2,474 万/㎡）｜胡志明：Long Truong（2,450 万/㎡）、HUD 守德 Hiệp Bình（约 3,070 万/㎡）",
        projEn: "Hanoi: Kim Hoa CT2 (19.8m), Ha Dinh (25m), Tan Lap (29m), Ngoc Hoi Lot 1 (24.74m) | HCMC: Long Truong (24.5m), HUD Thu Duc - Hiep Binh (c. 30.7m)"
      }
    ],
    affordabilityZh: "负担比：2026 年胡志明普通两房（约 35 亿盾）≈ 家庭年可支配收入的 <b>20–26 倍</b>，河内约 22–28 倍——属全球最高区间。参照本地白领本科及以上工资口径：应届 1,000 万–1,800 万盾/月、5–10 年经验 3,000 万–6,500 万盾/月，双职工家庭不吃不喝也需 8–15 年才能全款买下普通两房；这也是保障房与「低价商品房」政策被强力推进的直接原因。",
    affordabilityEn: "Affordability: a 2026 Hanoi/HCMC ordinary 2-bed (c. VND3.5bn) equals <b>20-28x</b> annual household disposable income — among the world's highest. Against local graduate pay (fresh VND10-18m/month; 5-10 yrs experience VND30-65m), a dual-income household needs 8-15 years of full income to buy outright — precisely why social and 'affordable commercial' housing is being pushed hard.",
    socialNoteZh: "保障房政策链：2023 年 120 万亿盾优惠信贷包（Nghị quyết 33）→ 2025-05-29 国会决议 201/2025/QH15（特殊机制试点、国家住房发展基金、「绿色通道」并行审批，目标削减 ≥50% 手续时间与成本）→ 2025-10-01 Nghị định 192/2025/NĐ-CP 生效。全国在建保障房 737 个项目、逾 70.1 万套（约完成 100 万套目标的 70%）；2026 年目标投放 16 万套、均价 2,000 万–2,500 万盾/㎡。河内 2026–2030 目标 12 万套（规划 148 个项目、超 13.5 万套），2035 年累计约 50 万套。",
    socialNoteEn: "Social-housing chain: 2023 VND120tn credit package (Resolution 33) → May 29, 2025 NA Resolution 201/2025/QH15 (pilot mechanisms, National Housing Development Fund, parallel 'green channel' approval cutting ≥50% of time/cost) → Decree 192/2025/NĐ-CP on Oct 1, 2025. Nationwide: 737 projects / 701k units under development (~70% of the 1m target); 2026 target 160k units at VND20-25m/sqm. Hanoi targets 120k units for 2026-30 (148 projects, >135k units) and ~500k by 2035.",
    sourcesZh: "建设部 2026 Q2 市场报告 · 河内/胡志明建设厅公示价 · Nghị định 192/2025 · Nghị quyết 201/2025 · VietnamNet / Tien Phong",
    sourcesEn: "MOC 2026 Q2 market report · Hanoi & HCMC Dept of Construction published prices · Decree 192/2025 · Resolution 201/2025 · VietnamNet / Tien Phong"
  },

  /* ---------- 外籍购房对比：越南（胡志明+河内）vs 中国 ---------- */
  foreignCompare: {
    noteZh: "只比较两个市场的「核心城市」：越南＝胡志明市 + 河内；中国＝内地限购一/二线城市口径（北上广深等限购城市对外籍实际从严，非限购城市相对宽松）。结论一句话：越南「买得到但产权有期限」，中国「产权更稳但资格门槛更高」。",
    noteEn: "Compares core cities only: Vietnam = Ho Chi Minh City + Hanoi; China = mainland tier-1/2 (restricted cities such as Beijing/Shanghai/GZ/SZ apply foreign rules strictly in practice; non-restricted cities are looser). One line: Vietnam is 'easier to buy but tenure-limited'; China is 'stronger tenure but harder to qualify'.",
    rows: [
      {
        dimZh: "开放时间",
        dimEn: "Opened",
        vnZh: "2015-07-01《住房法 2014》首次开放；2024-08-01《住房法 2023》延续",
        vnEn: "Jul 1, 2015 (Housing Law 2014); continued by Housing Law 2023 (Aug 1, 2024)",
        cnZh: "2006 年《关于规范房地产市场外资准入和管理的意见》（171 号文）；2015 年建房〔2015〕122 号放宽",
        cnEn: "2006 circular (No.171) first regulated; relaxed by 2015 circular No.122"
      },
      {
        dimZh: "购房资格",
        dimEn: "Eligibility",
        vnZh: "持合法入境签证/免签入境即可，<b>无居留年限、无社保要求</b>",
        vnEn: "Valid entry visa/visa exemption suffices — <b>no residency period, no social-insurance requirement</b>",
        cnZh: "境外个人须「在境内工作/学习」（2015 后取消满 1 年限制），但仍受城市限购与社保/个税年限约束，实务门槛高",
        cnEn: "Foreign individuals must work/study in China (1-yr rule removed in 2015), but city purchase limits and social-insurance/tax years still bind — high practical bar"
      },
      {
        dimZh: "套数 / 配额",
        dimEn: "Units / Quota",
        vnZh: "<b>无个人套数限制</b>，但受项目配额：公寓 ≤30%/栋、别墅项目 ≤250 套",
        vnEn: "<b>No personal unit cap</b>, but project quotas: ≤30% per apartment building, ≤250 units per villa project",
        cnZh: "原则限 <b>一套自住</b>住房（实名制）；境外机构只能买办公/商业用房",
        cnEn: "In principle <b>one self-occupied home</b> (real-name system); foreign entities may only buy office/commercial"
      },
      {
        dimZh: "产权期限",
        dimEn: "Tenure",
        vnZh: "<b>50 年</b>（自发证起），到期可按规定续期；土地为国家所有",
        vnEn: "<b>50 years</b> from issuance, renewable per rules; land is state-owned",
        cnZh: "房屋所有权无期限 + 住宅用地 <b>70 年</b>使用权，到期自动续期（《民法典》第 359 条）",
        cnEn: "Building ownership unlimited + <b>70-year</b> residential land-use right, auto-renewed (Civil Code Art.359)"
      },
      {
        dimZh: "权证",
        dimEn: "Title",
        vnZh: "粉皮书 Sổ hồng（交付 + 付清房款后发单元证，载明 50 年期）",
        vnEn: "Pink Book (Sổ hồng) issued per unit after handover + full payment, stating the 50-yr term",
        cnZh: "不动产权证书（房地一体，房屋所有权 + 土地使用权）",
        cnEn: "Unified Real Property Certificate (building ownership + land-use right)"
      },
      {
        dimZh: "按揭贷款",
        dimEn: "Mortgage",
        vnZh: "外资行（HSBC 等）官方多限越南籍/越侨，外籍个案审批、多数<b>全款</b>或需 30–50% 首付；本地行对越籍配偶可贷",
        vnEn: "Foreign banks officially serve Vietnamese/Viet Kieu; expats case-by-case, <b>mostly cash</b> or 30-50% down; local banks lend to Vietnamese spouses",
        cnZh: "外籍可申请境内按揭，需境内收入/纳税证明；首付比例参照本地居民或更高",
        cnEn: "Foreigners may apply onshore with local income/tax proof; down-payment at or above local ratios"
      },
      {
        dimZh: "税费",
        dimEn: "Taxes",
        vnZh: "VAT 10%（通常含在房价）+ 登记费 0.5% + 维护费 2%；出售按成交价 PIT 2%；<b>无年度房产税</b>",
        vnEn: "VAT 10% (usually built into price) + 0.5% registration + 2% maintenance; 2% PIT on resale; <b>no annual property tax</b>",
        cnZh: "契税 1–3%；增值税满 2 年免；个税「满五唯一」免；<b>无普遍年度房产税</b>（沪渝试点）",
        cnEn: "Deed tax 1-3%; VAT exempt after 2 yrs; personal income tax exempt if sole home held 5 yrs; <b>no general annual property tax</b> (Shanghai/Chongqing pilots)"
      },
      {
        dimZh: "资金进出",
        dimEn: "Funds",
        vnZh: "房款须以<b>越南盾经境内账户</b>支付；售房款汇出需完税凭证，首笔入金水单务必留存",
        vnEn: "Payment must be in <b>VND via onshore accounts</b>; repatriation of sale proceeds needs tax proof — keep the first inbound remittance slip",
        cnZh: "外汇管制：购房款须境外汇入并结汇；出售资金汇出需完税证明",
        cnEn: "FX control: funds must be remitted in and converted; repatriation needs tax clearance"
      },
      {
        dimZh: "能否买土地/别墅",
        dimEn: "Land / villas",
        vnZh: "不能买土地；别墅仅在获批项目中按 ≤250 套配额购买",
        vnEn: "No land ownership; villas only within approved projects under the 250-unit cap",
        cnZh: "不能买农地/宅基地；城市商品住宅（含别墅）在资格符合时可购",
        cnEn: "No farmland/rural homestead; urban commodity housing (incl. villas) purchasable if eligible"
      }
    ],
    verdictZh: "对海外买家的实际差异：越南的门槛在「资格端」几乎为零（签证即可买），代价是 50 年产权 + 项目配额 + 基本拿不到按揭；中国的门槛在「资格端」很高（限购/社保/自住一套），但一旦买到，70 年自动续期 + 完整不动产权 + 可申请按揭，产权确定性更强。资产配置上：越南更适合「现金流型 · 租金回报 + 中期持有」，中国更适合「资格具备后的长期持有」。",
    verdictEn: "Practical difference for overseas buyers: Vietnam's barrier sits at eligibility (a visa suffices) — paid for with 50-yr tenure, project quotas and near-zero financing; China's barrier is high at eligibility (purchase limits/social insurance/one self-occupied home) but once bought you get auto-renewing 70-yr land rights, full title and mortgage access. Allocation view: Vietnam suits 'yield + medium-term hold'; China suits 'long hold once qualified'.",
    timeline: {
      years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
      fdiRegistered: [24.5, 36, 35.5, 38, 28.5, 31.2, 27.7, 39.4, 38.2, 38.5, 39.2],
      fdiDisbursed: [15.8, 17.5, 19.1, 20.4, 20, 19.7, 22.4, 23.2, 25.4, 27.6, 29],
      fxUsdVnd: [22275, 22700, 22825, 23175, 23190, 23150, 23580, 24150, 24750, 25850, 26480],
      hcmcUsd: [1430, 1558, 1714, 1900, 2700, 3000, 3300, 3400, 3700, 3800, 4088],
      hanoiUsd: [1180, 1287, 1304, 1380, 1500, 1700, 1800, 2500, 3000, 3524, 4356],
      tariffPct: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 12.5],
      noteZh: "四线联动读法：① <b>FDI 到位</b>（柱）逐年抬升，2025 年 $27.6bn 创历史新高 → 产业工人与外派住房需求；② <b>USD/VND</b>（右轴）十年累计贬约 19%，2022 与 2025 两个跳贬窗口恰好对应外资观望与利率上行；③ <b>政策引导</b>＝2015 开放 → 2022 债券收紧 → 2024-08 三部法 → 2025 保障房机制；④ <b>国际关税</b>＝2025-04 威胁 46% → 2025-07 框架 20%（转口 40%）→ 2026-02 IEEPA 被推翻回落 10% → 2026-07-24 Section 301 定档 12.5%。关税反复改变的是制造业扩产节奏，进而传导到园区周边住宅与外派租赁需求。",
      noteEn: "How to read the four lines: ① <b>Disbursed FDI</b> (bars) grinds higher, a record US$27.6bn in 2025, feeding worker & expat housing demand; ② <b>USD/VND</b> (right axis) lost ~19% over ten years, with the 2022 and 2025 step-devaluations matching windows of foreign hesitation and rising rates; ③ <b>Policy</b> = 2015 opening → 2022 bond squeeze → Aug 2024 three laws → 2025 social-housing mechanisms; ④ <b>Tariffs</b> = Apr 2025 threatened 46% → Jul 2025 framework 20% (40% transshipment) → Feb 2026 IEEPA struck down, back to 10% → Jul 24, 2026 Section 301 at 12.5%. Tariff churn shifts manufacturing expansion cadence, which transmits to housing around industrial parks and expat leasing demand.",
      yearly: {
        "2016": {
          fdiZh: "注册 $24.5bn / 到位 $15.8bn；CPTPP 已签署待生效",
          fdiEn: "Registered $24.5bn / disbursed $15.8bn; CPTPP signed, pending",
          fxZh: "22,275（+0.6%），全年平稳",
          fxEn: "22,275 (+0.6%), stable year",
          polZh: "投资法/企业法 7-01 生效，外资负面清单制",
          polEn: "Investment & Enterprise Laws effective Jul 1; negative list",
          tarZh: "无关税冲击；越南享美国普惠制(GSP)",
          tarEn: "No tariff shock; Vietnam enjoyed US GSP"
        },
        "2017": {
          fdiZh: "注册 $36.0bn（+47%）/ 到位 $17.5bn，三星产业链加码",
          fdiEn: "Registered $36.0bn (+47%) / disbursed $17.5bn; Samsung supply chain scaled up",
          fxZh: "22,700（+1.9%）",
          fxEn: "22,700 (+1.9%)",
          polZh: "76/2015 细则落地，外籍购房手续常规化",
          polEn: "Decree 76/2015 rules operationalised foreign purchases",
          tarZh: "美国退出 TPP，但双边关税未动",
          tarEn: "US left TPP, but bilateral tariffs unchanged"
        },
        "2018": {
          fdiZh: "注册 $35.5bn / 到位 $19.1bn；胡志明均价 $1,714、河内 $1,304",
          fdiEn: "Registered $35.5bn / disbursed $19.1bn; HCMC $1,714, Hanoi $1,304",
          fxZh: "22,825（+0.6%）",
          fxEn: "22,825 (+0.6%)",
          polZh: "CPTPP 01-14 对越生效；预售与外资准入细则完善",
          polEn: "CPTPP in force Jan 14; pre-sale & foreign-access rules refined",
          tarZh: "中美贸易战启动，越南开始承接转单红利",
          tarEn: "US-China trade war began; Vietnam started absorbing diverted orders"
        },
        "2019": {
          fdiZh: "注册 $38.0bn / 到位 $20.4bn（首破 200 亿）",
          fdiEn: "Registered $38.0bn / disbursed $20.4bn (first >$20bn)",
          fxZh: "23,175（+1.5%）",
          fxEn: "23,175 (+1.5%)",
          polZh: "政治局 50-NQ/TW（08-20）：外资由量转质",
          polEn: "Politburo Res.50-NQ/TW (Aug 20): FDI quality over volume",
          tarZh: "转口红利延续；美方开始关注越南转口",
          tarEn: "Diversion dividend continued; US began watching transshipment"
        },
        "2020": {
          fdiZh: "注册 $28.5bn（-25%）/ 到位 $20.0bn（-3%），疫情下仍稳健",
          fdiEn: "Registered $28.5bn (-25%) / disbursed $20.0bn (-3%), resilient through COVID",
          fxZh: "23,190（+0.1%），SBV 干预维稳",
          fxEn: "23,190 (+0.1%), SBV intervention held the line",
          polZh: "企业法/投资法 2020 通过（2021 生效）；价格口径切换年",
          polEn: "Enterprise & Investment Laws 2020 passed (effective 2021); price-caliber switch year",
          tarZh: "疫情主导，关税非主要变量",
          tarEn: "COVID dominated; tariffs not a main variable"
        },
        "2021": {
          fdiZh: "注册 $31.2bn / 到位 $19.7bn（-1%），疫情封锁拖累到位",
          fdiEn: "Registered $31.2bn / disbursed $19.7bn (-1%), lockdowns hit disbursement",
          fxZh: "23,150（-0.2%），十年唯一升值年",
          fxEn: "23,150 (-0.2%), the only appreciating year of the decade",
          polZh: "148/2020 生效（02-15）：开发商门槛提高，供应收缩起点",
          polEn: "Decree 148/2020 (Feb 15): higher developer bar, start of supply contraction",
          tarZh: "供应链外溢加速，越南制造业景气高位",
          tarEn: "Supply-chain spillover accelerated; manufacturing boom"
        },
        "2022": {
          fdiZh: "注册 $27.7bn / 到位 $22.4bn（+13.5%）创当时新高",
          fdiEn: "Registered $27.7bn / disbursed $22.4bn (+13.5%), then-record",
          fxZh: "23,580（+1.9%），Q4 单季急贬引发外资观望",
          fxEn: "23,580 (+1.9%), Q4 spike triggered foreign caution",
          polZh: "<b>65/2022 债券收紧（09-16）</b>→ 万盛发/SCB 案，房企爆雷",
          polEn: "<b>Decree 65/2022 bond squeeze (Sep 16)</b> → Van Thinh Phat/SCB fallout",
          tarZh: "无关税事件；出口创新高",
          tarEn: "No tariff event; exports hit records"
        },
        "2023": {
          fdiZh: "注册 $39.4bn（+45%）/ 到位 $23.2bn",
          fdiEn: "Registered $39.4bn (+45%) / disbursed $23.2bn",
          fxZh: "24,150（+2.4%）",
          fxEn: "24,150 (+2.4%)",
          polZh: "08/2023 债券展期 + 33/NQ-CP 120 万亿保障房信贷；三部法通过",
          polEn: "Decree 08/2023 rollovers + Res.33 VND120tn social-housing credit; three laws passed",
          tarZh: "美方启动对越市场经济地位与转口审议",
          tarEn: "US opened market-economy & transshipment reviews"
        },
        "2024": {
          fdiZh: "注册 $38.2bn / 到位 $25.35bn（+9.4%）历史新高",
          fdiEn: "Registered $38.2bn / disbursed $25.35bn (+9.4%), then record",
          fxZh: "24,750（+2.5%）",
          fxEn: "24,750 (+2.5%)",
          polZh: "<b>08-01 三部法提前生效</b>：取消地价框架，地价表上调",
          polEn: "<b>Aug 1: three laws take effect early</b> — land-price framework scrapped, tables raised",
          tarZh: "大选年，关税预期升温",
          tarEn: "US election year; tariff expectations built"
        },
        "2025": {
          fdiZh: "注册约 $38.5bn / 到位 <b>$27.6bn（历史新高）</b>",
          fdiEn: "Registered c.$38.5bn / disbursed <b>$27.6bn (record)</b>",
          fxZh: "25,850（+4.4%），十年最大年度贬幅",
          fxEn: "25,850 (+4.4%), largest annual depreciation of the decade",
          polZh: "NQ 201/2025 保障房机制（05-29）+ NĐ 192/2025（10-01）",
          polEn: "Res.201/2025 social housing (May 29) + Decree 192/2025 (Oct 1)",
          tarZh: "<b>04 威胁 46% → 07 双边框架 20%（转口 40%）</b>",
          tarEn: "<b>Apr: 46% threatened → Jul: 20% framework (40% transshipment)</b>"
        },
        "2026": {
          fdiZh: "到位约 $29.0bn（1–8 月 $15.4bn，+8.8%）——制造业占 81.6%，房地产占 8.0%",
          fdiEn: "Disbursed c.$29.0bn (Jan-Aug $15.4bn, +8.8%) — manufacturing 81.6%, real estate 8.0%",
          fxZh: "26,480→现约 26,090，年内<b>升值约 1.1%</b>（亚洲最稳之一）",
          fxEn: "26,480 → c.26,090; <b>+1.1% appreciation</b> YTD, among Asia's most stable",
          polZh: "01-01 地价表年度化；NQ 254 化解土地法堵点；市场进入分化筛选",
          polEn: "Jan 1: annual land price tables; Res.254 unblocks Land Law; market enters filtering phase",
          tarZh: "<b>02-20 IEEPA 被推翻 → 停征回落 10% → 07-24 Section 301 定档 12.5%</b>",
          tarEn: "<b>Feb 20 IEEPA struck down → collection stops, back to 10% → Jul 24 Section 301 at 12.5%</b>"
        }
      },
      sourceZh: "外资局（财政部）· GSO · SBV · USTR/CBP · Vietnam-Briefing · Knight Frank · 建设部",
      sourceEn: "Foreign Investment Agency (MoF) · GSO · SBV · USTR/CBP · Vietnam-Briefing · Knight Frank · MOC"
    }
  },

  /* ---------- 合同白皮书 ---------- */
  whitepaper: {
    file: "docs/vietnam-property-contract-whitepaper.pdf",
    descZh: "《外籍购房合同范本与签约白皮书》（中英双语 PDF）：SPA/定金/LTRA 核心条款、付款保护、风险清单与签约 Checklist。",
    descEn: "Contract Templates & Signing Whitepaper (bilingual PDF): key SPA/deposit/LTRA clauses, payment protections, risk checklist."
  },
  metroProgressNoteZh: "进度口径：已通车=100%；在建线按 MAUR（胡志明市城市铁路管理局）2026-10-22 记者会披露的「站点开工数 / 资金拨付 / 主体结构完成度」折算为形象进度，属估算值，非官方工程量百分比。时间差按页面数据日期与预计通车月份计算。",
  metroProgressNoteEn: "Progress basis: operating = 100%; lines under construction are estimated from MAUR disclosures on 22 Oct 2026 (stations started / capital disbursed / structural completion) — an indicative estimate, not an official work-volume percentage. Time gap is computed from the page data date to the expected opening month.",
  metroDiagramNoteZh: "线路示意图（非按比例）：横向为线路走向，圆点为已命名站点，虚线=在建/待开工，灰线为换乘连接。仅用于快速识别线网结构，实际走向以官方规划图为准。",
  metroDiagramNoteEn: "Schematic diagram (not to scale): each row is one line, dots are named stations, dashed = under construction / pending, grey links are interchanges. For quick network orientation only — refer to official alignment maps for exact routes.",
  loanRateTrend: {
    asOf: "2026-11-10",
    startLabelZh: "2026-01",
    months: [
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05",
      "2026-06",
      "2026-07",
      "2026-08",
      "2026-09",
      "2026-10",
      "2026-11"
    ],
    fixed: [9.5, 9.5, 9.6, 9.6, 9.7, 9.75, 9.85, 10, 10.1, 10.3, 10.3],
    floating: [13, 13, 13.1, 13.4, 13.7, 14, 13.9, 14, 14.1, 14.3, 14.4],
    fixedLabelZh: "优惠期固定利率（首年，%/年）",
    fixedLabelEn: "Teaser fixed rate (1st year, %/yr)",
    floatLabelZh: "优惠期后浮动利率（%/年）",
    floatLabelEn: "Post-teaser floating rate (%/yr)",
    basisZh: "口径：季度为权威机构区间的中值（Q1 浮动 12–14%、Q2–Q3 浮动 13–15%、10 月 13–15%/个别 16%；Q2 优惠 8.5–11%、Q3 前 12 个月固定 8.5–11.5%），月度点为季度锚点之间的线性插值，非逐月实测挂牌价。曲线用于看趋势方向，不作为报价依据。",
    basisEn: "Method: quarterly anchors are mid-points of authoritative ranges (Q1 floating 12–14%; Q2–Q3 floating 13–15%; Oct 13–15% with some at 16%; Q2 teaser 8.5–11%; Q3 first-12-month fixed 8.5–11.5%). Monthly points are linear interpolation between quarterly anchors, not month-by-month board rates. Use for direction, not for quoting.",
    events: [
      {
        date: "2026-06",
        textZh: "国家银行（SBV）6 月口径：新发放+存量一般贷款平均 8.1–10.5%/年；上半年房贷普遍 12–14%/年。",
        textEn: "SBV June: average general lending rate 8.1–10.5%/yr; H1 mortgages commonly 12–14%/yr."
      },
      {
        date: "2026-08",
        textZh: "主要银行平均优惠固定利率升至约 10.9%/年；SBV 8 月平均贷款利率 8.4–10.7%（环比 +0.2pp，同比约 +3pp）。",
        textEn: "Average teaser fixed rate at major banks rose to ~10.9%/yr; SBV August average lending rate 8.4–10.7% (+0.2pp MoM, ~+3pp YoY)."
      },
      {
        date: "2026-09",
        textZh: "DXS-FERI 三季度：房地产贷款前 12 个月固定 8.5–11.5%，优惠期后浮动升至 13–15%（较上半年再上一档）。",
        textEn: "DXS-FERI Q3: first-12-month fixed 8.5–11.5%, post-teaser floating 13–15% — one notch above H1."
      },
      {
        date: "2026-10",
        textZh: "商业银行购房贷 11–14%、优惠期后浮动 13–15%、个别 16%；10/27 定向优惠包落地（Vietcombank 2 万亿盾额度较常规低 1pp、BIDV 3 万亿盾包 12 个月固定 9.5%）。",
        textEn: "Commercial banks: home loans 11–14%, post-teaser floating 13–15%, some 16%. On 27 Oct targeted packages landed (Vietcombank VND 2 tn quota at 1pp below normal; BIDV VND 3 tn package, 12-month fixed 9.5%)."
      },
      {
        date: "2026-11",
        textZh: "DXS-FERI 预测：最可行情景下 2026 年底浮动贷款利率仍为 11–13%（尚未落地）；11/1 起 12 个月期定存挂牌多数降至 7% 以下，但存款端降幅被促销加价抵消。11/9 复核：DXS-FERI 实测（截至 9 月）购房优惠利率 9.8–11.5%（前 12 个月）、其后升至 13–16%；DKRA 记录 Q3 均值 9–12%、浮动 13–15%；BIDV 首席经济学家艮文力指出房地产信贷约占全系统余额 25%，截至 9 月底信贷总余额与存款之差约 200 万亿盾，继续降息空间受资金来源成本与流动性约束。11/10 复核：46/46 家商业银行已完成 6 个月以上定存下调，SBV 口径新发生贷款均息较 10 月中旬 -0.2~0.5pp，短期贷款 8–9%、中期 9–10%，但购房贷未同步跟进、仍按 DXS-FERI 9.8–11.5%/浮动 13–16% 执行。",
        textEn: "DXS-FERI forecast: in the most feasible scenario year-end floating lending stays 11–13% (not yet realised). From 1 Nov most 12-month deposit boards fell below 7%, though promotional top-ups offset the cut. As of 10 Nov all 46 commercial banks had completed the cut on 6-month-plus deposits, with SBV data showing new-lending averages down 0.2-0.5pp from mid-October (short-term 8-9%, medium-term 9-10%), but mortgage pricing has not followed and still runs at 9.8-11.5% teaser / 13-16% floating."
      }
    ]
  },
  stalledStats: {
    asOf: "2026-11-02",
    items: [
      {
        labelZh: "全国仍有困难待处理项目",
        labelEn: "Nationwide projects still facing obstacles",
        value: "约 5,012 个",
        valueEn: "~5,012",
        srcZh: "建设部 2026 Q3 报告（27/34 个地方上报）",
        srcEn: "Ministry of Construction, Q3 2026 (27 of 34 localities reporting)"
      },
      {
        labelZh: "全国积压项目 / 涉及资金",
        labelEn: "Nationwide backlog / capital tied up",
        value: "约 4,500 个 / 逾 300 万亿盾",
        valueEn: "~4,500 / >VND 3,000 tn",
        srcZh: "2026-08 官方口径；已化解 1,000 余个、释放约 80 万亿盾",
        srcEn: "Aug 2026 official; 1,000+ resolved, ~VND 800 tn released"
      },
      {
        labelZh: "胡志明市停滞项目总数",
        labelEn: "HCMC stalled projects total",
        value: "838 个",
        valueEn: "838",
        srcZh: "其中中央权限 54 个、地方权限 784 个",
        srcEn: "54 under central authority, 784 under local authority"
      },
      {
        labelZh: "胡志明市已解决 / 基本解决",
        labelEn: "HCMC resolved / largely resolved",
        value: "417 / 393 个",
        valueEn: "417 / 393",
        srcZh: "仅 28 个因跨法域问题仍在审查；释放逾 206 万亿盾投资、约 1.7 万公顷土地",
        srcEn: "Only 28 still under review for cross-regime issues; >VND 206 tn investment and ~17,000 ha unlocked"
      },
      {
        labelZh: "三季度库存（27 个地方上报）",
        labelEn: "Q3 inventory (27 localities)",
        value: "约 51,950 套/地块",
        valueEn: "~51,950 units/plots",
        srcZh: "高于上一季度",
        srcEn: "Higher than the previous quarter"
      },
      {
        labelZh: "2026 年符合未来销售条件",
        labelEn: "Cleared for future sale in 2026",
        value: "37 个楼盘 · 21,165 套",
        valueEn: "37 projects · 21,165 units",
        srcZh: "胡志明市建设厅；较 2025 年全年（26 个 / 9,075 套）增长 133%",
        srcEn: "HCMC Dept. of Construction; +133% vs full-year 2025 (26 / 9,075)"
      }
    ],
    noteZh: "口径说明：以上为建设部 / 胡志明市人民委员会 / 主流媒体的公开统计，统计时点与「困难」定义各口径略有差异，跨源数字不可直接相加。",
    noteEn: "Note: figures come from the Ministry of Construction, the HCMC People's Committee and mainstream media; counting dates and the definition of \"stalled\" differ slightly across sources, so numbers are not directly additive."
  },
  rentTrend: {
    asOfZh: "租金指数截至 2026 Q3（2026-11 整理）· 月租现值为本页租金行情表 2026-10 口径",
    asOfEn: "Rent index through Q3 2026 (compiled Nov 2026); current monthly rents per this page rental table (Oct 2026 basis)",
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    unitZh: "美元/㎡·月（净使用面积 · 外籍高端片区）",
    unitEn: "USD/sqm/month (net usable area · prime expat clusters)",
    series: [
      {
        key: "d1",
        nameZh: "胡志明 · 第1区 CBD 核心",
        nameEn: "HCMC · District 1 CBD",
        nameVi: "TP.HCM · Quận 1 lõi CBD",
        values: [26.5, 28, 29.8, 32, 34.2, 35.8],
        est: false,
        color: "red"
      },
      {
        key: "thuThiem",
        nameZh: "胡志明 · 守添滨水",
        nameEn: "HCMC · Thu Thiem waterfront",
        nameVi: "TP.HCM · Thủ Thiêm ven sông",
        values: [23, 24.8, 26.5, 28.5, 30.8, 32.4],
        est: false,
        color: "blue"
      },
      {
        key: "thaoDien",
        nameZh: "胡志明 · 草田/安富",
        nameEn: "HCMC · Thao Dien / An Phu",
        nameVi: "TP.HCM · Thảo Điền / An Phú",
        values: [17.8, 18.6, 19.5, 20.8, 22, 22.8],
        est: false,
        color: "teal"
      },
      {
        key: "d7",
        nameZh: "胡志明 · 第7区 富美兴",
        nameEn: "HCMC · District 7 Phu My Hung",
        nameVi: "TP.HCM · Quận 7 Phú Mỹ Hưng",
        values: [13.5, 14.1, 14.8, 15.6, 16.4, 17],
        est: false,
        color: "green"
      },
      {
        key: "hcmcAvg",
        nameZh: "胡志明 · 高端片区均值",
        nameEn: "HCMC · prime average",
        nameVi: "TP.HCM · trung bình cao cấp",
        values: [20.05, 21.2, 22.47, 23.95, 25.47, 26.55],
        est: false,
        color: "gold"
      },
      {
        key: "hanoi",
        nameZh: "河内 · 高端片区均值（估算）",
        nameEn: "Hanoi · prime average (est.)",
        nameVi: "Hà Nội · trung bình cao cấp (ước)",
        values: [15.9, 16.7, 17.5, 18.9, 20, 20.8],
        est: true,
        color: "orange"
      }
    ],
    events: [
      {
        year: 2021,
        textZh: "疫情年：外籍撤离、短租停摆，胡志明服务式公寓租金同比 -2%（Savills Q1 口径），本序列自该年低点起算。",
        textEn: "Pandemic year: expat exodus and no short-stay demand; HCMC serviced rents -2% YoY (Savills Q1), the low base of this series.",
        textVi: "Năm dịch: người nước ngoài rời đi, HCMC cho thuê giảm 2% (Savills Q1) — mức nền của chuỗi."
      },
      {
        year: 2022,
        textZh: "边境重开、外籍回流，胡志明高端片区同比 +5.7%。",
        textEn: "Borders reopened and expats returned; HCMC prime +5.7% YoY.",
        textVi: "Mở cửa lại, TP.HCM cao cấp +5,7%."
      },
      {
        year: 2023,
        textZh: "制造业与写字楼外资持续进入，租金 +6.0%；同期房价涨幅远超租金，毛回报率由约 4.0% 降至 3.4~3.8%。",
        textEn: "FDI into manufacturing and offices continued; rents +6.0% while sale prices far outran rents, compressing gross yields from ~4.0% to 3.4–3.8%.",
        textVi: "Vốn FDI tiếp tục vào, giá thuê +6,0%; lợi suất gộp giảm từ ~4,0% xuống 3,4–3,8%."
      },
      {
        year: 2024,
        textZh: "交付集中入市，租金 +6.6%；河内房价暴涨带动业主租金预期上行。",
        textEn: "A wave of handovers hit the market; rents +6.6%, and Hanoi price surge lifted landlord expectations.",
        textVi: "Nhiều dự án bàn giao, giá thuê +6,6%; giá bán Hà Nội tăng mạnh kéo kỳ vọng tiền thuê lên."
      },
      {
        year: 2025,
        textZh: "公寓售价两年翻倍、购房门槛抬升，租住需求扩大；胡志明租金 +6.3%，全国毛回报率约 3.85%。",
        textEn: "Apartment prices doubled in two years, pushing households into renting; HCMC rents +6.3%, national gross yield ~3.85%.",
        textVi: "Giá căn hộ tăng gấp đôi trong 2 năm; TP.HCM +6,3%, lợi suất gộp ~3,85%."
      },
      {
        year: 2026,
        textZh: "1 号线通车带来 TOD 溢价（站点 500 m 内 +12~18%）；胡志明高端片区同比 +4.2%，河内服务式公寓租金同比略降，两城分化。",
        textEn: "Metro Line 1 created a TOD premium (+12–18% within 500 m of stations); HCMC prime +4.2% YoY while Hanoi serviced rents eased slightly YoY — the two cities diverge.",
        textVi: "Metro số 1 tạo phí TOD (+12–18% trong 500 m); TP.HCM +4,2%, Hà Nội đi ngang/giảm nhẹ — hai thành phố phân hóa."
      }
    ],
    basisZh: "算法：现月租取自本页「租金行情」表同盘同房型；开盘年租金 = 现月租 ÷（该片区 2026 指数 ÷ 开盘年指数），即用片区租金指数反推，只看涨幅不看绝对值。指数口径：胡志明 2021–2026 为 LeaseInVietnam 外籍高端片区实证序列（美元/㎡·月，净使用面积，2400+ 笔成交）；河内 2026 由 LeaseInVietnam Q3 各郡实测区间中值锚定，2021–2025 按官方/机构披露同比回推，整条为估算（图中虚线）。三点提醒：① 指数起点为 2021，2019–2020 开盘的盘按 2021 起算，涨幅标「≥」属下限；② 开盘年多为预售启动年，未交付期并无实际租金，反推值仅供看趋势方向；③ 租金涨幅显著低于同期房价涨幅，故毛回报率逐年走低。",
    basisEn: "Method: current rent is taken from this page rental table for the same project and unit type; launch-year rent = current rent / (submarket 2026 index / launch-year index) — a back-cast via the submarket rent index, so only growth matters, not absolute level. Index basis: HCMC 2021–2026 is the LeaseInVietnam empirical prime-cluster series (USD/sqm/month, net usable area, 2,400+ leases); Hanoi 2026 is anchored to LeaseInVietnam Q3 district bands, with 2021–2025 back-cast from disclosed YoY changes — the whole Hanoi line is an estimate (dashed). Three caveats: (1) the index starts in 2021, so projects launched in 2019–2020 are measured from 2021 and flagged as a lower bound; (2) launch year is usually the pre-sale start, when no rent is actually collected — treat back-cast values as directional only; (3) rents grow far slower than prices, which is why gross yields keep falling.",
    basisVi: "Phương pháp: tiền thuê hiện tại lấy từ bảng giá thuê cùng dự án/loại căn; tiền thuê năm mở bán = tiền thuê hiện tại ÷ (chỉ số 2026 / chỉ số năm mở bán). Chỉ số TP.HCM 2021–2026 theo LeaseInVietnam (USD/m²/tháng, 2.400+ hợp đồng); Hà Nội 2026 neo theo LeaseInVietnam Q3, các năm trước ước tính (nét đứt). Lưu ý: chỉ số bắt đầu từ 2021 nên dự án mở bán 2019–2020 tính từ 2021 (mức tối thiểu); năm mở bán thường là năm bán hàng trước khi bàn giao; giá thuê tăng chậm hơn giá bán nên lợi suất gộp giảm dần.",
    projects: [
      {
        nameEn: "Grand Marina Saigon",
        launchYear: 2022,
        launchLabel: "2022 Q2",
        indexKey: "d1",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Vinhomes Golden River",
        launchYear: 2021,
        launchLabel: "2021",
        indexKey: "d1",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "The Metropole Thu Thiem",
        launchYear: 2023,
        launchLabel: "2023",
        indexKey: "thuThiem",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Empire City",
        launchYear: 2023,
        launchLabel: "2023（Cove）",
        indexKey: "thuThiem",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Lumiere Riverside",
        launchYear: 2022,
        launchLabel: "2022",
        indexKey: "thaoDien",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "The Global City",
        launchYear: 2025,
        launchLabel: "2025",
        indexKey: "thaoDien",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Midtown Phu My Hung",
        launchYear: 2022,
        launchLabel: "2022",
        indexKey: "d7",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Sunrise Riverside",
        launchYear: 2021,
        launchLabel: "2021",
        indexKey: "d7",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Vinhomes Grand Park",
        launchYear: 2023,
        launchLabel: "2023",
        indexKey: "hcmcAvg",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Masteri Centre Point",
        launchYear: 2022,
        launchLabel: "2022",
        indexKey: "hcmcAvg",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Triton Crown",
        launchYear: 2026,
        launchLabel: "2026-10-18",
        indexKey: "d7",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Golden Westlake",
        launchYear: 2019,
        launchLabel: "2019",
        indexKey: "hanoi",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Vinhomes Metropolis",
        launchYear: 2020,
        launchLabel: "2020",
        indexKey: "hanoi",
        typeZh: "2 房",
        typeEn: "2BR"
      },
      {
        nameEn: "Masteri West Heights",
        launchYear: 2023,
        launchLabel: "2023",
        indexKey: "hanoi",
        typeZh: "2 房",
        typeEn: "2BR"
      }
    ]
  }
};
