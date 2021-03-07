<template>
  <section class="banner-container-sm">
    <h4>{{ title }}</h4>
    <h5>{{ subtitle }}</h5>
  </section>
</template>

<script>
export default {
  name: "SmallBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.banner-container-sm {
  background-color: black;
  color: white;
  padding: 2rem;
  flex: 1 0 auto;
}
</style>
