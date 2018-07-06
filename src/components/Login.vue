<template>
	<div class="login-wrapper">
		<form action="#" class="well">
			<h3 class="text-center">Entrar a su cuenta</h3>
			<div class="form-group">
				<label for="exampleInputEmail1">Correo electrónico</label>
				<input type="text" class="form-control" id="usuario" v-model="usuario" aria-describedby="emailHelp" placeholder="Escriba su correo electrónico">				
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Contraseña</label>
				<input type="password" class="form-control" v-model="password" id="password" placeholder="Contraseña">
			</div>			
			<button type="submit"
			class="btn btn-success"			
			@click.stop="onLogin"
			>Entrar</button>
		</form>
	</div>
</template>

<script>
export default {

	name: 'Login',

	data () {
		return {
			usuario:'',
			password: ''
		}
	},
	computed: {
		formIsValid () {
			return this.usuario !== '' &&
			this.password !== ''
		}
	},
	methods: {
		onLogin() {
			const loginDatos = {
				usuario: this.usuario,
				password: this.password
			}				
			this.$store.dispatch('login', loginDatos)		
		}
	}
}
</script>

<style lang="css" scoped>
.login-wrapper {
	width: 50%;
	display: block;
	margin: 0 auto;
	background-color: #ececec;
	padding: 15px;
	border-radius: 5px;
	border: solid 1px #d8d8d8; 
}
</style>