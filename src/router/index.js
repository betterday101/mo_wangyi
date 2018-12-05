import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage/MainPage'
import ShiWu from '../pages/ShiWu/ShiWu'
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/mainPage',
      component: MainPage
    },
    {
      path: '/shiwu',
      component:ShiWu
    },
    {
      path: '/',
      redirect: '/mainPage'
    }
  ]
})
