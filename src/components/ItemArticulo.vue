<template>
	<div class="col-lg-3 col-md-6 mb-4">
		<div class="card">
			<router-link :to="{name:'DetalleArticulo', params: { claveArticulo: articulo.clave }}">
				<img class="card-img-top" :src="articulo.imgUrl" alt="">
			</router-link>
			<div class="card-body">
				<h4 class="card-title">
					<a href="">
						<span class="badge badge-primary">{{articulo.clave}}</span>					
					</a>
					<a href="">
						<span class="badge badge-success">{{articulo.linea}}</span>
					</a>
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
				this.$store.dispatch('actualizarCarrito',articulo)				
				alert('Producto Agregado');
			}
		}
	}
</script>

<style lang="css" scoped>
</style>