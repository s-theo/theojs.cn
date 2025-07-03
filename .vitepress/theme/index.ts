import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import { Footer, Underline } from '@theojs/lumen'
import '@theojs/lumen/style'

import { Footer_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Footer, { Footer_Data })
    })
  },
  enhanceApp: ({ app }) => {
    app.component('Home', Underline)
  }
}
