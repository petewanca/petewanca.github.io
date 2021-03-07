<template>
  <section class="social-container">
    <h3 class="mb-3">{{ title.toUpperCase() }}</h3>
    <hr />
    <div class="gx-3 content-container">
      <div class="row gy-3">
        <img
          v-for="item in apiResult"
          :key="item.id"
          class="col-6 col-md-4"
          :src="item"
        />
      </div>
    </div>
    <div class="social-link">
      <a>Follow me on {{ title }} ></a>
    </div>
  </section>
</template>

<script>
import getInstagramFeed from "../utils/getInstagramFeed";

export default {
  name: "Social Media",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apiResult: [],
    };
  },
  created() {
    this.apiResult = getInstagramFeed();
  },
};
</script>

<style>
.social-container {
  background-color: black;
  padding: 2rem;
}

.social-container > hr {
  border-bottom: solid 1px rgb(119, 119, 119);
  opacity: 1;
}

.social-link {
  margin: 3rem 0 1rem 0;
  text-align: center;
  color: rgb(222, 216, 174);
}
</style>
