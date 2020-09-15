import Vue from "vue";
import Router from "vue-router"; 
import Home from "./views/Home.vue"; 
import BolsasFavoritas from "./views/BolsasFavoritas.vue"; 
import PreMatriculas from "./views/PreMatriculas.vue"; 

Vue.use(Router);
  
export default new Router({
  routes: [

    // {
    //   path: "/",
    //   name: "home",
    //   component: Home,
    // },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: "/index.html",
      redirect: "/" 
    },
    {
      path: "/BolsasFavoritas",
      name: "BolsasFavoritas",
      component: BolsasFavoritas,
    },
    {
      path: "/PreMatriculas",
      name: "PreMatriculas",
      component: PreMatriculas,
    },
    {
      path: "*",
    }
  ]
});