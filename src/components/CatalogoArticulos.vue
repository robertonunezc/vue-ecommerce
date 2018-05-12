<template>
	<div class="row text-center mt-3">
		<item-articulo v-for="articulo in listadoArticulos" v-bind:articulo="articulo" :key="articulo.clave"></item-articulo>
	</div>
</template>

<script>
import ItemArticulo from '@/components/ItemArticulo.vue';
export default {
	props:['listadoArticulos'],
	name: 'CatalogoProductos',
	components: {
		itemArticulo: ItemArticulo
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
</style>