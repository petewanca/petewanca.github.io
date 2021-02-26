<template>
  <div class="custom-button">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.custom-button {
  background-color: rgb(222, 216, 174);
  padding: 1rem 2rem;
  color: black;
  letter-spacing: 2px;
  box-shadow: 5px 5px 0 rgb(255 255 255 / 20%);
  width: fit-content;
  font-weight: bold;
  margin-top: 1rem;
}

.custom-button > p {
  margin: 0;
}
</style>
