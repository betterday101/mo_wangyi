import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage/MainPage'
import ShiWu from '../pages/ShiWu/ShiWu'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'


Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/mainpage',
      component: MainPage
    },
    {
      path: '/shopcart',
      component:ShopCart
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/personal',
      component:Personal
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
