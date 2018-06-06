'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PARSE_SERVER_APPLICATION_ID: JSON.stringify(process.env.PARSE_SERVER_APPLICATION_ID),
  PARSE_SERVER_URL: JSON.stringify(process.env.PARSE_SERVER_URL)
})
