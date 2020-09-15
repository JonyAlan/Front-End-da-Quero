<template>
  <div class="container">
    <!-- Início do modal com seus componentes -->
    <div v-show="modalShow" id="addBolsaModal" class="modal"> 
      <div class="modal-content">
        <div class="modal-header">
          <span @click="closeModal()" class="close">&times;</span>
          <h1 class="text-black">Adicionar bolsa</h1>
          <h5>Filtre e adicione as bolsas de seu interesse.</h5>
        </div>
        <form>
          <div class="row">
            <div class="half-row spacing">
              <label for="cidade">Selecione sua cidade:</label>
              <select name="cidade" id="cidade" v-model="cidadeSelected">
                <option value="São José dos Campos">São José dos Campos</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Fortaleza">Fortaleza</option>
                <option value="Jacareí">Jacareí</option>
              </select>
            </div>
            <div class="half-row">
              <label for="selectCurso">Selecione o curso de sua preferência:</label>
              <select name="selectCurso" id="selectCurso" v-model="cursoSelected">
                <option value="Engenharia Mecânica">Engenharia Mecânica</option> 
                <option value="Jornalismo">Jornalismo</option> 
                <option value="Biomedicina">Biomedicina</option> 
                <option value="Arquitetura e Urbanismo">Arquitetura e Urbanismo</option> 
                <option value="Propaganda e Marketing">Propaganda e Marketing</option> 
                <option value="Marketing">Marketing</option> 
                <option value="Ciência da Computação">Ciência da Computação</option> 
                <option value="Gastronomia">Gastronomia</option> 
                <option value="Jogos Digitais">Jogos Digitais</option> 
                <option value="Ciências Econômicas">Ciências Econômicas</option> 
                <option value="Sistemas de Informação">Sistemas de Informação</option> 
                <option value="Gestão de Recursos Humanos">Gestão de Recursos Humanos</option> 
                <option value="Farmácia">Farmácia</option> 
                <option value="Administração">Administração</option> 
                <option value="História">História</option> 
                <option value="Educação Física">Educação Física</option> 
              </select>
            </div>
          </div>
          <div class="row">
            <div class="half-row spacing">
              <label>Como você quer estudar ?</label>
              <div class="row" style="position: relative;">
                <div style="position: relative; width: 120px;">
                  <label class="checkbox">
                    <input id="presencial" name="presencial" type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                    <label for="presencial" class="checkLugar">Presencial</label>  
                  </label>
                </div> 
                <div style="position: relative;">
                  <label class="checkbox">
                    <input id="distancia" name="distancia" type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                    <label for="distancia" class="checkLugar">A distância</label> 
                  </label>
                </div> 
              </div>
            </div>
            <div class="half-row">
              <label>ATÉ QUANTO PODE PAGAR?</label>
              <label class="valor">R$ {{valor}},00</label>
              <div class="row">
                <input class="inputRange" type="range" min="0" max="10" step="0.100" value="10" id="range" />
              </div>
            </div>
          </div>

          <div class="row just-between">
            <div>
              <label>Resultado:</label>
            </div>
            <!-- Ordenação, não será implementada por falta de tempo -->
            <div>
              <label for="ordenacao">Ordenar por</label>
              <select class="selectOrdenacao" name="ordenacao" id="ordenacao">
                <option value="1">São José dos Campos</option> 
              </select>
            </div>
          </div>
          <!-- Itens da gride de cursos filtrados -->
          <div v-for="(item, index) in listCursos" :key="item.campus.name+index" v-show="cidadeSelected == item.campus.city">
            <label class="row just-between divider" :for="item.campus.name+index">
              <div >
                <div class="checkbox checkImage ">
                  <input class="chkCursos" type="checkbox" :name="item.campus.name+index" :id="item.campus.name+index" :value="item" v-model="checkedCursos"  />
                  <span class="checkmark"></span>
                  <img class="cursoImgLogo" :src="item.university.logo_url" alt="Selecionar curso" />
                </div> 
              </div>
              <div class="text-blue text-center">
                <p><b>{{item.course.name}}</b></p>
                <span class="text-black" >{{item.course.level}}</span>
              </div>
              <div>
                <p> Bolsa de <span class="text-green">{{parseInt(item.discount_percentage)}}%</span> </p>
                <label class="text-green"> R$ <span>{{parseInt(item.price_with_discount)}}/mês</span> </label>
              </div>
            </label>
          </div>
        </form>
        <div class="modal-footer">
          <button @click="closeModal()" class="button btnModal cancelar" type="submit" value="Submit" >Cancelar</button> 
          <button @click="addListCursos()" :class="`button btnModal add  ${checkedCursos.length > 0 ? 'enableButton' : ''} `" type="submit" value="Submit">Adicionar bolsa(s)</button>
        </div>
      </div>
    </div>

 <!-- Início da componente Bolsas Favoritas -->
    <div class="itens-rows">
      <h1 class="text-black">Bolsas favoritas</h1>
      <h5>Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</h5>
    </div>
 <!-- Início dos cards -->
    <div class="row rowCard">
      <div class="card pointer" @click="openModal()">
        <br><br>
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa" />
        </div>
        <div>
          <h4> <b>Adicionar curso</b> </h4>
          <h5> Clique para adicionar bolsas de cursos do seu interesse </h5>
          <br><br>
        </div>
      </div>
      <!-- Lista de cards, o desabilitado ainda não foi implementado -->
      <div class="card" v-for="(item, index) in listCursosSelected" :key="item.campus.name+index">
        <div class="divImgLogo" >
          <img class="cursoImgLogo" :src="item.university.logo_url" alt="Logo da faculdade" />
        </div>
        <div class="dividerCard"></div>
        <div>
          <h5> <b> {{item.course.kind == "EaD" ? "ENSINO A DISTÂNCIA" : "PRESENCIAL"}} • {{item.course.shift}} </b> </h5>
          <h5> Início das aulas {{item.start_date}}</h5>
        </div>
        <div class="dividerCard"></div>
        <div>
          <h5> <b> Mensalidade com o Quero Bolsa: </b> </h5>
          <h5 class="underline"> {{ item.full_price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) }} </h5>
          <h4 class="text-inline" > <span class="text-green"> {{item.price_with_discount.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})}} </span> <h5 class="text-inline">/mês </h5></h4>
        </div>
        <div class="modal-footer">
          <button @click="removeItem(index)" class="button cancelar" type="submit" value="Submit" >Excluir</button> 
          <button @click="addListCursos()" :class="`button add  ${checkedCursos.length > 0 ? 'enableButton' : ''} `" type="submit" value="Submit">Ver oferta</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import json from "../db.json";
export default {
  name: "BolsasFavoritas",
  data() {
    return {
      valor: "10.0000",
      modalShow: false,
      listCursos: json,
      cidadeSelected: 'São José dos Campos',
      cursoSelected: '',

      listCidades:[],
      arrayCursos:[],

      checkedCursos: [],
      listCursosSelected: []
    };
  },
  mounted() {
    var self = this;
    var modal = document.getElementById("addBolsaModal");
    
    this.arrayCursos = [];

    modal.addEventListener("click", function (e) {
      if (e.target == this) {
        self.modalShow = false;
      }
    });
    const range = document.querySelector("#range");

    range.addEventListener("input", function () {
      self.valor = parseInt(range.value) < 1 ? range.value * 1000 : parseFloat(range.value).toFixed(3);
    });
  },

  methods: {
    openModal: function () {
       this.modalShow= true;
    },
    closeModal: function () {
      this.modalShow= false;
    },
    addListCursos: function () {
      if(this.checkedCursos.length > 0){
        this.listCursosSelected = this.checkedCursos;
        this.modalShow= false;
      }
    },
    removeItem: function (index) {
        this.checkedCursos.splice(index,1)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
/* Hide the browser's default checkbox */
input[type="checkbox" i] {
   opacity: 0; 
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 10px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: solid #18ACC4 1px;
  border-radius: 3px;
  cursor: pointer;
}
input:checked ~ .checkmark {
  background-color: #007a8d;
}
.checkmark:after {
  content: "";
  position: absolute; 
  display: none;
}
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  left: 5px;
  width: 3px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.checkbox {
  margin-top: 10px;
}
.checkbox > label {
  margin: 0 10px;
  font-weight: normal;
}
.checkImage {
  position: relative;
  width: 180px;
  display: flex; 
}

/* Create a custom for Modal */ 
.modal { 
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba( 31, 45, 48, 0.88 ); /* equivalente á #1F2D30 com 88% de opacidade. */
}
.modal-content {
  position: relative;
  background-color: #fbfbfb;
  opacity: 1;
  margin: auto;
  margin-bottom: 100px;
  border: 1px solid #888;
  padding: 1.8rem;
  width: 59%;
  min-width: 550px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.close {
  position: relative;
  color: white;
  float: right;
  font-size: 4rem !important;
  top: -65px;
  left: 35px;
  cursor: pointer;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
.modal-header {
  margin-bottom: 20px;
}
.cursoImgLogo {  
  width: 100%;
  max-height: 60px; 
  object-fit: contain;
  align-self: flex-start;
}
.divImgLogo {   
  height: 60px;  
}
.chkCursos {
  align-self: center; 
  height: 20px;
  margin-right: 20px;
}
/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
  

 /* Creat custom of Cards */
 .card {
  display: flex;
  flex-direction: column;
  padding: .8rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  min-width: 220px;
  max-width: 225px;
  height: 350px;
  margin: 10px;
  margin-bottom: 40px;
  text-align: center;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.dividerCard {
  border-top: 3px solid #eeefef;
  margin: 10px;
  width: 100%; 
  height: 3px;
}
.rowCard {
 margin: 20px -10px;  
}
 
form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
 
.spacing {
  margin-right: 2.5%;
}

label {
  font-weight: bold;
  font-size: 0.9rem;
}
.half-row > label {
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%; 
  overflow: hidden;
  text-overflow: ellipsis;
}
 
.valor {
  font-weight: normal;
}
.checkLugar {
  font-weight: normal;
  position: relative;
  top: 7px
}

select {
  border: 1px solid #cec5c5;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9rem;
  text-overflow: ellipsis
} 

.selectOrdenacao {
  border: none;
  padding: 0px;
  color: #007a8d;
  font-weight: bold;
}

.button {
  min-width: 105px;
  -webkit-border-radius: 5px;
  background-color: transparent;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: black;
  padding: 2%;
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 15px 0;
}
.btnModal {
  padding: 1rem 0.8rem;
}
.cancelar {
  color: #007a8d;
  border: solid #007a8d 1px;
  margin-right: 3%;
}
.add {
  color: #82898b;
  background-color: #cacdce;
  border: solid #b7bbbc 1px;
}
.enableButton {
  color: #1F2D30;
  background-color: #FDCB13;
  border: solid #DE9E1F 1px;
}

.button:hover {
  opacity: 0.8;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
  .rowCard {
    justify-content: center;
  }
  .card {
    width: 80%;
    min-width: 230px;
    max-width: 255px;
  }
  .modal-content {
    zoom: 78%;
  }
}
</style>
