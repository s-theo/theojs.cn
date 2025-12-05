import { defineConfig } from 'vitepress'

import { head, markdown, transformPageData } from './configs'

const code = '<span class="VPBadge tip small" aria-hidden="true">附折扣码</span>'

export default defineConfig({
  title: '机场评测与推荐',
  lang: 'zh-Hans',
  description: '机场评测与推荐',
  appearance: 'force-auto',
  metaChunk: true,
  cleanUrls: true,
  lastUpdated: true, // 上次更新时间戳
  markdown,
  // sitemap: { hostname: 'https://theojs.cn' },
  srcDir: 'content',
  head,
  transformPageData,
  themeConfig: {
    // logo: 'https://i.theojs.cn/logo/avatar-mini.webp',
    nav: [
      { text: '所有评测', link: '/qingyunti' },
      { text: '流媒体合租', link: 'https://doc.theojs.cn/serve/sharing/account-sharing-guide' }
    ],
    sidebar: [
      {
        items: [
          { text: '青云梯' + code, link: 'qingyunti' },
          { text: '极连云', link: 'hyperlink' },
          { text: '星岛梦' + code, link: 'xdm' },
          { text: 'Galaxy Cloud - 银河云', link: 'galaxy' },
          { text: 'TNT Cloud' + code, link: 'tnt' },
          { text: 'FlyingBird - 飞鸟机场' + code, link: 'flyingbird' },
          { text: 'Totoro Cloud - 龙猫云', link: 'totoro' },
          { text: '小蜜蜂' + code, link: 'bee' },
          { text: 'OKANC' + code, link: 'okanc' }
        ]
      }
    ],
    socialLinks: [{ icon: 'telegram', link: 'https://t.me/s_theo', ariaLabel: 'Telegram' }],
    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于'
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    skipToContentLabel: '跳转到内容',

    // markdown 外部链接图标
    externalLinkIcon: true,

    // 语言切换
    langMenuLabel: '切换语言',

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    // 404 配置
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }

    //页脚
    // footer: {
    //   // message: "Released under the MIT License.",
    //   copyright: 'Copyright © 2025-present Youno'
    // }
  }
})
