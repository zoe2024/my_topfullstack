import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'
import axios from 'axios'

import EleForm from 'vue-ele-form'
// 注册 vue-ele-form
Vue.use(EleForm)

const http = axios.create({
  baseURL: 'http://localhost:8000'
})
// debugger
Vue.prototype.$httpajax = http
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
