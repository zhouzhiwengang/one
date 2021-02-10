import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login';
import home from '@/components/home';
// 功能页面
import centre from '@/components/views/centre'

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
      component: home
    }
    {
      path: '/centre',
      name: 'centre',
      component: centre
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
