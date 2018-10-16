// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import MintUI from 'mint-ui'
import store from './vuex'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io';

Vue.use(MintUI)
Vue.use(VueSocketio, socketio('http://localhost:4000',{transports:['websocket','xhr-polling','jsonp-polling']}),store); 

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
