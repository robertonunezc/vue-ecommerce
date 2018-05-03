<template>
	<section>
		<v-jumbotron color="primary" dark height="200px">
			<v-container fill-height>
				<v-layout align-center>
					<v-flex text-xs-center>
						<v-text-field
						class="white--text"
						name="input-1-3"
						label="Buscar por nombre, descripción, categoría de productos"
						single-line
						prepend-icon="search"
						></v-text-field>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
		<v-container>
			<v-form>
				<v-layout row wrap>
					<v-flex xs12 md4 ma-15>
						<v-card>
							<v-card-actions>
								<v-select
								:items="claves"
								v-model="clave"
								label="Claves"
								></v-select>  
							</v-card-actions>
							
						</v-card>						
					</v-flex>
					<v-flex xs12 md4>
						<v-card>
							<v-card-actions>
								<v-select
								:items="lineas"
								v-model="linea"
								label="Lineas"
								></v-select>  
							</v-card-actions>
							
						</v-card>						
					</v-flex>
					<v-flex xs12 md4>
						<v-card>
							<v-card-actions>
								<v-select
								:items="clavesUnidad"
								v-model="claveUnidad"
								label="Clases unidad"
								></v-select>  
							</v-card-actions>							
						</v-card>						
					</v-flex>
				</v-layout>
			</v-form>			
		</v-container>
		<v-container>
			<v-layout row wrap>
				<v-flex xs12 sm6 md3 v-for="articulo in articulos" :key="articulo.clave">
					<v-card>
						<v-card-media :src="articulo.imgUrl" height="200px">
						</v-card-media>
						<v-card-title primary-title>
							<div>
								<h3 class="headline mb-0">
									{{articulo.descripcion}}
								</h3>								
							</div>
						</v-card-title>
						<v-divider></v-divider>
						<v-card-actions>
							<v-btn class="white--text" color="green">
							Comprar</v-btn>
							<v-btn class="white--text" color="purple">Detalle</v-btn>
							<p class="headline">
							{{articulo.precio}}</p>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
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
	}
}
</script>

<style lang="css" scoped>
</style>