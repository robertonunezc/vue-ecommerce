<template>
  <main>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">elva-ecommerce.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
             <router-link to="/login" class="nav-link">Entrar</router-link>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Empresa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>  
          <li class="nav-item">
            <router-link to="/carrito" class="nav-link">Carrito</router-link>
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
    }    
  }
}
</script>

<style lang="stylus">
</style>
