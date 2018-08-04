<template>
	<div class="container">
		<h3>Editar perfil</h3>
		<hr>
		<div class="row">			
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Usuario:</label>
					<input type="text" v-model="username" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Contraseña:</label>
					<input type="password" v-model="password" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Email:</label>
					<input type="email" v-model="email" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Nombre:</label>
					<input type="text" v-model="nombre" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="apellido">Apellidos:</label>
					<input type="text" v-model="apellidos" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="rfc">RFC:</label>
					<input type="text" v-model="rfc" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="telefono">Teléfono:</label>
					<input type="number" v-model="telefono" class="form-control">
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
					<input type="number" v-model="numero_ext" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Número int:</label>
					<input type="number" v-model="numero_int" class="form-control">
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
					<input type="number" v-model="cp" class="form-control">
				</div>
			</div>
			<!-- <div class="col-md-4">
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
			</div> -->
			<div class="col-md-12">
				<button class="btn btn-success" @click.stop="onRegistrarUsuario">REGISTRAR</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'EditarPerfil',

	data () {
		return {
			username: null,
			password: null,
			email: null,
			nombre: null,
			apellidos: null,
			rfc: null,
			telefono: null,
			calle: null,
			numero_ext: null,
			numero_int: null,
			colonia: null,
			cp: null,
			municipio: 10,
			estado: 5,
		}
	},
	computed: {
		message(){
			return this.$store.getters.message
		} 
	},
	methods: {
		onRegistrarUsuario(){
			const usuario = {
				'username': this.username,
				'password': this.password,
				'email': this.email,
				'nombre': this.nombre,
				'apellidos':this.apellidos,
				'calle':this.calle,
				'rfc':this.rfc,
				'telefono':this.telefono,
				'estado':this.estado,
				'municipio':this.municipio,
				'cp':this.cp,
				'colonia':this.colonia,
				'numero_int':this.numero_int,
				'numero_ext':this.numero_ext,
			}

			this.$store.dispatch('registroUsuario', usuario)			
		}
	}
}
</script>

<style lang="css" scoped>
</style>