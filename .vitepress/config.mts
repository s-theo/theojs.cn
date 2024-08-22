import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Theo-Messi',
  lang: 'zh-CN',
  description: '',
  // appearance: 'force-dark',
  metaChunk: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://theojs.cn' },
  head: [['link', { rel: 'icon', href: 'https://i.theojs.cn/avatar.png' }]],
  themeConfig: {
    logo: 'https://i.theojs.cn/avatar.png',
    siteTitle: false
  }
})
