<template>
  <div id="app">
    <!-- START HEADER -->
    <header-main></header-main>

      <!-- START CONTENT -->
      <section id="content">
        <router-view />
      </section>
      <!-- END CONTENT -->

    <!-- START FOOTER -->
    <footer-main></footer-main>
    <!-- END FOOTER -->
  </div>
</template>

<script>

import HeaderMain from "@/components/HeaderMain.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
