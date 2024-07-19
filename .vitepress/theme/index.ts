import { VPCarbon } from 'vitepress-carbon'
import HomeUnderline from './components/HomeUnderline.vue'
import './var.scss'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  extends: VPCarbon,
  enhanceApp({ app }) {
    app.component('Home', HomeUnderline)
  }
}
