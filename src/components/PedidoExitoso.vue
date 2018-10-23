<template>
	<div class="row">
		<div class="alert alert-success alert-dismissible">
			<p>Gracias por su compra.</p>
			<p>En breve nos pondremos en contacto.</p>
			<p>Cualquier duda y/o información estamos a sus ordenes  en los números <strong>tel:9933540319</strong> <strong>cel:9931605514.</strong> </p>
			<p>No olvides seguirnos en facebook : Distribuidora Elva SA de CV</p>
		</div>
	</div>
</template>

<script>
export default {

	name: 'PedidoExitoso',

	data () {
		return {

		}
	},
	created(){
		this.$store.dispatch('cargarPerfilUsuario')			
	},
	
}
</script>

<style lang="css" scoped>
</style>