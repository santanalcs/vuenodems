import Vue from 'vue'
import App from './App.vue'
import Router from '../node_modules/vue-router'

import Home from './components/home/Home.vue'
import Register from './components/crud/Register.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Services from './service/Services'
import {Config} from './classes/Config'

let server = `${Config.getUrlApi().toString()}`

Vue.prototype.$services = Services
Vue.prototype.$server = server

Vue.use(Router)

Vue.config.productionTip = false

const routes = [
  {
    path:'/',
    redirect:'/home', 
  },
  {
    name:'Home',
    path:'/home',
    component:Home, 
  },
  {
    name:'Register',
    path:'/cadastro',
    component:Register,
  }
]

const router = new Router({mode:'history', routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
