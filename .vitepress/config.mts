import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "事线",
  description: "多项目时间线记录工具",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'About', link: '/pages/about' },
      { text: 'App Store', link: 'https://apps.apple.com/cn/app/%E4%BA%8B%E7%BA%BF-%E4%B8%B2%E4%BA%8B%E6%88%90%E7%BA%BF/id1662454742' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/pages/about' },
          { text: '常见问题', link: '/pages/faq' },
          { text: '成就墙', link: '/pages/achievement' },
          { text: '更新日志', link: '/pages/log' },
        ]
      },
      {
        text: '开发',
        items: [
          { text: 'Roadmap', link: '/pages/roadmap' }
        ]
      },
      {
        text: '共建',
        items: [
          { text: '用户群', link: '/pages/user' }
        ]
      },
      {
        text: '隐私与协议',
        items: [
          { text: '隐私政策', link: '/pages/private' },
          { text: '用户协议', link: '/pages/agreement' }
        ]
      }
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    footer: {
      message: '事线 - 多项目时间线记录工具',
      copyright: 'Copyright © 2023-present Eventline'
    }
  },
  markdown: {
    config: (md) => {
      md.use(taskLists, {
        disabled: false,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
    }
  }
})
