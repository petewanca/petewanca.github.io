<template>
  <div class="home">
    <LargeBanner
      title="BRING YOUR MUSIC TO LIFE"
      subtitle="I provide remote drum tracking services to artists around the world."
      image="./images/drum-kit.jpeg"
      color="green"
    />
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
