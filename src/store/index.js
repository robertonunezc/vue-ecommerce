import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    metasRezagadasCreadas: [],
    usuario: null,
    error: null,
    cargando: false
  },
  mutations: {
    cargarMetasRezagadasCreadas (state, payload) {
      state.metasRezagadasCreadas = payload
    },
    crearMetaRezagada (state, payload) {
      state.metasRezagadasCreadas.push(payload)
    }
  },
  actions: {
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
    metasRezagadasCreadas (state) {
      return state.metasRezagadasCreadas
    }
  }
})
