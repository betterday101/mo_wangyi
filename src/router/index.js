import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage/MainPage'

Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/mainPage',
      component: MainPage
    },
    {
      path: '/',
      redirect: '/mainPage'
    }
  ]
})
