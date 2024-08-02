import { h } from 'vue'
import { VPCarbon } from 'vitepress-carbon'
import HomeUnderline from './components/HomeUnderline.vue'
import { Announcement } from 'tmfe/vue'

import './var.scss'
import '@fortawesome/fontawesome-free/css/all.css'

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
