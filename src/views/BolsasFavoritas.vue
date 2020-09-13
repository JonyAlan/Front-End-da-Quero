<template>
  <div class="container">
    <div class="col">
      <div class="itens-rows">
        <h1 class="text-black">Bolsas favoritas</h1>
        <h5>Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</h5>
      </div>
    </div>
    <div class="row">
      <div class="card pointer">
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa"  />
        </div>
        <div>
          <h4>
            <b>Adicionar bolsa</b>
          </h4>
          <span>Clique para adicionar bolsas de seu interesse</span>
        </div> 
      </div>

      <div class="card pointer">
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa"  />
        </div>
        <div>
          <h4>
            <b>Adicionar bolsa</b>
          </h4>
          <span>Clique para adicionar bolsas de seu interesse</span>
        </div> 
      </div>

      <div class="card pointer">
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa"  />
        </div>
        <div>
          <h4>
            <b>Adicionar bolsa</b>
          </h4>
          <span>Clique para adicionar bolsas de seu interesse</span>
        </div> 
      </div>

      <div class="card pointer">
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa"  />
        </div>
        <div>
          <h4>
            <b>Adicionar bolsa</b>
          </h4>
          <span>Clique para adicionar bolsas de seu interesse</span>
        </div> 
      </div>

      <div class="card pointer">
        <div>
          <img style="height: 55px; width: 55px;" src="../../public/imagens/icons/add-blue.png" alt="Adicionar bolsa"  />
        </div>
        <div>
          <h4>
            <b>Adicionar bolsa</b>
          </h4>
          <span>Clique para adicionar bolsas de seu interesse</span>
        </div> 
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "BolsasFavoritas",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  list-style-type: none;
  padding: 0;
  text-align: start;
  margin: 0.5em 0 0 0;
}
h4{
  margin: 2em 0 0 0;
}
span{
  line-height: 0rem;
  font-size: .7rem;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px -10px;  
}
.card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  min-width: 150px;
  max-width: 160px;
  height: 300px;
  margin: 10px; 
  margin-bottom: 40px;
  text-align: center; 
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
 
</style>
