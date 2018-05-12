import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    listadoArticulos:[],
    metasRezagadasCreadas: [],
    usuario: null,
    error: null,
    cargando: false
  },
  mutations: {
    cargarArticulos (state, payload) {
      state.listadoArticulos = payload;
    },
    cargarMetasRezagadasCreadas (state, payload) {
      state.metasRezagadasCreadas = payload
    },
    crearMetaRezagada (state, payload) {
      state.metasRezagadasCreadas.push(payload)
    }
  },
  actions: {
    cargarArticulos ({commit}) {
      //aqui se llama al servicio
      firebase.database().ref('articulos').once('value').
      then((data) => {
        const articulos = [];
        const obj = data.val();
        console.log(obj)
        for(let key in obj) {
          articulos.push({
            id: key,
            clave: obj[key].clave,
            descripcion: obj[key].descripcion,
            imgUrl: obj[key].imgUrl,
            linea: obj[key].linea,
            precio: obj[key].precio
          })
        }
        commit('cargarArticulos', articulos);
      })
      .catch ((error) => {
       console.log(error)
     })
    },
    cargarMetasRezagadasCreadas ({commit}) {
      firebase.database().ref('metasRezagadas').once('value')
      .then((data) => {
        const metas = []
        const obj = data.val()
        for (let key in obj) {
          metas.push({
            id: key,
            titulo: obj[key].titulo,
            descripcion: obj[key].descripcion,
            fechaFin: obj[key].fechaFin
          })
        }
        commit('cargarMetasRezagadasCreadas', metas)
      })
      .catch(
        (error) => {
          console.log(error)
        }
        )
    },
    crearMetaRezagada ({commit, getters}, payload) {
      const metaRezagada = {
        titulo: payload.titulo,
        fechaFin: payload.fechaFin,
        descripcion: payload.descripcion
      }
      firebase.database().ref('metasRezagadas').push(metaRezagada)
      .then((data) => {
        commit('crearMetaRezagada', {
          ...metaRezagada
        })
      })
      .catch((error) => {
        console.log('Error al crear una meta rezagada' + error)
      })
    }
  },
  getters: {
    listadoArticulos (state) {
      return state.listadoArticulos
    },
    metasRezagadasCreadas (state) {
      return state.metasRezagadasCreadas
    }
  }
})
