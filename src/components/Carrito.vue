<template>
	<div class="wrapper-carrito">
		<h3 class="display-5">Resumen del pedido</h3>
		<hr>
		<div v-if="!carrito">
			<div class="alert alert-danger"> No hay productos en su carrito de compras</div>
		</div>
		<div class="row" v-if="carrito">
			<div class="col-sm-12">
				<table class="table table-bordered">
					<thead>
						<th></th>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Total</th>
						<th>Acciones</th>
					</thead>
					<tbody>
						<item-articulo-carrito
						v-for="articulo in carrito.articulos"
						:key="articulo.clave"
						:editable="true"
						:articulo="articulo">							
					</item-articulo-carrito>
				</tbody>
			</table>
		</div>
	</div>
	<div class="row mb-3" v-if="carrito">
		<div class="col-md-4 offset-8">
			<!-- <div class="subtotal d-flex">
				<div class="subtotal_label bg-light p-md-3">Subtotal</div>
				<div class="subtotal_value p-md-3">${{carrito.total}}</div>
			</div> -->
			<div class="subtotal d-flex">
				<div class="subtotal_label bg-light p-md-3">Total</div>
				<div class="subtotal_value p-md-3">${{carrito.total}}</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 offset-8">
			<button class="btn btn-block btn-success" @click.stop="onRealizarPedido">
			REALIZAR PEDIDO</button>		
		</div>
	</div>
</div>
</div>
</template>

<script>
import itemArticuloCarrito from '@/components/ItemArticuloCarrito.vue';

export default {
	props:['articulo'],
	name: 'Carrito',
	components: {
		itemArticuloCarrito: itemArticuloCarrito
	},
	data () {
		return {		
			subTotal: 0					
		}
	},
	computed: {
		carrito() {
			const carrito = this.$store.getters.carrito
			return  carrito		
		}
	},
	methods:{
		onRealizarPedido(){
			if (this.carrito.articulos.length > 0) {
				this.$router.push('/resumen-pedido')
			}else{
				alert('Debe agregar productos al carrito')
			}
		}
	},
	beforeCreate(){
		try {
			console.log("Carrito detalle beforeCreate", this.$store.getters.carrito)
			// statements
		} catch(e) {
			// statements
			console.log('Se rompio antes d crearse');
		}
	},
	created(){
		console.log("Carrito detalle creado", this.$store.getters.carrito)
	}

}
</script>

<style lang="css" scoped>
</style>