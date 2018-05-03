<template>
  <v-app light>
    <v-toolbar  dark color="black">
      <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>TiendaVirtual.com</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
        v-for="item in menuItems"
        :to="item.link"
        :key="item.title">
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <router-view></router-view>
  </main>
  <v-footer></v-footer>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
      { icon: 'face', title: 'Iniciar sesión', link: '/login' },
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
        { icon: 'supervisor_account', title: 'Mi Cuenta', link: '/usuario/perfil' },
        { icon: 'room', title: 'Carrito', link: '/carrito' },
        { icon: 'person', title: 'Salir', link: '/salir' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
//        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
return false
}
}
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
