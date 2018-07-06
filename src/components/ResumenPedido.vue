<template>
	<div>
		<h2>Resumen de pedido</h2>

		<div class="row">
			<div class="col-md-6">
				<table class="table table-striped">						
					<tr>
						<td>
							Usuario
						</td>
						<td>
							{{usuario.usuario}}
						</td>
					</tr>
					<tr>
						<td>
							Nombre Completo
						</td>
						<td>
							{{usuario.nombre}} {{usuario.apellidos}}
						</td>
					</tr>
					<tr>
						<td>
							Correo electrónico
						</td>
						<td>
							{{usuario.email}}
						</td>
					</tr>
					<tr>
						<td>
							RFC
						</td>
						<td>
							{{usuario.rfc}}
						</td>
					</tr>
					<tr>
						<td>
							Dirección envío
						</td>
						<td>
							{{usuario.calle}} # {{usuario.num_ext}},{{usuario.colonia}}, {{usuario.municipio.municipio}}
							,{{usuario.estado.estado}}, CP {{usuario.cp}}
						</td>
					</tr>
				</table>
			</div>
			<div class="col-md-6">
				<table class="table table-bordered">
					<thead>
						<th></th>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Total</th>				
					</thead>
					<tbody>
						<item-articulo-carrito
						v-for="articulo in carrito.articulos"
						:key="articulo.clave"
						:articulo="articulo"
						:editable="false"
						>							
					</item-articulo-carrito>
				</tbody>
			</table>
			<div>
				<h5><strong>Total:${{carrito.total}}</strong></h5>
			</div>
			<button class="btn btn-block btn-success" @click.stop="onProcesarPedido">Estoy seguro. Realizar pedido</button>
		</div>
	</div>
</div>
</template>

<script>
import itemArticuloCarrito from '@/components/ItemArticuloCarrito.vue';
import config from '../../config/index'
import axios from 'axios'

export default {
	name: 'ResumenPedido',
	components: {
		itemArticuloCarrito: itemArticuloCarrito
	},
	data () {
		return {
			
		}		
	},
	computed: {
		carrito(){
			return this.$store.getters.carrito		
		},
		usuario(){
			return this.$store.getters.usuario
		}
	},
	methods:{
		onProcesarPedido(){
			const carrito = this.$store.getters.carrito
			const token = this.$store.getters.token
			let params = new URLSearchParams()
			params.append('token', token)
			params.append('carrito', carrito.id)
			params.append('status', 2)	
			const url = `${config.urlBase}process_carrito` 
			axios.post(url,params)
			.then(response =>{
				console.log(response.data.rc)
				if (response.data.rc == 0 ) {
					this.$store.dispatch('limpiarCarrito')
					this.$router.push({'name':'PedidoExitoso'})
				}else{
					alert('Ocurrió un error procesando su pedido. Intente más tarde')
				}
			})
			.catch(err =>{
				console.log(err)
				alert('Ocurrió un error procesando su pedido. Intente más tarde')

			})

		}
	}
	
}
</script>

<style lang="css" scoped>
</style>