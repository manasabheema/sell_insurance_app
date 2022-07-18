<template>
  <header>
    <img
      src="../assets/back-arrow.png"
      alt="GoBack"
      class="back-arrow global-back-arrow"
      @click="$router.go(-1)"
    />
    <img
      src="https://insurance-blog-cms.paytminsurance.co.in/logo_e79d0e811a.svg"
      alt=""
      class="paytm-logo"
    />
  </header>
  <div class="progress-bar">
    <div v-if="isBasicDetailsCompleted" class="tick-container">
      <img src="../assets/selected.png" alt="Now" class="tick-mark" />
      <p class="progress-description completed global-small-p-text">
        Basic&nbsp;Details
      </p>
    </div>
    <div v-else class="tick-container">
      <div class="tick-mark active-mark"></div>
      <p class="progress-description incomplete global-small-p-text">
        Basic&nbsp;Details
      </p>
    </div>
    <hr class="horizontal" />
    <div v-if="isBankDetailsCompleted" class="tick-container">
      <img src="../assets/selected.png" alt="Now" class="tick-mark" />
      <p class="progress-description completed global-small-p-text">
        Bank&nbsp;Details
      </p>
    </div>
    <div v-else class="tick-container">
      <div class="tick-mark active-mark"></div>
      <p class="progress-description incomplete global-small-p-text">
        Bank&nbsp;Details
      </p>
    </div>
    <hr class="horizontal" />
    <div v-if="isCertificationCompleted" class="tick-container">
      <img src="../assets/selected.png" alt="Now" class="tick-mark" />
      <p class="progress-description completed global-small-p-text">
        Certification
      </p>
    </div>
    <div v-else class="tick-container">
      <div class="tick-mark active-mark"></div>
      <p class="progress-description incomplete global-small-p-text">
        Certification
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "certificationProgress",
  setup() {
    const store = useStore();

    const isBasicDetailsCompleted = computed(
      () => store.state?.basicStore?.isBasicDetailsCompleted
    );
    const isBankDetailsCompleted = computed(
      () => store.state?.bankStore?.isBankDetailsCompleted
    );
    const isCertificationCompleted = computed(
      () => store.state?.questions?.isCertificationCompleted
    );

    return {
      isBasicDetailsCompleted,
      isBankDetailsCompleted,
      isCertificationCompleted,
    };
  },
};
</script>

<style scoped>
header {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 247, 251);
}
.back-arrow {
  position: absolute;
  left: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
}

.paytm-logo {
  width: 6rem;
}

.progress-bar {
  text-align: center;
  position: relative;
  top: -0.5rem;
  padding-bottom: 1em;
  margin-bottom: 1em;
}

.tick-container {
  position: relative;
  top: -0.2rem;
  display: inline-block;
}
.tick-mark {
  width: 0.8rem;
  position: relative;
}

.progress-description {
  position: absolute;
  left: -2rem;
  margin-top: -0.05rem;
  background-color: white;
}

.incomplete {
  font-style: italic;
  color: rgb(80, 80, 80);
}

.active-mark {
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  border: 0.05rem solid green;
  border-radius: 50%;
}

.horizontal {
  display: inline-block;
  width: 30vw;
}
</style>
