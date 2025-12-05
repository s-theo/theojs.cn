import type { MarkdownOptions } from 'vitepress'

import { figure } from '@mdit/plugin-figure'
import { footnote } from '@mdit/plugin-footnote'
import { imgSize, obsidianImgSize } from '@mdit/plugin-img-size'
import { tasklist } from '@mdit/plugin-tasklist'

export const markdown: MarkdownOptions = {
  theme: { light: 'one-light', dark: 'dracula-soft' },
  image: { lazyLoading: true },
  config(md) {
    md.use(footnote)
    md.use(tasklist)
    md.use(imgSize)
    md.use(obsidianImgSize)
    md.use(figure)
  }
}
