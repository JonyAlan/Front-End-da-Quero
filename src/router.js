import Vue from "vue";
import Router from "vue-router"; 
import Home from "./views/Home.vue"; 
import BolsasFavoritas from "./views/BolsasFavoritas.vue"; 
// import store from "./store";
// import axios from 'axios';

Vue.use(Router);

// Necessário para o Lambda. Não processa requisições via json
// const config = {
//   headers: {
//     "content-Type": "application/x-www-form-urlencoded",
//   },
// };

// async function checkToken() {
//   const token = store.getters.getToken;
//   // Necessário para o Lambda. Não processa requisições via json
//   const params = new URLSearchParams();
//   params.append("token", token);

//   // endpoint diferente em ambientes de produção e homologação/desenvolvimento
//   const path = process.env.NODE_ENV === 'production' ? '/v1/auth/verify' : '/v1/tst/verify';
//   const check = await axios.post(process.env.VUE_APP_API_AUTH + path, params, config)
//     .then(async res => {
//       if (res.data.statusCode !== 200) {
//         return false;
//       }
//       return true;
//     })
//     .catch(() => {
//       return window.location.replace('/login/login.html');
//     });
//   return check;
// }

//const autenticado = async (to, from, next) => {
  /***
   * Função para ser executada nos endpoints que o usuário precisa estar logado e 
   * identificado para serem acessados.
   * Caso haja o token aramazenado no store, será checado se ele está válido, através do endpoint
   * executado através de uma função na AWS Lambda.
   * No momento, não acredito ser necessário que a validação do token deva ser limitada,
   * pois não há impacto significativo no tempo de carregamento e também nos custos da operação
   * baseada na AWS.
   * Caso este cenário tenha mudado, fica a vontade para criar um midlleware que evite a validação 
   * do token a cada requisição das urls com router guards.
   */
//   const token = store.getters.getToken;
//   if (!token || token == '' || typeof token !== 'string' ) {
//     window.location.replace('/login/login.html');
//   } else if (store.getters.getTokenChecked) {
//     next();
//     return;
//   } else {
//     const tokenIsValid = await checkToken();
//     if (tokenIsValid) {
//       return next();
//     }
//     return window.location.replace('/login/login.html');  
//   }
//   next();
//   return;
//};


// const pageNotFound = async (to, from, next) => {
//   if (typeof store.getters.getToken === "string") {
//     const tokenIsValid = await checkToken();
//     if (tokenIsValid) {
//       next('/');
//       return;
//     }
//   }
//   // Não está logado
//   window.location.href = "/login/login.html";
//   return;
  
// };

export default new Router({
  routes: [

    {
      path: "/",
      name: "home",
      component: Home,
      // beforeEnter: autenticado
    },
    {
      path: "/BolsasFavoritas",
      name: "BolsasFavoritas",
      component: BolsasFavoritas,
      // beforeEnter: autenticado
    },
    // Meus Documentos ---------------------------------
    // {
    //   path: "/documentos/consulta",
    //   name: "meusDocumentos",
    //   component: meusDocumentos,
    //   beforeEnter: autenticado
    // },

    {
      path: "*",
      // beforeEnter: pageNotFound
    }
  ]
});