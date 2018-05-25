import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'
import jsonp from 'jsonp'

Vue.use(Vuex)
const host = "http://localhost:8000/api/"
const token = "eyJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTI3MjgwNzQxLCJpYXQiOjE1MjcyNzcxNDF9.d0MB1REfaNs-i6zT2NFy2xOQh6gG1u04tnsuCVEMKSbDUtc56c1IsF8ePsAfq874gp3pujPB0PLn328b15vDZVj3579CZyC5qklyaEN-SKgQepShkTCD3FBMMWPI3BH72LH3X6_0Hc8JC1p4NMgON68z7uHAdaR0xUIP9ll1UJpzdteQhnMFTEUu1vxpAX5vPNz_nIWP69JsdXEYSaruVPzauyLZnxe5ojhjs-TMYYvSZz6Rnn4lJmlCKUCppypQi-fWffz8z57dOELcUnInkPzgcpjOCi39yixoo2DuqxsgruLru7IVpdF_v6_WEd1jgqsSMFl-EAkZPI3bcTDPYeGNjdwz6vFXYXTEdlEYmDjABBuh6dDBUiCJ7-oQvjBWhsty0Mp8KFuY0vpfotLw7xHRR7C0nV1VGqNVZBWjoK5xk8cSrhJqp9v_IsnY7dbPDFm1sem0i-Ladd9TT0coyFaXC62EvoTgEHPdh9Lm__Vl_P4cgMDXHGRws4v3gKTXXYev4aTPYps0Iazn1mVT_Xk2LeqFAUj1-SYjYiTEg73X-Mh4YTZwOZgBy79dzvRYadpRAwfAuRP8lZcB6q5AadHAnbsBWusBuZrNNQf1rtL7REby5qV7fDMuITjOLyzOGGDDbk6l_Yw_t9LYsmPYkMhruLn72-USBjzRLR8q-Mw"
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
    login(state, payload) {
      state.usuario = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
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
          commit('login',usuario)  
          commit('setToken', token)
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
