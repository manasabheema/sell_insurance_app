<template>
  <div class="fallback-bg">
    <h2>Your details are saved !</h2>
    <h3>We will get back to you soon !</h3>
    <router-link :to="{ name: 'home' }"
      ><button>Go Back to the Home page</button></router-link
    >
  </div>
</template>

<style scoped>
h2 {
  color: green;
  margin: 0 0 1em 0 !important;
  padding: 1em;
}
h2 {
  color: rgb(29, 49, 41);
}

.fallback-bg {
  background-color: rgb(136, 212, 212);
  height: 100vh;
  margin: auto;
  text-align: center;
}
</style>
