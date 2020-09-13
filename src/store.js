import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

// Persiste valores definidos mesmo com refresh da tela
const vuexLocalStorage = new VuexPersist({
  key: 'quero-bolsa',
  storage: window.localStorage,
  reducer: (state) => ({ token: state.token, usuario: state.usuario }),

  //  filter: mutations => (true)
})

export default new Vuex.Store({
  state: {
    usuario: {
      id: '',
      nome: '',
      email: '',
      ambiente: '',
      estado: '',
      id_empresa: '',
      cnpj: '',
      razao_social: '',
      sessao: '',
      tipo: '',
      id_parceiro: '',
      operador: '',
      primeiro_acesso: ''
    },
    colaborador: {
      id: 0,
    },
    
    apiCliente: process.env.VUE_APP_API_CLIENTE,
    site: process.env.VUE_APP_SITE,
    cadastro: process.env.VUE_APP_CADASTRO,
    cliente: process.env.VUE_APP_CLIENTE,
    apiNotificacao: process.env.VUE_APP_API_NOTIFICACAO,
    token: '',
    bucket: {
      nota: process.env.VUE_APP_BUCKET_NOTA,
      empresa: process.env.VUE_APP_BUCKET_EMP,
      certificado: process.env.VUE_APP_BUCKET_CERT,
      parceiro: process.env.VUE_APP_BUCKET_PARC,
    },
  },
  mutations: {
    TOKEN(state, obj) {
      state.token = obj;
    },
    REGISTRA_USUARIO(state, payload) {
      if (payload.id) {
        state.usuario.id = payload.id;
      }
      if (payload.nome) {
        state.usuario.nome = payload.nome;
      }
      if (payload.email) {
        state.usuario.email = payload.email;
      }
      if (payload.ambiente) {
        state.usuario.ambiente = payload.ambiente;
      }
      if (payload.estado) {
        state.usuario.estado = payload.estado;
      }
      if (payload.id_empresa) {
        state.usuario.id_empresa = payload.id_empresa;
      }
      if (payload.sessao) {
        state.usuario.sessao = payload.sessao;
      }
      if (payload.cnpj) {
        state.usuario.cnpj = payload.cnpj;
      }
      if (payload.razao_social) {
        state.usuario.razao_social = payload.razao_social;
      }
      if (payload.tipo) {
        state.usuario.tipo = payload.tipo;
      }
      if (payload.id_parceiro) {
        state.usuario.id_parceiro = payload.id_parceiro;
      }
      if (payload.operador) {
        state.usuario.operador = payload.operador;
      }
      
      state.usuario.primeiro_acesso = payload.primeiro_acesso;
      
    },
    COLABORADOR(state, payload) {
      state.colaborador.id = payload.id;
    },
    BUCKET(state, payload) {
      state.bucket = payload;
    },
    ZERASESSAO(state, payload) {
      state.usuario = payload;
      state.token = payload;
      // state.colaborador = payload;
    }
  },
  actions: {
    setToken: ({ commit }, payload) => commit('TOKEN', payload),
    registraUsuario: ({ commit }, payload) => commit('REGISTRA_USUARIO', payload),
    setColaborador: ({ commit }, payload) => commit('COLABORADOR', payload),
    bucket: ({ commit }, payload) => commit('BUCKET', payload),
    zerasessao: ({ commit }, payload) => commit('ZERASESSAO', payload)
  },
  getters: {
    getToken: state => state.token,
    getUserTipo: state => state.usuario.tipo
  },
  plugins: [vuexLocalStorage.plugin]
});
