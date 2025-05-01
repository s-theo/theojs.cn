import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/avatar.webp' }],
  ['link', { rel: 'canonical', href: 'https://theojs.cn/' }],
  [
    'meta',
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo-Messi' }],
  ['meta', { name: 'copyright', content: 'Theo-Messi' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'description', content: 'Theo-Messi Homepage' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-CN' }],
  ['meta', { property: 'og:site_name', content: 'Theo-Messi Homepage' }],
  ['meta', { property: 'og:title', content: 'Theo-Messi Homepage' }],
  ['meta', { property: 'og:url', content: 'https://theojs.cn/' }],
  [
    'meta',
    { property: 'og:image', content: 'https://i.theojs.cn/avatar.webp' }
  ],
  ['meta', { property: 'og:description', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:creator', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo-Messi Homepage' }],
  ['meta', { name: 'twitter:description', content: 'Theo-Messi Homepage' }],
  [
    'meta',
    { name: 'twitter:image', content: 'https://i.theojs.cn/avatar.webp' }
  ],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: 'https://theojs.cn/',
        name: 'Theo-Messi Homepage',
        description: 'Theo-Messi Homepage',
        inLanguage: 'zh-CN',
        author: { '@type': 'Person', name: 'Theo-Messi' },
        publisher: {
          '@type': 'Organization',
          name: 'Theo-Messi',
          logo: {
            '@type': 'ImageObject',
            url: 'https://i.theojs.cn/avatar.webp'
          }
        }
      })
    }
  ]
]
