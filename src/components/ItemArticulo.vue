<template>
	<div class="col col-sm-6 col-md-4 col-lg-3 mb-3 item-articulo">
		<div class="card">
			<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
				<img class="card-img-top" :src="articulo.imagen" width="244" height="180" alt="">
			</router-link>
			<div class="card-body">
				<h4 class="card-title">
					<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
						<span class="badge badge-primary">{{articulo.clave}}</span>					
					</router-link>
					<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
						<span class="badge badge-success">{{articulo.familia}}</span>
					</router-link>
				</h4>
				<p class="card-text">{{articulo.descripcion}}</p>				
			</div>
			<div class="card-footer">
				<input @change="onActualizarCantidad" class="cantidad-prod" type="number" v-model="cantidad">
				<a href="#" class="btn btn-warning"
				@click="addProductoCarrito">
				Comprar
				${{articulo.precio}}
			</a>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props:['articulo'],
	name: 'ItemProducto',
	data () {
		return {
			cantidad:1
		}
	},		
	methods: {
		onActualizarCantidad(){
			let articulosCarrito = this.$store.getters.carrito.articulos
			const estaAgregado = articulosCarrito.some(articulo => articulo.articulo.clave == this.articulo.clave)
			if (estaAgregado) {
				this.cantidad = 1
				alert('Este producto está agregado al carrito. Modifique su compra en la pantalla de Carrito :)')
				return
			}
			console.log(articulosCarrito)
			if (this.cantidad <= 0) {
				alert('La cantidad debe ser mayor a 0')
				this.cantidad = 1
				return
			}
		},
		addProductoCarrito () {
			let articulo = {
				'articulo': this.articulo,
				'cantidad':this.cantidad
			}
			if(this.$store.getters.usuario && this.$store.getters.carrito){
				this.$store.dispatch('actualizarCarrito',articulo)				
				alert('Producto Agregado')				
				return
			}
			if (this.$store.getters.usuario && this.$store.getters.carrito == null) {
				this.$store.dispatch('crearCarrito', articulo)
			}else{
				alert('Debe iniciar sesión para poder comprar')
			}

		}
	}
	
}
</script>

<style lang="css" scoped>
.cantidad-prod {
	max-width: 141px;
	margin-bottom: 10px;
}
</style>