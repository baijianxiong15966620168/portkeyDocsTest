import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/baijianxiong15966620168/portkeyDocsTest',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ]
}

export default config
