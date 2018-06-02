import { store } from '../store'

export default (to, from, next) => {
	console.log('revisando ruta', to)
	if (store.getters.usuario!=null) {
		next()
	} else {
		next('/login')
	}
}
