<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <certification-progress></certification-progress>
    </template>
    <template v-slot:page-content>
      <div class="container">
        <h2 class="header">Select your bank account</h2>
        <div class="sub-header">
          All commissions related to sales made through your mobile number will
          be settled in this account
        </div>
        <div
          v-if="currentUserBankOptions?.length > 0"
          class="options-container"
        >
          <div
            v-for="(option, idx) in currentUserBankOptions"
            :key="idx"
            class="logo-and-labelinput"
          >
            <img :src="option.bankLogoURL" alt="" class="bank-logo" />
            <div class="content-hr">
              <div class="label-radioinput">
                <label
                  :for="option.accountNumber"
                  class="bank-details-container"
                >
                  <h4>{{ option?.bankName }}</h4>
                  <div class="bank-details">
                    <p>A/C Holder: {{ option.accountHolderName }}</p>
                    <p>A/C no: {{ option.accountNumber }}</p>
                    <p>IFSC: {{ option.IFSC }}</p>
                  </div>
                </label>
                <input
                  type="radio"
                  name="bank"
                  :id="option.accountNumber"
                  :value="option.bankName"
                  @change="onInputChangeHandler"
                  class="input-radio"
                  required
                />
              </div>
              <hr class="horizontal" />
            </div>
          </div>
        </div>
        <div v-else class="fallback-message">No bank found on your name !</div>
        <router-link :to="{ name: 'link-a-bank-account' }"
          ><h3 class="add-new-bank">+ Add New Bank Account</h3></router-link
        >
      </div>
    </template>

    <template v-slot:footer>
      <router-link
        :to="{ name: 'fallback-page' }"
        class="global-fullwidth-button"
      >
        <button :disabled="!isSelectedUserBank" class="global-fullwidth-button">
          Proceed
        </button></router-link
      >
    </template>
  </basic-stretched-layout>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";

import BasicStretchedLayout from "@/layouts/BasicStretchedLayout.vue";
import CertificationProgress from "@/components/CertificationProgress.vue";

export default {
  name: "selectBankAccount",
  components: {
    BasicStretchedLayout,
    CertificationProgress,
  },
  setup() {
    const store = useStore();

    const panValue = store.state.basicStore.panValue;
    const panCardsInformation = store.state.bankStore.panCardsInformation;

    const isSelectedUserBank = ref(false);

    const currentUserBankOptions = computed(
      () =>
        panCardsInformation.find(
          (cardDetails) => cardDetails?.panNumber === panValue
        )?.banks || []
    );

    const onInputChangeHandler = (e) => {
      store.dispatch("bankStore/onSetValueAction", {
        type: "selectedUserBank",
        value: e.target.value,
      });
      isSelectedUserBank.value = e.target.validity.valid;
    };

    return {
      currentUserBankOptions,
      isSelectedUserBank,
      onInputChangeHandler,
    };
  },
};
</script>
<style scoped>
.options-container {
  margin: 4em auto 2em auto;
  display: flex;
  flex-direction: column;
}
.input-radio {
  width: 1.8em;
  height: 1.8em;
  margin: 0.5em;
}
.logo-and-labelinput {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
}

.content-hr {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.horizontal {
  display: block;
  width: 100%;
}

.bank-logo {
  display: block;
  width: 2em;
  height: 2em;
  margin: 0 1em;
  border: 0.8px solid gray;
  padding: 0.4em;
  border-radius: 50%;
}

.label-radioinput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.bank-details-container {
  width: 100%;
}
.bank-details {
  display: flex;
  flex-direction: column;
  color: dimgray;
}

.bank-details p {
  margin: 0;
}

.fallback-message {
  margin: 3em auto;
  text-align: center;
  font-style: italic;
  color: dimgray;
}
.add-new-bank {
  color: rgb(0, 185, 241);
}
</style>
