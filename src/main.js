import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'
import store from './store'
import '@/assets/scss/index.scss'

import { AUTH } from "@/firebase";
import './firebase/config'

Vue.config.productionTip = false

Vue.use(VeeValidate);


let app;
AUTH.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
});
