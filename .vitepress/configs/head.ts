import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/avatar-mini.webp' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: '机场推荐与评测' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: '机场推荐与评测' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  [
    'meta',
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
]
