import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Davonte Rules',
  description: 'Lean, practical proxy routing rules: Surge / Quantumult X / Loon / Clash',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quickstart' },
      { text: 'Rule Sets', link: '/rules' },
      { text: 'GeoIP Database', link: '/geoip' },
    ],
    sidebar: [
      { text: 'Quick Start', link: '/quickstart' },
      { text: 'Rule Sets', link: '/rules' },
      { text: 'GeoIP Database', link: '/geoip' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dmulle12/rules' },
    ],
    footer: {
      message: 'Rule sets are rebuilt daily by GitHub Actions',
      copyright: 'davonte.me',
    },
  },
})
