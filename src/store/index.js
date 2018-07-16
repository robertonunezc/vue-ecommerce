import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
import jsonp from 'jsonp'
import router from '../router/index'
Vue.use(Vuex)
const host = "http://reicalab.com.cp-1.webhostbox.net/ecommerce/web/app_dev.php/api/"
//const host = "http://localhost:8000/api/"
export const store = new Vuex.Store({
  state: {
    listadoArticulos:[],
    usuario: null,
    claves:[],
    lineas:[],
    familias:[],
    errors: [],
    token:null,
    cargando: true,
    carrito:null,
    host: host
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
    },
    setCargando(state, payload) {
      state.cargando = payload
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
    crearCarrito({commit, dispatch}, payload){
      if (this.state.carrito == null) {
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
          alert('Lo sentimos ocurrió un error creado un carrito. Intente mas tarde')
        }

      })
        .then(()=>{
          console.log('Despues de crear el carrito')
          if (payload) {
            dispatch('actualizarCarrito', payload)
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
    editarPerfil({commit},payload){
      const url = host + 'profile'
      const params = new URLSearchParams()
      params.append('token', this.state.token)
      params.append('email', payload.email)
      params.append('nombre', payload.nombre)
      params.append('apellidos', payload.apellidos)
      params.append('calle', payload.calle)
      params.append('rfc', payload.rfc)
      params.append('estado', payload.estado)
      params.append('municipio', payload.municipio)
      params.append('cp', payload.cp)
      params.append('colonia', payload.colonia)
      params.append('numero_int', payload.numero_int)
      params.append('numero_ext', payload.numero_ext)
      axios.post(url, params)
      .then(response=>{
        if (response.data.rc == 0) {
          let data = response.data.data
          console.log(data)
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
            'estado': data.estado == null ? "No" : data.estado.estado,
            'pedidos': data.pedidos
          }
          commit('setUsuario',usuario) 
          router.push('/perfil')  
        }
      })
      .catch(error => {
       //this.errors.push(error);
       console.log(error)
     })
      console.log(this.state.usuario)
    },
    logout({commit}){
      sessionStorage.removeItem('token')
      commit('setToken', null)
      commit('setUsuario', null)
      commit('setCarrito', null)
      commit('cargarArticulos', null)
      window.location.reload()

    }, 
    login({commit, getters, dispatch}, payload) {
      const url = host + 'login'
      console.log(payload)
      const params = new URLSearchParams()
      params.append('username', payload.usuario)
      params.append('password', payload.password)
      axios.post(url,params)
      .then(response => {
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
            'estado': data.estado.estado || "No",
            'pedidos': data.pedidos
          }
          let token = data.token
          sessionStorage.setItem('token', token)
          commit('setToken',token)  
          commit('setUsuario',usuario)   
          let carritoActivo = data.pedidos.find(item => item.status == 1) 
          if (carritoActivo == null) {
            console.log('No hay carrito lo creo')
            dispatch('crearCarrito')
          }else{
            console.log('Si hay carrito lo setteo', carritoActivo)
            commit('setCarrito',carritoActivo)            
            console.log('Obteneindo carrito', this.getters.carrito)
          }  
          router.push('/')      
        }else {
          alert('Entre datos correcto')
          router.push('/login')      
        }

      })
      .catch(error => {
       //this.errors.push(error);
       console.log(error)
     })
    },
    limpiarCarrito({commit}){
      commit('setCarrito', null)
    }, 
    cargarArticulos ({commit}) {
      //aqui se llama al servicio
      const url = host + 'articulos'
      axios.get(url)
      .then(response => {        
        console.log(response.data.rc)
        if (response.data.rc == 0) {
          var data = response.data.data          
          for (var i = 0; i < data.length; i++) {
            if (data[i].imagen == null) {
              data[i].imagen = "/static/img/producto.png"
            }else{
              data[i].imagen = host.split("/api/")[0] + "/uploads/images/" + data[i].imagen
            }
          }
          commit('cargarArticulos', data)
          commit('setCargando', false)         
        }else{
          alert('Hubo un error al cargar articulos.Lo sentimos')          
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
    cargando(state) {
      return state.cargando
    },
    carrito(state) {           
      let carrito = state.carrito
      if (Array.isArray(carrito)) {
        return carrito[0]
      }
      return carrito
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
          return articulo.clave == articuloClave
        })
      }
    }    
  }
})
