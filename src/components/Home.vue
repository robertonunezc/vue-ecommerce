<template>
	<!-- Jumbotron Header -->
	<div>
		<header class="jumbotron my-4">
			<h3 class="display-4">Bienvenidos a nuestro sitio!</h3>
			<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
			<a href="#" class="btn btn-primary btn-lg">Registrarse!</a>
		</header>

		<!-- Page Features -->
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
		<div class="row text-center mt-3">

			<div class="col-lg-3 col-md-6 mb-4" v-for="articulo in articulos" :key="articulo.clave">
				<div class="card">
					<a href="">
						<img class="card-img-top" :src="articulo.imgUrl" alt="">				
					</a>
					<div class="card-body">
						<h4 class="card-title">
							<a href="">
								<span class="badge badge-primary">{{articulo.clave}}</span>					
							</a>
							<a href="">
								<span class="badge badge-success">{{articulo.linea}}</span>
							</a>
						</h4>
						<p class="card-text">{{articulo.descripcion}}</p>
					</div>
					<div class="card-footer">
						<a href="#" class="btn btn-primary"
						@click="addProductoCarrito">
						Comprar
						{{articulo.precio}}

					</a>

				</div>
			</div>
		</div>
	</div>
</div>
<!-- /.row -->
</template>
<script>
export default {
	name: 'Home',
	data () {
		return {
			articulos:[
			{ 
				'linea': '3MM01',
				'clave': '3199',
				'descripcion': 'Descripcion mas larga',
				'precio': '$3.00',
				'imgUrl': 'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg'
			},{ 
				'linea': '3MM01',
				'clave': '3199',
				'descripcion': 'Descripcion mas larga',
				'precio': '$3.00',
				'imgUrl': 'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg'
			},{ 
				'linea': '3MM01',
				'clave': '3199',
				'descripcion': 'Descripcion mas larga',
				'precio': '$3.00',
				'imgUrl': 'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg'
			},{ 
				'linea': '3MM01',
				'clave': '3199',
				'descripcion': 'Descripcion mas larga',
				'precio': '$3.00',
				'imgUrl': 'https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg'
			},
			],
			claves:[
			{'text':'3199', 'sku':'ABCD2'},
			{'text':'3188', 'sku':'DEF123'},
			],
			lineas:[
			{'text':'3MM01', 'sku':'ABCD2'},
			{'text':'AKS01', 'sku':'DEF123'},
			],
			clavesUnidad:[
			{'text':'H67', 'sku':'ABCD2'},
			{'text':'H95', 'sku':'DEF123'},
			],
		}
	},
	methods: {
		addProductoCarrito () {
			alert('Producto agregado')
		}
	}
}
</script>

<style lang="css" scoped>
</style>