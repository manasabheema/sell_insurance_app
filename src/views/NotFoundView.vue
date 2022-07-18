<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <router-link :to="{ name: 'home' }"
      ><button>Go Back to Home Page</button></router-link
    >
  </div>
</template>

<style scoped>
h1 {
  color: crimson;
  margin: 0 0 1em 0 !important;
  padding: 1em;
}
h2 {
  color: rgb(29, 49, 41);
}

.not-found {
  background-color: rgb(136, 212, 212);
  height: 100vh;
  margin: auto;
  text-align: center;
}
</style>
