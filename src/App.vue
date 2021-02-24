<template>
  <Header />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("./assets/css/fonts.css");

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
