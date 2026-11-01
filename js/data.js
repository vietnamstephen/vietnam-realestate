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
    lastUpdated: "2026-11-02",
    lastUpdatedAt: "2026-11-02 05:00",   // 最近一次刷新完成时间（越南时间，刷新成功时更新）
    dataAsOfZh: "房价数据截至 2026 年 Q3（Knight Frank/CBRE/Savills），汇率截至 2026 年 11 月",
    dataAsOfEn: "Price data as of Q3 2026 (Knight Frank/CBRE/Savills); FX as of Nov 2026",
    fxRate: 25990,           // 1 USD ≈ VND（当前，银行卖出价）
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
      "2026": [26480, 26500, 26520, 26540, 26560, 26580, 26600, 26610, 26630, 25990, 26650, 26090]
    },
    latest: { usdVnd: 25990, cnyVnd: 3645, asOf: "2026-10" },
    noteZh: "越南盾 2020→2026 对美元累计贬值约 12%（23,200→25,990）、对人民币约 9%——人民币同期对美元也小幅贬值，两者同向贬值相抵，故对人民币贬值更少。切换上方「基准年」可看不同起点的累计变化。注：2026 年内 VND 转为升值（年初约 26,480 → 25,990，约 1.85%）。11/1 口径：银行美元卖出价连续第二日低于 26,000（2025 年 4 月中旬以来首次）。Vietcombank 买入 25,580、卖出 25,990（较早间再降 30 盾），ACB 卖出 25,980，VietinBank 与 BIDV 同步降至 25,980；SBV 11/1 中央汇率维持 25,637（连续第二日持平），±5% 区间 24,355–26,919。银行汇率较年初低约 1.5%，越盾 10 个月后对美元转为升值。自由市场价差显著收窄：河内兑换点买 25,700、卖 25,780，已低于银行卖出价（与 10/31 记录的反向价差并存，渠道口径不同、待核实）。人民币：VCB 挂牌 3,779.79 现金买入 / 3,817.97 转账买入 / 3,940.35 卖出（较上周未变）；本表 cnyVnd 采用 25,990/7.13 的交叉折算口径（3,645），与银行挂牌不同源、勿直接对比。外部：美联储 10/28 以 10:2 维持 3.75%–4.00%，9 月 PCE 加速、Q3 GDP 超预期，CME 口径 12 月加息概率约 80%；DXY 回升至 101 上方；金价 11/2 早间 3,874 美元/盎司、为 2025 年 10 月以来低位（周跌约 121 美元），SJC 金条 1.36–1.39 亿盾/两。机构预测：MBS 年底 26,800–27,000（油价与美元走强仍是压力），UOB 预计 Q4 26,300、2027 Q1–Q2 分别 26,600/26,800，Techcombank 维持 26,000 附近。购房款须以越南盾经境内账户支付，首笔入金水单务必保存（资金出境凭证）。",
    noteEn: "VND depreciated ~12% vs USD (23,200 to 25,990) and ~9% vs CNY over 2020-2026 — CNY itself slipped vs USD, so the two same-direction moves offset and VND lost less against CNY. Switch the base year above to see cumulative moves from any start. Note: within 2026 VND has turned stronger vs USD (about 26,480 in January to 25,990 now, ~1.85%). As of the Oct 31 close (Saturday): bank dollar quotes fell below 26,000 for the first time since mid-April 2025 — Vietcombank bid 25,610 / asked 25,990 (down 30 dong from the morning), other state banks quoted 25,440-25,980, and only a few private banks (Sacombank, TPBank) kept asks near 26,000. Bank dollar asks stayed below 26,000 for a second session on Nov 1, the first time since mid-April 2025. Vietcombank bid 25,580 and asked 25,990 (another 30 dong lower intraday), ACB asked 25,980, and VietinBank and BIDV matched at 25,980. The SBV central rate held at 25,637 on Nov 1 (flat for a second day), with the +/-5% band at 24,355-26,919. Bank rates are down roughly 1.5% since the start of the year, meaning the dong has turned stronger against the dollar over ten months. The unofficial spread has narrowed sharply: Hanoi desks bid 25,700 and ask 25,780, now below bank asks (this coexists with the inverse gap logged on Oct 31 — different channel basis, to be verified). CNY: Vietcombank boards 3,779.79 cash bid / 3,817.97 transfer bid / 3,940.35 ask, unchanged on the week; the cnyVnd figure here is a 25,990/7.13 cross rate (3,645), a different basis from bank boards. Abroad, the Fed held at 3.75%-4.00% on Oct 28 by a 10-2 vote, September PCE accelerated and Q3 GDP beat expectations, keeping CME odds of a December hike near 80%, and DXY recovered above 101; gold was $3,874/oz on the morning of Nov 2, the lowest since October 2025 (down about $121 on the week), with SJC bars at VND 136-139m per tael. Forecasts: MBS 26,800-27,000 by year-end, UOB 26,300 for Q4 and 26,600/26,800 for Q1-Q2 2027, Techcombank around 26,000. Property must be paid in VND via onshore accounts — keep the first inbound remittance slip (repatriation proof).",
    sourceUrl: "https://news.qq.com/rain/a/20261031A050UN00"
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
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程；10/22 上午全体会议已听取呈文与审查报告并全天分组讨论，10/30 全体会议再讨论，拟 11/21 上午与《土地法》《住房法》一并表决；若通过则自 2027-07-01 施行）。10/24 分组讨论补充：有代表提议取消项目转让的前置条件，经济委员会仍在权衡受让方以托管账户或银行担保承继未缴土地款的替代方案，尚未定案。10/26 汇总：本次会议另以快速程序列入《投资法》修订草案（落实政治局 2026-06-08 第 10-NQ/TW 号决议、拟 2027-01-01 生效），与本法的准入松绑方向一致。10/30 上午全体会议审议：建设部长陈鸿明明确投资商须施工至地基并满足全部条件后方可收定金、5% 尾款由银行担保、企业参与项目须满足 15% 自有资金条件；代表要求比对在售房源与获批规划、堵住以「预留费/登记费」变相集资、合同转让强制登记防一房多卖。", statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the drafted schedule the three property-law amendments — Land, Housing and Real Estate Business — go to a single vote on the morning of Nov 21). Oct 24 group talks: a deputy proposed dropping pre-transfer conditions on project transfers, while the Economic Committee is still weighing letting a transferee assume outstanding land payments under escrow or a bank guarantee — not settled. Oct 26 round-up: the session also added the draft Investment Law amendment under expedited procedure (implementing Politburo Resolution No. 10-NQ/TW of June 8, 2026, effective Jan 1, 2027), consistent with this law's direction of easing market entry. Oct 30 plenary: Minister Tran Hong Minh said deposits are allowed only after foundations are completed and all conditions met, the final 5% is bank-guaranteed, and developers must meet the 15% own-capital test; deputies pressed for matching for-sale unit lists to approved plans, closing reservation-fee fundraising loopholes and mandatory registration of contract transfers to prevent double-selling.",
      links: [{ zh: "国会审议", en: "NA review", url: "https://vietnamnews.vn/politics-laws/1801111/na-standing-committee-discusses-draft-revised-housing-real-estate-business-laws.html" }]
    },
    {
      date: "2026-10-02", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《住房法》修订草案（国会常委会 10/2 审议）", titleEn: "Draft amended Housing Law (NA Standing Committee, Oct 2)",
      keyZh: "草案共 13 章 130 条（10/18 提交国会法司委的正式稿即 13 章 130 条，较 2023 版 198 条减 68 条——按政府新闻网 10/22 呈文口径），新增「租赁住房」专章；社房满 5 年后可按法定条件转售，租金由投资方与承租方按足额成本协商、不得超过省级价格框架；拟取消外籍对「独栋房/联排房」（landed house）的所有权，外籍仅保留公寓购买/继承资格（与《土地法》国有土地原则衔接）。建设部明确四大住房类别发展导向：商品房、租赁住房、公租房、政策性住房。社会住房试点政策拟入法（依据国会 201/2025/QH15 决议与政府 66.15/2026/NQ-CP 决议）；20/21 项程序下放地方，经营条件精简四分之三。",
      keyEn: "Draft 13 chapters/130 articles (the text submitted to the NA Law and Justice Committee on Oct 18 runs to 13 chapters and 130 articles, 68 fewer than 2023); adds a rental-housing chapter; social housing may be resold after five years subject to statutory conditions, with rents negotiated on a full-cost basis but capped by the provincial price framework; proposes removing foreigners' ownership of landed houses (villas/townhouses), restricting them to apartments only (aligning with Land Law state-ownership principle). MOC defines 4 housing groups: commercial, rental, public, policy. Social-housing pilots to be codified (NA Res 201/2025/QH15, Gov Res 66.15/2026/NQ-CP); 20/21 procedures decentralized, business conditions cut by 3/4.",
      statusZh: "审议中（已列入国会本次会议议程，会期 2026-10-17 开幕至 11-21 闭幕，分 10/17–11/14 与 11/20–11/21 两阶段，11/15–11/19 休会整理；拟本次通过、2027 年年中生效。10/18 下午建设部已向国会法律与司法委员会常设机构提交正式稿：13 章 130 条；按商业/租赁/公务/政策性住房四类重排并单设租赁住房发展专章（承租对象、国家与民间两种投资形式、项目条件、投资方优惠、租金与管理）；公寓改造重建规则衔接城市更新、新增公私合作方式；删除工业园区外专家与劳动者宿舍规定，将外国劳动者移出可租住社会住房对象范围；开发商配建社房/租赁房义务改由省级人委会决定实施方式（项目内留地、项目外安排土地或缴纳等值款项）。审查机构建议明确国家资金租赁住房的对象与优先顺序，并核查与《土地法》《房地产经营法》的一致性。10/16 国会办公厅吹风会确认会期 28 天（含 6 个周六、1 个周日）、备选闭幕日 11/23，共审议 47 项法律与规范性决议草案（43 项拟通过、4 项作初次意见，其中拟通过法律 39 部），11/12 首次安排一天部长质询；10/17 上午预备会议并正式开幕；10/22 上午全体会议听取呈文与审查报告、随后分组讨论（下午续），评估意见要求通过后尽早出台议定与建设部实施细则；据国会预定议程，三部修订法拟于 11/21 上午同时表决；生效时点另有报道称草案拟 2027-03-01 生效，与「2027 年年中」口径不一，待官方文本确认；10/23 媒体报道补充分组讨论焦点——强制公证范围应否由法律直接规定（司法部长黄清松主张法律规定，若授权政府须限定内容与范围）、外籍公寓 30% 上限应否保留在法律中（胡志明代表阮清心主张保留硬性上限，仅授权政府规定计算方式与多栋统筹；涉及边境、沿海、岛屿与战略设施周边的人口与国防安全考量）、外籍购买楼层面积与土地使用权衔接的产权边界及登记发证程序待明确；10/24 补充——社房 5 年后转售对象受限：草案规定付清房款满 5 年并取得证书后，转售只能卖给符合社房购买条件的对象（5 年自付清房款之日起算，非交房日），不再按 2023 年法自由按市价出售；总理黎明兴称过去存在买社房等 5 年再按市价转售牟利、把福利政策变成套利机会的现象，须严格逐笔核验；代表胡越朝建议为因工作调动、居住地变更必须搬迁者设例外机制，代表黎氏玉玲指出草案未明确转售定价原则并要求为依 2023 年法已购房、已签约者设过渡条款；开发商 G6 要求明确受理与审核主体（建议坊级人委会）、增值与装修部分处理及双方税负。注：目前仅为草案建议，现有业主出售权利未改变）", statusEn: "Under review (on the NA session agenda opening Oct 17 and closing Nov 21, 2026, in two phases Oct 17–Nov 14 and Nov 20–21 with a Nov 15–19 recess for drafting; passage expected this session, effect mid-2027. On the afternoon of Oct 18 the Ministry of Construction submitted the formal text to the standing bodies of the NA Law and Justice Committee: 13 chapters and 130 articles, regrouped into commercial, rental, official-duty and policy housing with a dedicated rental-housing chapter (eligible tenants, state and private investment models, project conditions, investor incentives, rents and management); apartment renovation rules linked to urban renewal, with public-private partnership models added; dormitory rules for experts and workers outside industrial parks dropped and foreign workers removed from eligible social-housing tenants; the developer obligation to build social or rental housing left to provincial people's committees (on-site land, off-site land or an equivalent payment). The reviewing body asked for a clear priority order for state-funded rental housing and a consistency check against the Land Law and the Law on Real Estate Business. The Oct 16 NA Office briefing confirmed a 28-day session including six Saturdays and one Sunday, with Nov 23 as an alternative closing date, 47 draft laws and normative resolutions under consideration (43 for adoption including 39 laws, four for first opinions), and a one-day interpellation of ministers on Nov 12; the preparatory meeting and formal opening were held on the morning of Oct 17; per the drafted schedule the three amended laws are set for a single vote on the morning of Nov 21; some reports put the intended entry into force at Mar 1, 2027 rather than mid-2027 - to be confirmed against the official text; Oct 23 reports add the group-discussion flashpoints: whether mandatory notarisation should be set by law itself (Justice Minister Hoang Thanh Tung backs legislating it, with any delegation bounded in content and scope), whether the 30% foreign apartment cap should stay in the law (HCMC deputy Nguyen Thanh Tam wants the hard cap retained with the government only setting the calculation method and multi-tower coordination, citing population and defence-security concerns in border, coastal, island and strategic areas), and how far foreign floor-space ownership links to land-use rights, including title boundaries and registration; 10/28 下午为全体会议专项讨论（此前记为「分组讨论」，按国会日程应为全体会议，已更正）：代表普遍要求社房与租赁住房租金挂钩居民实际支付能力，5 年后转售价按「原购买价 × 有权机关确定调整系数」封顶并配套事后审计与处罚；多名代表反对「只能卖给合格对象且不高于合同价」的一刀切（胡志明代表武玉清竹指调动工作、重病或迁居时被迫出售唯一住房构成过大障碍）；同奈代表郑春安建议为违规项目购房者单设保护条款、不得把投资方整改费用转嫁居民；建设部长称将吸收意见完善草案，仍按 11/21 上午与另两部法一并表决。)",
      links: [{ zh: "政府/国会解读", en: "NA review", url: "https://en.thevietmedia.net/vietnam-housing-law-foreigners-landed-houses-2026" }]
    },
    {
      date: "2026-10-01", effective: "待定", category: "法律草案 / Draft Law",
      titleZh: "《土地法》修订草案（国会常委会 10/1 审议）", titleEn: "Draft amended Land Law (NA Standing Committee, Oct 1)",
      keyZh: "草案新增 3 类「为经济社会发展而征收土地」情形（含国际条约履约、公租/保障房项目建设、>50 公顷物流中心等）；强调「尽可能避免仅为拍卖创收而征收居民住宅用地」；拟按省定年度地价表+调整系数计算土地税费/租金/补偿，并要求土地交易经数字平台登记；目标 2027-03-01 生效（草案口径）。10/22 国会分组讨论披露：草案共 112 条（现行 2024 年《土地法》260 条），土地分类简化为农用地、非农用地、发展储备用地三类，取消省级独立土地利用规划、内容并入省级规划，乡级土地使用计划简化并数字化；每块土地设全国唯一识别码，数字登记与纸质证书同等效力，已在公布土地数据库内的材料不得要求重复提交；未使用土地 60 个月后可被收回，并拟对囤地按递增标准加征费用。",
      keyEn: "Draft adds 3 land-reclamation cases for socio-economic development (international treaties; public/rental housing; >50ha logistics hubs); stresses minimizing reclamation of residential land solely for auction revenue; would compute land levies, lease payments and compensation from annual provincial price lists plus adjustment coefficients, and require land transactions to be registered via digital platforms; targets entry into force on Mar 1, 2027 (draft).",
      statusZh: "审议中（已列入第十六届国会第二次会议 2026-10-17 至 11-21 议程，拟本次审议通过。10/16 国会吹风会口径：修订重点是完善地价表与调整系数、健全土地财政政策，并把土地数据与相关专业数据互联互通以防止操纵与人为抬价；征收/补偿/安置方面明确可在补偿安置方案获批前收回土地的法定情形，同时增设约束与承诺条款保障被征收人合法权益、确保居住与生计条件改善；10/22 上午全体会议听取呈文与审查报告并分组讨论；10/22 下午分组讨论要点：总理黎明兴称土地分类、规划与用地计划是重点，全国仅保留国防、安全与国土三张国家级用地规划，省级不再单设土地利用规划而并入省级规划；地价由国家按「省级地价表+调整系数」确定，取代 2024 年法逐项定价与聘请咨询机构核价的机制，程序须公开透明、基于土地与专业数据；国会主席陈青敏要求本法至少稳定运行 10–15 年，避免反复修改，并严打炒作与操纵价格，补偿安置须量化为可衡量标准（住房、学校、医疗与基本服务）；国会经济与财政委员会主任范文买建议保留林地、稻田、国防安全用地的严格管控，其余用途可按发展优先序灵活管理；据国会预定议程，三部修订法拟于 11/21 上午同时表决）", statusEn: "Under review (on the agenda of the 16th NA 2nd session, Oct 17 – Nov 21, 2026; passage expected this session. Per the Oct 16 NA briefing, the revision focuses on improving land price tables and adjustment coefficients, reforming land-finance policy, and interlinking land data with related specialist datasets to prevent manipulation and artificial pricing; on reclamation it would specify the legal cases where land may be taken before compensation and resettlement plans are approved while adding safeguards for affected households' housing and livelihoods; per the drafted schedule the three amendments are set for a single vote on the morning of Nov 21; 10/29 全体会议正式审议（越通社）：草案 13 章 112 条，较 2024 年《土地法》减少 3 章 148 条；不再规定具体地价与地价确定咨询机构，集中完善国家定价原则与依据、地价表与地价调整系数，并补充土地使用费/租金收取比例与补偿比例；乡级土地利用计划按简化、数字化、与省级规划及城乡/行业详细规划整合的方向编制。)",
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
    },
    {
      date: "2026-10", effective: "已生效（2026）", category: "法令 / Decree",
      titleZh: "第 147/2026/NĐ-CP 号法令：落实国会第 29/2026/QH16 号决议，处置涉土地违法与长期停滞项目",
      titleEn: "Decree 147/2026/ND-CP: implementing NA Resolution 29/2026/QH16 on land-related violations and long-stalled projects",
      keyZh: "为国会第 29/2026/QH16 号决议（针对 2024 年《土地法》生效前组织与个人的土地违法行为，以及长期停工、拖延项目）提供实施细则：明确适用对象、处置方式与办理程序，供地方据以解冻项目、恢复施工与补办手续。落地进展：依政治局第 77-KL/TW 号结论、国会第 170/2024/QH15 与 29/2026/QH16 号决议及本法令，全国 2,035 个长期停滞项目中 1,985 个已化解（97.5%）；岘港列管 354 个项目与地块、已处理 206 个（58.2%），海防 249 个中化解 239 个。地方口径强调「解决困难但不合法化既往违规」。",
      keyEn: "Provides implementing rules for NA Resolution 29/2026/QH16, which addresses land-related violations by organisations and individuals before the 2024 Land Law took effect as well as long-delayed or suspended projects: it sets the scope, treatment methods and procedures local authorities use to unfreeze projects, restart construction and regularise paperwork. Progress: under Politburo Conclusion 77-KL/TW, NA Resolutions 170/2024/QH15 and 29/2026/QH16 and this decree, 1,985 of 2,035 long-stalled projects nationwide have been resolved (97.5%); Da Nang listed 354 projects and land plots and cleared 206 (58.2%), and Hai Phong resolved 239 of 249. Localities stress 'fixing difficulties without legitimising past violations'.",
      statusZh: "已生效并进入地方执行阶段（10/31 报道口径；法令编号以官方公报核对为准）",
      statusEn: "In force and in local implementation (as reported Oct 31; decree number to be confirmed against the official gazette)",
      links: [{ zh: "人民报（英文）", en: "Nhan Dan English", url: "https://en.nhandan.vn/resolving-bottlenecks-for-long-delayed-and-stagnant-projects-post168522.html" }, { zh: "国家法律库检索", en: "Law library", url: "https://vbpl.vn" }]
    }
  ],

  /* ---------- 动态消息 / News Feed（利好/利坏/政策/市政）---------- */
  newsFeed: [
    { date: "2026-11-02", tag: "复盘 / Weekly", tagClass: "mid", zh: "周度复盘（2026-10-27 至 11-02）：①利率——11 月初全系统 6 个月以上挂牌定存普降约 0.5pp（VCB/BIDV/CTG 同步），12 月期多数落入 7% 以下，CD 同步小幅下调；10 月底体系存款增逾 100 万亿盾，短期存款占比约 80%；但挂牌之上叠加 1–3pp 加成后实付仍达 8.3–9%，房贷浮动 12–16% 未跟进。②汇率——银行美元卖出价连续跌破 26,000（2025-04 中以来首次），VCB 买 25,580/卖 25,990，SBV 中央汇率 25,637 连续持平；越盾年内升值约 1.85%，金价跌至 3,874 美元（一年低位）。③政策——10/30 国会全体会议讨论《房地产经营法》修订草案，清化代表提议禁止转让期房合同并设完工后售房路线图，VARS 与专家明确反对；三部法（土地/住房/经营）仍按议程 11/21 上午同时表决。④市场——DXS-FERI：9 个月新供应 49,657 套（+33%）、累计 114,857 套（+21%），但 Q3 仅 12,357 套（环比 -40%/同比 -54%）；HoREA：胡志明前 9 个月高端公寓占供应 73.6%、平价产品消失，新案均价 7,500 万盾/㎡。⑤市政与新盘——河内批准北升龙都市区约 99,788 亿盾（约 40 亿美元、Handico×Sunshine 等 5 家）；Celesta Gold（南西贡 420 套、签约 5% 首付）11/1 发布；电价降 2%、汽油特别消费税 11/1 起归零。⑥下周关注——国会 11 月会期续议三部法并就 11/21 表决前的修正稿收敛，银行逐家公布 11 月新牌价。", en: "Weekly review (Oct 27 - Nov 2): (1) Rates — early November brought system-wide cuts of about 0.5pp on six-month-plus deposit boards (VCB, BIDV and CTG moved together), leaving most 12-month rates under 7% with certificates of deposit trimmed too; system deposits rose more than VND 100tn in late October and short-term deposits are about 80% of the total, but 1-3pp bonus tiers still lift effective yields to 8.3-9% while floating mortgages stay at 12-16%. (2) FX — bank dollar asks held below 26,000 for a second session, the first time since mid-April 2025, with Vietcombank at 25,580 bid / 25,990 ask and the SBV central rate flat at 25,637; the dong is up about 1.85% year-to-date and gold slid to $3,874, a one-year low. (3) Policy — the National Assembly debated the amended Real Estate Business Law on Oct 30, where a Thanh Hoa deputy proposed banning transfers of off-plan contracts with a roadmap to selling only completed homes, drawing clear opposition from the Vietnam Real Estate Association and experts; the three laws (land, housing, business) remain scheduled for a single vote on the morning of Nov 21. (4) Market — DXS-FERI counts nine-month new supply at 49,657 units (+33%) and cumulative supply at 114,857 (+21%), yet Q3 alone saw only 12,357 (-40% QoQ, -54% YoY); HoREA says high-end apartments were 73.6% of HCMC supply in the first nine months with affordable product absent and new launches averaging VND 75m/sq.m. (5) Infrastructure and launches — Hanoi approved the roughly VND 99,788bn (about $4bn) Bac Thang Long urban project with Handico, Sunshine and three other investors; Celesta Gold (420 units in South Saigon, 5% down on signing) launched on Nov 1; electricity prices were cut 2% and the petrol special consumption tax went to zero from Nov 1. (6) Next week — the National Assembly continues its November sitting and converges amendments before the Nov 21 vote, and banks publish their new November boards.", src: "https://vietnamnet.vn/en/uneven-real-estate-price-fluctuations-drive-investors-to-adapt-2567266.html" },
    { date: "2026-11-02", tag: "数据 / Data", tagClass: "mid", zh: "汇率（11/1）：银行美元卖出价连续第二日低于 26,000。Vietcombank 买入 25,580、卖出 25,990（较早间再降 30 盾），ACB 卖出 25,980，VietinBank 与 BIDV 同报 25,980；SBV 11/1 中央汇率维持 25,637（连续两日持平），±5% 区间 24,355–26,919。银行汇率较年初低约 1.5%，越盾年内对美元升值约 1.85%。自由市场价差收窄至低于银行卖出价（河内买 25,700/卖 25,780），与 10/31 记录的反向价差并存，渠道口径不同、待核实。人民币：VCB 3,779.79 现金买入 / 3,817.97 转账买入 / 3,940.35 卖出，较上周未变；cnyVnd 仍用 25,990/7.13 交叉折算 3,645。外部：DXY 回升至 101 上方，金价 11/2 早间 3,874 美元/盎司（2025-10 以来低位，周跌约 121 美元），SJC 金条 1.36–1.39 亿盾/两。", en: "FX (Nov 1): bank dollar asks stayed below 26,000 for a second session. Vietcombank bid 25,580 and asked 25,990 (another 30 dong lower intraday), ACB asked 25,980 and VietinBank and BIDV quoted 25,980; the SBV central rate held at 25,637 for a second day, with the +/-5% band at 24,355-26,919. Bank rates are about 1.5% below the start of the year and the dong is up roughly 1.85% year-to-date. The unofficial spread narrowed below bank asks (Hanoi 25,700 bid / 25,780 ask), coexisting with the inverse gap logged on Oct 31 — different channel basis, to be verified. CNY: Vietcombank 3,779.79 cash bid / 3,817.97 transfer bid / 3,940.35 ask, unchanged on the week; cnyVnd remains a 25,990/7.13 cross at 3,645. Abroad, DXY recovered above 101 and gold was $3,874/oz on the morning of Nov 2 (lowest since October 2025, down about $121 on the week), with SJC bars at VND 136-139m per tael.", src: "https://civl.com/news/story/vietnamese-banks-lower-dollar-selling-rates-below-26-000-dong-2bb9b2f9" },
    { date: "2026-11-02", tag: "利率 / Rates", tagClass: "mid", zh: "定存 11 月初普降（11/1）：在 SBV 要求 6 个月以上挂牌至少降 0.5pp 后，各商业银行 11 月初普遍下调约 0.5pp，VCB、BIDV、CTG 等主要银行同步调整，12 个月期挂牌多数降至 7% 以下，存单（CD）利率同步小幅下调。存款端同期仍在增长——10 月底银行体系存款较此前增逾 100 万亿盾；SBV 行长 10/31 在国会说明，12 个月以下短期存款占总量约 80%、滚存率高，使银行能以较低成本获取资金。风险点：部分银行在挂牌之上叠加优惠，实际执行年利率个别逾 8.3%、甚至高于 9%，挂牌与实际双轨未收敛；贷款端仅降 0.99%（存款 +1.42%，SBV 口径），房地产与购房类贷款仍 12–14%、浮动 15–16%。", en: "Deposits cut across the board in early November (Nov 1): after the SBV ordered boards of 0.5pp or more on six-month-plus deposits, commercial banks generally cut about 0.5pp in early November, with VCB, BIDV and CTG moving together, most 12-month boards falling below 7% and certificates of deposit trimmed slightly. Funding kept growing — system deposits rose more than VND 100tn in late October — and the SBV governor told the National Assembly on Oct 31 that sub-12-month deposits are about 80% of the total with high rollover rates, letting banks raise funds at lower cost. The catch: some banks stack bonuses on top of boards, pushing effective yields above 8.3% and in some cases past 9%, so the two tracks have not converged; on the lending side rates rose only 0.99% against 1.42% for deposits (SBV basis), while property and home-purchase loans remain at 12-14% with floating rates of 15-16%.", src: "https://aveluro.com/blog/vietnam-market-daily-report-2026-11-01" },
    { date: "2026-11-01", tag: "政策 / Policy", tagClass: "mid", zh: "央行行长 10/31 国会说明（信贷与利率口径）：全系统信贷较 2025 年底增长 12.27%；其中房地产信贷仅 +9.84%、低于总体增速，生产经营领域占未偿贷款 77.44%；中小企业未偿贷款超 4 千万亿盾（约 1,542 亿美元）。利率端：存款利率上行 1.42%、贷款利率仅上行 0.99%，存贷利差收窄以让利经济；短期存款占总量约 80%。社房方面，SBV 正按总理指示落实社房贷款再融资方案，并通过再融资与公开市场工具支持信贷机构。代表建议：将遇困企业的债务重组（延期还本、维持原债务分类）延长至 2027 年底、扩大中小企业/租户/社房购房者优惠信贷覆盖；行长回应重组机制已在法律（含第 39 号通知）框架内、属信贷机构职权，将鼓励依规支持。", en: "SBV governor's Oct 31 testimony to the National Assembly (credit and rate basis): system credit grew 12.27% from end-2025, of which real estate credit rose only 9.84%, below overall growth, while production and business absorbed 77.44% of outstanding loans; SME outstandings exceed VND 4 quadrillion (about $154.2bn). On rates, deposits rose 1.42% while lending rose only 0.99%, narrowing the spread to share the burden with the economy, and sub-12-month deposits are about 80% of the total. On social housing, the SBV is running a refinancing scheme for social-housing loans as directed by the Prime Minister and supports lenders via refinancing and open-market operations. Deputies proposed extending debt restructuring (payment deferral with unchanged classification) for distressed firms to end-2027 and broadening preferential credit to SMEs, tenants and social-housing buyers; the governor replied that restructuring already sits within the legal framework including Circular 39 and is a credit institution's own call, and that the SBV will encourage compliant support.", src: "https://en.sggp.org.vn/central-bank-urges-smes-to-improve-transparency-to-access-credit-post130679.html" },
    { date: "2026-10-31", tag: "政策 / Policy", tagClass: "mid", zh: "10/30 国会《房地产经营法》修订草案全体会议：清化省代表黎清完提议在草案中禁止转让期房买卖合同，并设路线图转向「工程完工后再售房」，理由是该类交易转让的是合同中的「位置」而非已验收交付的实物。越南房地产协会副主席陈国勇明确反对：控制投机、防炒价的目标正确，但不能以干预民众财产权与市场正常运行为代价，禁令不等于消除投机却会收窄购房者选择，遇失业、经营亏损或家庭变故者将无法处置资产；原胡志明市房地产协会副主席杜氏鸾主张区分合法交易与操纵市场；经济学家阮明丰称禁令是「砍梢」而非治本，期房合同是受法律保护的有价凭证。会议同时关注定金条件、银行担保与「保留合同价值 5% 至购房者取得权证」条款。草案拟 11/21 上午与《土地法》《住房法》一并表决。", en: "National Assembly plenary on the amended Real Estate Business Law, Oct 30: Thanh Hoa deputy Le Thanh Van proposed banning transfers of off-plan sale contracts with a roadmap toward selling only completed homes, arguing such deals transfer a 'position' in a contract rather than a finished, inspected asset. Vietnam Real Estate Association vice chairman Tran Quoc Dung objected: curbing speculation and price-pushing is the right goal, but not at the cost of property rights and normal market operation — a ban would not eliminate speculation yet would narrow buyers' choices and leave households hit by job loss, business losses or family events unable to dispose of the asset. Former HCMC Real Estate Association vice chair Do Thi Loan urged distinguishing lawful trades from market manipulation, and economist Nguyen Minh Phong called the ban a trim of the branches rather than a cure, noting off-plan contracts are legally protected instruments of value. The session also focused on deposit conditions, bank guarantees and the clause retaining 5% of contract value until the buyer obtains title. The draft is due for a single vote with the Land and Housing laws on the morning of Nov 21.", src: "https://yuenan.com/zh-hant/special/tracking-economic-vietnam-real-estate-law-resale-ban-2026-10-30" },
    { date: "2026-11-01", tag: "利好 / Positive", tagClass: "good", zh: "河内批准北升龙都市区（Bac Thang Long Urban City）：总投资约 99,788 亿盾（约 40 亿美元）的多功能都市项目获批，投资方为 5 家企业联合体，含 Handico 与 Sunshine Group。项目位于河内北部（东英—朔山方向）城市拓展轴，属河内 2026 年规模最大的都市区批文之一，将带动北部基础设施与住宅供给；具体分期、户数与开工时间尚未公布（待核实）。同期河内 5 条城铁（1/2/8/10/14 号线，253.5 km、逾 900 万亿盾）EPC 已于 10/15 签约、目标 2030 年通车。", en: "Hanoi approved Bac Thang Long Urban City: a mixed-use urban project worth about VND 99,788bn (roughly $4bn) was cleared for a five-investor consortium including Handico and Sunshine Group. Located on the capital's northern expansion axis toward Dong Anh and Soc Son, it is among Hanoi's largest urban approvals of 2026 and should support northern infrastructure and housing supply; phasing, unit counts and a start date have not been published (to be verified). In parallel, Hanoi's five metro lines (lines 1, 2, 8, 10 and 14; 253.5 km; over VND 900tn) had their EPC contracts signed on Oct 15 with a 2030 target.", src: "https://aveluro.com/blog/vietnam-market-daily-report-2026-11-01" },
    { date: "2026-11-01", tag: "新盘 / Launch", tagClass: "good", zh: "Celesta Gold 正式发布（11/1，南西贡）：Keppel、Phu Long 与 Nomura Real Estate Vietnam 联合开发的 Celesta 都市区新一期正式亮相，到场近 1,800 位嘉宾（含分销与金融机构）。项目位于阮友景路、占地 1.28 ha，2 栋 25 层、420 套河景公寓 + 商业裙楼；共享 Celesta 都市区既有配套，内部近 60 项设施（50 m 电解盐泳池、双层 Clubhouse、24/7 健身房与普拉提室、屋顶配套），BCA Green Mark Gold（新加坡）认证，并获 PropertyGuru 2026「最佳健康住宅开发」奖。交通：临近规划中的地铁 4 号线站点，守添 4 桥、富美 2 桥、ben luc—隆城高速在建。付款：签约仅 5% 首付。单价与开盘去化未公布（待核实）。", en: "Celesta Gold officially launched (Nov 1, South Saigon): Keppel, Phu Long and Nomura Real Estate Vietnam unveiled the new phase of the Celesta urban area before nearly 1,800 guests including distributors and financial institutions. The project sits on Nguyen Huu Tho Street on 1.28 ha with two 25-storey towers, 420 riverside apartments and a commercial podium; it shares Celesta's existing amenities and adds nearly 60 facilities (50 m salt-electrolysis pool, two-storey clubhouse, 24/7 gym and pilates studio, rooftop amenities), holds BCA Green Mark Gold (Singapore) and won PropertyGuru Vietnam 2026 for Best Wellbeing Condo Development. Connectivity: near a planned Metro Line 4 station, with the Thu Thiem 4 and Phu My 2 bridges and the Ben Luc-Long Thanh expressway under construction. Payment: only 5% down on signing. Pricing and launch absorption were not disclosed (to be verified).", src: "https://www.vietnam.vn/en/thanh-pho-vang-celesta-gold-chinh-thuc-ra-mat-tai-nam-sai-gon" },
    { date: "2026-10-29", tag: "数据 / Data", tagClass: "bad", zh: "HoREA：胡志明前 9 个月供应结构失衡（10/28 报告）：高端与中高端公寓占住宅供应 73.6%、中端仅 7.1%，平价公寓基本消失；新案均价约 7,500 万盾/㎡，远高于平价门槛 3,500 万盾/㎡。分区：市中心与守添半岛新案 1.82–3.9 亿盾/㎡，东区与南区 9,880 万–1.43 亿盾/㎡。含义：供给结构向高端集中推高购房门槛，自住需求外溢至卫星城市；与 DXS-FERI「总量增、结构错配」判断一致。同期「保温」个案：南西贡日系项目 TT GENESIS 6,900 万盾/㎡起（低于区域新案均价），Trellia Vista 以优惠价与分期方案吸客，而多数新案已 9,000 万–1.3 亿盾/㎡。", en: "HoREA: HCMC supply skewed to high-end in the first nine months (Oct 28 report): high-end and upper-mid apartments made up 73.6% of residential supply with mid-range at just 7.1% and affordable product effectively gone; new launches average about VND 75m/sq.m against an affordability threshold of VND 35m/sq.m. By area, new projects in the city centre and Thu Thiem run VND 182-390m/sq.m while eastern and southern districts sit at VND 98.8-143m/sq.m. Implication: the high-end tilt raises the entry bar and pushes owner-occupier demand to satellite cities, consistent with DXS-FERI's 'more supply, mismatched structure' call. Standouts still moving: the Japanese-backed TT GENESIS in South Saigon from VND 69m/sq.m (below the area average) and Trellia Vista with discounts and instalments, while most new launches are priced at VND 90-130m/sq.m.", src: "https://fttland.com/tin-tuc/tin-nhanh-bds-viet-nam-20261029.html" },
    { date: "2026-11-01", tag: "政策 / Policy", tagClass: "good", zh: "11/1 起降成本组合落地：政府将平均零售电价下调 2%，汽油特别消费税自 11/1 起降至 0%（柴油环保税与增值税支持同步延长）。两项措施直接压低运输、建材与运营的能源成本，有助缓和年底通胀压力（9 月 CPI 同比 +4.89%、仍高于 SBV 4.5% 目标上限），对房地产开发成本与家庭可支配收入构成边际利好。配套：财政部正推进税号清理（逾 250 万家企业与个体户停业未注销税号）。", en: "Cost-cutting package effective Nov 1: the government cut average retail electricity prices by 2% and reduced the special consumption tax on petrol to 0% from Nov 1, with diesel environmental-tax and VAT support extended in step. Both directly lower energy costs in transport, building materials and operations, easing year-end inflation pressure (September CPI was +4.89% YoY, still above the SBV's 4.5% ceiling) and providing a marginal boost to development costs and household disposable income. Separately, the finance ministry is pushing a tax-code cleanup with more than 2.5 million businesses and household firms having ceased operations without closing their codes.", src: "https://aveluro.com/blog/vietnam-market-daily-report-2026-11-01" },
    { date: "2026-11-01", tag: "数据 / Data", tagClass: "mid", zh: "Bất động sản 2026-2027: Không còn thời “mua gì cũng tăng”", en: "Real estate market 2026-2027: The days of \"everything going up in price\" are over.", src: "https://news.google.com/rss/articles/CBMisAFBVV95cUxOeUwzWFVJSXBRLWxSMDJ3a3pNdzVKT0Fodm05ekoyeGpad0ItM3Y5VmdYZ25zVndOalVEM0VBaURGanFwR1o2VVBCanZsdktpNDJWVTVkLVh5Z1VFQ3Z0SzRsTHVXajdyVlpzdF9WRjVjT3lXWlEtWjJvbGlzRjRPd0dldkNueTZCVDRHR2g1UThQd1A2dl9tajFjeGl1bm5Bb3JGc0p2YUZVcHFENGhhaw?oc=5" },
    { date: "2026-11-01", tag: "数据 / Data", tagClass: "mid", zh: "Đưa thị trường bất động sản về đúng giá trị thực", en: "Đưa thị trường bất động sản về đúng giá trị thực", src: "https://news.google.com/rss/articles/CBMigAFBVV95cUxPaFBFT1hTbURiYmw3cXhOX1pwdTdhRGFYWU5EZmw3TlFfQlJxSV9qNDVEdXQ2ckFCYWpnSzJleEt3VXlMVXpsRDlzX3hVQmhVWU9vazdseGpzVjd2d0M5RFVwZXF1cWtoVTJRdGxieDJySlQ5bkNDM192VDd0dUQ1dg?oc=5" },
    { date: "2026-11-01", tag: "数据 / Data", tagClass: "mid", zh: "Đổ xô bán tháo khi bất động sản rớt giá liên tục", en: "Đổ xô bán tháo khi bất động sản rớt giá liên tục", src: "https://news.google.com/rss/articles/CBMiogFBVV95cUxPN0lBMmFyUHh0Qms0MTJ6cUMtSWdON2Z6bmZNcnVOUWxlMlZxZlNoZVBUZXlNclAzRjZiYW9teUNrQU9yOTJiQTdHekpvWlpVWExKd254VVhlZTVYampBYlozY0lSQTRTRVVnWXBOOWhsaFo3MVRvRjFKZkt3MmJFYXhaUlo2T2w3UTUzV0FqRVoyc29EemVqTE1hMGFjcTRvNUE?oc=5" },
    { date: "2026-10-31", tag: "中性 / Neutral", tagClass: "mid", zh: "Keppel nhận hai giải thưởng bất động sản", en: "Keppel joins Vietnam International Financial Centre as inaugural member - Vietnam Investment Review", src: "https://vnexpress.net/keppel-nhan-hai-giai-thuong-bat-dong-san-5138724.html" },
    { date: "2026-11-01", tag: "中性 / Neutral", tagClass: "mid", zh: "Bất động sản du lịch rục rịch trở lại", en: "Bất động sản du lịch rục rịch trở lại", src: "https://news.google.com/rss/articles/CBMie0FVX3lxTE5SMC1jS3lJUmd5TlhReGRJU3RFd1IwbV90TTItNzJESmdDSjZsOHgzMUdRLVk2R2pjSkR1Z0swbVA1Sk5JRm9JM2RIVFlPcTBtYmZkZWJCRjlOT1dNeGlwR3NIM1ltckROSk1wR0Fac3NYakRMeFVlcHc3QQ?oc=5" },
    { date: "2026-10-31", tag: "市政 / Infra", tagClass: "good", zh: "Động lực từ hạ tầng hàng không thúc đẩy thị trường bất động sản", en: "Động lực từ hạ tầng hàng không thúc đẩy thị trường bất động sản", src: "https://news.google.com/rss/articles/CBMitgFBVV95cUxNTU04THpvMjJPMHNSc29OZUlrNlNTOTdvOXZhb3F1OHZock5aOGNtR2FXVm0zbGNYT1FmVGI4Z1RYV3R3ZUNxQ0MwQVVRajhXVXQybDdUdjVySG54MHRWa0NpWXdoeTJ5bFlwVUFNaW91QkYwMEJzNE9fMFVvQ1hhUHhTWGFFdE1EX0I3X2xhYWE4WFFhU2V1cHJzanBXaDZPcjJ4Q1Uway1ZdGJmV3cxd1laSk8tdw?oc=5" },
    { date: "2026-11-01", tag: "复盘 / Monthly", tagClass: "mid", zh: "月度复盘（2026-10-01 至 10-31）：①利率——10 月累计约 30 家银行下调 6 个月以上定存，国有四大行 12 月柜面 5.9%→5.4%、24 月 6%→5.5%，挂牌下限降至 GPBank 3.6%，Saigonbank 13 月 7.9% 仍最高；但加成促销令实际吸存仍达 8.3–9%，房贷未见跟进，购房贷 12–14%、浮动 15–16%（DXS-FERI 预计年底浮动维持 11–13%）。②汇率——VND 全月转强，银行美元卖出价由 26,020 降至 25,990，为 2025 年 4 月以来首次跌破 26,000，年内升值约 1.85%。③政策——第十六届国会第二次会议 10 月集中审议《土地法》《住房法》《房地产经营法》三部修订草案（经营法 10 章 61 条、住房法 13 章 130 条、土地法 13 章 112 条），拟 11/21 上午同时表决；《资产拍卖法》修订草案提交；第 147/2026/NĐ-CP 号法令落地以处置停滞项目。④市场——Q3 全国成交 92,004 笔（环比 -8%）、河内二手挂牌环比 -5% 且同比首次转负、胡志明住宅成交同比 -27%，Savills 胡志明去化仅 25%、CBRE 河内新推 -28%；9 个月全国成交 331,800 笔。⑤市政——滨城—芹椰高铁 10/30 全面提速（1 万工人）、地铁 2 号线 5 站开挖前准备、隆城机场定 12/24 商业运营、胡志明 14 个基建项目加速。", en: "Monthly review (Oct 1-31, 2026): (1) Rates — about 30 banks cut 6-month-plus deposit boards during October; the Big-4 moved 12-month counter rates from 5.9% to 5.4% and 24-month from 6% to 5.5%, the floor fell to 3.6% at GPBank while Saigonbank's 13-month 7.9% remains the highest; bonus tiers still lift effective deposit yields to 8.3-9%. Mortgages did not follow: home loans at 12-14% with floating rates of 15-16% (DXS-FERI sees floating at 11-13% through year-end). (2) FX — the dong strengthened through the month, with bank dollar asks down from 26,020 to 25,990, the first break below 26,000 since April 2025 and a gain of about 1.85% year-to-date. (3) Policy — the second session of the 16th National Assembly worked through the amended Land Law, Housing Law and Real Estate Business Law (the business law at 10 chapters/61 articles, housing at 13/130, land at 13/112), with a single vote scheduled for the morning of Nov 21; the amended Property Auction Law was also tabled and Decree 147/2026/ND-CP took effect to unblock stalled projects. (4) Market — Q3 nationwide transactions were 92,004 (down 8% QoQ), Hanoi secondary asking prices fell 5% QoQ and turned negative year-on-year for the first time, HCMC home sales were down 27% YoY, Savills put HCMC absorption at just 25% and CBRE put Hanoi new launches down 28%; nine-month transactions reached 331,800. (5) Infrastructure — the Ben Thanh-Can Gio high-speed rail ramped up on Oct 30 with 10,000 workers, Metro Line 2 prepared five stations for excavation, Long Thanh airport was fixed for commercial operation on Dec 24 and HCMC fast-tracked 14 infrastructure projects.", src: "https://vietnamnet.vn/en/uneven-real-estate-price-fluctuations-drive-investors-to-adapt-2567266.html" },
    { date: "2026-10-31", tag: "数据 / Data", tagClass: "mid", zh: "汇率（10/31 周六收盘）：银行美元买卖价跌破 26,000，为 2025 年 4 月中旬以来首次。Vietcombank 买入 25,610/卖出 25,990（较早间 -30 盾），其他国有行 25,440–25,980，Sacombank、TPBank 等少数行卖出价仍贴 26,000；SBV 10/30 中央汇率 25,637（较上周末升约 10 盾）。银行汇率较年初低约 1.5%，越盾 10 个月后对美元转为升值；自由市场价差重回 200–300 盾（胡志明兑换点买 25,900/卖近 26,200）。机构：MBS 年底 26,800–27,000、UOB Q4 26,300。fxRate 随银行卖出价下调至 25,990，cnyVnd 交叉折算 3,645（VCB 挂牌 3,817.97 买入/3,940.35 卖出，不同源）。", en: "FX (Oct 31 Saturday close): bank dollar quotes fell below 26,000 for the first time since mid-April 2025. Vietcombank bid 25,610 / asked 25,990 (down 30 dong from the morning), other state banks quoted 25,440-25,980 and only a few private banks (Sacombank, TPBank) kept asks near 26,000; the SBV central rate for Oct 30 was 25,637 (up about 10 dong on the week). Bank rates are about 1.5% lower than at the start of the year, so the dong has turned stronger over ten months, and the unofficial-market spread has widened back to 200-300 dong (HCMC desks bid 25,900 and ask close to 26,200). Forecasts: MBS 26,800-27,000 by year-end, UOB 26,300 for Q4. fxRate has been marked down to 25,990 on the bank selling rate, with cnyVnd at a 3,645 cross rate (Vietcombank boards 3,817.97 bid / 3,940.35 ask, a different basis).", src: "https://news.qq.com/rain/a/20261031A050UN00" },
    { date: "2026-10-31", tag: "利率 / Rates", tagClass: "mid", zh: "降息传导复盘（10 月下旬）：银行业协会统计，至少 22 家银行承诺对生产经营与优先领域贷款利率下调 1.5–2pp，其中 15 家公布优惠信贷方案、总规模逾 451 万亿盾（约全系统贷款余额 2.2%），但集中在 6 个月以下短期流动资金，无消费、购房、购车方案。挂牌与实际落差明显：部分资金紧张银行挂牌 6.6–7% 后再叠加 1–3pp 优惠，实际吸存超 8.3%、个别逾 9%；房地产等受控领域仍 12–14%、浮动 15–16%。专家口径：存款利率下降不等于融资成本同步下降（存量存款仍按旧协议付息），国有行信贷额度早用尽、实际放款受阻，多家银行贷存比已超 110%（规定 95%）。", en: "Rate-cut transmission review (late October): the banking association counts at least 22 banks committing to 1.5-2pp cuts on production and priority-sector lending, 15 of which launched preferential packages worth over VND 451tn (about 2.2% of system loans) — but concentrated in short-term working capital under six months, with nothing for consumer, home-purchase or car loans. The gap between boards and actual funding costs is wide: some deposit-hungry banks post 6.6-7% then add 1-3pp of bonuses, pushing effective deposit yields above 8.3% and in some cases past 9%, while property and other controlled sectors stay at 12-14% (floating 15-16%). Experts note lower deposit boards do not equal lower funding costs (existing deposits still pay old rates), state banks used up their credit quotas early, and several banks' loan-to-deposit ratios already exceed 110% against a 95% rule.", src: "https://news.qq.com/rain/a/20261030A0B3FH00" },
    { date: "2026-10-31", tag: "利坏 / Negative", tagClass: "bad", zh: "HoREA 引用建设部 9 个月报告（10/31 传播）：全国成交逾 331,800 笔（公寓与联排 80,270 套、地块 251,600 宗）；Q3 约 92,000 笔、为 Q2 的 92%（环比 -8%），其中公寓与联排 22,800 套（环比 -14%）、地块 69,150 宗（-6%）。价格端 Q3 整体小幅下行、分化明显：公寓微降但大城市基准价仍高，联排/别墅局部小跌且流动性迟滞，二手地块下调压力最大；买家集中转向法务清晰、基建完工、可运营的自住产品。HoREA 主席黎黄洲警告购买力下滑将令房企资金沉淀、现金流不足，或传导至信贷机构；EZ Vietnam 称年内成交较年初骤降约 90%，市场多处近乎冻结，仅社房与已交付成熟社区二手尚有成交（多靠深度折价）。", en: "HoREA, citing the Ministry of Construction's nine-month report (circulated Oct 31): nationwide transactions topped 331,800 (80,270 apartments and townhouses, 251,600 land plots); Q3 saw about 92,000 deals, 92% of Q2 (down 8% QoQ), of which 22,800 were apartments/townhouses (-14%) and 69,150 land plots (-6%). Prices edged down overall in Q3 with sharp divergence: apartments slipped slightly but benchmark levels stay high in the big cities, villas/townhouses fell modestly in some areas on thin liquidity, and secondary land plots face the heaviest downward pressure, while buyers shift to legally clean, infrastructure-complete, income-producing homes. HoREA chairman Le Hoang Chau warned that weaker purchasing power will trap developer capital, thin cash flow and spill over to lenders; EZ Vietnam says its own transactions are down about 90% since the start of the year, with the market near-frozen except social housing and secondary units in completed communities, mostly via deep discounts.", src: "https://vietnamnet.vn/en/uneven-real-estate-price-fluctuations-drive-investors-to-adapt-2567266.html" },
    { date: "2026-10-31", tag: "政策 / Policy", tagClass: "mid", zh: "国会 10/31 全体会议：财政部长吴文俊与央行行长范德印就经济社会发展计划、资源动员与货币政策接受质询并答复。代表建议：①SBV 指导商业银行将对因市场因素遇困但资金用途合规、有可行恢复方案的企业的债务重组（延期还本、维持原债务分类）机制延长至 2027 年底；②扩大中小企业、租户与社房购房者的优惠信贷范围；③降低投标保函费、履约保证金与提前还款费，相应押金及时释放，细则 2027 Q1 前完成；④将汽油特别消费税降至 0%，并延长柴油环保税与增值税支持、与汽油同步；⑤对 2026-07-01 前签订的公共投资施工合同建立单价调整机制（材料、人工、燃油大涨致「越干越亏」）。", en: "National Assembly plenary, Oct 31: Finance Minister Ngo Van Tuan and SBV Governor Pham Duc An took questions and responded on the socio-economic plan, resource mobilisation and monetary policy. Deputies proposed: (1) the SBV direct banks to extend to end-2027 the debt-restructuring mechanism (payment deferral with unchanged classification) for firms hit by market conditions but using funds properly and holding feasible recovery plans; (2) broadening preferential credit for SMEs, tenants and social-housing buyers; (3) cutting bid-guarantee and performance-bond fees and early-repayment charges, releasing matching deposits, with rules completed by Q1 2027; (4) cutting the special consumption tax on petrol to 0% and extending diesel environmental-tax and VAT support in step with petrol; (5) a unit-price adjustment mechanism for public-investment construction contracts signed before July 1, 2026, after sharp rises in materials, labour and fuel left contractors 'losing money the more they build'.", src: "https://worldculturefestival.vn/en/de-xuat-giam-thue-tieu-thu-dac-biet-voi-xang-ve-0-keo-dai-ho-tro-thue-voi-dau-diesel" },
    { date: "2026-10-31", tag: "政策 / Policy", tagClass: "mid", zh: "停滞项目处置落地：国会第 29/2026/QH16 号决议（针对 2024 年《土地法》生效前组织与个人涉土地违法行为、以及长期停工项目）配套的第 147/2026/NĐ-CP 号法令已实施。地方进展：依据政治局第 77-KL/TW 号结论、国会第 170/2024/QH15 与 29/2026/QH16 号决议及该法令，全国 2,035 个长期停滞项目中 1,985 个已化解（97.5%）；岘港市列管 354 个项目与地块、已处理 206 个（58.2%），海防 249 个中化解 239 个。岘港市委要求「解决困难但不合法化既往违规」，从程序管理转向主动落地，并保护担当干部。", en: "Unblocking stalled projects: Decree 147/2026/ND-CP, implementing NA Resolution 29/2026/QH16 on pre-2024 Land Law violations by organisations and individuals and on long-stalled projects, is now in force. Local progress: under Politburo Conclusion 77-KL/TW, NA Resolutions 170/2024/QH15 and 29/2026/QH16 and this decree, 1,985 of 2,035 long-stalled projects nationwide have been resolved (97.5%); Da Nang listed 354 projects and land plots and cleared 206 (58.2%), while Hai Phong resolved 239 of 249. Da Nang's party committee insists on 'fixing difficulties without legitimising past violations' and a shift from procedure management to delivery, with protection for officials who act.", src: "https://en.nhandan.vn/resolving-bottlenecks-for-long-delayed-and-stagnant-projects-post168522.html" },
    { date: "2026-10-31", tag: "新盘 / Launch", tagClass: "good", zh: "河内社房开售（12 月）：市建设厅公布石室县（河鹏乡）新舍（Tan Xa）与东竹（Dong Truc）两个社房项目本期共 343 套，其中出售 307 套、出租 18 套、租购 18 套，公告售价 2,350 万盾/㎡（含 VAT、不含维修基金）。东竹 231 套（出售 206 套、37.56–77 ㎡，总投 3,252.26 亿盾，8 层含夹层+地库）、12/2–12/31 收件；新舍 112 套（出售 100 套、55.2–68.91 ㎡，2026-07-03 已开工）。最小 37.56 ㎡ 约 8.83 亿盾、最大 77 ㎡ 约 18.1 亿盾；出租约 8.9–10.08 万盾/㎡/月，租购（5 年、先付 50%）约 17.8–20.9 万盾/㎡/月；预计 2027-01 签约、2027 Q4 交付。建设厅提示只经官方公布渠道提交、勿走中介或违规收定金。", en: "Hanoi social housing on sale (December): the city construction department announced 343 units in the Tan Xa and Dong Truc projects in Thach That (Ha Bang commune) — 307 for sale, 18 for rent and 18 lease-to-own — at a published VND 23.5m/sq.m incl. VAT, excl. maintenance. Dong Truc offers 231 units (206 for sale, 37.56-77 sq.m; VND 325.226bn total investment; 8 floors plus mezzanine and basement) with applications open Dec 2-31; Tan Xa offers 112 units (100 for sale, 55.2-68.91 sq.m; started July 3, 2026). The smallest 37.56 sq.m unit costs about VND 883m and the largest 77 sq.m about VND 1.81bn; rents run VND 89,000-100,800/sq.m/month and lease-to-own (5 years, 50% upfront) VND 178,000-209,475/sq.m/month, with contracts expected in January 2027 and handover in Q4 2027. The department warns buyers to apply only through official channels, not via brokers or illegal deposits.", src: "https://www.vietnam.vn/en/nhan-ho-so-mua-231-can-nha-o-xa-hoi-dong-truc-tu-ngay-2-12" },
    { date: "2026-10-31", tag: "市政 / Infra", tagClass: "good", zh: "滨城—芹椰高铁全面提速（10/30）：VinSpeed 与总包联合体在 10/30 启动全线大规模施工，高峰投入约 1 万名工人、工程师与技术员。控制性工程：滨城地下站逾 565 m、开挖深约 34 m，与地铁 1 号线滨城站直连；西贡港区 13 m 直径盾构隧道逾 2 km，接 321.7 m 明挖段与 266 m U 型槽；芹椰主桥为钢桁斜拉桥、双 A 形塔、主跨 360 m，两侧引桥逾 4 km。全线约 54 km、设计时速 350 km/h，市中心至芹椰约 13 分钟；沿线 3 个预制场 15 个月产约 1,300 榀全跨预制箱梁，已配 32 m 模具与 900 吨级运架设备。进度：2026 Q4 完成征地、2028 Q4 完工、试运行后 2029 年商业运营。", en: "Ben Thanh-Can Gio high-speed rail ramps up (Oct 30): VinSpeed and its main-contractor consortium launched full-line construction on Oct 30, peaking at about 10,000 workers, engineers and technicians. Key structures: the underground Ben Thanh station at over 565 m long and about 34 m deep, linked directly to Metro Line 1's Ben Thanh station; a 13 m-diameter TBM tunnel of more than 2 km under the Saigon Port area feeding a 321.7 m cut-and-cover section and a 266 m U-shaped open tunnel; and the cable-stayed Can Gio main bridge with steel truss girder, two A-shaped pylons and a 360 m main span plus over 4 km of approach viaducts. The roughly 54 km line is designed for 350 km/h, cutting city-centre to Can Gio to about 13 minutes; three casting yards will turn out about 1,300 full-span precast box girders over 15 months using 32 m moulds and 900-tonne handling gear. Schedule: land clearance in Q4 2026, completion in Q4 2028, commercial service in 2029 after trials.", src: "https://web.archive.orgmailto:vietnamnetjsc.hcm@vietnamnet.vn/en/10-000-workers-mobilized-to-accelerate-ho-chi-minh-city-high-speed-rail-project-2569946.html" },
    { date: "2026-10-31", tag: "数据 / Data", tagClass: "mid", zh: "河内 10 月 CPI（市统计局）：环比 +0.15%、同比 +5.03%，前 10 个月均值同比 +4.92%。交通类环比 +1.93%（汽油均涨 6.55%、柴油 +0.73%）、同比 +13.71%，前 10 个月 +7.56%（柴油 +41.17%、汽油 +13.54%、航空客运 +79.07%）；住房、电、水、燃料与建材同比 +7.07%，前 10 个月 +7.41%，其中租赁住房 +8.38%、建材 +15.75%、家庭用电 +3.51%、环卫服务 +46.96%、煤油 +43.18%。回落项：食品饮料环比 -0.23%（猪肉 -1.56%、蛋 -1.19%）、家电家具 -0.19%、信息通信 -0.43%（同比 -1.12%）。提示：租赁住房涨幅高于整体 CPI，影响租金回报与持有成本测算。", en: "Hanoi October CPI (city statistics office): up 0.15% MoM and 5.03% YoY, with the ten-month average up 4.92% year-on-year. Transport rose 1.93% MoM (petrol +6.55%, diesel +0.73%) and 13.71% YoY, and 7.56% over ten months (diesel +41.17%, petrol +13.54%, air fares +79.07%); housing, electricity, water, fuel and construction materials were up 7.07% YoY and 7.41% over ten months, including rented housing +8.38%, materials +15.75%, household electricity +3.51%, sanitation services +46.96% and kerosene +43.18%. Decliners: food and beverages -0.23% MoM (pork -1.56%, eggs -1.19%), home appliances and furnishings -0.19%, information and communication -0.43% (down 1.12% YoY). Note: rented housing outpaced headline CPI, which feeds into rental-yield and holding-cost maths.", src: "https://www.vietnam.vn/en/ha-noi-cpi-thang-10-tang-0-15" },
    { date: "2026-10-31", tag: "利好 / Positive", tagClass: "good", zh: "Bất động sản 31/10: Hà Nội mở bán 2 dự án nhà ở xã hội vào tháng 12 từ 898 triệu đồng/căn", en: "Bất động sản 31/10: Hà Nội mở bán 2 dự án nhà ở xã hội vào tháng 12 từ 898 triệu đồng/căn", src: "https://news.google.com/rss/articles/CBMizgFBVV95cUxPMGVxR2N3UDlVOC1mVlhZOHZQREJCSGwza3J1ZmhDWDdnMEg2bTZKRmlGTkdxS2wtVnlPc3lCd3h2MmRYclI3S3N1ak9hZFZ4ejlZTVA4VkN1czV2TDBYaDE4ZHJqZDZrdnRsMG1CRHpOU2tTVDRmUEFUbE5JVG45OUNRRmN1Nm9QS21JQjlILTl0V212ell3c2NzbmE1MnFkUHZGQV9IS0VzQjBqS2JBOE9PcDdBQUY4enlYS2VJV2UyZURDdlQwVjJWVHJfZw?oc=5" },
    { date: "2026-10-31", tag: "数据 / Data", tagClass: "mid", zh: "Thị trường bất động sản điều chỉnh, cơ hội cho người mua nhà", en: "Thị trường bất động sản điều chỉnh, cơ hội cho người mua nhà", src: "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNY2JBcjRhTmFaZ0lQMW1fSDRGTXA1MWlvSHRVZXQtdVQ3ejZYUUNIbF94ZmIwZ1N2TGpfZkRHN3lZRXB4TXdzWC00MndURFBEVUk4dmduaW1LUy1YcTBMOWVEWWNrOTVDZGt6ekRsX0stLTRndHZPTUVDSU5xYjAyd2M3RWt4NFRldjV1eXlQSXF3cndINnphRVZmNmJ5NXVOMFB2NWlBRHI?oc=5" },
    { date: "2026-10-31", tag: "中性 / Neutral", tagClass: "mid", zh: "Hội thảo “Bất động sản du lịch trong chu kỳ mới”", en: "Hội thảo “Bất động sản du lịch trong chu kỳ mới”", src: "https://news.google.com/rss/articles/CBMieEFVX3lxTFBYT0dobVRwMVdoT2NiNlBwczVuRWNkRVRidElBcURWSkdQd1VPZm9PdGZHTzZVS0hGOGh4ekNXLUhWbldMVm5RVXk0UmdLZTVENlljZ0dtY1IwMDc2VFF0M1pMZENDcnh3bGp5R1U4SlJfWUdXWjRjbw?oc=5" },
    { date: "2026-10-31", tag: "数据 / Data", tagClass: "mid", zh: "Dữ liệu nhà ở và thị trường bất động sản phải hướng tới dữ liệu mở", en: "Dữ liệu nhà ở và thị trường bất động sản phải hướng tới dữ liệu mở", src: "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPM090a2ZnRHNNRi1EbjJ1SVllNzYwVHFGU25HeEx6ZGRwR3FmdEdWaU1CRGpZSzJMZE9MTUJ2ZjlFRGxmT2xGdk1kUHJzRUxIQ3JjMmpHSFFRUXRxWFlQeXlXbTFRNzRma2Q5RDlFVlVvT2dqN1RDb2hzc0VTakdZRnFfd19kSkJVWm5iQk1hSUtLVWt5UU9EZ3VrRTdMNmFtV2p2TDNaMEtXWDg?oc=5" },
    { date: "2026-10-31", tag: "政策 / Policy", tagClass: "mid", zh: "Thước đo mới quyết định giá trị bất động sản", en: "Thước đo mới quyết định giá trị bất động sản", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxNTEdzamItQmk4Q3hPLWs2R1Zya0RNQWhoYlBTWGY0YVhLY2dMSzhsSWNYeVhZd3Z4bUotR29JUU9FWXp4bDd0YldpV0hwVjFsMnNuazZPMmVhQmxOSDlnWlF6c3QzTFI5NzdtUTVPLThPeFBtRHhwMkJfR0xsRE83T3NaQQ?oc=5" },
    { date: "2026-10-30", tag: "利好 / Positive", tagClass: "good", zh: "Bất động sản công nghiệp giữ nhịp tăng trưởng", en: "Bất động sản công nghiệp giữ nhịp tăng trưởng", src: "https://news.google.com/rss/articles/CBMimwFBVV95cUxNSlp4cHk3VlZZTzlSYUd1bFp6ZS1NanNPcVZQVldJdGgtVVdINE8zX1RHRU8zWmxScEFMTUt3Ulc1UVhXcVZhQjZNTVRDYVdiNm82YVVwQ2RlcDVnU0NHNkloM3ppOFlJR2phZDFtdW0xdWtUZ19kWk16LVZfX0F4TGNFYzN6MGVDM213YTliTjQ3bUxEUndQbmJpMNIBlwFBVV95cUxPQ2RFTGxkT3BKOVZVZ2szMjNkY2ZHalp0eVc4UWM3T1Z1dlpLMjE4MEFsMi00WGlESzFDeHhoMERhbHZMdzhlMjlNMk1SU05ROXk5Rmt3MllldnpLb2lKTnctSGNDemc5ckRrdnhZU1BLN0NjMlE1eXFSZzNHOFBpNnlJYUJZcEk4aGFTSjBlQ1F5ZnhoX0Nz?oc=5" },
    { date: "2026-10-31", tag: "中性 / Neutral", tagClass: "mid", zh: "Lãi đột biến tại nhiều doanh nghiệp bất động sản", en: "Lãi đột biến tại nhiều doanh nghiệp bất động sản", src: "https://news.google.com/rss/articles/CBMikgFBVV95cUxOcUhNWGVYSGN1d3JnMVkycmQyc0RydFRpdkhWV0lWQVJ0dld0TUgtMnhreDNaY3dfSjVKQVJUblMwVWtCTUVvWnVxdUxVakRweTB2OEI4YmlIalotSGxHUGlERnRfM0JtUHBneUlNcUE2RUxBZENDM0hYaW5jMGdqWXNRM21QY2d1MlhCa2F2UDVzQQ?oc=5" },
    { date: "2026-10-31", tag: "利坏 / Negative", tagClass: "bad", zh: "Chờ \"bắt đáy\" bất động sản, vì sao người mua vẫn chưa xuống tiền?", en: "Chờ \"bắt đáy\" bất động sản, vì sao người mua vẫn chưa xuống tiền?", src: "https://news.google.com/rss/articles/CBMimgFBVV95cUxNenhQMEg0eFF4MndLakJHVlZ0SVhkUnVRRzFkd054bDhIbkZqbGY5R1JlU08zeVJ2enludHhtSnZ4akhXN2FlbjNKMTJHV2ZEeUM3MHRidzIzVVZmQk5NU181bWFuNTU3cFlFVTh3bGZUaFA2U0NKMUtzV0hHNjZDV18tZU1nbVJDVlZRbHNKUzlxY1p2bDRBdzJR?oc=5" },
    { date: "2026-10-30", tag: "利率 / Rates", tagClass: "good", zh: "利率（10/30）：10 月累计近 30 家银行下调定存挂牌（SBV 10/18 第 9608 号公文要求 6 个月以上至少降 0.5pp，10/21 第 9736 号要求全渠道实质下调并按报备系统考核，未达标可下调信贷增长指标），但企业融资成本仍处高位：DXS-FERI 预测最可行情景下 2026 年底浮动贷款利率仍维持 11–13%/年；BIDV Home 业务发展总监陈月琼花认为当前降息偏「支持生产」性质，待 2027 年公共投资与征地补偿资金放量、货币乘数回升、银行吸存流动性改善后才可能出现更广泛降息。业内提醒：挂牌利率下降不等于存量贷款成本下降，需关注优惠期后利率与调整公式。", en: "Rates (Oct 30): nearly 30 banks have cut listed deposit rates in October (SBV Official Letter 9608 of Oct 18 required at least 0.5pp off 6-month-plus tenors, and Letter 9736 of Oct 21 demanded a real across-channel cut, monitored via reporting with credit-growth targets at risk). Corporate funding costs nevertheless stay high: DXS-FERI expects floating lending rates at 11-13% through end-2026 in its most likely scenario, and BIDV Home's Tran Nguyet Quynh Hoa argues the current cuts are mainly production-support in nature, with broader relief only after public-investment and land-compensation cash flows lift the money multiplier in 2027. Market note: lower listed rates do not automatically cut existing loan costs — check post-promo rates and repricing formulas.", src: "https://news.qq.com/rain/a/20261030A0B3FH00" },
    { date: "2026-10-30", tag: "政策 / Policy", tagClass: "mid", zh: "10/30 上午国会全体会议审议《房地产经营法》修订草案：建设部长陈鸿明说明——草案第 18 条第 5 款明确收定金条件，第 5 条第 5 款禁止在房地产不具备经营条件时收取定金，投资商须完成包括施工至地基在内的全部程序；购房价 5% 尾款由银行担保、投资商须履行至验收交房发证；参与项目企业须满足 15% 自有资金条件，地方须严格审核。代表意见：武文进（海防）要求比对在售房源清单与获批规划、公开合格房源并预警违规项目，追缴违法收益、强制赔偿；阮文辉（兴安）要求堵住以「预留费/登记费」等名义变相集资；阮氏越娥（海防）要求合同转让强制登记核实以防一房多卖。数据库进度：截至 7/30 系统已开 12,200 个账户、记录 66,302 笔交易、816 个项目、18,106 份经纪执业证（其中 3,746 份经系统办理）。", en: "Oct 30 morning plenary on the draft amended Real Estate Business Law: Construction Minister Tran Hong Minh said Article 18(5) sets deposit conditions and Article 5(5) bans deposits when the property is not yet eligible for trading, with investors required to complete all steps including construction to foundation level; the final 5% of the price is bank-guaranteed and must be honoured through acceptance, completion and title handover; developers must meet the 15% own-capital requirement, enforced by localities. Deputies asked for checks of for-sale unit lists against approved plans, publication of compliant units and warnings on violating ones, recovery of illegal gains and compensation (Vu Van Tien, Hai Phong); closing loopholes where reservation or registration fees disguise fundraising (Nguyen Van Huy, Hung Yen); and mandatory registration of contract transfers to prevent double-selling (Nguyen Thi Viet Nga, Hai Phong). Database: by July 30 the national system held 12,200 accounts, 66,302 transactions, 816 projects and 18,106 broker certificates (3,746 processed online).", src: "https://www.vietnam.vn/en/dai-bieu-quoc-hoi-de-xuat-xu-ly-nghiem-chu-dau-tu-vi-pham-tang-co-che-bao-ve-nguoi-mua-nha" },
    { date: "2026-10-30", tag: "数据 / Data", tagClass: "mid", zh: "10/30 下午国会讨论 2026 年经济社会发展计划执行情况与 2027 年计划：政府报告称 15 项主要指标预计 14 项达标或超额，但宏观管理与通胀控制压力仍大、存贷款利率仍处高位、中小企业获取土地与信贷仍困难；前 9 个月 GDP +9.01%（Q3 +9.95%）、CPI 均值 +4.52%、预算收入约 3.06 千万亿盾（+14%）、公共债务约 GDP 33–34%、赤字约 4.1%，生产经营与优先领域贷款利率已降 1.5–2pp。2027 年定为「加速突破年」，目标 GDP 增长 ≥10%、预算收入 +9.1%、公共投资拨付 100%。", en: "Oct 30 afternoon: the National Assembly debated the 2026 socio-economic plan and the 2027 plan. The government expects 14 of 15 key targets met or exceeded, while flagging pressure on macro management and inflation, still-high deposit and lending rates, and SME difficulty in accessing land and credit. Nine-month GDP grew 9.01% (Q3 +9.95%), average CPI rose 4.52%, budget revenue reached about VND 3.06 quadrillion (+14%), public debt was around 33-34% of GDP with a deficit near 4.1%, and lending rates for production and priority sectors were cut 1.5-2pp. 2027 is billed as a year of acceleration, targeting GDP growth of at least 10%, revenue +9.1% and 100% public-investment disbursement.", src: "https://en.vietnamplus.vn/vietnam-targets-growth-of-at-least-10-in-2027-while-safeguarding-macroeconomic-stability-post354551.vnp" },
    { date: "2026-10-30", tag: "新盘 / Launch", tagClass: "good", zh: "10/30 新盘：Win City（胡志明市西部、环城 3 号公路与陈文桥街交叉口附近）启用高架销售中心 Victory Gallery，35 家战略分销商约 1,200 名销售到场。项目占地 13.18 公顷、分 3 区、18 栋塔楼、近 6,000 套，首推公寓 3,290 万盾/㎡起（约 1,300 美元/㎡），首付 10%（约 1.6 亿盾），可选付款期延至近 4 年、交房前仅付 15%，或 100% 利息补贴；A 区 Prime Majestic 定位高端，含 42 层 Win Mark 商业综合体。", en: "Oct 30 launch: Win City (western HCMC, near the Ring Road 3 and Tran Van Kho bridge junction) opened its elevated Victory Gallery showroom with about 1,200 agents from 35 strategic distributors. The 13.18 ha project has three zones, 18 towers and nearly 6,000 apartments; first-release units start at VND 32.9 million/sqm (about USD 1,300/sqm) with a 10% down payment (roughly VND 160 million), payment stretched to nearly four years, 15% paid before handover, or a 100% interest subsidy. Zone A, Prime Majestic, is positioned as the high-end segment with a 42-storey Win Mark retail tower.", src: "https://www.vietnam.vn/zh-cn/the-win-city-ra-mat-victory-gallery-gallery-tren-cao-doc-ban-tai-tay-tphcm" },
    { date: "2026-10-30", tag: "新盘 / Launch", tagClass: "good", zh: "10/28 河内新盘：Epic Holdings 发布高端住宅品牌并推出「Timeless Collection」首个项目 Tara Maison（美亭，国家体育场对面、慈廉混合用地）：占地 23,810 ㎡、建筑密度 26%、地上 27 层/地下 3 层、294 套，预计 2028 Q4 交付；投资方 ACE My Dinh，总包拟由 Sol E&C 与 Ricons 承担。开盘时间与价格尚未公布，待官方公示。", en: "Oct 28 Hanoi launch: Epic Holdings unveiled its high-end residential brand and the first Timeless Collection project, Tara Maison (My Dinh, opposite the national stadium in the Tu Liem mixed-use area): 23,810 sqm site, 26% density, 27 floors above ground and 3 basements, 294 apartments, handover expected in Q4 2028. Investor is ACE My Dinh, with Sol E&C and Ricons tipped as main contractors. No opening date or pricing has been announced yet.", src: "https://www.vietnam.vn/zh-cn/epic-holdings-gia-nhap-cuoc-dua-bat-dong-san-hang-sang-tai-ha-noi" },
    { date: "2026-10-30", tag: "市政 / Infrastructure", tagClass: "good", zh: "10/30 市政：①ACV 通知同奈市人委会，隆城机场计划自 2026-12-24 0 时起商业运营；②胡志明市第十一届市议会第六次（专题）会议通过决议，允许在越南国际金融中心（VIFC）发行市政债与项目债，为中长期基建开辟融资渠道；③市交通厅 10/29 通报：年底前 20 个交通项目需石料 191 万 m³、建筑砂 55 万 m³、平整砂 185 万 m³、填方土 370 万 m³，砂产能仅满足建筑砂 50%、平整砂 38%，缺口拟用地铁 2 号线挖方土补充填方。", en: "Oct 30 infrastructure: (1) ACV told the Dong Nai city government that Long Thanh airport is scheduled to begin commercial operations at 00:00 on Dec 24, 2026; (2) the HCMC People's Council, at its sixth (special) session, approved issuing municipal and project bonds at the Vietnam International Financial Centre (VIFC), opening a medium- and long-term funding channel for key infrastructure; (3) the city transport department said 20 road projects need 1.91 million m3 of stone, 550,000 m3 of construction sand, 1.85 million m3 of levelling sand and 3.7 million m3 of fill before year-end, with sand output covering only 50% of construction-sand and 38% of levelling-sand demand — Metro Line 2 excavation spoil is to make up fill shortfalls.", src: "https://www.vietnam.vn/en/20-du-an-giao-thong-tp-hcm-can-hang-trieu-m3-vat-lieu-thieu-nhat-la-gi" },
    { date: "2026-10-30", tag: "利好 / Positive", tagClass: "good", zh: "10/30 社房：①富寿省按第 303/NQ-CP 号决议（2026–2030 年 40,000 套，含社房 33,000 套、租赁房 7,000 套）锁定 8 个社房项目于 2026 Q4 开工，合计近 6,000 套、总投资逾 95,000 亿盾（含翠云 1,570 套/30,070 亿盾、文富 3 区 1,040 套/18,260 亿盾）；②胡志明市人委会计划将扩建黎明春工业区 109.91 公顷转为社房用地，缩短工人通勤距离。", en: "Oct 30 social housing: (1) Phu Tho province, under Resolution 303/NQ-CP (40,000 units for 2026-2030, including 33,000 social and 7,000 rental homes), has lined up eight projects to break ground in Q4 2026 totalling nearly 6,000 units and over VND 9,500 billion, including Thuy Van at 1,570 units (VND 3,007 billion) and Van Phu zone 3 at 1,040 units (VND 1,826 billion); (2) the HCMC People's Committee plans to convert 109.91 ha of the expanded Le Minh Xuan industrial park into social housing land, cutting workers' commutes.", src: "https://www.vietnam.vn/en/phu-tho-tang-toc-khoi-cong-gan-6-000-can-nha-o-xa-hoi-trong-quy-iv" },
    { date: "2026-10-30", tag: "数据 / Data", tagClass: "mid", zh: "汇率（10/30）：SBV 参考汇率 25,637（较 10/29 降 7 盾），±5% 区间 24,355–26,919（另有稿记下限 24,335）。早 8:25 Vietcombank 买入 25,640/卖出 26,020（各 -20）、BIDV 25,635/26,015（-15，另有稿记 25,625/26,005）、Agribank 25,640/26,020、TPBank 25,653/26,033；美元指数自两周高位回落至 102.17。美联储 10/28 维持 3.75%–4.00%（10:2），主席 Warsh 未就后续加息给出明确信号，但 9 月 PCE 加速、CME 12 月加息概率仍约 80%；ECB 10/29 维持不变、BOJ 10/30 预计按兵不动。fxRate 随银行卖出价下调至 26,020。", en: "FX (Oct 30): the SBV set the reference rate at 25,637, down 7 dong from Oct 29, with the +/-5% band at 24,355-26,919 (one report cites 24,335). At 08:25 Vietcombank quoted 25,640 bid / 26,020 ask (-20 each), BIDV 25,635/26,015 (-15; a second report shows 25,625/26,005), Agribank 25,640/26,020 and TPBank 25,653/26,033, while the dollar index eased from a two-week high to 102.17. The Fed held at 3.75%-4.00% on Oct 28 by a 10-2 vote; Chair Warsh gave no clear steer on further hikes, but faster September PCE inflation keeps CME odds of a December hike near 80%. The ECB stood pat on Oct 29 and the BOJ was expected to hold on Oct 30. fxRate has been marked down to 26,020 on the bank selling rate.", src: "https://en.vietnamplus.vn/reference-exchange-rate-down-7-vnd-on-october-30-post354552.vnp" },
    { date: "2026-10-30", tag: "数据 / Data", tagClass: "mid", zh: "Giá bất động sản sẽ đi về đâu?", en: "Giá bất động sản sẽ đi về đâu?", src: "https://news.google.com/rss/articles/CBMid0FVX3lxTE5ZVGczMk0yVU9oTXlZeFdlMWZtWHZFZ3Q2WmQ3VlJDSWc3akhVOVlPSVluVEU3Z3U5NElpWVNtdmphcGlWRHgxbENpd3RoX0pfZ0syb3NEMVJpa3B5bjFZNTBLYWVwYVM4LUg4aHhIRklzNmx1OXFv?oc=5" },
    { date: "2026-10-30", tag: "中性 / Neutral", tagClass: "mid", zh: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà", en: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxPTmczRmNZWEtlaW45R0R4ODd0akdVTkpaa0lSYkpQWnVyam1aQnpCeHY0NFc1Yk51R00xQk43Z3ZFVGJ1aU93VFM0VHZLeVlyNmtfdmNoRjV2dlJKaG1VaHpxT2FZbVFBaWM2d3JLd0JjeEtCdmxicVAyUkU0N0RJakxqY01JcmZHS1pxZVpTOE9yVHlGWEtUZ1dmdmlOZkdNQ0Fqa1V3?oc=5" },
    { date: "2026-10-29", tag: "数据 / Data", tagClass: "mid", zh: "Thị trường bất động sản sắp nhiều biến động: Cơ hội nào cho người mua nhà?", en: "Thị trường bất động sản sắp nhiều biến động: Cơ hội nào cho người mua nhà?", src: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPazY0dXhoS0RSWGwwbXQzbkVuOU1xeDQyWkhNanZmNHR5UlNPRzF5YjZDRkdhclpRNHRfZHFaTFFQbmhPV0dLdl8yWkJNbWNWSUVOZFlvcWYxcGZuOExOUWhTblFHbkRfcmFjYTJQb3FNbk1BQ0pNdHpRVG5jcHR5OEMwY3NnVDRySk1vNEQxVzdqM3dKT3NoY0ZScjZMckEyZEwyaVhVVlFDQQ?oc=5" },
    { date: "2026-10-30", tag: "中性 / Neutral", tagClass: "mid", zh: "“Vòng quay vốn” mới cho doanh nghiệp bất động sản", en: "“Vòng quay vốn” mới cho doanh nghiệp bất động sản", src: "https://news.google.com/rss/articles/CBMiigFBVV95cUxPb1dadjdWTVJ1bGV6VWtYUWN6dUdSSWVkVHhHb2dWb3N1aF9BMG9MTkdpUHdhenRyWXI2bGtxckJFZE5HTmVvZmxLZEo0Q3ZrNldSU1ByQkw2S0JoaHNUeDc4dEFIeGs5VlNfQkl3Q1g3UWxsaWlHRmxZRGk5aFIyYmNIaDIyOUlIREE?oc=5" },
    { date: "2026-10-30", tag: "新盘 / Launch", tagClass: "good", zh: "Khơi thông nguồn lực từ các dự án bất động sản", en: "Khơi thông nguồn lực từ các dự án bất động sản", src: "https://news.google.com/rss/articles/CBMiigFBVV95cUxQTDBFZmlJT2h2cVlXbmR6SDluOU1RLTczZ2pFOWZDaVN6SWV2QTg4dzVkTUVaa2puN0pwRmtleW00WTNXRzdWTVJ2ZldJamhrcUVpYXR4WDJ5MWZZRC1nd0FnRTF1emoyenYxclotcWxOTHAwWUxHNEI1SWtINFVOczNHVGRvR2hST3c?oc=5" },
    { date: "2026-10-30", tag: "中性 / Neutral", tagClass: "mid", zh: "Minh bạch thông tin bất động sản để bảo vệ người mua nhà", en: "Minh bạch thông tin bất động sản để bảo vệ người mua nhà", src: "https://news.google.com/rss/articles/CBMipAFBVV95cUxPYWtpTWN5SDRVRWhkMDRWbTFJOUI2Q0xIOXo1SFdjeWZTTF9vSy0tclFaSUMwRTFQSmpMWVkxWDVDTjB6RHRaSjhRcGVOMEZBeVUxd0w5Q3Q4VVRsNnpIX2JJbDdUaEdBcWVxTVRITHJxcGpPT2RCTTlUYWRxRy1qMDFQMkZjX1FUaWUwVXZ1c29vVXh4UkJEcVM3a3l2d0ZaMjdrOA?oc=5" },
    { date: "2026-10-30", tag: "中性 / Neutral", tagClass: "mid", zh: "Thế 'lưỡng nan' của doanh nghiệp bất động sản", en: "Thế 'lưỡng nan' của doanh nghiệp bất động sản", src: "https://news.google.com/rss/articles/CBMijwFBVV95cUxQelhMVUw3RWpoNkpON1BmbGR3OU13aDBMalRhbmZjM2tQa3hiamU4WWlJelRobDd3QXRSOUY0UWRpSkt3NUYwc3dxaVNqWVByWGJ1MV85LUdneUtJYVRsVHNfYWMyU2dlSS1LWFNwalh4eDJfeUU5cUdvYmlVRGxBdl93cm0yVkhFZnVlenExUQ?oc=5" },
    { date: "2026-10-30", tag: "利坏 / Negative", tagClass: "bad", zh: "Siết quản lý kinh doanh bất động sản để chặn rủi ro cho người mua nhà", en: "Siết quản lý kinh doanh bất động sản để chặn rủi ro cho người mua nhà", src: "https://news.google.com/rss/articles/CBMisAFBVV95cUxOcGtBRlJqbTZmbi0weUxRN1AtVTl0OWV1WkpzTk5wSk9YWXFXTzE5NXZjckpXUHFNSVY2ZVNvbHRqcXMtemtiQkVJZlJtb2VNOTlhaHg1cVhKZXZJSzRrYTJJUndMYmhmV1ZkSF9VOFBUckp4UTA5NjI2Wm9uVDRlTVVUMlV6VG81MWllMzZtMGFHcXJpTHlPVTBpeW83ZWRZOUt5OWhCNnFzdE95dVI2VA?oc=5" },
    { date: "2026-10-29", tag: "利率 / Rates", tagClass: "good", zh: "定存 10/29：MSB、VietABank、GPBank 同日降 0.5 个百分点（6–36 月），10 月累计已有 29 家银行下调。MSB 线上（到期付息）1–5 月 4.75%、6–11 月 5.8%、12 月 6.3%（该行最高）、13–24 月 6.1%、36 月 5.6%；专属利率：≤50 亿盾且首次开户单账户，6 月 6.5%、12/15/24 月 7.0%；VIP 存款 ≥5,000 亿盾 12/13 月 9.0%。VietABank 线上 1–2 月 4.7%、3–5 月 4.75%、6–11 月 5.5%、12–13 月 5.6%、15–18 月 5.7%、24–36 月 5.8%（柜面 6–18 月 5.3–5.5%、24–36 月最高 5.6%）。GPBank 线上 1–2 月 3.6%、3–5 月 3.7%、6–8 月 4.75%、9 月 4.85%、12–36 月 5.05%（柜面 12–36 月最高 4.6%）。注：此前本表把 GPBank 与 NCB/Vikki 并列为 9.1–9.35% 线上促销，与本次挂牌不符，已按 10/29 挂牌口径更正。", en: "Deposit rates Oct 29: MSB, VietABank and GPBank each cut 0.5pp on 6-36 month terms, taking the October total to 29 banks. MSB online (interest at maturity): 4.75% for 1-5m, 5.8% for 6-11m, 6.3% for 12m (its high), 6.1% for 13-24m, 5.6% for 36m; special rates of 6.5% (6m) and 7.0% (12/15/24m) for first-time single-account savers up to VND 5bn, and 9.0% for VIP balances from VND 500bn at 12-13m. VietABank online: 4.7% (1-2m), 4.75% (3-5m), 5.5% (6-11m), 5.6% (12-13m), 5.7% (15-18m), 5.8% (24-36m); counter 5.3-5.5% at 6-18m and up to 5.6% at 24-36m. GPBank online: 3.6% (1-2m), 3.7% (3-5m), 4.75% (6-8m), 4.85% (9m), 5.05% (12-36m); counter up to 4.6%. Note: this file previously grouped GPBank with NCB/Vikki as 9.1-9.35% online promos, which does not match the Oct 29 board and has been corrected.", src: "https://www.vietnam.vn/en/lai-suat-ngan-hang-ngay-29-10-2026-ba-ngan-hang-giam-0-5-diem-phan-tram-ky-han-6-36-thang" },
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
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  /* ---------- 热议话题 / Trending Topics（backend 每日 01:00 自动刷新） ---------- */
  hotTopics: [
    { date: "2026-11-01", rank: 1, heat: 100, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Bất động sản 2026-2027: Không còn thời “mua gì cũng tăng”", titleEn: "Real estate market 2026-2027: The days of \"everything going up in price\" are over.",
      zh: "Bất động sản 2026-2027: Không còn thời “mua gì cũng tăng”", en: "Real estate market 2026-2027: The days of \"everything going up in price\" are over.", vi: "Bất động sản 2026-2027: Không còn thời “mua gì cũng tăng”",
      srcName: "Báo Thanh tra", src: "https://news.google.com/rss/articles/CBMisAFBVV95cUxOeUwzWFVJSXBRLWxSMDJ3a3pNdzVKT0Fodm05ekoyeGpad0ItM3Y5VmdYZ25zVndOalVEM0VBaURGanFwR1o2VVBCanZsdktpNDJWVTVkLVh5Z1VFQ3Z0SzRsTHVXajdyVlpzdF9WRjVjT3lXWlEtWjJvbGlzRjRPd0dldkNueTZCVDRHR2g1UThQd1A2dl9tajFjeGl1bm5Bb3JGc0p2YUZVcHFENGhhaw?oc=5",
      coverage: 5, related: [{ n: "Báo và Phát thanh Truyền hình Hà Nội", u: "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNY2JBcjRhTmFaZ0lQMW1fSDRGTXA1MWlvSHRVZXQtdVQ3ejZYUUNIbF94ZmIwZ1N2TGpfZkRHN3lZRXB4TXdzWC00MndURFBEVUk4dmduaW1LUy1YcTBMOWVEWWNrOTVDZGt6ekRsX0stLTRndHZPTUVDSU5xYjAyd2M3RWt4NFRldjV1eXlQSXF3cndINnphRVZmNmJ5NXVOMFB2NWlBRHI?oc=5" }, { n: "Báo Gia Lai điện tử", u: "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPM090a2ZnRHNNRi1EbjJ1SVllNzYwVHFGU25HeEx6ZGRwR3FmdEdWaU1CRGpZSzJMZE9MTUJ2ZjlFRGxmT2xGdk1kUHJzRUxIQ3JjMmpHSFFRUXRxWFlQeXlXbTFRNzRma2Q5RDlFVlVvT2dqN1RDb2hzc0VTakdZRnFfd19kSkJVWm5iQk1hSUtLVWt5UU9EZ3VrRTdMNmFtV2p2TDNaMEtXWDg?oc=5" }, { n: "VTC News", u: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPazY0dXhoS0RSWGwwbXQzbkVuOU1xeDQyWkhNanZmNHR5UlNPRzF5YjZDRkdhclpRNHRfZHFaTFFQbmhPV0dLdl8yWkJNbWNWSUVOZFlvcWYxcGZuOExOUWhTblFHbkRfcmFjYTJQb3FNbk1BQ0pNdHpRVG5jcHR5OEMwY3NnVDRySk1vNEQxVzdqM3dKT3NoY0ZScjZMckEyZEwyaVhVVlFDQQ?oc=5" }] },
    { date: "2026-10-31", rank: 2, heat: 91, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Lãi đột biến tại nhiều doanh nghiệp bất động sản", titleEn: "Lãi đột biến tại nhiều doanh nghiệp bất động sản",
      zh: "Lãi đột biến tại nhiều doanh nghiệp bất động sản", en: "Lãi đột biến tại nhiều doanh nghiệp bất động sản", vi: "Lãi đột biến tại nhiều doanh nghiệp bất động sản",
      srcName: "CafeF", src: "https://news.google.com/rss/articles/CBMikgFBVV95cUxOcUhNWGVYSGN1d3JnMVkycmQyc0RydFRpdkhWV0lWQVJ0dld0TUgtMnhreDNaY3dfSjVKQVJUblMwVWtCTUVvWnVxdUxVakRweTB2OEI4YmlIalotSGxHUGlERnRfM0JtUHBneUlNcUE2RUxBZENDM0hYaW5jMGdqWXNRM21QY2d1MlhCa2F2UDVzQQ?oc=5",
      coverage: 4, related: [{ n: "Báo Thanh Niên", u: "https://news.google.com/rss/articles/CBMijwFBVV95cUxQelhMVUw3RWpoNkpON1BmbGR3OU13aDBMalRhbmZjM2tQa3hiamU4WWlJelRobDd3QXRSOUY0UWRpSkt3NUYwc3dxaVNqWVByWGJ1MV85LUdneUtJYVRsVHNfYWMyU2dlSS1LWFNwalh4eDJfeUU5cUdvYmlVRGxBdl93cm0yVkhFZnVlenExUQ?oc=5" }, { n: "Báo Nhân Dân điện tử", u: "https://news.google.com/rss/articles/CBMiigFBVV95cUxPb1dadjdWTVJ1bGV6VWtYUWN6dUdSSWVkVHhHb2dWb3N1aF9BMG9MTkdpUHdhenRyWXI2bGtxckJFZE5HTmVvZmxLZEo0Q3ZrNldSU1ByQkw2S0JoaHNUeDc4dEFIeGs5VlNfQkl3Q1g3UWxsaWlHRmxZRGk5aFIyYmNIaDIyOUlIREE?oc=5" }, { n: "CafeLand", u: "https://news.google.com/rss/articles/CBMisAFBVV95cUxPMXByNnRtYU5RS194RzBxOEVmdWptOS05S3o1NnZzMmxWS3hxUFAwX3hIdmp6U2xkbG5KdVg0T2F0ekNtUXBfdU5YTXFleUphWEpZRC1uaEZvYVpTR0NPYmNIdHJjcmc4dzZ2YVlndU1mVUFKZEZCVGJGekpTcXJxZ2xyaFk0VFlXcU4tdnpxWDhuQnotVENXZzkwRkxOdDhrcVBCb2d0dmtkN1p3WEw4Nw?oc=5" }] },
    { date: "2026-10-30", rank: 3, heat: 100, tag: "新盘 / Launch", tagClass: "good", raw: true,
      titleZh: "64 chung cư cũ tại TP. HCM vào diện tháo dỡ, xây dựng lại", titleEn: "64 chung cư cũ tại TP. HCM vào diện tháo dỡ, xây dựng lại",
      zh: "64 chung cư cũ tại TP. HCM vào diện tháo dỡ, xây dựng lại", en: "64 chung cư cũ tại TP. HCM vào diện tháo dỡ, xây dựng lại", vi: "64 chung cư cũ tại TP. HCM vào diện tháo dỡ, xây dựng lại",
      srcName: "VietnamFinance", src: "https://news.google.com/rss/articles/CBMimgFBVV95cUxNanJCNnhBeW5MQmZvUlJKR0s0NzlTYnNTOTVQbS1TRVFtanVFcTI1OEJ0ckNITTlDWUhXRmtFYnB1eGRoWFlVYURUai1wLV8zZTJ0Y3cwdUJucnlTRG1XM0sySU0zcHFOd3h4LVB1XzZGZFcwaHpjMk5iMjViQTVlLS1CMUhsS0JBTWlfNzFadXlFLTlCcDhiU3BR?oc=5",
      coverage: 8, related: [{ n: "Báo Thanh Niên", u: "https://news.google.com/rss/articles/CBMisAFBVV95cUxNbEZYUXpieGtxemx5TjlaTXBQQUVqM3VsNDJ2LW1tT3lYdFFpbU9pYnVMUktmX1hoVTF0SUtOVEJwMUNpRVZza05JY19STlluSEEtU2pHWDFsMnIzOWhvcklmVm94V1FfckVjcFo5c2xMMlpQZ1FLbUFVU1dKRXI1bDE4N0JoYlRzQkUwdXc0RXg1Z3BueERKWHhPQzhzZDM4WmNNZVRfVlItRDE5SE51Zw?oc=5" }, { n: "Người Đô Thị", u: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPU29qNmFnR0lLTlRmaTZSQk1xa3Bpek1hMjFsSXR1M0dKYWJNZmVEckxEYl9iaGswTEowUlEtWWdEU21iRFNGRXVhZzRBS3YtVm9mSnUxdkpCTVgydXROS2xnTlhTS1dNOXZKV2hVbktlcXdlczNROHRCcG0yU2Fuc3h3YXhQa1VPZmlNeThzWXI4WmUxaFRYUDJsOHdVc3BzcUNiVHB2ZXdUdw?oc=5" }, { n: "Tạp chí Tài chính Doanh nghiệp", u: "https://news.google.com/rss/articles/CBMiowFBVV95cUxQcEFuTjhFSWxyMHB3aDhpM2FJc2hkOHZDYjZGRElacWVpYXYtaHBwSGY4ck1Td0ZRZkx6ZDhKdmdJQ2VaM2VPSkh2eTVjWjU1cFVyamcxWDJjcW9tTGxzWEtVallKelh3Sm1tUlo4UUUtWi1fWndSRzR4TzRiQTJVSkphRWN1eEJaMld1bmo3RUt0TldhNFdNbk1zSHM5d3Q1bTMw?oc=5" }] },
    { date: "2026-10-30", rank: 4, heat: 91, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Chuyên gia hiến kế phát triển bất động sản du lịch tại Gia Lai", titleEn: "Chuyên gia hiến kế phát triển bất động sản du lịch tại Gia Lai",
      zh: "Chuyên gia hiến kế phát triển bất động sản du lịch tại Gia Lai", en: "Chuyên gia hiến kế phát triển bất động sản du lịch tại Gia Lai", vi: "Chuyên gia hiến kế phát triển bất động sản du lịch tại Gia Lai",
      srcName: "Laodong.vn", src: "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQNy1EcmxJYlNQZGtBNXk3VmUzQ2tDRmwxTjRWSi1Qb25kRXFRV3RIVmhsZ2tMc3hybGplTXpGUEVYdDNuNG5wQjJiYmwyWXBwc1hkWHlkTDI4ekVmYTBiQmJud0o0cF9PMC13OUJXSjBuZzRzMDB5bWQ1eEI0NHBWQ2hPT2ZTb3ItUWZ0RmVDSzExRkgxc0ktYUQ0R09RbjM3OGNQWWZDeGNPUQ?oc=5",
      coverage: 4, related: [{ n: "Vietnam.vn", u: "https://news.google.com/rss/articles/CBMimAFBVV95cUxQdHhqeU54VjFCYmtTZ1dZNkNEOThSMkd2NHBMbG1wcE1vRDRrdXpJaVlha2wwRnNNWUtYemdXTWczT04xMmN6b2FtSy02cW9sV0ZORGI5eXExMElzQ0xFYVAtTTQzaGZiVER6Z2dsOXM5bEVMWlRlMmlBMVpqOWxOSDJkckRwSk5pc09kLTNxS2FMay1hc01Ebw?oc=5" }, { n: "VnExpress", u: "https://news.google.com/rss/articles/CBMimwFBVV95cUxOb2VFS1k2aTlLQW11WnBIMVFmNWY1T1ljLXdwS1RJVVlVT1ZRS202bHkyVXU5ZE5SZDEycVcxMzZyQWtXZmlDUTZkSnh1NTFaelFUOFdDLThDTHlyNUZOZzFOaEc4MFlZYUtFNWRaSjBiMGhpS2M0dHlnTDVXci1Ga19MZmpBNWNKVEQtR3RKYUxLU3QyVzRQd3Jrcw?oc=5" }, { n: "Báo Xây dựng", u: "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPQ2lPQUJ5OVZab2ZMVnBmMGl5Mlpha0VTTTNvYW5xQ2ZEWGVtSmw1OTE2Vy1uOFdXUkVJWUpUUzgyU09KTE5UWWR0Z1VSa0dSeEQzeW9ybXBseVhYUjI3YWpJakd6VU9haGIyVXBCZVdiSGpKaWh2Q3NPTXBXbngyWmVhWmJfMTVER2ZGa1RVNWpxd3h0SkZYQXBUc0liRFlYTENHZEczMGUwbFQ2SlpiV0xZSDVzcEh4bGY0dFJjUk4?oc=5" }] },
    { date: "2026-10-31", rank: 5, heat: 80, tag: "政策 / Policy", tagClass: "mid", raw: true,
      titleZh: "Thước đo mới quyết định giá trị bất động sản", titleEn: "Thước đo mới quyết định giá trị bất động sản",
      zh: "Thước đo mới quyết định giá trị bất động sản", en: "Thước đo mới quyết định giá trị bất động sản", vi: "Thước đo mới quyết định giá trị bất động sản",
      srcName: "theleader.vn", src: "https://news.google.com/rss/articles/CBMigwFBVV95cUxNTEdzamItQmk4Q3hPLWs2R1Zya0RNQWhoYlBTWGY0YVhLY2dMSzhsSWNYeVhZd3Z4bUotR29JUU9FWXp4bDd0YldpV0hwVjFsMnNuazZPMmVhQmxOSDlnWlF6c3QzTFI5NzdtUTVPLThPeFBtRHhwMkJfR0xsRE83T3NaQQ?oc=5",
      coverage: 3, related: [{ n: "VnExpress", u: "https://news.google.com/rss/articles/CBMijAFBVV95cUxPeW5hU2puLUhlUXdsXzhEekJTbGV0RjNqM2Y4Si1VZF84enRQNTNlSzAyaUloRV9zaDBlR2RuRDBjRGwwdlVxS3hxcDFfc2E5NHY3THZDaGxCc1BXQVpIdW1DTF9aR3BxQWVvS2tXT0JPUXk0dTMwN2FMNjcwc3JRRXRJTl92Zl9BNTJvdg?oc=5" }, { n: "Tin tức 24h", u: "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPSmpvZzkzSWtrTGFwYnUwdTlCbXNIaG51VTd5NFVqc0RvYTRNM3hLczh4aGVvbDNtWmdrR1NuQnZhRWRqMTlRenpPZGZmcHNwNVYxZ2pkNnNtSHRzTjZXVThVT0VTTnUwcTllQjFMYk9OSVBjUXdVVkhaNEhqZlBXRmlJVzYwdDVoc3NQMmN0ekVMVjlEZGlYVjlWQTdKajdUSjNCcmJPMV85OVhVTXdramZPalJZa0tMZ3ZWYmZock41dkpFWVhKWVh5cjJhcUZx?oc=5" }] },
    { date: "2026-11-01", rank: 6, heat: 80, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Đưa thị trường bất động sản về đúng giá trị thực", titleEn: "Đưa thị trường bất động sản về đúng giá trị thực",
      zh: "Đưa thị trường bất động sản về đúng giá trị thực", en: "Đưa thị trường bất động sản về đúng giá trị thực", vi: "Đưa thị trường bất động sản về đúng giá trị thực",
      srcName: "Báo Đại Đoàn Kết", src: "https://news.google.com/rss/articles/CBMigAFBVV95cUxPaFBFT1hTbURiYmw3cXhOX1pwdTdhRGFYWU5EZmw3TlFfQlJxSV9qNDVEdXQ2ckFCYWpnSzJleEt3VXlMVXpsRDlzX3hVQmhVWU9vazdseGpzVjd2d0M5RFVwZXF1cWtoVTJRdGxieDJySlQ5bkNDM192VDd0dUQ1dg?oc=5",
      coverage: 3, related: [{ n: "Doanh nghiệp và Tiếp thị", u: "https://news.google.com/rss/articles/CBMitgFBVV95cUxNTU04THpvMjJPMHNSc29OZUlrNlNTOTdvOXZhb3F1OHZock5aOGNtR2FXVm0zbGNYT1FmVGI4Z1RYV3R3ZUNxQ0MwQVVRajhXVXQybDdUdjVySG54MHRWa0NpWXdoeTJ5bFlwVUFNaW91QkYwMEJzNE9fMFVvQ1hhUHhTWGFFdE1EX0I3X2xhYWE4WFFhU2V1cHJzanBXaDZPcjJ4Q1Uway1ZdGJmV3cxd1laSk8tdw?oc=5" }, { n: "Báo Tin tức và Dân tộc", u: "https://news.google.com/rss/articles/CBMipgFBVV95cUxOS0cxQ1pCbUNwU2VVQVAwTGpqLTBYeHB4bXE4N3dsWkpmMThnX0dRSEJHLVhjWWxjcDZyUjN6MHFyTmtqY0lGdnF6T3V5d0Q4UFdBbjhUSC10UUV0aWduMi1Ic2Z6S3Atb1p2QVVHbE41Nm4xOFUzM0Z0bVMzbUwxdmNpNUNBdnFJMUFTUlpvSkg5c1NTU1hDYXpBUTl6bHN3TFFwVkh3?oc=5" }] },
    { date: "2026-10-28", rank: 7, heat: 80, tag: "政策 / Policy", tagClass: "mid", raw: true,
      titleZh: "Nhiều điểm mới trong dự thảo Luật Kinh doanh bất động sản sửa đổi", titleEn: "Nhiều điểm mới trong dự thảo Luật Kinh doanh bất động sản sửa đổi",
      zh: "Nhiều điểm mới trong dự thảo Luật Kinh doanh bất động sản sửa đổi", en: "Nhiều điểm mới trong dự thảo Luật Kinh doanh bất động sản sửa đổi", vi: "Nhiều điểm mới trong dự thảo Luật Kinh doanh bất động sản sửa đổi",
      srcName: "Laodong.vn", src: "https://news.google.com/rss/articles/CBMirgFBVV95cUxNMTUyX01hZ1AzWUZmM2gwQ3d6elFsanFNbVQycnAyeF9fVVRjVXlYQlVIR3VBMXpENVQtZjNPU0M1Um5NX0NKd2YxUlNlNnAwb1lGMkMyQ1FMbl8tRlVaMDdkbU4zZHYxSFJyMHA0ODNSVHpwOFNIeDk0YTgyWWsxRlRXQ1pJQWJtUkZzN3dkMmVnUFpEa21Oczc1dnYwUWVTMGJvRm5YMjU5bUhPUXc?oc=5",
      coverage: 3, related: [{ n: "VTVgo", u: "https://news.google.com/rss/articles/CBMiQEFVX3lxTE5ldGFWdW9FMHVyZUVneVhZVDRWRERybnI1aGxhRG55SGU5amJ5MFBwYmIzSHdPWVdzM0hIb3FlLU0?oc=5" }, { n: "Tạp chí điện tử Thương Trường", u: "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNZllQZ2QxUE85YnhhWGdPXzIyLXQ0ekhKQ2FZVUpZUld3cF9ZTjBTT0R0NjJURU5TOGRBQ1lrSEZ1anhkZ21QRzd6VzFjS3VEWVFLYmNxSVdIMkxBQUNzZWtVRVhUMHkxb0xSZFdnRERyQlVGZDR2T0J2elY0UXdzUXFHZVhzb0s1V2Iya09lcjhMSk8wNzZTUDdNZzItMDBVS1EtQXFsb0xwbVpXcFFEczNSeG1Hd09uVWcxNU4tbVVWUWpoNnFrMQ?oc=5" }] },
    { date: "2026-10-30", rank: 8, heat: 71, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà", titleEn: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà",
      zh: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà", en: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà", vi: "Quản lý chặt kinh doanh bất động sản, bảo vệ người mua nhà",
      srcName: "Báo và Phát thanh Truyền hình Hà Nội", src: "https://news.google.com/rss/articles/CBMipgFBVV95cUxPTmczRmNZWEtlaW45R0R4ODd0akdVTkpaa0lSYkpQWnVyam1aQnpCeHY0NFc1Yk51R00xQk43Z3ZFVGJ1aU93VFM0VHZLeVlyNmtfdmNoRjV2dlJKaG1VaHpxT2FZbVFBaWM2d3JLd0JjeEtCdmxicVAyUkU0N0RJakxqY01JcmZHS1pxZVpTOE9yVHlGWEtUZ1dmdmlOZkdNQ0Fqa1V3?oc=5",
      coverage: 2, related: [{ n: "Báo và Phát thanh Truyền hình Hà Nội", u: "https://news.google.com/rss/articles/CBMipAFBVV95cUxPYWtpTWN5SDRVRWhkMDRWbTFJOUI2Q0xIOXo1SFdjeWZTTF9vSy0tclFaSUMwRTFQSmpMWVkxWDVDTjB6RHRaSjhRcGVOMEZBeVUxd0w5Q3Q4VVRsNnpIX2JJbDdUaEdBcWVxTVRITHJxcGpPT2RCTTlUYWRxRy1qMDFQMkZjX1FUaWUwVXZ1c29vVXh4UkJEcVM3a3l2d0ZaMjdrOA?oc=5" }, { n: "baochinhphu.vn", u: "https://news.google.com/rss/articles/CBMisgFBVV95cUxQSnFSemxxUjZ2TUt1ZkN2aHB5QThpdy1tWllxOV8wb2VrUjFWelY1T2dFakY5bW9QNTVTUmpPSENuY1RQYUZfV1R3YzZwbFpfNExyNHpDSXAzVlV0WUQwdURDMkNnS1ZTRXRfNkxyTkwyZTdvWmc5SXJSc3UyZFZSU1l1VGRCSi1TNjZxSUNTaWV1MVBnX3lmUlBpQzZVMndVeWJURGY2Q0FVU3hJMjFaWFJn?oc=5" }] },
    { date: "2026-11-01", rank: 9, heat: 100, tag: "利坏 / Negative", tagClass: "bad", raw: true,
      titleZh: "Phát hiện điểm sử dụng ma túy tại chung cư The Sóng ở TPHCM, khởi tố 23 đối tượng", titleEn: "Phát hiện điểm sử dụng ma túy tại chung cư The Sóng ở TPHCM, khởi tố 23 đối tượng",
      zh: "Phát hiện điểm sử dụng ma túy tại chung cư The Sóng ở TPHCM, khởi tố 23 đối tượng", en: "Phát hiện điểm sử dụng ma túy tại chung cư The Sóng ở TPHCM, khởi tố 23 đối tượng", vi: "Phát hiện điểm sử dụng ma túy tại chung cư The Sóng ở TPHCM, khởi tố 23 đối tượng",
      srcName: "Laodong.vn", src: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxNVDhiUHFqWGtGcnZhRWdaUldBejJFaGFIUlQ1ZzJ5VFEtMWx0NjFma1hDMXF5c0hpTzVnMWFoVkJtb2pSRlBaaUhFUHlZRlBtWC15dkVZNDl4RmYzbFoxajgzaUdEQWdVOFJ2OXE0aUFrV042MjJUVHlmQWtqQnRXUi1VN0RQbU9yZEZ5VGVCb2Y1RlNLaS1jZVJPVnM0V2stOWZIcmM2UGpZR19BR0NoV3hweU9INjhZ?oc=5",
      coverage: 6, related: [{ n: "Vietnam+ (VietnamPlus)", u: "https://news.google.com/rss/articles/CBMiowFBVV95cUxQYy1mVFJIc3hYbDlsN3h5ZU4tWWFDc2dtSm5YV0F0anhyLURra20tZWxUSUVZbmk4UlBmMU45am9HTGI2alVJRzBheDU2YmFiSlFGVE4wamRzSGI2U2NBV3lzNFgtTjlSa3RpRDFJUEpramNLa0xwYXBwSDY0bG9TcjkzN2s4X25hTVdPcnhSS0N1bXEtWGwyekhfWU0wVWFhQXVz?oc=5" }, { n: "Báo Công Lý", u: "https://news.google.com/rss/articles/CBMirwFBVV95cUxNaEp0Y2ZmbE1PTVRmb25ZcUdJUndOb3VqLUt1MUJkcnJGOEEzNGhjaXp1U2ZxZEZja1lzaXBDQnVEQVpkaHVmT1FyZ3NRTnhvakNybllrUTcxYmw1RGRyUzRDNHlmSTVHNXVpaGYwWFBzNGk3WmR0bnI2Y0hsQWJmTGFPczlCSW84ejREVEllTzdzSU9tYUtrSXVKbjEtdDdhd1VyU1ZyMzhBRkI5RTNV?oc=5" }, { n: "Công an Nhân dân", u: "https://news.google.com/rss/articles/CBMilgFBVV95cUxQWm1PVlQ0c3pGWkZCa1FTNm5jaGthZTVyMk4xb0tGcFdIeGV5ZjJfYlVibnl4dHVjWVpLbXhNaXg1b0RnaEpKek1aOW53SlBnQm1pckFwSTVUZUpMVDNnUHJHT093SHlLNFFNMWc3cHJ6MG9FZ1NBY0N3RDJhR05VV21waVU5c1dlUGRxRU5MaDl6emd0SUE?oc=5" }] },
    { date: "2026-10-30", rank: 10, heat: 71, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Bất động sản du lịch: Giá trị phải đến từ hiệu quả khai thác", titleEn: "Bất động sản du lịch: Giá trị phải đến từ hiệu quả khai thác",
      zh: "Bất động sản du lịch: Giá trị phải đến từ hiệu quả khai thác", en: "Bất động sản du lịch: Giá trị phải đến từ hiệu quả khai thác", vi: "Bất động sản du lịch: Giá trị phải đến từ hiệu quả khai thác",
      srcName: "VOV.VN", src: "https://news.google.com/rss/articles/CBMinwFBVV95cUxNS25ZZ2E5Mjh1SDltQmNQRklZbDJpUHU3RjFzc0FudXdlZ050Q19qNWZIMzJOejF6X2NEeGU4QXNoWVN1YWxUZG5Sa0FmRFh4enVmcExwV2lpRmpScDlCbXZiY2pla0VJRkhsMnBaLTFYTzhQSG1fX1MwSTZuVDZ1Q1hFTlIwZGk1RG9GbW5uZXRmQ1BqVUF3S3Jjek1NM3c?oc=5",
      coverage: 2, related: [{ n: "VOV.VN", u: "https://news.google.com/rss/articles/CBMilgFBVV95cUxPV3dPbkNjZDAybk1hQlFXV3NFUWpodXQ4UXRTR3RPdThTQXJaWVBfVUY3bVVhM2pETTNZQ0dJaHY1VTl3cGVVRTJHTkJoZGFXVWpROWR2Z2RyRlBCQ3daczlRMklJLUJDY0JvYWlEbHNXc3ZFREhXMVJhTDJmYXY3cmRkcTBQMnB6OE5iVnBncUw4SV9lbWc?oc=5" }, { n: "Báo Pháp Luật Việt Nam", u: "https://news.google.com/rss/articles/CBMirAFBVV95cUxPUXRPeGRaeWRWQTVVM1hHNGJYNXU3Q0plVnVSZnljbF9BSjREaXdGajJlZzNUR2FWU2J2Z1ZNeGpLWWhoVGcxWXItYnpkc0pxeFc2dWsxOWU2LVc3SjdKNlQ2aDdNZlFpLWI5VERkSnZrS2phWEQ2MjVNdmcwajlpY0NFNG1zNWNEd3hKSWVsWkFIVkNXZ19qb1lmdmoxQ3lzQjktVHB2WURESTBY?oc=5" }] },
    { date: "2026-11-01", rank: 11, heat: 69, tag: "中性 / Neutral", tagClass: "mid", raw: true,
      titleZh: "Đầu tư bất động sản nghỉ dưỡng lúc này cần lưu ý gì?", titleEn: "Đầu tư bất động sản nghỉ dưỡng lúc này cần lưu ý gì?",
      zh: "Đầu tư bất động sản nghỉ dưỡng lúc này cần lưu ý gì?", en: "Đầu tư bất động sản nghỉ dưỡng lúc này cần lưu ý gì?", vi: "Đầu tư bất động sản nghỉ dưỡng lúc này cần lưu ý gì?",
      srcName: "VOV.VN", src: "https://news.google.com/rss/articles/CBMilAFBVV95cUxQT0RBZDBBSmV1UEFxb0FqNzViR0dkYllmVmNaQV9uM0dpSjVldzRkN3g1UzQ3Sl96NG5OUXJuU1I1T3F6QWtUU0xKZ21RVWNPdXFRb29QaHZ5eEcxUzdrTVJ1aWdaWHpCZTZLM1RDcGNJNW1jOFZITHZYUTh3bHlUYXRVZHhFMWhnNVlndXhiRC1vMllz?oc=5",
      coverage: 2, related: [{ n: "Nhadautu.vn", u: "https://news.google.com/rss/articles/CBMikAFBVV95cUxPVUNHQ1FvZjZBRlVQYzk3ejNTekhZTlFHTDF4a3p0NW5Ecmw0SGNiMWx1MWZKNEk2NkRnX0F5SGh3UWJqU05fWmpIQ0NSUlpQSlkxSW5PVk5CVmZuWF9qbTdITkFwQUhQRDdjbUhhMEpvLTRDbGlhMUNCei1tV3VGeTlKbDVBQmxZS2Ita1JxNjU?oc=5" }] },
    { date: "2026-11-01", rank: 12, heat: 91, tag: "数据 / Data", tagClass: "mid", raw: true,
      titleZh: "Hải Phòng dự kiến đấu giá 208 điểm nhà đất công sản sau thu hồi", titleEn: "Hải Phòng dự kiến đấu giá 208 điểm nhà đất công sản sau thu hồi",
      zh: "Hải Phòng dự kiến đấu giá 208 điểm nhà đất công sản sau thu hồi", en: "Hải Phòng dự kiến đấu giá 208 điểm nhà đất công sản sau thu hồi", vi: "Hải Phòng dự kiến đấu giá 208 điểm nhà đất công sản sau thu hồi",
      srcName: "VnEconomy", src: "https://news.google.com/rss/articles/CBMikgFBVV95cUxQb2lJV2FPV1VSSkFuNHlnaFdIcmN5RElaZDBTZ1J0eXlfTHc2UkJtQ1JKRHF3M0FMeE5PVi1wOE1lV3JYRnotN3c3dlo1S1o0WmtVVktidUxsTU1DOWtodndQTnZCenVOVEpnWkh6XzVERmU5UVdIZnI4YkRya09wZDllR01HM1lVcDNVdUktWFJBQQ?oc=5",
      coverage: 4, related: [{ n: "Báo Thanh Niên", u: "https://news.google.com/rss/articles/CBMipAFBVV95cUxOZlRkWmNsUU1jMDhWd2dDYm03Wk1GeUktd3BwUGh3aGRoX1BMYkNIRlFrZjZBOXNjU0hIMWx2N2JVSy1peFdYT3ROR05hdmJ2TTAwa3lPR3pvQmtvdzQtU0Ztd3NISUpsdVdIcWxNRERXcmdvb2tDeVcwUF9YZ0dXLS1zTHBZVnpJR1Fvc08wS1RZWXJCYTVMMnh0d1pySXRFWS05Nw?oc=5" }, { n: "Báo Dân trí", u: "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQUnMtT0R5WjJidEk5dXR2d09BWG1jNzhENkpaUWFIRllkWFdvQlViWTc1TGt4RGQyZmgxbFdVNnFsbzl0XzNMbS1BNGVxVDhxbmtPc0VvdEQ3Um9YQ2YtZVd2Z3dzMGNxM3hOYTNxSGxSWXNXa3FxdnVfY0RCZ2ZYRDkyWkwyT2FGeUNoZkhBaGNremtFZ3NFU1JfUEl0ckMxbG0wbWhkazRNUEFBUHJFT3dBb3FyNXM4?oc=5" }, { n: "Vietnam.vn", u: "https://news.google.com/rss/articles/CBMijAFBVV95cUxOY21IVUtBQWQwYkF6ajRKRkdTY2c3azNfa3RMdzlock16d1BOZGZpcmdGSVpOeUdnNU9wLWFMUDBqY20yQWhxTjljT2ZLUkxhV0s0cXdDZzJIN3lqaG1lU3h1ZjdoTnVvUFdyZ2N4cHhPWll3NVdsakRfeXJUVFZ4dGE5NWszeXBMOGQ1Zw?oc=5" }] },
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
      { termZh: "6–12 个月", termEn: "6–12 months", rate: "挂牌 2.9–7.9%（10/29 口径，10 月累计 29 家银行下调）：GPBank 线上 1–2 月 3.6%（低端代表）、12–36 月 5.05%；国有四大行 6/9 月 3.0%（柜面）、12 月 5.4%、24 月 5.5%（线上 6/9/12 月 6.6%/6.6%/6.8%）；MSB 10/29 降 0.5pp 后线上 6–11 月 5.8%、12 月 6.3%、13–24 月 6.1%、36 月 5.6%（专属：≤50 亿盾首次单账户 12/15/24 月 7.0%、VIP ≥5,000 亿盾 12/13 月 9.0%）；VietABank 6–11 月 5.5%、12–13 月 5.6%、15–18 月 5.7%、24–36 月 5.8%；7% 及以上——VCBNeo/MBV 6–18 月 7.0%、VIB 12 月 7.0%、PGBank 12 月 7.0%、Sacombank 12 月 7.0%（24–36 月 7.3%）、VPBank 18 月 7.4%、Saigonbank 13 月 7.9%（全表最高）；Techcombank 6–11 月 6.05%、12 月 6.25%、18 月 5.35%（10/28 较 10/22 再降 0.2–0.4pp）、LPBank 6.5%/6.7%、BVBank 6.7%/6.9%、VPBank 6.6%/6.7%、SeABank 4.15–4.75%、PVcomBank 4.8–5.8%、HDBank 5.0%、SCB 2.9–3.7%。加成促销：MB 周末 6 月期 ≥1 亿盾 8.2%（10/31 前）、Techcombank 首笔 12 月 +1.5pp 后 7.75%（会员最高 8.25%）；Cake by VPBank 首存 +2.2pp 促销 10/31 到期；10/31 复盘：10 月累计约 30 家下调 6 个月以上定存，但挂牌 6.6–7% 叠加 1–3pp 加成后实际吸存仍达 8.3–9%，挂牌价与实付价差未收敛；11/1 追踪：11 月初各银行挂牌定存普降约 0.5pp（CafeF 11/1，响应 SBV 要求 6 个月以上至少降 0.5pp），12 月期多数降至 7% 以下，存单（CD）利率同步小幅下调；10 月底银行体系存款较此前增逾 100 万亿盾，吸存与降贷成本之间的平衡压力上升" },
      { termZh: "1 年期（12 个月）", termEn: "1 year (12 months)", rate: "国有柜面 5.4%（VCB/BIDV/Agri，10/20 起；24 月 5.5%）· 国有线上 6.8%（Agri/MB/VCB/Vietin，10/28 表）· MSB 6.3%（10/29 起，较前降 0.5pp；专属首客 7.0%、VIP 9.0%）· VietABank 5.6%（10/29）· GPBank 5.05%（10/29）· MBV/VCBNeo/VIB/PGBank/Sacombank 7.0% · Saigonbank 6.7%（13 月 7.9%）· VPBank 6.7% · Techcombank 6.25%（10/28 起，较 10/22 降 0.4pp）· LPBank 6.7% · SeABank 4.5%/PVcomBank 5.1% · 加成后实际：MB 6 月 8.2%、Techcombank 12 月 7.75–8.25% · 11/1 起随 11 月初普降再降约 0.5pp，12 月期多数落入 7% 以下区间（各行逐家新牌价待核实）" },
      { termZh: "2 年期（12–24 个月）", termEn: "2 years (12–24 months)", rate: "5.9–7.3%" },
      { termZh: "3 年以上（含 5 年期）", termEn: "3 years+ (incl. 5-year)", rate: "国有 24 月 5.5–6%、36–60 月 4.8–5.3% · 股份 6.6–7.8%" },
      { termZh: "USD 存款", termEn: "USD deposits", rate: "0%" },
      { termZh: "大额 CD / 外宾专案", termEn: "Large CDs / expat program", rate: "最高 8.5–9.6%" }
    ],
    // 贷款利率（SBV 2026-08 官方口径）
    loanRates: [
      { termZh: "优先领域短期贷款（≤1 年）", termEn: "Priority-sector short-term (≤1 year)", rate: "≈3.9%（法定上限 4%）" },
      { termZh: "一般 VND 贷款（新贷 + 存量）", termEn: "General VND loans (new + outstanding)", rate: "8.1–10.5%" },
      { termZh: "房贷（住宅抵押，优惠期后浮动）", termEn: "Mortgage (post-promo floating)", rate: "12–16%（平均 14–16%）。10/27 定向优惠落地：Vietcombank 2 万亿盾额度（河内/胡志明及周边、已办红本）较常规个人房贷低 1pp、最长 35 年；BIDV 3 万亿盾个人包（购已办证住房/建房/修房），固定 12 月 9.5%、18 月 10%、24 月 10.5%，较常规低 2pp、最长 30 年。10/25 复核：本轮降息未覆盖购房贷，商业银行购房贷 11–14%、优惠期后浮动 13–15%，个别 16%；DKRA 11 家银行 12–24 月固定约 10.9%，VARS IRE 10 家银行优惠 8.5–11%。10/30 追加：DXS-FERI 预测最可行情景下 2026 年底浮动贷款利率仍 11–13%", },
      { termZh: "USD 贷款", termEn: "USD loans", rate: "4.1–5.4%" }
    ],
    depositVsLoanNoteZh: "「贷款 ≈ 存款两倍多」复核结论：不完全准确，需分档——① 一般经营贷（8.1–10.5%）约为同期存款（6.1–7.6%）的 1.1–1.7 倍；② 住房按揭优惠期后浮动利率（12–16%、均值 14–16%）约为 1 年期存款（5.9–7.6%）的 1.6–2.7 倍，仅高个案（16% vs 6.1%）超过 2.6 倍。即：经营贷约 1.1–1.7 倍、按揭约 1.6–2.7 倍；以国有四大行 1 年期存款 5.9% 为基准时，按揭已普遍在两个「两倍」上下。",
    depositVsLoanNoteEn: "Re-check of 'loan ≈ 2× deposit': not universal — ① general business loans (8.1–10.5%) are 1.1–1.7× same-term deposits (6.1–7.6%); ② post-promo floating mortgages (12–16%, avg 14–16%) are 1.6–2.7× the 1-yr deposit (5.9–7.6%); only extremes (16% vs 6.1%) exceed 2.6×. So business ~1.1–1.7×, mortgages ~1.6–2.7×; measured against the Big-4 1-yr deposit of 5.9%, mortgages now sit around or above 2×.",
    localNoteZh: "越南房贷普遍为「优惠期固定利率 + 之后浮动」结构：1 年期固定（BIDV 等）约 5.5%，5 年期固定（ACB 首套包）约 5.5%，优惠期结束后统一浮动至 12–16%（2026 Q4 口径、均值 14–16%）。定息期越短、越要留意浮动跳升风险。10/18 SBV 已要求优先领域贷款利率下调 1.5–2 个百分点，10/19 行长会议后 Agribank（最多 2pp）、BIDV（10/15 起 6–7%）、Sacombank（企业贷 8.5%）等已落地，但均属短期经营类、非按揭。10/20 存款端降息落地（VCB/Agri 6 月以上降 0.5pp、VietinBank 早降午回、BIDV 未动，至当日下午 16 家银行已挂新牌价、12 月期多数跌破 7%），但房贷浮动利率仍未跟进，实际月供压力未减。10/24 进展：多家银行已公布贷款利率下调 1.5–3pp（Agribank、BIDV、VietinBank、MB、LPBank、SHB、ACB、TPBank、SeABank、OCB、Nam A Bank、BVBank），但以经营类为主；SBV 口径新发放+存量贷款平均 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp），房贷浮动仍 12–16%。10/28 追记：挂牌定存整体未动，但 Techcombank 线上 12 月再降至 6.25%、MB 以周末与周年券把 6 月实际付息推至 8.2%，存款端成本并未实质缓解；房贷浮动利率仍 12–16%，未见跟进下调。10/30 追记：10 月累计近 30 家银行下调定存挂牌，但 DXS-FERI 判断至 2026 年底浮动贷款利率仍维持 11–13%，企业融资成本未实质下降；BIDV Home 认为更广泛降息需待 2027 年公共投资与征地补偿资金放量。10/31 追记：至 10 月底银行美元卖出价跌破 26,000，VND 转强缓解输入型通胀与外汇压力；但存款端降幅被加成促销抵销（实际吸存 8.3–9%），房地产与购房类贷款仍 12–14%、浮动 15–16%，年内月供压力未见改善。",
    localNoteEn: "Vietnamese mortgages are typically 'fixed teaser + floating thereafter': 1-yr fixed (BIDV etc.) ≈5.5%, 5-yr fixed (ACB first-home) ≈5.5%, then all float to 12–16% (Q4 2026, avg 14–16%). The shorter the fixed term, the bigger the float-jump risk. On Oct 18 the SBV ordered 1.5–2pp cuts for priority-sector lending; after the Oct 19 governor's meeting Agribank (up to 2pp), BIDV (6–7% from Oct 15) and Sacombank (corporate at 8.5%) have moved, but all on short-term business credit rather than home loans, so whether and how far mortgage rates follow is still open.Oct 28: deposit boards were broadly flat, but Techcombank cut its online 12-month rate again to 6.25% while MB used weekend and anniversary vouchers to pay 8.2% at 6 months — funding costs have not really eased, and floating mortgage rates remain 12-16% with no follow-through cut.",
    deposits: [
      { bank: "全系统 11 月初普降（11/1 口径）", rate: "6 个月以上挂牌定存普遍下调约 0.5pp · 12 月期多数降至 7% 以下 · 存单（CD）同步小幅下调", noteZh: "背景：SBV 10 月底要求各商业银行将 6 个月及以上挂牌存款利率至少下调 0.5pp，同时下调贷款利率并优先支持生产经营领域（第 9736/NHNN-CSTT 号公文口径延续）。11 月初 VCB、BIDV、CTG 等主要银行同步调整，12 个月期挂牌多数落入 7% 以下；部分银行仍在挂牌之上叠加优惠，实际执行年利率个别逾 8.3%、甚至高于 9%（挂牌与实付双轨未收敛）。存款端：银行体系存款较此前增逾 100 万亿盾，短期存款（12 个月以下）占总量约 80%（SBV 行长 10/31 国会口径），滚存率高使低成本资金相对稳定。逐家新牌价待官方牌价表核实。", noteEn: "Context: in late October the SBV told commercial banks to cut boards of 0.5pp or more on deposits of six months and longer, while also lowering lending rates with priority for production and business (continuing Official Letter 9736/NHNN-CSTT). Major banks including VCB, BIDV and CTG adjusted in early November, leaving most 12-month boards below 7%; some banks still stack bonuses on top, pushing effective yields above 8.3% and in some cases past 9%, so board and paid rates remain two tracks. Funding: system deposits rose by more than VND 100tn, and short-term deposits (under 12 months) account for about 80% of the total per the SBV governor's Oct 31 testimony to the National Assembly, with high rollover rates keeping low-cost funding relatively stable. Per-bank new boards to be verified against official rate tables." },
      { bank: "国有四大行（VCB/BIDV/Vietin/Agri）", rate: "10/27：VCB 柜面 12 月 5.4% / 24 月 5.5%、BIDV 同（较 10/17 各降 0.5pp）、Agri 5.4%/5.5% · VietinBank 回调后 12 月 5.9% / 24 月 6%", noteZh: "两套口径已澄清（10/14）：柜面（BIDV 10/13 调查）1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%。10/19 逐家调查 BIDV 牌价未变（1–2月 2.1%、3–5月 2.4%、6–9月 3.5%、12–18月 5.9%、24–36月 6.0%；线上 1–5月 4.75%、6–11月 6.6%、12/13/24/36月 6.8%、15/18月 6.6%）——国有行当时尚未落地 10/18 要求的 0.5pp 降幅。10/20 落地情况（各行不同步）：Vietcombank 6/9 月 3.5%→3.0%、12 月 5.9%→5.4%、24 月 6%→5.5%、36–60 月 5.3%→4.8%（6 月以下不变：1–2 月 2.1%、3 月 2.4%）；Agribank 6–11 月 4%→3.5%、12–18 月 5.9%→5.4%、24 月 6%→5.5%，柜面最高 5.5%（1–2 月 2.6%、3–5 月 2.9%）；VietinBank 早间同步下调至 3.0%/5.4%/5.5%，当日下午回调 0.5pp 至 3.5%/5.9%/6%；BIDV 10/20 牌价未变（6/9 月 3.5%、12–18 月 5.9%、24/36 月 6%）。线上促销口径（VCB 弹性储蓄 9 月 7.2%、12 月 7.4%）未随柜面同步，实际新价待核实。10/21 追记：Vietcombank 确认按 6 个月以上再降 0.5pp 执行（12 月 5.4%，与本表 10/20 数值一致）；BIDV、VietinBank 10/21 未见新牌价公布，仍为 12–18 月 5.9%、24/36 月 6%。10/22 追记：BIDV 线上牌价维持 4.75–6.8%（1–5 月 4.75%、6–11 月与 15/18 月 6.6%、12/13/24/36 月 6.8%），国有行线上档位未随柜面同步下调。10/27 现场调查（Lao Dong 10:33）：BIDV 1–2 月 2.1%、3 月 2.4%、6/9 月 3.0%、12/13/15/18 月 5.4%、24/36 月 5.5%（较 10/17 各降 0.5pp）；VCB 同日同价（12 月 5.4%、24 月 5.5%），柜面与线上同期档位已趋同（线上仅列至 24 月）。口径提示：另有汇总表把四大行 12 月列为 6.8%，与逐家现场调查的 5.4% 冲突，疑为含加成的线上促销价或旧表，待核实", noteEn: "Two schedules clarified (Oct 14): counter (BIDV survey, Oct 13) 2.1% (1–2m), 2.4% (3–5m), 3.5% (6–9m), 5.9% (12–18m), 6.0% (24–36m); online 4.75% (1–5m), 6.6% (6–11m), 6.8% (12/13/24/36m), 6.6% (15/18m). A Oct 19 survey found BIDV's board unchanged — counter 2.1%/2.4%/3.5%/5.9%/6.0% and online 4.75%/6.6%/6.8%/6.6% — so the state banks had yet to implement the 0.5pp cut ordered on Oct 18. Outcomes on Oct 20 differed by bank: Vietcombank cut 6/9-month to 3.0% from 3.5%, 12-month to 5.4% from 5.9%, 24-month to 5.5% from 6% and 36-60-month to 4.8% from 5.3% (sub-6-month unchanged at 2.1% for 1-2 months and 2.4% for 3 months); Agribank cut 6-11-month to 3.5% from 4%, 12-18-month to 5.4% from 5.9% and 24-month to 5.5% from 6%, with a counter maximum of 5.5% (2.6% at 1-2 months, 2.9% at 3-5 months); VietinBank cut to 3.0%/5.4%/5.5% in the morning then reversed the 0.5pp in the afternoon to 3.5%/5.9%/6%; BIDV left its Oct 20 board unchanged (3.5% at 6/9 months, 5.9% at 12-18 months, 6% at 24/36 months). Online promotional tiers (VCB flexible savings at 7.2% for 9 months and 7.4% for 12) did not move with the counter board — new levels to be verified. Oct 21 addendum: Vietcombank confirmed the 0.5pp cut on 6 months+ (12m at 5.4%, matching the Oct 20 figures here); no new BIDV or VietinBank boards on Oct 21, still 5.9% at 12-18m and 6% at 24/36m. Oct 22 addendum: BIDV's online board is unchanged at 4.75-6.8% (4.75% at 1-5m, 6.6% at 6-11m and 15/18m, 6.8% at 12/13/24/36m), so state-bank online tiers had not followed the counter cuts. Oct 27 on-site survey (Lao Dong, 10:33): BIDV 2.1% (1-2m), 2.4% (3m), 3.0% (6/9m), 5.4% (12/13/15/18m) and 5.5% (24/36m), each 0.5pp below Oct 17; Vietcombank matched at 12m 5.4% and 24m 5.5%, so counter and online tiers have now converged (the online board lists only up to 24 months). Caveat: one aggregator table still shows 6.8% at 12 months for the Big-4, conflicting with the 5.4% branch survey, likely a promo-inclusive online rate or a stale board — flagged for verification" },
      { bank: "ACB（10/19 公布、10/20 生效）", rate: "调整前 6个月 7.9% · 12个月 8.0%（新牌价待生效后核实）", noteZh: "10/19 宣布下调定存牌价、自 10/20 起适用；同时推出企业贷款降 1.5–2pp 方案（此前 1pp 方案已投放约 5 万亿盾）", noteEn: "Cut its deposit board on Oct 19 effective Oct 20 (new levels to be verified once live); also launched a 1.5–2pp corporate lending cut after its earlier 1pp programme disbursed about VND 5tn" },
      { bank: "Vietcombank CD（线上凭证）", rate: "12个月 7.9%", noteZh: "面值10万盾起", noteEn: "from VND 100k" },
      { bank: "股份制银行（Sacombank/LPBank/Saigonbank 等）", rate: "12个月 5.6–7.5%", noteZh: "10/19 降息后：LPBank 6月 6.5%、12月 6.7%、13–18月 6.55%（柜面 12–18月 6.1%、24–25月 6.3%、48–60月 5.2%）；VietBank 6–8月 5.4%、9–11月 5.5%、12–14月 5.6%、18–36月 5.9%；BVBank 12月柜面 6.05%、线上 6.9%；Nam A Bank 6月以上降 0.5pp。10/15 未调整口径：Sacombank 12/18月 7.5%、Saigonbank 7.2%/7.0%、Bac A Bank 7.1%、VIB 与 MBV 7.0%、MSB 6.8%；10/20 下午全市场已有 16 家银行公布新牌价，12 个月期多数跌破 7%（部分行低于 6%）。10/21 再降：SHB 6–36 月 -0.5pp（6–8 月 5.7%、9–11 月 5.9%、12–13 月 6.0%、15–18 月 6.1%、24–36 月 6.2%，为 4 月以来首次调整）；ABBank 6–60 月 -0.5pp；SeABank 线上 1–15 月 -0.5pp、18–36 月 -0.7pp（12 月 4.5%、18–36 月 4.75%）", noteEn: "After the Oct 19 cuts: LPBank 6m 6.5%, 12m 6.7%, 13–18m 6.55% (counter 12–18m 6.1%, 24–25m 6.3%, 48–60m 5.2%); VietBank 5.4% (6–8m), 5.5% (9–11m), 5.6% (12–14m), 5.9% (18–36m); BVBank 12m 6.05% at the counter and 6.9% online; Nam A Bank cut 0.5pp beyond six months. Unchanged Oct 15 readings: Sacombank 7.5% (12/18m), Saigonbank 7.2%/7.0%, Bac A Bank 7.1%, VIB and MBV 7.0%, MSB 6.8%. More cuts on Oct 21: SHB -0.5pp across 6-36m (5.7% at 6-8m, 5.9% at 9-11m, 6.0% at 12-13m, 6.1% at 15-18m, 6.2% at 24-36m — its first change since April); ABBank -0.5pp across 6-60m; SeABank online -0.5pp for 1-15m and -0.7pp for 18-36m (12m 4.5%, 18-36m 4.75%)" },
      { bank: "VPBank / MB / Techcombank（10/12–10/28 调整）", rate: "VPBank 10/26 起 线上 6–11月 6.6%、12–13月 6.7%、1–5月 4.75%、15–18月 7.4%、24月 7.1%、36月 6%（10/21 降 0.5pp、10/26 再降 0.4pp；≥10 亿盾 6–11月 7.0%、12–13月 7.1%）· MB 10/21 起 6–11月 5.3%、12–18月 5.85%、24–60月 6.5%（10/28 表列 6/9月 6.6%、12/18月 6.8% 为含加成口径）· Techcombank 10/28 起 线上 3月 4.55%、6–11月 6.05%、12月 6.25%、18月 5.35%（较 10/22 再降 0.2pp / 0.4pp）；首笔加成 1.5pp 后 12月 7.75%、会员最高 8.25%", noteZh: "含促销加成；Techcombank 首次开户 3/6/12 月最多加 1 个百分点、符合产品条件整体加 1.5pp；10/15 表列 MB 6/9/12 月线上 6.6%/6.6%/6.8%，同表另列 5.8%/5.8%/6.35% 一行（疑为柜面或特定产品口径，仍待 MB 官方确认）；MB 部分网点对 10 亿盾及以上的 6 月期给到最高 9%/年（10/15 报道）。10/21 MB 跟进降息：6–60 月全线 -0.5pp（线上 6–11 月 5.3%、12–18 月 5.85%、24–60 月 6.5%）；VPBank 线上 15/18 月同步 -0.5pp。10/22 Techcombank 跟进：线上「Phát Lộc」1–12 月 -0.1pp、13–36 月 -0.5pp 统一 5.35%。10/26 VPBank 再降 0.4pp（6–13 月），10 亿盾以上 6–11 月 7.0%、12–13 月 7.1%；VnExpress 同日调查显示网点实际报价高于挂牌 1–3pp（VPBank 6 月 9.1%、12 月 9.2%，MB 生日券 8.2%）。10/28 更新（越南网 10/28 调查）：Techcombank 线上再降——3 月 4.55%、6–11 月 6.05%、12 月 6.25%（10/22 为 6.45%/6.65%）、18 月 5.35%，13–36 月维持 5.35%；首笔 +1.5pp 后 12 月 7.75%，满足会员条件可达 8.25%。MB 挂牌未变（3 月 4.75%、6/9 月 6.6%、12/18 月 6.8%、24–60 月 6.5%），但促销把实际付息推高到 8.2%——每周六日 App 定期 6 月期、≥1 亿盾、需输入特定代码；另为 32 周年向直播渠道领券客户开放 ≥1,000 万盾、≥6 月的 8.2%（均执行至 10/31）。MB 同时对农林、出口生产、中小企业、配套工业、高科技五个优先领域贷款利率降 1.5–2pp、下限 7.9%。", noteEn: "incl. promo add-ons; Techcombank adds up to 1pp for first-time savers on 3/6/12 months and up to 1.5pp where product conditions are met; the Oct 15 table lists MB online 6.6%/6.6%/6.8% for 6/9/12 months alongside a 5.8%/5.8%/6.35% row (likely counter or product-specific — still to be confirmed with MB); some MB branches pay up to 9%/yr on 6-month deposits of VND 1bn+ (reported Oct 15). MB followed the Oct 21 cut with -0.5pp across 6-60 months (online 5.3% at 6-11m, 5.85% at 12-18m, 6.5% at 24-60m) and VPBank cut 0.5pp on its online 15/18-month tiers. Techcombank followed on Oct 22 (-0.1pp for 1-12 months, 13-36 months to a flat 5.35%). Oct 26: VPBank cut a further 0.4pp on 6-13 months, with 7.0%/7.1% for VND 10bn+ deposits, while a VnExpress survey found branches quoting 1-3pp above the boards (VPBank 9.1% at 6m and 9.2% at 12m, MB 8.2% with a birthday voucher). Oct 28 update (Vietnam.vn survey): Techcombank cut online rates again — 4.55% at 3 months, 6.05% at 6-11 months, 6.25% at 12 months (from 6.45%/6.65% on Oct 22) and 5.35% at 18 months, with 13-36 months held at 5.35%; the 1.5pp first-deposit bonus takes 12 months to 7.75% and to 8.25% where membership conditions are met. MB's board is unchanged (4.75% at 3m, 6.6% at 6/9m, 6.8% at 12/18m, 6.5% at 24-60m), but promotions lift actual payouts to 8.2% — weekend app deposits at 6 months from VND 100m with a code, plus 8.2% for 6 months or longer from VND 10m for customers holding 32nd-anniversary livestream vouchers (both run to Oct 31). MB also cut lending rates 1.5-2pp for five priority sectors (agriculture, export production, SMEs, supporting industries, high tech) with a 7.9% floor." },
      { bank: "HDBank（10/18 调查）", rate: "线上 6月 5%+最高 2.35pp 加成=7.35% · 13月专案 7.6% · 12月 5.3% · 18月 5.6%", noteZh: "常规线上牌价 1–2月 4.2%、3–5月 4.3%、6月 5%、7–11月 4.8%、12月 5.3%、18月 5.6%、24/36月 5%；「黄金储蓄日」加成仅限周六日及双数日（10/10、11/11、12/12），6 月期 ≥1 亿盾最高加 2.35pp、2,000 万–1 亿盾加 2.1pp；另有 13 月期专案 7.6%", noteEn: "Standard online board: 4.2% (1–2m), 4.3% (3–5m), 5% (6m), 4.8% (7–11m), 5.3% (12m), 5.6% (18m), 5% (24/36m); the Golden Savings Day add-on applies only at weekends and on double dates (Oct 10, Nov 11, Dec 12), up to 2.35pp on 6-month deposits of VND 100m+ and 2.1pp for VND 20–100m; a separate 13-month product pays 7.6%" },
      { bank: "BAC A BANK / PGBank / Saigonbank（10/23 更新）", rate: "BAC A BANK 6月 7.05%·12月 7.1%（10/12 牌价）；PGBank 10/23 起柜面 6–9月 6.1%、12–13月 6.2%、18–36月 6.8%，线上 6–9月 6.9%、12–13月 7.0%；Saigonbank 10/23 线上 6月 6.4%、7–11月 6.1%、12月 6.7%、18月 6.5%、24月 6.0%、36月 6.1%、13月 7.9%", noteZh: "PGBank 10/23 下调 0.5pp（柜面普通定存与原 Phuc An Khang 同幅；1–5 月维持 4.75%、18–36 月维持 6.8%），线上渠道未跟随，仍为 1–5 月 4.75%、6–9 月 6.9%、12–13 月 7.0%、18–36 月 6.8%。Saigonbank 同日线上降 0.5pp，1–5 月维持 4.75% 上限，13 月期 7.9% 为该行最高且柜面线上同价。BAC A BANK 未见 10 月新调整。至 10/23 全系统累计 22 家银行已按 SBV 第 9736 号公文降定存；SBV 9 月口径 6–12 月平均定存 8.1%（含促销加成，高于挂牌价口径）。", noteEn: "PGBank cut 0.5pp on Oct 23 across counter savings and the Phuc An Khang product (1-5m held at 4.75%, 18-36m at 6.8%) while its online board stayed at 4.75% (1-5m), 6.9% (6-9m), 7.0% (12-13m) and 6.8% (18-36m). Saigonbank cut online rates 0.5pp the same day, holding 1-5m at the 4.75% ceiling and keeping a 7.9% 13-month offer as its highest, identical across counter and online. No new BAC A BANK change was seen in October. As of Oct 23, 22 banks had cut deposit rates under SBV Letter No.9736; the SBV's September series shows average 6-12 month deposits at 8.1% including promotional premiums, above posted-board levels." },
      { bank: "OCB 外宾专案 CD", rate: "最高 8.5%（1–36月）", noteZh: "面值1亿盾起", noteEn: "min VND 100M" },
      { bank: "PVcomBank（大额）", rate: "最高 10%（12–13月，≥2 万亿盾）· 线上 10/21 起 12月 5.1%", noteZh: "柜面 10% 为 ≥2 万亿盾的 12/13 月期「Regular」产品、到期付息；线上 App 促销 10/21 下调：1–5 月 -0.25pp 至 4.5%、6–36 月 -0.5pp（6–11 月 4.8%、12 月 5.1%、13 月 5.3%、15–36 月 5.8%）；10/10 前后 10.4%/年 的短期券已不在最新牌价内（是否停发待核实）", noteEn: "counter 10% applies to the 12/13-month Regular product from VND 2,000bn, interest at maturity; the online app promo was cut on Oct 21: 1-5m -0.25pp to 4.5% and 6-36m -0.5pp (4.8% at 6-11m, 5.1% at 12m, 5.3% at 13m, 5.8% at 15-36m); the earlier 10.4%/yr short-dated certificate tier from VND 5m has been withdrawn with this round" },
      { bank: "Cake by VPBank（促销）", rate: "挂牌 6.9%（6–24 月）· 叠加 +2.2pp 加成后最高 9.1%", noteZh: "10/21 17:00 起下调：6–9 月 7.2%→6.9%、10–24 月 7.4%→6.9%（-0.5pp），1–5 月维持 4.75%、36 月 6.3%；9/22–10/31 对首次存款与续存客户加 2.2pp，6–13 月实际最高 9.1%（此前 9.6%），续存需 ≥500 万盾", noteEn: "Cut from 17:00 on Oct 21: 6-9m 7.2% to 6.9% and 10-24m 7.4% to 6.9% (-0.5pp), 1-5m held at 4.75% and 36m at 6.3%; the 2.2pp first-deposit/renewal bonus from Sep 22 to Oct 31 lifts 6-13 month effective rates to a maximum 9.1% (from 9.6%), with renewals requiring VND 5m+" },
      { bank: "NCB / Vikki（线上促销）", rate: "9.1–9.35%", noteZh: "1 亿盾起、线上。GPBank 已从本条移出：10/29 挂牌为线上 3.6–5.05%、柜面最高 4.6%，与 9% 档促销不符（原并列疑为旧口径或特定产品，待核实）", noteEn: "≥VND 100M, online. GPBank removed from this row: its Oct 29 board runs 3.6-5.05% online and up to 4.6% at the counter, which does not fit the 9% promotional tier (the earlier grouping looks like an outdated or product-specific reading; to verify)" },
      { bank: "MSB / VietABank / GPBank（10/29 各降 0.5pp）", rate: "MSB 线上 1–5月 4.75%、6–11月 5.8%、12月 6.3%、13–24月 6.1%、36月 5.6%（专属：≤50 亿盾首客 6月 6.5%、12/15/24月 7.0%；VIP ≥5,000 亿盾 12/13月 9.0%）· VietABank 线上 1–2月 4.7%、3–5月 4.75%、6–11月 5.5%、12–13月 5.6%、15–18月 5.7%、24–36月 5.8%（柜面 6–18月 5.3–5.5%、24–36月 5.6%）· GPBank 线上 1–2月 3.6%、3–5月 3.7%、6–8月 4.75%、9月 4.85%、12–36月 5.05%（柜面 12–36月 4.6%）", noteZh: "三家同日下调 6–36 月期 0.5 个百分点，10 月累计降息银行增至 29 家，降幅集中在长端。MSB 专属利率需满足「≤50 亿盾、此前在该行无存款、仅开一个储蓄账户」，VIP 档门槛 5,000 亿盾，非普遍可得；GPBank 为全市场最低档（12–36 月 5.05%）", noteEn: "All three cut 6-36 month terms by 0.5pp on the same day, lifting October's total to 29 banks, with the deepest cuts at the long end. MSB's special rates require a balance of no more than VND 5bn, no prior deposits and a single savings account, while the VIP tier needs VND 500bn; GPBank now sits at the market floor (5.05% for 12-36m)" },
      { bank: "全市场新发定存（SBV 官方口径）", rate: "平均约 6.38%/年（9/20 口径）；SBV 9 月口径 6–12 月均 8.1%、贷款均 10.9%；10/24 SBV 口径新发放+存量贷款均 8.4–10.9%；10/27 挂牌多数 ≤7%（7% 以上仅 VCBNeo/MBV/VIB/PGBank/Sacombank 24-36 月/VPBank 大额/Saigonbank 13 月 7.9%）；10/31 行业协会口径：至少 22 家承诺对经营与优先领域贷款利率降 1.5–2pp、15 家公布优惠包合计逾 451 万亿盾（约全系统贷款 2.2%，集中在 6 个月以下流动资金，无购房/消费方案），房地产等受控领域仍 12–14%、浮动 15–16%", noteZh: "10/29 追加：MSB/VietABank/GPBank 同日降 0.5pp（6–36 月），10 月累计 29 家银行降息，挂牌下限降至 3.6%（GPBank 线上 1–2 月）、12–36 月 5.05% 为全市场最低档；12 月期国有柜面 5.4%、线上 6.8%，Saigonbank 13 月 7.9% 仍为全表最高。10/26 追加：全系统挂牌已普遍落至 7% 以下（国有四大行线上 12 月 6.8%、VPBank 6.7%、Sacombank 7.0%、MBV 7.0%），但 VnExpress 同日调查显示实际动员成本仍高 1–3pp（BIDV 7.8–8.0%、VPBank 9.1–9.2%、NCB App 9%、SHB App 8.1–8.3%），即 0.5pp 指令对银行真实资金成本的缓解小于挂牌降幅所示。VDSC 判断 2026 年内定存利率持平或不再回升、2027 年续降空间有限。10/24 追加：SBV 称新发放与存量贷款平均年利率 8.4–10.9%（环比 +0.2pp、较 2025 年底 +1.7~1.9pp）；至 10/14 信贷余额近 21 千万亿盾（+11.44%）、9 月居民存款 11.43 千万亿盾（+10.63%）、企业存款 6.34 千万亿盾。SBV 9 月数据（10/22 晚发布）：6–12 月平均定存 8.1%（环比 +0.1pp、一年前 5.5%），连续 11 个月上升但月增幅由 0.3pp 放缓至 0.1pp；24 月以上最高 8.2%；含促销加成的实际 12/24 月常见 9.3%/9.8%；9 月平均贷款利率 10.9%（较 2025 年底 +近 2pp），优先领域短期仍贴 4% 上限。此前 9/20 口径新发定存 6.38%、较 2025 年底 +1.15pp。政策端：10/18 SBV 要求 6 个月以上定存挂牌至少降 0.5pp；10/21 第 9736/NHNN-CSTT 号公文再压实（6 个月以上新发生交易平均利率较 10/11–20 报备期降 ≥0.5pp，未达标或被下调信贷增长指标）；至 10/26 已有 23 家以上银行降牌价（含四大行）。10/27 快照（35 家线上）：3 月 1.9%（SCB 最低）–4.75%；6 月 2.9%（SCB）–7.0%（VCBNeo，VPBank 对 ≥100 亿盾同价）；12 月 3.7%（SCB）–7.1%（VPBank ≥100 亿盾），MBV/PGBank/VIB/VCBNeo 与 Sacombank（≥5 亿盾）均 7.0%；24 月最高 7.3%（Sacombank，10/20 起由 7.8% 下调，仅限线上 ≥5 亿盾 24–36 月）；Saigonbank 13 月 7.9% 仍为全表最高（柜面线上同价）。Cake by VPBank 首存 +2.2pp 促销至 10/31，实际最高 9.1%，属条件性、将到期，未计入挂牌", noteEn: "Oct 29 update: MSB, VietABank and GPBank each cut 0.5pp on 6-36 month terms, taking October to 29 banks; the board floor is now 3.6% (GPBank online, 1-2 months) with 5.05% for 12-36 months, while Big-4 counter 12-month rates sit at 5.4% (6.8% online) and Saigonbank's 13-month 7.9% remains the table high. SBV September data (released on the evening of Oct 22): average 6-12 month deposits 8.1% (+0.1pp MoM, 5.5% a year earlier), an 11th straight monthly rise but slowing from 0.3pp; terms above 24 months peak at 8.2%; effective 12/24-month rates including premiums commonly 9.3%/9.8%; average lending rates 10.9% in September, nearly 2pp above end-2025, with priority-sector short-term loans at the 4% ceiling. Earlier, the Sep 20 series showed new deposits at 6.38%, +1.15pp vs end-2025. Policy: on Oct 18 the SBV ordered listed rates for 6-month-plus terms cut by at least 0.5pp; Letter No.9736/NHNN-CSTT of Oct 21 hardened this, and by Oct 23 22 banks had repriced. Oct 27 snapshot (35 online boards): 3 months ranges from 1.9% (SCB, lowest) to 4.75%; 6 months 2.9% (SCB) to 7.0% (VCBNeo, matched by VPBank on VND 10bn+); 12 months 3.7% (SCB) to 7.1% (VPBank, VND 10bn+), with MBV, PGBank, VIB, VCBNeo and Sacombank (VND 500m+) all at 7.0%; the top 24-month rate is 7.3% (Sacombank, cut from 7.8% on Oct 20 and limited to online deposits of VND 500m+ over 24-36 months); Saigonbank keeps the highest public rate at 7.9% for 13 months, identical at counter and online. Cake by VPBank still pays an extra 2.2pp for first-time depositors through Oct 31, an effective 9.1% maximum that is conditional, expiring and excluded from posted boards" }
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
