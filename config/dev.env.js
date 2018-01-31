'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log(prodEnv)


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_URL: "'http://192.168.0.108:8360/blog'",// 在家
  BASE_URL: '"http://192.168.88.219:8360/blog"', // 在公司
  /* output: function (xiaoyang) {
    if (this !== undefined) {
      console.log(`${xiaoyang}                   <=== from ${this.$route.name}.vue`);
    } else {
      console.log(xiaoyang)
    }
  } */
})
