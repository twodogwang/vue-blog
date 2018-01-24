import Vue from 'vue'
import Router from 'vue-router'
// import App from '@/App'
// import main from '@/view/layout/'
import index from '@/view/articleList'
import article from '@/view/articleDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/article/:id',
    name: 'article',
    component: article
  }]
})
