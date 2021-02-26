<template>
  <div class="footer">
    <div class="mb-3">
      <a href="https://www.facebook.com/petewancadrums/" target="_blank"
        ><i class="bi bi-facebook"></i
      ></a>
      <a href="https://www.instagram.com/petewanca" target="_blank"
        ><i class="bi bi-instagram"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCCnzOSrTXbuYnooC73mmrLA"
        target="_blank"
        ><i class="bi bi-youtube"></i
      ></a>
    </div>
    <div class="footer-text">
      Copyright © 2021 Pete Wanca - All Rights Reserved
    </div>
    <div class="footer-line"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

.bi {
  margin: 1rem;
  font-size: 1.2rem;
}

.footer-text {
  font-size: 0.8rem;
  color: grey;
}

.footer-line {
  width: 50px;
  border-bottom: 1px solid #333;
  padding-top: 1rem;
}
</style>
