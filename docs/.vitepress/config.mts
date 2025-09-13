import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wuhao-vitepress/',
  title: "吴浩的个人仓库",
  description: "A VitePress Site",
  themeConfig: {
     // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '仓库', link: '/markdown-examples' }
    ],
// 侧边栏
    sidebar: [
      {
        text: '规范',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'AAA', link: '/挖的' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuhaotdcq-s' }
    ]
  },
    markdown: {
    config: (md) => {
      // 注册 katex 插件
      md.use(katex, {
        // 可选配置（参考 KaTeX 文档）
        throwOnError: false, // 忽略渲染错误
        displayMode: false
      })
    }
  },
  // 引入 KaTeX 样式（必须添加，否则公式无样式）
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }]
  ]
})
