<template>
  <div class="container">
    <div class="col">
      <div class="itens-rows">
        <h1 class="text-black">Bolsas favoritas</h1>
        <h5>Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.</h5>
      </div>
    </div>
    <div class="col">
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
}
 
</style>
