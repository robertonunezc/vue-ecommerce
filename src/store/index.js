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
    metasRezagadasCreadas: [],
    usuario: null,
    errors: [],
    token:null,
    cargando: false
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
    }
  },
  actions: { 
    logout({commit}){
      console.log('saliendo...')
      sessionStorage.removeItem('token')
      commit('setToken', null)
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
    }   
  },
  getters: {
    usuario(state) {
      return state.usuario
    },
    token(state) {
      return state.token
    },
    listadoArticulos (state) {
      return state.listadoArticulos
    },
    articulo (state) {
      return (articuloClave)=> {
        console.log(articuloClave)
        return state.listadoArticulos.find((articulo) => {
          return articulo.clave === articuloClave
        })
      }
    }
  }
})
