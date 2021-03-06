import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './assets/scss/app.scss'
import 'material-icons/iconfont/material-icons.css'
import './registerServiceWorker'

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
