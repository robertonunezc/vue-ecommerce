<template>
	<div class="bg-light p-md-3">
		<div class="row">
			<div class="col-sm-12 col-md-4">
				<div class="form-group">
					<label>Lineas</label>
					<select id="lineas"
					name="lineas"
					class="form-control"
					v-model="lineaSeleccionada"
					data-tipo="lineas"	
					@change="onSelectFiltro"			
					>
					<option v-for="linea in lineas">{{linea.nombre}}</option>
				</select>
			</div>
		</div>
		<div class="col-sm-12 col-md-4">
			<div class="form-group">
				<label>Buscar</label>
				<input type="text" class="form-control">
			</div>
		</div>
		<div class="col-sm-12 col-md-4">
			<div class="form-group">
				<label>Familia</label>
				<select id="familia" name="familia" class="form-control"
				v-model="familiaSeleccionada"
				data-tipo="familias"	
				@change="onSelectFiltro"	
				>
				<option v-for="familia in familias">{{familia.nombre}}</option>
			</select>
		</div>
	</div>
	<div class="col-sm-12 col-md-1">
		<div class="form-group">
			<button class="btn btn-warning" @click="onBorrarFiltros">Borrar filtros</button>
		</div>
	</div>
</div>
</div>
</div>
</template>

<script>
export default {
	props: ['claves', 'lineas', 'familias'],
	name: 'FiltrosArticulo',

	data () {
		return {
			claveSeleccionada: "",
			lineaSeleccionada: "",
			familiaSeleccionada: ""
		}
	},
	methods: {
		onSelectFiltro(event){
			let selectedIndex = null
			let option = null 
			let payload = {}
			const tipoFiltro = event.target.dataset.tipo
			if (tipoFiltro == "descripcion") {
				payload = {
					'campoFiltrar': "descripcion",
					'text': event.target.value
				}
			}else{
				selectedIndex = event.target.options.selectedIndex	
			}
			if (tipoFiltro == "clave") {
				option = this.claves[selectedIndex]
				payload = {
					'campoFiltrar': "clave",
					'text': option.nombre
				}				
			}
			if (tipoFiltro == "lineas") {
				option = this.lineas[selectedIndex]
				payload = {
					'campoFiltrar': "lineas",
					'text': option.nombre
				}	
			}
			if (tipoFiltro == "familias") {
				option = this.familias[selectedIndex]
				payload = {
					'campoFiltrar': "familias",
					'text': option.nombre
				}	
			}
			
			console.log(payload)
			this.$store.dispatch('filtrarArticulo',payload)
		},
		onBorrarFiltros(){
			document.querySelectorAll('select').forEach( element => {
				element.selectedIndex = -1
			});
			return this.$store.dispatch('cargarArticulos')
		}
	}
}
</script>

<style lang="css" scoped>
</style>