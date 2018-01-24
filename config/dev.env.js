'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: "'http://192.168.0.108:8360/blog'",// 在家
  // BASE_URL: '"http://127.0.0.1:8360/blog"'// 在公司
})
