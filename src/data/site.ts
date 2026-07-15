export interface SiteLink {
  name: string;
  description: string;
  href: string;
  logo: string;
  category: string;
  key: "docs" | "metaphysics" | "lumen";
}

export interface SiteData {
  name: string;
  motto: string;
  introduction: string;
  destinations: SiteLink[];
}

export const siteData: SiteData = {
  name: "Theo",
  motto: "自助者方得天助",
  introduction: "维护一些关于内容、工具与开源项目的长期站点。",
  destinations: [
    {
      name: "Theo-Docs",
      description: "流媒体森林，一份持续更新的流媒体观影指南。",
      href: "https://doc.theojs.cn/",
      logo: "https://doc.theojs.cn/favicon.svg",
      category: "观影指南",
      key: "docs",
    },
    {
      name: "玄学宝典",
      description: "收录中华传统五术与传世经典著作。",
      href: "https://xx.theojs.cn/",
      logo: "https://xx.theojs.cn/favicon.svg",
      category: "传统典籍",
      key: "metaphysics",
    },
    {
      name: "Lumen",
      description: "为 VitePress 打造的主题美化与 Vue 扩展组件库。",
      href: "https://github.com/s-theo/lumen",
      logo: "https://i.theojs.cn/logo/lumen-logo-large.svg",
      category: "开源项目",
      key: "lumen",
    },
  ],
};
