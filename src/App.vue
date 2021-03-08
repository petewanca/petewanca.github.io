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
        Footer
    }
};
</script>

<style>
@import url("./assets/css/fonts.css");

#app {
    font-family: Lato, Helvetica, Arial, sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
}

a {
    text-decoration: none;
    color: inherit;
}

a:active,
a:hover,
a:focus {
    color: white;
}
</style>
