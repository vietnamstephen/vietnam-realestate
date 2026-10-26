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
    lastUpdated: "2026-10-27",
    lastUpdatedAt: "2026-10-27 05:15",   // 最近一次刷新完成时间（越南时间，刷新成功时更新）
    dataAsOfZh: "房价数据截至 2026 年 Q3（Knight Frank/CBRE/Savills），汇率截至 2026 年 10 月",
    dataAsOfEn: "Price data as of Q3 2026 (Knight Frank/CBRE/Savills); FX as of Oct 2026",
    fxRate: 26030,           // 1 USD ≈ VND（当前，银行卖出价）
    usdCny: 7.13,
    disclaimerZh: "本平台为信息参考工具，非投资建议。楼盘配额、管理费、宽带等为代表性估算，请以开发商/物业/官方公示为准。法规与价格请以越南官方最新发布为准。",
    disclaimerEn: "For reference only, not investment advice. Quotas, management fees and internet plans are representative estimates — verify with developers/property mgmt/official sources.",
    sources: [
      { zh: "越南国家统计局 (GSO)", en: "GSO Vietnam", url: "https://www.gso.gov.vn" },
      { zh: "Knight Frank Vietnam (Q3 2026)", en: "Knight Frank Vietnam (Q3 2026)", url: "https://www.knightfrank.com.vn" },
      { zh: "Savills Vietnam", en: "Savills Vietnam", url: "https://www.savills.com.vn" },
      { zh: "CBRE Vietnam", en: "CBRE Vietnam", url: "https://www.cbre.com.vn" },
      { zh: "越南建设部", en: "Ministry of Construction", url: "https://moc.gov.vn" },
      { zh: "越南国家法律库 (vbpl.vn)", en: "Vietnam Law Library (vbpl.vn)", url: "https://vbpl.vn" },
      { zh: "越南国家银行 (央行)", en: "State Bank of Vietnam", url: "https://www.sbv.gov.vn" }
    ]
  },

  /* ---------- 宏观 / Macro（含2026预估）---------- */
  macro: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    gdpUsd: [346.3, 370.1, 411.0, 433.0, 459.4, 494.0, 527.0],
    gdpGrowth: [2.9, 2.6, 8.0, 5.1, 7.1, 8.0, 7.0],
    gdpPerCapita: [3549, 3757, 4133, 4316, 4536, 4829, 5115],
    incomePerCapita: [4250, 4205, 4673, 4962, 5415, 5850, 6300],
    incomeUrban: [5590, 5388, 5945, 6260, 6890, 7450, 8000],
    avgWage: [6.5, 6.6, 6.9, 7.1, 7.7, 8.3, 8.9],
    note2026: "2026 年为预估值（表内 7.0% 沿用早期 IMF 口径，未随最新机构上修调整）。官方已公布前三季度实际：Q1 +8.15%、Q2 +8.81%、Q3 +9.95%，前三季度累计 +9.01%（GSO/财政部统计局 10/3，2011 年以来同期最高），全年若达政府 10% 目标，Q4 须 ≥12.5%。机构最新口径：UOB 10 月上调至 9.2%（原 8.5%，预计 Q4 约 +9.7%）、ADB 7.8%、世界银行 10/6 上调至 7.4%（2027–2028 均 7.3%，全年通胀预计均值 4.2%）。前三季度 CPI 均值 +4.52%。10/16 副总理 Pham Gia Tuc 报告：前三季度经济 +9.01%，Q4 须扩张 12.5% 方可达全年双位数目标，通胀压力与贸易逆差仍是挑战；越共中央委员会（10/16）定 2027 年 GDP 增速目标 ≥10%。河内 Q3 增速 10.02%（首次两位数、高于全国 9.95%）、前三季度 +8.85%。10/16 国会主席 Tran Thanh Man 亦称 2027 年须为「加速与突破之年」、GDP 目标 ≥10%，并强调区域分化明显——前三季度 34 个省直辖市中仅 12 个增速超 10%。",
    // 两大城市经济（官方口径 2025）
    cityEconomy: {
      asOf: "2025（官方口径）",
      hcmc: {
        gdpUsdBn: 123.7, growth: 8.03, perCapitaUsd: 8900,
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
        gdpUsdBn: 63.5, growth: 8.16, perCapitaUsd: 7200,
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

  /* 综合指数（2020=100）*/
  index: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    priceIndex: [100, 112.2, 121.1, 146.3, 168.5, 187.8, 220.9],
    gdpPerCapitaIndex: [100, 105.9, 116.5, 121.6, 127.8, 136.1, 144.1],
    incomeIndex: [100, 98.9, 110.0, 116.8, 127.4, 137.6, 148.2]
  },

  /* ---------- 城市对比 / Cities（含2026：河内首次反超）---------- */
  cities: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    hcmc: {
      priceUsd: [2700, 3000, 3300, 3400, 3700, 3800, 4088],
      supply: [16000, 15000, 19000, 12000, 5000, 6000, 9000],
      priceVnd: [66, 74, 81, 83, 91, 93, 98]
    },
    hanoi: {
      priceUsd: [1500, 1700, 1800, 2500, 3000, 3524, 4356],
      supply: [15500, 9800, 13500, 9200, 27500, 20000, 19000],
      priceVnd: [37, 42, 44, 61, 75, 86, 116]
    },
    q2_2026: {
      hcmcUsd: 4088, hanoiUsd: 4356,
      noteZh: "2026 Q2 里程碑：河内一手均价（$4,356）首次反超胡志明（$4,088），同比 +33%；胡志明进入盘整。河内去化率降至 48%（去年同期 77%），二手房价出现 2022 年底以来首次环比下跌（约 -3%），个别楼盘局部降价 5%–12%。",
      noteEn: "Q2 2026 milestone: Hanoi primary ($4,356) overtook HCMC ($4,088) for the first time, +33% YoY; HCMC consolidating. Hanoi absorption fell to 48% (77% a year ago); secondary prices fell ~3% QoQ — first decline since late 2022.",
      sourceUrl: "https://www.vietnam.vn/en/lai-suat-tang-khien-nguoi-mua-bat-dong-san-than-trong"
    },
    q3_2026: {
      hcmcUsd: 4210, hanoiUsd: 4349,
      noteZh: "2026 Q3（Knight Frank 10/6 发布）：胡志明一手均价 $4,210/㎡（环比 +3%、同比 +12%，主要由高端/超高端新盘拉动），季度成交 2,493 套（环比 +40%），新供应 2,711 套（环比 +29%，同比 +48%）；合并平阳/巴地-头顿后大胡志明成交 7,534 套、去化率 45%、一手均价 $3,754/㎡（环比 +2.3%）、新供应 7,203 套。河内 Q3 一手均价 $4,349/㎡（≈1.14 亿盾/㎡，环比 -0.15%、同比 +25%），成交 2,960 套（环比 -40%），新推仅 2,558 套（环比 -62%、同比 -58%）、季度新房总供应 7,776 套（新推 2,558 + 既有盘 5,218）、豪宅占新供应约 49%、去化率降至约 38%——为河内 Q2 反超胡志明后首次环比微降，开发商因高房价与资金成本上升普遍推迟开盘。Knight Frank 预计至 2027 年底胡志明新增 42,593 套（逾半在中心区）。其他机构同季口径（勿混入本表数值）：CBRE——胡志明 Q3 新推 3,267 套（同比 -53%）、去化率 45%（环比 -24 个百分点）、一手均价约 7,500 万盾/㎡（环比 -2.3%、不含 VAT）；Savills——河内新公寓供应环比 -42%/同比 -51%、成交环比 -26%/同比 -48%、一手与二手价差 A 级 28%/B 级 17%、二手连续第三季下跌；Savills（胡志明）整体去化率仅约 25%（约 1,400 笔）、在售一手约 5,800 套、Q4 预计约 6,000 套新推（较原预期 -30%）；CBRE（河内）新推约 6,200 套（环比 -28%、同比 -40%）、一手报价环比 -9%/同比 -6%（内城 -6%/-3%）；One Mount——河内一手成交约 1,700 套（环比 -76%、同比 -83%）、胡志明约 1,600 套（环比 -83%、同比 -72%），9 个月按存量一手供应的去化率 67%/43%；VARS——全国 Q3 新推公寓近 3.2 万套、成交逾 1.25 万套（去化 39.3%），河内均价 7,930 万盾/㎡、胡志明 8,830 万盾/㎡、岘港 6,890 万盾/㎡，三者环比均持平。建设部 10/19 前 9 个月报告（定性、无具体价格）：Q3 交易量较上季小幅下降、公寓价格小幅回落但大城市仍高位，工业地产逆势上行。10/19–10/20 补充（二手/挂牌口径，勿混入本表一手数值）：One Mount 称河内二手均价由 2025 年约 8,500 万盾/㎡ 降至约 7,800 万盾/㎡；Batdongsan 记录 Q3 河内常见挂牌约 8,400 万盾/㎡（较 Q1 -3%）；CBRE 口径河内二手约 6,000 万盾/㎡（环比 -5%、同比 -8%）；胡志明一手约 1.1 亿盾/㎡（环比 +3%、同比 +12%，与 Knight Frank ,210 一致）。2026 Q4 数据尚未发布，quarterly 2026 Q4 仍留空。10/21 追加口径（勿混入本表）：MBS/建设部——Q3 购房贷前 12 月固定 8.5–11.5%、优惠期后浮动 13–15%（Q1–Q2 为 12–14%），27 省市报告库存约 51,950 套、5,012 个项目待处理；Savills（胡志明 Q3）——至 9 月初已解决 650 个项目法务障碍（233 个完成、688 个已提方案），前 7 个月 37 个项目获准销售含 30 个公寓项目 21,165 套，原平阳地区占可售公寓供应 55%+，Q2 一手 80% 单价超 1 亿盾/㎡、去化约 32%，Q3 未进入普遍下调周期。10/22 追加口径（勿混入本表）：One Mount——胡志明 Q3 一手成交约 1,600 套（环比 -83%、同比 -72%），河内约 1,700 套；Savills——Q3 推出约 5,800 套、成交约 1,400 套、去化仅 25%；Knight Frank 与 CBRE 去化 38–45%（环比 -20~-24pp）；Savills 预计 Q4 约 6,000 套（较原计划 -30%），One Mount 预计 2026–2027 年胡志明年均开盘 2.2–2.5 万套（此前预期 3.5 万套以上）；Batdongsan 经纪调查——36% 客户延迟观望、25% 等待降价、仅 18% 遇合适房源即成交，46% 视高利率为最大障碍；市中心公寓租金回报 3–4%，低于浮动房贷利率。10/22–10/23 补充（二手/挂牌与提案口径，勿混入本表一手数值）：Savills 河内 Q3 一手报价约 1.07 亿盾/㎡、二手约 7,500 万盾/㎡，河内居民收入近五年年均 +9%、一手价年均 +25%；CBRE 越南胡志明 Q3 二手约 6,000 万盾/㎡（净使用面积）、投资者占比高的项目降价逾 10%；DKRA 胡志明及周边二手环比 -4~7%；HoREA 提案可负担商品房 25–30 百万盾/㎡（远郊省份）至 60–70 百万盾/㎡（大城市），并统计 9 个月全国成交约 331,876 笔、Q3 92,004 笔（环比 -8%）。10/24 追加口径（勿混入本表）：Avison Young 称胡志明 Q3 推售约 11,500 套、集中于南部与西北/东北片区，整体去化降至 28%，成交集中在旧仁泽（Di An）与顺安（Thuan An）可负担段，内城高端与豪宅去化更慢；河内市建设厅 10/24 就社房售价回应称 3,000 万盾/㎡ 以上新项目由建安成本与法定利润率决定，管控重点应落在各成本项的来源与合法性（Hnasa 遵礼 2,970 万、N02 阮廌街 >3,220 万、清烈坊 Videc-长成约 3,140 万盾/㎡）。",
      noteEn: "Q3 2026 (Knight Frank, Oct 6): HCMC primary $4,210/sqm (+3% QoQ, +12% YoY, luxury-led); 2,493 transactions (+40% QoQ) on 2,711 new units (+29% QoQ, +48% YoY); enlarged HCMC (incl. Binh Duong & BR-VT) 7,534 transactions, 45% absorption, primary $3,754/sqm (+2.3% QoQ), 7,203 new units. Hanoi Q3 primary $4,349/sqm (≈VND 114M, -0.15% QoQ, +25% YoY), 2,960 units sold (-40% QoQ) against only 2,558 newly launched units (-62% QoQ, -58% YoY) and total Q3 new supply of 7,776 (2,558 launches + 5,218 from existing projects), luxury ~49% of new supply, absorption down to ~38% — first QoQ dip since Hanoi overtook HCMC in Q2, with developers delaying launches on high prices and funding costs. Knight Frank projects 42,593 new HCMC apartments by end-2027 (over half in the core city). Other houses' same-quarter readings (not used in this table): CBRE — HCMC launched 3,267 apartments in Q3 (-53% YoY) at 45% absorption (-24pp QoQ) and about VND 75m/sqm primary (-2.3% QoQ, ex-VAT); Savills — Hanoi new supply -42% QoQ / -51% YoY and sales -26% QoQ / -48% YoY, with a Grade A primary-secondary gap of 28% and Grade B 17% and secondary prices down a third straight quarter; Savills (HCMC) shows overall absorption of only about 25% (~1,400 transactions) on about 5,800 units of primary stock with roughly 6,000 launches expected in Q4 (30% below the earlier forecast); CBRE (Hanoi) counted about 6,200 launches (-28% QoQ, -40% YoY) with primary asking prices -9% QoQ / -6% YoY (inner city -6%/-3%); One Mount — about 1,700 Hanoi primary transactions (-76% QoQ, -83% YoY) and about 1,600 in HCMC (-83% QoQ, -72% YoY), with nine-month absorption of 67%/43% of existing primary supply; VARS — nearly 32,000 launches and over 12,500 sales nationwide (39.3% absorption), with average prices flat QoQ at VND 79.3m/sqm in Hanoi, VND 88.3m/sqm in HCMC and VND 68.9m/sqm in Da Nang. The Ministry of Construction's Oct 19 nine-month report is qualitative with no price levels: Q3 volumes edged down QoQ, apartment prices softened slightly but stayed high in the big cities, and industrial property bucked the trend. Oct 19-20 additions (secondary/asking basis, not to be mixed into the primary figures above): One Mount puts the Hanoi secondary average at about VND 78m/sqm versus about VND 85m/sqm in 2025; Batdongsan records Q3 common asking prices near VND 84m/sqm, down 3% from Q1; CBRE has Hanoi secondary near VND 60m/sqm (-5% QoQ, -8% YoY); HCMC primary is about VND 110m/sqm (+3% QoQ, +12% YoY, consistent with Knight Frank at $4,210). on investor-heavy projects cutting over 10%, DKRA with HCMC and surrounding secondary prices down 4-7% QoQ, HoREA proposing affordable commercial housing at VND 25-30m/sqm (outlying provinces) to VND 60-70m/sqm (major cities) and counting 331,876 nationwide transactions in nine months with 92,004 in Q3 (-8% QoQ). Q4 2026 data is not out yet, so quarterly 2026 Q4 stays blank.",
      sourceUrl: "https://www.vietnam.vn/en/gia-chung-cu-cu-giam-can-ho-moi-van-neo-cao"
    },
    // 季度房价（已知处用季度，缺失处 null）
    quarterly: {
      hcmc: {
        "2024": [3600, 3700, 3700, 3700], "2025": [3750, 3800, 3850, 3870], "2026": [4080, 4088, 4210, null]
      },
      hanoi: {
        "2024": [2900, 3000, 3000, 3200], "2025": [3200, 3400, 3600, 3800], "2026": [4000, 4356, 4349, null]
      }
    },
    // 二手房价季度估算（区间中值，来源：Global Property Guide / Savills 二手成交口径，标注「估算」）
    quarterlySecondary: {
      hcmc: {
        "2024": [2500, 2550, 2600, 2650], "2025": [2700, 2800, 2850, 2900], "2026": [3000, 3050, null, null]
      },
      hanoi: {
        "2024": [2350, 2500, 2600, 2750], "2025": [2850, 3000, 3100, 3150], "2026": [3200, 3100, null, null]
      }
    },
    waveMeta: {
      periods: 11, firstPeriod: "2024 Q1", lastPeriod: "2026 Q3",
      noteZh: "一手=Knight Frank 季度报告口径；二手=二手成交估算（Global Property Guide / Savills，2026 Q2 河内二手环比 -3%）。共 11 期，最后一期 2026 Q3（河内 Q3 一手 $4,349/㎡）。",
      noteEn: "Primary = Knight Frank quarterly; secondary = estimated resale transactions (Global Property Guide / Savills; Hanoi -3% QoQ in 2026 Q2). 11 periods, latest 2026 Q3 (Hanoi Q3 primary $4,349/sqm)."
    }
  },

  /* ---------- 汇率 / FX ---------- */
  fx: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026],
    usdVndAnnual: [23190, 23150, 23580, 24150, 24750, 25850, 26500],
    cnyVndAnnual: [3361, 3590, 3504, 3411, 3442, 3610, 3716],
    usdCnyRate: [6.90, 6.45, 6.73, 7.08, 7.19, 7.16, 7.13],
    // 月度 USD/VND（年均路径，2022年Q4大贬为真实行情）
    monthlyUsdVnd: {
      "2020": [23180, 23190, 23200, 23250, 23280, 23270, 23260, 23240, 23220, 23200, 23150, 23100],
      "2021": [23050, 23100, 23120, 23100, 23120, 23080, 23090, 23100, 23120, 23140, 23150, 23170],
      "2022": [22900, 22950, 23000, 23050, 23100, 23300, 23700, 23900, 24300, 24890, 24750, 24700],
      "2023": [23600, 23650, 23700, 23750, 23850, 23900, 23950, 24050, 24150, 24250, 24350, 24450],
      "2024": [24500, 24550, 24700, 24800, 24900, 25000, 25050, 25150, 25200, 25250, 25350, 25450],
      "2025": [25500, 25550, 25600, 25900, 26100, 26200, 26250, 26300, 26300, 26350, 26400, 26450],
      "2026": [26480, 26500, 26520, 26540, 26560, 26580, 26600, 26610, 26630, 26030, 26650, 26090]
    },
    latest: { usdVnd: 26030, cnyVnd: 3651, asOf: "2026-10" },
    noteZh: "越南盾 2020→2026 对美元累计贬值约 12%（23,200→26,030）、对人民币约 9%——人民币同期对美元也小幅贬值，两者同向贬值相抵，故对人民币贬值更少。切换上方「基准年」可看不同起点的累计变化。注：2026 年内 VND 对美元转为小幅升值（年初约 26,480 → 26,030，约 1.7%）。10/26 口径：SBV 参考汇率 25,627 连续第四日持平，±5% 区间 24,346–26,908。早 8:15 Vietcombank 与 BIDV 均报买入 25,650、卖出 26,030（较 10/23 各降 10 盾）；盘中各行买入 25,620–25,649、卖出 26,030–26,044。自由市场 26,400/26,500（买 +40、卖 +90）——较 10/23 记录的约 26,080 差异较大，疑与报价渠道统计方式不同，待核实，勿与银行牌价直接比较。美元指数 101.7（年内 +3.4%，1 月底低点 96.22），本周受美联储决议、美国经济数据与地缘因素影响。机构预测分化：MBS 预计年底 26,800–27,000（较年初 +2~2.8%，理由为高油价推升通胀、Fed 维持高利率）、Techcombank 维持 26,000 附近（VND-USD 利差 >3pp、基建与 FDI 及侨汇支撑美元供给）。购房款须以越南盾经境内账户支付，首笔入金水单务必保存（资金出境凭证）。",
    noteEn: "VND depreciated ~12% vs USD (23,200→26,030) and ~9% vs CNY over 2020→2026 — CNY itself slipped vs USD, so the two same-direction moves offset and VND lost less against CNY. Switch the base year above to see cumulative moves from any start. Note: within 2026 VND turned slightly stronger vs USD (about 26,480 in January to 26,030 now, ~1.7%). As of Oct 26: the SBV reference rate held at 25,627 for a fourth straight session, band 24,346-26,908. At 08:15 Vietcombank and BIDV both quoted 25,650 bid / 26,030 ask, each 10 dong below the Oct 23 close, with banks quoting 25,620-25,649 to buy and 26,030-26,044 to sell during the day. The unofficial market ran at 26,400/26,500 (buy +40, sell +90) — a wide gap versus the ~26,080 recorded on Oct 23 that likely reflects a different quoting channel, flagged for verification and not comparable with bank boards. The dollar index was 101.7, up 3.4% year-to-date after a January low of 96.22, with the Fed decision, US data and geopolitics driving the week. Forecasts diverge: MBS sees year-end at 26,800-27,000 (+2-2.8% vs January) on high oil feeding inflation and a high-rate Fed, while Techcombank expects about 26,000 on a VND-USD gap above 3pp and dollar supply from infrastructure, FDI and remittances. Property must be paid in VND via onshore accounts — keep the first inbound remittance slip (repatriation proof).",
    sourceUrl: "https://en.vietnamplus.vn/reference-exchange-unchanged-at-weeks-beginning-post354289.vnp"
  },

  /* ---------- 政策追踪（含官方链接）---------- */
  policy: [
    {
      date: "2023-11-27", effective: "2024-08-01", category: "法律 / Law",
      titleZh: "《住房法》2023（27/2023/QH15）", titleEn: "Housing Law 2023 (27/2023/QH15)",
      keyZh: "外籍可在商业住宅项目购公寓/住房，50 年可续期一次（最长100年）；单楼外籍配额 ≤30%。",
      keyEn: "Foreigners may buy housing in commercial projects; 50-yr renewable (max 100); ≤30% foreign quota per building.",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "国家法律库检索", en: "Law library", url: "https://vbpl.vn" }]
    },
    {
      date: "2024-01-18", effective: "2024-08-01", category: "法律 / Law",
      titleZh: "《土地法》2024（31/2024/QH15）", titleEn: "Land Law 2024 (31/2024/QH15)",
      keyZh: "土地国有；外国人仅拥有建筑物+有期限土地使用权；明确「红/粉皮书」登记制度。",
      keyEn: "Land state-owned; foreigners own building + time-limited LUR; clarifies certificate regime.",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "国家法律库检索", en: "Law library", url: "https://vbpl.vn" }]
    },
    {
      date: "2024-07-24", effective: "2024-08-01", category: "细则 / Decree",
      titleZh: "第 95/2024/ND-CP 号法令（住房法实施细则）", titleEn: "Decree 95/2024/ND-CP",
      keyZh: "独栋房外籍配额每「坊」≤250 套；续期须期满前至少 3 个月申请。",
      keyEn: "Landed-house quota ≤250/ward; renewal ≥3 months before expiry.",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "政府公报", en: "Gov gazette", url: "https://chinhphu.vn" }]
    },
    {
      date: "2024-01-01", effective: "2025-01-01", category: "法律 / Law",
      titleZh: "《房地产经营法》2023（29/2023/QH15）", titleEn: "Real Estate Business Law 2023",
      keyZh: "定金上限 5%；首期(含定金)≤30%；交房前累计付款≤70%（外资开发商≤50%）；可保留尾款 5% 至粉皮书下发。",
      keyEn: "Deposit ≤5%; first installment ≤30%; ≤70% pre-handover (≤50% for FIE developers); may withhold 5% until Pink Book.",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "国家法律库检索", en: "Law library", url: "https://vbpl.vn" }]
    },
    {
      date: "2024-07-01", effective: "2024-07-01", category: "薪资 / Wage",
      titleZh: "第 74/2024/ND-CP 号法令：最低工资 +6%", titleEn: "Decree 74/2024/ND-CP: min wage +6%",
      keyZh: "一类地区月最低工资升至 496 万盾。",
      keyEn: "Region I min wage to VND 4.96M/month.",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "政府公报", en: "Gov gazette", url: "https://chinhphu.vn" }]
    },
    {
      date: "2026-01-01", effective: "2026-01-01", category: "信贷 / Credit",
      titleZh: "2026 上半年房贷利率升至 12%–13%", titleEn: "H1 2026 mortgage rates climbed to 12–13%",
      keyZh: "利率上行+房价高企，购房需求转谨慎，市场进入调整期。",
      keyEn: "Higher rates + high prices → cautious buyers, market in adjustment.",
      statusZh: "进行中", statusEn: "Ongoing",
      links: [{ zh: "国家银行", en: "State Bank", url: "https://www.sbv.gov.vn" }]
    },
    {
      date: "2026-09-30", effective: "2026-09-30", category: "决议 / Resolution",
      titleZh: "第 303/NQ-CP 号决议：2026–2030 社会住房/租赁住房指标", titleEn: "Resolution 303/NQ-CP: social & rental housing targets 2026–2030",
      keyZh: "各地 2026–2030 社会住房+租赁住房总指标 899,857 套（出售/租购 708,834 + 租赁 191,023）；胡志明市 181,257 套、河内 84,000 套；取代第 07/NQ-CP 号决议，优先在 TOD/工业区发展租赁住房。",
      keyEn: "Local 2026–2030 target 899,857 units (708,834 sale/lease-purchase + 191,023 rental); HCMC 181,257, Hanoi 84,000; replaces Resolution 07/NQ-CP; prioritizes rental housing near TOD/industrial zones.",
      statusZh: "已发布", statusEn: "Issued",
      links: [{ zh: "政府公报", en: "Gov gazette", url: "https://chinhphu.vn" }]
    },
    {
      date: "2026-07-28", effective: "2026-07-28", category: "决议 / Resolution",
      titleZh: "中央第 21-NQ/TW 号决议：土地法修订方向", titleEn: "Resolution 21-NQ/TW: Land Law amendment direction",
      keyZh: "为修订《土地法》及配套法律定调：地价按市场/数据化重估、严控城市分拆售地、鼓励可负担租赁住房、提高空地/囤地持有成本并征收土地增值。",
      keyEn: "Sets direction for amending the Land Law: data-driven land valuation, curbs on urban land subdivision, incentives for affordable rental housing, higher holding costs on vacant/hoarded land and value-capture taxes.",
      statusZh: "已发布", statusEn: "Issued",
      links: [{ zh: "VnEconomy 解读", en: "VnEconomy", url: "https://en.vneconomy.vn/people-at-the-center.htm" }]
    },
    {
      date: "2026-10-02", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《房地产经营法》修订草案（国会常委会 10/2 审议）", titleEn: "Draft amended Real Estate Business Law (NA Standing Committee, Oct 2)",
      keyZh: "草案 10 章 61 条（较 2023 年 10 章 83 条减 22 条）：精简投资经营条件与行政手续（含交易平台/经纪/管理人员培训认证要求）、厘清「房地产经营/项目/存量房/在建房」定义；期房首期 ≤合同价 30%（含 5% 定金），取得红本前收款 ≤95%，余 5% 转入信贷机构冻结账户、取得红本后划转、利息归买方（亦可协商其他担保方式）；非公寓住宅项目预售条件放宽为「已开工 + 具备土地使用权与建设证件」，公寓仍须完成地基；省级人委会获授权决定项目全部/部分转让。",
      keyEn: "10 chapters, 61 articles (22 fewer than the 2023 law's 10/83): trims business conditions and admin procedures (incl. training-certification for trading floors, brokers, managers) and sharpens definitions; off-plan first instalment capped at 30% of contract value (incl. 5% deposit), collections capped at 95% until the red book is issued, with the last 5% held in a frozen bank account and released on certification, interest to the buyer (other guarantee forms may be agreed); presale conditions eased for non-apartment housing to started construction plus land-use and construction documents, while apartments still need foundations; provincial committees may approve full or partial project transfers.",
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程；10/22 上午全体会议已听取呈文与审查报告并全天分组讨论，10/30 全体会议再讨论，拟 11/21 上午与《土地法》《住房法》一并表决；若通过则自 2027-07-01 施行）。10/24 分组讨论补充：有代表提议取消项目转让的前置条件，经济委员会仍在权衡受让方以托管账户或银行担保承继未缴土地款的替代方案，尚未定案。10/26 汇总：本次会议另以快速程序列入《投资法》修订草案（落实政治局 2026-06-08 第 10-NQ/TW 号决议、拟 2027-01-01 生效），与本法的准入松绑方向一致。", statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the drafted schedule the three property-law amendments — Land, Housing and Real Estate Business — go to a single vote on the morning of Nov 21). Oct 24 group talks: a deputy proposed dropping pre-transfer conditions on project transfers, while the Economic Committee is still weighing letting a transferee assume outstanding land payments under escrow or a bank guarantee — not settled. Oct 26 round-up: the session also added the draft Investment Law amendment under expedited procedure (implementing Politburo Resolution No. 10-NQ/TW of June 8, 2026, effective Jan 1, 2027), consistent with this law's direction of easing market entry.",
      links: [{ zh: "国会审议", en: "NA review", url: "https://vietnamnews.vn/politics-laws/1801111/na-standing-committee-discusses-draft-revised-housing-real-estate-business-laws.html" }]
    },
    {
      date: "2026-10-02", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《住房法》修订草案（国会常委会 10/2 审议）", titleEn: "Draft amended Housing Law (NA Standing Committee, Oct 2)",
      keyZh: "草案共 13 章 130 条（10/18 提交国会法司委的正式稿即 13 章 130 条，较 2023 版 198 条减 68 条——按政府新闻网 10/22 呈文口径），新增「租赁住房」专章；社房满 5 年后可按法定条件转售，租金由投资方与承租方按足额成本协商、不得超过省级价格框架；拟取消外籍对「独栋房/联排房」（landed house）的所有权，外籍仅保留公寓购买/继承资格（与《土地法》国有土地原则衔接）。建设部明确四大住房类别发展导向：商品房、租赁住房、公租房、政策性住房。社会住房试点政策拟入法（依据国会 201/2025/QH15 决议与政府 66.15/2026/NQ-CP 决议）；20/21 项程序下放地方，经营条件精简四分之三。",
      keyEn: "Draft 13 chapters/130 articles (the text submitted to the NA Law and Justice Committee on Oct 18 runs to 13 chapters and 130 articles, 68 fewer than 2023); adds a rental-housing chapter; social housing may be resold after five years subject to statutory conditions, with rents negotiated on a full-cost basis but capped by the provincial price framework; proposes removing foreigners' ownership of landed houses (villas/townhouses), restricting them to apartments only (aligning with Land Law state-ownership principle). MOC defines 4 housing groups: commercial, rental, public, policy. Social-housing pilots to be codified (NA Res 201/2025/QH15, Gov Res 66.15/2026/NQ-CP); 20/21 procedures decentralized, business conditions cut by 3/4.",
      statusZh: "审议中（已列入国会本次会议议程，会期 2026-10-17 开幕至 11-21 闭幕，分 10/17–11/14 与 11/20–11/21 两阶段，11/15–11/19 休会整理；拟本次通过、2027 年年中生效。10/18 下午建设部已向国会法律与司法委员会常设机构提交正式稿：13 章 130 条；按商业/租赁/公务/政策性住房四类重排并单设租赁住房发展专章（承租对象、国家与民间两种投资形式、项目条件、投资方优惠、租金与管理）；公寓改造重建规则衔接城市更新、新增公私合作方式；删除工业园区外专家与劳动者宿舍规定，将外国劳动者移出可租住社会住房对象范围；开发商配建社房/租赁房义务改由省级人委会决定实施方式（项目内留地、项目外安排土地或缴纳等值款项）。审查机构建议明确国家资金租赁住房的对象与优先顺序，并核查与《土地法》《房地产经营法》的一致性。10/16 国会办公厅吹风会确认会期 28 天（含 6 个周六、1 个周日）、备选闭幕日 11/23，共审议 47 项法律与规范性决议草案（43 项拟通过、4 项作初次意见，其中拟通过法律 39 部），11/12 首次安排一天部长质询；10/17 上午预备会议并正式开幕；10/22 上午全体会议听取呈文与审查报告、随后分组讨论（下午续），评估意见要求通过后尽早出台议定与建设部实施细则；据国会预定议程，三部修订法拟于 11/21 上午同时表决；生效时点另有报道称草案拟 2027-03-01 生效，与「2027 年年中」口径不一，待官方文本确认；10/23 媒体报道补充分组讨论焦点——强制公证范围应否由法律直接规定（司法部长黄清松主张法律规定，若授权政府须限定内容与范围）、外籍公寓 30% 上限应否保留在法律中（胡志明代表阮清心主张保留硬性上限，仅授权政府规定计算方式与多栋统筹；涉及边境、沿海、岛屿与战略设施周边的人口与国防安全考量）、外籍购买楼层面积与土地使用权衔接的产权边界及登记发证程序待明确；10/24 补充——社房 5 年后转售对象受限：草案规定付清房款满 5 年并取得证书后，转售只能卖给符合社房购买条件的对象（5 年自付清房款之日起算，非交房日），不再按 2023 年法自由按市价出售；总理黎明兴称过去存在买社房等 5 年再按市价转售牟利、把福利政策变成套利机会的现象，须严格逐笔核验；代表胡越朝建议为因工作调动、居住地变更必须搬迁者设例外机制，代表黎氏玉玲指出草案未明确转售定价原则并要求为依 2023 年法已购房、已签约者设过渡条款；开发商 G6 要求明确受理与审核主体（建议坊级人委会）、增值与装修部分处理及双方税负。注：目前仅为草案建议，现有业主出售权利未改变）", statusEn: "Under review (on the NA session agenda opening Oct 17 and closing Nov 21, 2026, in two phases Oct 17–Nov 14 and Nov 20–21 with a Nov 15–19 recess for drafting; passage expected this session, effect mid-2027. On the afternoon of Oct 18 the Ministry of Construction submitted the formal text to the standing bodies of the NA Law and Justice Committee: 13 chapters and 130 articles, regrouped into commercial, rental, official-duty and policy housing with a dedicated rental-housing chapter (eligible tenants, state and private investment models, project conditions, investor incentives, rents and management); apartment renovation rules linked to urban renewal, with public-private partnership models added; dormitory rules for experts and workers outside industrial parks dropped and foreign workers removed from eligible social-housing tenants; the developer obligation to build social or rental housing left to provincial people's committees (on-site land, off-site land or an equivalent payment). The reviewing body asked for a clear priority order for state-funded rental housing and a consistency check against the Land Law and the Law on Real Estate Business. The Oct 16 NA Office briefing confirmed a 28-day session including six Saturdays and one Sunday, with Nov 23 as an alternative closing date, 47 draft laws and normative resolutions under consideration (43 for adoption including 39 laws, four for first opinions), and a one-day interpellation of ministers on Nov 12; the preparatory meeting and formal opening were held on the morning of Oct 17; per the drafted schedule the three amended laws are set for a single vote on the morning of Nov 21; some reports put the intended entry into force at Mar 1, 2027 rather than mid-2027 - to be confirmed against the official text; Oct 23 reports add the group-discussion flashpoints: whether mandatory notarisation should be set by law itself (Justice Minister Hoang Thanh Tung backs legislating it, with any delegation bounded in content and scope), whether the 30% foreign apartment cap should stay in the law (HCMC deputy Nguyen Thanh Tam wants the hard cap retained with the government only setting the calculation method and multi-tower coordination, citing population and defence-security concerns in border, coastal, island and strategic areas), and how far foreign floor-space ownership links to land-use rights, including title boundaries and registration)",
      links: [{ zh: "政府/国会解读", en: "NA review", url: "https://en.thevietmedia.net/vietnam-housing-law-foreigners-landed-houses-2026" }]
    },
    {
      date: "2026-10-01", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《土地法》修订草案（国会常委会 10/1 审议）", titleEn: "Draft amended Land Law (NA Standing Committee, Oct 1)",
      keyZh: "草案新增 3 类「为经济社会发展而征收土地」情形（含国际条约履约、公租/保障房项目建设、>50 公顷物流中心等）；强调「尽可能避免仅为拍卖创收而征收居民住宅用地」；拟按省定年度地价表+调整系数计算土地税费/租金/补偿，并要求土地交易经数字平台登记；目标 2027-03-01 生效（草案口径）。10/22 国会分组讨论披露：草案共 112 条（现行 2024 年《土地法》260 条），土地分类简化为农用地、非农用地、发展储备用地三类，取消省级独立土地利用规划、内容并入省级规划，乡级土地使用计划简化并数字化；每块土地设全国唯一识别码，数字登记与纸质证书同等效力，已在公布土地数据库内的材料不得要求重复提交；未使用土地 60 个月后可被收回，并拟对囤地按递增标准加征费用。",
      keyEn: "Draft adds 3 land-reclamation cases for socio-economic development (international treaties; public/rental housing; >50ha logistics hubs); stresses minimizing reclamation of residential land solely for auction revenue; would compute land levies, lease payments and compensation from annual provincial price lists plus adjustment coefficients, and require land transactions to be registered via digital platforms; targets entry into force on Mar 1, 2027 (draft).",
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程，拟本次审议通过。10/16 国会吹风会口径：修订重点是完善地价表与调整系数、健全土地财政政策，并把土地数据与相关专业数据互联互通以防止操纵与人为抬价；征收/补偿/安置方面明确可在补偿安置方案获批前收回土地的法定情形，同时增设约束与承诺条款保障被征收人合法权益、确保居住与生计条件改善；10/22 上午全体会议听取呈文与审查报告并分组讨论；10/22 下午分组讨论要点：总理黎明兴称土地分类、规划与用地计划是重点，全国仅保留国防、安全与国土三张国家级用地规划，省级不再单设土地利用规划而并入省级规划；地价由国家按「省级地价表+调整系数」确定，取代 2024 年法逐项定价与聘请咨询机构核价的机制，程序须公开透明、基于土地与专业数据；国会主席陈青敏要求本法至少稳定运行 10–15 年，避免反复修改，并严打炒作与操纵价格，补偿安置须量化为可衡量标准（住房、学校、医疗与基本服务）；国会经济与财政委员会主任范文买建议保留林地、稻田、国防安全用地的严格管控，其余用途可按发展优先序灵活管理；据国会预定议程，三部修订法拟于 11/21 上午同时表决）", statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the Oct 16 NA briefing, the revision focuses on improving land price tables and adjustment coefficients, reforming land-finance policy, and interlinking land data with related specialist datasets to prevent manipulation and artificial pricing; on reclamation it would specify the legal cases where land may be taken before compensation and resettlement plans are approved while adding safeguards for affected households' housing and livelihoods; per the drafted schedule the three amendments are set for a single vote on the morning of Nov 21)",
      links: [{ zh: "国会吹风会", en: "NA briefing", url: "https://worldculturefestival.vn/en/quoc-hoi-khoa-16-lan-dau-chat-van-cac-bo-truong" }]
    },
    {
      date: "2026-10-07", effective: "2026-10-07", category: "总理令 / Directive",
      titleZh: "第 68/CD-TTg 号总理令：闲置房屋土地处置纳入负责人 KPI", titleEn: "Directive 68/CD-TTg: idle land & housing disposal into leaders' KPIs",
      keyZh: "要求 2026 年内彻底处置闲置超 12 个月、废弃或不当使用的房屋与土地；处置进度与结果纳入部委/地方负责人绩效考核（KPI），对拖延、设障、牟利者严厉处分；全国仍有 9,662 处剩余房屋土地待明确处置方案（10 省市各超 500 处）。",
      keyEn: "Mandates full disposal within 2026 of land/housing idle >12 months, abandoned or misused; progress folded into leaders' KPIs with strict discipline for foot-dragging; 9,662 redundant properties still lack a plan (10 localities >500 each).",
      statusZh: "已发布", statusEn: "Issued",
      links: [{ zh: "政府公报", en: "Gov gazette", url: "https://chinhphu.vn" }]
    },
    {
      date: "2026-10-06", effective: "2026-10-06", category: "决议 / Resolution",
      titleZh: "河内第 72/2026/NQ-HĐND 号决议：租赁住房规划框架", titleEn: "Hanoi Resolution 72/2026/NQ-HĐND: rental housing framework",
      keyZh: "允许在城乡、TOD 开发区、人口密集区、工业区/出口加工区/高新区等地规划租赁住房；租赁住房投资项目至少 50% 面积须用于出租，其中至少 70% 出租住房预留给政策受益者。",
      keyEn: "Permits rental housing in urban/rural, TOD zones, dense areas and industrial/EPZ/hi-tech zones; ≥50% of a rental-housing project must be for rent, with ≥70% of rental units reserved for policy beneficiaries.",
      statusZh: "已发布", statusEn: "Issued",
      links: [{ zh: "河内人民议会", en: "Hanoi People's Council", url: "https://hanoi.gov.vn" }]
    },
    {
      date: "2026", effective: "2026", category: "法令 / Decree",
      titleZh: "第 357 号法令：住房与房地产市场信息系统/数据库（编号以官方公报核对为准）", titleEn: "Decree 357: housing & real-estate market information system/database (number to verify)",
      keyZh: "规范住房与房地产市场信息系统及数据库的建立、管理与运行，2026 年起生效；配合 2026 年底完成国家土地数据库、统一不动产登记系统与交易须经银行系统结算等要求，提升市场透明度（JLL GRETI 2026 越南得分 3.15、排名第 50/88，为全球改善最快市场之一）。",
      keyEn: "Governs establishment, management and operation of the housing & real-estate market information system and database, in force from 2026; supports completing the national land database by end-2026, a unified property registration system and bank-channel settlements, lifting transparency (JLL GRETI 2026: Vietnam scores 3.15, ranks 50/88, among the most-improved markets).",
      statusZh: "已生效", statusEn: "In force",
      links: [{ zh: "国家法律库检索", en: "Law library", url: "https://vbpl.vn" }, { zh: "VnEconomy 解读", en: "VnEconomy", url: "https://en.vneconomy.vn/edging-upwards-in-real-estate-transparency.htm" }]
    },
    {
      date: "2026-10-19", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《资产拍卖法》修订草案（政府 10/19 提交国会）", titleEn: "Draft amended Law on Property Auction (submitted to the NA, Oct 19)",
      keyZh: "个人受让住宅用地使用权的拍卖预缴保证金拟由现行水平提高至起拍价的 20%–50%，以遏制高价弃标；中标后弃标的个人禁止再次参与住宅用地拍卖，因违规导致拍卖结果被取消者不予退还保证金；全民所有、起拍总价 ≥2 亿盾的资产须通过在线拍卖系统组织。草案将该规则溯源至政府第 66.11/2026/NQ-CP 号决议（处理住宅用地拍卖障碍）。国会经济与财政委员会审查认为 50% 上限偏高、可能抬高资金成本，要求补充数据并明确档次标准。",
      keyEn: "The deposit for auctions of residential land-use rights would rise to 20–50% of the starting price to deter high bids that are never paid; defaulting winners would be barred from bidding again and would forfeit the deposit if their breach annuls the result; assets worth VND 200m or more at starting price must go through the online auction system. The draft codifies Resolution 66.11/2026/NQ-CP on removing obstacles in residential land auctions. The NA Economics & Finance Committee calls the 50% cap too high, warning of higher capital costs, and wants data plus clear tiering criteria.",
      statusZh: "已提交国会审议（10/19 上午司法部长代表政府陈述，同日国会分组讨论；拟与《土地法》《住房法》《房地产经营法》修订案衔接，配套细则拟以法令形式合并颁布）",
      statusEn: "Submitted to the NA (presented by the Justice Minister on the morning of Oct 19, group discussions the same day; to be aligned with the amended Land, Housing and Real Estate Business laws, with implementing rules consolidated into a single decree)",
      links: [{ zh: "西贡解放日报（英文）", en: "SGGP English", url: "https://en.sggp.org.vn/prime-minister-calls-for-controls-to-keep-social-housing-prices-affordable-post130398.html" }, { zh: "劳动报", en: "Lao Dong", url: "https://news.laodong.vn/thoi-su/thu-tuong-yeu-cau-hoan-thien-quy-dinh-dau-gia-kiem-soat-gia-nha-o-xa-hoi-1785577.ldo" }]
    }
  ],

  /* ---------- 动态消息 / News Feed（利好/利坏/政策/市政）---------- */
  newsFeed: [
    { date: "2026-10-26", tag: "数据 / Data", tagClass: "warn", zh: "定存再降、挂牌与实际继续脱节（10/26 牌价 + VnExpress 调查）：VPBank 10/26 起 6–13 月再降 0.4pp——线上 6–11 月 6.6%、12–13 月 6.7%、1–5 月 4.75%、15–18 月 7.4%、24 月 7.1%、36 月 6%；10 亿盾以上 6–11 月 7.0%、12–13 月 7.1%。全市场 10/26 表：国有四大行（Agri/MB/VCB/Vietin）3 月 4.75%、6/9 月 6.6%、12/18 月 6.8%，PGBank 6.9%/7.0%、Sacombank 6.7%/7.0%、MBV 7.0%、LPBank 6.5%/6.7%、BVBank 6.7%/6.9%、Sacombank 18 月 7.0%、Saigonbank 13 月 7.9% 为全表最高；多数银行挂牌已落至 7% 以下。但同一调查显示实际议价仍高于挂牌 1–3pp：BIDV 河内网点 1 亿盾以下 7.8%、1 亿盾以上 8.0%（含礼品），VPBank 6 月 9.1%、12 月 9.2%（100 万盾起、新客），NCB/Vikki/GPBank/MBV/ABBank 普遍 8–9%，VCB 线上挂牌 6–12 月 3–5.4% 但 App 存 300 万盾起可至 6.8%，MB 挂牌 12 月 5.8% 而生日券 App 存款可至 8.2%。含义：购房者与开发商的真实融资成本仍高于官网牌价，比价须按实际到账利率。", en: "Deposit rates fall again while posted boards stay divorced from payouts (Oct 26 boards + VnExpress survey): VPBank cut another 0.4pp on 6-13 month terms from Oct 26 — online 6.6% for 6-11m, 6.7% for 12-13m, 4.75% for 1-5m, 7.4% for 15-18m, 7.1% for 24m and 6% for 36m, with VND 10bn+ deposits at 7.0% (6-11m) and 7.1% (12-13m). Oct 26 market board: the Big-4 (Agribank/MB/VCB/VietinBank) show 4.75% at 3m, 6.6% at 6/9m and 6.8% at 12/18m; PGBank 6.9%/7.0%, Sacombank 6.7%/7.0% (7.0% at 18m), MBV 7.0%, LPBank 6.5%/6.7%, BVBank 6.7%/6.9%, and Saigonbank's 7.9% 13-month offer tops the table — most boards are now below 7%. Yet the same survey finds negotiated rates 1-3pp higher: BIDV branches in Hanoi quote 7.8% under VND 100m and 8.0% above (gifts included), VPBank 9.1% for six months and 9.2% for 12 months (from VND 1m, new customers), with NCB/Vikki/GPBank/MBV/ABBank generally at 8-9%; VCB lists 3-5.4% online for 6-12m but pays up to 6.8% via its app from VND 3m, and MB lists 5.8% for 12m while a birthday voucher lifts app deposits to 8.2%. Implication: real funding costs for buyers and developers stay above the official boards — compare on effective, not posted, rates.", src: "https://aveluro.com/news/BID/rate-decision-2026-10-26-lai-suat-tiet-kiem-the-nao-sau-chi-dao-cua-ngan-hang-nha-nuoc" },
    { date: "2026-10-26", tag: "中性 / Neutral", tagClass: "mid", zh: "汇率（10/26 口径）：SBV 参考汇率 25,627 连续第四日持平，±5% 区间 24,346–26,908。早 8:15 Vietcombank 与 BIDV 均报买入 25,650、卖出 26,030（较 10/23 各降 10 盾）；盘中各行买入 25,620–25,649、卖出 26,030–26,044。人民币同日在 VCB 报 3,813–3,935、BIDV 3,799–3,945（较 10/23 各升 1 盾），与美元走势相反。自由市场 26,400/26,500（买 +40、卖 +90）——较 10/23 记录的约 26,080 差异较大，疑与报价渠道统计方式不同，待核实。美元指数 101.7（年内 +3.4%，1 月底低点 96.22）。机构预测分化：MBS 预计年底 26,800–27,000（高油价推升通胀、Fed 维持高利率），Techcombank 维持 26,000 附近（VND-USD 利差 >3pp、FDI 与侨汇支撑）。银行美元卖出价仍较年初低约 1.2%。fxRate 已按银行卖出价上调至 26,030。", en: "FX (Oct 26): the SBV reference rate held at 25,627 for a fourth session, band 24,346-26,908. At 08:15 Vietcombank and BIDV both quoted 25,650 bid / 26,030 ask, each 10 dong below Oct 23, with banks quoting 25,620-25,649 to buy and 26,030-26,044 to sell during the day. CNY moved the other way, quoted at 3,813-3,935 by VCB and 3,799-3,945 by BIDV (+1 dong each). The free market ran at 26,400/26,500 (buy +40, sell +90) — far from the ~26,080 logged on Oct 23, likely a different quoting channel and flagged for verification. The dollar index was 101.7, up 3.4% YTD after a late-January low of 96.22. Forecasts diverge: MBS sees 26,800-27,000 by year-end on high oil and a high-rate Fed, while Techcombank expects about 26,000 on a VND-USD gap above 3pp plus FDI and remittances. Bank selling rates remain about 1.2% below the start of the year. fxRate has been marked up to 26,030 on the bank selling rate.", src: "https://www.vietnam.vn/en/usd-tang-gia-trong-phien-dau-tuan" },
    { date: "2026-10-26", tag: "市政 / Infrastructure", tagClass: "good", zh: "胡志明轨道网年底冲刺（10/26 MAUR 口径）：年底前拟同期开工 3 条新线、合计近 90km、初设总投资逾 254 万亿盾（≈98 亿美元）——①旧平阳新城—仙泉近 31km、约 55 万亿盾，起于平阳坊 A1 环岛，经富利、顺交、安富、以安至仙泉客运站（隆平坊）；②土龙木—陶丹 33.2km、约 110 万亿盾，贯穿 16 坊，接旧平阳线 S5 站与滨城—陶丹中心；③6 号线一期新山一—富友约 89 万亿盾，连接新山一机场、东部创意城区与富友 ICD 港，并经守添—隆城铁路衔接隆城机场。地铁 2 号线（滨城—参良，逾 55 万亿盾）现 5 座地下站施工（范文白、黎氏莲、范文海、和兴、巴拐），10 月底再开 3 座（陶丹、七贤、阮鸿道），12 月开工余下 3 座，年底前 11 站全部动工；节点为 2027-10 盾构始发、2029-03 主体完工、2029 年底铺轨完成、2030 年前商运。另：隆城机场总工作量已超 80%；白藤码头—守添滨河公园人行桥（1,000 亿盾）完成关键节点。胡志明 Q4 须增长 13.23% 方能达成全年 10.02% 目标。", en: "HCMC rail build-out accelerates into year-end (MAUR, Oct 26): three new lines totalling nearly 90km and over VND 254tn (about USD 9.8bn) are to break ground together before year-end — (1) former Binh Duong New City-Suoi Tien, nearly 31km and about VND 55tn, from the A1 roundabout through Phu Loi, Thuan Giao, An Phu and Di An to the Suoi Tien bus station; (2) Thu Dau Mot-Tao Dan, 33.2km and about VND 110tn, across 16 wards and linking station S5 of the Binh Duong line to the Ben Thanh-Tao Dan core; (3) Line 6 phase 1, Tan Son Nhat-Phu Huu, about VND 89tn, tying the airport to the eastern creative city and the Phu Huu ICD port and, via the Thu Thiem-Long Thanh railway, to Long Thanh airport. Line 2 (Ben Thanh-Tham Luong, over VND 55tn) is building five underground stations (Pham Van Bach, Le Thi Rieng, Pham Van Hai, Hoa Hung, Ba Queo), with three more starting by end-October (Tao Dan, Bay Hien, Nguyen Hong Dao) and the last three in December, so all 11 break ground this year; milestones are TBM launch in Oct 2027, main structures in Mar 2029, track complete by end-2029 and commercial service before 2030. Elsewhere, Long Thanh airport has passed 80% of total workload and the VND 1tn Bach Dang-Thu Thiem pedestrian bridge hit a key milestone. HCMC needs 13.23% growth in Q4 to reach its 10.02% full-year target.", src: "https://en.nhandan.vn/ho-chi-minh-city-accelerates-major-infrastructure-projects-to-boost-growth-post168272.html" },
    { date: "2026-10-26", tag: "新盘 / Launch", tagClass: "good", zh: "河内国际体育城住房融资获批（10/26 市建设厅复函）：投资联合体（Vinhomes 牵头，含玉回房地产、玉贵、Future 等）获准为 4 个分区住房项目募集 237 万亿盾，覆盖 A/B/C/D 四个分区、住宅用地合计约 1,211 公顷（A 约 295、B 约 415、C 约 273、D 约 228 公顷），用于联排、独栋与高层住宅。项目总投约 925,650 亿盾（≈370 亿美元）、占地 8,965 公顷、跨 11 个坊社，规划亮点为 13.5 万座 VinFast—铜鼓体育场（FIFA 标准、全球最大可开启屋盖），定位承办 ASIAD/奥运级赛事。截至 10/7 已通过发债筹集 37 万亿盾，其中 11 万亿盾投入住房建设；募资上限期限至 2030 Q4，投资方自有资金须 ≥15%。目标 2030 Q1 基本建成、2030 Q4 全部完成。含义：北部中期供应潜在增量极大，但兑现集中在 2029–2030，短期不改变 Q3–Q4 供需格局。", en: "Hanoi International Sports City housing financing approved (city DoC reply, Oct 26): the investor consortium led by Vinhomes (with Ngoc Hoi Real Estate, Ngoc Quy and Future) may raise VND 237tn for housing across subdivisions A-D, covering about 1,211ha of residential land (A ~295ha, B ~415ha, C ~273ha, D ~228ha) for townhouses, villas and high-rises. Total project investment is about VND 925,650bn (roughly USD 37bn) over 8,965ha in 11 wards and communes, anchored by a 135,000-seat VinFast-Trong Dong stadium built to FIFA standards with the world's largest retractable roof and pitched at ASIAD and Olympic-scale events. As of Oct 7 the consortium had raised VND 37tn through bonds, VND 11tn of it for housing, with fundraising running to Q4 2030 and equity required at 15% or more. Targets are substantially complete by Q1 2030 and fully complete by Q4 2030. Implication: a huge potential supply addition for the north, but delivery lands in 2029-2030 and does not change the Q3-Q4 demand-supply picture.", src: "https://www.vietnam.vn/en/sieu-do-thi-the-thao-9-000-ha-duoc-huy-dong-237-000-ty-dong-xay-nha-o" },
    { date: "2026-10-26", tag: "数据 / Data", tagClass: "mid", zh: "胡志明化解停滞项目过半（10/26 周报汇总）：全市在册停滞项目 1,338 个，已为其中约一半解除障碍；此前口径为新机制下排查 921 个项目（233 个已完成处理、688 个已有处理方案）。Q4 增长目标 13.23%、全年 GRDP 目标 10.02%。注：1,338 与 921 两个数字并存——前者为最新在册总数、后者为 2026 年中按新机制排查数，口径不同勿混用。另：10/28 胡志明投资促进论坛拟推出逾 130 亿美元项目清单并公布国际金融中心首批成员。", en: "HCMC has cleared obstacles on about half of its 1,338 catalogued stalled projects (weekly round-up, Oct 26), up from the earlier count of 921 projects identified under the new mechanism (233 fully processed, 688 with proposed solutions). The city needs 13.23% growth in Q4 to hit a 10.02% full-year GRDP target. Note: 1,338 and 921 coexist — the former is the latest register, the latter the mid-2026 count under the new mechanism; do not mix them. Separately, the Oct 28 HCMC investment forum is expected to unveil more than USD 13bn of projects and name the first members of the international financial centre.", src: "https://www.unitedconsulting.asia/blog/united-consulting-blog-1/vietnam-business-news-week-in-review-26-oct-2026" },
    { date: "2026-10-26", tag: "政策 / Policy", tagClass: "mid", zh: "国会立法进程（10/26 汇总）：①《投资法》修订草案以快速程序列入本次会议议程，落实政治局 2026-06-08 第 10-NQ/TW 号关于外商直接投资的决议，拟允许政府放宽外资市场准入条件、延长特别投资程序，预计 2027-01-01 生效；分组讨论中代表主张优惠应与技术转让、产出等可量化结果挂钩，而非按资本规模。②《房地产经营法》修订草案：有代表提议取消项目转让的前置条件，经济委员会仍在权衡受让方以托管账户或银行担保承继未缴土地款的替代方案，尚未定案。③本次会议共 47 项法律与决议草案，三法（土地法/住房法/房地产经营法）拟在 11 月下旬闭幕会表决。", en: "Legislative track (round-up, Oct 26): (1) the draft Investment Law amendment was added to the session agenda under expedited procedure to implement Politburo Resolution No. 10-NQ/TW of June 8, 2026 on FDI, letting the government relax foreign market-access conditions and extend the special investment procedure, with effect expected from Jan 1, 2027; in group talks deputies argued incentives should be tied to measurable outcomes such as technology transfer and output rather than capital volume. (2) On the draft Real Estate Business Law, a deputy proposed dropping pre-transfer conditions on project transfers, and the Economic Committee is still weighing whether a transferee could instead assume outstanding land payments under escrow or a bank guarantee — not settled. (3) The session carries 47 draft laws and resolutions, with the three property laws (Land, Housing, Real Estate Business) due for a vote at the closing sitting in late November.", src: "https://www.unitedconsulting.asia/blog/united-consulting-blog-1/vietnam-business-news-week-in-review-26-oct-2026" },
    { date: "2026-10-26", tag: "政策 / Policy", tagClass: "good", zh: "河内社房「绿色通道」（10/25 综合报道）：7/20 指示要求 114 个在册社房项目在 2026 下半年全部开工、其中约 77 个完成基础施工，对应约 46,100 套可入市；河内 2025–2030 年被分配 88,666 套（2026 年 18,700 套），目标 2026 年底 25,000–27,000 套具备供应条件。提速手段：符合 2026 年《首都法》的项目可在总体规划修订完成前先行办理 1/500 详细规划；部分审批权下放至坊/社级；环评咨询与征地清地由串行改并行。每个项目最多 20% 房源留给公务员免摇号购买或租购。2026–2030 住房计划首批更新新增 42 个社房项目、34 个商品房/城区项目，另 3 个租赁住房项目（34,292 亿盾、4,367 套、404,289 ㎡）。注：河内仍在暂停受理新社房项目投资主张审批，须于 11/30 前完成住房发展计划修编。", en: "Hanoi social-housing green lane (round-up, Oct 25): a July 20 directive requires all 114 pipeline social-housing projects to start in H2 2026, with about 77 reaching foundation completion — roughly 46,100 units. Hanoi is assigned 88,666 units for 2025-2030 (18,700 in 2026 alone) and targets 25,000-27,000 units supply-ready by end-2026. Speed-ups: projects eligible under the 2026 Capital Law can file detailed 1/500 planning before the wider master plan is revised, some approval authority moves to ward and commune level, and environmental consultation runs in parallel with land clearance. Up to 20% of units in each project are reserved for civil servants to buy or rent-to-buy without a lottery. The first update to the 2026-2030 housing plan adds 42 social-housing projects and 34 commercial or urban projects plus three rental projects (VND 34,292bn, 4,367 units, 404,289 sqm). Note: Hanoi still suspends approvals of new social-housing investment policy and must finish revising its housing development plan by Nov 30.", src: "https://adalytica.com/news/hanoi-social-housing-approvals-32c9645b" },
    { date: "2026-10-26", tag: "中性 / Neutral", tagClass: "mid", zh: "Nhà đầu tư có nên xuống tiền mua bất động sản vào lúc này?", en: "Nhà đầu tư có nên xuống tiền mua bất động sản vào lúc này?", src: "https://news.google.com/rss/articles/CBMitAFBVV95cUxNVi1idEhEZjBpUDdpOHkzeTlRcTNyWGd4MWcwelV4MU4wU0VZV29WSTh0Q05oQ29vd3JRMU9tUDVlWm9nZ3U2S0ozV3JLZlI3WGpudld4bURKR0RUSjJ6bk1iRnBmZ2xCU0NmZUI1enpqM3lfbEozTVc5UUQxRW1FUHJza3poRWs0bXVCdDNKbjJVY2Znbkg1RGE1bDZfTlBvU090WVJENTZ6V0FhZFlxRkxHcVI?oc=5" },
    { date: "2026-10-26", tag: "利好 / Positive", tagClass: "good", zh: "Bất động sản 26/10: Mở bán 75 căn nhà ở xã hội tại Đồng Nai từ 720 triệu đồng", en: "Bất động sản 26/10: Mở bán 75 căn nhà ở xã hội tại Đồng Nai từ 720 triệu đồng", src: "https://news.google.com/rss/articles/CBMivgFBVV95cUxOaXhuWlVycnBQV0VaMEhjSHcwdjBOXzZHVGxUN2Q4NkpET3MxMkJ4Z0dDekUyUXFwUmpkdDFaX05zelYzU3MtRlJWUndrWWJ5Z1pGVjNvMDV3c3JrWkQ5OE94Q0pqclE4enRuUnNpRUFScFFfQTdvS045SWxZaGdrUTYwNDNkeGtyanhIRWFLa2s3Z2N0aDVZZlNTeUJBM1VEdHlMTlRKdnpHdzVzQnYzREJpRXNxYnFRMXJKbll3?oc=5" },
    { date: "2026-10-26", tag: "中性 / Neutral", tagClass: "mid", zh: "Bất động sản cho thuê hiện ra sao?", en: "Bất động sản cho thuê hiện ra sao?", src: "https://news.google.com/rss/articles/CBMijgFBVV95cUxOenFjTk1JZW1PZXYyZWUtVE9SVUxxWmppWEFic1AtWlFJQlFEU2ZzNU5VQloybDhLVTZnekhMMjRhc3ZQd3I4SUlxR1ZuSTJkZzdfX2R2YU5BYTEtSHdfbk4yeDB3blRJNERBYzdLbi1lWDBfZEJBczItOW5MS21NdkdFdmdFVmtfdmNnZldB?oc=5" },
    { date: "2026-10-25", tag: "数据 / Data", tagClass: "mid", zh: "Giá bất động sản sẽ diễn biến ra sao?", en: "Giá bất động sản sẽ diễn biến ra sao?", src: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVFJNc09XRnBZbG5hMUtWTDdrVUhVUDB4b1oyZmNua3pFV09BV0hKM0w5Z3NmanctQ0FBVG5jN3BXaS11bjlSN1c4S0dTdnF0STl3RmxBNFJsWldtLXBNdzFDcHBVMk1pOEo5ZnNGenAtQkZBcFBDZGNPS29wdXNHSm9QMi1leEk?oc=5" },
    { date: "2026-10-26", tag: "数据 / Data", tagClass: "mid", zh: "Nghịch lý thị trường bất động sản trong mùa cuối năm", en: "Nghịch lý thị trường bất động sản trong mùa cuối năm", src: "https://news.google.com/rss/articles/CBMilgFBVV95cUxNM09HLVJkM19nNnN1amJSczhRb00zVWFUemFnYjBEb2VsMVRvQlZNVFJRbTJfcnZzelBIMUF4YmFxZ20waUw2ZDhrZ0JMQzVnMUQtdkFWUFVINjQ5aGJFR0JEc0lLMTNLeFY2X0l6aXQ4TFFBMzRxNkE1OUZrVG5OSy1BS3VWNHNtZFBsSlVzWW5fNkZ3TGc?oc=5" },
    { date: "2026-10-26", tag: "中性 / Neutral", tagClass: "mid", zh: "Cổ phiếu bất động sản có tuần hút tiền mạnh", en: "Cổ phiếu bất động sản có tuần hút tiền mạnh", src: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxORVZleDVkQkZLUDVHNmFKNGV5STY1YVl3ODBmZW9meDBEajV0LUp0eV9MUktvU19rSUpEZ0pab1BGajZsTHFzR3h5UXhQWURYdXd1TlhjZnBQNXJpMXRLR0pVejFZWTN0ZzV0Rms3MFdVdk5Jd1FsOGo3YURHcHl1bnJoem9ZbHAwblBz?oc=5" },
    { date: "2026-10-26", tag: "市政 / Infra", tagClass: "good", zh: "Dự án bất động sản bám theo hạ tầng giao thông", en: "Dự án bất động sản bám theo hạ tầng giao thông", src: "https://news.google.com/rss/articles/CBMihgFBVV95cUxNOU5LWGxlM3U3cTJJR1EwVVY4blFDVGwxWE83azZ3Tmc1ZWFPRjFXaEptTzNMQ2s1M2xrb1BLV2xtX0lEV3gwSkNtaWdzY1U2TFZQVGY2QUtRemJfYTFYM011RHlhTzJfbGFCR0UtM2tCenpfS3VhNm9lT1FXZDJIVEZOaXljUQ?oc=5" },
    { date: "2026-10-26", tag: "复盘 / Weekly", tagClass: "mid", zh: "周度复盘（10/20–10/26）：①利率——全系统逾 22 家银行按 SBV 第 9736 号公文下调 6 个月以上定存挂牌价，降幅普遍 0.5pp、最高 0.7pp；国有四大行 12 月柜面落至 5.4–5.9%，但 10/25 青年报调查显示挂牌与实际严重脱节：OCB 最高挂牌 6.8%、BVBank 6.0%、LPBank 6.3%，实际付息仍达 8.7–9.4%。购房贷未同步下调，商业银行房贷 11–14%、优惠期后浮动 13–15%（个别 16%）；DKRA 11 家银行 12–24 月固定约 10.9%，VARS IRE 10 家银行优惠 8.5–11%。②政策——10/22 国会全体会议听取《土地法》（112 条，现 260 条）、《住房法》（130 条，现 198 条）、《房地产经营法》（61 条，现 83 条）修订草案呈文并分组讨论，拟 11/21 上午同时表决；《住房法》草案新增租赁住房专章（第 31 条优先对象、住房基金、总工会为投资主体、TOD/工业区/高校周边布局）。③市场——河内 Q3 成交约 3,900 套（环比 -33%、同比 -66%，2024 年以来最低），全市场一手均价约 8,600 万盾/㎡（环比 -9%、同比 -6%）、内城 1.02–1.07 亿盾/㎡，Savills 口径一手 1.07 亿、二手 7,500 万盾/㎡；C 级一手供应仅约 4%，成交中逾 70% 单价超 60 亿盾/套。④市政——胡志明 10/25 公布 98 个项目、约 360.841 万亿盾（≈140 亿美元）方案治理 28 个堵点（15 个 2026–2027 年、13 个 2028–2030 年）；滨城—芹椰城铁 10/30 全面开工（54km、地下 3.3km、2029-12 商业运营）。⑤汇率——USD/VND 收 26,020，周内降 60 盾，10 月基本横盘，年内 VND 对美元仍升值约 1.7%。下周关注：10/27–28 美联储议息、10/30 国会全体会议续议三法。", en: "Weekly recap (Oct 20-26): (1) Rates — 22+ banks cut posted 6-month+ deposit rates by 0.5pp (max 0.7pp) under SBV Letter 9736; the Big-4 12-month counter rate fell to 5.4-5.9%, yet an Oct 25 Thanh Nien survey shows posted rates far below actual payouts — OCB tops out at 6.8%, BVBank 6.0%, LPBank 6.3%, while effective rates still reach 8.7-9.4%. Mortgages did not follow: commercial home loans 11-14%, floating 13-15% after the promo (16% at some banks); DKRA puts 12-24 month fixed rates at about 10.9% across 11 banks, VARS IRE sees 8.5-11% promo rates at 10 banks. (2) Policy — on Oct 22 the National Assembly heard the draft Land Law (112 articles vs 260), Housing Law (130 vs 198) and Real Estate Business Law (61 vs 83) and debated them in groups, with a single vote planned for the morning of Nov 21; the Housing Law adds a rental-housing chapter (Article 31 priority groups, housing fund, VGCL as investor, siting near TOD/industrial parks/universities). (3) Market — Hanoi Q3 absorption about 3,900 units (-33% QoQ, -66% YoY, lowest since 2024), citywide primary prices about VND 86m/sqm (-9% QoQ, -6% YoY) and 102-107m in the inner city; Savills puts primary at VND 107m and secondary at 75m/sqm; Grade C is only about 4% of new supply and over 70% of units sold cost more than VND 6bn. (4) Infrastructure — HCMC unveiled 98 projects worth VND 360.841tn (about $14bn) to fix 28 congestion hotspots (15 by 2026-27, 13 by 2028-30); Ben Thanh-Can Gio rail starts full construction on Oct 30 (54km, 3.3km underground, commercial service Dec 2029). (5) FX — USD/VND closed at 26,020, down 60 dong on the week and roughly flat in October, with the dong still up about 1.7% year-to-date. Next week: the Oct 27-28 Fed meeting and the Oct 30 NA plenary on the three laws.", src: "https://news.qq.com/rain/a/20261025A0ABHK00" },
    { date: "2026-10-26", tag: "数据 / Data", tagClass: "warn", zh: "定存挂牌与实际脱节（10/25 青年报调查）：SBV 指示后市场利率回落，但实际付息仍高——OCB、BVBank、KienlongBank、LPBank 等下调 6 个月以上期限、部分降 0.5pp，调整后最高挂牌 OCB 6.8%、BVBank 6.0%、LPBank 6.3%；银行通过优惠码、返现、线上操作向部分客户付更高利息：胡志明一客户 10/19 存 2 亿盾实得 9.4%/年，河内一客户 10/21 在 VPBank 存 1 亿盾 15 个月挂牌 7.4%/年，另有网点对 5 亿盾 6 个月给到 8.7%（高于官网挂牌 1.2pp），截至 10/25 下午仍有员工直播招揽「100 万盾起存、6 个月 8.2%」。含义：挂牌价不能作为实际融资成本参照，比价须按实际到账利率。", en: "Posted vs effective deposit rates (Thanh Nien survey, Oct 25): market rates eased after the SBV instruction but actual payouts stay high — OCB, BVBank, KienlongBank and LPBank cut 6-month+ terms, some by 0.5pp, leaving top posted rates at OCB 6.8%, BVBank 6.0% and LPBank 6.3%. Banks still pay more via promo codes, cashback and app channels: one HCMC saver got 9.4%/yr on VND 200m on Oct 19, a Hanoi saver got a 7.4%/yr posted rate on a 15-month VND 100m VPBank deposit, a branch offered 8.7% on VND 500m for six months (1.2pp above its website) and staff were still livestreaming 8.2% for six months from VND 1m as of Oct 25 afternoon. Posted boards are therefore not a proxy for actual funding cost.", src: "https://news.qq.com/rain/a/20261026A02MLX00" },
    { date: "2026-10-25", tag: "数据 / Data", tagClass: "warn", zh: "房贷未随降息下调（10/25 汇总）：10/19 起国有与股份制银行陆续调整利率表，SBV 要求 6 个月以上定存挂牌至少降 0.5pp、生产经营与优先领域贷款降 1.5–2pp（部分分支机构达 2.5pp），但本轮未直接覆盖购房与房地产贷款，商业银行购房贷普遍 11–14%、部分浮动达 15%。VARS 委员阮英桂称银行可能以房地产、汽车等非优先领域高利率弥补息差，全面降息或要到 2027 Q3；VARS IRE 阮晋心认为降息首要作用是改善心理预期。数据：DKRA 11 家银行 12–24 月固定约 10.9%；VARS IRE 10 家银行优惠 8.5–11%、优惠期后 13–15%。开发端应对：付款进度延长至 5 年、快付客户折扣逾 10%、2–3 年利息宽限。Q4 预判：VARS IRE 供应与 Q3 相当；DXS-FERI 基准情景浮动 12–14%、去化 30–35%，挑战情景浮动 14–16%、去化跌破 20%。", en: "Mortgages left out of the rate cuts (Oct 25 round-up): banks repriced from Oct 19 after the SBV ordered at least 0.5pp off posted 6-month+ deposits and 1.5-2pp off production/priority-sector loans (up to 2.5pp at some branches), but the round did not cover home or property loans — commercial mortgages stay at 11-14%, with floating rates up to 15%. VARS's Nguyen Anh Quey says banks may offset margin pressure with high rates on non-priority segments such as property and autos and that a full easing cycle may only come in Q3 2027; VARS IRE's Nguyen Tan Tam sees the first effect as sentiment. Data: DKRA puts 12-24 month fixed rates near 10.9% at 11 banks; VARS IRE records 8.5-11% promo rates at 10 banks, rising to 13-15% after the promo. Developers are stretching payment schedules to five years, offering 10%+ fast-payment discounts and 2-3 year interest grace periods. Q4 outlook: VARS IRE sees supply matching Q3; DXS-FERI's base case is floating 12-14% with 30-35% absorption, its stress case 14-16% with absorption below 20%.", src: "https://news.qq.com/rain/a/20261025A0ABHK00" },
    { date: "2026-10-25", tag: "中性 / Neutral", tagClass: "mid", zh: "汇率（10/25 口径）：SBV 参考汇率维持 25,627（连续三日持平），±5% 区间 24,335–26,909；Vietcombank 与 BIDV 买入 25,640、卖出 26,020（较上周末收盘降 60 盾），Agribank 25,660/26,040，TPBank 25,640/26,050；美元指数 101.75（周 -0.02），美伊外交信号令油价回落、长端美债收益率下行，美元缺乏上行动能；市场聚焦 10/27–28 美联储会议，TD Securities 预计维持 4%、但为 2026-12 与 2027-03 加息留出空间。fxRate 维持 26,020。", en: "FX (Oct 25): the SBV reference rate held at 25,627 for a third day, band 24,335-26,909; Vietcombank and BIDV quoted 25,640 bid / 26,020 ask (-60 dong on the week), Agribank 25,660/26,040 and TPBank 25,640/26,050. The dollar index was 101.75 (-0.02 on the week) as softer oil on US-Iran diplomatic signals and lower long-dated Treasury yields stripped the dollar of upward momentum; focus is on the Oct 27-28 Fed meeting, where TD Securities expects a hold at 4% while leaving room for hikes in Dec 2026 and Mar 2027. fxRate remains 26,020.", src: "https://hanoimoi.vn/ty-gia-ngay-25-10-usd-thieu-dong-luc-tang-gia-1762699.html" },
    { date: "2026-10-24", tag: "市政 / Infrastructure", tagClass: "good", zh: "滨城—芹椰城铁 10/30 全面开工（10/24 VinSpeed 通报）：投资方 VinSpeed 已通知胡志明市人委会及相关部门，10/30 起同步施工隧道、高架、滨城站、芹椰站、车辆段、运营控制中心及供电/通信/信号/票务系统；可行性研究报告 10/2 由建设主管部门评审、10/12 获批。线路全长 54km（地下 3.3km：滨城站 km0+000 至 km3+173，其余为高架），芹椰站、车辆段与 OCC 设于芹椰社，途经滨城、庆会、川木、新顺、新美坊及芽郫、平庆、安东、芹椰社；计划 2029-12 商业运营，投运 6 列车、6:00–23:00（每日 17 小时）、全程 20.3 分钟、发车间隔 20 分钟。此前 2025-12-19 已举行开工仪式。", en: "Ben Thanh-Can Gio rail starts full construction on Oct 30 (VinSpeed notice, Oct 24): the investor has told HCMC authorities that tunnels, viaducts, Ben Thanh and Can Gio stations, the depot, the operations control centre and power, telecoms, signalling and ticketing systems will all start on Oct 30; the feasibility study was appraised on Oct 2 and approved on Oct 12. The 54km line (3.3km underground from km0+000 to km3+173, the rest elevated) runs through Ben Thanh, Khanh Hoi, Xom Chieu, Tan Thuan, Tan My and the Nha Be, Binh Khanh, An Thoi Dong and Can Gio communes, with Can Gio station, the depot and the OCC in Can Gio. Commercial service is planned for Dec 2029 with six trains running 06:00-23:00 (17 hours a day), a 20.3-minute end-to-end trip and 20-minute headways. A groundbreaking ceremony was held on Dec 19, 2025.", src: "https://www.vietnam.vn/en/dong-loat-thi-cong-tuyen-duong-sat-ben-thanh-can-gio-tu-ngay-30-10" },
    { date: "2026-10-25", tag: "市政 / Infrastructure", tagClass: "good", zh: "胡志明 98 个项目治堵方案（10/25 市建设厅）：总投资约 360.841 万亿盾（≈140 亿美元），针对全市 28 个重点拥堵点，其中 15 个 2026–2027 年解决、13 个 2028–2030 年；33 个项目已落实资金并具备立即实施条件。在建/推进：安富与美水交叉口、50 号国道扩建、阮魁桥路、环二 3 段（范文同—鹅釉/1 号国道）；胡志明—木牌高速在建并同步征地，胡志明—土龙木—真城高速正补偿清地。拟开工：守添 4 桥、吉莱—富友港区路、鹅贡交叉口、河内大道连接支线扩建、万清运河环境整治。轨道扩容：地铁 1 号线延伸、2 号线延伸至平阳、6 号线一期（新山一机场—富友）、守添—隆城铁路。2026–2030 另有沥汭桥、民主广场六岔口钢结构天桥、3/2 路（黎大行、李常杰路口）天桥、孙德胜街地下通道、阮知方与丁部领路拓宽。主要挑战：技术基础设施迁移滞后、规划调整审批、施工高峰集料短缺、咨询文件修订。", en: "HCMC's 98-project congestion plan (city DoC, Oct 25): about VND 360.841tn (nearly $14bn) against 28 critical hotspots, 15 to be resolved in 2026-27 and 13 in 2028-30, with 33 projects already funded and ready to start. Under way: An Phu and My Thuy intersections, National Highway 50 widening, the Nguyen Khoai bridge-road, Beltway 2 section 3 (Pham Van Dong to the Go Dua/NH1 junction), the HCMC-Moc Bai expressway with parallel land clearance and compensation for the HCMC-Thu Dau Mot-Chon Thanh expressway. Nearing launch: Thu Thiem 4 bridge, the Cat Lai-Phu Huu port road, Go Cong junction, the Hanoi Highway connector expansion and Van Thanh canal clean-up. Rail expansion covers Metro Line 1's extension, Line 2 toward Binh Duong, Line 6 phase 1 (Tan Son Nhat airport to Phu Huu) and the Thu Thiem-Long Thanh railway; 2026-30 also brings the Rach Doi bridge, steel overpasses at Democratic Square and on 3/2 Street, a Ton Duc Thang underpass and wider Xo Viet Nghe Tinh and Dinh Bo Linh roads. Constraints: delayed utility relocation, planning approvals, aggregate shortages at peak and revised consultancy documents.", src: "https://news.tuoitre.vn/ho-chi-minh-city-launches-14bn-plan-to-tackle-28-traffic-congestion-hotspots-with-key-projects-103261025195504434.htm" },
    { date: "2026-10-25", tag: "政策 / Policy", tagClass: "good", zh: "《住房法》修订草案租赁住房专章（10/22 提交国会、10/25 报道）：新增以国家资金发展租赁住房——第 31 条明确住房困难或有租房需求的越南公民可租国家投资住房，登记超额时按优先级审核：革命有功者及烈士亲属、残疾人、老年人、学生、贫困户、近贫困户、住房被收回或拆除未安置家庭；新增多子女家庭优先（两名及以上亲生子女、其中至少一名 2026-07-01 起出生）；省级人委会可补充对象但不得改变法定顺序。房源与资金：通过住房基金投资建设，来源含国家预算、公共资产住房出售收入、社房发展与土地使用权拍卖相关收入、自愿捐助及其他合法资金；越南劳动总联合会为使用工会资金项目的投资主体。布局：特别级/一级/二级城市坊、工业园区与出口加工区、高等院校附近、TOD 区域。另保留社房购/租购政策，并明确机关企业可租社房安排员工居住（企业可计入规定费用，但不得以国家预算支付）。", en: "Rental-housing chapter in the draft Housing Law (submitted Oct 22, reported Oct 25): the bill adds state-funded rental housing — Article 31 lets Vietnamese citizens with housing difficulty or rental need lease state-invested homes, with priority ranking when demand exceeds supply: war invalids and martyrs' families, disabled people, the elderly, students, poor and near-poor households, and households whose homes were reclaimed or demolished without resettlement. Families with two or more children, at least one born from July 1, 2026, gain new priority; provinces may add groups but cannot reorder the statutory list. Funding comes through a housing fund fed by the state budget, proceeds from selling public housing, shares of social-housing and land-auction revenue, donations and other lawful sources, with the Vietnam General Confederation of Labour as investor for union-funded projects. Siting targets wards in special, first and second-tier cities plus industrial parks, export zones, university areas and TOD zones. Social-housing purchase and rent-to-own rules are retained, and agencies and firms may lease social housing for staff (booked as a permitted cost, but not paid from the state budget).", src: "https://news.qq.com/rain/a/20261025A06Z6J00" },
    { date: "2026-10-25", tag: "政策 / Policy", tagClass: "mid", zh: "土地法合并文本第 44/2026/VBHN-VPQH 号（2026-03-16）第 220 条：分地块与合地块须同时满足——地块已获权属证书、仍在土地使用期限内、无争议、未被查封以保障判决执行、未被有权机关采取临时紧急措施；存在争议但可确定争议面积与边界的，其余部分仍可办理。分合地块须保障通行道路并与现有公共交通道路连接、合理保障供水排水及其他必要需求；划出住宅用地作为通道的部分无须办理用途变更。分割后各宗地须达省级人委会针对现使用地类规定的最小面积，小于最小面积须与相邻地块合并；仅部分变更用途须办理分地块，且分割后面积须不小于变更后地类最小面积。合并的各宗地须用途、期限、地租缴纳形式一致（住宅用地与其他土地部分或全部合并等情形除外），不一致须同步办理用途变更、期限调整与地租形式变更。省级人委会按本条及当地风俗规定具体条件与最小面积。", en: "Consolidated Land Law text No. 44/2026/VBHN-VPQH (Mar 16, 2026), Article 220: land splits and mergers require a valid certificate, a live land-use term, no dispute, no distraint to secure a judgment and no urgent interim measure; where a dispute exists but its area and boundary can be fixed, the remainder can still be split or merged. Splits and mergers must provide access roads linked to the public network and adequate water supply, drainage and other needs, and land carved out as an access path does not need a use-change filing. Plots created by a split must meet the provincial minimum area for their current land type, merging with an adjacent plot if smaller; partial use changes require a split and the resulting plot must be at least the minimum area for the new type. Merged plots must share land-use purpose, term and land-rent form (except partial or full mergers of residential land with other land in the same plot), otherwise the purpose, term and rent-form filings must be made together. Provinces set the detailed conditions and minimum areas under this article and local custom.", src: "https://news.qq.com/rain/a/20261025A098GS00" },
    { date: "2026-10-25", tag: "数据 / Data", tagClass: "mid", zh: "Thanh khoản bất động sản Hà Nội, TP.HCM giảm trong quý III", en: "Thanh khoản bất động sản Hà Nội, TP.HCM giảm trong quý III", src: "https://news.google.com/rss/articles/CBMipAFBVV95cUxOU3pzNlVBM1h4akdmR1JsTEJiQm1CMEVvUURSekxJZG9wMWN1alpqLU1iS202MThfeXZrTVZIT2xxa3JsWUtiX1BKS0UtUnBXUzdMUWxSRHNDRUNuUm5jd2hDVVBGMFBQWkZlM0xwR3piZFZSOUJWamRhQWlNUjFBelhCeW81SnlBamlaN01PVEZYVy11UTIxNkF4OUs3UnVFbm5vVA?oc=5" },
    { date: "2026-10-24", tag: "市政 / Infra", tagClass: "good", zh: "Hạ tầng định hình giá trị mới của bất động sản công nghiệp", en: "Hạ tầng định hình giá trị mới của bất động sản công nghiệp", src: "https://news.google.com/rss/articles/CBMipAFBVV95cUxPSzYwMERWS2lnUF9TTGtSNlA1Uk1GRzE1SVBHclQxenR6WVVBY2d4MnF1UER1WjU1WXRrRWhTQkF0eDFzckRSX293Y2hqd2dWby1fZ1ZIVWRxMFpnakRBVjI2SWdTbmJuZWJXTTRHa2RqTmhNZUxpYjFKS3RwaTBxdVZpV012MmFxdnh3QmdyeXBzcXR5bm5Dd0pRRDZDcHZUMTFPaA?oc=5" },
    { date: "2026-10-25", tag: "中性 / Neutral", tagClass: "mid", zh: "Entiz Group 在 2026 年 PropertyGuru 越南房地产大奖中荣获 3 项大奖，一举成名。", en: "Dự báo 3 kịch bản cho bất động sản cuối năm 2026", src: "https://news.google.com/rss/articles/CBMiogFBVV95cUxNc2xVZjJOclVJdGZUcU1rUW9pVENGUDBRdTExbmZ6NTFSZTFCQmZSMnVQcDJ6WHNLd2FPZUZOOGFJbVRTOTQ5aV9oRGQxakNUX2dJbXhWay1PQkkzWG5kZUZJUExWcDRHRGdWUzR6X1NWYWFXWVRqTEh0LWFPd1BUMWtSMnR4RS1rRTVOOWl1SGFpQVBaT2h6S183aFhzRV8tSEE?oc=5" },
    { date: "2026-10-25", tag: "数据 / Data", tagClass: "mid", zh: "2026年前4个月全国保障性住房开工量超额44%", en: "The real estate market landscape in Q4 2026", src: "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQmFxMGxmTU9lcjNpRHk5MTg2MnFpcFNKTGZ3ZEI2NEEtUHNWUWFjZVJyTHJWTThHaHRPbzl3d1ZXSzRnYnlIV2ZHV3dkc3IxbUYzalQ1MnNjQUxvdmR6TVZZc1drWk9vazlpU3JLY1BieENoVEUyUkl0UW85TlpNYUpVTlhicW5rRERuUF9vbUlJWmRlejRlYVJSczU?oc=5" },
    { date: "2026-10-18", tag: "中性 / Neutral", tagClass: "mid", zh: "Cả nước có gần 53.000 bất động sản tồn kho", en: "Cả nước có gần 53.000 bất động sản tồn kho", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxQOXdoSmhJSm11bXlkRFl0QkVnM2Fmb0VXb3BDbkNLN0ZBZ1JjdEViT0p6WlJpNE0zMGxTZ2drUVBCeUVhd0VpcEx2VGpYYTRvclRpVDg2TFpwY2Qtb2E3M29wM2pod3VnT0RiT3FVVDViLXRwSmhpbGp5Y20zY2MtMEF3MA?oc=5" },
    { date: "2026-10-25", tag: "中性 / Neutral", tagClass: "mid", zh: "Cuối năm, đầu tư bất động sản như thế nào để an toàn dòng tiền?", en: "Cuối năm, đầu tư bất động sản như thế nào để an toàn dòng tiền?", src: "https://news.google.com/rss/articles/CBMiowFBVV95cUxNeXJncVJrNFFKT2F6bzFPSDVPLWdIX2h5NWJIejcxaGMtVzhoVUdoSzNjZW5UYWtoNURNMW9sVElkbC1BNnE5M1Z6RW5wZTJqeF9YUTFBWHJfSlpZRmFrYjBLQzBndWRzUU5DMkZBU1d2WEotYndqaENJNmJlS2pKb01KeXBmdlpRWTc3VTJZVWtNUGUwT0FxQks5VmNJd3U4bktZ?oc=5" },
    { date: "2026-10-24", tag: "中性 / Neutral", tagClass: "mid", zh: "汇率（10/24 口径）：SBV 参考汇率 25,627，与 10/23 持平；±5% 区间 24,335–26,909，SBV 交易中心买入 24,396、卖出 26,858。早间 Vietcombank 与 BIDV 均报买入 25,640、卖出 26,020（各降 20 盾），Agribank 25,660/26,040 持平，VietinBank 25,475/26,015（买降 112、卖降 17），TPBank 25,640/26,050，自由市场约 25,940/26,040。美元指数 10/24 约 101.75（+0.14%），美国 10 月制造业 PMI 56 创 53 个月新高、服务业由 58.8 回落至 57.9；市场等待 10/28–10/30 美联储、欧央行与日本央行会议（三家均预计按兵不动）。银行美元卖出价处于 2025 年 4 月中旬以来最低区间。对购房者：同额美元房款所需越南盾较 7 月高位再减，外币购房成本继续下降。fxRate 已按银行卖出价下调至 26,020。", en: "FX (Oct 24): the SBV reference rate held at 25,627, unchanged from Oct 23; the ±5% band is 24,335-26,909 and the SBV dealing desk quoted 24,396/26,858. In the morning Vietcombank and BIDV both quoted 25,640 bid / 26,020 ask (each -20), Agribank held 25,660/26,040, VietinBank quoted 25,475/26,015 (buy -112, sell -17), TPBank 25,640/26,050 and the free market ran near 25,940/26,040. The dollar index was about 101.75 (+0.14%) as US October manufacturing PMI hit a 53-month high of 56 while services eased from 58.8 to 57.9; markets await the Oct 28-30 Fed, ECB and BoJ meetings, all expected to hold. Bank dollar selling rates sit at their lowest since mid-April 2025. For buyers, the dong cost of a given USD price keeps easing versus the July peak. fxRate has been marked down to 26,020 on the bank selling rate.", src: "https://www.vietnam.vn/en/ty-gia-ngay-24-10-usd-ngan-hang-giam" },
    { date: "2026-10-24", tag: "数据 / Data", tagClass: "good", zh: "贷款利率开始落地（10/24 汇总）：多家商业银行公布新牌价，贷款年利率下调 1.5–3 个百分点，已公布名单含 Agribank、BIDV、VietinBank、MB、LPBank、SHB、ACB、TPBank、SeABank、OCB、Nam A Bank、BVBank。SBV 数据：新发放与存量贷款平均年利率 8.4%–10.9%，环比 +0.2pp、较 2025 年底 +1.7~1.9pp——即本轮下调发生在利率水平此前已走高的背景下。按 9 月底各行报送的个人客户平均贷款利率：OCB 11.38%、TPBank 11.03%、BVBank 11%、LPBank/Bac A Bank/VietABank 10.2–10.8%、VIB/ACB/PVcomBank/KienlongBank/MSB/Saigonbank 9–9.8%，国有行 BIDV 7.73%、Agribank 8.42%。至 10/14 全经济信贷余额近 21 千万亿盾（较 2025 年底 +11.44%、同比近 +17%），9 月居民存款约 11.43 千万亿盾（+10.63%）、企业存款约 6.34 千万亿盾。专家口径：林明政测算年营收 1,000 亿盾、借款 500 亿盾的企业，利率由 12% 降至 9% 可使税前利润由 40 亿增至 55 亿盾（+37.5%），但利率环境实质缓和更可能要到 2027 年，且需信贷与筹资同步、项目堵点疏通、通胀汇率稳定三项条件；杜天英俊提醒看「实际利率」与计息方式，而非仅看挂牌降幅。注：本轮以降经营类贷款为主，房贷浮动利率（12–16%）尚未跟进。", en: "Lending-rate cuts begin to land (Oct 24 round-up): several commercial banks posted new boards cutting lending rates by 1.5-3pp, including Agribank, BIDV, VietinBank, MB, LPBank, SHB, ACB, TPBank, SeABank, OCB, Nam A Bank and BVBank. SBV data puts average rates on new and outstanding loans at 8.4%-10.9%/yr, up 0.2pp MoM and 1.7-1.9pp versus end-2025 - so the cuts come after rates had already risen. Per bank reports for end-September, average retail lending rates were OCB 11.38%, TPBank 11.03%, BVBank 11%, LPBank/Bac A Bank/VietABank 10.2-10.8%, VIB/ACB/PVcomBank/KienlongBank/MSB/Saigonbank 9-9.8%, against BIDV 7.73% and Agribank 8.42% at the state banks. Credit outstanding reached nearly VND 21 quadrillion by Oct 14 (+11.44% YTD, almost +17% YoY), with household deposits about VND 11.43 quadrillion in September (+10.63%) and corporate deposits about VND 6.34 quadrillion. Expert views: Lam Minh Chinh calculates that for a firm with VND 100bn revenue and VND 50bn of bank debt, cutting the rate from 12% to 9% lifts pre-tax profit from VND 4bn to 5.5bn (+37.5%), but real relief is more likely in 2027 and needs three conditions - credit and funding growing in step, stalled projects unblocked, and stable inflation and FX; Do Thien Anh Tuan urges borrowers to watch effective rates and interest calculation methods, not headline cuts. Note: this round is mostly business lending; floating mortgage rates (12-16%) have yet to follow.", src: "https://news.qq.com/rain/a/20261024A04O7300" },
    { date: "2026-10-24", tag: "政策 / Policy", tagClass: "good", zh: "国会三法讨论要点（10/22 分组讨论，10/24 综合报道）：①《土地法》修订草案 112 条（现行 2024 年法 260 条），土地分类简化为农用地、非农用地、发展储备用地三类，取消省级独立土地利用规划、其内容并入省级规划，乡级计划简化并数字化；仍由国家定地价，但改为「省级地价表 + 调整系数」取代 2024 年法的逐项具体地价评估机制；每块土地设全国唯一识别码，数字登记与纸质证书同等效力；未使用土地 60 个月后可被收回，并拟对囤地按递增标准加征费用。②国会主席陈青敏提出：对因开发商未完成土地财务义务而停滞的项目，可允许受让方承继剩余义务，条件是财务能力清晰、承诺限期履行并有银行担保或财产抵押；要求建立快速处置机制应对开发商弃建或不愿推进的项目，保护已购房、已交定金者权益；并强调必须彻底阻止房产尚不具备交易条件时收取定金、预订款。③总理黎明兴称修法须既制度化中央新方向、又解决实践问题；住房按商业/租赁/公务/政策性四类划分的目的是让支持政策精准落到优先对象。④国会副主席阮鸿典要求三部法在所有权、土地使用权、证书核发与登记环节保持一致。", en: "Key points from the Oct 22 group discussions on the three draft laws (wrap-up Oct 24): (1) The draft Land Law runs to 112 articles against 260 in the 2024 law, simplifying land classification into agricultural, non-agricultural and development-reserve land, scrapping stand-alone provincial land-use plans in favour of embedding land content in the provincial plan, and simplifying and digitising commune-level plans; the state still sets land prices but via provincial price tables plus adjustment coefficients instead of the 2024 case-by-case valuation; every parcel gets a nationwide unique code, and digital registration carries the same validity as paper; land unused after 60 months may be recovered, with progressively higher charges proposed for hoarding. (2) NA Chairman Tran Thanh Man proposed letting a transferee inherit a developer's outstanding land-financial obligations where its capacity is clear, it commits to a deadline and provides a bank guarantee or collateral, and asked for a fast-track mechanism for abandoned or stalled projects to protect buyers and depositors, while insisting deposits or bookings be banned outright before a property is legally saleable. (3) PM Le Minh Hung said the amendments must both institutionalise central directions and fix practical problems, with the four housing categories (commercial, rental, official-duty, policy) meant to target support precisely. (4) NA Vice Chairman Nguyen Hong Dien asked for consistency across the three laws on ownership, land-use rights, certification and registration.", src: "https://news.qq.com/rain/a/20261024A04SS100" },
    { date: "2026-10-24", tag: "政策 / Policy", tagClass: "mid", zh: "社会住房 5 年后限售对象（10/22 草案建议、10/23–10/24 报道）：《住房法》修订草案提出，社房购房者在付清房款满 5 年并取得证书后，若转售仍只能卖给符合社房购买条件的对象，不再按 2023 年法可自由按市场价出售；5 年自「付清房款之日」起算（非交房日）。总理黎明兴称过去出现买社房等 5 年再按市价转售牟利、把福利政策变成套利机会的现象，须严格控制、逐笔核验，只有符合条件者才可受让。争议与待明确项：代表胡越朝建议为因工作调动、居住地变更必须搬迁者设例外机制（仅按原合同价出售可能难以筹款换房）；代表黎氏玉玲指出草案未明确转售定价原则，建议补充价格、买方条件、检查与事后核查，并为依 2023 年法已购房、已签约者设过渡条款；开发商 G6 认为须明确受理与审核主体（建议坊级人委会）、增值与装修部分如何处理、双方税负。注：目前仅为草案建议，现有业主的出售权利未因此改变。", en: "Resale restrictions on social housing after five years (draft proposal discussed Oct 22, reported Oct 23-24): the draft Housing Law would require social-housing buyers, five years after full payment and once certificated, to resell only to buyers eligible for social housing, ending the 2023 law's freedom to sell at market price; the five years run from the payment-completion date, not handover. PM Le Minh Hung said buyers had been waiting out the five years to resell at market prices, turning a welfare policy into arbitrage, and demanded strict control with case-by-case verification so only eligible households can buy. Open issues: deputy Ho Viet Chieu wants an exception mechanism for owners forced to move by job or residence change, since selling at the original contract price may not fund a replacement home; deputy Le Thi Ngoc Linh notes the draft lacks resale pricing principles and asks for rules on price, buyer eligibility, checks and post-audit, plus transitional terms for those who bought or signed under the 2023 law; developer G6 says the receiving and vetting authority must be named (it suggests commune-level committees), along with treatment of added value, fit-out and each side's tax. Note: this is only a draft proposal; existing owners' resale rights are unchanged.", src: "https://www.vietnam.vn/en/siet-ban-nha-xa-hoi-sau-5-nam-het-cua-ban-tu-do-vuong-gi-khi-thuc-hien" },
    { date: "2026-10-24", tag: "市政 / Infrastructure", tagClass: "good", zh: "胡志明城铁与轨道网（10/23 市建设厅与 MAUR 口径）：2026 年底前拟开工 5 个项目——2 个 PPP（地铁 2 号线参良—安下段、守添—隆城线）+ 3 个公共投资（旧平阳地铁 1 号线平阳新城—仙泉 32.8km、55 万亿盾≈21 亿美元；旧平阳地铁 2 号线土龙木—陶丹 35km、24 站、113 万亿盾≈43 亿美元，在陶丹站与滨城—参良线换乘；地铁 6 号线一期新山一—富友 22.9km、17 站、>86.5 万亿盾≈33 亿美元）。MAUR 主任 Phan Cong Bang 称 3 个公共投资项目拟 2026-12 获批、年内动工、2030 年前后运营。另：地铁 3 号线（头顿—巴地—富美）进入研究，并拟延伸至隆城机场（延伸段须纳入同奈省规划）；2 号线 ST4 和兴（10 月开工）与 ST6 潘文海（10/15 由 Bachy Soletanche 开工）已进场，全线 11 站中 5 站施工中，10 月底再开 3 站、12 月余 3 站。2026–2030 八项优先轨道项目；2030 年约 255km、2035 年 >500km、2050 年 28 线约 1,500km、公交分担 55–60%。", en: "HCMC metro and rail network (city DoC and MAUR, Oct 23): five projects are to break ground by end-2026 - two PPP schemes (Line 2 Tham Luong-An Ha and Thu Thiem-Long Thanh) and three publicly funded ones (former Binh Duong Line 1, Binh Duong New City-Suoi Tien, 32.8km, VND 55tn or USD 2.1bn; former Binh Duong Line 2, Thu Dau Mot-Tao Dan, 35km with 24 stations, VND 113tn or USD 4.3bn, interchanging with Ben Thanh-Tham Luong at Tao Dan; and Line 6 phase 1, Tan Son Nhat-Phu Huu, 22.9km, 17 stations, over VND 86.5tn or USD 3.3bn). MAUR head Phan Cong Bang says the three public projects should be approved in December 2026, start within the year and open around 2030. Separately, Metro Line 3 (Vung Tau-Ba Ria-Phu My) is under study with a proposed extension to Long Thanh airport, which would need Dong Nai planning. On Line 2, ST4 Hoa Hung started in October and ST6 Pham Van Hai broke ground on Oct 15 with Bachy Soletanche, so 5 of the 11 stations are under construction, with 3 more starting by end-October and the last 3 in December. Eight priority rail projects are listed for 2026-2030; targets are about 255km by 2030, over 500km by 2035 and 28 lines and about 1,500km by 2050, with public transport at 55-60% of trips.", src: "https://en.vietnamplus.vn/ho-chi-minh-city-prioritises-metro-links-to-airports-major-transport-hubs-post354200.vnp" },
    { date: "2026-10-24", tag: "数据 / Data", tagClass: "mid", zh: "Q4 市场展望与前三季执行（DXS-FERI / Savills / DKRA 汇总）：Q4 预计逾 3 万套产品入市，但受高利率与观望情绪压制，流动性仍承压。9 个月全国录得 39 个项目动工、93 个项目 kick-off、54 场开盘活动；Q3 因季节因素与谨慎情绪节奏明显放缓——开发商改为长期沟通、维护存量客户，为大面积交付做准备。付款政策成为最主要的需求刺激工具：首付低至个位数百分比、快付深度折扣、延长付款期、2–5 年利息支持与本金宽限，以及每月 6–8 百万盾或每月 1% 的弹性付款模式。DXS-FERI 三情景：理想（浮动利率回落至 10–12%）供应 +30–40%、价格 +5–10%、去化 40–45%；基准（利率维持 12–14%）供应 +20–30%、挂牌价持平、去化 30–35%；挑战（利率升至 14–16%）供应仅 +15–20%、价格小幅下行、去化 <20%，高杠杆资产将被迫止损抛售。DKRA 预计 Q4 地块类仅 200–300 个新品、集中于基建完备与法务齐全项目。Savills 胡志明研究副总监 Cao Thi Thanh Huong：高房贷利率同时压制开发商现金流与买方承受力，供应增加但需求走弱，产品结构多元、法务完整、付款期延长的项目才会有正向流动性。", en: "Q4 outlook and nine-month execution (DXS-FERI / Savills / DKRA round-up): more than 30,000 products are expected to enter the market in Q4, but liquidity stays under pressure from high rates and buyer caution. Nationwide, nine months saw 39 projects break ground, 93 kick-off events and 54 sales launches; Q3 slowed markedly on seasonality and caution, with developers shifting to long-horizon communication and nurturing existing customers ahead of bulk handovers. Payment policy is now the main demand lever - down payments as low as a few per cent, deep early-payment discounts, extended schedules, 2-5 years of rate support and principal grace, plus flexible plans of VND 6-8m a month or 1% a month. DXS-FERI's three scenarios: ideal (floating rates easing to 10-12%) gives supply +30-40%, prices +5-10% and absorption 40-45%; base case (rates at 12-14%) gives supply +20-30%, flat list prices and 30-35% absorption; stress case (rates at 14-16%) limits supply growth to 15-20%, trims prices and pushes absorption below 20%, forcing stop-loss selling of highly leveraged assets. DKRA expects only 200-300 new land-plot products in Q4, concentrated in fully serviced, legally clean projects. Savills HCMC associate director Cao Thi Thanh Huong says high mortgage rates squeeze both developer cash flow and buyer affordability, so only projects with diverse product mixes, complete legal files and extended payment terms will see positive liquidity.", src: "https://worldculturefestival.vn/en/dien-mao-buc-tranh-bat-dong-san-quy-iv-2026" },
    { date: "2026-10-24", tag: "政策 / Policy", tagClass: "mid", zh: "河内回应社房价格走高（10/24 市建设厅）：多个新推社房项目已触及甚至超过 3,000 万盾/㎡。建设厅称售价主要由建设投资成本与法定利润率决定，而建材、人工、贷款利息与相关费用均在上涨；价格管控应聚焦各成本项的来源、依据与合法性，而非仅看最终售价，并须正确识别国家对社房项目的优惠与支持——避免投资方在已享受优惠后仍将对应成本计入售价；利润率须按允许成本确定正确比例；社房与商品房/商服混合项目的共同成本分摊（技术基础设施、社会基础设施、管理、咨询、一般费用、土地使用费）须严格审核，分期项目还须按各期投资范围核定成本、避免重复计入。建设厅并建议按「各主体职责清晰」原则全流程管控：投资方对售价负责、咨询单位对核价结果负责、审计单位对审计结果负责、国家机关依机制检查，国家机关不应替代投资方/咨询/审计的职责。对照在售项目：Hnasa（Arlington）遵礼 2,970 万盾/㎡（含 VAT）、阮廌街 275 号 N02 武装力量住房 >3,220 万、清烈坊 Videc-长成约 3,140 万盾/㎡。", en: "Hanoi responds to rising social-housing prices (city DoC, Oct 24): several new social-housing projects have reached or exceeded VND 30m/sqm. The department says prices are driven by construction cost plus the statutory profit margin, with materials, labour, loan interest and related expenses all rising, so price control should focus on the origin, basis and legality of each cost component rather than the final price - and must properly account for state incentives so developers do not book incentivised items into the price. The profit margin must be set on allowable costs, and common-cost allocation in mixed social/commercial projects (technical and social infrastructure, management, consulting, overheads, land-use fees) must be tightly vetted, with phased projects costed per phase to avoid double counting. It proposes full-process control with clear responsibilities: the developer owns the price, the consultant owns the verification, the auditor owns the audit, and the state inspects under the applicable mechanism rather than substituting for them. Market comparables: Hnasa (Arlington) in Duc Le at VND 29.7m/sqm VAT-inclusive, the armed-forces housing at N02, 275 Nguyen Trai above VND 32.2m, and Videc-Truong Thanh in Thanh Liet about VND 31.4m/sqm.", src: "https://www.vietnam.vn/en/ha-noi-noi-gi-ve-gia-nha-o-xa-hoi-ngay-cang-cao" },
    { date: "2026-10-22", tag: "数据 / Data", tagClass: "mid", zh: "Thêm 3 bất động sản của Trương Mỹ Lan được định giá hơn 169,2 tỉ đồng", en: "Thêm 3 bất động sản của Trương Mỹ Lan được định giá hơn 169,2 tỉ đồng", src: "https://news.google.com/rss/articles/CBMisgFBVV95cUxQaU8zdzYyNmdPaEFVTF9TdVl2djN6RC1nSldSa3J0ejRSbDVrQnVzcEpjb0Y5R1B6MWx1VTloNU9hZ1p4LTYzT1FmWkNSNW5ZWF9YZDlnRWZvMkdaU1hSYzd3NWtBWld6TUppZGNqOUlCMWpRSEJXaElsSDBFS0paRnFMblVsWmVFY1JGcEpUOG56ZFdxLUdtb3dNZ1Q1NHRMOF9pbDRwM2xKcldJQmJrcHBn?oc=5" },
    { date: "2026-10-24", tag: "中性 / Neutral", tagClass: "mid", zh: "Lộ diện phân khúc bất động sản “ế ẩm”", en: "Lộ diện phân khúc bất động sản “ế ẩm”", src: "https://news.google.com/rss/articles/CBMigAFBVV95cUxPSG52bEg4RVJ5QnBqLVFvVUt4NW5nb0t0NnpOUGFkS0ZDN3VvN0FEeVFxdUVGREwwa0NvajlXcUpBWHIzdTQ0SWpZbGE1Nkl1bmh0YVZtMUlFSXFmSVZRNVU4OWNSMTMxUkxyOU1rbV8xYkc4QzhFdGVpWThZa3Nkbw?oc=5" },
    { date: "2026-10-19", tag: "中性 / Neutral", tagClass: "mid", zh: "Lộ diện phân khúc bất động sản “ế” nhất", en: "Lộ diện phân khúc bất động sản “ế” nhất", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxNUTdnZFQ4WEppejRMY0JLck0tM3lqSVR5RkZZemQxUENxazV5Z0t6SjRkLUR3SjVqVEVLUWZuM2dNZXJmc2tNU2pTUlB1cHBvUmNWaXRXcXZnanUyYncxVHkxTUxhQkx0VDJfbTN2N19oeUphb3oyNE13YW9iU1ZISEh2Zw?oc=5" },
    { date: "2026-10-22", tag: "中性 / Neutral", tagClass: "mid", zh: "Doanh nghiệp bất động sản họ APEC lại bị phạt", en: "Doanh nghiệp bất động sản họ APEC lại bị phạt", src: "https://news.google.com/rss/articles/CBMilAFBVV95cUxQU0JrZDhySUY2eFlFNF92NVp1TFppendoSXBndWl6UUl4c2VLakVUTDdQZWRrRU1hanZNRTNZZFVHelhIdEJBTlZ6MFdEY29WeDZLOXA3TVNoTndrQkNqM05iZUptcUF2ZjJQY2JGclRnN2VyaFRZTGRDQi10NVJTcHRURFVoT3BkcUFmMV9iQ1VoWXJ6?oc=5" },
    { date: "2026-10-24", tag: "新盘 / Launch", tagClass: "good", zh: "Đặt tên nội hay tên ngoại cho dự án bất động sản?", en: "Đặt tên nội hay tên ngoại cho dự án bất động sản?", src: "https://news.google.com/rss/articles/CBMilAFBVV95cUxQbFBCaEZuLUQtb0lNajVOU01MQlJmY1BZWDRHdGtwR3lmNENlczluZ3F2aDRoekRtdVhvU3V3OWdZZW1feXJ2ZXRBODBBRUhwU0RKTFdhaUl4Q2FSX1hpTDlqVnhRekM0MUFRSDQyalhzajFhWHl6WllLcVc2N0Zpal9tZFBQalJ6V2F0Wk1UQUhoV2Z3?oc=5" },
    { date: "2026-10-24", tag: "中性 / Neutral", tagClass: "mid", zh: "Bất động sản Việt Nam đã đến ngưỡng dư cung?", en: "Bất động sản Việt Nam đã đến ngưỡng dư cung?", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxPaVBGNEI5blVjUVNNMkFfRGRMaTAtdEhHMWZsVENFVFV0M1g0OWpDakt0b0d1N2M2bG5WRjZzS3ZPT0c1S2xTWUpJS21rWmhJV1p0NWxRLWhzZXhwVmloc3hVYWtDM1RYejRaRVBmZ21aOE8wUXVseXB3SlIzY2JzRkRsNA?oc=5" },
    { date: "2026-10-24", tag: "数据 / Data", tagClass: "mid", zh: "Bất động sản 24/10: Lãi suất đang giảm, cơ hội mua nhà mở ra nhưng áp lực vẫn còn", en: "Bất động sản 24/10: Lãi suất đang giảm, cơ hội mua nhà mở ra nhưng áp lực vẫn còn", src: "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOaXN6alI1Q3NFNk5BR0hGYWlQUGI0NktFS0xNR1FWMXl2cllNdmZHSERjeUgxRU85LWpkQlF3ZWNBTEs2UnUzU1hFVElNMVpoZUFhYmQ4VXpLenAxYU9HeGNwSWdfcTZwTGswOW9vRjJfNkxwaFRGVFAza3J0bnBuVFJDR0txQ3djRV9zUEk3ZGxVX2FRcFVVZmFlTWJ0X3hVU1ppTU5xOVZqcEVBTzlLQlFUckl0YXFPSTMwcVQtTHlqZw?oc=5" },
    { date: "2026-10-23", tag: "数据 / Data", tagClass: "good", zh: "定存利率续降（10/23 快照）：PGBank 与 Saigonbank 同日下调 0.5pp，全系统累计 22 家银行已按 SBV 要求下调（LPBank、VietBank、BVBank、Bac A Bank、BaoViet Bank、OCB、HDBank、KienlongBank、Nam A Bank、NCB、Sacombank、TPBank、VPBank、ABBank、MBV、PVcomBank、SHB、MB、SeABank、Techcombank、PGBank、Saigonbank）。PGBank 自 10/23 起柜面普通定存与原 Phuc An Khang 产品 6–9 月降至 6.1%、12–13 月 6.2%（1–5 月维持 4.75%、18–36 月维持 6.8%），线上渠道未动（1–5 月 4.75%、6–9 月 6.9%、12–13 月 7.0%、18–36 月 6.8%）；Saigonbank 线上 6 月 6.4%、7–11 月 6.1%、12 月 6.7%、18 月 6.5%、24 月 6.0%、36 月 6.1%，1–5 月维持 4.75% 上限，13 月期 7.9% 为该行最高（柜面与线上同价）。同日 SBV 公布 9 月数据（10/22 晚发布）：6–12 月平均定存利率 8.1%（环比 +0.1pp、一年前 5.5%），连续第 11 个月上升但月增幅由 0.3pp 放缓至 0.1pp；24 月以上最高 8.2%；含迎新、周末与双日加成的实际 12 月/24 月常见 9.3%/9.8%。9 月平均贷款利率 10.9%（较 2025 年底 +近 2pp），优先领域短期贷款仍贴 4% 上限。注：SBV 均值含促销加成，与挂牌价口径不同（挂牌 6–12 月多在 4.7–7.0%），勿直接对比。", en: "Deposit rates keep falling (Oct 23 snapshot): PGBank and Saigonbank both cut 0.5pp, taking the system-wide count to 22 banks that have lowered rates as directed by the SBV. From Oct 23 PGBank cut counter rates on ordinary savings and the Phuc An Khang product to 6.1% (6-9m) and 6.2% (12-13m), keeping 1-5m at 4.75% and 18-36m at 6.8%, while its online board was unchanged (4.75% 1-5m, 6.9% 6-9m, 7.0% 12-13m, 6.8% 18-36m). Saigonbank's online board now shows 6.4% (6m), 6.1% (7-11m), 6.7% (12m), 6.5% (18m), 6.0% (24m) and 6.1% (36m), with 1-5m held at the 4.75% ceiling and a 7.9% 13-month offer as its highest. Also on Oct 23 the SBV published September data (released on the evening of Oct 22): average 6-12 month deposit rates reached 8.1%, up 0.1pp MoM and from 5.5% a year earlier - an 11th straight monthly rise but slowing from 0.3pp; terms above 24 months peaked at 8.2%, while effective 12- and 24-month rates including newcomer, weekend and double-day premiums were commonly 9.3% and 9.8%. Average lending rates were 10.9% in September, nearly 2pp above end-2025, with priority-sector short-term loans still at the 4% ceiling. Note: the SBV averages include promotional premiums and are not comparable with posted boards (mostly 4.7-7.0% for 6-12 months).", src: "https://www.vietnam.vn/en/lai-suat-ngan-hang-hom-nay-23-10-2026-them-2-nha-bang-giam-lai-suat" },
    { date: "2026-10-23", tag: "中性 / Neutral", tagClass: "mid", zh: "汇率（10/23 口径）：SBV 参考汇率 25,627（较 10/22 的 25,632 降 5 盾），±5% 区间 24,346–26,908。早 8:05 Vietcombank 与 BIDV 均报买入 25,660、卖出 26,040（各降 10 盾）；VietinBank 25,490/26,030、MB 25,650/26,030、ACB 与 Sacombank 卖 26,030 持平，自由市场约 26,080。商业银行美元卖出价处于约一年半低位（10/22 曾见 26,030）。美元指数 10/23 约 101.52，前一交易日一度触及月初以来最低 101.44；日元升至逾一个月最强、美债收益率明显下行。对购房者：同额美元房款所需越南盾较 7 月高位再减，外币购房成本继续下降。fxRate 已按银行卖出价下调至 26,040。", en: "FX (Oct 23): the SBV reference rate was 25,627, down 5 dong from 25,632 on Oct 22, with the ±5% band at 24,346-26,908. At 8:05 Vietcombank and BIDV both quoted 25,660 to buy and 26,040 to sell (each -10); VietinBank quoted 25,490/26,030, MB 25,650/26,030, and ACB and Sacombank held their 26,030 selling rate, with the free market near 26,080. Bank dollar selling rates are near an 18-month low (26,030 on Oct 22). The dollar index was about 101.52 on Oct 23 after touching 101.44, its lowest since early October; the yen hit a one-month high and US Treasury yields fell sharply. For buyers, the dong cost of a given USD price keeps easing versus the July peak. fxRate has been marked down to 26,040 on the bank selling rate.", src: "https://en.vietnamplus.vn/reference-exchange-rate-continues-going-down-on-october-23-post354181.vnp" },
    { date: "2026-10-23", tag: "市政 / Infrastructure", tagClass: "good", zh: "胡志明城铁（10/23 MAUR 口径）：地铁 2 号线（滨城—参良，11.3km、投资 >55 万亿盾）现于 5 座站施工（范文白、黎氏莲、范文海、和兴、巴拐），10 月底前再开工 3 座（陶丹、七贤、阮鸿道），12 月开工余下 3 座，2026 年内 11 座站全部动工；11 月起施工高架段（846m）、高架站（新平站为全线唯一高架站）与参良 Depot（>23 公顷、21 个功能区）。目标 2030 年底商运。全市层面：2026 年底前 5 个项目开工——PPP 模式的地铁 2 号线参良—安下段与守添—隆城线，公共投资的旧平阳地铁 1 号线（平阳新城—仙泉 32.8km、55 万亿盾≈21 亿美元）、旧平阳地铁 2 号线（土龙木—陶丹 35km、24 站、113 万亿盾≈43 亿美元，在陶丹站与滨城—参良线换乘）、地铁 6 号线一期（新山一—富友 22.9km、17 站、>86.5 万亿盾≈33 亿美元）。上述三个公共投资项目拟 2026-12 获批并年内开工、2030 年前后运营。远期规划 28 线约 1,500km，2030 年约 255km、2035 年 >500km，2050 年公共交通分担率 55–60%。", en: "HCMC metro (MAUR, Oct 23): Line 2 (Ben Thanh - Tham Luong, 11.3km, over VND 55tn) is now building at 5 stations (Pham Van Bach, Le Thi Rieng, Pham Van Hai, Hoa Hung, Ba Queo), with 3 more (Tao Dan, Bay Hien, Nguyen Hong Dao) to start by end-October and the last 3 in December, so all 11 stations break ground within 2026; from November work begins on the 846m elevated section, the elevated station (Tan Binh, the line's only one) and the 23ha Tham Luong Depot with 21 functional zones. Commercial operation is targeted for end-2030. City-wide, five metro projects break ground by end-2026: two PPP schemes (Line 2 Tham Luong - An Ha and Thu Thiem - Long Thanh) and three publicly funded ones - the former Binh Duong Line 1 (Binh Duong New City - Suoi Tien, 32.8km, VND 55tn or USD 2.1bn), former Binh Duong Line 2 (Thu Dau Mot - Tao Dan, 35km, 24 stations, VND 113tn or USD 4.3bn, interchanging with Ben Thanh - Tham Luong at Tao Dan) and Line 6 phase 1 (Tan Son Nhat - Phu Huu, 22.9km, 17 stations, over VND 86.5tn or USD 3.3bn). The three public projects are due for approval in December 2026 with groundbreaking before year-end and operations in the 2030s. The long-term plan is 28 lines and about 1,500km, with roughly 255km by 2030 and over 500km by 2035 and a 55-60% public transport share by 2050.", src: "https://thanhnien.vn/tu-nay-den-cuoi-nam-se-thi-cong-them-6-nha-ga-metro-so-2-tphcm-185261023112759106.htm" },
    { date: "2026-10-23", tag: "新盘 / Launch", tagClass: "good", zh: "守添新盘开工（10/23）：Lotte Eco Smart City 守添项目动工，由 Lotte 集团与 Phat Dat 合资开发，位于守添新区功能区 2A（安庆坊），占地约 7.45 公顷、总投资约 60 万亿盾（≈14.3 亿美元），为金融、商业、服务与住宅复合体。市人委会副主席阮公荣称守添定位为金融商务与服务创新核心区，胡志明 2026 年目标吸引外资 190 亿美元。Phat Dat 总经理裴光英武称项目价值取决于施工进度、功能、可持续性与长期社区价值，而非仅规模与建筑。对片区影响：守添一手供应与商务配套进一步集中，可与地铁 2 号线滨城—参良段、守添—隆城线形成叠加。", en: "Thu Thiem groundbreaking (Oct 23): the USD 1.43bn Lotte Eco Smart City Thu Thiem broke ground, a joint venture between Lotte Group and Phat Dat on a 7.45ha site in Functional Area 2A of the Thu Thiem New Urban Area (An Khanh Ward), with total investment of about VND 60tn and a mix of financial, commercial, service and residential space. Vice Chairman Nguyen Cong Vinh framed Thu Thiem as the city's finance, commerce and innovation core, with HCMC targeting USD 19bn of FDI in 2026. Phat Dat CEO Bui Quang Anh Vu said an iconic project is measured by quality, construction progress, function, sustainability and long-term community value rather than scale alone. For the district this concentrates prime Thu Thiem supply and business amenities, layering on top of Metro Line 2 (Ben Thanh - Tham Luong) and the planned Thu Thiem - Long Thanh line.", src: "https://en.sggp.org.vn/us143-billion-lotte-eco-smart-city-thu-thiem-project-breaks-ground-post130497.html" },
    { date: "2026-10-23", tag: "政策 / Policy", tagClass: "mid", zh: "国会三法分组讨论（10/22 下午续会、10/23 报道）：①强制公证范围——司法部长黄清松主张由法律直接规定强制公证的交易类型，若授权政府则须明确授权内容、范围与限制；有意见主张授权政府以适应数字化转型，反对方指出立法定范围与事后由议定决定在稳定性、可预见性与政策责任上差异显著。2026 年《公证法》将自 2027-01-01 生效，规定须公证的交易依重要性、参与条件与法律安全水平由法律确定。②外籍配额——胡志明代表阮清心反对把 30% 公寓上限改为由政府按实际情况确定，主张法律保留硬性 30% 上限，仅授权政府规范计算方式、栋内套数管理与多栋统筹；理由为人口与领土管理、国防安全（边境、沿海、岛屿及战略设施周边），并称任何调整须有清晰依据与控制机制。③产权衔接——胡志明代表陈英俊指草案允许外籍购买/租赁建筑项目楼层面积，但现行《土地法》不承认外籍个人为土地使用权人，须明确建筑物所有权与土地使用权边界、期限、限制区域及登记发证程序，否则红本核发与历史遗留问题难解。", en: "NA group discussions on the three draft laws (continued Oct 22 afternoon, reported Oct 23): (1) Notarisation scope - Justice Minister Hoang Thanh Tung wants the law itself to list which property transactions require notarisation, and any delegation to the government to specify content, scope and limits; some deputies prefer delegating to the government for digital-transformation flexibility, while opponents say legislating the scope differs materially from deciding it later by decree in stability, predictability and accountability. The 2026 Notarisation Law takes effect on Jan 1, 2027 and ties mandatory notarisation to transaction importance, participation conditions and legal safety. (2) Foreign quota - HCMC deputy Nguyen Thanh Tam opposed moving the 30% apartment cap into government discretion, urging the law to keep the hard 30% cap while authorising the government to set the calculation method, unit-count management and multi-tower coordination, citing population and territorial management and national defence and security, especially in border, coastal and island areas and near strategic facilities. (3) Title linkage - HCMC deputy Tran Anh Tuan noted the draft lets foreigners buy or lease-purchase floor space while the Land Law does not recognise foreign individuals as land users, so the boundary between building ownership and land-use rights, plus terms, restricted areas and registration procedures, must be clarified or red-book issuance will stall.", src: "https://news.tuoitre.vn/vietnamese-lawmaker-proposes-retaining-30-cap-on-foreign-ownership-of-apartments-in-condominium-buildings-103261023205115254.htm" },
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
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  hotTopics: [
    { date: "2026-10-14", rank: 1, heat: 100, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Giá bất động sản giảm đến 20% trong quý III", titleEn: "Giá bất động sản giảm đến 20% trong quý III",
      zh: "Giá bất động sản giảm đến 20% trong quý III", en: "Giá bất động sản giảm đến 20% trong quý III", vi: "Giá bất động sản giảm đến 20% trong quý III",
      srcName: "VnExpress", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxORzVJZms3bVNMdzc0U0hHcVhtYnpfbmNlMWZ6UlpTUjRMSzltLW5vTUZZT3hOTmQ0eXBqSDQzR2hyWjVvSTZtRlp6MUl1SDRyOUI1b2RoRWp6NEo5dmI2ZjVGVTJTSTMwbHdJak0telpiVk0zYmJxQUdjZHp2NXFKWE4xTQ?oc=5",
      coverage: 5, related: [{ n: "Báo Thanh tra", u: "https://news.google.com/rss/articles/CBMitAFBVV95cUxNVi1idEhEZjBpUDdpOHkzeTlRcTNyWGd4MWcwelV4MU4wU0VZV29WSTh0Q05oQ29vd3JRMU9tUDVlWm9nZ3U2S0ozV3JLZlI3WGpudld4bURKR0RUSjJ6bk1iRnBmZ2xCU0NmZUI1enpqM3lfbEozTVc5UUQxRW1FUHJza3poRWs0bXVCdDNKbjJVY2Znbkg1RGE1bDZfTlBvU090WVJENTZ6V0FhZFlxRkxHcVI?oc=5" }, { n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNZklyQkswc3cySUJKUWRLM3FkNHJMWDdiMFhGMk1kUmFvYWgtT0lFQWx2bXhNV2ZnbXRnR1czOEcxOV8tR2RUMEFlVEh0dEtBd0JRX0s5cUhaU196cGhpdWdqLWdFYVp0Y2F6aHlWRE11NFZpWmpMMnVOWDlXN3RPaHZ1ZERrZjdWN2JSemZiNnNYTUxNR2FjcEdyb05IQlU1VWZKYmd1cXJQRldzMXBv?oc=5" }, { n: "Báo Thanh Hóa", u: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPbVZ6VTZlRWVVeTlYc1BBMUdkMEJWcUJWaXJBZWtKbnFjMUpaa0NSOTRmd0tCbmR2a01aWHpxLVlhS2x6WmQ3QW5NSmdJbTdqc2pLb0FFYm1pMkF5QTdacmtMQ2hRUEpCMS0wLXo4VC1rRjJEYVM2LVJHQ2NoNEp0bGJxcVRTRG5EYTdUVTR6RlZuY0VZZE9FeEVBd2NtcjFQaGJ6M094WmswUQ?oc=5" }] },
    { date: "2026-10-23", rank: 2, heat: 100, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Đấu giá không thành 4 bất động sản gần 375 tỉ của bà Trương Mỹ Lan", titleEn: "Đấu giá không thành 4 bất động sản gần 375 tỉ của bà Trương Mỹ Lan",
      zh: "Đấu giá không thành 4 bất động sản gần 375 tỉ của bà Trương Mỹ Lan", en: "Đấu giá không thành 4 bất động sản gần 375 tỉ của bà Trương Mỹ Lan", vi: "Đấu giá không thành 4 bất động sản gần 375 tỉ của bà Trương Mỹ Lan",
      srcName: "Báo Thanh Niên", src: "https://news.google.com/rss/articles/CBMirwFBVV95cUxPV2FYZHRKSlV2ZzkzM3VqSFh0WFhQTDAxVUNUaUthR09kbGNPQkpvdmFfbmp6NXpFMVJLc1dqQzQ0cGh5TWJSRlA4STNBa19RaER3NUhjeU5pQ0xZeUp1M3JpcWphRHhOYzBTRUQ1eWhWeERoeVp0OEljVUd0ZWxJTmQzMFVFbHV2WEpqdnplbkQ4VU92NzlwYkFucHFjTFloa21VaXFkQlpEOGhYUFNR?oc=5",
      coverage: 6, related: [{ n: "CafeF", u: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOVWhoNUViakVIeUJjYVVzSEJCNk1pOGx1MmZKdDNDbldHVFZEbFhRZGd4NU5YRkFRZ3VFOXVKNlBCWGU2NVFmSXZKZkxFVnpZV3R3NXZqQnR0UnM2NjZTNW5IMUswbHZwRHBOLVM3eDVtMkt6ZmJWVFJ4NGoxVldfeFg5TXVWeVUtdE5XVEhQeThlaU5TZVNZazFNaXU2NEJ2YnFRS3JEU0c5UQ?oc=5" }, { n: "Vietstock", u: "https://news.google.com/rss/articles/CBMinwFBVV95cUxNR21NemJkNTdURVRmSW5GaXRDaEZqN2JTelROWTJaYnhUblBNeVJiSVpZSTNoR0xDOTc3ZWViUGpoOUR1T0ZpbEZxN241aTJTRGY2VVYyTnlwYTRaZWk3Q0xweGhXZmFGQUxvTXNBSjJsYmVZUnZYTFNvcHdwaTh6U1B4cWQ0QlphUlhmZ3N2X3EydENLSFNRcTVlZkprS28?oc=5" }, { n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMisgFBVV95cUxPbEowNXctNXpDUVNId1UtTTA4Y2ZGcEpEMk5HMXZkdkhlX19XSmtQajBFMDZRdHJURlJyb2VuWFJTQk05bXJhV0MyZlFYNUFLMXFQTmtJZkYxQ09MTXhHMWlJRFZEQzBhb2R1YnEzSS1lNVVaRVF4NzJRV0R6eWtjMy1Jck9vc01Cemx1Q3N6aXE4VEtjQVFPbTVrYlVpYjVRTDdBTHBOVnRUaHhNb09xQU9R?oc=5" }] },
    { date: "2026-10-26", rank: 3, heat: 87, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Bất động sản cho thuê hiện ra sao?", titleEn: "Bất động sản cho thuê hiện ra sao?",
      zh: "Bất động sản cho thuê hiện ra sao?", en: "Bất động sản cho thuê hiện ra sao?", vi: "Bất động sản cho thuê hiện ra sao?",
      srcName: "Tin tức 24h", src: "https://news.google.com/rss/articles/CBMijgFBVV95cUxOenFjTk1JZW1PZXYyZWUtVE9SVUxxWmppWEFic1AtWlFJQlFEU2ZzNU5VQloybDhLVTZnekhMMjRhc3ZQd3I4SUlxR1ZuSTJkZzdfX2R2YU5BYTEtSHdfbk4yeDB3blRJNERBYzdLbi1lWDBfZEJBczItOW5MS21NdkdFdmdFVmtfdmNnZldB?oc=5",
      coverage: 3, related: [{ n: "Báo Diễn đàn Doanh nghiệp", u: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVFJNc09XRnBZbG5hMUtWTDdrVUhVUDB4b1oyZmNua3pFV09BV0hKM0w5Z3NmanctQ0FBVG5jN3BXaS11bjlSN1c4S0dTdnF0STl3RmxBNFJsWldtLXBNdzFDcHBVMk1pOEo5ZnNGenAtQkZBcFBDZGNPS29wdXNHSm9QMi1leEk?oc=5" }, { n: "Báo Diễn đàn Doanh nghiệp", u: "https://news.google.com/rss/articles/CBMipAFBVV95cUxQd3RfalpCRFpxVDc3VjhNbk1OSXlkMDFWaUh2VVFvV0gwNC1fM0ZRSEJRQmlTTkhvR0M5cUFhRzA5WVU1aHhHdDdjN0w4THNlT0RVYUUzdmtjdkVsaUxkRzJvT2duMkRFTG54UDNkRDhfOXlTSnpRMGlmN3NkbS1aWjRPbVZ3Z3ZMazJlUkdIc0hTNllXWGVOLVhQcndGdjJOSWVHeQ?oc=5" }, { n: "Tạp chí Doanh nghiệp và Hội nhập", u: "https://news.google.com/rss/articles/CBMimwFBVV95cUxPaEJDRk40a2F1QzJubUxUUFA5RnhuamRJTF96RVJQcUY4QjJfbU83NDZzMnI0aWNaUU5TeExyRDdiNzlld25oWHNJZGVybXZQMFZ5dk5ZZ3NQTVFmZzVhcGxSRnZVLWpEV0toNWt5S0ctdkdtT3BDRXhHT3ZoczFwT05sQmRhazZBOGR5cFIzZ0c3RGpSTFdCODMyQQ?oc=5" }] },
    { date: "2026-10-26", rank: 4, heat: 100, tag: "新盘 / Launch", tagClass: "good", raw: true,
      titleZh: "Siêu dự án được huy động vốn 237.000 tỷ đồng; di dời khẩn cấp hộ dân ở chung cư chờ sập", titleEn: "Siêu dự án được huy động vốn 237.000 tỷ đồng; di dời khẩn cấp hộ dân ở chung cư chờ sập",
      zh: "Siêu dự án được huy động vốn 237.000 tỷ đồng; di dời khẩn cấp hộ dân ở chung cư chờ sập", en: "Siêu dự án được huy động vốn 237.000 tỷ đồng; di dời khẩn cấp hộ dân ở chung cư chờ sập", vi: "Siêu dự án được huy động vốn 237.000 tỷ đồng; di dời khẩn cấp hộ dân ở chung cư chờ sập",
      srcName: "Chuyển động Thị trường", src: "https://news.google.com/rss/articles/CBMixwFBVV95cUxQMmhQckFVQXdsUmhBZmFlWHUtWm9tTjJpVXlwWEg0RU4ySGo0SFp3c1ZZTnZBQkh4dlVMZHlqQVVnbGVKYS1YR3duNDVXbkVlMlc4UExpU21mbXFtY0xTemRzU2trc3NhRU5mdUp1T3p5LVFYV2JpT1N4YWZwRi1la1lRTG9YWDROdjh1bDlFb3EyZW1CQmlUbkxJOENMZUVQcHZLaVE5anhlMVpiUkdKWHFCcGJxWGs3SkEwcGhFSzRlMGt1NGVV?oc=5",
      coverage: 6, related: [{ n: "Báo Tiền Phong", u: "https://news.google.com/rss/articles/CBMizgFBVV95cUxOSUtmekE4UXNpenl6VGF6YkFkREN1RWlQd2ozVWZqaHZQelZ6UG5Pa1dWQXhLaVZQd0x2Tl9NUG5zdW00YXQ5Y01NVVZjQnhyektoMHVfQXQ0S2pUUndYbHR3bDVxeVRnUnczN2d6Zlh1SEVEa0ZVS1RTSVdFX3lzUkVYSW84azlxYWxfSjZxa0hfejlFWW5rNXFYZnp4RGI4RXJscG5Pd1drV3dFVm1aZzAzLS12cVFrYWtzVG5WVWZuZUt2VHpwa2JsUWt5dw?oc=5" }, { n: "Znews", u: "https://news.google.com/rss/articles/CBMijgFBVV95cUxNeUpMUmtWVDQ1ZDMwM2RvZUw0cXVZSVVGdWVFQ0NoLXFjQUpOTE5zckZPd09oLU1PLS01NHpNcVkxcER1WVNHWmw2SXhRR0hGQnhBM1c5azZWSW1zR19rUUpRanBrMlFuMjhsekNyN0xxcURFUW1uLWlZQ1U4NWF6MnZfcm5LQU5QOThKT3JR?oc=5" }, { n: "CafeF", u: "https://news.google.com/rss/articles/CBMitwFBVV95cUxQT2QzUmp6S3lheUJ4dnBJZHNMbGJuZTNnN1VpcXFGNGM2Ni1oZU1xLXJIeDllcG5IQlE4eC1xbTZUUDM0MFFmdXRRdHdDZE10TmxrWGU5eFBTT0QyV0V1OS1jY0lJMHlweE00RWJXRmFET2t5a3Jid1ZIZThzbXQ5MkIwNEVQUUFnRWl1bDk2Z3pKLWF0NDA4TU40QXhqemc1MHlmQW5aYnNGTTM2XzV0OUotNDBGT0U?oc=5" }] },
    { date: "2026-10-22", rank: 5, heat: 91, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Thị trường bất động sản cuối năm: Phụ thuộc lãi suất", titleEn: "Thị trường bất động sản cuối năm: Phụ thuộc lãi suất",
      zh: "Thị trường bất động sản cuối năm: Phụ thuộc lãi suất", en: "Thị trường bất động sản cuối năm: Phụ thuộc lãi suất", vi: "Thị trường bất động sản cuối năm: Phụ thuộc lãi suất",
      srcName: "Báo Tiền Phong", src: "https://news.google.com/rss/articles/CBMikgFBVV95cUxOSHJVYnVLWmY3VWtfRzVlYVB0X2VmdXdfam9iYzBYbnZkanNXNVZVQldJQnU4QlN1S0ljSGFGZ2VaWFhTLVQycXdabng3WU56LUxtd090b04tSUNvUGs4MFQ5RTdvaWI4dVZwa2ZUa2I5NnJNVzdRYjhNanlzc2YxQTVhN1JqYVk3QXA4YTlLcUFvZw?oc=5",
      coverage: 4, related: [{ n: "Báo Diễn đàn Doanh nghiệp", u: "https://news.google.com/rss/articles/CBMihwFBVV95cUxQVHVUTnNpYmk2S2taeDh0MlJDN2pVSmRudHROT1haNWF6bzQ3QjZVNDhxM2N2MjlHRTNzYUlmWmtEUzFrdFgtT2xmRnhNZXMxUW1yaVFBZ2psckxmVFFITFVqN25pV2I4Y1FNbWxnLWpIQzhKQUFvYmpJb2hRYjFoMl9iZlc1bDA?oc=5" }, { n: "Tuổi Trẻ", u: "https://news.google.com/rss/articles/CBMipwFBVV95cUxOcUgzQy00eDlNMlRvN2JMdWpCNWZwOTNVS1hYd3JWSmI3YnVuQTU0REpyOHpXYmE5M1FQSVR1YkRCZFZRZkFNcXhkc0hMN1ZyVldPUUt5Njc5eDJ3d212czF6SWR4TFFjY3JiVkxGYU52OU0ydy1JMmEyTjlaSnRwYXcxSzVyN3JNLXVoTGN3dm82OEJmUHFMRnFJMnB0bmQ3QzZvQXhwOA?oc=5" }, { n: "Tin tức 24h", u: "https://news.google.com/rss/articles/CBMisAFBVV95cUxNNDNKaE5qQjVjaEhVVzdkWXlEamRmUmxwd1JsY1ZNaV9QaVlPcms2a0pwUmFXM3BiNkdxQk9VS29idE1aa3BDTWlIZ3B4aUlkeEtlclNhQjM0Z0hVcWM0SUxIcU0tM1EwVXlhWDlmZWl1dlVFNXJhNmhOTGhrenAxWWVmTzhlbF8tVkN6OVVueGhPTGZlakVKZ09TU2UwRWNzOWdfc01nekM2OVJVeHpfXw?oc=5" }] },
    { date: "2026-10-26", rank: 6, heat: 80, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Động lực mới cho bất động sản du lịch nghỉ dưỡng", titleEn: "Động lực mới cho bất động sản du lịch nghỉ dưỡng",
      zh: "Động lực mới cho bất động sản du lịch nghỉ dưỡng", en: "Động lực mới cho bất động sản du lịch nghỉ dưỡng", vi: "Động lực mới cho bất động sản du lịch nghỉ dưỡng",
      srcName: "Báo Tin tức và Dân tộc", src: "https://news.google.com/rss/articles/CBMijwFBVV95cUxQVDJiVXZyTzU5bzNWa3FDanBoQWludzJLbFFJX3NJQ196Mi1aTzFoQkhQTC11aWJkbHp1dGVfRHlrUFk1emZETVhDUEpTR3k0MVlIcE9YT0VGaGNSeDJjWk5VSXRWNmJwczZRVUJwZGhrU2FmRVlQN2N5M0ZhVzlzUGtzZ2JtaVNlZlpBTUQwMA?oc=5",
      coverage: 3, related: [{ n: "Tạp chí điện tử Thương Trường", u: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQRUlCWWc5VWFlT2x0dTJXTm9KMFlRMGd6TEU3OVRiSDM0amtYV0FPOERQWVlJZkhqVXNoNkN2WGJhUnR0SGdJbFhEQjQtSy1XUGJMMXFIRGxLVk5laS1MdklieUVXamk4VE1PN21qZkRnTGpiRU04MWRoLUgtLS0tUWswS0ljYUFjLWZodW1lZGI5Ukp4Y1l3dk9yWEROSW5M?oc=5" }, { n: "Báo Đại Đoàn Kết", u: "https://news.google.com/rss/articles/CBMiiAFBVV95cUxPbXZkZzV2bGNRMjBkUUpHVjVsT1JNNmJjS0Z6S3RDdWVLaEtvWVh3bkZlbVZfQlR6QjUya3ZVVE5XcUNMeWtOMkV2Z3NXZV9ZckVxSjNsSUJGY3U0V3VadTVrSHd4QU5KamFkZ3JHOG5pMTJLRXV4MDJnbGIxNDNvX1NjTVA5UmQz?oc=5" }] },
    { date: "2026-10-26", rank: 7, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Nghịch lý thị trường bất động sản trong mùa cuối năm", titleEn: "Nghịch lý thị trường bất động sản trong mùa cuối năm",
      zh: "Nghịch lý thị trường bất động sản trong mùa cuối năm", en: "Nghịch lý thị trường bất động sản trong mùa cuối năm", vi: "Nghịch lý thị trường bất động sản trong mùa cuối năm",
      srcName: "VietnamFinance", src: "https://news.google.com/rss/articles/CBMilgFBVV95cUxNM09HLVJkM19nNnN1amJSczhRb00zVWFUemFnYjBEb2VsMVRvQlZNVFJRbTJfcnZzelBIMUF4YmFxZ20waUw2ZDhrZ0JMQzVnMUQtdkFWUFVINjQ5aGJFR0JEc0lLMTNLeFY2X0l6aXQ4TFFBMzRxNkE1OUZrVG5OSy1BS3VWNHNtZFBsSlVzWW5fNkZ3TGc?oc=5",
      coverage: 2, related: [{ n: "Báo Đấu thầu", u: "https://news.google.com/rss/articles/CBMinwFBVV95cUxONWVtekNSdmxPLU1Ob3VVczNnWjVyTFRoWXM3eDRVQWtyN1hwaThZS0ZoZ3JqRi1lYUNCbVZ3TVhnVDB3WTVUQkU0cTAzZFZLY1NNOUd1X3lVelhLZ1NYWE9UcGh5WFlaRHZwUVNUTmdyMjdhYVpGcGxUUzFsbWc3b2ZkdVdWQnh2MFJzb1JDUzZvMGxXanROVTRfc1BrdUk?oc=5" }] },
    { date: "2026-10-26", rank: 8, heat: 69, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Cổ phiếu bất động sản có tuần hút tiền mạnh", titleEn: "Cổ phiếu bất động sản có tuần hút tiền mạnh",
      zh: "Cổ phiếu bất động sản có tuần hút tiền mạnh", en: "Cổ phiếu bất động sản có tuần hút tiền mạnh", vi: "Cổ phiếu bất động sản có tuần hút tiền mạnh",
      srcName: "Fili.vn", src: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxORVZleDVkQkZLUDVHNmFKNGV5STY1YVl3ODBmZW9meDBEajV0LUp0eV9MUktvU19rSUpEZ0pab1BGajZsTHFzR3h5UXhQWURYdXd1TlhjZnBQNXJpMXRLR0pVejFZWTN0ZzV0Rms3MFdVdk5Jd1FsOGo3YURHcHl1bnJoem9ZbHAwblBz?oc=5",
      coverage: 2, related: [{ n: "VnEconomy", u: "https://news.google.com/rss/articles/CBMijAFBVV95cUxPYy05c1ZMMVNYLVhzakRvWjcyX2NaM0t2WGRVT3dMdXFLR0YyYXNsejAtTERIdjVlS3Y1TDhOcUtDenNiaHdUeEVNSTJMWE03Z3Utdkp2TG9OQWtiZF81TTVTc0g4aXFoY1Y5N3NITTV6aDVCMmszZ1BWa3RsdDJhU0QxZEQxOGFBWWRObQ?oc=5" }] },
    { date: "2026-10-26", rank: 9, heat: 69, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Thanh khoản bất động sản vẫn chưa cải thiện", titleEn: "Thanh khoản bất động sản vẫn chưa cải thiện",
      zh: "Thanh khoản bất động sản vẫn chưa cải thiện", en: "Thanh khoản bất động sản vẫn chưa cải thiện", vi: "Thanh khoản bất động sản vẫn chưa cải thiện",
      srcName: "Báo và Phát thanh Truyền hình Hà Nội", src: "https://news.google.com/rss/articles/CBMikwFBVV95cUxNMmtYdTVadm1uZF85VlpSRURTVVl5VTRYQklGR3dYY1dwUjZHQzYwN2JfbzRJb2h6SHo1NUYzZnVncmZhNFpDX1ZaVW9UcHEydlY5akhRQWJseGpVbHItLUxFdDdSd2hkYVlVN0dYQ0tadVlBWmwybVllbGFLOHp5S1paem5fTGZJaFNmam9lWHR0RVE?oc=5",
      coverage: 2, related: [{ n: "Laodong.vn", u: "https://news.google.com/rss/articles/CBMilgFBVV95cUxOX19OVGctQWZublNPZlNIeklSa1h6bXBDVGpJNjhiVldudi1aYWtyRWRvenpnWENJRGQ1eHVMU1ZkZE40TzlhUl9GS2NhdlJqSGw5Y19xdF9DYV8wSEE0ZUdvODFBU09MTHFJUm1xVjZkTjB1TzlJelI1MlU5OF9wbjF4c0FOb0RycHI0VDZvWnhlb0VCQ0E?oc=5" }] },
    { date: "2026-10-25", rank: 10, heat: 64, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "2026年前4个月全国保障性住房开工量超额44%", titleEn: "The real estate market landscape in Q4 2026",
      zh: "2026年前4个月全国保障性住房开工量超额44%", en: "The real estate market landscape in Q4 2026", vi: "Bất động sản quý 4/2026 sẽ được tiếp sức bởi những động lực nào?",
      srcName: "Báo Dân Việt", src: "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQmFxMGxmTU9lcjNpRHk5MTg2MnFpcFNKTGZ3ZEI2NEEtUHNWUWFjZVJyTHJWTThHaHRPbzl3d1ZXSzRnYnlIV2ZHV3dkc3IxbUYzalQ1MnNjQUxvdmR6TVZZc1drWk9vazlpU3JLY1BieENoVEUyUkl0UW85TlpNYUpVTlhicW5rRERuUF9vbUlJWmRlejRlYVJSczU?oc=5",
      coverage: 2, related: [{ n: "Vietstock", u: "https://news.google.com/rss/articles/CBMihgFBVV95cUxNOHY5a2RZM19QQTRGdkJ5N25iOUNXVGZkUXdqVzVEb1BDWEdxRjBvOUtXMGNZNFN2M25WRkVlZzZfSUFsa2lpMzJTcHBjZS1xenFES01ieVdhQThJZTNDN2NrYkEzMlM3QkswNW9lNlB6ZnBaVW9rdGNLTDlLQ2NkVGVaRFZyQQ?oc=5" }] },
    { date: "2026-10-24", rank: 11, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Diện mạo bức tranh bất động sản quý IV/2026", titleEn: "Diện mạo bức tranh bất động sản quý IV/2026",
      zh: "Diện mạo bức tranh bất động sản quý IV/2026", en: "Diện mạo bức tranh bất động sản quý IV/2026", vi: "Diện mạo bức tranh bất động sản quý IV/2026",
      srcName: "Báo Thanh tra", src: "https://news.google.com/rss/articles/CBMioAFBVV95cUxQN01VS0ptZU5RY1JDYnVpV0JaZ0xNc2dicDBraWp3TUEzQk16dVVjM1hndmlRQXRId01GSUlIQW00cjVEM0tEYTJlTkNTeHpwRU45LW5yTE9nVDdkS1E5LXZmSnhTRDc0UmpzQVNJbjRwVjdnLWNpQXlVcXluS2IwREUxQnZBMDJnMVdQaHlhV1FnWTFRM295ODhFbDZlR19h?oc=5",
      coverage: 2, related: [{ n: "MoneyF", u: "https://news.google.com/rss/articles/CBMigwFBVV95cUxOTzUyeUk2eHdId1hiYi03amlIM0w0WUNzeFpNdUQ5M0tSeG9pVXh2SUtTdzFnSmFsUnpQM3IzVVdIX3hOSmh1TGZ1R3g2OFNMMjRwR3lENWR0N01wYWMxVHFqV21RdFZfRi1YQ3J0a2Y1MmpzeWN3aWZmME1iU1dEeW8zQQ?oc=5" }] },
    { date: "2026-10-22", rank: 12, heat: 69, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Giao dịch bất động sản dự báo tăng gấp đôi trong quý IV", titleEn: "Giao dịch bất động sản dự báo tăng gấp đôi trong quý IV",
      zh: "Giao dịch bất động sản dự báo tăng gấp đôi trong quý IV", en: "Giao dịch bất động sản dự báo tăng gấp đôi trong quý IV", vi: "Giao dịch bất động sản dự báo tăng gấp đôi trong quý IV",
      srcName: "VnExpress", src: "https://news.google.com/rss/articles/CBMilAFBVV95cUxOMkRab0xDUjd3V0xjT1lXVXlHM2ZxTGlpUU5KdncyOHgtRmRqc3F5bUdJLXhyTXhodW9WckZnSXdaNFVFR3pzYWhZMlh3Y04xNDFNZi1FMjNJY1JNWF96ZkhCNHBUREg0Mjl4ZEFkTFZBcFdfeEhOVXh2N3FQVDVaakFPbVNVY1RtbUtjMkhWaUlLeWZ2?oc=5",
      coverage: 2, related: [{ n: "CafeF · Bất động sản", u: "https://cafef.vn/giao-dich-bat-dong-san-cuoi-nam-du-bao-bung-no-nhung-phan-hoa-manh-188261026185318701.chn" }] },
  ],

  /* ---------- 胡志明分区年度新盘（加管理费/宽带/链接/付款）---------- */
  hcmcDistricts: [
    {
      district: "第1区", districtEn: "District 1", name: "Grand Marina Saigon", nameEn: "Grand Marina Saigon (Marriott)",
      year: 2022, priceLow: 6000, priceHigh: 9000, priceUnit: "USD/㎡", area: "45–320 ㎡",
      typeZh: "奢华公寓 / 服务式住宅", typeEn: "Luxury / serviced", foreignOk: true, launch: "2022 Q2", units: 433,
      developerZh: "Masterise Homes × Marriott", developerEn: "Masterise Homes × Marriott",
      mgmtFee: "约 30,000–40,000 盾/㎡·月（酒店式管理）", internet: "物业统一接入为主（独占概率高），约 40–60 万盾/月",
      down: "30% 起", payment: "按工程节点分期，交房前≤70%，尾款5%至粉皮书",
      link: "https://grandmarinasaigon.com.vn",
      noteZh: "河畔地标，万豪品牌管理，外籍可购。", noteEn: "Riverside landmark, Marriott-managed, foreign-eligible.",
      priceNoteZh: "6,000–9,000 为 2022 开盘价区间（按户型/楼层/朝向，非时间序列）。",
      priceNoteEn: "6,000–9,000 is the 2022 launch range by unit type/floor/view — not a time series.",
      currentPrice: "二手约 9,000–13,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "Studio", typeEn: "Studio", area: "40–50 ㎡", price: "≈6,000–7,000", totalZh: "约 24–35 万美元", totalEn: "≈$240–350K" },
        { type: "1 房", typeEn: "1BR", area: "51–58 ㎡", price: "≈6,500–8,000", totalZh: "约 33–46 万美元", totalEn: "≈$330–460K" },
        { type: "2 房", typeEn: "2BR", area: "78–100 ㎡", price: "≈6,800–9,000", totalZh: "约 53–90 万美元", totalEn: "≈$530–900K" },
        { type: "3 房", typeEn: "3BR", area: "106–143 ㎡", price: "≈7,000–9,000+", totalZh: "约 74–129 万美元+", totalEn: "≈$740K–1.29M+" },
        { type: "豪华/总统", typeEn: "Premium/Penthouse", area: "121–265 ㎡", price: "≈8,000–9,500", totalZh: "约 97–250 万美元+", totalEn: "≈$970K–2.5M+" }
      ]
    },
    {
      district: "第1区", districtEn: "District 1", name: "Vinhomes Golden River", nameEn: "Vinhomes Golden River",
      year: 2021, priceLow: 4500, priceHigh: 7000, priceUnit: "USD/㎡", area: "50–180 ㎡",
      typeZh: "高端公寓", typeEn: "High-end", foreignOk: true, launch: "2021", units: 3000,
      developerZh: "Vinhomes（Vingroup）", developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "23,000 盾/㎡·月（含泳池/健身房）；车位 210–220 万盾/月，摩托 20 万盾/月",
      internet: "VNPT 为主，100–300Mbps 约 20–35 万盾/月",
      down: "30% 起", payment: "分期 30/30/30/10 或一次性",
      link: "https://vinhomes.vn",
      noteZh: "核心区综合体，配 Vinschool/Vinmec，外籍配额充足。", noteEn: "Core complex with Vinschool/Vinmec; ample foreign quota.",
      currentPrice: "二手约 6,000–7,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "50–60 ㎡", price: "≈4,500–5,500", totalZh: "约 22–33 万美元", totalEn: "≈$225–330K" },
        { type: "2 房", typeEn: "2BR", area: "78–100 ㎡", price: "≈4,800–6,000", totalZh: "约 37–60 万美元", totalEn: "≈$370–600K" },
        { type: "3 房", typeEn: "3BR", area: "120–160 ㎡", price: "≈5,000–7,000", totalZh: "约 60–112 万美元", totalEn: "≈$600K–1.12M" }
      ]
    },
    {
      district: "第2区（守添）", districtEn: "District 2 (Thu Thiem)", name: "Empire City / Cove Residences", nameEn: "Empire City · Cove",
      year: 2023, priceLow: 4500, priceHigh: 8000, priceUnit: "USD/㎡", area: "60–250 ㎡",
      typeZh: "超高层豪宅", typeEn: "Luxury high-rise", foreignOk: true, launch: "2023", units: 1500,
      developerZh: "Keppel Land × 天日集团（Gaw NP）", developerEn: "Keppel Land × Gaw NP (Tien Phuoc)",
      mgmtFee: "约 25,000–32,000 盾/㎡·月", internet: "FPT/VNPT，约 25–40 万盾/月",
      down: "30% 起", payment: "工程节点分期",
      link: "https://empirecity.vn",
      noteZh: "守添核心，江景豪宅，外籍热点。", noteEn: "Thu Thiem core, river-view luxury, expat hotspot.",
      currentPrice: "二手约 6,500–9,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "60–75 ㎡", price: "≈4,800–6,000", totalZh: "约 29–45 万美元", totalEn: "≈$290–450K" },
        { type: "2 房", typeEn: "2BR", area: "90–115 ㎡", price: "≈5,200–7,000", totalZh: "约 47–80 万美元", totalEn: "≈$470–800K" },
        { type: "3 房", typeEn: "3BR", area: "140–180 ㎡", price: "≈5,500–8,000", totalZh: "约 77–144 万美元", totalEn: "≈$770K–1.44M" }
      ]
    },
    {
      district: "第2区（守德）", districtEn: "District 2 (Thu Duc)", name: "The Global City", nameEn: "The Global City",
      year: 2025, priceLow: 3500, priceHigh: 6000, priceUnit: "USD/㎡", area: "50–160 ㎡",
      typeZh: "综合社区 / 高端", typeEn: "Township / high-end", foreignOk: true, launch: "2025", units: 1200,
      developerZh: "Masterise Homes", developerEn: "Masterise Homes",
      mgmtFee: "约 15,000–20,000 盾/㎡·月", internet: "FPT/Viettel，约 20–35 万盾/月",
      down: "30% 起", payment: "工程节点分期",
      link: "https://theglobalcity.com.vn",
      noteZh: "2025–26 供应主力，国际学校+商业配套。", noteEn: "Key 2025-26 supply; intl school & retail.",
      currentPrice: "≈4,500–5,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "51–56 ㎡", price: "≈3,500–4,200", totalZh: "约 18–24 万美元", totalEn: "≈$180–240K" },
        { type: "2 房", typeEn: "2BR", area: "76–81 ㎡", price: "≈3,800–4,600", totalZh: "约 29–37 万美元", totalEn: "≈$290–370K" },
        { type: "3 房", typeEn: "3BR", area: "100–130 ㎡", price: "≈4,000–6,000", totalZh: "约 40–78 万美元", totalEn: "≈$400–780K" }
      ]
    },
    {
      district: "第7区（富美兴）", districtEn: "District 7 (Phu My Hung)", name: "The Horizon / Midtown", nameEn: "The Horizon · Midtown",
      year: 2022, priceLow: 2500, priceHigh: 4000, priceUnit: "USD/㎡", area: "55–200 ㎡",
      typeZh: "中高端公寓", typeEn: "Mid-to-high end", foreignOk: true, launch: "2022", units: 900,
      developerZh: "富美兴（Phú Mỹ Hưng）", developerEn: "Phu My Hung Corp.",
      mgmtFee: "约 10,000–12,000 盾/㎡·月", internet: "FPT/VNPT，约 18–30 万盾/月",
      down: "20–30%", payment: "分期或一次性",
      link: "https://phumyhung.vn",
      noteZh: "学区/生活型社区，韩/华家庭集中。", noteEn: "School/lifestyle community; Korean/Chinese families.",
      currentPrice: "二手约 3,000–4,300 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "55–65 ㎡", price: "≈2,500–3,200", totalZh: "约 14–21 万美元", totalEn: "≈$140–210K" },
        { type: "2 房", typeEn: "2BR", area: "80–100 ㎡", price: "≈2,700–3,600", totalZh: "约 22–36 万美元", totalEn: "≈$220–360K" },
        { type: "3 房", typeEn: "3BR", area: "120–160 ㎡", price: "≈3,000–4,000", totalZh: "约 36–64 万美元", totalEn: "≈$360–640K" }
      ]
    },
    {
      district: "第9区（守德）", districtEn: "District 9 (Thu Duc)", name: "Vinhomes Grand Park", nameEn: "Vinhomes Grand Park",
      year: 2023, priceLow: 1600, priceHigh: 2500, priceUnit: "USD/㎡", area: "45–120 ㎡",
      typeZh: "中端刚需公寓", typeEn: "Mid-range", foreignOk: true, launch: "2023", units: 8000,
      developerZh: "Vinhomes（Vingroup）", developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "约 7,000–10,000 盾/㎡·月", internet: "FPT/Viettel/VNPT，约 18–28 万盾/月",
      down: "20–30%", payment: "分期 30/30/30/10",
      link: "https://vinhomes.vn",
      noteZh: "东向新兴城区，地铁1号线辐射，性价比。", noteEn: "Eastern corridor, Metro L1 reach, value play.",
      currentPrice: "二手约 2,000–2,600 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "45–50 ㎡", price: "≈1,600–2,000", totalZh: "约 7–10 万美元", totalEn: "≈$72–100K" },
        { type: "2 房", typeEn: "2BR", area: "60–75 ㎡", price: "≈1,700–2,300", totalZh: "约 10–17 万美元", totalEn: "≈$102–172K" },
        { type: "3 房", typeEn: "3BR", area: "90–110 ㎡", price: "≈1,900–2,500", totalZh: "约 17–27 万美元", totalEn: "≈$171–275K" }
      ]
    }
  ],
  hcmcDistrictsNoteZh: "「开盘价区间」= 该盘 2022–2025 年首次开盘时的挂牌价范围，是「同一年份内不同户型/楼层/朝向」的价差，不是随时间上涨的序列（如 Grand Marina 的 6,000–9,000 是 2022 开盘时小户型至豪宅的价差，非 2022=6,000→2026=9,000）。每盘另列「当前二手价」作对照；点户型可看面积/单价/总价与示意户型图。",
  hcmcDistrictsNoteEn: "「Launch price range」 = the asking-price spread across unit types/floors/views at first launch (2022–2025), not a time series (e.g. Grand Marina's 6,000–9,000 is the 2022 launch spread from small units to penthouses — NOT 2022=6,000→2026=9,000). A current resale price is listed for comparison; click a unit type for area, unit & total price and a schematic floor plan.",

  /* ---------- 河内高端楼盘（参照胡志明分区表）---------- */
  hanoiDistricts: [
    {
      district: "西湖/巴亭", districtEn: "Tay Ho / Ba Dinh", name: "Golden Westlake", nameEn: "Golden Westlake",
      year: 2019, priceLow: 3000, priceHigh: 4500, priceUnit: "USD/㎡", area: "90–400 ㎡",
      typeZh: "湖畔豪宅/别墅", typeEn: "Lakeside luxury / villas", foreignOk: true, launch: "2019", units: 400,
      developerZh: "BRG Group", developerEn: "BRG Group",
      mgmtFee: "约 25,000–35,000 盾/㎡·月", internet: "FPT/VNPT，约 25–40 万盾/月",
      down: "30% 起", payment: "工程节点分期",
      link: "https://www.google.com/search?q=Golden+Westlake+Hanoi+official",
      noteZh: "西湖畔老牌豪宅，外派/使领馆需求刚性。", noteEn: "Established lakeside luxury; sticky expat/embassy demand.",
      currentPrice: "二手约 3,500–5,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "2 房", typeEn: "2BR", area: "90–120 ㎡", price: "≈3,000–4,000", totalZh: "约 27–48 万美元", totalEn: "≈$270–480K" },
        { type: "3 房", typeEn: "3BR", area: "140–200 ㎡", price: "≈3,200–4,500", totalZh: "约 45–90 万美元", totalEn: "≈$450–900K" },
        { type: "别墅", typeEn: "Villa", area: "250–400 ㎡", price: "≈3,500–5,000", totalZh: "约 88–200 万美元", totalEn: "≈$875K–2M" }
      ]
    },
    {
      district: "纸桥/北慈廉", districtEn: "Cau Giay / Bac Tu Liem", name: "D'Palais de Louis", nameEn: "D'Palais de Louis",
      year: 2021, priceLow: 2800, priceHigh: 4000, priceUnit: "USD/㎡", area: "70–180 ㎡",
      typeZh: "高端公寓", typeEn: "High-end", foreignOk: true, launch: "2021", units: 520,
      developerZh: "Tân Hoàng Minh", developerEn: "Tan Hoang Minh",
      mgmtFee: "约 15,000–20,000 盾/㎡·月", internet: "FPT/VNPT，约 20–35 万盾/月",
      down: "30% 起", payment: "工程节点分期",
      link: "https://www.google.com/search?q=D+Palais+de+Louis+Hanoi+official",
      noteZh: "新 CBD 门户，配套成熟。", noteEn: "New-CBD gateway, mature amenities.",
      currentPrice: "二手约 3,200–4,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "2 房", typeEn: "2BR", area: "70–85 ㎡", price: "≈2,800–3,600", totalZh: "约 20–31 万美元", totalEn: "≈$196–306K" },
        { type: "3 房", typeEn: "3BR", area: "110–140 ㎡", price: "≈3,000–4,000", totalZh: "约 33–56 万美元", totalEn: "≈$330–560K" },
        { type: "复式", typeEn: "Duplex", area: "150–180 ㎡", price: "≈3,300–4,200", totalZh: "约 50–76 万美元", totalEn: "≈$495–756K" }
      ]
    },
    {
      district: "巴亭/柳街", districtEn: "Ba Dinh / Lieu Giai", name: "Vinhomes Metropolis", nameEn: "Vinhomes Metropolis",
      year: 2020, priceLow: 2500, priceHigh: 3500, priceUnit: "USD/㎡", area: "50–150 ㎡",
      typeZh: "高端公寓", typeEn: "High-end", foreignOk: true, launch: "2020", units: 1200,
      developerZh: "Vinhomes（Vingroup）", developerEn: "Vinhomes (Vingroup)",
      mgmtFee: "约 18,000 盾/㎡·月", internet: "VNPT 20–35万盾/月",
      down: "30% 起", payment: "30/30/30/10",
      link: "https://vinhomes.vn",
      noteZh: "柳街核心，办公+商业+公寓综合体。", noteEn: "Lieu Giai core, mixed-use.",
      currentPrice: "二手约 2,800–4,000 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "50–60 ㎡", price: "≈2,500–3,000", totalZh: "约 12–18 万美元", totalEn: "≈$125–180K" },
        { type: "2 房", typeEn: "2BR", area: "75–95 ㎡", price: "≈2,600–3,300", totalZh: "约 20–31 万美元", totalEn: "≈$195–313K" },
        { type: "3 房", typeEn: "3BR", area: "110–150 ㎡", price: "≈2,800–3,500", totalZh: "约 31–52 万美元", totalEn: "≈$308–525K" }
      ]
    },
    {
      district: "南慈廉", districtEn: "Nam Tu Liem", name: "Masteri West Heights", nameEn: "Masteri West Heights",
      year: 2023, priceLow: 2200, priceHigh: 3200, priceUnit: "USD/㎡", area: "50–140 ㎡",
      typeZh: "高端公寓", typeEn: "High-end", foreignOk: true, launch: "2023", units: 1500,
      developerZh: "Masterise Homes", developerEn: "Masterise Homes",
      mgmtFee: "约 12,000–16,000 盾/㎡·月", internet: "FPT/Viettel 20–35万盾/月",
      down: "30% 起", payment: "工程节点分期",
      link: "https://masterisehomes.com",
      noteZh: "河内西向供应主力，国际学校环绕。", noteEn: "Key west-side supply; intl schools nearby.",
      currentPrice: "≈2,500–3,500 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "50–58 ㎡", price: "≈2,200–2,800", totalZh: "约 11–16 万美元", totalEn: "≈$110–162K" },
        { type: "2 房", typeEn: "2BR", area: "72–85 ㎡", price: "≈2,400–3,000", totalZh: "约 17–25 万美元", totalEn: "≈$173–255K" },
        { type: "3 房", typeEn: "3BR", area: "100–140 ㎡", price: "≈2,600–3,200", totalZh: "约 26–45 万美元", totalEn: "≈$260–448K" }
      ]
    },
    {
      district: "西湖/Ciputra", districtEn: "Tay Ho / Ciputra", name: "Noble West Lake", nameEn: "Noble West Lake",
      year: 2026, priceLow: 7000, priceHigh: 9000, priceUnit: "USD/㎡", area: "80–300 ㎡",
      typeZh: "品牌豪宅", typeEn: "Branded luxury", foreignOk: true, launch: "2026 Q4 预计", units: 300,
      developerZh: "Noble（越南本土）", developerEn: "Noble (Vietnam)",
      mgmtFee: "待公布", internet: "待公布",
      down: "30% 起", payment: "待公布",
      link: "https://www.google.com/search?q=Noble+West+Lake+Ciputra+Hanoi+official",
      noteZh: "2026 Q1 动工，Ciputra 内湖景品牌豪宅，外籍配额紧张。", noteEn: "Broke ground Q1 2026; Ciputra lake-view branded luxury, tight foreign quota.",
      currentPrice: "待开盘（预计 8,000–10,000 USD/㎡）",
      unitsBreakdown: [
        { type: "2 房", typeEn: "2BR", area: "80–110 ㎡", price: "≈7,000–8,500", totalZh: "约 56–94 万美元", totalEn: "≈$560–935K" },
        { type: "3 房", typeEn: "3BR", area: "130–180 ㎡", price: "≈7,500–9,000", totalZh: "约 98–162 万美元", totalEn: "≈$975K–1.62M" },
        { type: "复式/顶复", typeEn: "Duplex/Penthouse", area: "200–300 ㎡", price: "≈8,000–9,500", totalZh: "约 160–285 万美元", totalEn: "≈$1.6M–2.85M" }
      ]
    },
    {
      district: "西湖", districtEn: "Tay Ho", name: "Parc Régent (ParkCity)", nameEn: "Parc Régent (ParkCity)",
      year: 2026, priceLow: 4200, priceHigh: 5300, priceUnit: "USD/㎡", area: "60–200 ㎡",
      typeZh: "高端", typeEn: "High-end", foreignOk: true, launch: "2026 Q1", units: 600,
      developerZh: "ParkCity Group（马来西亚）", developerEn: "ParkCity Group (Malaysia)",
      mgmtFee: "约 18,000–24,000 盾/㎡·月", internet: "FPT/VNPT 20–35万盾/月",
      down: "30% 起", payment: "分期+早付折扣",
      link: "https://www.parkcity.com.my",
      noteZh: "ParkCity 社区内新推，外籍配额充足。", noteEn: "New phase in ParkCity; ample foreign quota.",
      currentPrice: "≈4,700–5,300 USD/㎡（2026-10）",
      unitsBreakdown: [
        { type: "1 房", typeEn: "1BR", area: "60–70 ㎡", price: "≈4,200–4,800", totalZh: "约 25–34 万美元", totalEn: "≈$252–336K" },
        { type: "2 房", typeEn: "2BR", area: "85–110 ㎡", price: "≈4,500–5,300", totalZh: "约 38–58 万美元", totalEn: "≈$382–583K" },
        { type: "3 房", typeEn: "3BR", area: "130–200 ㎡", price: "≈4,800–5,300", totalZh: "约 62–106 万美元", totalEn: "≈$624K–1.06M" }
      ]
    }
  ],

  /* ---------- 楼盘数据库（价格历史/管理费/宽带/配额/标签）---------- */
  projects: [
    {
      name: "Vinhomes Golden River", nameEn: "Vinhomes Golden River", district: "第1区", districtEn: "D1",
      segment: "高端", segmentEn: "High-end", year: 2021, priceLow: 4500, priceHigh: 7000, unit: "USD/㎡",
      area: "50–180", foreignOk: true, rentYield: "4–5%",
      priceHistory: { "2021": 4800, "2022": 5200, "2023": 5600, "2024": 6200, "2025": 6800, "2026": 7200 },
      mgmtFee: "23,000 盾/㎡·月", internet: "VNPT 20–35万盾/月",
      quota: { total: 3000, foreignSold: 620 }, down: "30% 起", payment: "30/30/30/10",
      tags: { zh: ["核心区", "医疗", "学区"], en: ["Core", "Medical", "School"] },
      link: "https://vinhomes.vn"
    },
    {
      name: "Grand Marina Saigon", nameEn: "Grand Marina Saigon", district: "第1区", districtEn: "D1",
      segment: "奢华", segmentEn: "Luxury", year: 2022, priceLow: 6000, priceHigh: 9000, unit: "USD/㎡",
      area: "45–320", foreignOk: true, rentYield: "3–4%",
      priceHistory: { "2022": 6800, "2023": 7300, "2024": 7900, "2025": 8400, "2026": 8700 },
      mgmtFee: "约 30,000–40,000 盾/㎡·月", internet: "物业统一（独占）",
      quota: { total: 433, foreignSold: 185 }, down: "30% 起", payment: "工程节点",
      tags: { zh: ["核心区", "投资"], en: ["Core", "Investment"] },
      link: "https://grandmarinasaigon.com.vn"
    },
    {
      name: "The Metropole Thu Thiem", nameEn: "The Metropole Thu Thiem", district: "第2区", districtEn: "D2",
      segment: "奢华", segmentEn: "Luxury", year: 2023, priceLow: 6000, priceHigh: 9500, unit: "USD/㎡",
      area: "70–280", foreignOk: true, rentYield: "3–4%",
      priceHistory: { "2023": 6800, "2024": 7400, "2025": 7900, "2026": 8200 },
      mgmtFee: "约 25,000–32,000 盾/㎡·月", internet: "FPT/VNPT 25–40万盾/月",
      quota: { total: 1260, foreignSold: 440 }, down: "30% 起", payment: "工程节点",
      tags: { zh: ["核心区", "投资"], en: ["Core", "Investment"] },
      link: "https://sonkimland.com"
    },
    {
      name: "The Global City", nameEn: "The Global City", district: "第2区/守德", districtEn: "D2/Thu Duc",
      segment: "高端", segmentEn: "High-end", year: 2025, priceLow: 3500, priceHigh: 6000, unit: "USD/㎡",
      area: "50–160", foreignOk: true, rentYield: "4–5%",
      priceHistory: { "2025": 4200, "2026": 4500 },
      mgmtFee: "约 15,000–20,000 盾/㎡·月", internet: "FPT/Viettel 20–35万盾/月",
      quota: { total: 4500, foreignSold: 1050 }, down: "30% 起", payment: "工程节点",
      tags: { zh: ["学区", "生活"], en: ["School", "Lifestyle"] },
      link: "https://theglobalcity.com.vn"
    },
    {
      name: "Lumiere Riverside", nameEn: "Lumiere Riverside", district: "第2区", districtEn: "D2",
      segment: "高端", segmentEn: "High-end", year: 2022, priceLow: 3800, priceHigh: 5500, unit: "USD/㎡",
      area: "55–180", foreignOk: true, rentYield: "4–5%",
      priceHistory: { "2022": 4200, "2023": 4600, "2024": 5000, "2025": 5400, "2026": 5700 },
      mgmtFee: "约 18,000 盾/㎡·月", internet: "FPT/VNPT 20–35万盾/月",
      quota: { total: 1280, foreignSold: 380 }, down: "30% 起", payment: "工程节点",
      tags: { zh: ["生活", "投资"], en: ["Lifestyle", "Investment"] },
      link: "https://masterisehomes.com"
    },
    {
      name: "Midtown Phu My Hung", nameEn: "Midtown Phu My Hung", district: "第7区", districtEn: "D7",
      segment: "中高端", segmentEn: "Mid-high", year: 2022, priceLow: 2800, priceHigh: 4200, unit: "USD/㎡",
      area: "60–200", foreignOk: true, rentYield: "4–5%",
      priceHistory: { "2022": 3200, "2023": 3400, "2024": 3700, "2025": 3900, "2026": 4100 },
      mgmtFee: "约 10,000–12,000 盾/㎡·月", internet: "FPT/VNPT 18–30万盾/月",
      quota: { total: 900, foreignSold: 270 }, down: "20–30%", payment: "分期/一次性",
      tags: { zh: ["学区", "生活", "医疗"], en: ["School", "Lifestyle", "Medical"] },
      link: "https://phumyhung.vn"
    },
    {
      name: "Sunrise Riverside", nameEn: "Sunrise Riverside", district: "第7区/芽𡶀", districtEn: "D7/Nha Be",
      segment: "中端", segmentEn: "Mid", year: 2021, priceLow: 2200, priceHigh: 3200, unit: "USD/㎡",
      area: "50–150", foreignOk: true, rentYield: "5–6%",
      priceHistory: { "2021": 2400, "2022": 2600, "2023": 2800, "2024": 3000, "2025": 3200, "2026": 3350 },
      mgmtFee: "约 9,000 盾/㎡·月", internet: "FPT/Viettel 18–28万盾/月",
      quota: { total: 1500, foreignSold: 300 }, down: "20–30%", payment: "分期",
      tags: { zh: ["生活"], en: ["Lifestyle"] },
      link: "https://namlonggroup.com"
    },
    {
      name: "Vinhomes Grand Park", nameEn: "Vinhomes Grand Park", district: "第9区", districtEn: "D9",
      segment: "中端", segmentEn: "Mid", year: 2023, priceLow: 1600, priceHigh: 2500, unit: "USD/㎡",
      area: "45–120", foreignOk: true, rentYield: "5–6%",
      priceHistory: { "2023": 1900, "2024": 2100, "2025": 2300, "2026": 2450 },
      mgmtFee: "约 7,000–10,000 盾/㎡·月", internet: "FPT/Viettel/VNPT 18–28万盾/月",
      quota: { total: 8000, foreignSold: 820 }, down: "20–30%", payment: "30/30/30/10",
      tags: { zh: ["投资", "学区"], en: ["Investment", "School"] },
      link: "https://vinhomes.vn"
    },
    {
      name: "Masteri Centre Point", nameEn: "Masteri Centre Point", district: "第9区", districtEn: "D9",
      segment: "中高端", segmentEn: "Mid-high", year: 2022, priceLow: 2000, priceHigh: 3000, unit: "USD/㎡",
      area: "45–110", foreignOk: true, rentYield: "5–6%",
      priceHistory: { "2022": 2300, "2023": 2500, "2024": 2700, "2025": 2900, "2026": 3050 },
      mgmtFee: "约 10,000 盾/㎡·月", internet: "FPT/Viettel 18–30万盾/月",
      quota: { total: 2500, foreignSold: 480 }, down: "20–30%", payment: "分期",
      tags: { zh: ["投资", "生活"], en: ["Investment", "Lifestyle"] },
      link: "https://masteri.com.vn"
    }
  ],

  /* ---------- 租金行情（月租估算，VND 百万盾/月；币种可切换）---------- */
  rents: {
    asOfZh: "2026-10 估算（含物业费口径因盘而异，签约以房东报价为准）",
    asOfEn: "Oct 2026 estimate (mgmt-fee basis varies; confirm with landlord)",
    yieldBasisZh: "口径：表中「毛租金回报」按【当前市价】计算（年租金 ÷ 当前二手价），非按开盘价。若你当年按较低开盘价买入并持有至今，你的「成本回报率（yield-on-cost）」会明显高于表列值（例如 Grand Marina 按 6,000 开盘价买入的成本回报 ≈ 表中回报 × 当前价/开盘价）。",
    yieldBasisEn: "Basis: gross yield uses the CURRENT market value (annual rent ÷ current resale price), not the launch price. If you bought at a lower launch price, your yield-on-cost is notably higher (e.g. Grand Marina bought at $6,000: yield-on-cost ≈ listed yield × current/launch price).",
    noteZh: "外籍常见非公渠道「房东直租」无 10% 租金税（开票才产生）；物业费/宽带另付。",
    noteEn: "Direct landlord leases (common for expats) carry no 10% rental tax (only invoiced channels); mgmt fee & internet extra.",
    items: [
      { nameZh: "Grand Marina Saigon", nameEn: "Grand Marina Saigon", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第1区", districtEn: "D1", yieldText: "3–4%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "51–58 ㎡", areaEn: "51–58 sqm", rentVnd: [30, 42] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "78–100 ㎡", areaEn: "78–100 sqm", rentVnd: [45, 75] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "106–143 ㎡", areaEn: "106–143 sqm", rentVnd: [70, 110] }
        ] },
      { nameZh: "Vinhomes Golden River", nameEn: "Vinhomes Golden River", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第1区", districtEn: "D1", yieldText: "4–5%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "50–60 ㎡", areaEn: "50–60 sqm", rentVnd: [24, 35] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "78–100 ㎡", areaEn: "78–100 sqm", rentVnd: [35, 50] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "120–160 ㎡", areaEn: "120–160 sqm", rentVnd: [45, 68] }
        ] },
      { nameZh: "The Metropole Thu Thiem", nameEn: "The Metropole Thu Thiem", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第2区", districtEn: "D2", yieldText: "3–4%",
        rows: [
          { typeZh: "2 房", typeEn: "2BR", areaZh: "90–120 ㎡", areaEn: "90–120 sqm", rentVnd: [40, 62] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "140–200 ㎡", areaEn: "140–200 sqm", rentVnd: [55, 88] }
        ] },
      { nameZh: "Empire City", nameEn: "Empire City", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第2区/守添", districtEn: "D2/Thu Thiem", yieldText: "3.5–5%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "60–75 ㎡", areaEn: "60–75 sqm", rentVnd: [22, 32] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "90–115 ㎡", areaEn: "90–115 sqm", rentVnd: [35, 55] }
        ] },
      { nameZh: "Lumiere Riverside", nameEn: "Lumiere Riverside", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第2区", districtEn: "D2", yieldText: "4–5%",
        rows: [
          { typeZh: "2 房", typeEn: "2BR", areaZh: "70–95 ㎡", areaEn: "70–95 sqm", rentVnd: [25, 38] }
        ] },
      { nameZh: "The Global City", nameEn: "The Global City", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第2区/守德", districtEn: "D2/Thu Duc", yieldText: "5–6%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "51–56 ㎡", areaEn: "51–56 sqm", rentVnd: [15, 20] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "76–81 ㎡", areaEn: "76–81 sqm", rentVnd: [21, 30] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "100–130 ㎡", areaEn: "100–130 sqm", rentVnd: [28, 42] }
        ] },
      { nameZh: "Midtown Phu My Hung", nameEn: "Midtown Phu My Hung", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第7区", districtEn: "D7", yieldText: "4–5%",
        rows: [
          { typeZh: "2 房", typeEn: "2BR", areaZh: "80–100 ㎡", areaEn: "80–100 sqm", rentVnd: [24, 33] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "120–160 ㎡", areaEn: "120–160 sqm", rentVnd: [32, 45] }
        ] },
      { nameZh: "Sunrise Riverside", nameEn: "Sunrise Riverside", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第7区/芽𡶀", districtEn: "D7/Nha Be", yieldText: "5–6%",
        rows: [
          { typeZh: "2 房", typeEn: "2BR", areaZh: "65–90 ㎡", areaEn: "65–90 sqm", rentVnd: [16, 22] }
        ] },
      { nameZh: "Vinhomes Grand Park", nameEn: "Vinhomes Grand Park", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第9区", districtEn: "D9", yieldText: "5–6%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "45–50 ㎡", areaEn: "45–50 sqm", rentVnd: [10, 13] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "60–75 ㎡", areaEn: "60–75 sqm", rentVnd: [13, 19] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "90–110 ㎡", areaEn: "90–110 sqm", rentVnd: [18, 26] }
        ] },
      { nameZh: "Masteri Centre Point", nameEn: "Masteri Centre Point", cityZh: "胡志明", cityEn: "HCMC", districtZh: "第9区", districtEn: "D9", yieldText: "5–6%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "45–55 ㎡", areaEn: "45–55 sqm", rentVnd: [10, 14] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "65–85 ㎡", areaEn: "65–85 sqm", rentVnd: [14, 20] }
        ] },
      { nameZh: "Golden Westlake", nameEn: "Golden Westlake", cityZh: "河内", cityEn: "Hanoi", districtZh: "西湖", districtEn: "Tay Ho", yieldText: "4–5%",
        rows: [
          { typeZh: "2 房", typeEn: "2BR", areaZh: "90–120 ㎡", areaEn: "90–120 sqm", rentVnd: [30, 45] },
          { typeZh: "3 房", typeEn: "3BR", areaZh: "140–200 ㎡", areaEn: "140–200 sqm", rentVnd: [45, 70] }
        ] },
      { nameZh: "Vinhomes Metropolis", nameEn: "Vinhomes Metropolis", cityZh: "河内", cityEn: "Hanoi", districtZh: "巴亭/柳街", districtEn: "Ba Dinh", yieldText: "4–5%",
        rows: [
          { typeZh: "1 房", typeEn: "1BR", areaZh: "50–60 ㎡", areaEn: "50–60 sqm", rentVnd: [14, 19] },
          { typeZh: "2 房", typeEn: "2BR", areaZh: "75–95 ㎡", areaEn: "75–95 sqm", rentVnd: [20, 28] }
        ] }
    ]
  },

  /* ---------- 新盘速递：2025 + 2026（在售/即将开盘）----------
     gmaps=Google地图；saleUrl=发售入口；priceNow=开盘超6个月当前价格区间（估算）
     devType: local=越南本土 foreign=外资 jv=合资
     quota=外籍配额实况；presale=预售进度；promo=开盘优惠；units=1房/2房户型 */
  newLaunches: [
    { name: "The Global City", nameEn: "The Global City", city: "胡志明", cityEn: "HCMC", district: "第2区/守德", districtEn: "D2/Thu Duc", launch: "2025 Q3–在售", price: 4500, unit: "USD/㎡", typeZh: "综合社区", typeEn: "Township", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=The+Global+City+Thu+Duc+Ho+Chi+Minh", saleUrl: "https://theglobalcity.com.vn", priceNow: "≈4,500–5,500 USD/㎡（2026-10）",
      developer: "Masterise Homes", developerEn: "Masterise Homes", devType: "local",
      quotaZh: "法定 30%/栋；CT5 Masteri Park Place 外籍配额在售，热门楼栋临近满额", quotaEn: "Statutory 30%/building; CT5 Masteri Park Place quota on sale, hot towers near full",
      presaleZh: "SOHO 区已交付；公寓 2026 起分期交付，CT5 约 1,600 套分期推售中", presaleEn: "SOHO zone handed over; apartments deliver from 2026, CT5 ~1,600 units in phased release",
      promoZh: "早付最高 12% 折扣+额外 3%（合计至 15%）；每 6 个月付 10% 分期；0% 利率支持贷款（70% 贷款额，支持至 2028-10）；赠 24 个月管理费；老业主再减 2%", promoEn: "Up to 12% early-pay + extra 3% (total 15%); 10% every 6 months; 0% rate-support loan (70% LTV, to Oct 2028); 24-mo mgmt fee waived; 2% resident discount",
      unitsZh: "1房 51–56㎡ ≈ 65–88 亿盾（$24.7–33万）；2房 76–81㎡ ≈ 88–134 亿盾（$33–50万）；交房 2028 Q1", unitsEn: "1BR 51–56sqm ≈ VND 6.5–8.8bn ($247–330K); 2BR 76–81sqm ≈ VND 8.8–13.4bn ($330–505K); handover Q1 2028",
      unitsShortZh: "1房 51–56㎡ / 2房 76–81㎡", unitsShortEn: "1BR 51–56sqm / 2BR 76–81sqm" },
    { name: "The Privé", nameEn: "The Privé", city: "胡志明", cityEn: "HCMC", district: "守德", districtEn: "Thu Duc", launch: "2025 Q3", price: 5500, unit: "USD/㎡", typeZh: "奢华", typeEn: "Luxury", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=The+Prive+Thu+Duc+Ho+Chi+Minh", saleUrl: "https://www.google.com/search?q=The+Prive+Thu+Duc+official+sales", priceNow: "≈5,500–6,500 USD/㎡（2026-10）",
      developer: "Masterise Homes", developerEn: "Masterise Homes", devType: "local",
      quotaZh: "法定 30%/栋（待开发商书面确认余量）", quotaEn: "Statutory 30%/building (remaining quota per written developer confirmation)",
      presaleZh: "在售，分期推售", presaleEn: "On sale, phased release",
      promoZh: "以售楼处当期政策为准（早付折扣与分期方案常见 6.5%–12%）", promoEn: "Per current sales gallery policy (early-pay discounts & plans typically 6.5%–12%)",
      unitsZh: "1房 50–60㎡ / 2房 70–90㎡ / 3房 110–140㎡ / 4房 160㎡+，详情以售楼处户型册为准", unitsEn: "1BR 50–60 / 2BR 70–90 / 3BR 110–140 / 4BR 160+ sqm, see gallery floor plans", unitsShortZh: "1房50–60㎡ / 2房70–90㎡ / 3房110–140㎡ / 4房160㎡+", unitsShortEn: "1BR 50–60 / 2BR 70–90 / 3BR 110–140 / 4BR 160+ sqm" },
    { name: "Elysian", nameEn: "Elysian", city: "胡志明", cityEn: "HCMC", district: "守德", districtEn: "Thu Duc", launch: "2025 Q3", price: 3200, unit: "USD/㎡", typeZh: "中高端", typeEn: "Mid-high", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=Elysian+Apartments+Thu+Duc+Ho+Chi+Minh", saleUrl: "https://www.google.com/search?q=Elysian+Thu+Duc+Gia+Dinh+official+sales", priceNow: "≈3,200–3,800 USD/㎡（2026-10）",
      developer: "Gamuda Land（马来西亚）", developerEn: "Gamuda Land (Malaysia)", devType: "foreign",
      quotaZh: "法定 30%/栋（外资开发商，外籍销售经验成熟）", quotaEn: "Statutory 30%/building (foreign developer, mature expat sales process)",
      presaleZh: "在售，预计 2027 交付", presaleEn: "On sale, handover expected 2027",
      promoZh: "分期付款常见 1–3 年期；早付折扣 5%–10%（以当期公示为准）", promoEn: "Installment plans typically 1–3 years; 5%–10% early-pay discount (per current announcement)",
      unitsZh: "1房 48–56㎡ / 2房 70–80㎡ / 3房 95–120㎡ / 复式 130㎡+，详情以售楼处为准", unitsEn: "1BR 48–56 / 2BR 70–80 / 3BR 95–120 / duplex 130+ sqm, see gallery", unitsShortZh: "1房48–56㎡ / 2房70–80㎡ / 3房95–120㎡ / 复式130㎡+", unitsShortEn: "1BR 48–56 / 2BR 70–80 / 3BR 95–120 / duplex 130+ sqm" },
    { name: "Khai Hoan Prime", nameEn: "Khai Hoan Prime", city: "胡志明", cityEn: "HCMC", district: "南部/芽𡶀", districtEn: "South/Nha Be", launch: "2025 Q3", price: 2800, unit: "USD/㎡", typeZh: "中端", typeEn: "Mid", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=Khai+Hoan+Prime+Nha+Be+Ho+Chi+Minh", saleUrl: "https://www.google.com/search?q=Khai+Hoan+Prime+official+sales", priceNow: "≈2,800–3,300 USD/㎡（2026-10）",
      developer: "Keen Land", developerEn: "Keen Land", devType: "local",
      quotaZh: "法定 30%/栋（中端盘配额相对充裕）", quotaEn: "Statutory 30%/building (mid-range quota relatively ample)",
      presaleZh: "在售", presaleEn: "On sale",
      promoZh: "以售楼处当期政策为准", promoEn: "Per current sales gallery policy",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准", unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery", unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡", unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm" },
    { name: "Noble West Lake Ha Noi", nameEn: "Noble West Lake Ha Noi", city: "河内", cityEn: "Hanoi", district: "西湖/Ciputra", districtEn: "Tay Ho/Ciputra", launch: "2026 Q1 动工", price: 8200, unit: "USD/㎡", typeZh: "品牌豪宅", typeEn: "Branded luxury", foreignOk: true, statusZh: "即将开盘", statusEn: "Upcoming", gmaps: "https://www.google.com/maps/search/?api=1&query=Noble+West+Lake+Ciputra+Hanoi", saleUrl: "https://www.google.com/search?q=Noble+West+Lake+Hanoi+official+sales",
      saleTimeZh: "待定（开工中、未开售；预计 2026 Q4–2027 Q1 开盘，有官方公示后自动更新）", saleTimeEn: "TBD (under construction, not on sale; launch expected Q4 2026 – Q1 2027; auto-updated once officially announced)",
      developer: "Noble（越南本土）", developerEn: "Noble (Vietnam)", devType: "local",
      quotaZh: "法定 30%/栋（豪宅盘外籍配额紧张，建议开盘前登记）", quotaEn: "Statutory 30%/building (luxury quota tight — register before launch)",
      presaleZh: "2026 Q1 动工；开发商 10 月第三周通报：试桩、导墙与地连墙均已完成，CT5/CT6 两个标段主桩施工加速（10 月初口径为主桩约 80%、CT5 地连墙约 50%，以本次通报为准）；项目约 6 公顷、12 栋 40 层塔楼+3 层地下，邻武志功街、Lotte Mall 西湖对面，尚未开售", presaleEn: "Ground broken Q1 2026; per the developer's third-week-of-October update, test piles, guide walls and diaphragm walls are complete with main piling accelerating at both CT5 and CT6 (early October had main piles about 80% and CT5 walls about 50%; this update supersedes); ~6ha, 12 towers of 40 floors plus 3 basements, on Vo Chi Cong street opposite Lotte Mall West Lake - not yet on sale",
      promoZh: "预售期政策未公布", promoEn: "Pre-launch policy not yet published",
      unitsZh: "品牌豪宅户型待公布", unitsEn: "Branded-luxury floor plans TBA", unitsShortZh: "待公布", unitsShortEn: "TBA" },
    { name: "Parc Régent (ParkCity)", nameEn: "Parc Régent (ParkCity)", city: "河内", cityEn: "Hanoi", district: "西湖", districtEn: "Tay Ho", launch: "2026 Q1 动工", price: 4700, unit: "USD/㎡", typeZh: "高端", typeEn: "High-end", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=Parc+Regent+ParkCity+Tay+Ho+Hanoi", saleUrl: "https://www.parkcity.com.my", priceNow: "≈4,700–5,300 USD/㎡（2026-10）",
      developer: "ParkCity Group（马来西亚）", developerEn: "ParkCity Group (Malaysia)", devType: "foreign",
      quotaZh: "法定 30%/栋", quotaEn: "Statutory 30%/building",
      presaleZh: "在售（首期推售中）", presaleEn: "On sale (first phase releasing)",
      promoZh: "外资开发商常见分期+早付折扣，以当期公示为准", promoEn: "Foreign developers typically offer installments + early-pay discounts; per current announcement",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准", unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery", unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡", unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm" },
    { name: "Maison Privée", nameEn: "Maison Privée (CapitaLand)", city: "河内", cityEn: "Hanoi", district: "Ciputra", districtEn: "Ciputra", launch: "2026 Q2 发布", price: 6000, unit: "USD/㎡", typeZh: "高端合资", typeEn: "High-end JV", foreignOk: true, statusZh: "即将开盘", statusEn: "Upcoming", gmaps: "https://www.google.com/maps/search/?api=1&query=Ciputra+Hanoi", saleUrl: "https://www.capitaland.com",
      saleTimeZh: "待定（2026 Q2 已发布，正式开售与销售代理协商分批，有公示后自动更新）", saleTimeEn: "TBD (released Q2 2026; batched launch negotiated with agents; auto-updated once announced)",
      developer: "CapitaLand（新加坡）× 三菱地所 × 野村不动产", developerEn: "CapitaLand (Singapore) × Mitsubishi Estate × Nomura Real Estate", devType: "jv",
      quotaZh: "法定 30%/栋（新加坡开发商，外籍销售流程规范）", quotaEn: "Statutory 30%/building (Singapore developer, disciplined foreign sales process)",
      presaleZh: "已发布，分批开售；位于 Ciputra 城区中心（建筑密度约 14%），配 68 项设施、拟申请 WELL 住宅认证", presaleEn: "Launched, selling in batches; in the heart of Ciputra (construction density ~14%) with 68 amenities and aiming for WELL residential certification",
      promoZh: "预售期政策未公布", promoEn: "Pre-launch policy not yet published",
      unitsZh: "高端户型待分批公布", unitsEn: "High-end plans to be released in batches", unitsShortZh: "待分批公布", unitsShortEn: "TBA by batch" },
    { name: "Mandarin Garden 3", nameEn: "Mandarin Garden 3 (Hoa Phat)", city: "河内", cityEn: "Hanoi", district: "炎坊/Yen So", districtEn: "Yen So", launch: "2026 Q4 预计", price: 2800, unit: "USD/㎡", typeZh: "中高端", typeEn: "Mid-high", foreignOk: true, statusZh: "即将开盘", statusEn: "Upcoming", gmaps: "https://www.google.com/maps/search/?api=1&query=Mandarin+Garden+Yen+So+Hanoi", saleUrl: "https://hoaphat.com.vn",
      saleTimeZh: "待定（预计 2026 Q4，有官方公示后自动更新）", saleTimeEn: "TBD (expected Q4 2026; auto-updated once officially announced)",
      developer: "Hoa Phat（越南本土钢铁巨头）", developerEn: "Hoa Phat (Vietnam steel group)", devType: "local",
      quotaZh: "法定 30%/栋（中端盘配额相对充裕）", quotaEn: "Statutory 30%/building (mid-range quota relatively ample)",
      presaleZh: "预计 2026 Q4 开售", presaleEn: "Sales expected Q4 2026",
      promoZh: "预售期政策未公布", promoEn: "Pre-launch policy not yet published",
      unitsZh: "中高端户型待公布", unitsEn: "Mid-high-end floor plans TBA", unitsShortZh: "待公布", unitsShortEn: "TBA" },
    { name: "Sunshine Continental", nameEn: "Sunshine Continental", city: "河内", cityEn: "Hanoi", district: "慈廉", districtEn: "Tu Liem", launch: "2026 Q1 动工", price: 6000, unit: "USD/㎡", typeZh: "高端", typeEn: "High-end", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=Sunshine+Continental+Tu+Liem+Hanoi", saleUrl: "https://sunshinegroup.vn", priceNow: "≈6,000–6,800 USD/㎡（2026-10）",
      developer: "Sunshine Group", developerEn: "Sunshine Group", devType: "local",
      quotaZh: "法定 30%/栋", quotaEn: "Statutory 30%/building",
      presaleZh: "在售", presaleEn: "On sale",
      promoZh: "Sunshine 系常见分期 2–3 年+早付折扣，以当期公示为准", promoEn: "Sunshine typically offers 2–3yr installments + early-pay discounts; per current announcement",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准", unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery", unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡", unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm" },
    { name: "The Reflection West Lake", nameEn: "The Reflection West Lake", city: "河内", cityEn: "Hanoi", district: "西湖", districtEn: "Tay Ho", launch: "2026", price: 5800, unit: "USD/㎡", typeZh: "高端", typeEn: "High-end", foreignOk: true, statusZh: "在售", statusEn: "On sale", gmaps: "https://www.google.com/maps/search/?api=1&query=The+Reflection+West+Lake+Tay+Ho+Hanoi", saleUrl: "https://www.google.com/search?q=The+Reflection+West+Lake+Hanoi+official+sales", priceNow: "≈5,800–6,500 USD/㎡（2026-10）",
      developer: "待核实", developerEn: "TBC", devType: "tbc",
      quotaZh: "法定 30%/栋", quotaEn: "Statutory 30%/building",
      presaleZh: "在售", presaleEn: "On sale",
      promoZh: "以售楼处当期政策为准", promoEn: "Per current sales gallery policy",
      unitsZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡，详情以售楼处为准", unitsEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm, see gallery", unitsShortZh: "1房 48–58㎡ / 2房 70–85㎡ / 3房 100–120㎡", unitsShortEn: "1BR 48–58sqm / 2BR 70–85sqm / 3BR 100–120sqm" }
  ],
  launchesNoteZh: "「当前价格区间」为开盘超 6 个月在售盘的二手/尾盘估算（2026-10）；外籍配额均为《住房法 2023》法定 30%/栋口径，实际余量以开发商盖章确认函为准；户型价格为含 VAT 的参考区间（Masteri Park Place 为公开价目口径）。「待定」= 官方暂未公示，自动化有数据后自动填写。",
  launchesNoteEn: "Current ranges are resale/inventory estimates (Oct 2026); foreign quota follows the statutory 30%/building cap (Housing Law 2023) — remaining quota per written developer confirmation; unit prices are VAT-inclusive reference ranges (Masteri Park Place per public price list). 「TBD」= awaiting official announcement; auto-filled once data is available.",

  /* ---------- 河内 vs 胡志明大涨归因（VARS IRE / Batdongsan / 汇总）---------- */
  hanoiAnalysis: {
    titleZh: "为什么河内涨得比胡志明猛？",
    titleEn: "Why has Hanoi outpaced HCMC?",
    summaryZh: "2023 年初河内均价还比胡志明低 23%（3,800 万 vs 4,700 万盾/㎡）；到 2025 年中反超 11%，2026 Q2 一手均价 $4,356 vs $4,088 首次全面反超。核心是「供给收缩 + 成本推升 + 基建兑现」三力叠加，胡志明则因供应恢复与盘子大而涨幅温和。",
    summaryEn: "In early 2023 Hanoi was 23% cheaper than HCMC (VND 38M vs 47M/sqm); by mid-2025 it was 11% dearer and in 2026 Q2 the primary average ($4,356 vs $4,088) overtook HCMC for the first time. Supply contraction + cost-push + infrastructure delivery compounded; HCMC stayed mild on larger supply.",
    caveatZh: "⚠️ 口径纠偏（重要）：「河内均价反超胡志明」是【市场均价】口径，主要由供给结构导致——河内 2026 新推盘几乎全是高端/豪宅（无 C 级、6,000 万盾/㎡ 以下项目绝迹），拉高了均价；而胡志明仍有中端与郊区盘摊薄。CBRE 明确：按【同档次】对比，河内价格实际仍【低于】胡志明。也就是说，不是「同样的房子河内更贵」，而是「河内市场上只剩贵房子」。判断两地真实贵贱，务必看同档次单价，而非均价。",
    caveatEn: "⚠️ Important caveat: 「Hanoi overtook HCMC」 is an AVERAGE-price claim driven by supply mix — in 2026 nearly all of Hanoi's new supply is high-end/luxury (zero Grade-C; nothing below VND 60M/sqm), pulling the average up, while HCMC retains mid-range and suburban stock. CBRE is explicit: on a LIKE-FOR-LIKE (same segment) basis, Hanoi is still CHEAPER than HCMC. So it is not 'the same home is dearer in Hanoi' but 'Hanoi's market now only sells expensive homes'. Judge true affordability by same-segment unit price, not the average.",
    factors: [
      { iconZh: "📜", tZh: "2024《土地法》成本冲击", tEn: "2024 Land Law cost shock", dZh: "2024-08 与 103/2024 号法令实施后，项目地价与土地使用费按市场价重估，土地成本占开发成本比例跳升，开发商被迫抬价——VARS IRE 认定这是首要推手；重启的旧项目还叠加历史财务成本。", dEn: "From Aug 2024 (Decree 103/2024) project land prices were re-valued at market rates; land cost now dominates the cost stack, forcing developers to raise prices (VARS IRE cites this as the top driver); restarted projects add legacy financial costs." },
      { iconZh: "📉", tZh: "供给极度短缺", tEn: "Severe supply shortage", dZh: "河内新供应 2023–2025 连续处于历史低位：2025 全年仅约 2.45 万套新增，且 40%+ 集中在 1.2 亿盾/㎡ 以上高端段，中低端几乎断供；胡志明靠合并平阳后郊区盘补量（合并后均价 5,700 万盾/㎡，比河内低 25%）。", dEn: "Hanoi added only ~24,500 units in 2025 with 40%+ priced above VND 120M/sqm — the affordable segment nearly vanished; HCMC's post-merger suburbs keep adding volume (post-merger avg VND 57M/sqm, 25% below Hanoi)." },
      { iconZh: "🚇", tZh: "基建集中兑现", tEn: "Infrastructure delivery", dZh: "河内四环、Trần Hưng Đạo 大桥、Tứ Liên 大桥、地铁 2A/3 号线与内排机场 T3 在 2024–2028 密集落地，近郊（嘉林、怀德、纸桥-南慈廉）通勤时间骤减，地价与房价沿走廊重估；胡志明地铁红利（1号线）已提前计入价格。", dEn: "Hanoi's Ring Road 4, Tran Hung Dao & Tu Lien bridges, metro lines 2A/3 and Noi Bai T3 land 2024–2028, re-rating near-central districts (Gia Lam, Hoai Duc, Cau Giay); HCMC's metro-line-1 premium was largely priced in beforehand." },
      { iconZh: "🏭", tZh: "外资 FDI 与产业人口", tEn: "FDI & industrial jobs", dZh: "三星、富士康、LG 与电子业集群持续向河内-北宁-兴安走廊加码，高薪工程师涌入「西湖-南慈廉-嘉林」租房购房；叠加 2024–2025 越南整体 FDI 创新高，首都圈承接最集中。", dEn: "Samsung, Foxconn, LG and electronics clusters keep expanding along the Hanoi–Bac Ninh–Hung Yen corridor; well-paid engineers fuel rental and purchase demand in Tay Ho–Nam Tu Liem–Gia Lam, atop record national FDI in 2024–25." },
      { iconZh: "💰", tZh: "资金面：避险资金涌入", tEn: "Capital flows into bricks", dZh: "金市/股市波动后资金寻找避险资产，信贷宽松期低成本资金流入地产；北部资金同时南下买胡志明（Q2 2025 占胡志明公寓搜索 61%，同比+17pp），进一步证明河内已贵到外溢。", dEn: "Money rotated from gold/stocks into property during easy credit; northern capital also flowed south (61% of HCMC apartment searches in Q2 2025, +17pp YoY) — evidence Hanoi had already become expensive enough to spill over." },
      { iconZh: "🏙️", tZh: "结构性起点差异", tEn: "The starting-point gap", dZh: "2023 年初河内深跌后基数低（38M 盾/㎡ vs 胡志明 47M），叠加首都「迁府」预期与行政区划改革，补涨弹性天然更大——涨幅差里有一半是低基数修复，而非胡志明基本面变差。", dEn: "Hanoi started 2023 from a deeper trough (VND 38M vs 47M/sqm); with capital-relocation expectations and admin reform, mean-reversion did half the work — the growth gap is partly low-base catch-up, not HCMC deterioration." }
    ],
    sourceLinks: [
      { t: "VARS IRE（劳动报）", url: "https://news.laodong.vn/bat-dong-san/loat-nguyen-nhan-kien-gia-chung-cu-tang-manh-1597281.ldo" },
      { t: "Batdongsan H1 2025 市场报告", url: "https://metrohousevietnam.com?p=1543/" },
      { t: "Bamboo Routes 价格全景", url: "https://bambooroutes.com/blogs/news/vietnam-price-forecasts" }
    ]
  },

  /* ---------- 投资选项（面向外籍买家，2026-10 口径）---------- */
  investOptions: {
    titleZh: "若现在要投资越南房产：四个方向",
    titleEn: "If investing now: four options",
    noteZh: "以下为基于公开数据的策略方向（非投资建议）。外籍限制：只能买商业住宅公寓（30%/栋配额、50 年产权），不可买土地/独栋别墅。gross yield 为毛回报，未扣管理费/税/空置。",
    noteEn: "Strategy directions from public data (not investment advice). Foreigner limits: condos in licensed projects only (30%/building quota, 50-year leasehold) — no land or landed villas. Gross yields, before fees/tax/vacancy.",
    options: [
      { nameZh: "守德东走廊（胡志明）", nameEn: "Thu Duc East corridor (HCMC)", iconZh: "🏗️", yieldText: "毛租金 6–8%", entryZh: "入场 ≈ $2,800–5,500/㎡", dZh: "地铁 2 号线（2030）+ 隆城机场（2030）双利好，Thu Thiem 金融中心租赁外溢；期房分期（每 6 个月 10%）+ 早付折扣最高 15%，杠杆友好。适合：中长期持有、吃基建兑现。代表盘：The Global City / Masteri Park Place / Elysian。", dEn: "Metro L2 (2030) + Long Thanh airport (2030), Thu Thiem rental spillover; staged payments (10%/6mo) + up-to-15% early-pay discounts make leverage friendly. Suits: medium-term holds riding infrastructure. E.g. The Global City / Masteri Park Place / Elysian.", riskZh: "风险：2028 才交房，地铁/机场时间表可能延后", riskEn: "Risk: handover 2028; metro/airport dates can slip" },
      { nameZh: "西湖 + 嘉林（河内）", nameEn: "Tay Ho + Gia Lam (Hanoi)", iconZh: "🏙️", yieldText: "毛租金 5–8%", entryZh: "入场 ≈ $2,600–5,500/㎡", dZh: "西湖服务式公寓外派需求刚性（使领馆/外企高管），租金回报 6–8%；嘉林（Vinhomes Ocean Park 一带）单价低、靠地铁规划补涨，是河内成交量主力。适合：现金流优先、想要已建成资产。", dEn: "Tay Ho serviced apartments enjoy sticky expat demand (embassies/MNCs) at 6–8% yields; Gia Lam (Vinhomes Ocean Park area) offers low entry prices with metro-driven upside. Suits: cash-flow-first buyers wanting completed assets.", riskZh: "风险：河内涨幅已兑现较多，追高风险大于胡志明", riskEn: "Risk: much of the rerating has happened; chasing risk is higher" },
      { nameZh: "岘港（度假+数字游民）", nameEn: "Da Nang (resort & nomads)", iconZh: "🏖️", yieldText: "毛租金 4.5–9%", entryZh: "入场 ≈ $1,357–3,800/㎡", dZh: "房价约为胡志明一半，自由贸易区+莲沼港扩建将城市从旅游转型为全年商业枢纽；短租民宿旺季年化可达 6–9%，欧美韩数字游民需求增长。适合：小额入场+能接受季节性空置。", dEn: "Prices are roughly half of HCMC; the Free Trade Zone and Lien Chieu port turn the city into a year-round hub; short-term rental annualized 6–9% in season with growing Western/Korean nomad demand. Suits: small tickets + tolerance for seasonal vacancy.", riskZh: "风险：旅游淡旺季空置率高，二手流动性弱于两大城市", riskEn: "Risk: seasonal vacancy; weaker resale liquidity" },
      { nameZh: "平阳/工业走廊（纯收租）", nameEn: "Binh Duong / industrial belt", iconZh: "🏭", yieldText: "毛租金 5–10%", entryZh: "入场 ≈ $1,100–1,700/㎡（住宅）；仓储物流另计", dZh: "制造业+电商枢纽，工人/工程师租住需求刚性，公寓 5–7%、仓储物流 8–10% 为越南最高梯队；但增值慢于主城、二手市场薄。适合：高现金流、低单价、不指望暴击。", dEn: "Manufacturing + e-commerce hub with sticky worker/engineer rental demand: condos 5–7%, logistics/warehousing 8–10% — Vietnam's top yield tier; but slower appreciation and thin resale. Suits: yield-first, low-ticket, no moonshot expectations.", riskZh: "风险：产业外迁/关税冲击敏感，退出渠道有限", riskEn: "Risk: sensitive to re-shoring/tariff shocks; limited exit channels" }
    ],
    sourceLinks: [
      { t: "Invest Vietnam 市场展望", url: "https://blog.investvietnam.co/vietnam-real-estate-market-forecast-2025-2026-what-investors-need-to-know/" },
      { t: "Own Property Abroad 价格数据", url: "https://ownpropertyabroad.com/vietnam/vietnam-house-prices-trends/" },
      { t: "Realting 外籍购房指南", url: "https://realting.com/news/how-to-buy-a-house-in-vietnam" }
    ]
  },

  /* ---------- 楼盘住宅性质与燃气（外籍购房必读）----------
     越南城市无市政天然气网：公寓燃气 = 中央气瓶房+管道入户（新盘常见，配泄漏报警）或户内罐装（旧盘/中低端为主）。以物业书面确认为准。 */
  housingMeta: {
    noteZh: "外籍只能购买「商业住宅项目」（Housing Law 2023）；普通住宅/社会住房不可售外籍。越南城市无市政天然气管道入户，普遍为「中央气瓶房+管道入户」（新中高端盘，配泄漏报警与集中计量）或「户内罐装煤气」（旧盘/中低端）。以下为代表性核实，签约前请物业书面确认。",
    noteEn: "Foreigners may only buy in commercial housing projects (Housing Law 2023); social/ordinary housing is off-limits. Vietnam cities have no piped city-gas network — apartments use a central LPG room with in-unit piping (new mid/high-end, leak alarms) or in-unit cylinders (older/lower-end). Verify with property mgmt in writing before signing.",
    byProject: {
      "Grand Marina Saigon": { gasZh: "中央燃气系统+管道入户（户内计量）", gasEn: "Central LPG system, piped in-unit" },
      "Vinhomes Golden River": { gasZh: "中央燃气系统（含泄漏报警）", gasEn: "Central LPG system (leak alarms)" },
      "Empire City": { gasZh: "中央燃气系统", gasEn: "Central LPG system" },
      "The Global City": { gasZh: "中央燃气系统（分期接入）", gasEn: "Central LPG (per phase)" },
      "The Horizon / Midtown": { gasZh: "中央瓶组站+管道入户", gasEn: "Central cylinder bank, piped" },
      "Vinhomes Grand Park": { gasZh: "中央燃气系统", gasEn: "Central LPG system" },
      "Masteri Centre Point": { gasZh: "中央燃气系统", gasEn: "Central LPG system" },
      "Lumiere Riverside": { gasZh: "中央燃气系统", gasEn: "Central LPG system" },
      "Sunrise Riverside": { gasZh: "户内罐装为主（部分楼栋中央瓶组）", gasEn: "Mostly in-unit cylinders" }
    },
    defaultGasZh: "以物业确认为准（新盘多为中央瓶组+管道入户）",
    defaultGasEn: "Verify with mgmt (new builds: central L bank + piping)"
  },

  /* ---------- 外籍配额查询（估算，需向建设厅核实）---------- */
  quotaDisclaimerZh: "以下为公开销售信息与市场估算（示意），实际剩余配额请以开发商书面确认或建设厅公示为准——签约前务必索取盖章的配额确认函。",
  quotaDisclaimerEn: "Estimates from public sales info (illustrative). Verify remaining quota with written developer confirmation / Dept of Construction before signing.",

  /* ---------- 烂尾/争议案例库 ---------- */
  failedCases: [
    { name: "The Hallmark（守添）", nameEn: "The Hallmark (Thu Thiem)", developerZh: "万盛发集团（Vạn Thịnh Phát）", developerEn: "Van Thinh Phat Group", year: "2022–2024", eventZh: "开发商万盛发系资金链断裂（SCB 案），2022 年停工，业主集体维权，后由新投资方接手复工。", eventEn: "Van Thinh Phat-linked SCB case froze the project in 2022; owners protested; later revived by new investors.", statusZh: "已复工", statusEn: "Revived", link: "https://vnexpress.net" },
    { name: "Khải Hoàn–Minh Châu II（平政）", nameEn: "Khai Hoan-Minh Chau II (Binh Chanh)", developerZh: "Khải Hoàn Land（凯还地产）", developerEn: "Khai Hoan Land", year: "2008–2017", eventZh: "2008 年金融危机后长期停工近十年，购房者苦等多年维权，最终分期解决，成为本地「烂尾」教科书案例。", eventEn: "Stalled nearly a decade after the 2008 crisis; buyers waited years before a phased settlement — a textbook stall case.", statusZh: "已解决", statusEn: "Resolved", link: "https://vnexpress.net" },
    { name: "Golden An Phú（第2郡）", nameEn: "Golden An Phu (D2)", developerZh: "Golden Land（待核实）", developerEn: "Golden Land (TBC)", year: "2010–2020s", eventZh: "延期交付超过十年，法律纠纷复杂，多次调解未果，是「老烂尾」代表。", eventEn: "Handover delayed over a decade with tangled legal disputes — a representative long-stalled project.", statusZh: "悬而未决", statusEn: "Unresolved", link: "https://tuoitre.vn" },
    { name: "Hưng Thịnh 系部分项目（2023 风波）", nameEn: "Hung Thinh projects (2023 turbulence)", developerZh: "兴盛集团（Hưng Thịnh）", developerEn: "Hung Thinh Corporation", year: "2023", eventZh: "房地产债券收紧期，部分项目停工延期，公司通过债务重组+政府协调逐步恢复。", eventEn: "Bond-credit squeeze stalled several projects; revived via restructuring + government coordination.", statusZh: "逐步复工", statusEn: "Gradually resumed", link: "https://tuoitre.vn" }
  ],
  failedCasesNoteZh: "规避要点：查开发商交付记录→查项目法律文件（投资许可/施工许可/消防验收）→分期付款交房前≤70%→保留尾款5%至粉皮书→优先头部开发商。",
  failedCasesNoteEn: "Mitigation: check developer track record → verify legal dossier (investment/construction permits, fire approval) → ≤70% pre-handover → withhold 5% until Pink Book → prefer tier-1 developers.",

  /* ---------- 地铁 / Metro（from/to 用于图例始发终到）---------- */
  metro: [
    { line: "1号线", lineEn: "Line 1", from: "滨城", fromEn: "Ben Thanh", to: "仙泉", toEn: "Suoi Tien", name: "滨城–仙泉", nameEn: "Ben Thanh–Suoi Tien", status: "operating", statusZh: "已通车", statusEn: "Operating", since: "2024-12-22", expect: "—", length: "19.7 km", stations: 14, color: "#1a7f4f" },
    { line: "2号线西段", lineEn: "Line 2 West", from: "滨城", fromEn: "Ben Thanh", to: "tham Lương", toEn: "Tham Luong", name: "滨城– tham Lương", nameEn: "Ben Thanh–Tham Luong", status: "building", statusZh: "在建", statusEn: "Building", since: "2026-01-15 开工", expect: "2030-12 通车", length: "11.3 km", stations: 11, color: "#2563eb" },
    { line: "2号线东段", lineEn: "Line 2 East", from: "滨城", fromEn: "Ben Thanh", to: "守添", toEn: "Thu Thiem", name: "滨城–守添", nameEn: "Ben Thanh–Thu Thiem", status: "building", statusZh: "在建", statusEn: "Building", since: "2026-04-30 开工", expect: "2030-04", length: "6.2 km", stations: 6, color: "#2563eb" },
    { line: "滨城–芹椰", lineEn: "Ben Thanh–Can Gio", from: "滨城", fromEn: "Ben Thanh", to: "芹椰", toEn: "Can Gio", name: "跨海市域线", nameEn: "Coastal line", status: "building", statusZh: "在建", statusEn: "Building", since: "2025-12-19 开工", expect: "2028", length: "约54 km", stations: null, color: "#f59e0b" },
    { line: "守添–隆城", lineEn: "Thu Thiem–Long Thanh", from: "守添", fromEn: "Thu Thiem", to: "隆城机场", toEn: "Long Thanh Airport", name: "机场快线", nameEn: "Airport rail", status: "building", statusZh: "在建", statusEn: "Building", since: "2026-06-30 开工", expect: "2030", length: "约47.7 km", stations: 19, color: "#8b5cf6" },
    { line: "6号线", lineEn: "Line 6", from: "新山一机场", fromEn: "Tan Son Nhat", to: "富友", toEn: "Phu Huu", name: "新山一–富友", nameEn: "Tan Son Nhat–Phu Huu", status: "approved", statusZh: "已批待开工", statusEn: "Approved", since: "2026-12 预计开工", expect: "2030", length: "22.85 km", stations: null, color: "#e5484d" },
    { line: "平阳新城线", lineEn: "Binh Duong New City line", from: "平阳新城", fromEn: "BD New City", to: "仙泉", toEn: "Suoi Tien", name: "平阳新城–仙泉", nameEn: "BD New City–Suoi Tien", status: "approved", statusZh: "已批待开工", statusEn: "Approved", since: "2026-12 预计开工", expect: "2030", length: "32.8 km", stations: 17, color: "#14b8a6" }
  ],
  metroSourceUrl: "https://news.laodong.vn/xa-hoi/metro-tphcm-vao-giai-doan-but-toc-1692893.ldo",

  /* ---------- 地图 POI（坐标为近似示意）---------- */
  mapPois: {
    projects: [
      { n: "Vinhomes Golden River", lat: 10.7768, lng: 106.7092 },
      { n: "Grand Marina Saigon", lat: 10.7746, lng: 106.7033 },
      { n: "The Marq", lat: 10.7790, lng: 106.7029 },
      { n: "The Metropole Thu Thiem", lat: 10.7800, lng: 106.7300 },
      { n: "Empire City", lat: 10.7823, lng: 106.7332 },
      { n: "The Global City", lat: 10.8015, lng: 106.7452 },
      { n: "Lumiere Riverside", lat: 10.7903, lng: 106.7375 },
      { n: "Midtown Phu My Hung", lat: 10.7335, lng: 106.7037 },
      { n: "Sunrise Riverside", lat: 10.7240, lng: 106.7135 },
      { n: "Vinhomes Grand Park", lat: 10.8487, lng: 106.8335 },
      { n: "Masteri Centre Point", lat: 10.8445, lng: 106.8285 }
    ],
    metro: [
      { n: "Ben Thanh 滨城 (L1)", lat: 10.7708, lng: 106.6978 },
      { n: "Ba Son 巴逊 (L1)", lat: 10.7819, lng: 106.7083 },
      { n: "Van Thanh (L1)", lat: 10.7960, lng: 106.7155 },
      { n: "Thao Dien (L1)", lat: 10.8005, lng: 106.7337 },
      { n: "An Phu (L1)", lat: 10.8030, lng: 106.7440 },
      { n: "Phuoc Long (L1)", lat: 10.8214, lng: 106.7581 },
      { n: "Thu Duc (L1)", lat: 10.8405, lng: 106.7945 },
      { n: "Suoi Tien 仙泉 (L1)", lat: 10.8794, lng: 106.8139 },
      { n: "Tao Dan (L2在建)", lat: 10.7710, lng: 106.6920 },
      { n: "Hoa Hung (L2在建)", lat: 10.7890, lng: 106.6740 },
      { n: "Thu Thiem 守添 (L2东段在建)", lat: 10.7760, lng: 106.7220 }
    ],
    hospitals: [
      { n: "FV Hospital (D7)", lat: 10.7295, lng: 106.7235 },
      { n: "Vinmec Central Park", lat: 10.7898, lng: 106.7172 },
      { n: "BV Nhan Dan 115", lat: 10.7757, lng: 106.6655 },
      { n: "Vinmec Golden River 诊所", lat: 10.7772, lng: 106.7088 },
      { n: "Saigon General Hospital", lat: 10.7828, lng: 106.7052 }
    ],
    schools: [
      { n: "ISHCMC 国际学校", lat: 10.7955, lng: 106.7410 },
      { n: "BIS An Phu", lat: 10.8052, lng: 106.7535 },
      { n: "SSIS 西贡南国际学校", lat: 10.7315, lng: 106.6885 },
      { n: "Vinschool Golden River", lat: 10.7765, lng: 106.7080 }
    ],
    malls: [
      { n: "Vincom Dong Khoi", lat: 10.7768, lng: 106.7042 },
      { n: "Takashimaya", lat: 10.7738, lng: 106.7012 },
      { n: "Crescent Mall (PMH)", lat: 10.7318, lng: 106.7025 },
      { n: "SC VivoCity", lat: 10.7415, lng: 106.7125 },
      { n: "Vincom Mega Mall Grand Park", lat: 10.8480, lng: 106.8330 },
      { n: "Estella Place", lat: 10.8022, lng: 106.7392 },
      { n: "AEON Mall Tan Phu", lat: 10.8013, lng: 106.6270 }
    ],
    transport: [
      { n: "新山一国际机场 TSN", lat: 10.8187, lng: 106.6520 },
      { n: "西贡火车站", lat: 10.8063, lng: 106.6640 },
      { n: "东部新客运站", lat: 10.8712, lng: 106.7905 },
      { n: "滨城巴士枢纽", lat: 10.7716, lng: 106.6972 }
    ]
  },

  /* ---------- 银行 V2（核实修正 + 外籍定存）---------- */
  banks: {
    local: [
      { name: "Vietcombank", teaser: "5.5–5.7%", teaserPeriod: "前 6–12 个月", float: "≈12–16%", ltv: "最高100%", tenor: "最长30年", promoZh: "国有大行，网点最多", promoEn: "State bank, widest network" },
      { name: "BIDV", teaser: "5.5%", teaserPeriod: "前 12 个月（1 年）", float: "≈12–16%", ltv: "最高80%", tenor: "最长30年", promoZh: "国有大行，工资代发客户可再降 0.3–0.5%", promoEn: "Payroll clients get 0.3–0.5% off" },
      { name: "VietinBank", teaser: "6–8.2%", teaserPeriod: "按期限固定", float: "无浮动尾部", ltv: "最高80%", tenor: "最长25年", promoZh: "按期限固定，无浮动尾部", promoEn: "Fixed by tenor, no float tail" },
      { name: "ACB", teaser: "5.5%", teaserPeriod: "前 5 年（首套）", float: "≈12–16%", ltv: "最高90%", tenor: "最长30年", promoZh: "首套房专属包，5 年优惠期最长", promoEn: "First-home package, 5-yr teaser" },
      { name: "SHB", teaser: "3.99% 起", teaserPeriod: "仅 3–6 个月", float: "≈12–16%", ltv: "最高90%", tenor: "最长35年", promoZh: "促销期利率全市场最低，但仅 3–6 个月", promoEn: "Lowest teaser but only 3–6 months" },
      { name: "Agribank", teaser: "5.5%", teaserPeriod: "前 3 年", float: "≈12–16%", ltv: "最高75%", tenor: "最长40年", promoZh: "35 岁以下首套专项，期限最长 40 年", promoEn: "Under-35 first home; 40-yr tenor" }
    ],
    foreign: [
      { name: "HSBC Vietnam", rate: "官方资格仅列越南籍/越侨", ltv: "外籍基本不放贷", tenor: "—", noteZh: "实测：外籍（即便有工作签证+TRC）通常无法申请，仅个案特批", noteEn: "Reality: foreigners (even with WP+TRC) generally cannot apply; case-by-case exceptions only" },
      { name: "Standard Chartered VN", rate: "个案报价 8–9%", ltv: "最高70–75%", tenor: "按TRC有效期", noteZh: "需 TRC+工作许可+本地收入，个案审批", noteEn: "TRC+WP+local income, case-by-case" },
      { name: "Shinhan Bank VN", rate: "7.95–8.1%（12–36月固定）", ltv: "个案", tenor: "按TRC有效期", noteZh: "对外籍相对最友好", noteEn: "Most foreigner-friendly" },
      { name: "Woori Bank VN", rate: "5.6%起（第1年）", ltv: "最高80%", tenor: "个案", noteZh: "韩籍客户为主，其他国籍需核实", noteEn: "Mainly Korean clients; others verify" }
    ],
    foreignNoteZh: "重要核实结论（2026）：越南并无法律禁止外国人贷款，但实操中绝大多数银行不向纯外籍放贷——HSBC 官方资格仅面向越南籍与越侨；渣打/新韩个案审批，且贷款期限被暂住卡有效期（常为 2–3 年）锁死，月供压力大。外籍获批率估计仅 10–20%。多数外籍买家选择全款或开发商分期（交房前≤70%）。借款利率 8–13% vs 租金回报 3.5–6%，融资多为负杠杆，全款/境外融资通常更划算。",
    foreignNoteEn: "Verified (2026): no law bans foreigner loans, but in practice most banks do not lend to pure foreigners — HSBC officially serves only Vietnamese nationals & Viet Kieu; StanChart/Shinhan are case-by-case with term capped to TRC validity (2–3 yrs). Approval odds ~10–20%. Most foreign buyers pay cash or use developer installments (≤70% pre-handover). Rates 8–13% vs yields 3.5–6% — usually negative leverage; cash or offshore financing wins.",
    downPaymentZh: "本地人首付约 20–30%；外籍若能获批通常需 30–50% 首付；开发商分期首付 30%（首期含定金≤30%）。",
    downPaymentEn: "Locals ~20–30% down; qualified foreigners 30–50%; developer installments 30% first payment (incl. deposit).",
    // 存款利率（按期限，SBV/央行 2026-10 官方口径）
    depositRates: [
      { termZh: "活期 / 1 个月以下", termEn: "Demand / under 1 month", rate: "0.1–0.2%" },
      { termZh: "1–6 个月", termEn: "1–6 months", rate: "4.0–4.6%" },
      { termZh: "6–12 个月", termEn: "6–12 months", rate: "挂牌 3.0–7.9%（10/26 更新：国有四大行 6/9 月 6.6%、12 月 6.8%；PGBank 6.9%/7.0%、Sacombank 6.7%/7.0%、MBV 7.0%、LPBank 6.5%/6.7%、BVBank 6.7%/6.9%、VPBank 6.6%/6.7%、Techcombank 6.45%/6.65%、VIB 7.0%、Saigonbank 13 月 7.9% 为全表最高；SeABank 4.5%、PVcomBank 5.1%、HDBank 5.3%、SCB 3.7%）。注：VnExpress 10/26 调查——实际议价仍高于挂牌 1–3pp（BIDV 1 亿盾以下 7.8%/以上 8.0%、VPBank 6 月 9.1%/12 月 9.2%、NCB App 9%、MB 生日券 8.2%）；SBV 9 月口径含迎新/周末/双日加成平均定存已达 8.1%，与挂牌价不同口径", },
      { termZh: "1 年期（12 个月）", termEn: "1 year (12 months)", rate: "国有柜面 5.4%（VCB/Agri，10/20 起）· 国有线上 6.8%（10/26 表）· MB 5.85%（10/21 起）· PGBank 柜面 6.2%/线上 7.0%（10/23 起）· Saigonbank 6.7% · VPBank 线上 6.7%（10/26 起，原 7.1%）· MBV/VIB/Sacombank 7.0% · 24 月 5.5–6% · SeABank 4.5%/PVcomBank 5.1%（10/21 线上）· LPBank 6.7%" },
      { termZh: "2 年期（12–24 个月）", termEn: "2 years (12–24 months)", rate: "5.9–7.3%" },
      { termZh: "3 年以上（含 5 年期）", termEn: "3 years+ (incl. 5-year)", rate: "国有 24 月 5.5–6%、36–60 月 4.8–5.3% · 股份 6.6–7.8%" },
      { termZh: "USD 存款", termEn: "USD deposits", rate: "0%" },
      { termZh: "大额 CD / 外宾专案", termEn: "Large CDs / expat program", rate: "最高 8.5–9.6%" }
    ],
    // 贷款利率（SBV 2026-08 官方口径）
    loanRates: [
      { termZh: "优先领域短期贷款（≤1 年）", termEn: "Priority-sector short-term (≤1 year)", rate: "≈3.9%（法定上限 4%）" },
      { termZh: "一般 VND 贷款（新贷 + 存量）", termEn: "General VND loans (new + outstanding)", rate: "8.1–10.5%" },
      { termZh: "房贷（住宅抵押，优惠期后浮动）", termEn: "Mortgage (post-promo floating)", rate: "12–16%（平均 14–16%）。10/25 复核：本轮降息未覆盖购房贷，商业银行购房贷 11–14%、优惠期后浮动 13–15%，个别 16%；DKRA 11 家银行 12–24 月固定约 10.9%，VARS IRE 10 家银行优惠 8.5–11%" },
      { termZh: "USD 贷款", termEn: "USD loans", rate: "4.1–5.4%" }
    ],
    depositVsLoanNoteZh: "「贷款 ≈ 存款两倍多」复核结论：不完全准确，需分档——① 一般经营贷（8.1–10.5%）约为同期存款（6.1–7.6%）的 1.1–1.7 倍；② 住房按揭优惠期后浮动利率（12–16%、均值 14–16%）约为 1 年期存款（5.9–7.6%）的 1.6–2.7 倍，仅高个案（16% vs 6.1%）超过 2.6 倍。即：经营贷约 1.1–1.7 倍、按揭约 1.6–2.7 倍；以国有四大行 1 年期存款 5.9% 为基准时，按揭已普遍在两个「两倍」上下。",
    depositVsLoanNoteEn: "Re-check of 'loan ≈ 2× deposit': not universal — ① general business loans (8.1–10.5%) are 1.1–1.7× same-term deposits (6.1–7.6%); ② post-promo floating mortgages (12–16%, avg 14–16%) are 1.6–2.7× the 1-yr deposit (5.9–7.6%); only extremes (16% vs 6.1%) exceed 2.6×. So business ~1.1–1.7×, mortgages ~1.6–2.7×; measured against the Big-4 1-yr deposit of 5.9%, mortgages now sit around or above 2×.",
    localNoteZh: "越南房贷普遍为「优惠期固定利率 + 之后浮动」结构：1 年期固定（BIDV 等）约 5.5%，5 年期固定（ACB 首套包）约 5.5%，优惠期结束后统一浮动至 12–16%（2026 Q4 口径、均值 14–16%）。定息期越短、越要留意浮动跳升风险。10/18 SBV 已要求优先领域贷款利率下调 1.5–2 个百分点，10/19 行长会议后 Agribank（最多 2pp）、BIDV（10/15 起 6–7%）、Sacombank（企业贷 8.5%）等已落地，但均属短期经营类、非按揭。10/20 存款端降息落地（VCB/Agri 6 月以上降 0.5pp、VietinBank 早降午回、BIDV 未动，至当日下午 16 家银行已挂新牌价、12 月期多数跌破 7%），但房贷浮动利率仍未跟进，实际月供压力未减。10/24 进展：多家银行已公布贷款利率下调 1.5–3pp（Agribank、BIDV、VietinBank、MB、LPBank、SHB、ACB、TPBank、SeABank、OCB、Nam A Bank、BVBank），但以经营类为主；SBV 口径新发放+存量贷款平均 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp），房贷浮动仍 12–16%。",
    localNoteEn: "Vietnamese mortgages are typically 'fixed teaser + floating thereafter': 1-yr fixed (BIDV etc.) ≈5.5%, 5-yr fixed (ACB first-home) ≈5.5%, then all float to 12–16% (Q4 2026, avg 14–16%). The shorter the fixed term, the bigger the float-jump risk. On Oct 18 the SBV ordered 1.5–2pp cuts for priority-sector lending; after the Oct 19 governor's meeting Agribank (up to 2pp), BIDV (6–7% from Oct 15) and Sacombank (corporate at 8.5%) have moved, but all on short-term business credit rather than home loans, so whether and how far mortgage rates follow is still open.",
    deposits: [
      { bank: "国有四大行（VCB/BIDV/Vietin/Agri）", rate: "10/20 起 VCB/Agri 柜面 12个月 5.4% · 24月 5.5%；BIDV 仍 5.9% / 6%；VietinBank 当日回调至 5.9% / 6%", noteZh: "两套口径已澄清（10/14）：柜面（BIDV 10/13 调查）1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%。10/19 逐家调查 BIDV 牌价未变（1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%）——国有行当时尚未落地 10/18 要求的 0.5pp 降幅。10/20 落地情况（各行不同步）：Vietcombank 6/9 月 3.5%→3.0%、12 月 5.9%→5.4%、24 月 6%→5.5%、36–60 月 5.3%→4.8%（6 月以下不变：1–2 月 2.1%、3 月 2.4%）；Agribank 6–11 月 4%→3.5%、12–18 月 5.9%→5.4%、24 月 6%→5.5%，柜面最高 5.5%（1–2 月 2.6%、3–5 月 2.9%）；VietinBank 早间同步下调至 3.0%/5.4%/5.5%，当日下午回调 0.5pp 至 3.5%/5.9%/6%；BIDV 10/20 牌价未变（6/9 月 3.5%、12–18 月 5.9%、24/36 月 6%）。线上促销口径（VCB 弹性储蓄 9 月 7.2%、12 月 7.4%）未随柜面同步，实际新价待核实。10/21 追记：Vietcombank 确认按 6 个月以上再降 0.5pp 执行（12 月 5.4%，与本表 10/20 数值一致）；BIDV、VietinBank 10/21 未见新牌价公布，仍为 12–18 月 5.9%、24/36 月 6%。10/22 追记：BIDV 线上牌价维持 4.75–6.8%（1–5 月 4.75%、6–11 月与 15/18 月 6.6%、12/13/24/36 月 6.8%），国有行线上档位未随柜面同步下调", noteEn: "Two schedules clarified (Oct 14): counter (BIDV survey, Oct 13) 2.1% (1–2m), 2.4% (3–5m), 3.5% (6–9m), 5.9% (12–18m), 6.0% (24–36m); online 4.75% (1–5m), 6.6% (6–11m), 6.8% (12/13/24/36m), 6.6% (15/18m). A Oct 19 survey found BIDV's board unchanged — counter 2.1%/2.4%/3.5%/5.9%/6.0% and online 4.75%/6.6%/6.8%/6.6% — so the state banks had yet to implement the 0.5pp cut ordered on Oct 18. Outcomes on Oct 20 differed by bank: Vietcombank cut 6/9-month to 3.0% from 3.5%, 12-month to 5.4% from 5.9%, 24-month to 5.5% from 6% and 36-60-month to 4.8% from 5.3% (sub-6-month unchanged at 2.1% for 1-2 months and 2.4% for 3 months); Agribank cut 6-11-month to 3.5% from 4%, 12-18-month to 5.4% from 5.9% and 24-month to 5.5% from 6%, with a counter maximum of 5.5% (2.6% at 1-2 months, 2.9% at 3-5 months); VietinBank cut to 3.0%/5.4%/5.5% in the morning then reversed the 0.5pp in the afternoon to 3.5%/5.9%/6%; BIDV left its Oct 20 board unchanged (3.5% at 6/9 months, 5.9% at 12-18 months, 6% at 24/36 months). Online promotional tiers (VCB flexible savings at 7.2% for 9 months and 7.4% for 12) did not move with the counter board — new levels to be verified. Oct 21 addendum: Vietcombank confirmed the 0.5pp cut on 6 months+ (12m at 5.4%, matching the Oct 20 figures here); no new BIDV or VietinBank boards on Oct 21, still 5.9% at 12-18m and 6% at 24/36m. Oct 22 addendum: BIDV's online board is unchanged at 4.75-6.8% (4.75% at 1-5m, 6.6% at 6-11m and 15/18m, 6.8% at 12/13/24/36m), so state-bank online tiers have not followed the counter cuts" },
      { bank: "ACB（10/19 公布、10/20 生效）", rate: "调整前 6个月 7.9% · 12个月 8.0%（新牌价待生效后核实）", noteZh: "10/19 宣布下调定存牌价、自 10/20 起适用；同时推出企业贷款降 1.5–2pp 方案（此前 1pp 方案已投放约 5 万亿盾）", noteEn: "Cut its deposit board on Oct 19 effective Oct 20 (new levels to be verified once live); also launched a 1.5–2pp corporate lending cut after its earlier 1pp programme disbursed about VND 5tn" },
      { bank: "Vietcombank CD（线上凭证）", rate: "12个月 7.9%", noteZh: "面值10万盾起", noteEn: "from VND 100k" },
      { bank: "股份制银行（Sacombank/LPBank/Saigonbank 等）", rate: "12个月 5.6–7.5%", noteZh: "10/19 降息后：LPBank 6月 6.5%、12月 6.7%、13–18月 6.55%（柜面 12–18月 6.1%、24–25月 6.3%、48–60月 5.2%）；VietBank 6–8月 5.4%、9–11月 5.5%、12–14月 5.6%、18–36月 5.9%；BVBank 12月柜面 6.05%、线上 6.9%；Nam A Bank 6月以上降 0.5pp。10/15 未调整口径：Sacombank 12/18月 7.5%、Saigonbank 7.2%/7.0%、Bac A Bank 7.1%、VIB 与 MBV 7.0%、MSB 6.8%；10/20 下午全市场已有 16 家银行公布新牌价，12 个月期多数跌破 7%（部分行低于 6%）。10/21 再降：SHB 6–36 月 -0.5pp（6–8 月 5.7%、9–11 月 5.9%、12–13 月 6.0%、15–18 月 6.1%、24–36 月 6.2%，为 4 月以来首次调整）；ABBank 6–60 月 -0.5pp；SeABank 线上 1–15 月 -0.5pp、18–36 月 -0.7pp（12 月 4.5%、18–36 月 4.75%）", noteEn: "After the Oct 19 cuts: LPBank 6m 6.5%, 12m 6.7%, 13–18m 6.55% (counter 12–18m 6.1%, 24–25m 6.3%, 48–60m 5.2%); VietBank 5.4% (6–8m), 5.5% (9–11m), 5.6% (12–14m), 5.9% (18–36m); BVBank 12m 6.05% at the counter and 6.9% online; Nam A Bank cut 0.5pp beyond six months. Unchanged Oct 15 readings: Sacombank 7.5% (12/18m), Saigonbank 7.2%/7.0%, Bac A Bank 7.1%, VIB and MBV 7.0%, MSB 6.8%. More cuts on Oct 21: SHB -0.5pp across 6-36m (5.7% at 6-8m, 5.9% at 9-11m, 6.0% at 12-13m, 6.1% at 15-18m, 6.2% at 24-36m — its first change since April); ABBank -0.5pp across 6-60m; SeABank online -0.5pp for 1-15m and -0.7pp for 18-36m (12m 4.5%, 18-36m 4.75%)" },
      { bank: "VPBank / MB / Techcombank（10/12–10/26 调整）", rate: "VPBank 10/26 起 线上 6–11月 6.6%、12–13月 6.7%、1–5月 4.75%、15–18月 7.4%、24月 7.1%、36月 6%（10/21 降 0.5pp、10/26 再降 0.4pp；≥10 亿盾 6–11月 7.0%、12–13月 7.1%）· MB 10/21 起 6–11月 5.3%、12–18月 5.85%、24–60月 6.5% · Techcombank 10/22 起 线上 12月 6.65%、6–11月 6.45%、13–36月 5.35%（首笔加成 1.5pp 后 12月 8.15%、6月 7.95%）；柜面 12月 6.1%", noteZh: "含促销加成，10/12–10/18 口径；Techcombank 首次开户 3/6/12 月最多加 1 个百分点、符合产品条件整体加 1.5pp；10/15 表列 MB 6/9/12 月线上 6.6%/6.6%/6.8%，同表另列 5.8%/5.8%/6.35% 一行（疑为柜面或特定产品口径，仍待 MB 官方确认）；MB 部分网点对 10 亿盾及以上的 6 月期给到最高 9%/年（10/15 报道）。10/21 MB 跟进降息：6–60 月全线 -0.5pp，线上 6–11 月 5.3%、12–18 月 5.85%、24–60 月 6.5%（此前 6.6%/6.8% 等旧价作废）；VPBank 线上 15/18 月同步 -0.5pp。10/22 Techcombank 跟进：线上「Phát Lộc」1–12 月 -0.1pp（1–2 月 4.25%、3–5 月 4.55%、6–11 月 6.45%、12 月 6.65%）、13–36 月 -0.5pp 统一 5.35%；首笔线上定存 3/6/12 月加 1.5pp 后实际 4.75%/7.95%/8.15%；柜面 1–2 月 4.2%、3–5 月 4.5%、6–11 月 5.9%、12 月 6.1%。10/26 追记：VPBank 再降 0.4pp（6–13 月），线上 6–11 月 6.6%、12–13 月 6.7%、15–18 月 7.4%、24 月 7.1%、36 月 6%，1–5 月维持 4.75%；10 亿盾以上 6–11 月 7.0%、12–13 月 7.1%。VnExpress 10/26 调查：VPBank 网点对新客（100 万盾起）报 6 月 9.1%、12 月 9.2%，MB 生日券 App 存款 8.2%，与挂牌价相差 1–3pp", noteEn: "incl. promo add-ons, Oct 12–18; Techcombank adds up to 1pp for first-time savers on 3/6/12 months and up to 1.5pp where product conditions are met; the Oct 15 table lists MB online 6.6%/6.6%/6.8% for 6/9/12 months alongside a 5.8%/5.8%/6.35% row (likely counter or product-specific rates — still to be confirmed with MB); some MB branches pay up to 9%/yr on 6-month deposits of VND 1bn+ (reported Oct 15). MB followed the Oct 21 cut: -0.5pp across 6-60 months, online 5.3% at 6-11m, 5.85% at 12-18m and 6.5% at 24-60m (the earlier 6.6%/6.8% tiers are superseded); VPBank also cut 0.5pp on its online 15/18-month tiers. Techcombank followed on Oct 22: online Phat Loc cut 0.1pp for 1-12 months (4.25% at 1-2m, 4.55% at 3-5m, 6.45% at 6-11m, 6.65% at 12m) and 0.5pp for 13-36 months to a flat 5.35%; the 1.5pp first-deposit bonus lifts 3/6/12-month effective rates to 4.75%/7.95%/8.15%; counter rates are 4.2%/4.5%/5.9%/6.1% for 1-2m/3-5m/6-11m/12m. Oct 26 update: VPBank cut a further 0.4pp on 6-13 months — online 6.6% (6-11m), 6.7% (12-13m), 7.4% (15-18m), 7.1% (24m), 6% (36m) and 4.75% (1-5m), with 7.0%/7.1% for VND 10bn+ deposits; a VnExpress survey the same day found VPBank quoting 9.1% (6m) and 9.2% (12m) to new customers from VND 1m and MB paying 8.2% on app deposits with a birthday voucher — 1-3pp above the boards" },
      { bank: "HDBank（10/18 调查）", rate: "线上 6月 5%+最高 2.35pp 加成=7.35% · 13月专案 7.6% · 12月 5.3% · 18月 5.6%", noteZh: "常规线上牌价 1–2月 4.2%、3–5月 4.3%、6月 5%、7–11月 4.8%、12月 5.3%、18月 5.6%、24/36月 5%；「黄金储蓄日」加成仅限周六日及双数日（10/10、11/11、12/12），6 月期 ≥1 亿盾最高加 2.35pp、2,000 万–1 亿盾加 2.1pp；另有 13 月期专案 7.6%", noteEn: "Standard online board: 4.2% (1–2m), 4.3% (3–5m), 5% (6m), 4.8% (7–11m), 5.3% (12m), 5.6% (18m), 5% (24/36m); the Golden Savings Day add-on applies only at weekends and on double dates (Oct 10, Nov 11, Dec 12), up to 2.35pp on 6-month deposits of VND 100m+ and 2.1pp for VND 20–100m; a separate 13-month product pays 7.6%" },
      { bank: "BAC A BANK / PGBank / Saigonbank（10/23 更新）", rate: "BAC A BANK 6月 7.05%·12月 7.1%（10/12 牌价）；PGBank 10/23 起柜面 6–9月 6.1%、12–13月 6.2%、18–36月 6.8%，线上 6–9月 6.9%、12–13月 7.0%；Saigonbank 10/23 线上 6月 6.4%、7–11月 6.1%、12月 6.7%、18月 6.5%、24月 6.0%、36月 6.1%、13月 7.9%", noteZh: "PGBank 10/23 下调 0.5pp（柜面普通定存与原 Phuc An Khang 同幅；1–5 月维持 4.75%、18–36 月维持 6.8%），线上渠道未跟随，仍为 1–5 月 4.75%、6–9 月 6.9%、12–13 月 7.0%、18–36 月 6.8%。Saigonbank 同日线上降 0.5pp，1–5 月维持 4.75% 上限，13 月期 7.9% 为该行最高且柜面线上同价。BAC A BANK 未见 10 月新调整。至 10/23 全系统累计 22 家银行已按 SBV 第 9736 号公文降定存；SBV 9 月口径 6–12 月平均定存 8.1%（含促销加成，高于挂牌价口径）。", noteEn: "PGBank cut 0.5pp on Oct 23 across counter savings and the Phuc An Khang product (1-5m held at 4.75%, 18-36m at 6.8%) while its online board stayed at 4.75% (1-5m), 6.9% (6-9m), 7.0% (12-13m) and 6.8% (18-36m). Saigonbank cut online rates 0.5pp the same day, holding 1-5m at the 4.75% ceiling and keeping a 7.9% 13-month offer as its highest, identical across counter and online. No new BAC A BANK change was seen in October. As of Oct 23, 22 banks had cut deposit rates under SBV Letter No.9736; the SBV's September series shows average 6-12 month deposits at 8.1% including promotional premiums, above posted-board levels." },
      { bank: "OCB 外宾专案 CD", rate: "最高 8.5%（1–36月）", noteZh: "面值1亿盾起", noteEn: "min VND 100M" },
      { bank: "PVcomBank（大额）", rate: "最高 10%（12–13月，≥2 万亿盾）· 线上 10/21 起 12月 5.1%", noteZh: "柜面 10% 为 ≥2 万亿盾的 12/13 月期「Regular」产品、到期付息；线上 App 促销 10/21 下调：1–5 月 -0.25pp 至 4.5%、6–36 月 -0.5pp（6–11 月 4.8%、12 月 5.1%、13 月 5.3%、15–36 月 5.8%）；10/10 前后 10.4%/年 的短期券已不在最新牌价内（是否停发待核实）", noteEn: "counter 10% applies to the 12/13-month Regular product from VND 2,000bn, interest at maturity; the online app promo was cut on Oct 21: 1-5m -0.25pp to 4.5% and 6-36m -0.5pp (4.8% at 6-11m, 5.1% at 12m, 5.3% at 13m, 5.8% at 15-36m); the earlier 10.4%/yr short-dated certificate tier from VND 5m has been withdrawn with this round" },
      { bank: "Cake by VPBank（促销）", rate: "挂牌 6.9%（6–24 月）· 叠加 +2.2pp 加成后最高 9.1%", noteZh: "10/21 17:00 起下调：6–9 月 7.2%→6.9%、10–24 月 7.4%→6.9%（-0.5pp），1–5 月维持 4.75%、36 月 6.3%；9/22–10/31 对首次存款与续存客户加 2.2pp，6–13 月实际最高 9.1%（此前 9.6%），续存需 ≥500 万盾", noteEn: "Cut from 17:00 on Oct 21: 6-9m 7.2% to 6.9% and 10-24m 7.4% to 6.9% (-0.5pp), 1-5m held at 4.75% and 36m at 6.3%; the 2.2pp first-deposit/renewal bonus from Sep 22 to Oct 31 lifts 6-13 month effective rates to a maximum 9.1% (from 9.6%), with renewals requiring VND 5m+" },
      { bank: "NCB / GPBank / Vikki（线上促销）", rate: "9.1–9.35%", noteZh: "1 亿盾起、线上", noteEn: "≥VND 100M, online" },
      { bank: "全市场新发定存（SBV 官方口径）", rate: "平均约 6.38%/年（9/20 口径）；SBV 9 月口径 6–12 月均 8.1%、贷款均 10.9%；10/24 SBV 口径新发放+存量贷款均 8.4–10.9%；10/26 挂牌多数 ≤7%（全表最高 Saigonbank 13 月 7.9%）", noteZh: "10/26 追加：全系统挂牌已普遍落至 7% 以下（国有四大行线上 12 月 6.8%、VPBank 6.7%、Sacombank 7.0%、MBV 7.0%），但 VnExpress 同日调查显示实际动员成本仍高 1–3pp（BIDV 7.8–8.0%、VPBank 9.1–9.2%、NCB App 9%、SHB App 8.1–8.3%），即 0.5pp 指令对银行真实资金成本的缓解小于挂牌降幅所示。VDSC 判断 2026 年内定存利率持平或不再回升、2027 年续降空间有限。10/24 追加：SBV 称新发放与存量贷款平均年利率 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp）；至 10/14 信贷余额近 21 千万亿盾（+11.44%）、9 月居民存款 11.43 千万亿盾（+10.63%）、企业存款 6.34 千万亿盾。SBV 9 月数据（10/22 晚发布）：6–12 月平均定存 8.1%（环比 +0.1pp、一年前 5.5%），连续 11 个月上升但月增幅由 0.3pp 放缓至 0.1pp；24 月以上最高 8.2%；含促销加成的实际 12/24 月常见 9.3%/9.8%；9 月平均贷款利率 10.9%（较 2025 年底 +近 2pp），优先领域短期仍贴 4% 上限。此前 9/20 口径新发定存 6.38%、较 2025 年底 +1.15pp。政策端：10/18 SBV 要求 6 个月以上定存挂牌至少降 0.5pp；10/21 第 9736/NHNN-CSTT 号公文再压实（6 个月以上新发生交易平均利率较 10/11–20 报备期降 ≥0.5pp，未达标或被下调信贷增长指标）；至 10/26 已有 23 家以上银行降牌价（含四大行）", noteEn: "SBV September data (released on the evening of Oct 22): average 6-12 month deposits 8.1% (+0.1pp MoM, 5.5% a year earlier), an 11th straight monthly rise but slowing from 0.3pp; terms above 24 months peak at 8.2%; effective 12/24-month rates including premiums commonly 9.3%/9.8%; average lending rates 10.9% in September, nearly 2pp above end-2025, with priority-sector short-term loans at the 4% ceiling. Earlier, the Sep 20 series showed new deposits at 6.38%, +1.15pp vs end-2025. Policy: on Oct 18 the SBV ordered listed rates for 6-month-plus terms cut by at least 0.5pp; Letter No.9736/NHNN-CSTT of Oct 21 hardened this, and by Oct 23 22 banks had repriced" }
    ],
    depositNoteZh: "外籍可开定存：凭护照+签证/TRC；注意存款期限不得超过居留有效期；个人利息免税；存款保险仅覆盖 1.25 亿盾/人/行。",
    depositNoteEn: "Foreigners can open term deposits (passport+visa/TRC); term cannot exceed your legal stay; interest tax-free; deposit insurance caps at VND 125M/person/bank.",
    // 利息税口径（2026 核实，存在口径差异，开户行确认为准）
    interestTaxZh: "利息税（2026 核实，以开户行执行为准）：越南居民 VND 银行存款利息免个税；非居民外籍人士的 VND 存款利息实务中部分银行按 5% 代扣（部分税收协定可降低），USD 存款利息多数口径为 0%。开户前请银行书面确认代扣口径并保留扣税凭证。",
    interestTaxEn: "Interest tax (2026, bank practice prevails): VND deposit interest is PIT-exempt for residents; non-resident foreigners' VND interest may face 5% withholding at some banks (DTA may reduce); USD deposits mostly 0%. Get written confirmation from your bank.",
    sourceUrl: "https://danangvisarun.com/blog/vietnam-mortgage-foreigners-2026-ltv-rates-banks"
  },

  /* ---------- 资金入境与定存指南（外籍工签·薪转本地定存）---------- */
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

  /* ---------- 外籍福利 V2（拓展：医院/驾照/产权解读）---------- */
  benefits: [
    { itemZh: "强制性社会保险（疾病、生育、工伤）", itemEn: "Compulsory social insurance", available: true, noteZh: "持≥3个月工作许可须参保（143/2018/ND-CP）", noteEn: "Mandatory for WP ≥3 months (Decree 143/2018)" },
    { itemZh: "医疗保险 BHYT — 可用医院", itemEn: "Health insurance BHYT — usable hospitals", available: true, noteZh: "主要覆盖公立医院（如115、Chợ Rẫy、大水镬）；报销比例 80–100%（按转诊层级）；私立如 Vinmec/FV 基本需商业保险或自费", noteEn: "Mainly public hospitals (115, Cho Ray, etc.); 80–100% reimbursement by referral tier; private (Vinmec/FV) mostly needs commercial insurance or self-pay" },
    { itemZh: "开设银行账户 / 定期存款", itemEn: "Bank account & term deposits", available: true, noteZh: "护照+签证/TRC 可开；12个月定存 6.8–8.5%", noteEn: "Passport+visa/TRC; 12-mo deposits 6.8–8.5%" },
    { itemZh: "中国驾照 → 越南驾照（汽车）", itemEn: "China license → VN license (car)", available: true, noteZh: "中越无驾照互认，不能直接使用；需持 TRC+3个月居留，公证翻译后申请换发（有外国驾照者免理论考，直接发 B 级）；费用 13.5 万盾，5–7 个工作日", noteEn: "No CN-VN reciprocity; needs TRC+3mo stay, notarized translation; conversion exempt from theory (issued Class B); fee 135k VND, 5–7 days" },
    { itemZh: "摩托车驾照 A1/A2（外籍考取）", itemEn: "Motorbike license A1/A2 (foreigners)", available: true, noteZh: "A1(<175cc)：理论考（越南语机考30题/题库600，21题及格）+ 实操绕8字窄桥；持汽车驾照者免理论只考实操；<50cc 踏板无需驾照；考试费约 6–7万盾/次", noteEn: "A1(<175cc): theory (Vietnamese, 30/600 bank, pass 21) + figure-8 practical; car-license holders exempt from theory; <50cc no license needed; fees ~60–70k VND/attempt" },
    { itemZh: "体检指定医院（驾照）", itemEn: "Designated health-check hospitals (license)", available: true, noteZh: "115医院、Chưng Vương、西贡综合医院、FV 医院等指定机构", noteEn: "115, Trung Vuong, Saigon General, FV Hospital etc." },
    { itemZh: "购买 50 年产权住房", itemEn: "Buy 50-yr leasehold housing", available: true, noteZh: "见「产权与风险」；5种路径获「类永久」权益", noteEn: "See Ownership module; 5 paths to quasi-freehold" },
    { itemZh: "子女入读国际学校", itemEn: "Children in intl schools", available: true, noteZh: "凭居留身份，无户籍限制", noteEn: "Residency-based, no hukou limit" },
    { itemZh: "购买社会住房/保障房", itemEn: "Social housing access", available: false, noteZh: "一般仅限越南籍", noteEn: "Citizens only" },
    { itemZh: "投票权 / 政治权利", itemEn: "Voting / political rights", available: false, noteZh: "不适用", noteEn: "N/A" }
  ],
  ownershipPaths: [
    { zh: "与越南籍公民结婚 → 享与本地人同等的永久产权", en: "Marry a Vietnamese citizen → same permanent rights as locals" },
    { zh: "50年期满前 3 个月申请续期一次（再+50年，最长100年）", en: "Apply once ≥3 months before expiry (renew +50yrs, max 100)" },
    { zh: "出售给越南籍买家 → 对方获永久产权，你可回收全款", en: "Sell to Vietnamese buyer → they get permanent title; you recover full value" },
    { zh: "继承：合法继承人可继承（或继承折价款）", en: "Inheritance: heirs inherit the unit (or its value)" },
    { zh: "通过外商投资企业（FIE）持有经营性物业（非住宅路径）", en: "Hold commercial property via an FIE (non-residential route)" }
  ],

  /* ---------- 租房实况（非公渠道说明）---------- */
  leaseReality: {
    zh: "实况说明：像 Golden River 这类盘，大量房源是「房东直租」——与房东个人签合同、无正式发票，因此不涉及 10% 租金税（该税只在通过中介/公司渠道、开票时产生）。但物业管理费照付（Golden River 约 23,000 盾/㎡·月，含泳池健身房；车位 210–220 万盾/月），宽带等自付。非公渠道的风险：无发票难申报临时居留/签证材料、维修责任靠合同约定、纠纷维权难，建议至少签书面双语合同+押金收据。",
    en: "Reality: many units (e.g., Golden River) are direct landlord leases — private contract, no invoice, so the 10% rental tax does not apply (it arises only via agency/corporate invoiced channels). Management fees still apply (Golden River ~23,000 VND/sqm/mo incl. gym/pool; parking 2.1–2.2M/mo). Risks of informal leases: no invoice for TRC/visa paperwork, repair terms rely on the contract, dispute resolution is hard — at minimum sign a bilingual written contract + deposit receipt."
  },

  /* ---------- 产权与风险 ---------- */
  ownership: {
    termZh: "50 年（自「粉皮书」签发日起算），可续期一次、最长合计 100 年。",
    termEn: "50 years (from Pink Book issue date), renewable once, max 100 years total.",
    rights: [
      { zh: "可拥有公寓/独栋房（仅限商业住宅项目）", en: "Own apartments/houses (commercial projects only)" },
      { zh: "可出租（开票渠道需缴约 10% 租金税；房东直租不开票则不产生）", en: "May rent out (~10% tax only via invoiced channels)" },
      { zh: "可出售：卖给越南人→转为永久产权；卖给外国人→继承剩余年限", en: "Sell: to Vietnamese → permanent; to foreigner → remaining term" },
      { zh: "可继承（按越南继承法）", en: "Inheritable (Vietnamese succession law)" },
      { zh: "不拥有土地本身，仅拥有建筑物 + 有期限土地使用权", en: "No land ownership — building + time-limited LUR only" }
    ],
    contractTypes: [
      { zh: "买卖合同 SPA（期房/一手）", en: "SPA (off-plan/primary)", descZh: "与开发商签订，分期付款，交房前累计≤70%", descEn: "With developer; staged payments ≤70% pre-handover" },
      { zh: "长期租赁协议 LTRA（配额满时）", en: "LTRA (quota full)", descZh: "无产权，仅长期使用权", descEn: "No title; long-term use right only" },
      { zh: "粉皮书（Pink Book）", en: "Pink Book", descZh: "竣工验收付清后签发，载明 50 年期限", descEn: "Issued post-completion; records the 50-yr term" }
    ],
    risks: [
      { zh: "配额已满（30%/250套）", en: "Quota exhausted", levelZh: "高", levelEn: "High", tipZh: "签约前要求开发商书面确认剩余配额", tipEn: "Written quota confirmation before signing" },
      { zh: "国防/安全限制区", en: "Defense/security zones", levelZh: "高", levelEn: "High", tipZh: "核实项目是否获准对外籍销售", tipEn: "Verify foreign-eligibility approval" },
      { zh: "开发商延期/烂尾", en: "Developer delay/default", levelZh: "中", levelEn: "Medium", tipZh: "查交付记录；交房前≤70%；见「案例库」", tipEn: "Check track record; ≤70% pre-handover; see Cases" },
      { zh: "粉皮书办理延迟", en: "Pink Book delay", levelZh: "中", levelEn: "Medium", tipZh: "保留尾款 5% 至粉皮书下发", tipEn: "Withhold 5% until Pink Book issued" },
      { zh: "房贷浮动利率", en: "Floating mortgage rates", levelZh: "中", levelEn: "Medium", tipZh: "优惠期后 9–13%；期限受 TRC 限制", tipEn: "Post-promo 9–13%; term capped by TRC" },
      { zh: "转售流动性受限", en: "Resale liquidity limits", levelZh: "中", levelEn: "Medium", tipZh: "外籍配额满时仅能卖给本地人", tipEn: "Quota-full → locals only" },
      { zh: "汇兑与资金出境", en: "FX & repatriation", levelZh: "中", levelEn: "Medium", tipZh: "首笔入金留存水单（giấy báo có），全程同名账户", tipEn: "Keep first inbound remittance slip; same-name accounts throughout" },
      { zh: "50 年期限政策不确定", en: "50-yr term policy uncertainty", levelZh: "低", levelEn: "Low", tipZh: "按长期租赁型投资规划回报", tipEn: "Plan as long-leasehold investment" }
    ]
  },

  /* ---------- 购房税费（外籍，2026 口径）---------- */
  taxes: {
    noteZh: "越南目前【无年度房产税】。购房一次性税费以「合同价」为基数；外籍出售时个税 2%。以下为常规口径，最终以开发商/税务局书面确认为准。",
    noteEn: "Vietnam currently has NO annual property tax. One-off purchase taxes are based on the contract value; foreign sellers pay 2% PIT. Standard figures — confirm in writing with the developer/tax office.",
    items: [
      { itemZh: "增值税 VAT（一手新房）", itemEn: "VAT (new primary)", rateZh: "10%", noteZh: "开发商报价常已含 VAT，签约前确认是否含税", noteEn: "Developer quotes often already VAT-inclusive — confirm" },
      { itemZh: "登记费/契税（lệ phí trước bạ）", itemEn: "Registration fee", rateZh: "0.5%", noteZh: "按合同价 0.5%，发证前缴纳", noteEn: "0.5% of contract value, paid before certificate" },
      { itemZh: "维护基金（phí bảo trì）", itemEn: "Maintenance fund", rateZh: "2%", noteZh: "交房时一次性缴纳，用于日后共用部位维修", noteEn: "One-off at handover, for common-area maintenance" },
      { itemZh: "出售个税 PIT", itemEn: "Capital-gains PIT (sale)", rateZh: "2%", noteZh: "外籍出售按成交价 2%（或增值的 25% 二选一，实务多选 2%）", noteEn: "Foreign sellers 2% of sale price (or 25% of gain — 2% is the norm)" },
      { itemZh: "租金收入税（开票渠道）", itemEn: "Rental income tax (invoiced)", rateZh: "5%+5%", noteZh: "个税 5% + 增值税 5% = 10%；房东直租不开票不产生", noteEn: "5% PIT + 5% VAT = 10%; direct leases without invoice incur none" },
      { itemZh: "年度房产税", itemEn: "Annual property tax", rateZh: "无", noteZh: "越南暂未开征年度持有税", noteEn: "None — no annual holding tax yet" }
    ]
  },

  /* ---------- 产权证（土地证/房产证/粉皮书）说明 ---------- */
  certificates: {
    noteZh: "越南把「土地使用权证」与「房屋所有权」合并为单一权证——俗称【粉皮书】（Sổ hồng，正式名「土地使用权、房屋及其他附着资产所有权证」）。要点：① 项目层面：开发商在动工前须取得项目土地使用权证/投资许可/施工许可，这是楼盘能否合法预售的前提；② 单元层面：购房者在【竣工验收 + 付清房款】后，才可申请本单元的粉皮书，载明 50 年期限与业主姓名；③ 因此：期房/在建盘（如 2025–2026 新盘）交付前尚无单元粉皮书，只有开发商的项目土地证——这是正常流程，并非「缺证」。签约前应核对项目是否已取得预售许可（红皮书/项目土地使用证）。",
    noteEn: "Vietnam merges land-use rights and house ownership into a single title — the 「Pink Book」 (Sổ hồng, formally 'Certificate of Land Use Right, House & Assets'). Key points: ① Project level: the developer must hold the project land-use right/investment/construction permits before legal pre-sale; ② Unit level: buyers only obtain their unit Pink Book after handover + full payment, showing the 50-yr term and owner name; ③ Hence off-plan/under-construction projects (2025–2026 launches) have NO unit Pink Book yet — only the developer's project land title — which is normal, not a defect. Verify pre-sale approval (project land-use certificate) before signing."
  },

  /* ---------- 房地产改革十年轨迹（2015 – 2026）---------- */
  reforms: {
    spanZh: "2015 – 2026（越南房地产制度从「首次对外籍开放」到「三部法重构」的 11 年）",
    spanEn: "2015 – 2026 — 11 years from opening to foreigners to a three-law overhaul",
    noteZh: "按时间正序。四条主线：① 产权与开放（2015 住房法首次允许外籍购房）→ ② 融资收紧与爆雷（2022 债券 65 号令）→ ③ 三部法重构（2024-08-01 提前生效，取消地价框架）→ ④ 供给纠偏（2025–26 保障房特殊机制 + 新地价表推成本）。",
    noteEn: "Chronological. Four threads: ① ownership & opening (2015 Housing Law allowed foreigners) → ② credit squeeze & defaults (2022 Bond Decree 65) → ③ three-law overhaul (effective 2024-08-01, land-price framework scrapped) → ④ supply rebalancing (2025-26 social-housing mechanisms + new land price tables raising costs).",
    items: [
      { year: 2015, dateZh: "2015-07-01", dateEn: "Jul 1, 2015", tagZh: "对外开放", tagEn: "Opening", tagClass: "ok",
        titleZh: "《住房法 2014》(65/2014/QH13) 生效——外籍首次获准购房", titleEn: "Housing Law 2014 takes effect — foreigners allowed to buy for the first time",
        descZh: "废除「须与越南籍公民结婚或长期居留」等旧限制：持合法入境签证的外籍个人/组织可购买商品房。公寓单栋外籍上限 30%，别墅项目上限 250 套；产权 50 年，到期可续。同步生效的还有《房地产经营法 2014》(66/2014/QH13)。",
        descEn: "Scrapped old restrictions (marriage/long residence): foreigners with valid entry may buy commercial housing. Caps: 30% of units per apartment building, 250 units per villa project; 50-year tenure, renewable. Real Estate Business Law 2014 (66/2014/QH13) took effect the same day.",
        link: "https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=14307" },
      { year: 2016, dateZh: "2016-07-01", dateEn: "Jul 1, 2016", tagZh: "投资准入", tagEn: "Investment", tagClass: "mid",
        titleZh: "《投资法 2015》《企业法 2014》生效——外资准入改负面清单", titleEn: "Investment Law 2015 & Enterprise Law 2014 — negative-list regime",
        descZh: "外资准入由「审批制」转为「负面清单 + 备案制」，房地产属有条件准入行业；配套《建设和住房法》修订，为后续外资开发商进入铺路。",
        descEn: "Shifted from case-by-case approval to a negative list plus registration; real estate remained conditional. Paved the way for foreign developers.",
        link: "https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=14308" },
      { year: 2017, dateZh: "2017 全年", dateEn: "FY2017", tagZh: "细化执行", tagEn: "Implementation", tagClass: "mid",
        titleZh: "76/2015/NĐ-CP 实施细则落地——预售门槛与注册资本要求明确", titleEn: "Decree 76/2015 implementing rules — pre-sale thresholds & capital requirements",
        descZh: "明确住房法下外籍购房的具体手续、预售条件与开发商注册资本门槛，外籍成交进入常态化（当年主要 Grade A 盘开售即满 30% 配额）。",
        descEn: "Clarified paperwork for foreign purchases, pre-sale conditions and developer capital thresholds; Grade A launches routinely filled their 30% foreign quota.",
        link: "https://vbpl.vn" },
      { year: 2018, dateZh: "2018-01-14", dateEn: "Jan 14, 2018", tagZh: "外部催化", tagEn: "External", tagClass: "mid",
        titleZh: "CPTPP 对越南生效——外资与制造业南迁启动", titleEn: "CPTPP enters into force for Vietnam — manufacturing relocation begins",
        descZh: "关税与制度红利吸引制造业南迁，工业地产与员工住房需求上行；当年 GDP 增速 7.08%，胡志明均价 $1,714/㎡（CBRE）、河内 $1,304/㎡。",
        descEn: "Tariff/institutional dividends pulled manufacturing south, lifting industrial & worker housing demand; GDP +7.08%; HCMC averaged $1,714/sqm (CBRE), Hanoi $1,304.",
        link: "https://www.moit.gov.vn" },
      { year: 2019, dateZh: "2019-08-20", dateEn: "Aug 20, 2019", tagZh: "国家战略", tagEn: "Strategy", tagClass: "mid",
        titleZh: "政治局决议 50-NQ/TW——外资从「求量」转向「求质」", titleEn: "Politburo Resolution 50-NQ/TW — FDI from volume to quality",
        descZh: "设定 2021–2025 到位外资 1,000–1,500 亿美元、2026–2030 每年 300–400 亿美元目标，要求向高新技术/绿色 FDI 倾斜，直接影响产业园区与配套住房布局。",
        descEn: "Targets US$100–150bn disbursed FDI for 2021-25 and US$30–40bn/yr for 2026-30, tilting toward high-tech & green FDI — directly shaping industrial parks and worker housing.",
        link: "https://tulieuvankien.dangcongsan.vn" },
      { year: 2021, dateZh: "2021-02-15", dateEn: "Feb 15, 2021", tagZh: "行业收紧", tagEn: "Tightening", tagClass: "warn",
        titleZh: "148/2020/NĐ-CP 生效——房地产经营门槛显著提高", titleEn: "Decree 148/2020 — materially higher bar for developers",
        descZh: "提高注册资本与项目资本金要求、收紧预售许可与分期收款条件，中小开发商出清加速，供应端开始收缩——为 2022 后的价格上行埋下伏笔。",
        descEn: "Raised capital requirements, tightened pre-sale licensing and instalment terms; smaller developers were squeezed out and supply began contracting — seeding the later price surge.",
        link: "https://vbpl.vn" },
      { year: 2022, dateZh: "2022-09-16", dateEn: "Sep 16, 2022", tagZh: "融资爆雷", tagEn: "Credit shock", tagClass: "bad",
        titleZh: "65/2022/NĐ-CP 收紧企业债——房企流动性危机爆发", titleEn: "Decree 65/2022 tightens corporate bonds — developer liquidity crisis",
        descZh: "限制债券投资者范围、要求评级与抵押，叠加 SCB/万盛发案与新皇明债券事件，多个项目停工（如 The Hallmark），购房信心重创，2022 年底至 2023 年初成交量断崖。",
        descEn: "Restricted bond investors, required ratings and collateral; together with the SCB/Van Thinh Phat and Tan Hoang Minh cases, projects stalled (e.g. The Hallmark) and transactions collapsed into early 2023.",
        link: "https://vnexpress.net" },
      { year: 2023, dateZh: "2023-03-05", dateEn: "Mar 5, 2023", tagZh: "救市", tagEn: "Rescue", tagClass: "mid",
        titleZh: "08/2023/NĐ-CP + 33/NQ-CP——债券展期与 120 万亿盾保障房信贷包", titleEn: "Decree 08/2023 + Resolution 33 — bond rollovers & VND120tn social-housing credit",
        descZh: "允许债券展期、以资产偿付，缓释违约；同步推出 120 万亿盾优惠信贷包支持保障房与工人住房（购房人利率后续下调至约 6.1%/年）。",
        descEn: "Allowed bond extension and asset settlement, easing defaults; launched a VND120tn preferential credit package for social & worker housing (buyer rate later cut to ~6.1%/yr).",
        link: "https://chinhphu.vn" },
      { year: 2023, dateZh: "2023-11-27", dateEn: "Nov 27, 2023", tagZh: "立法重构", tagEn: "Legislation", tagClass: "ok",
        titleZh: "《住房法 2023》(27/2023/QH15) 通过", titleEn: "Housing Law 2023 (27/2023/QH15) passed",
        descZh: "延续外籍 50 年产权与 30%/栋配额；新增：取消「须在越居留」表述、明确续期程序、强化保障房定义与配额、规定开发商须公开项目法律文件。11-29 通过《房地产经营法 2023》(61/2023/QH15)，2024-01-18 通过《土地法 2024》(31/2024/QH15)。",
        descEn: "Retains 50-yr foreign tenure and 30%/building cap; adds clearer renewal procedures, removes residency wording, strengthens social-housing definitions and mandates disclosure of project legal dossiers. Real Estate Business Law 2023 (Nov 29) and Land Law 2024 (Jan 18, 2024) followed.",
        link: "https://vbpl.vn" },
      { year: 2024, dateZh: "2024-08-01", dateEn: "Aug 1, 2024", tagZh: "三部法生效", tagEn: "Three laws live", tagClass: "ok",
        titleZh: "土地法 2024 / 住房法 2023 / 房地产经营法 2023 提前生效", titleEn: "Land Law 2024, Housing Law 2023 & RE Business Law 2023 take effect early",
        descZh: "原定 2025-01-01，提前至 2024-08-01。核心变化：取消「地价框架」，改按年度市场地价表定价；扩大土地征收的「商业开发」适用；强化预售与资金监管。各省市随即上调地价表（胡志明/河内部分地块上调数倍），土地成本成为 2025–26 房价上行的主要推手之一。",
        descEn: "Moved up from Jan 1, 2025 to Aug 1, 2024. Core change: the land-price framework was abolished in favour of annual market-based land price tables; eminent domain for commercial development was widened; pre-sale and escrow rules strengthened. Provinces promptly raised land prices (several-fold in parts of HCMC/Hanoi) — a key driver of the 2025-26 price surge.",
        link: "https://vbpl.vn" },
      { year: 2025, dateZh: "2025-05-29", dateEn: "May 29, 2025", tagZh: "保障房", tagEn: "Social housing", tagClass: "ok",
        titleZh: "国会决议 201/2025/QH15——保障房特殊机制试点", titleEn: "NA Resolution 201/2025/QH15 — pilot special mechanisms for social housing",
        descZh: "设立国家住房发展基金、简化投资审批（「绿色通道」并行办理）、允许以划拨土地建设保障房；10-01 配套 Nghị định 192/2025/NĐ-CP 生效。另通过决议 171（商业住房土地使用权协议试点）、决议 254（化解土地法实施困难）。",
        descEn: "Created a National Housing Development Fund, streamlined investment approval (parallel 'green channel'), allowed allocated land for social housing; Decree 192/2025/NĐ-CP followed on Oct 1. Also Resolution 171 (commercial housing via land-use agreements) and 254 (unblocking Land Law issues).",
        link: "https://quochoi.vn" },
      { year: 2026, dateZh: "2026-01-01", dateEn: "Jan 1, 2026", tagZh: "成本推升", tagEn: "Cost push", tagClass: "warn",
        titleZh: "新地价表正式年度化适用——开发成本再上台阶", titleEn: "Annual market land-price tables take effect — another step up in cost",
        descZh: "土地法 2024 要求自 2026-01-01 起地价表逐年更新（不再 5 年一调），胡志明/河内调整系数上调。叠加 2025 年 8 月以来利率上行，2026 Q2 起流动性明显回落（全国成交环比 -24%），市场进入「分化与筛选」阶段。",
        descEn: "Land Law 2024 requires annual land price tables from Jan 1, 2026; HCMC/Hanoi raised adjustment coefficients. With rising rates since Aug 2025, liquidity fell sharply in 2026 Q2 (national transactions -24% QoQ) — a phase of divergence and filtering.",
        link: "https://moc.gov.vn" },
      { year: 2026, dateZh: "2026-07-24", dateEn: "Jul 24, 2026", tagZh: "外部关税", tagEn: "Tariff", tagClass: "warn",
        titleZh: "美国对越关税切换为 Section 301 · 12.5%", titleEn: "US shifts to Section 301 · 12.5% on Vietnamese goods",
        descZh: "路径：2025-04 威胁 46% → 2025-07 双边框架 20%（转口 40%）→ 2026-02-20 美最高法院裁定 IEEPA 不授权关税、02-24 起停征并回落至 10%（Section 122）→ 2026-07-24 Section 122 的 150 天上限到期，USTR 依强迫劳动调查对 60 国实施 Section 301，越南列 12.5% 档。转口 40% 罚则在各阶段存口径争议，以 CBP 执法为准。直接影响：出口制造业与工业地产的选址/扩产节奏，进而影响外派与本地白领的住房需求。",
        descEn: "Path: Apr 2025 threatened 46% → Jul 2025 framework 20% (40% transshipment) → Feb 20, 2026 Supreme Court held IEEPA does not authorize tariffs; collection stopped Feb 24 and fell to 10% (Sec 122) → Jul 24, 2026 Sec 122's 150-day limit lapsed and USTR imposed Sec 301 rates on 60 partners under a forced-labour probe, Vietnam at 12.5%. The 40% transshipment penalty's survival is disputed across stages — defer to CBP enforcement. Impact: export manufacturing and industrial-park expansion cadence, hence housing demand from expats and local white-collar workers.",
        link: "https://www.vietnam-briefing.com/doing-business-guide/vietnam/taxation-and-accounting/vietnam-custom-duties-import-export-regulations" }
    ]
  },

  /* ---------- 十年房价追踪（2016–2026）---------- */
  price10y: {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    fxUsdVnd: [22275, 22700, 22825, 23175, 23190, 23150, 23580, 24150, 24750, 25850, 26480],
    // 全国住宅均价（含省级/二线市场，估算口径）百万盾/㎡
    nationalVndM: [20, 22, 24, 26, 28, 31, 35, 40, 48, 60, 72],
    hcmcUsd: [1430, 1558, 1714, 1900, 2700, 3000, 3300, 3400, 3700, 3800, 4088],
    hanoiUsd: [1180, 1287, 1304, 1380, 1500, 1700, 1800, 2500, 3000, 3524, 4356],
    caliberZh: "口径说明：2016–2019 采用 CBRE/Savills 年度报告的「新盘平均要价」；2020 年起采用 Knight Frank/CBRE 季度一手均价年化——2020 年出现口径结构性上移（胡志明 +42%），跨段比较须谨慎。全国列为「含省级/二线市场的估算值」（建设部与 GSO 口径插值），用于看趋势，不用于交易定价。2026 年胡志明取 Knight Frank Q2 年化 $4,088（Q3 已升至 $4,210）。",
    caliberEn: "Caliber: 2016-19 use CBRE/Savills reported average primary asking prices; from 2020 Knight Frank/CBRE quarterly primary averages annualised — a structural step-up occurs at 2020 (HCMC +42%), so cross-segment comparison needs care. The national column is an estimate incl. provincial/secondary markets (MOC & GSO interpolation) for trend only, not for pricing. 2026 HCMC uses Knight Frank Q2 annualised $4,088 (Q3 rose to $4,210).",
    insightZh: "十年三个拐点：① 2015–2019 缓慢上行（胡志明 +10%/年，河内几乎横盘，河内 2018 年仅 +1%）；② 2020–2023 供应断档 + 债券危机，胡志明从 $1,900 冲到 $3,400，河内 2023 年因供应崩塌单年跳涨；③ 2024–2026 河内反超——2023 年初河内还比胡志明低 23%，2026 Q2 一手均价 $4,356 vs $4,088 首次反超，但 2026 Q2 起流动性回落、二手率先转跌，属于「价格高位的分化调整」而非趋势反转。",
    insightEn: "Three inflection points: ① 2015-19 slow grind (HCMC +10%/yr, Hanoi nearly flat at +1% in 2018); ② 2020-23 supply drought plus the bond crisis pushed HCMC from $1,900 to $3,400 while Hanoi jumped on collapsed supply; ③ 2024-26 Hanoi overtakes — 23% cheaper than HCMC in early 2023, Hanoi's 2026 Q2 primary $4,356 vs $4,088 is its first lead. Yet liquidity fell from 2026 Q2 and secondary prices turned down first — a high-level divergence, not a trend reversal.",
    sourceUrl: "https://www.knightfrank.com.vn"
  },

  /* ---------- 房产分档（外籍高端 / 本地中产 / 保障房）---------- */
  segments: {
    noteZh: "三档口径：① 外籍/外派高端＝Grade A 及以上、外国人可购（受 30%/栋配额）；② 本地白领与中产普通商品房＝Grade B/C，越南籍为主，是城市真实负担所在；③ 社会保障房（NƠXH）＝国家给中低收入/工人的保障性住房，外籍不可购。",
    noteEn: "Three tiers: ① Expat/luxury = Grade A and above, foreigner-eligible (30%/building quota); ② Local white-collar & middle-class commercial housing = Grade B/C, mostly Vietnamese — where real affordability stress sits; ③ Social housing (NƠXH) = state-supported housing for lower-income/workers, foreigners excluded.",
    tiers: [
      { key: "luxury", cls: "ok",
        nameZh: "① 外籍 / 外派高端（Grade A 及以上）", nameEn: "① Expat / Luxury (Grade A+)",
        priceZh: "胡志明 $4,000–9,000/㎡ ｜ 河内 $3,500–7,000/㎡", priceEn: "HCMC $4,000-9,000/sqm | Hanoi $3,500-7,000/sqm",
        areaZh: "50–250 ㎡（1–4 房，顶层/复式更大）", areaEn: "50-250 sqm (1-4BR; penthouses/duplexes larger)",
        totalZh: "总价约 $25 万 – 200 万（胡志明守添/D1/D2 最贵）", totalEn: "c. US$0.25-2.0m total (Thu Thiem/D1/D2 priciest)",
        rentZh: "月租 $1,200–5,000；毛租金回报 3–5%（按当前市价）", rentEn: "US$1,200-5,000/month; 3-5% gross yield on current value",
        buyerZh: "外派高管、外籍长住、越南高净值、纯投资客；受 30%/栋配额与 50 年产权约束", buyerEn: "Expat executives, long-stay foreigners, Vietnamese HNWIs, investors; subject to the 30%/building quota and 50-yr tenure",
        projZh: "胡志明：Grand Marina Saigon、Empire City/Cove、The Global City、Masteri Thao Dien｜河内：Golden Westlake、D'Palais de Louis、Vinhomes Metropolis", projEn: "HCMC: Grand Marina Saigon, Empire City/Cove, The Global City, Masteri Thao Dien | Hanoi: Golden Westlake, D'Palais de Louis, Vinhomes Metropolis" },
      { key: "mid", cls: "mid",
        nameZh: "② 本地白领 / 中产 普通商品房（Grade B–C）", nameEn: "② Local white-collar / middle-class (Grade B-C)",
        priceZh: "胡志明 4,700 万–8,300 万盾/㎡（$1,800–3,200）｜河内 5,200 万–9,100 万盾/㎡（$2,000–3,500）", priceEn: "HCMC VND47-83m/sqm ($1,800-3,200) | Hanoi VND52-91m/sqm ($2,000-3,500)",
        areaZh: "45–75 ㎡（2 房为主，少量 1 房/3 房）", areaEn: "45-75 sqm (mostly 2BR, some 1/3BR)",
        totalZh: "总价约 25 亿 – 60 亿盾（$9.6 万 – 23 万）", totalEn: "c. VND2.5-6.0bn (US$96k-230k) total",
        rentZh: "月租 800 万 – 2,000 万盾；毛租金回报 2.5–4%", rentEn: "VND8-20m/month; 2.5-4% gross yield",
        buyerZh: "本地白领（月入 1,500 万–4,000 万盾）、双职工家庭、教师医生公务员；购需依赖 20–30 年按揭，利率上行对这一档杀伤最大", buyerEn: "Local white-collar (VND15-40m/month), dual-income families, teachers/doctors/civil servants; rely on 20-30yr mortgages — most rate-sensitive tier",
        projZh: "胡志明：Vinhomes Grand Park（守德）、The Horizon/Midtown（7区）、平新/新富郡中端盘｜河内：河东、南慈廉、黄梅、龙编", projEn: "HCMC: Vinhomes Grand Park (Thu Duc), The Horizon/Midtown (D7), mid-tier in Binh Tan/Tan Phu | Hanoi: Ha Dong, Nam Tu Liem, Hoang Mai, Long Bien" },
      { key: "social", cls: "warn",
        nameZh: "③ 社会保障房 NƠXH（国家保障 · 外籍不可购）", nameEn: "③ Social housing NƠXH (state-supported · foreigners excluded)",
        priceZh: "河内在售 1,980 万–2,900 万盾/㎡（含 VAT）｜胡志明 2,450 万–3,070 万盾/㎡｜政府 2026 全国目标均价 2,000 万–2,500 万盾/㎡", priceEn: "Hanoi on-sale VND19.8-29m/sqm (VAT incl.) | HCMC VND24.5-30.7m/sqm | gov't 2026 national target VND20-25m/sqm",
        areaZh: "28–70 ㎡（30–60 ㎡为主力）", areaEn: "28-70 sqm (30-60 sqm core)",
        totalZh: "总价约 9.9 亿 – 17.5 亿盾（$3.8 万 – 6.7 万）", totalEn: "c. VND0.99-1.75bn (US$38k-67k) total",
        rentZh: "租/租购：河内玉回约 21.6 万盾/㎡·月｜胡志明 Long Truong 约 16.2 万盾/㎡·月（含 5% VAT）", rentEn: "Rent/rent-to-buy: Hanoi Ngoc Hoi c. VND216k/sqm/mo | HCMC Long Truong c. VND162k/sqm/mo (5% VAT incl.)",
        buyerZh: "低收入家庭、工人、公务员、武装力量（须满足收入/户籍/社保条件，且名下无房）；与商品房价差已达 3–5 倍", buyerEn: "Low-income households, factory workers, civil servants, armed forces (income/residence/insurance criteria, no prior home); now a 3-5x gap vs commercial housing",
        projZh: "河内：金花 CT2（1,980 万/㎡）、河定新城（2,500 万/㎡）、新立（2,900 万/㎡）、玉回地块1（2,474 万/㎡）｜胡志明：Long Truong（2,450 万/㎡）、HUD 守德 Hiệp Bình（约 3,070 万/㎡）", projEn: "Hanoi: Kim Hoa CT2 (19.8m), Ha Dinh (25m), Tan Lap (29m), Ngoc Hoi Lot 1 (24.74m) | HCMC: Long Truong (24.5m), HUD Thu Duc - Hiep Binh (c. 30.7m)" }
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
      { dimZh: "开放时间", dimEn: "Opened",
        vnZh: "2015-07-01《住房法 2014》首次开放；2024-08-01《住房法 2023》延续", vnEn: "Jul 1, 2015 (Housing Law 2014); continued by Housing Law 2023 (Aug 1, 2024)",
        cnZh: "2006 年《关于规范房地产市场外资准入和管理的意见》（171 号文）；2015 年建房〔2015〕122 号放宽", cnEn: "2006 circular (No.171) first regulated; relaxed by 2015 circular No.122" },
      { dimZh: "购房资格", dimEn: "Eligibility",
        vnZh: "持合法入境签证/免签入境即可，<b>无居留年限、无社保要求</b>", vnEn: "Valid entry visa/visa exemption suffices — <b>no residency period, no social-insurance requirement</b>",
        cnZh: "境外个人须「在境内工作/学习」（2015 后取消满 1 年限制），但仍受城市限购与社保/个税年限约束，实务门槛高", cnEn: "Foreign individuals must work/study in China (1-yr rule removed in 2015), but city purchase limits and social-insurance/tax years still bind — high practical bar" },
      { dimZh: "套数 / 配额", dimEn: "Units / Quota",
        vnZh: "<b>无个人套数限制</b>，但受项目配额：公寓 ≤30%/栋、别墅项目 ≤250 套", vnEn: "<b>No personal unit cap</b>, but project quotas: ≤30% per apartment building, ≤250 units per villa project",
        cnZh: "原则限 <b>一套自住</b>住房（实名制）；境外机构只能买办公/商业用房", cnEn: "In principle <b>one self-occupied home</b> (real-name system); foreign entities may only buy office/commercial" },
      { dimZh: "产权期限", dimEn: "Tenure",
        vnZh: "<b>50 年</b>（自发证起），到期可按规定续期；土地为国家所有", vnEn: "<b>50 years</b> from issuance, renewable per rules; land is state-owned",
        cnZh: "房屋所有权无期限 + 住宅用地 <b>70 年</b>使用权，到期自动续期（《民法典》第 359 条）", cnEn: "Building ownership unlimited + <b>70-year</b> residential land-use right, auto-renewed (Civil Code Art.359)" },
      { dimZh: "权证", dimEn: "Title",
        vnZh: "粉皮书 Sổ hồng（交付 + 付清房款后发单元证，载明 50 年期）", vnEn: "Pink Book (Sổ hồng) issued per unit after handover + full payment, stating the 50-yr term",
        cnZh: "不动产权证书（房地一体，房屋所有权 + 土地使用权）", cnEn: "Unified Real Property Certificate (building ownership + land-use right)" },
      { dimZh: "按揭贷款", dimEn: "Mortgage",
        vnZh: "外资行（HSBC 等）官方多限越南籍/越侨，外籍个案审批、多数<b>全款</b>或需 30–50% 首付；本地行对越籍配偶可贷", vnEn: "Foreign banks officially serve Vietnamese/Viet Kieu; expats case-by-case, <b>mostly cash</b> or 30-50% down; local banks lend to Vietnamese spouses",
        cnZh: "外籍可申请境内按揭，需境内收入/纳税证明；首付比例参照本地居民或更高", cnEn: "Foreigners may apply onshore with local income/tax proof; down-payment at or above local ratios" },
      { dimZh: "税费", dimEn: "Taxes",
        vnZh: "VAT 10%（通常含在房价）+ 登记费 0.5% + 维护费 2%；出售按成交价 PIT 2%；<b>无年度房产税</b>", vnEn: "VAT 10% (usually built into price) + 0.5% registration + 2% maintenance; 2% PIT on resale; <b>no annual property tax</b>",
        cnZh: "契税 1–3%；增值税满 2 年免；个税「满五唯一」免；<b>无普遍年度房产税</b>（沪渝试点）", cnEn: "Deed tax 1-3%; VAT exempt after 2 yrs; personal income tax exempt if sole home held 5 yrs; <b>no general annual property tax</b> (Shanghai/Chongqing pilots)" },
      { dimZh: "资金进出", dimEn: "Funds",
        vnZh: "房款须以<b>越南盾经境内账户</b>支付；售房款汇出需完税凭证，首笔入金水单务必留存", vnEn: "Payment must be in <b>VND via onshore accounts</b>; repatriation of sale proceeds needs tax proof — keep the first inbound remittance slip",
        cnZh: "外汇管制：购房款须境外汇入并结汇；出售资金汇出需完税证明", cnEn: "FX control: funds must be remitted in and converted; repatriation needs tax clearance" },
      { dimZh: "能否买土地/别墅", dimEn: "Land / villas",
        vnZh: "不能买土地；别墅仅在获批项目中按 ≤250 套配额购买", vnEn: "No land ownership; villas only within approved projects under the 250-unit cap",
        cnZh: "不能买农地/宅基地；城市商品住宅（含别墅）在资格符合时可购", cnEn: "No farmland/rural homestead; urban commodity housing (incl. villas) purchasable if eligible" }
    ],
    verdictZh: "对海外买家的实际差异：越南的门槛在「资格端」几乎为零（签证即可买），代价是 50 年产权 + 项目配额 + 基本拿不到按揭；中国的门槛在「资格端」很高（限购/社保/自住一套），但一旦买到，70 年自动续期 + 完整不动产权 + 可申请按揭，产权确定性更强。资产配置上：越南更适合「现金流型 · 租金回报 + 中期持有」，中国更适合「资格具备后的长期持有」。",
    verdictEn: "Practical difference for overseas buyers: Vietnam's barrier sits at eligibility (a visa suffices) — paid for with 50-yr tenure, project quotas and near-zero financing; China's barrier is high at eligibility (purchase limits/social insurance/one self-occupied home) but once bought you get auto-renewing 70-yr land rights, full title and mortgage access. Allocation view: Vietnam suits 'yield + medium-term hold'; China suits 'long hold once qualified'.",
    /* ---- 时间波动轴：招商引资 FDI / 汇率 / 政策引导 / 国际关税 ---- */
    timeline: {
      years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
      fdiRegistered: [24.5, 36.0, 35.5, 38.0, 28.5, 31.2, 27.7, 39.4, 38.2, 38.5, 39.2],
      fdiDisbursed: [15.8, 17.5, 19.1, 20.4, 20.0, 19.7, 22.4, 23.2, 25.4, 27.6, 29.0],
      fxUsdVnd: [22275, 22700, 22825, 23175, 23190, 23150, 23580, 24150, 24750, 25850, 26480],
      hcmcUsd: [1430, 1558, 1714, 1900, 2700, 3000, 3300, 3400, 3700, 3800, 4088],
      hanoiUsd: [1180, 1287, 1304, 1380, 1500, 1700, 1800, 2500, 3000, 3524, 4356],
      tariffPct: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 12.5],
      noteZh: "四线联动读法：① <b>FDI 到位</b>（柱）逐年抬升，2025 年 $27.6bn 创历史新高 → 产业工人与外派住房需求；② <b>USD/VND</b>（右轴）十年累计贬约 19%，2022 与 2025 两个跳贬窗口恰好对应外资观望与利率上行；③ <b>政策引导</b>＝2015 开放 → 2022 债券收紧 → 2024-08 三部法 → 2025 保障房机制；④ <b>国际关税</b>＝2025-04 威胁 46% → 2025-07 框架 20%（转口 40%）→ 2026-02 IEEPA 被推翻回落 10% → 2026-07-24 Section 301 定档 12.5%。关税反复改变的是制造业扩产节奏，进而传导到园区周边住宅与外派租赁需求。",
      noteEn: "How to read the four lines: ① <b>Disbursed FDI</b> (bars) grinds higher, a record US$27.6bn in 2025, feeding worker & expat housing demand; ② <b>USD/VND</b> (right axis) lost ~19% over ten years, with the 2022 and 2025 step-devaluations matching windows of foreign hesitation and rising rates; ③ <b>Policy</b> = 2015 opening → 2022 bond squeeze → Aug 2024 three laws → 2025 social-housing mechanisms; ④ <b>Tariffs</b> = Apr 2025 threatened 46% → Jul 2025 framework 20% (40% transshipment) → Feb 2026 IEEPA struck down, back to 10% → Jul 24, 2026 Section 301 at 12.5%. Tariff churn shifts manufacturing expansion cadence, which transmits to housing around industrial parks and expat leasing demand.",
      // 每年四要素卡片
      yearly: {
        "2016": { fdiZh: "注册 $24.5bn / 到位 $15.8bn；CPTPP 已签署待生效", fdiEn: "Registered $24.5bn / disbursed $15.8bn; CPTPP signed, pending", fxZh: "22,275（+0.6%），全年平稳", fxEn: "22,275 (+0.6%), stable year", polZh: "投资法/企业法 7-01 生效，外资负面清单制", polEn: "Investment & Enterprise Laws effective Jul 1; negative list", tarZh: "无关税冲击；越南享美国普惠制(GSP)", tarEn: "No tariff shock; Vietnam enjoyed US GSP" },
        "2017": { fdiZh: "注册 $36.0bn（+47%）/ 到位 $17.5bn，三星产业链加码", fdiEn: "Registered $36.0bn (+47%) / disbursed $17.5bn; Samsung supply chain scaled up", fxZh: "22,700（+1.9%）", fxEn: "22,700 (+1.9%)", polZh: "76/2015 细则落地，外籍购房手续常规化", polEn: "Decree 76/2015 rules operationalised foreign purchases", tarZh: "美国退出 TPP，但双边关税未动", tarEn: "US left TPP, but bilateral tariffs unchanged" },
        "2018": { fdiZh: "注册 $35.5bn / 到位 $19.1bn；胡志明均价 $1,714、河内 $1,304", fdiEn: "Registered $35.5bn / disbursed $19.1bn; HCMC $1,714, Hanoi $1,304", fxZh: "22,825（+0.6%）", fxEn: "22,825 (+0.6%)", polZh: "CPTPP 01-14 对越生效；预售与外资准入细则完善", polEn: "CPTPP in force Jan 14; pre-sale & foreign-access rules refined", tarZh: "中美贸易战启动，越南开始承接转单红利", tarEn: "US-China trade war began; Vietnam started absorbing diverted orders" },
        "2019": { fdiZh: "注册 $38.0bn / 到位 $20.4bn（首破 200 亿）", fdiEn: "Registered $38.0bn / disbursed $20.4bn (first >$20bn)", fxZh: "23,175（+1.5%）", fxEn: "23,175 (+1.5%)", polZh: "政治局 50-NQ/TW（08-20）：外资由量转质", polEn: "Politburo Res.50-NQ/TW (Aug 20): FDI quality over volume", tarZh: "转口红利延续；美方开始关注越南转口", tarEn: "Diversion dividend continued; US began watching transshipment" },
        "2020": { fdiZh: "注册 $28.5bn（-25%）/ 到位 $20.0bn（-3%），疫情下仍稳健", fdiEn: "Registered $28.5bn (-25%) / disbursed $20.0bn (-3%), resilient through COVID", fxZh: "23,190（+0.1%），SBV 干预维稳", fxEn: "23,190 (+0.1%), SBV intervention held the line", polZh: "企业法/投资法 2020 通过（2021 生效）；价格口径切换年", polEn: "Enterprise & Investment Laws 2020 passed (effective 2021); price-caliber switch year", tarZh: "疫情主导，关税非主要变量", tarEn: "COVID dominated; tariffs not a main variable" },
        "2021": { fdiZh: "注册 $31.2bn / 到位 $19.7bn（-1%），疫情封锁拖累到位", fdiEn: "Registered $31.2bn / disbursed $19.7bn (-1%), lockdowns hit disbursement", fxZh: "23,150（-0.2%），十年唯一升值年", fxEn: "23,150 (-0.2%), the only appreciating year of the decade", polZh: "148/2020 生效（02-15）：开发商门槛提高，供应收缩起点", polEn: "Decree 148/2020 (Feb 15): higher developer bar, start of supply contraction", tarZh: "供应链外溢加速，越南制造业景气高位", tarEn: "Supply-chain spillover accelerated; manufacturing boom" },
        "2022": { fdiZh: "注册 $27.7bn / 到位 $22.4bn（+13.5%）创当时新高", fdiEn: "Registered $27.7bn / disbursed $22.4bn (+13.5%), then-record", fxZh: "23,580（+1.9%），Q4 单季急贬引发外资观望", fxEn: "23,580 (+1.9%), Q4 spike triggered foreign caution", polZh: "<b>65/2022 债券收紧（09-16）</b>→ 万盛发/SCB 案，房企爆雷", polEn: "<b>Decree 65/2022 bond squeeze (Sep 16)</b> → Van Thinh Phat/SCB fallout", tarZh: "无关税事件；出口创新高", tarEn: "No tariff event; exports hit records" },
        "2023": { fdiZh: "注册 $39.4bn（+45%）/ 到位 $23.2bn", fdiEn: "Registered $39.4bn (+45%) / disbursed $23.2bn", fxZh: "24,150（+2.4%）", fxEn: "24,150 (+2.4%)", polZh: "08/2023 债券展期 + 33/NQ-CP 120 万亿保障房信贷；三部法通过", polEn: "Decree 08/2023 rollovers + Res.33 VND120tn social-housing credit; three laws passed", tarZh: "美方启动对越市场经济地位与转口审议", tarEn: "US opened market-economy & transshipment reviews" },
        "2024": { fdiZh: "注册 $38.2bn / 到位 $25.35bn（+9.4%）历史新高", fdiEn: "Registered $38.2bn / disbursed $25.35bn (+9.4%), then record", fxZh: "24,750（+2.5%）", fxEn: "24,750 (+2.5%)", polZh: "<b>08-01 三部法提前生效</b>：取消地价框架，地价表上调", polEn: "<b>Aug 1: three laws take effect early</b> — land-price framework scrapped, tables raised", tarZh: "大选年，关税预期升温", tarEn: "US election year; tariff expectations built" },
        "2025": { fdiZh: "注册约 $38.5bn / 到位 <b>$27.6bn（历史新高）</b>", fdiEn: "Registered c.$38.5bn / disbursed <b>$27.6bn (record)</b>", fxZh: "25,850（+4.4%），十年最大年度贬幅", fxEn: "25,850 (+4.4%), largest annual depreciation of the decade", polZh: "NQ 201/2025 保障房机制（05-29）+ NĐ 192/2025（10-01）", polEn: "Res.201/2025 social housing (May 29) + Decree 192/2025 (Oct 1)", tarZh: "<b>04 威胁 46% → 07 双边框架 20%（转口 40%）</b>", tarEn: "<b>Apr: 46% threatened → Jul: 20% framework (40% transshipment)</b>" },
        "2026": { fdiZh: "到位约 $29.0bn（1–8 月 $15.4bn，+8.8%）——制造业占 81.6%，房地产占 8.0%", fdiEn: "Disbursed c.$29.0bn (Jan-Aug $15.4bn, +8.8%) — manufacturing 81.6%, real estate 8.0%", fxZh: "26,480→现约 26,090，年内<b>升值约 1.1%</b>（亚洲最稳之一）", fxEn: "26,480 → c.26,090; <b>+1.1% appreciation</b> YTD, among Asia's most stable", polZh: "01-01 地价表年度化；NQ 254 化解土地法堵点；市场进入分化筛选", polEn: "Jan 1: annual land price tables; Res.254 unblocks Land Law; market enters filtering phase", tarZh: "<b>02-20 IEEPA 被推翻 → 停征回落 10% → 07-24 Section 301 定档 12.5%</b>", tarEn: "<b>Feb 20 IEEPA struck down → collection stops, back to 10% → Jul 24 Section 301 at 12.5%</b>" }
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
  }
};
