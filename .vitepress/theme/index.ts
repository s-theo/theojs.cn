import { h } from 'vue'
import { VPCarbon } from 'vitepress-carbon'

import { Announcement, HomeUnderline } from '@theojs/lumen'

import '@theojs/lumen/theme'
import './var.scss'

export default {
  extends: VPCarbon,
  Layout: () => {
    return h(VPCarbon.Layout, null, {
      'home-hero-info-before': () => h(Announcement)
    })
  },
  enhanceApp({ app }) {
    app.component('Home', HomeUnderline)
  }
}
