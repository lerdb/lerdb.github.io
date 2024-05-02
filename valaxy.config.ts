import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    bg_image: {
      'enable': true,
      'url': 'https://lerdb.github.io/109301396.png',
      'dark':'https://lerdb.github.io/109301396.png',
      'opacity': 0.3,
    },
    banner: {
      enable: false,
      title: '',
      cloud: {
        enable: false,
      },
    },

    pages: [
      // {
      //   name: '',
      //   url: '/path/',
      //   icon: 'i-ri-icon-line',
      //   color: '',
      // },
    ],

    footer: {
      since: 2024,
      icon: {
        enable: false
      },
      // powered: false,
      // beian: {
      //   enable: true,
      //   icp: '',
      // },
    },
  },

  unocss: { safelist },
})
