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
						<tr v-for="articulo in carrito.articulos">
							<td>
								<img width="80px" class="d-block m-0" src="https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg">	
							</td>
							<td>
								<p>{{articulo.articulo.clave}}
									{{articulo.articulo.clave_unidad}}
									{{articulo.articulo.descripcion}}
								</p>
							</td>
							<td>
								<p>${{articulo.articulo.precio}}</p>
							</td>
							<td>
								<input type="number" name="cantidad" :value="articulo.cantidad" />
							</td>
							<td>
								<p>${{articulo.total}}</p>
							</td>
							<td>
								<div class="btn btn-danger btn-sm"								
								@click="onBorrarArticulo(articulo.articulo.clave)">Borrar</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-md-4 offset-8">
				<div class="subtotal d-flex">
					<div class="subtotal_label bg-light p-md-3">Subtotal</div>
					<div class="subtotal_value p-md-3">${{carrito.total}}</div>
				</div>
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
	export default {

		name: 'Carrito',

		data () {
			return {
				articulo: null,	
				total: 0,
				subTotal: 0		
			}
		},
		computed: {
			carrito() {
				let carrito = this.$store.getters.carrito
				console.log("carrito", carrito)
				return carrito
			},			
		},
		methods: {
			onBorrarArticulo(articuloClave){
				console.log("Clave", articuloClave)
				let carrito = this.$store.getters.carrito		
				let indexArticulo = carrito.articulos.findIndex(itemArticulo=>{
					return itemArticulo.articulo.clave == articuloClave
				})
				let articulo = carrito.articulos[indexArticulo]		
				let totalArticulo = articulo.articulo.precio * articulo.cantidad
				console.log("Total", totalArticulo)
				if (carrito.total > 0) {
					let nuevoTotal = carrito.total  -totalArticulo
					carrito.total = Math.round(nuevoTotal * 100) / 100
				}						
				carrito.articulos.splice(indexArticulo,1)
				this.$store.dispatch('borrarArticuloCarrito', carrito)
			}
		}
	}
</script>

<style lang="css" scoped>
</style>