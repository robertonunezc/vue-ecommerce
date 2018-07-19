<template>
	<div class="col-lg-3 col-md-6 mb-4 col-sm-6">
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
				<a href="#" class="btn btn-primary"
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
		}
	},		
	methods: {
		addProductoCarrito () {
			let articulo = {
				'articulo': this.articulo,
				'cantidad': 1
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
</style>