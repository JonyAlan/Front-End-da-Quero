<template>
  <div class="history-menu container text-blue">
    <!-- <div class="brand-logo-header">  -->
    <span>Home / </span>
    <span>Minha conta / </span>
    <span>Bolsas favoritas</span>
  </div>
</template>

<script>
/*eslint-env jquery*/
// import { mapState, mapActions, Store } from "vuex";

export default {
  name: "HistoryMenu",
  props: {
    msg: String,
  },
  data() {
    return {
      empresas: [],
      notificacaoList: [],
      empresaSelect: "",
      qntNotif: "0",
      empresasExib: false,
      hoje: null,

      primeiro_acesso: null,
      tipoUsuario: null,

      notTitulo: "",
      notTexto: "",

      ambiente: process.env.NODE_ENV,
    };
  },
  mounted() {
    // $(document).ready(function() {
    //   $(".modal").modal();
    // });
    // this.hoje = new Date();
    // this.carregaEmpresas();
    // this.notificacao();
  },
  // computed: {
  //   ...mapState([ "usuario", "apiCliente", "site", "cliente", "token", "cadastro", "apiNotificacao" ])
  // },

  methods: {
    // ...mapActions(["setToken", "registraUsuario", "zerasessao"]),
    // modalAviso: function() {
    //   //verifica o primeiro do usuario, se o tipo do usuario for 'cliente' exibe o modal com a checklist inicial
    //   if(this.tipoUsuario == 'C'){
    //     $(document).ready(function() {
    //       $('#avisoModal').modal('open')[0].M_Modal.options.dismissible = false;
    //       document.getElementById('btnSalvarChk').dismissible = false;
  },
};
</script>
<style>
.history-menu {
  font-weight: bold;
  font-size: .8rem;
  margin: 25px 0; 
}
</style>