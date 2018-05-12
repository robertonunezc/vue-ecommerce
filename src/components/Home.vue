<template>
	<!-- Jumbotron Header -->
	<div>
		<header class="jumbotron my-4">
			<h3 class="display-4">Bienvenidos a nuestro sitio!</h3>
			<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
			<a href="#" class="btn btn-primary btn-lg">Registrarse!</a>
		</header>

		<!-- Filtros -->
		
		<catalogo-articulos v-bind:listadoArticulos="articulos"></catalogo-articulos>
	</div>
</div>
<!-- /.row -->
</template>
<script>
import CatalogoArticulos from '@/components/CatalogoArticulos.vue';
export default {
	name: 'Home',
	components: {
		catalogoArticulos: CatalogoArticulos
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
	computed: {
		articulos () {
			return this.$store.getters.listadoArticulos
		}
	}
}
</script>

<style lang="css" scoped>
</style>