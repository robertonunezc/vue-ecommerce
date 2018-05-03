import Vue from 'vue'
import Router from 'vue-router'
import CreateMetaResagada from '@/components/CreateMetaResagada'
import ListadoMetasRezagadas from '@/components/ListadoMetasRezagadas'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  ]
})
