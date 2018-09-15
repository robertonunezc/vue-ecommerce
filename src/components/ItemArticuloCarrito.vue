<template>
	<tr>
		<td>
			<img width="80px" class="d-block m-0" :src="urlImg + articulo.articulo.imagen">	
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
			<input type="number" name="cantidad"
			v-model="cantidad"
			v-if="editable"
			@change="onActualizarArticulo(articulo.articulo)"
			>			
			<div v-if="!editable">{{articulo.cantidad}}</div>
		</td>
		<td>
			<p>${{precioTotal}}</p>
		</td>
		<td v-if="editable">
			<div class="btn btn-danger btn-sm"								
			@click="onBorrarArticulo(articulo.articulo)">Borrar</div>
			<!-- <div class="btn btn-info btn-sm"								
				>Actualizar</div> -->
			</td>
		</tr>
	</template>

	<script>

	import {eventBus} from '../main'

	export default {
		props:['articulo', 'editable'],
		name: 'ItemArticuloCarrito',
		data () {
			return {
				urlImg: "http://distribuidoraelva.mx/ecommerce/web/uploads/images/",
//urlImg: "http://localhost:8000/uploads/images/",
cantidad: this.articulo.cantidad,
enabled: false 				
}
},	
computed: {
	precioTotal: function () {	
		let precioTotal = this.articulo.articulo.precio
		if (this.cantidad > 0) {
			precioTotal = this.cantidad * this.articulo.articulo.precio	
			let nuevoValor = {
				'articulo': this.articulo,
				'cantidad': this.cantidad
			}										
		}

		return parseFloat(precioTotal).toFixed(2)
	},
	carrito(){
		return this.$store.getters.carrito
	}
},
methods: {
	onBorrarArticulo(articulo){			
		let payload = {
			'articulo': articulo,
		}
		this.$store.dispatch('borrarArticuloCarrito', payload)
	},
	onActualizarArticulo(articulo) {
		if (this.cantidad <=0) {
			alert('La cantidad de producto no pude ser menor a 1')
			this.cantidad = 1
			return
		}
		let payload = {
			'articulo': articulo,
			'cantidad': this.cantidad
		}
		console.log('---actualizando carrito----')
		console.log(payload)
		this.$store.dispatch('actualizarCarrito', payload)
	}


}	
}
</script>