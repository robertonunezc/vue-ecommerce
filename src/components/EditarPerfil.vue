<template>
	<div class="container">
		<h3>Editar perfil</h3>
		<hr>
		<div class="row">
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Nombre:</label>
					<input type="text" v-model="nombre" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Email:</label>
					<input type="text" v-model="email" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Apellidos:</label>
					<input type="text" v-model="apellidos" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">RFC:</label>
					<input type="text" v-model="rfc" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Teléfono:</label>
					<input type="text" v-model="telefono" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Calle:</label>
					<input type="text" v-model="calle" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Número ext:</label>
					<input type="text" v-model="numero_ext" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Número int:</label>
					<input type="text" v-model="numero_int" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">colonia:</label>
					<input type="text" v-model="colonia" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">cp:</label>
					<input type="text" v-model="cp" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">municipio:</label>
					<input type="text" v-model="municipio" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">estado:</label>
					<input type="text" v-model="estado" class="form-control">
				</div>
			</div>
			<div class="col-md-12">
				<button class="btn btn-success" @click.stop="onEditarPerfil">EDITAR</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'EditarPerfil',

	data () {
		return {
			email: this.$store.getters.usuario.email,
			nombre: this.$store.getters.usuario.nombre,
			apellidos: this.$store.getters.usuario.apellidos,
			rfc: this.$store.getters.usuario.rfc,
			telefono: this.$store.getters.usuario.telefono,
			calle: this.$store.getters.usuario.calle,
			numero_ext: this.$store.getters.usuario.numero_ext,
			numero_int: this.$store.getters.usuario.numero_int,
			colonia: this.$store.getters.usuario.colonia,
			cp: this.$store.getters.usuario.cp,
			municipio: this.$store.getters.usuario.municipio,
			estado: this.$store.getters.usuario.estado,
		}
	},
	methods: {
		onEditarPerfil(){
			const usuario = {
				'email': this.email,
				'nombre': this.nombre,
				'apellidos':this.apellidos,
				'calle':this.calle,
				'rfc':this.rfc,
				'estado':this.estado,
				'municipio':this.municipio,
				'cp':this.cp,
				'colonia':this.colonia,
				'numero_int':this.numero_int,
				'numero_ext':this.numero_ext,
			}			
			this.$store.dispatch('editarPerfil', usuario)			
		}
	}
}
</script>

<style lang="css" scoped>
</style>