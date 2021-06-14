/*
 * @Author: yuan.zhou
 * @Date: 2021-06-14 10:51:08
 * @Descripton: 入口文件
 * @LastEditTime: 2021-06-14 16:09:04
 */
import Vue from 'vue'
import App from './App.vue'
import http from './http/index'

// 全局插件引入
import './plugin/element-ui'

// 全局路由
import router from './router/index'

// 全局属性挂载
Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
