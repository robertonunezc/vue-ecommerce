<template>
	<div class="itemxs-articulo">
		<img class="card-img-top" :src="articulo.imagen" width="244" height="180" alt="">
		<div class="">
			<h6 class="card-title">
				<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
					<span class="badge badge-primary">{{articulo.clave}}</span>					
				</router-link>
				<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
					<span class="badge badge-success">{{articulo.familia}}</span>
				</router-link>
			</h6>
			<p class="card-text">{{articulo.descripcion}}</p>				
		</div>
		<a href="#" class="btn btn-primary"
		@click="addProductoCarrito">
		Comprar
		${{articulo.precio}}
	</a>
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
.itemxs-articulo {
	display:flex;
	flex-direction: column;	
	width: 45%;
	margin: 5px;
}
</style>