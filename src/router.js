import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})