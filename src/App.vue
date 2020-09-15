<template>
  <div id="app">
    <!-- START HEADER -->
    <header-main></header-main>
    <!-- END HEADER -->

    <!-- START HISTORY MENU -->
    <history-menu></history-menu>
    <!-- END HISTORY MENU -->

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
import HistoryMenu from "@/components/HistoryMenu.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    HistoryMenu,
    FooterMain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
   position: relative;
   min-height: calc(100vh - 168px);
}
</style>
