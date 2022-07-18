<template>
  <div class="basic-page">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="sub-header">
      <slot name="sub-header"></slot>
    </div>
    <div class="page-body">
      <div class="page-content">
        <slot name="page-content"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicStretchedLayout",
};
</script>

<style scoped>
.basic-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}

.header {
  position: sticky;
  margin-bottom: 1em;
}

.sub-header {
  margin-bottom: 1em;
}

.page-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0.6rem;
}

@media only screen and (min-width: 480px) {
  .page-body {
    padding: 0 20vw;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
}
</style>
