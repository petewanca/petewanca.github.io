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
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: inherit;
}

a:active,
a:focus {
  color: white;
}
</style>
