const path = require('path')
require('dotenv').config()

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    MESSAGE_ID: process.env.MESSAGE_ID,
    APP_ID: process.env.APP_ID,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/style')]
  }
}