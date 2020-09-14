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

  // methods: {
 
  //   openModal: function(list) {
  //      // Get the modal
  //     var modal = document.getElementById("myModal");

  //     // Get the button that opens the modal
  //     var btn = document.getElementById("myBtn");

  //     // Get the <span> element that closes the modal
  //     var span = document.getElementsByClassName("close")[0];

  //     // When the user clicks the button, open the modal 
  //     btn.onclick = function() {
  //       modal.style.display = "block";
  //     }

  //     // When the user clicks on <span> (x), close the modal
  //     span.onclick = function() {
  //       modal.style.display = "none";
  //     }

  //     // When the user clicks anywhere outside of the modal, close it
  //     window.onclick = function(event) {
  //       if (event.target == modal) {
  //         modal.style.display = "none";
  //       }
  //     }
  //   }
  // },
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