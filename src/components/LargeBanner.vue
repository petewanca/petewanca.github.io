<template>
  <div class="banner-container" :style="{ backgroundImage: `url('${image}')` }">
    <div class="contents">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <Button v-if="button" :text="buttonData.text" :link="buttonData.link" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "LargeBanner",
  data() {
    return {
      buttonData: { ...this.button },
    };
  },
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    button: {
      type: Object,
      default: null,
    },
  },
  components: {
    Button,
  },
};
</script>

<style>
.banner-container {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.contents {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
}

h1 {
  font-size: 2.5rem;
  letter-spacing: 1px;
  line-height: 3rem;
  font-weight: bold;
  padding-bottom: 1rem;
}

h2 {
  font-weight: 300;
  line-height: 1.5em;
}
</style>
