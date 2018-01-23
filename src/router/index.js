import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
// import main from '@/view/layout/'
import test from '@/view/articleList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: test
  }]
})
