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
      'url': 'https://i.mji.rip/2024/05/02/ab93aecafda150d01814d9e1ae8efc94.png',
      'dark':'https://i.mji.rip/2024/05/02/ab93aecafda150d01814d9e1ae8efc94.png',
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
      powered: true,
      beian: {
        enable: false,
        icp: '',
      },
    },
  },

  unocss: { safelist },
})
