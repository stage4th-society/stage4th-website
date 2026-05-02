export type Lang = "zh" | "en";

export const languages: Lang[] = ["zh", "en"];

export const site = {
  url: "https://stage4th-website.vancouver-fwd.workers.dev",
  email: "vancouver.fwd@gmail.com",
  instagram: "https://www.instagram.com/vanfwd?igsh=Nmo0YnltZXl2M2xq",
  xiaohongshu: "http://xhslink.com/m/7VOFBgRY4ym",
  wechatId: "van_fwd",
  logo: "/assets/logo/logo.png",
  xhsQr: "/assets/social/xhs-qr.png",
  brand: {
    zh: "第四面墙拆除队 Stage 4th Society",
    en: "Stage 4th Society 第四面墙拆除队",
  },
  shortBrand: {
    zh: "第四面墙拆除队",
    en: "Stage 4th Society",
  },
};

export const nav = {
  zh: [
    { label: "首页", href: "/zh" },
    { label: "关于我们", href: "/zh/about" },
    { label: "活动", href: "/zh/events" },
    { label: "联系", href: "/zh/contact" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About", href: "/en/about" },
    { label: "Events", href: "/en/events" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const copy = {
  zh: {
    homeTitle: "墙倒下的地方，连接才能生长。",
    homeIntro:
      "第四面墙拆除队是一个活跃于温哥华的非营利戏剧组织，通过剧本围读、舞台演出、工作坊及共创项目，连接舞台与现实、表演者与观众。",
    homeEyebrow: "温哥华非营利戏剧组织",
    featured: "过往演出",
    aboutCta: "了解我们",
    eventsCta: "查看活动",
    followCta: "关注我们",
    aboutTitle: "关于我们",
    aboutBody:
      '"第四面墙拆除队"是一个活跃于温哥华的非营利戏剧组织，致力于打破"第四面墙"——连接舞台与现实、表演者与观众的界限。我们相信，戏剧不仅属于演员或观众，而是一个人人都可以参与、表达与连接的共享空间。\n\n我们通过剧本围读、舞台演出、工作坊及共创项目，鼓励多元表达与交流，让人们在戏剧中探索自我、建立连接。\n\n墙倒下的地方，连接才能生长。',
    fourthWallTitle: "什么是“第四面墙”？",
    fourthWallBody:
      "“第四面墙”（Fourth Wall）是一个戏剧和影视术语，指虚构在镜框式舞台上、将演员与观众分隔开的“无形墙壁”。它默认舞台上是真实的世界，观众则透过这堵“墙”窥视剧情。打破这面墙意指演员直接与观众交流，承认观众的存在。",
    eventsTitle: "活动",
    eventsIntro: "我们的演出、围读、工作坊与共创项目会在这里持续归档。",
    contactTitle: "联系",
    contactIntro: "欢迎通过社交媒体或邮件联系合作、演出、志愿者与社群相关事宜。",
    viewProgram: "查看场刊",
    eventDetails: "演出信息",
    aboutPlay: "关于作品",
    aboutPlaywright: "关于剧作家",
    program: "场刊",
    organizer: "主办方",
    past: "已结束",
    social: "社交媒体",
  },
  en: {
    homeTitle: "Where the wall falls, connection begins.",
    homeIntro:
      "Stage 4th Society is a Vancouver-based non-profit theatre organization creating script readings, performances, workshops, and collaborative projects that connect performers and audiences.",
    homeEyebrow: "Vancouver-based non-profit theatre organization",
    featured: "Past Production",
    aboutCta: "About Us",
    eventsCta: "View Events",
    followCta: "Follow Us",
    aboutTitle: "About",
    aboutBody:
      'Stage 4th Society is a Vancouver-based non-profit theatre organization dedicated to dismantling the "fourth wall" — the invisible boundary between performers and audiences. We see theatre as a shared space where anyone can participate, express, and connect.\n\nThrough script readings, performances, workshops, and collaborative projects, we create participatory theatre experiences that invite people to explore themselves and connect with others.\n\nWhere the wall falls, connection begins.',
    fourthWallTitle: "What Is the Fourth Wall?",
    fourthWallBody:
      'The "fourth wall" is a theatre and film term for the imagined invisible wall separating performers from the audience. Breaking it means directly acknowledging and engaging the audience, making their presence part of the theatrical experience.',
    eventsTitle: "Events",
    eventsIntro: "Our performances, readings, workshops, and collaborative projects are archived here.",
    contactTitle: "Contact",
    contactIntro: "Reach us for collaborations, productions, volunteer opportunities, and community inquiries.",
    viewProgram: "View Program",
    eventDetails: "Event Details",
    aboutPlay: "About the Play",
    aboutPlaywright: "About the Playwright",
    program: "Program",
    organizer: "Organizer",
    past: "Past",
    social: "Social",
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
