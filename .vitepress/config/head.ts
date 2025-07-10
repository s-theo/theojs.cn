import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/avatar-mini.webp' }],
  ['link', { rel: 'canonical', href: 'https://theojs.cn/' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'description', content: 'Theo Homepage' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Theo Homepage' }],
  ['meta', { property: 'og:title', content: 'Theo Homepage' }],
  ['meta', { property: 'og:url', content: 'https://theojs.cn/' }],
  ['meta', { property: 'og:image', content: 'https://i.theojs.cn/logo/theojs-og.webp' }],
  ['meta', { property: 'og:description', content: 'Theo Homepage' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:creator', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo Homepage' }],
  ['meta', { name: 'twitter:description', content: 'Theo Homepage' }],
  ['meta', { name: 'twitter:image', content: 'https://i.theojs.cn/logo/theojs-og.webp' }]
]
