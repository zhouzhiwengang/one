import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import home from '@/components/home';
// 功能页面
import centre from '@/components/views/centre'
import member from '@/components/views/member'

import address from '@/components/views/address'
import favorite from '@/components/views/favorite'
import footprint from '@/components/views/footprint'
import search from '@/components/views/search'
import opinion from '@/components/views/opinion'

Vue.use(Router)
 
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: '/centre',
        name: 'centre',
        component: centre
      },
      {
        path: '/member',
        name: 'member',
        component: member
      },
      {
        path: '/address',
        name: 'address',
        component: address
      },
      {
        path: '/favorite',
        name: 'favorite',
        component: favorite
      },
      {
        path: '/footprint',
        name: 'footprint',
        component: footprint
      },
      {
        path: '/search',
        name: 'search',
        component: search
      },
      {
        path: '/opinion',
        name: 'opinion',
        component: opinion
      }
    ]
    }
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
 
export default router;
