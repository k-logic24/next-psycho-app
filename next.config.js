const withSass = require('@zeit/next-sass')
require('dotenv').config()

module.exports = withSass({
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    MESSAGE_ID: process.env.MESSAGE_ID,
    APP_ID: process.env.APP_ID,
  },
  webpack(config) {
    return config
  }
})