const generateConfig = require('common/utils/generateConfig')

const config = {
  title: 'seungho.dev',
  author: 'Seungho Kim',
  description: '(일단은) 개발 블로그',
  siteUrl: 'https://seungho.dev/',
  twitter: 'niceb5y',
  copyright: '© 2020-2022 Seungho Kim',
  trackingId: 'UA-157538967-1',
}

module.exports = generateConfig(config, __dirname)
