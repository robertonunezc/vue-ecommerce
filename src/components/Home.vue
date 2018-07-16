<template>
	<!-- Jumbotron Header -->
	<div>
		<h2>Catálogo de productos</h2>
		<!-- Filtros -->
		<filtros-articulos v-bind:claves="claves" v-bind:lineas="lineas" v-bind:familias="familias"></filtros-articulos>		
		<div v-if="cargando">
			<img class="loading" src="/static/img/cargando.gif" alt="CARGANDO">
		</div>
		<paginate		
		name="articulos"
		:list="articulos"
		:per="12"		
		>
		
		<catalogo-articulos v-bind:listadoArticulos="paginated('articulos')" :cargando="!cargando"></catalogo-articulos>
	</paginate>
	<paginate-links for="articulos"></paginate-links>

</div>
</div>
<!-- /.row -->
</template>
<script>
import CatalogoArticulos from '@/components/CatalogoArticulos.vue';
import FiltrosArticulo from '@/components/FiltrosArticulo.vue';
export default {
	name: 'Home',
	components: {
		catalogoArticulos: CatalogoArticulos,
		filtrosArticulos: FiltrosArticulo
	},
	data () {
		return {
			paginate: ['articulos']
		}
	},
	methods: {

	},
	computed: {
		articulos () {
			console.log('cargando articulos...')			
			let articulos = this.$store.getters.listadoArticulos
			if (articulos.length == 0) {
				this.$store.dispatch('cargarArticulos')
				articulos = this.$store.getters.listadoArticulos
			}		
			console.log('carrito',this.$store.getters.carrito)		
			return articulos
		},
		cargando(){
			return this.$store.getters.cargando
		},
		claves(){
			return this.$store.getters.claves
		},
		familias(){
			return this.$store.getters.familias
		},
		lineas(){
			return this.$store.getters.lineas
		}
	}
}
</script>

<style lang="css">

ul.paginate-links > li {
	list-style: none;
	float: left;
	padding: 5px;
	border: solid 1px #ececec;
	margin: 5px;
}
ul.paginate-links > li:hover {
	cursor: pointer;
	background-color: #ededed;
}
.loading{
	display:block;
	margin: 0 auto;
}
</style>
