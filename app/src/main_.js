import Vue from 'vue';
import App from './App.vue';
import Routes from 'vue-router';

import Home from './components/home/Home.vue';
import Galeria from './components/galeria/Galeria.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Service from './service/Service';
import {Config} from './classes/Config';

let server = `${Config.getUrlApi().toString()}`;

Vue.prototype.$galeriaService = Service;
Vue.prototype.$server = server;

Vue.use(Routes)

Vue.config.productionTip = false

const rotas = [
  {
    name:'Galeria',
    path:'/galeria',
    component:Galeria,
  },
  {
    name:'Home',
    path:'/home',
    component:Home,
  }
]

const router = new Routes({mode:'history', routes:rotas});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
