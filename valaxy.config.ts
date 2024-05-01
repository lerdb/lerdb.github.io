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
      'url': 'https://i.mji.rip/2024/05/01/ae0ac69c7438263f283a212069be29c5.png',
      'dark':'https://i.mji.rip/2024/05/01/ae0ac69c7438263f283a212069be29c5.png',
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
