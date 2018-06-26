// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/'
import * as firebase from 'firebase'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
export const eventBus = new Vue({})
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },	
	created () {
		this.$store.dispatch('cargarClaves')
		this.$store.dispatch('cargarFamilias')
		this.$store.dispatch('cargarLineas')
    //firebase.database().ref('articulos/').set(articulosDummy);
}
})
