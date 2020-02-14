<template>
  <v-app id="app">
    <Navbar v-if="this.$route.path != '/login'"/>
    <NavbarLog v-if="this.$route.path == '/login'"/>

    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

import Navbar from "@/components/Navbar";
import NavbarLog from "@/components/NavbarLog";
import Footer from "@/components/Footer";
export default {
  name: 'App',

  components: {
    Footer,
    Navbar,
    NavbarLog
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800&display=swap');
    #app {
        font-family: 'Open Sans', sans-serif;
    }
</style>
