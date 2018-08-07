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
					<label for="nombre">Colonia:</label>
					<input type="text" v-model="colonia" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">CP:</label>
					<input type="number" v-model="cp" class="form-control">
				</div>
			</div>			
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Estado:</label>
					<select 
					name="estados"
					id="estado"
					class="form-control"
					v-model="estadoSeleccionado"
					@change="onChangeEstado"
					>
					<option
					v-for="estado in estados"
					:value="estado.id"
					:key="estado.id">{{estado.estado}}</option>						
				</select>

			</div>
		</div>
		<div class="col-md-4">
			<div class="form-group">
				<label for="nombre">Municipio:</label>
				<select 
				name="municipio"
				id="municipios"
				class="form-control"
				v-model="municipioSeleccionado"				
				>
				<option
				v-for="municipio in municipios"
				:value="municipio.id"
				:key="municipio.id">{{municipio.municipio}}</option>						
			</select>	
			<p style="font-size:10px;"><b>seleccione un estado primero</b></p>
		</div>
	</div>
	<div class="col-md-12">
		<button class="btn btn-success" @click.stop="onRegistrarUsuario">REGISTRAR</button>
	</div>
</div>
</div>
</template>

<script>
import axios from 'axios'

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
			estadoSeleccionado: null,
			municipioSeleccionado: null
		}
	},
	computed: {
		estados(){
			return this.$store.getters.estados
		},
		municipios(){
			return this.$store.getters.municipios
		},
		message(){
			return this.$store.getters.message
		} 
	},
	methods: {
		onChangeEstado(){			
			this.$store.dispatch('cargarMunicipios',
				{'estado':this.estadoSeleccionado})
		},		
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
				'estado':this.estadoSeleccionado,
				'municipio':this.municipioSeleccionado,
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