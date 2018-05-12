import Vue from 'vue'
import Router from 'vue-router'
import CreateMetaResagada from '@/components/CreateMetaResagada'
import ListadoMetasRezagadas from '@/components/ListadoMetasRezagadas'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Carrito from '@/components/Carrito'
import DetalleArticulo from '@/components/DetalleArticulo'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path: '/login',
		name: 'Login',
		component: Login
	},{
		path: '/carrito',
		name: 'Carrito',
		component: Carrito
	},{
		path: '/detalle-articulo/:claveArticulo+',
		name: 'DetalleArticulo',
		component: DetalleArticulo
	}
	]
})
