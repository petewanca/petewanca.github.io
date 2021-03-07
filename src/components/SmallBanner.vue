<template>
  <section class="banner-container-sm">
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
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

.banner-container-sm > p {
  font-weight: 300;
  font-size: 1.1rem;
  color: rgb(164, 164, 164);
  margin: 0;
}
</style>
