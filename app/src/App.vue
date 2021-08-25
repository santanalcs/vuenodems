<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="home">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="cadastro">Cadastrar</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Desativado</a>
            </li>
          </ul>
          <!-- form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
          </form -->
        </div>
      </nav>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/home/Home.vue'
import Register from './components/crud/Register.vue'

export default {
  name: 'App',
  components: {
    Home,
    Register
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 60px;
}
</style>
