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
					<label for="nombre">estado:</label>
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
					:selected="estado.estado == estadoSeleccionado ? selected : ''"
					:key="estado.id">{{estado.estado}}</option>						
				</select>
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-group">
				<label for="nombre">municipio:</label>
				<select 
				name="municipio"
				id="municipios"
				class="form-control"
				v-model="municipioSeleccionado"				
				>
				<option
				v-for="municipio in municipios"
				:value="municipio.id"
				:selected="municipio.id == municipioSeleccionado ? selected : ''"
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
				<input type="checkbox" @click.stop="onFacturar" :checked="mostrarDatosFiscales" class="form-control">
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
					<input type="text" v-model="razonSocial" class="form-control">
				</div>
			</div>
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">RFC:</label>
					<input type="text" v-model="rfcFactura" class="form-control">
				</div>
			</div>	
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Domicilio:</label>
					<input type="text" v-model="domicilioFactura" class="form-control">
				</div>
			</div>	
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Email:</label>
					<input type="text" v-model="emailFactura" class="form-control">
				</div>
			</div>		
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Teléfono:</label>
					<input type="number" v-model="telefonoFactura" class="form-control">
				</div>
			</div>		
			<div class="col-md-4">
				<div class="form-group">
					<label for="nombre">Celular:</label>
					<input type="number" v-model="celularFactura" class="form-control">
				</div>
			</div>	
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
			selected: "",
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
			estadoSeleccionado: this.$store.getters.usuario.estado.id,	
			municipioSeleccionado:	 this.$store.getters.usuario.municipio.id,
			mostrarDatosFiscales: this.$store.getters.usuario.mostrarDatosFiscales,			
			razonSocial: this.$store.getters.usuario.razon_social,
			rfcFactura: this.$store.getters.usuario.rfc_factura,
			domicilioFactura:this.$store.getters.usuario.domicilio_factura,
			emailFactura: this.$store.getters.usuario.email_factura,
			telefonoFactura: this.$store.getters.usuario.telefono_factura,
			celularFactura:this.$store.getters.usuario.celular_factura	
		}
	},
	computed: {
		estados(){
			return this.$store.getters.estados
		},
		municipios(){
			return this.$store.getters.municipios
		},
	},
	methods: {
		onChangeEstado(){			
			this.$store.dispatch('cargarMunicipios',
				{'estado':this.estadoSeleccionado})
		},	
		onEditarPerfil(){
			const usuario = {
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
			this.$store.dispatch('editarPerfil', usuario)			
		}
	}
}
</script>

<style lang="css" scoped>
</style>