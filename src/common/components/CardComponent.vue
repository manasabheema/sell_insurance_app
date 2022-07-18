<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div class="card-content">
        <slot name="card-content"></slot>
      </div>
      <div class="card-points">
        <slot name="card-points"></slot>
      </div>
      <div class="horizontal-slide-items">
        <slot name="horizontal-slide-items"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 1em;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-content {
  text-align: start;
}

.card-points {
  display: flex;
  width: 100%;
  padding: 0.1em;
  flex: 1;
  align-items: center;
}

.card-points {
  display: flex;
  flex-direction: column;
}

.horizontal-slide-items {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
