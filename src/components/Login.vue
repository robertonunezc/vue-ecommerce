<template>
	<div class="login-wrapper">
		<form action="#" class="well">
			<h3 class="text-center">Entrar a su cuenta</h3>
			<div class="form-group">
				<label for="exampleInputEmail1">Correo electrónico</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escriba su correo electrónico">				
			</div>
			<div class="form-group">
				<label for="exampleInputPassword1">Contraseña</label>
				<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
			</div>			
			<button type="submit" class="btn btn-success">Entrar</button>
		</form>
	</div>
</template>

<script>
export default {

	name: 'Login',

	data () {
		return {

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