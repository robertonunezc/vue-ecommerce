import { store } from '../store'

export default (to, from, next) => {
	if (store.getters.usuario!=null) {
		next()
	} else {
		next('/login')
	}
}
