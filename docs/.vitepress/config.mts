import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Davonte Rules',
  description: '精简实用的代理分流规则：Surge / Quantumult X / Loon / Clash 通用',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quickstart' },
      { text: '规则列表', link: '/rules' },
      { text: 'GeoIP 库', link: '/geoip' },
    ],
    sidebar: [
      { text: '快速开始', link: '/quickstart' },
      { text: '规则列表', link: '/rules' },
      { text: 'GeoIP 库', link: '/geoip' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dmulle12/rules' },
    ],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    footer: {
      message: '规则由 GitHub Actions 每日自动构建',
      copyright: 'davonte.me',
    },
  },
})
