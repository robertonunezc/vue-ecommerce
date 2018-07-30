<template>
  <main>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" target="_blank"href="http://distribuidoraelva.mx">distribuidoraelva.mx</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">           
          </li>
          <li class="nav-item" v-for="item in menuItems">

            <router-link :to="item.link" class="nav-link">
              {{item.title}}
            </router-link>             
          </li>   
          <li class="nav-item">
           <a href="#" class="nav-link"  @click.stop="logout">Salir</a> 
         </li>                      
       </ul>
     </div>
   </div>
 </nav>
 <!-- Page Content -->
 <div class="container" style="margin-top:80px">
  <transition>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</div>
<!-- /.container -->
<!-- Footer -->
<footer class="py-5" style="margin-top:40px">
  <p class="m-0 text-center ">Copyright &copy; Your Website 2018</p>
  <!-- /.container -->
</footer>

</main>
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
      { icon: 'face', title: 'Entrar', link: '/login' },
      { icon: 'face', title: 'Catalogo', link: '/' },
      { icon: 'face', title: 'Carrito', link: '/carrito' },
      { icon: 'face', title: 'Registro', link: '/registro' },
     // { icon: 'face', title: 'Contacto', link: '/login' },
     ]
     if (this.userIsAuthenticated) {
      menuItems = [
      { icon: 'supervisor_account', title: 'Mi Cuenta', link: '/perfil' },
      { icon: 'face', title: 'Catalogo', link: '/' },
      { icon: 'room', title: 'Carrito', link: '/carrito' },
      ]
    }
    return menuItems
  } ,
  userIsAuthenticated () {
    return this.$store.getters.usuario !== null && this.$store.getters.usuario !== undefined
  }   
},
methods: {
  logout() {
    this.$store.dispatch('logout')
    this.$router.push('/')
  }
}
}
</script>

<style lang="stylus">
</style>
