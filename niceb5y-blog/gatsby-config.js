const generateConfig = require('common/utils/generateConfig')

const config = {
  title: 'niceb5y blog',
  author: 'niceb5y',
  description: '몇번째 갈아엎는지 모를 블로그',
  siteUrl: 'https://blog.niceb5y.net/',
  twitter: 'niceb5y',
  copyright: '© 2014-2021 niceb5y',
  trackingId: 'UA-80539013-1',
}

module.exports = generateConfig(config, __dirname)
