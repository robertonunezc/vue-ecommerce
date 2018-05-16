<template>
	<div class="wrapper-articulo">
		<div class="row">
			<div class="col-md-4">
				<img class="card-img-top" :src="articulo.imgUrl" alt=""/>
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
							<span class="badge badge-info">Clave Esquema</span>
						</td>
						<td>{{articulo.claveEsquema}}</td>
					</tr>
					<tr>
						<td>
							<span class="badge badge-info">Clave Unidad</span>
						</td>
						<td>{{articulo.claveUnidad}}</td>
					</tr>
				</table>
				<div class="row">
					<div class="col-md-3">
						<span class="badge badge-success">Cantidad</span>
						<input placeholder="Cantidad" class="form-control" type="number" name="cantidad" v-model="cantidad">
					</div>
					<div class="col-md-9">
						<button class="mt-3 btn btn-primary btn-block"><strong>${{precioTotal}}</strong> COMPRAR</button> 
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
			articulo : {
				'clave': '3199',
				'linea': '3MM01',
				'descripcion': 'ESPIRAL METALICO',
				'precio':10.91,
				'imgUrl':'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg',
				'claveUnidad': 'H67'
			}
		}
	},
	computed: {
		precioTotal: function () {		
			return parseFloat(this.cantidad * this.articulo.precio).toFixed(2) ;
		},
		articulos () {
			return this.$store.getters.listadoArticulos
		}
	}
}
</script>

<style lang="css" scoped>
</style>