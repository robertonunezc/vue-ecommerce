<template>
	<!-- Jumbotron Header -->
	<div>
		<h2>Catálogo de productos</h2>
		<!-- Filtros -->
		<filtros-articulos v-bind:claves="claves" v-bind:lineas="lineas" v-bind:familias="familias"></filtros-articulos>
		<paginate
		name="articulos"
		:list="articulos"
		:per="10"
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
				claves:[
				{'text':'3199', 'sku':'ABCD2'},
				{'text':'3188', 'sku':'DEF123'},
				],
				lineas:[
				{'text':'3MM01', 'sku':'ABCD2'},
				{'text':'AKS01', 'sku':'DEF123'},
				],
				familias:[
				{'text':'AUTOMOTRIZ', 'sku':'ABCD2'},
				{'text':'OTRA', 'sku':'DEF123'},
				],
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
