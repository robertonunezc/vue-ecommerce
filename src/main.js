// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/'
import * as firebase from 'firebase'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAxeS-1McXnKWF0leHartpOF7illkgm55g",
      authDomain: "firechat-3caa0.firebaseapp.com",
      databaseURL: "https://firechat-3caa0.firebaseio.com",
      projectId: "firechat-3caa0",
      storageBucket: "firechat-3caa0.appspot.com",
      messagingSenderId: "638485700110"
    })
    //this.$store.dispatch('cargarMetasRezagadasCreadas')
  }
})
