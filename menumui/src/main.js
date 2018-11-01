// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui.ttf'
import mui from './assets/js/mui.min.js'
import './assets/css/mui.min.css'
Vue.prototype.mui = mui
Vue.prototype.$axios = axios;
Vue.config.productionTip = false


Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
