<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: 'App',
  components: {Footer, Nav},
  data: () => ({
    //
  }),
});
</script>
