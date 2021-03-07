<template>
  <section class="banner-container-sm">
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
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
  background-color: rgb(22, 22, 22);
  color: white;
  padding: 2rem;
  flex: 1 0 auto;
}

h4 {
  font-weight: 300;
}
</style>
