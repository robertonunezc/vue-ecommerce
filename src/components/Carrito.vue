<template>
	<div class="wrapper-carrito">
		<h3 class="display-5">Resumen del pedido</h3>
		<hr>
		<div class="row">
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
						<item-articulo-carrito v-for="articulo in carrito.articulos"
						:key="articulo.clave"
						:articulo="articulo">							
					</item-articulo-carrito>
				</tbody>
			</table>
		</div>
	</div>
	<div class="row mb-3">
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
			<button class="btn btn-success btn-block">PAGAR</button>
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
				articulo: null,	
				subTotal: 0		
			}
		},
		computed: {
			carrito() {
				let carrito = this.$store.getters.carrito
				console.log("carrito", carrito)
				return carrito
			}
		},
		
	}
</script>

<style lang="css" scoped>
</style>