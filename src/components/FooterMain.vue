<template>
  <footer class="page-footer">
    <div class="footer-networks text-white">
      <div class="col colFull">
         <div class="just-center">
           <img style="height: 30px; width: 30px;" src="../../public/imagens/icons/whatsapp.png">
         </div>
         <div class="itens-rows text-short">
           <p>0800 1236 2222</p>
           <p style="font-weight: normal;">Segunda a sexta de 8h às 22h</p>
         </div>
         <div class="itens-rows text-full">
           <p>0800 1236 2222</p>
           <p>Seg - Sex 8h-22h</p>
         </div>
      </div>
      <div class="col col33">
         <div class="just-center text-end">
           <img style="height: 30px; width: 30px;" src="../../public/imagens/icons/comments.png">
           <p class="text-short">Chat</p>
         </div>
         <div class="itens-rows text-full ">
           <p>Chat ao vivo</p>
           <p>Seg - Sex 8h-22h</p>
         </div>
      </div>
      <div class="col col33 border-mail">
        <div class="just-center text-end">
          <img  style="height: 30px; width: 30px;" src="../../public/imagens/icons/envelope.png">
          <p class="text-short">E-mail</p> 
        </div>
        <div class="itens-rows text-full">
          <p>Mande um e-mail</p>
          <p>Respondemos rapidinho</p>
        </div>
      </div>
      <div class="col col33 ">
        <div class="just-center text-end">
          <img  style="height: 30px; width: 30px;" src="../../public/imagens/icons/info-white.png">
          <p class="text-short">Ajuda</p>
        </div>
        <div class="itens-rows text-full ">
          <p>Central de ajuda</p>
          <p>Encontre todas as respostas</p>
        </div>
      </div> 
    </div>
    <div class="footer-copyright">
      <div class="text-white">
        <span> Feito com <i class="far fa-heart"></i> </span> <span>pela Quero Educação</span>
      </div>
    </div>
  </footer>
</template>

<script> 

export default {
  name: "FooterMain",
  props: {
    msg: String,
  },
  data() {
    return {
      teste: "",
    };
  },
   
};
</script>
<style scoped>
/* Customer for  footer */
.page-footer{ 
  position: absolute;   
  bottom: 0;
  width: 100%;
  height: 2rem;
}
.footer-copyright {
  background-color: #18ACC4;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  height: 100px;
} 
.footer-networks { 
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  height: 100px; 
}  
.itens-rows > p{
  display: flex;  
  font-weight: bold;
  font-size: .9rem;
  align-items: center;  
  margin: 0px 13px; 
}

.col33, .colFull{
  background-color: #007A8D;
  width: 25%;
  justify-content: center; 
}
.text-short{
  display: none;
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .m-txt {
    display: none;
  }
  .vert-line { 
    margin-left: 30px; 
  }
  .vert-line-right { 
    opacity: 1;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
  .colFull {
    border: 1px;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #18ACC4;
  }
  .border-mail{
    border-left: 2px solid #18ACC4;
    border-right: 2px solid #18ACC4;
  }
  .col33 {  
    flex: 1;
    height: 60px; 
  }
  .text-full {
    display: none;
  } 
  .text-end {
    display: flex;  
    flex-direction: column; 
    align-items: center; 
    font-weight: bold; 
  }
  .text-short{
    display: inline;
  } 
}
</style>

