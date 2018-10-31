<template>
	<div class="row">
		<div class="col-sm-2"></div>
		<div class="col-sm-8">
			<div class="alert alert-success" v-if="showSuccess">Cambio de contraseña correctamente</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="form-group">
						<label for="pass_viejo">Usuario</label>
						<input type="text" name="usuario" 
						class="form-control"
						v-model="username"
						placeholder="Usuario">						
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label for="pass_viejo">Contraseña Actual</label>
						<input type="password"
						name="pass_nueva"
						class="form-control"
						v-model="passwordActual"
						placeholder="Contraseña Actual">						
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label for="pass_viejo">Contraseña Nueva</label>
						<input type="password"
						name="pass_confirmar"
						class="form-control"
						v-model="newPassword"
						placeholder="Nueva Contraseña">						
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label for="pass_viejo">Confirmar Contraseña</label>
						<input type="password"
						name="pass_confirmar"
						class="form-control"
						v-model="confirmPassword"
						placeholder="Confirmar Contraseña">						
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<button class="btn btn-success" @click.stop="onCambiarContrasena">Cambiar contraseña</button>
					
				</div>
			</div>
		</div>
		<div class="col-sm-2"></div>
	</div>
</template>

<script>
import config from '../../config/index'
import axios from 'axios'
export default {

	name: 'CambiarContrasena',

	data () {
		return {
			username: "",
			passwordActual: "",
			confirmPassword: "",
			newPassword: "",
			showSuccess: false,
		}
	},
	methods:{
		onCambiarContrasena(){
			if (this.newPassword!= this.confirmPassword) {
				alert('La nueva contraseña no coincide')
				return
			}
			if (this.username == "" || this.newPassword =="" || this.confirmPassword == "" || this.passwordActual == "") {
				alert('No pude dejar campos vacíos')
				return
			}
			let params = new URLSearchParams()
			params.append('username', this.username)
			params.append('password', this.passwordActual)
			params.append('new_password',this.confirmPassword)	
			const url = `${config.urlBase}chg_pword` 
			axios.post(url,params)
			.then(response =>{
				console.log(response.data.rc)
				if (response.data.rc == 0 ) {
					this.showSuccess = true
					this.$store.dispatch('logout')
					this.$router.push('/')
				}else{
					alert('Ocurrió un error cambiando su contraseña. Intente más tarde')
				}
			})
			.catch(err =>{
				console.log(err)
				alert('Ocurrió un error  cambiando su contraseña. Intente más tarde')

			})
		}
	}
}
</script>

<style lang="css" scoped>
</style>