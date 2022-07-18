<template>
  <header class="basic-header-container">
    <div class="basic-header">
      <h3 class="">Earn commissions upto 10% on Insurance</h3>
      <img src="../../../assets/thumbsup.png" alt="" class="thumbsup" />
    </div>
    <p class="test-intro-subheading">Enter your details to get started !</p>
    <img src="../../../assets/cloud.png" alt="" class="cloud-img" />
  </header>
</template>

<script>
export default {
  name: "basicHeader",
};
</script>

<style scoped>
.basic-header-container {
  position: relative;
  margin: 0 auto 3em auto;
}
.basic-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.thumbsup {
  width: 4rem;
  display: block;
}

.cloud-img {
  width: 100%;
  position: absolute;
  top: 4rem;
  right: -0.6rem;
  z-index: -1;
}
</style>
