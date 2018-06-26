import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Carrito from '@/components/Carrito'
import DetalleArticulo from '@/components/DetalleArticulo'
import ResumenPedido from '@/components/ResumenPedido'
import Perfil from '@/components/Perfil'


Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: AuthGuard

	},{
		path: '/login',
		name: 'Login',
		component: Login
	},{
		path: '/logout',
		name: 'Logout',	
		beforeEnter: AuthGuard

	},{
		path: '/carrito',
		name: 'Carrito',
		component: Carrito,
		beforeEnter: AuthGuard
	},{
		path: '/perfil',
		name: 'Perfil',
		component: Perfil,
		beforeEnter: AuthGuard
	},{
		path: '/resumen-pedido',
		name: 'ResumenPedido',
		component: ResumenPedido,
		beforeEnter: AuthGuard
	},{
		path: '/detalle-articulo/:claveArticulo+',
		name: 'DetalleArticulo',
		component: DetalleArticulo,
		beforeEnter: AuthGuard

	}
	]
})
