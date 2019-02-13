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
				<div class="flex">
					<input @change="onChangeBuscar" type="text" class="form-control" v-model="searchQuery">
					<button class="btn btn-xs btn-primary"
					style="margin-left:5px;"
					@click="onChangeBuscar"
					>
					Buscar
				</button>
			</div>
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
		<button class="btn btn-success" @click="onBorrarFiltros">Borrar filtros</button>
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
			familiaSeleccionada: "",
			searchQuery: ""
		}
	},
	methods: {
		onChangeBuscar(event){
			let search = this.searchQuery			
			this.$store.dispatch('filtroBuscar',{'query':search})
			
		},
		onSelectFiltro(event){
			let selectedIndex = null
			let option = null 
			let payload = {}
			const tipoFiltro = event.target.dataset.tipo
			if (tipoFiltro == "descripcion") {
				if (this.familiaSeleccionada == "" && this.lineaSeleccionada == "") {
					this.$store.dispatch('copyIntocableListado')	
				}
				payload = {
					'campoFiltrar': "descripcion",
					'text': event.target.value
				}
			}else{
				selectedIndex = event.target.options.selectedIndex	
			}

			if (tipoFiltro == "lineas") {
				if (this.familiaSeleccionada == "" && this.searchQuery == "") {
					this.$store.dispatch('copyIntocableListado')	
				}
				payload = {
					'campoFiltrar': "lineas",
					'text': this.lineaSeleccionada
				}	
			}
			if (tipoFiltro == "familias") {				
				if (this.lineaSeleccionada == "" && this.searchQuery == "") {
					this.$store.dispatch('copyIntocableListado')	
				}
				payload = {
					'campoFiltrar': "familias",
					'text': this.familiaSeleccionada
				}					
			}
			this.$store.dispatch('filtrarArticulo',payload)
		},
		async onBorrarFiltros(){
			document.querySelectorAll('select').forEach( element => {
				element.selectedIndex = -1
			});
			this.lineaSeleccionada = ""
			this.familiaSeleccionada = ""
			this.searchQuery = ""
			await this.$store.dispatch('cargarArticulos')
			await document.querySelectorAll('.paginate-links>li>a')[0].click()      
			return
		}
	}
}
</script>

<style lang="css" scoped>
.flex {
	display: flex
}
</style>