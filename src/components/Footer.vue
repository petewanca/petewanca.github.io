<template>
  <div class="footer">
    <div>
      <a
        class="footer-icon"
        href="https://www.facebook.com/petewancadrums/"
        target="_blank"
        ><BIconFacebook fill="black"
      /></a>
      <a
        class="footer-icon"
        href="https://www.instagram.com/petewanca"
        target="_blank"
        ><BIconInstagram fill="black"
      /></a>
      <a
        class="footer-icon"
        href="https://www.youtube.com/channel/UCCnzOSrTXbuYnooC73mmrLA"
        target="_blank"
        ><BIconYoutube fill="black"
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
.footer {
  background-color: #161616;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-icon {
}
</style>
