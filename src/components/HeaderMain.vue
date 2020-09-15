<template>
  <header>
    <div>
      <div class="header">
        <div class="flex">
          <div class="col">
            <div class="just-center">
              <img style="height: 28px; width: 28px;" src="../../public/imagens/icons/info-blue.png" />
            </div>
            <div class="itens-rows m-txt">
              <p class="text-blue ">Como funciona</p>
            </div>
            <div class="vert-line"></div> 
            <div class="just-center whats-header">
              <div class="just-center">
                <img style="height: 28px; width: 28px;" src="../../public/imagens/icons/whatsapp-green.png" />
              </div>
              <div class="itens-rows">
                <p class="text-blue ">0800 123 2222</p>
                <p class="text-blue ">Envie mensagem ou ligue</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col red">
          <img style=" width: 150px;" src="../../public/imagens/logo/logof.png" />
        </div>
        <div class="flex">
          <div class="col right">
            <div class="vert-line-right"></div>
            <div class="itens-rows m-txt">
              <p class="text-blue ">Nome Sobrenome</p>
            </div>
            <div class="just-center">
              <img style="height: 25px; width: 25px;" src="../../public/imagens/icons/person.png" />
            </div>
          </div>
        </div>
      </div>

    <!-- Menu Secundario -->
      <div class="header-menu">
        <div class="col pointer" @click="navigate(false)">
          <p>Minha conta</p>
        </div>
        <div class="col pointer" @click="navigate(false)">
          <p>Pré-matrículas</p>
        </div>
        <div class="col blue-second pointer" @click="navigate(true)">
          <p>Bolsas favoritas</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderMain",
  props: {
    msg: String,
  },
  data() {
    return {
      teste: "",
    };
  },
  methods: {
    navigate: function (to) {
      if(to){
        if(this.$router.currentRoute.path !== '/bolsasFavoritas')
          this.$router.replace("bolsasFavoritas")
      }
      else{
        alert("Em breve...");
      }
    },
  },
};
</script>
<style>
.vert-line {
  border-right: 3px solid #eeefef;
  height: 45px;
  margin-right: 10px;
  top: 0;
}
.vert-line-right {
  opacity: 0;
  border-right: 3px solid #eeefef;
  height: 45px;
  margin-right: 30px;
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
  padding-left: 3rem;
  left: -20px;
  justify-items: flex-start;
  background-color: #18acc4;
  font-size: clamp(1em, 1em + 1vw, 1.5em);
}
.blue-second {
  background-color: #007a8d;
}
.flex {
  flex: 1;
  align-items: flex-start;
}
.col > p {
  color: white;
  margin: 0 20px;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
}
.whats-header{  
  overflow: hidden;
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
    margin-right: 25px !important; 
    opacity: 1;
  }
  .header-menu {
    padding-left: 0rem;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
  .whats-header {
    display: none;
  }
   .vert-line-right { 
    opacity: 1;
    margin-right: 0px;
  }
}
</style>