<template>
  <div class="container">
    <h5>Communication Address</h5>
    <div class="options-container">
      <div v-for="(option, idx) in options" :key="idx" class="radio-and-label">
        <input
          type="radio"
          name="address"
          :id="option"
          :value="option"
          @change="onInputChangeHandler"
          class="input-radio"
        />
        <label :for="option">
          <p class="username-header">{{ holderName }}</p>
          <p class="address">{{ option }}</p>
          <hr
        /></label>
      </div>
      <router-link :to="{ name: 'fallback-page' }" class="add-newaddress"
        >+ Add New Address</router-link
      >
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

import { panCardsInformation } from "../../../static";

export default {
  name: "selectAddress",
  setup() {
    const store = useStore();

    const holderName = computed(() => store.state.basicStore?.userName);
    const options = computed(
      () =>
        panCardsInformation.find((cardDetails) => {
          return holderName.value === cardDetails?.holderName;
        })?.addresses || []
    );

    const onInputChangeHandler = (e) => {
      store.dispatch("basicStore/onSetValueAction", {
        type: "address",
        value: e.target.value,
      });
      store.dispatch("basicStore/onSetValueAction", {
        type: "isAddressValid",
        value: e.target.validity.valid,
      });
    };

    return {
      holderName,
      options,
      onInputChangeHandler,
    };
  },
};
</script>
<style scoped>
h5 {
  margin: 1em auto 2em auto;
}

.container {
  margin-top: 3em;
  margin-bottom: 2em;
}

.options-container {
  display: flex;
  flex-direction: column;
}
.input-radio {
  width: 1.4em;
  height: 1.4em;
  margin: 0.5em;
}
.radio-and-label {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
}

label {
  padding-left: 1em;
  width: 100%;
}

.username-header {
  font-style: italic;
  font-weight: lighter;
  margin-bottom: 1em;
}

.address {
  color: dimgray;
}

.add-newaddress {
  padding-left: 3em;
  margin-top: 1em;
  color: rgb(0, 185, 241);
  font-style: italic;
}
</style>
