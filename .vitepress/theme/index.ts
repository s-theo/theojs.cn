import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import { Announcement, HomeFooter, HomeUnderline } from '@theojs/lumen'
import '@theojs/lumen/style'

import { Footer_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'layout-bottom': () => h(HomeFooter, { Footer_Data })
    })
  },
  enhanceApp: ({ app }) => {
    app.component('Home', HomeUnderline)
  }
}
