// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
})

/* eslint-disable no-new */

Vue.prototype.xiaoyang = function (xiaoyang) {
  const env = process.env.NODE_ENV;
  switch (env) {
    case 'development':
      console.log(xiaoyang, `                   <=== from ${this.$route.name}.vue`);
      break;
    default:
      return;
      break;
  }
}

function output(xiaoyang) {
  console.log(process.env.NODE_ENV)
  process.env.NODE_ENV == 'development' && console.log(xiaoyang)
}
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
})
