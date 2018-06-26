import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
import jsonp from 'jsonp'

Vue.use(Vuex)
const host = "http://localhost:8000/api/"
export const store = new Vuex.Store({
  state: {
    listadoArticulos:[],
    usuario: null,
    claves:[],
    lineas:[],
    familias:[],
    errors: [],
    token:null,
    cargando: false,
    carrito:null
  },
  mutations: {
    cargarArticulos (state, payload) {
      state.listadoArticulos = payload;
    },
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
    setCarrito(state, payload) {
      state.carrito = payload
    },
    setClaves(state, payload) {
      state.claves = payload
    },
    setLineas(state, payload) {
      state.lineas = payload
    },
    setFamilias(state, payload) {
      state.familias = payload
    }
  },
  actions: { 
    cargarClaves({commit}){
      let url = host + 'claves'
      axios.get(url)
      .then(response=>{
        console.log("Response",response)
        if (response.data.rc == 0) {
          console.log('Cargnado claves')
          commit('setClaves', response.data.data)
        }else {
          alert('Ocurrió un error cargando las claves desde el servidor')
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },    
    cargarFamilias({commit}){
      let url = host + 'familias'
      axios.get(url)
      .then(response=>{
        if (response.data.rc == 0) {
          console.log('Cargnado familias')
          commit('setFamilias', response.data.data)
        }else {
          alert('Ocurrió un error cargando las familias desde el servidor')
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },
    cargarLineas({commit}){
      let url = host + 'lineas'
      axios.get(url)
      .then(response=>{
        if (response.data.rc == 0) {
          console.log('Cargando lineas')
          commit('setLineas', response.data.data)
        }else {
          alert('Ocurrió un error cargando las lineas desde el servidor')
        }
      })
      .catch(err =>{
        console.log(err)
      })
    },
    crearCarrito({commit}){
      if (this.state.carrito === null) {
        let url = host + 'carrito'
        let usuario = this.state.usuario
        const params = new URLSearchParams()
        params.append('token', this.state.token)
        params.append('cliente', usuario.id)
        axios.post(url, params)
        .then(response =>{
          if (response.data.rc == 0 ) {
           let carrito = response.data.data
           commit('setCarrito',carrito) 
         }else{
          alert('Lo sentimos ocurrió un error. Intente mas tarde')
        }

      })
        .catch(err =>{
          console.log(err)
        })
      }
    },
    actualizarCarrito({commit}, payload){
      let cantidad = 1
      let carrito = this.state.carrito
      let url = host + 'add_articulo_carrito'
      let usuario = this.state.usuario
      const params = new URLSearchParams()
      params.append('token', this.state.token)
      params.append('carrito', carrito.id)
      params.append('articulo', payload.articulo.id)
      if (payload.cantidad > 1) {
        cantidad = payload.cantidad
      }
      params.append('cantidad', cantidad )
      axios.post(url, params)
      .then(response =>{
        if (response.data.rc == 0 ) {
         let carrito = response.data.data
         commit('setCarrito',carrito) 
       }else{
        alert('Lo sentimos ocurrió un error. Intente mas tarde')
      }

    })
      .catch(err =>{
        console.log(err)
      })
    },
    borrarArticuloCarrito({commit}, payload){
      let carrito = this.state.carrito
      let url = host + 'remove_articulo_carrito'
      let usuario = this.state.usuario
      const params = new URLSearchParams()
      params.append('token', this.state.token)
      params.append('carrito', carrito.id)
      params.append('articulo', payload.articulo.id)     
      axios.post(url, params)
      .then(response =>{
        if (response.data.rc == 0 ) {
         let carrito = response.data.data
         commit('setCarrito',carrito) 
       }else{
        alert('Lo sentimos ocurrió un error. Intente mas tarde')
      }
    })
      .catch(err =>{
        console.log(err)
      })
      
    },
    logout({commit}){
      console.log('saliendo...')
      sessionStorage.removeItem('token')
      commit('setToken', null)
      commit('setUsuario', null)
      commit('setCarrito', null)
      commit('cargarArticulos', null)
      window.location.reload()

    }, 
    login({commit, getters}, payload) {
      const url = host + 'login'
      console.log(payload)
      const params = new URLSearchParams()
      params.append('username', payload.usuario)
      params.append('password', payload.password)
      axios.post(url,params)
      .then(response => {
        console.log(response)
        if (response.data.rc == 0) {
          let data = response.data.data
          let usuario = {
            'usuario': data.username,
            'email': data.email,
            'nombre': data.nombre,
            'apellidos': data.apellidos,
            'id': data.id,
            'rfc': data.rfc,
            'calle': data.calle,
            'numero_ext': data.numero_ext,
            'numero_int': data.numero_int || "No",
            'colonia': data.colonia,
            'cp': data.cp,
            'municipio': data.municipio || "No",
            'estado': data.estado.estado
          }
          let token = data.token
          sessionStorage.setItem('token', token)
          commit('setToken',token)  
          commit('setUsuario',usuario)          
        }else {
          alert('Entre datos correcto')
        }

      })
      .catch(error => {
       this.errors.push(error);
       console.log(error)
     })
    },
    cargarArticulos ({commit}) {
      //aqui se llama al servicio
      const url = host + 'articulos'
      const params = new URLSearchParams()
      const token = this.state.token
      params.append('token', token)
      axios.post(url,params)
      .then(response => {        
        console.log(response.data.rc)
        if (response.data.rc == 0) {
          var data = response.data.data
          const articulos = []
          for (var i = 0; i < data.length; i++) {
            data[i].imgUrl="/static/img/producto.jpg"
            articulos.push(data[i])
          }
          commit('cargarArticulos', articulos);          
        }else{
          alert('Hubo un error lo sentimos')          
          console.log(response.data.rc)
        }
      })
      .catch(error => {
        this.errors.push(error);
        console.log(error)
      })
    },
    filtrarArticulo({commit}, payload){
      const text = payload.text
      let compoFiltrar = payload.campoFiltrar            
      let articulosFiltrados = this.state.listadoArticulos.filter( articulo=> {
        if (compoFiltrar == "clave" && articulo.clave == text) {
          return true
        }
        if (compoFiltrar == "familias" && articulo.familia == text) {
          return true
        } 
        if (compoFiltrar == "lineas" && articulo.linea == text) {
          return true
        } 
        if (compoFiltrar == "descripcion" && articulo.descripcion.includes(text)) {
          return true
        }
        return false
      })
      commit('cargarArticulos', articulosFiltrados)
    } 
  }, 
  getters: {
    usuario(state) {
      return state.usuario
    },
    carrito(state) {
      return state.carrito
    },
    token(state) {
      return state.token
    }, 
    claves(state) {
      return state.claves
    },
    lineas(state) {
      return state.lineas
    },
    familias(state) {
      return state.familias
    },
    listadoArticulos (state) {
      return state.listadoArticulos
    },
    articulo (state) {
      return (articuloClave)=> {
        return state.listadoArticulos.find((articulo) => {
          return articulo.clave === articuloClave
        })
      }
    }    
  }
})
