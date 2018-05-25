<template>
	<!-- Jumbotron Header -->
	<div>
		<h2>Catálogo de productos</h2>
		<!-- Filtros -->		
		<filtros-articulos v-bind:claves="claves" v-bind:lineas="lineas" v-bind:clavesUnidad="clavesUnidad"></filtros-articulos>
		<catalogo-articulos v-bind:listadoArticulos="articulos"></catalogo-articulos>
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
				clavesUnidad:[
				{'text':'H67', 'sku':'ABCD2'},
				{'text':'H95', 'sku':'DEF123'},
				],
			}
		},
		methods: {
			
		},	
		beforeCreate () {
			if (this.$store.getters.listadoArticulos != null) {
				this.$store.dispatch('cargarArticulos')
			}
		},
		computed: {
			articulos () {
				return this.$store.getters.listadoArticulos.slice(0,10)
			}
		}
	}
</script>

<style lang="css" scoped>
</style>