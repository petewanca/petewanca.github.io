<template>
  <div>
    <div>
      <a href="https://www.facebook.com/petewancadrums/" target="_blank"
        ><BIconFacebook
      /></a>
      <a href="https://www.instagram.com/petewanca" target="_blank"
        ><BIconInstagram
      /></a>
      <a
        href="https://www.youtube.com/channel/UCCnzOSrTXbuYnooC73mmrLA"
        target="_blank"
        ><BIconYoutube
      /></a>
    </div>
    <div>Copyright © 2021 Pete Wanca - All Rights Reserved</div>
  </div>
</template>

<script>
import {
  BIconYoutube,
  BIconFacebook,
  BIconInstagram,
} from "bootstrap-icons-vue";

export default {
  name: "Footer",
  components: {
    BIconYoutube,
    BIconFacebook,
    BIconInstagram,
  },
};
</script>

<style>
</style>