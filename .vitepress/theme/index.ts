/// <reference types="vite/client" />
import type { EnhanceAppContext } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import * as lm from '@theojs/lumen'
import '@theojs/lumen/style'

import { Footer_Data } from '../data'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(lm.Footer, { Footer_Data })
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext) => {
    lm.umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'theojs.cn'
    })
    app.component('Home', lm.Underline)
    app.component('Links', lm.Links)
  }
}
