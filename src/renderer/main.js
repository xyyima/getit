import Vue from 'vue'
import axios from 'axios'
import vuetify from '@/plugins/vuetify'
import App from './App'
import router from './router'
import store from './store'
// const customTitlebar = require('custom-electron-titlebar')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
// new customTitlebar.Titlebar({
//   backgroundColor: customTitlebar.Color.fromHex('#444'),
//   icon: 'static/logo.png'
// })

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  vuetify,
  template: '<App/>'
}).$mount('#app')
