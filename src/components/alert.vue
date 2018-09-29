<template>
	<div id="myModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">			
			<p>Debe iniciar sesión o registrarse</p>
			<router-link :to="{name:'Registro'}" class="btn btn-success">
				Registrarse
			</router-link>   
			<router-link :to="{name:'Login'}" class="btn btn-info">
				Iniciar sesión
			</router-link>            

		</div>

	</div>
</template>

<script>
export default {

	name: 'alert',

	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
.modal {	
	position: fixed;
	z-index: 1; 
	padding-top: 100px; 
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%; 
	overflow: auto; 
	background-color: rgb(0,0,0); 
	background-color: rgba(0,0,0,0.4); 
}


.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
}


.close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
}

.close:hover,
.close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
}
</style>