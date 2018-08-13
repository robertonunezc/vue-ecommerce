<template>
	<div class="wrapper-articulo">
		<div class="row">
			<div class="col-md-4">
				<img class="card-img-top" :src="articulo.imagen" alt=""/>
			</div>
			<div class="col-md-8">
				<h2>{{articulo.descripcion}}</h2>
				<table class="table table-striped">
					<tr>
						<td>
							<span class="badge badge-info">Clave</span>
						</td>
						<td>{{articulo.clave}}</td>
					</tr>
					<tr>
						<td>	
							<span class="badge badge-info">Línea</span>
						</td>
						<td>{{articulo.linea}}</td>
					</tr>					
					<tr>
						<td>
							<span class="badge badge-info">Clave Unidad</span>
						</td>
						<td>{{articulo.clave_unidad}}</td>
					</tr>
				</table>
				<div class="row">
					<div class="col-md-3">
						<span class="badge badge-success">Cantidad</span>
						<input placeholder="Cantidad" class="form-control" type="number" name="cantidad" v-model="cantidad">
					</div>
					<div class="col-md-9">
						<button
						@click.stop="onAgregarCarrito"
						class="mt-3 btn btn-primary btn-block">
						<strong>${{precioTotal}}</strong>
					COMPRAR</button> 
				</div>
			</div>
		</div>
	</div>

	<hr class="mt-5">
	<div class="articulos-relacionados">
		<h4>Otros artículos</h4>
		<catalogo-articulos v-bind:listadoArticulos="articulos"></catalogo-articulos>
	</div>
</div>
</template>

<script>
import CatalogoArticulos from '@/components/CatalogoArticulos.vue';

export default {

	name: 'DetalleArticulo',
	components: {
		catalogoArticulos: CatalogoArticulos
	},
	data () {
		return {
			cantidad:1,								
		}
	},		
	computed: {
		articulo () {
			let claveArticulo = this.$route.params.claveArticulo
			console.log('Clave', claveArticulo)
			return this.$store.getters.articulo(claveArticulo)
		},
		precioTotal: function () {		
			let precioTotal = this.articulo.precio
			if (this.cantidad > 0) {
				precioTotal = this.cantidad *  this.articulo.precio
			}
			return parseFloat(precioTotal).toFixed(2)
		},
		articulos () {
			return this.$store.getters.listadoArticulos.slice(1,5)
		}		
	},
	methods: {
		onAgregarCarrito() {
			let articulo = {
				'articulo': this.articulo,
				'cantidad': this.cantidad
			}
			if (this.$store.getters.carrito) {
				this.$store.dispatch('actualizarCarrito', articulo)
				alert('Producto agregado')	
			}else{
				alert('Debe iniciar sesión para poder comprar')

			}
		}
	}

}
</script>

<style lang="css" scoped>
</style>