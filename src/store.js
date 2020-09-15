import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'quero-bolsa',
  storage: window.localStorage,
  reducer: (state) => ({ token: state.token}),
})
export default new Vuex.Store({
  state: {
  
  },
  mutations: {
    TOKEN(state, obj) {
      state.token = obj;
    }
  },
  actions: {
    setToken: ({ commit }, payload) => commit('TOKEN', payload),
  },
  getters: {
    getToken: state => state.token,
  },
  plugins: [vuexLocalStorage.plugin]
});
