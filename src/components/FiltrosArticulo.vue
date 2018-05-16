<template>
	<div class="bg-light p-md-3">
		<div class="row">
			<div class="col-sm-12 col-md-3">
				<div class="form-group">
					<label>Claves</label>
					<select id="claves" name="claves" class="form-control" v-model="claveSeleccionada">
						<option v-for="clave in claves">{{clave.text}}</option>
					</select>
				</div>
			</div>
			<div class="col-sm-12 col-md-3">
				<div class="form-group">
					<label>Lineas</label>
					<select id="lineas" name="lineas" class="form-control" v-model="lineaSeleccionada">
						<option v-for="linea in lineas">{{linea.text}}</option>
					</select>
				</div>
			</div>
			<div class="col-sm-12 col-md-3">
				<div class="form-group">
					<label>ClavesUnidad</label>
					<select id="clavesUnidad" name="clavesUnidad" class="form-control" v-model="claveUnidadSeleccionada">
						<option v-for="claveUnidad in clavesUnidad">{{claveUnidad.text}}</option>
					</select>
				</div>
			</div>
			<div class="col-sm-12 col-md-3">
				<div class="form-group">
					<label>Buscar</label>
					<input type="text" name="Buscar" class="form-control" placeholder="buscar">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['claves', 'lineas', 'clavesUnidad'],
	name: 'FiltrosArticulo',

	data () {
		return {
			claveSeleccionada: "",
			lineaSeleccionada: "",
			claveUnidadSeleccionada: ""
		}
	}
}
</script>

<style lang="css" scoped>
</style>