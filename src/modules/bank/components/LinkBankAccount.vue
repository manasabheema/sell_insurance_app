<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <certification-progress></certification-progress>
    </template>
    <template v-slot:page-content>
      <div class="container">
        <h2 class="header">Link bank account</h2>
        <div class="sub-header">
          All commissions related to sales made through your mobile number will
          be settled in this account
        </div>
        <div class="options-container">
          <div class="input-label">
            <input
              type="radio"
              name="bankAccountType"
              id="addBankManually"
              value="addBankManually"
              @change="onInputChangeHandler"
              class="input-radio"
            />
            <label for="addBankManually" class="label-content">
              <h4 class="bank-account-type">Add bank account manually</h4>
              <hr
            /></label>
          </div>
          <div class="input-label">
            <input
              type="radio"
              name="bankAccountType"
              id="paytmPaymentsBank"
              value="paytmPaymentsBank"
              @change="onInputChangeHandler"
              class="input-radio"
            />
            <label for="paytmPaymentsBank" class="label-content">
              <h4 class="bank-account-type">
                Open a Paytm Payments Bank Account
              </h4>
              <hr
            /></label>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <button
        class="global-fullwidth-button"
        @click="onDetailsSubmit"
        :disabled="!linkAccountTypeSelected"
      >
        Proceed
      </button>
    </template>
  </basic-stretched-layout>
</template>
<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import BasicStretchedLayout from "@/layouts/BasicStretchedLayout.vue";
import CertificationProgress from "@/components/CertificationProgress.vue";

export default {
  name: "linkBankAccount",
  components: {
    BasicStretchedLayout,
    CertificationProgress,
  },
  setup() {
    const router = useRouter();

    let linkAccountTypeSelected = ref(null);

    const onInputChangeHandler = (e) => {
      linkAccountTypeSelected.value = e.target.value;
    };

    const onDetailsSubmit = () => {
      if (linkAccountTypeSelected.value == "addBankManually") {
        router.push({ name: "search-bank" });
      } else {
        router.push({ name: "fallback-page" });
      }
    };

    return {
      linkAccountTypeSelected,
      onInputChangeHandler,
      onDetailsSubmit,
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
  width: 1.7em;
  height: 1.7em;
  margin: 0 1em;
}
.input-label {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  margin: 1em 0;
}
.label-content {
  width: 100%;
}

.bank-account-type {
  margin-top: 0;
  margin-bottom: 1em;
}
</style>
