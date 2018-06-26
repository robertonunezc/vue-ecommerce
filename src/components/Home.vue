<template>
	<!-- Jumbotron Header -->
	<div>
		<h2>Catálogo de productos</h2>
		<!-- Filtros -->
		<filtros-articulos v-bind:claves="claves" v-bind:lineas="lineas" v-bind:familias="familias"></filtros-articulos>
		<paginate
		name="articulos"
		:list="articulos"
		:per="12"
		>
		<catalogo-articulos v-bind:listadoArticulos="paginated('articulos')"></catalogo-articulos>
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
			claves:[],
			lineas:[],
			familias:[],
			paginate: ['articulos']
		}
	},
	methods: {

	},
	computed: {
		articulos () {
			console.log('cargando articulos...')
			let articulos = this.$store.getters.listadoArticulos
			if (articulos.length === 0) {
				this.$store.dispatch('cargarArticulos')
				articulos = this.$store.getters.listadoArticulos
			}
			return articulos
		}
	},
	created(){
		if (this.$store.getters.carrito === null) {
			console.log('Creando carrito')
			this.$store.dispatch('crearCarrito')
		}
		this.claves = this.$store.getters.claves
		this.familias = this.$store.getters.familias
		this.lineas = this.$store.getters.lineas
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

</style>
