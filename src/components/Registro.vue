<template>
	<div class="container">
		<h3>Editar perfil</h3>
		<hr>
		<div class="row">			
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Usuario:<span class="required">(*)</span></label>
					<input type="text" required="true" v-model="username" class="form-control">
					<p></p>
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Contraseña:<span class="required">(*)</span></label>
					<input type="password"required="true" v-model="password" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Email:<span class="required">(*)</span></label>
					<input type="email" required="true" v-model="email" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Nombre:<span class="required">(*)</span></label>
					<input type="text" required="true" v-model="nombre" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="apellido">Apellidos:<span class="required">(*)</span></label>
					<input type="text" required="true" v-model="apellidos" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="rfc">#Cliente:</label>
					<input type="text" v-model="rfc" placeholder="Ya tiene # de cliente ingréselo" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="telefono">Teléfono:<span class="required">(*)</span></label>
					<input type="number" required="true" v-model="telefono" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Calle:<span class="required">(*)</span></label>
					<input type="text" required="true" v-model="calle" class="form-control">
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
					<label for="nombre">Colonia:<span class="required">(*)</span></label>
					<input type="text" v-model="colonia" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">CP:<span class="required">(*)</span></label>
					<input type="number" required="true" v-model="cp" class="form-control">
				</div>
			</div>			
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Estado:<span class="required">(*)</span></label>
					<select 
					name="estados"
					id="estado" 
					required="true"
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
				<label for="nombre">Municipio:<span class="required">(*)</span></label>
				<select 
				name="municipio"
				id="municipios"
				required="true"
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
	<hr>
	<div class="col-sm-12">
		<div class="col-sm-4">
			<div class="form-group">
				<label for="nombre">Necesito factura:</label>
				<input type="checkbox" @click.stop="onFacturar" class="form-control">
			</div>	
		</div>		
	</div>
	<div class="col-sm-12">		
		<div class="row" v-if="mostrarDatosFiscales">
			<div class="col-md-12">
				<h3>Datos fiscales</h3>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Razón social:</label>
					<input type="text" required="true" v-model="razonSocial" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">RFC:</label>
					<input type="text" required="true" v-model="rfcFactura" class="form-control">
				</div>
			</div>	
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Domicilio:</label>
					<input type="text" required="true" v-model="domicilioFactura" class="form-control">
				</div>
			</div>	
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Email:</label>
					<input type="text" required="true" v-model="emailFactura" class="form-control">
				</div>
			</div>		
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Teléfono:</label>
					<input type="number" required="true"  v-model="telefonoFactura" class="form-control">
				</div>
			</div>		
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Celular:</label>
					<input type="number" required="true" v-model="celularFactura" class="form-control">
				</div>
			</div>	
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
			municipioSeleccionado: null,
			mostrarDatosFiscales: false,			
			razonSocial: "",
			rfcFactura: "",
			domicilioFactura: "",
			emailFactura: "",
			telefonoFactura: "",
			celularFactura: ""
			
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
		onFacturar(){
			this.mostrarDatosFiscales = !this.mostrarDatosFiscales
		},
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
				'factura':this.mostrarDatosFiscales ? 1: 0,
				'razonSocial': this.razonSocial,
				'rfcFactura': this.rfcFactura,
				'domicilioFactura': this.domicilioFactura,
				'emailFactura':this.emailFactura,
				'telefonoFactura': this.telefonoFactura,
				'celularFactura': this.celularFactura
			}
			if (this.username==null || this.username == "") {
				alert('Su nombre de usuario no puede ser vacio')
				return
			}
			if (this.password==null || this.password == "") {
				alert('Su contrasña  no puede ser vacio')
				return
			}
			if (this.email==null || this.email == "") {
				alert('Su email  no puede ser vacio')
				return
			}	
			if (this.apellidos==null || this.apellidos == "") {
				alert('Su email  no puede ser vacio')
				return
			}	
			if (this.nombre==null || this.nombre == "") {
				alert('Su nombre  no puede ser vacio')
				return
			}	
			if (this.telefono==null || this.telefono == "") {
				alert('Su telefono  no puede ser vacio')
				return
			}	
			if (this.calle==null || this.calle == "") {
				alert('Su calle  no puede ser vacio')
				return
			}	
			if (this.cp==null || this.cp == "") {
				alert('Su codigo postal  no puede ser vacio')
				return
			}
			this.$store.dispatch('registroUsuario', usuario)									
		}
	}
}
</script>

<style lang="css" scoped>
.required {
	font-size: 8px;

	color: red;

	position: relative;

	padding-bottom: 15px;

	bottom: 5px;
}
</style>