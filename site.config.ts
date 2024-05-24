import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://lerdb.github.io/",
  lang: "zh-CN",
  title: "lerdb的博客",
  author: {
    name: "lerdb",
    avatar: "https://avatars.githubusercontent.com/u/62736171",
    email: 'lerd233@gmail.com',
    link: 'https://github.com/lerdb',
  },
  /**
   * 站点图标
   */
  favicon: "https://avatars.githubusercontent.com/u/62736171",
  /**
   * 副标题
   */
  subtitle: "Always believe the world will be better.",
  description: "",
  social: [
    {
      name: "RSS",
      link: "/atom.xml",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    {
      name: "GitHub",
      link: "https://github.com/lerdb",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "E-Mail",
      link: "mailto:lerd233@gmail.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
    ],
  },

  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  /**
   * 默认 Frontmatter
   */
  frontmatter: {
    time_warning: true,
  },
  mediumZoom: {
    enable: true,
  },
});
