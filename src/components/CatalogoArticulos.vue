<template>
	<div>
		<div class="row text-center mt-3">
			<item-articulo class="item-articulo d-md-flex d-lg-flex" v-for="articulo in listadoArticulos" v-bind:articulo="articulo" :key="articulo.clave"></item-articulo>
		</div>
		<div class="container-row container">
			<item-articulo-mobil class="d-md-none d-lg-none d-sm-flex" v-for="articulo in listadoArticulos" v-bind:articulo="articulo" :key="articulo.clave"></item-articulo-mobil>
		</div>
	</div>
</template>

<script>
import ItemArticulo from '@/components/ItemArticulo.vue';
import ItemArticuloXS from '@/components/ItemArticuloXS.vue';
export default {
	props:['listadoArticulos'],
	name: 'CatalogoProductos',
	components: {
		itemArticulo: ItemArticulo,
		itemArticuloMobil: ItemArticuloXS
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
@media (max-width: 570px) { 
	.item-articulo {
		display: none;
	}
	.container-row {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}
}
</style>