export type Lang = "zh" | "en";

export const languages: Lang[] = ["zh", "en"];

export const site = {
  url: "https://stage4th-website.vancouver-fwd.workers.dev",
  email: "vancouver.fwd@gmail.com",
  instagram: "https://www.instagram.com/vanfwd?igsh=Nmo0YnltZXl2M2xq",
  xiaohongshu: "http://xhslink.com/m/7VOFBgRY4ym",
  wechatId: "van_fwd",
  logo: "/assets/logo/logo.png",
  upcoming: "/assets/events/upcoming.jpg",
  soding_link: "https://www.zeffy.com/en-CA/ticketing/staged-reading-series",
  past: "/assets/events/proof/poster.png",
  xhsQr: "/assets/social/xhs-qr.png",
  brand: {
    zh: { primary: "第四面墙拆除队", secondary: "Stage 4th Society" },
    en: { primary: "Stage 4th Society", secondary: "第四面墙拆除队" },
  },
  shortBrand: {
    zh: "第四面墙拆除队",
    en: "Stage 4th Society",
  },
};

export const nav = {
  zh: [
    { label: "首页", href: "/zh" },
    { label: "关于", href: "/zh/about" },
    { label: "活动", href: "/zh/events" },
    { label: "联系我们", href: "/zh/contact" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About", href: "/en/about" },
    { label: "Events", href: "/en/events" },
    { label: "Contact", href: "/en/contact" },
  ],
};

// ─── Base copy (kept compatible with previous schema) ─────────────────────
export const copy = {
  zh: {
    homeTitle: "墙倒下的地方，连接才能生长。",
    homeIntro:
      "第四面墙拆除队是一个活跃于温哥华的非营利戏剧组织，通过剧本围读、舞台演出、工作坊及共创项目，连接舞台与现实、表演者与观众。",
    homeEyebrow: "温哥华非营利戏剧组织",
    featured: "最近一次演出",
    aboutCta: "了解我们",
    eventsCta: "查看活动",
    followCta: "关注我们",
    aboutTitle: "关于我们",
    aboutBody:
      '第四面墙拆除队致力于打破"第四面墙"——将舞台与观众分隔开的无形界限。我们相信，戏剧既不属于演员，也不属于观众，而是任何人都可以走入的共享空间。\n\n我们通过剧本围读、舞台演出、工作坊与共创项目，在温哥华的中文戏剧社群与更广泛的戏剧社群之间，邀请大家一起参与、表达与连接。\n\n墙倒下的地方，连接才能生长。',
    fourthWallTitle: '什么是"第四面墙"？',
    fourthWallBody:
      '"第四面墙"（Fourth Wall）是一个戏剧术语，指虚构在镜框式舞台上、将演员与观众分隔开的"无形墙壁"。打破这面墙意指演员直接与观众交流，承认观众的存在。',
    eventsTitle: "活动",
    eventsIntro: "我们的演出、围读、工作坊与共创项目会在这里持续归档。",
    contactTitle: "联系我们",
    contactIntro: "欢迎通过社交媒体或邮件联系合作、演出、志愿者与社群相关事宜。",
    viewProgram: "查看场刊",
    eventDetails: "演出信息",
    aboutPlay: "关于作品",
    aboutPlaywright: "关于剧作家",
    program: "场刊",
    organizer: "主办方",
    past: "已结束",
    upcoming: "即将到来",
    social: "社交媒体",
  },
  en: {
    homeTitle: "Where the wall falls, connection begins.",
    homeIntro:
      "Stage 4th Society is a Vancouver-based non-profit theatre organization creating script readings, performances, workshops, and collaborative projects that connect performers and audiences.",
    homeEyebrow: "Vancouver-based non-profit theatre organization",
    featured: "Most recent production",
    aboutCta: "About Us",
    eventsCta: "View Events",
    followCta: "Follow Us",
    aboutTitle: "About",
    aboutBody:
      'Stage 4th Society is dedicated to dismantling the fourth wall — the imagined boundary between performers and audiences. We see theatre as a shared space where anyone can participate, express, and connect.\n\nThrough script readings, performances, workshops, and collaborative projects, we create participatory theatre experiences that invite people to explore themselves and connect with others.\n\nWhere the wall falls, connection begins.',
    fourthWallTitle: "What Is the Fourth Wall?",
    fourthWallBody:
      'The "fourth wall" is a theatre and film term for the imagined invisible wall separating performers from the audience. Breaking it means directly acknowledging and engaging the audience, making their presence part of the theatrical experience.',
    eventsTitle: "Events",
    eventsIntro: "Our performances, readings, workshops, and collaborative projects are archived here.",
    contactTitle: "Contact Us",
    contactIntro: "Reach us for collaborations, productions, volunteer opportunities, and community inquiries.",
    viewProgram: "View Program",
    eventDetails: "Event Details",
    aboutPlay: "About the Play",
    aboutPlaywright: "About the Playwright",
    program: "Program",
    organizer: "Organizer",
    past: "Past",
    upcoming: "Upcoming",
    social: "Social",
  },
};

// ─── New copy blocks (added by redesign) ──────────────────────────────────

export const siteTicker = {
  en: [
    "Vancouver-based non-profit theatre",
    "Script readings · Performances · Workshops",
    "Now archiving — Proof, April 2026",
    "第四面墙拆除队",
    "Where the wall falls, connection begins",
  ],
  zh: [
    "温哥华非营利戏剧组织",
    "剧本围读 · 舞台演出 · 工作坊 · 共创",
    "正在归档 — 求证 Proof，2026.04",
    "Stage 4th Society",
    "墙倒下的地方，连接才能生长",
  ],
};

export const siteHero = {
  en: {
    meta: [
      ["Est.", "2024"],
      ["Based", "Vancouver, BC"],
      ["Form", "Non-profit theatre"],
      ["Now", "Tickets on sale"], // In archive, Tickets on sale
    ],
    title: ["Where the", "wall falls,", "connection", "begins."],
    lead:
      "Stage 4th Society is a Vancouver-based non-profit theatre organization. We dismantle the imagined boundary between performers and audiences through readings, performances, workshops, and collaborative projects.",
    scrollCue: "Scroll · 向下浏览",
  },
  zh: {
    meta: [
      ["创立", "2024"],
      ["所在", "温哥华"],
      ["形式", "非营利戏剧"],
      ["状态", "售票中"], // 归档中，售票中
    ],
    title: ["墙倒下的", "地方，", "连接", "才能生长。"],
    lead:
      "第四面墙拆除队是一个活跃于温哥华的非营利戏剧组织。我们通过剧本围读、舞台演出、工作坊与共创项目，连接舞台与现实、表演者与观众。",
    scrollCue: "向下浏览 · scroll",
  },
};

export const siteFeatured = {
  en: {
    eyebrow: "Most recent production",
    tape: "ARCHIVE / 04·26",
    info: [
      ["Date", "Sun · April 26, 2026", "7:00 PM"],
      ["Venue", "Revue Stage", "1601 Johnston Street, Vancouver"],
      ["Language", "Mandarin performance", "with English subtitles"],
      ["Status", "Past production", "archived recap available"],
    ],
    cta: "View program",
    ctaSecondary: "All events",
  },
  zh: {
    eyebrow: "最近一次演出",
    tape: "归档 / 04·26",
    info: [
      ["日期", "2026 年 4 月 26 日 · 周日", "晚 7:00"],
      ["场地", "Revue Stage", "1601 Johnston Street, Vancouver"],
      ["语言", "普通话演出", "英文字幕"],
      ["状态", "已结束的演出", "可查看归档场刊"],
    ],
    cta: "查看场刊",
    ctaSecondary: "全部活动",
  },
};

export const siteAbout = {
  en: {
    pull: { lead: "Theatre is not a wall.", body: "It is a ", accent: "shared space", tail: "." },
    pillars: [
      { n: "I", h: "Readings", p: "Bilingual script readings that bring new and classic work into the room — low barrier, high intimacy." },
      { n: "II", h: "Performances", p: "Full productions staged in Vancouver venues, with attention to translation, accessibility, and craft." },
      { n: "III", h: "Workshops", p: "Practitioner-led sessions on acting, dramaturgy, and direction — open to first-timers and veterans alike." },
    ],
  },
  zh: {
    pull: { lead: "戏剧不是一堵墙。", body: "它是一个", accent: "共享空间", tail: "。" },
    pillars: [
      { n: "壹", h: "围读", p: "中英文剧本围读：让新作与经典走进同一个房间，低门槛、高亲密度。" },
      { n: "贰", h: "演出", p: "在温哥华的剧场完成完整制作，关注翻译、可达性与剧场工艺。" },
      { n: "叁", h: "工作坊", p: "由实践者带领的表演、戏剧构作与导演工作坊——欢迎第一次尝试，也欢迎老朋友。" },
    ],
  },
};

export const siteEvents = {
  en: {
    eyebrow: "Events / Archive",
    titleLead: "Past, present, and",
    titleEm: "what's next.",
    lead: "Performances, readings, workshops, and collaborative projects — archived as they happen, organized by season.",
    sectionPast: "Archive",
    sectionUpcoming: "Upcoming",
    sections: {
      fullProduction: "Full Production",
      scriptReading: "Script Reading",
      stagedReading: "Staged Reading",
      actingWorkshop: "Acting Workshop",
      meetup: "Meetup",
    },
    empty: "No upcoming events. Follow us for the next announcement.",
  },
  zh: {
    eyebrow: "活动 / 归档",
    titleLead: "过往、现在，以及",
    titleEm: "正在到来的。",
    lead: "演出、围读、工作坊、共创项目——按时序归档，依季度整理。",
    sectionPast: "已结束",
    sectionUpcoming: "即将到来",
    sections: {
      fullProduction: "正式制作",
      scriptReading: "剧本朗读",
      stagedReading: "剧本围读",
      actingWorkshop: "表演工作坊",
      meetup: "交流活动",
    },
    empty: "暂无即将到来的活动。关注我们以获取下一次公告。",
  },
};

export const siteContact = {
  en: {
    cells: [
      {
        label: "Email",
        value: "vancouver.fwd@gmail.com",
        meta: "Reply within ~3 days",
        href: "mailto:vancouver.fwd@gmail.com",
        icon: "/assets/social/email.png",
      },
      {
        label: "Instagram",
        value: "@vanfwd",
        meta: "Posters, recaps, calls",
        href: "https://www.instagram.com/vanfwd",
        icon: "/assets/social/ins.avif",
      },
      {
        label: "RedNote",
        value: "Stage 4th Society",
        meta: "小红书 · production diaries",
        href: "http://xhslink.com/m/7VOFBgRY4ym",
        icon: "/assets/social/xiaohongshu.png",
      },
      {
        label: "WeChat",
        value: "van_fwd",
        meta: "Add by ID for working groups",
        href: "#",
        icon: "/assets/social/wechat.png",
      },
    ],
  },

  zh: {
    cells: [
      {
        label: "邮箱",
        value: "vancouver.fwd@gmail.com",
        meta: "通常 3 天内回复",
        href: "mailto:vancouver.fwd@gmail.com",
        icon: "/assets/social/email.png",
      },
      {
        label: "Instagram",
        value: "@vanfwd",
        meta: "海报、回顾、招募",
        href: "https://www.instagram.com/vanfwd",
        icon: "/assets/social/ins.jpeg",
      },
      {
        label: "小红书",
        value: "Stage 4th Society",
        meta: "制作日记 / 排练记录",
        href: "http://xhslink.com/m/7VOFBgRY4ym",
        icon: "/assets/social/xiaohongshu.png",
      },
      {
        label: "微信",
        value: "van_fwd",
        meta: "通过 ID 添加，进入工作群",
        href: "#",
        icon: "/assets/social/wechat.png",
      },
    ],
  },
};

export const siteFooter = {
  en: {
    markLead: "Where the ",
    markAccent: "wall",
    markTail: " falls, connection begins.",
    desc: "Stage 4th Society — 第四面墙拆除队. A Vancouver-based non-profit theatre organization. Readings, performances, workshops, and collaborative projects.",
    cols: [
      { h: "Site", items: [["Home", "/en"], ["About", "/en/about"], ["Events", "/en/events"], ["Contact", "/en/contact"]] },
      { h: "Reach", items: [["Email", "mailto:vancouver.fwd@gmail.com"], ["Instagram", "https://www.instagram.com/vanfwd"], ["RedNote", "http://xhslink.com/m/7VOFBgRY4ym"], ["WeChat: van_fwd", "#"]] },
      { h: "Latest", items: [["Proof / 求证", "/en/events/proof-2026-04-26"], ["Archive", "/en/events"]] },
    ],
    meta: ["© Stage 4th Society 2026", "Vancouver, BC, Canada", "Built with Astro · Cloudflare Pages"],
  },
  zh: {
    markLead: "墙倒下的地方，",
    markAccent: "连接",
    markTail: "才能生长。",
    desc: "第四面墙拆除队 Stage 4th Society。一个活跃于温哥华的非营利戏剧组织——围读、演出、工作坊与共创项目。",
    cols: [
      { h: "站点", items: [["首页", "/zh"], ["关于", "/zh/about"], ["活动", "/zh/events"], ["联系我们", "/zh/contact"]] },
      { h: "联系", items: [["邮箱", "mailto:vancouver.fwd@gmail.com"], ["Instagram", "https://www.instagram.com/vanfwd"], ["小红书", "http://xhslink.com/m/7VOFBgRY4ym"], ["微信：van_fwd", "#"]] },
      { h: "最新", items: [["求证 Proof", "/zh/events/proof-2026-04-26"], ["归档", "/zh/events"]] },
    ],
    meta: ["© 第四面墙拆除队 2026", "Vancouver, BC, Canada", "Astro · Cloudflare Pages"],
  },
};

export function alternateLang(lang: Lang) {
  return lang === "zh" ? "en" : "zh";
}

export function localizePath(pathname: string, nextLang: Lang) {
  if (pathname === "/" || pathname === "") return `/${nextLang}`;
  if (pathname.startsWith("/zh")) return pathname.replace(/^\/zh/, `/${nextLang}`);
  if (pathname.startsWith("/en")) return pathname.replace(/^\/en/, `/${nextLang}`);
  return `/${nextLang}`;
}
