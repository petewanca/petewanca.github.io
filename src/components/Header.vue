<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/samples">Samples</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>