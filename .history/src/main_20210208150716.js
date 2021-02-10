// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '../node_modules/axios'
import store from'./store'

// 设置跨域
axios.defaults.withCredentials = true
// 设置后端请求地址
axios.defaults.baseURL='http://192.168.1.74:8099/layui'
Vue.prototype.$axios = axios

Vue.use(ElementUI);

Vue.config.productionTip = false
/* eslint-disable no-new */
// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });
 
// 添加响应拦截器，移除token
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('token');
          this.$router.push('/login');
      }
    }
  })


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
