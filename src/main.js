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
    this.$store.dispatch('cargarArticulos')
    let articulosDummy = [
    {      
      clave: '3444',
      descripcion: 'descripcion largaaaaa',
      imgUrl:'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg',
      linea: '3CM01',
      precio:'6.00'
    },{      
      clave: '3133',
      descripcion: 'descripcion largaaaaa',
      imgUrl:'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg',
      linea: '3VM01',
      precio:'3.00'
    }
    ]
    //firebase.database().ref('articulos/').set(articulosDummy);

  }
})
