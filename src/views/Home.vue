<template>
  <div class="home">
    <LargeBanner image="./images/drum-kit.jpeg" color="green" />
  </div>
</template>

<script>
// @ is an alias to /src
import LargeBanner from "@/components/LargeBanner.vue";

export default {
  name: "Home",
  components: {
    LargeBanner,
  },
};
</script>
