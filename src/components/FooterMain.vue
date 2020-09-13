<template>
  <footer class="page-footer">
    <div class="footer-networks">
      <div class="col">
         <div class="just-center">
           <img style="height: 30px; width: 30px;" src="../../public/imagens/icons/whatsapp.png">
         </div>
         <div class="itens-rows">
           <p>0800 1236 2222</p>
           <p>Seg - Sex 8h-22h</p>
         </div>
      </div>
      <div class="col">
         <div class="just-center">
           <img style="height: 30px; width: 30px;" src="../../public/imagens/icons/comments.png">
         </div>
         <div class="itens-rows">
           <p>Chat ao vivo</p>
           <p>Seg - Sex 8h-22h</p>
         </div>
      </div>
      <div class="col">
         <div class="just-center">
           <img  style="height: 30px; width: 30px;" src="../../public/imagens/icons/envelope.png">
         </div>
         <div class="itens-rows">
           <p>Mande um e-mail</p>
           <p>Respondemos rapidinho</p>
         </div>
      </div>
      <div class="col">
        <div class="just-center">
          <img  style="height: 30px; width: 30px;" src="../../public/imagens/icons/info-white.png">
        </div>
         <div class="itens-rows">
           <p>Central de ajuda</p>
           <p>Encontre todas as respostas</p>
         </div>
      </div>
 
      
    </div>
    <div class="footer-copyright">
      <div class="footer">
        <span> Feito com <i class="far fa-heart"></i> </span> <span>pela Quero Educação</span>
      </div>
    </div>
  </footer>
</template>

<script>
/*eslint-env jquery*/
import { mapState } from "vuex";

export default {
  name: "FooterMain",
  props: {
    msg: String,
  },
  data() {
    return {
      logoParceiro: "",
    };
  },
  mounted() {
    var self = this;
    setTimeout(function () {
      self.logoParceiro = false;
      if (self.usuario.id_parceiro == 1) {
        self.logoParceiro = true;
      }
    }, 2000);
  },

  computed: {
    ...mapState(["usuario"]),
  },
};
</script>

