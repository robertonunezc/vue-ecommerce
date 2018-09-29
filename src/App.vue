<template>
  <main>
    <!-- Navigation -->
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-sm-12 col-md-5">
        <div class="navbar-header">
          <img alt="ELVA" width="60" height="80" src="http://distribuidoraelva.mx/wp-content/themes/elva/img/logo.png">
          <strong class="text">Distribuidora ELVA</strong>
        </div>
      </div>
      <div class="col-sm-12 col-md-5">
        <ul class="flex">
          <li class="nav-item" v-if="usuario">
            <a href="#" class="nav-link">Bienvenido {{usuario.usuario}}</a> 
          </li>      
          <li class="nav-item" v-for="item in menuItems">
            <router-link :to="item.link" class="nav-link btn btn-default navbar-btn">
              {{item.title}}
            </router-link>             
          </li>   
          <li class="nav-item">
            <a href="#" class="nav-link btn btn-default navbar-btn"  @click.stop="logout">Salir</a> 
          </li>               
        </ul>
      </div>
    </div>

    <!-- Page Content -->
    <div class="container" style="margin-top:40px">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <!-- /.container -->
    <!-- Footer -->
    <footer id="footer" class="color color-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-1">
            <a href="index.html" class="logo">
              <img alt="ELVA" width="50px" src="http://distribuidoraelva.mx/wp-content/themes/elva/img/logo.png">
            </a>                

          </div>
          <div class="col-md-8">
            <p>©Disribuidora ELVA S.A. de C.V.</p>
            <p>Conoce nuestro<a href="">AVISO DE PRIVACIDAD</a>. Todos los logotipos son marcas registradas de sus respectivos propietarios. </p>
          </div>
          <div class="col-sm-3">
            <div class="row">
              <div class="col-sm-4">
                <a href="https://facebook.com/Distribuidora-Elva-SA-de-CV-1951211168525526">
                  <img class="icon-social" width="40"src="http://distribuidoraelva.mx/wp-content/themes/elva/img/icons/fb.png">
                </a>                        
              </div>
              <div class="col-sm-4">
                <a href="https://twitter.com/elvavhsa">
                  <img class="icon-social" width="40"src="http://distribuidoraelva.mx/wp-content/themes/elva/img/icons/tw.png">
                </a>                        
              </div>
              <div class="col-sm-4">
                <a href="#">
                  <img class="icon-social" width="40"src="http://distribuidoraelva.mx/wp-content/themes/elva/img/icons/gg.png">
                </a>                        
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </main>
</template>
<script>
export default {
  data () {
    return {
      sideNav: false,      
    }
  },

  computed: {
    usuario (){
      return this.$store.getters.usuario 
    },
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

<style lang="css" scoped>
li {
  list-style-type: none;
}
.flex {
  display:flex;
  flex-wrap: wrap;
}
.btn {
  background: transparent;
  color: rgb(237, 132, 70);
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px 13px;
}

.text{
  color: rgb(237, 132, 70);
}
.active {
  background-color: rgb(237, 132, 70);
  color: white;
}

.color-secondary {

  background: #1a1c2b;
  border-top-color: #1a1c2b;

}

#footer{
  padding: 20px 0 0;
  margin-top:150px;
}

.color p {
  color: #FFF;
  margin: 0 0 20px;
}
</style>
