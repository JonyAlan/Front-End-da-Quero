<template>
  <header>
    <div>
      <div class="header">
        <div class="flex">
          <div class="col">
            <div class="just-center">
              <img style="height: 25px; width: 25px;" src="../../public/imagens/icons/info-blue.png" />
            </div>
            <div class="itens-rows">
              <p class="text-blue" >Como funciona</p>
            </div>
            <div class="vert-line"></div>
            <div class="just-center ">
              <img style="height: 25px; width: 25px;" src="../../public/imagens/icons/whatsapp-green.png" />
            </div>
            <div class="itens-rows">
              <p class="text-blue" >0800 123 2222</p>
              <p class="text-blue" >Envie mensagem ou ligue</p>
            </div> 
          </div>
        </div>

        <div class="col  red">
          <img style=" width: 150px;" src="../../public/imagens/logo/logof.png" />
        </div>

        <div class="flex">
          <div class="col right">
            <div class="itens-rows">
              <p class="text-blue" >Nome Sobrenome</p>
            </div>
            <div class="just-center">
              <img style="height: 25px; width: 25px;" src="../../public/imagens/icons/person.png" />
            </div>
          </div>
        </div>
        
      </div>

      <div class="header-menu">
        <!-- <div class="brand-logo-header">  -->
        <div class="col">
          <p>Minha conta</p>
        </div>
        <div class="col">
          <p>Pré-matrículas</p>
        </div>
        <div class="col blue-second">
          <p>Bolsas favoritas</p>
        </div>
      </div>
 
    </div>
  </header>
</template>

<script>
/*eslint-env jquery*/
// import { mapState, mapActions, Store } from "vuex";

export default {
  name: "HeaderMain",
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
    //       document.getElementById('btnSalvarChk').disabled = true;
    //       document.getElementById('btnSalvarChk').setAttribute('style', 'background-color: #D1D1D1 !important; color: #FFFFFF !important; border: 0 !important;');
    //     });
    //   }
    // },
    // //verifica se todos os itens da checklist foram selecionados
    // notificacoes: function(idEmpresa) {
    //   var self = this;
    //   self.notificacaoList = [];
    //   var audiencia = "";
    //   if (
    //     navigator.userAgent.match(/Android/i) ||
    //     navigator.userAgent.match(/webOS/i) ||
    //     navigator.userAgent.match(/iPhone/i) ||
    //     navigator.userAgent.match(/iPad/i) ||
    //     navigator.userAgent.match(/iPod/i) ||
    //     navigator.userAgent.match(/BlackBerry/i) ||
    //     navigator.userAgent.match(/Windows Phone/i)
    //   ) {
    //     audiencia = "celular";
    //   } else {
    //     audiencia = "web";
    //   }
    //   axios
    //     .get(self.apiCliente + "/v1/cliente/empresa/iniciar/" + idEmpresa + "/" + audiencia, {}
    //     )
    //     .then(response => {
    //       self.notificacaoList = response.data.data.notificacoes;
    //       self.qntNotif = 0;
    //       for (var cont = 0; cont < self.notificacaoList.length; cont++) {
    //         if (self.notificacaoList[cont].data_leitura == null)
    //           self.qntNotif = parseInt(self.qntNotif) + 1;
    //       }
    //     })
    //     .catch(function(error) {
    //       Swal.fire({
    //         type: "info",
    //         title: "...Ops!",
    //         text: self.$utils.erro(error),
    //         showConfirmButton: true
    //       });
    //     });
    // },
    // openModal: function(list) {
    //     var self = this;
    //     self.notTitulo = list.titulo;
    //     var notTexto = document.getElementById("notTexto");
    //     notTexto.innerHTML = list.texto;
    //     $(document).ready(function() {
    //       $("#notifModal").modal("open");
    //     });
    //     axios
    //       .get(
    //         self.apiCliente + "/v1/cliente/empresa/notificacao/" + list.id_em_notificacao + "/" + self.usuario.sessao, {}
    //       )
    //       .then(response => {
    //         if (response) {
    //           self.notificacoes(self.usuario.id_empresa);
    //         }
    //       })
    //       .catch(function(error) {
    //         Swal.fire({
    //           type: "info",
    //           title: "...Ops!",
    //           text: self.$utils.erro(error),
    //           showConfirmButton: true
    //         });
    //       });
    //   }
  },
};
</script>
<style>
.vert-line{
  border-right: 3px solid #eeefef;
  height: 45px;  
  margin-right: 10px;
  top: 0;
}
 
.header {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  height: 70px;
  background-color: white;
}
.header-menu {
  display: flex;
  height: 40px;
  padding: 0 3rem; 
  left: -20px;
  justify-items: flex-start;
  background-color: #18acc4; 
}
.blue-second {
  background-color: #007A8D;
}
.flex{ 
  flex: 1;
  align-items: flex-start;

}
.col > p{
  color: white;
  margin: 0 20px;
  display: flex;  
  font-weight: bold;
  font-size: 14px;
  align-items: center;
}
</style>