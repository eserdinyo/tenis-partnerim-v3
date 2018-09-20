import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false

Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
