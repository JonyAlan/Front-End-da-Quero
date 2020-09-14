<template>
  <div class="container">
    <!-- The Modal -->
    <div v-show="modalShow" id="addBolsaModal" class="modal">
      <!-- Modal content -->
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
              <select name="cidade" id="cidade">
                <option value="1">São José dos Campos</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="half-row">
              <label for="cidade">Selecione sua cidade:</label>
              <select name="cidade" id="cidade">
                <option value="1">São José dos Campos</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="half-row spacing">
              <label>Como você quer estudar ?</label>
              <div class="row">
                <div class="checkbox">
                  <input type="checkbox" name="chkPresencial" id="chkPresencial" />
                  <label for="chkPresencial" id="chkPresencial-label">Presencial</label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" name="chkDistancia" id="chkDistancia" />
                  <label for="chkDistancia" id="chkDistancia-label">A distância</label>
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
            <div class="half-row spacing">
              <label>Resultado:</label>
            </div>
            <div>
              <label for="ordenacao">Ordenar por</label>
              <select class="selectOrdenacao" name="ordenacao" id="ordenacao">
                <option value="1">São José dos Campos</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div v-for="(item, index) in listCursos" :key="item.campus.name+index">
            <label class="row just-between divider" :for="item.campus.name+index">
              <div >
                <div class="checkbox checkImage">
                  <input class="chkCursos" type="checkbox" :name="item.campus.name+index" :id="item.campus.name+index" :value="item" v-model="checkedCursos"  />
                  <img class="cursoImgLogo" :src="item.university.logo_url" alt="Selecionar curso" />
                </div>
              </div>
              <div class="text-blue">
                <p><b>Administração</b></p>
                <span class="text-black" >Bacharelado</span>
              </div>
              <div>
                <p> Bolsa de <span class="text-green">{{parseInt(item.discount_percentage)}}%</span> </p>
                <label class="text-green"> R$ <span>{{parseInt(item.price_with_discount)}}/mês</span> </label>
              </div>
            </label>
          </div>
        </form>
        <div class="modal-footer">
          <button @click="closeModal()" class="button cancelar" type="submit" value="Submit" >Cancelar</button> 
          <button @click="addListCursos()" :class="`button add  ${checkedCursos.length > 0 ? 'enableButton' : ''} `" type="submit" value="Submit">Adicionar bolsa(s)</button>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="itens-rows">
        <h1 class="text-black">Bolsas favoritas</h1>
        <h5>Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</h5>
      </div>
    </div>
    <div class="row rowCard">

      <div class="card pointer" @click="openModal()">
        <br> <br>
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa" />
        </div>
        <div>
          <h4> <b>Adicionar curso</b> </h4>
          <h5> Clique para adicionar bolsas de cursos do seu interesse </h5>
          <br> <br>
        </div>
      </div>

      <div  class="card" v-for="(item, index) in listCursosSelected" :key="item.campus.name+index">
        <div  class="divImgLogo" >
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
          <h5 class="underline"> R$ {{String(item.full_price).replace('.',',')}} </h5>
          <h4 class="text-inline" > <span class="text-green"> R$ {{String(item.price_with_discount).replace('.',',')}} </span> <h5 class="text-inline">/mês </h5></h4>
        </div>
        <div class="modal-footer">
          <button @click="closeModal()" class="button cancelar" type="submit" value="Submit" >Excluir</button> 
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
      checkedCursos: [],
      listCursosSelected: []
    };
  },
  mounted() {
    var self = this;
    var modal = document.getElementById("addBolsaModal"); 

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputRange {
  flex: 1;
}

h1 {
  list-style-type: none;
  padding: 0;
  text-align: start;
  margin: 0.5em 0;
}
h4 {
  margin:  0;
}
h5 {
  font-weight: normal;
  font-size: .75rem;
}
span {
  line-height: 0rem;
}
.text-blue > span{
  font-size: .8rem;
}

.just-between {
  justify-content: space-between;
  align-items: center;
}
.divider {
  border-top: 3px solid #eeefef;
  margin-right: 10px;
  width: 100%;
  height: 80px;
  cursor: pointer;
}
.dividerCard {
  border-top: 3px solid #eeefef;
  margin: 10px;
  width: 100%; 
  height: 3px;
}
.underline{
  text-decoration: line-through;
} 
.text-inline{
  display: inline-block;
} 

.rowCard{
 margin: 10px -10px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: .8rem;
  align-items: center;
  justify-content: space-evenly;
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
 
form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.full-row {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.half-row {
  display: flex;
  width: 48%;
  flex-direction: column;
  margin-bottom: 20px;
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
.valor {
  font-weight: normal;
}

select {
  border: 1px solid #cec5c5;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9rem;
} 

.selectOrdenacao {
  border: none;
  padding: 0px;
  color: #007a8d;
  font-weight: bold;
}

.button {
  min-width: 90px;
  -webkit-border-radius: 5px;
  background-color: transparent;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: black;
  padding: 3%;
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 15px 0;
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
</style>
