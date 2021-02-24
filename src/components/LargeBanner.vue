<template>
  <div
    class="banner-container"
    :style="{ backgroundImage: `url('${image}')` }"
  ></div>
</template>

<script>
export default {
  name: "LargeBanner",
  props: {
    image: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style>
.banner-container {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
