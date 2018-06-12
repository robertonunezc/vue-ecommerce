<template>
	<tr>
		<td>
			<img width="80px" class="d-block m-0" src="https://www.mexicodesconocido.com.mx/assets/images/destinos/queretaro/_MG_0088_GEMD_QUERETARO_CD_TEMPLO-SANTA-ROSA-DE-VITERBO_TEMPLO-Y-FUENTE_NOCTURNA_RV.jpg">	
		</td>
		<td>
			<p>{{articulo.articulo.clave}}
				{{articulo.articulo.clave_unidad}}
				{{articulo.articulo.descripcion}}
			</p>
		</td>
		<td>
			<p>${{articulo.articulo.precio}}</p>
		</td>
		<td>
			<input type="number" name="cantidad" v-model="cantidad" >
			{{cantidad}}		
		</td>
		<td>
			<p>${{precioTotal}}</p>
		</td>
		<td>
			<div class="btn btn-danger btn-sm"								
			@click="onBorrarArticulo(articulo.articulo.clave)">Borrar</div>
		</td>
	</tr>
</template>

<script>
	export default {
		props:['articulo'],
		name: 'ItemArticuloCarrito',
		data () {
			return {
				cantidad: this.articulo.cantidad  				
			}
		},
		computed: {
			precioTotal: function () {	
				let precioTotal = this.articulo.articulo.precio
				if (this.cantidad > 0) {
					precioTotal = this.cantidad * this.articulo.articulo.precio			

				}
				return parseFloat(precioTotal).toFixed(2)
			}
		},
		methods: {
			onBorrarArticulo(articuloClave){
				console.log("Clave", articuloClave)
				let carrito = this.$store.getters.carrito		
				let indexArticulo = carrito.articulos.findIndex(itemArticulo=>{
					return itemArticulo.articulo.clave == articuloClave
				})
				let articulo = carrito.articulos[indexArticulo]		
				let totalArticulo = articulo.articulo.precio * articulo.cantidad
				console.log("Total", totalArticulo)
				if (carrito.total > 0) {
					let nuevoTotal = carrito.total  -totalArticulo
					carrito.total = Math.round(nuevoTotal * 100) / 100
				}						
				carrito.articulos.splice(indexArticulo,1)
				this.$store.dispatch('borrarArticuloCarrito', carrito)
			}
			
		}	
	}
</script>