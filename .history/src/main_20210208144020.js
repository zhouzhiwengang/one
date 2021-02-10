// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '../node_modules/axios'

Vue.config.productionTip = false

Vue.use(ElementUI);
// 设置跨域
axios.defaults.withCredentials = true
// 设置后端请求地址
axios.defaults.baseURL='http://localhost:8099/layui'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
