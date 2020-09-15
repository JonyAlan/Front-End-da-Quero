<template>
  <div class=" container text-blue"> 
    <h5 class="history-menu text-inline">Home  /  Minha conta  / <a href="/#/bolsasFavoritas">Bolsas favoritas</a></h5>
  </div>
</template>

<script>
/*eslint-env jquery*/
 
export default {
  name: "HistoryMenu",
  props: {
    msg: String,
  },
  data() {
    return {
      teste: '' 
    };
  },
 
};
</script>
<style>
.history-menu {
  font-weight: bold;
  font-size: .8rem;
  margin-top: 20px; 
}
</style>