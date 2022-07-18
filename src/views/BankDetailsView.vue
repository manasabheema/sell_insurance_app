<template scoped>
  <select-bank-account></select-bank-account>
</template>
<script>
import { useRoute } from "vue-router";

import SelectBankAccount from "@/modules/bank/components/SelectBankAccount.vue";

export default {
  name: "bankDetalsView",
  components: {
    SelectBankAccount,
  },
  setup() {
    const route = useRoute();

    const isPANVerified = route.params.isPANVerified;

    return {
      isPANVerified,
    };
  },
};
</script>
<style scoped></style>
