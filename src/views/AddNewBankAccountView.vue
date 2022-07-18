<template scoped>
  <link-bank-account></link-bank-account>
</template>
<script>
import { useRoute } from "vue-router";

import LinkBankAccount from "@/modules/bank/components/LinkBankAccount.vue";

export default {
  name: "bankDetalsView",
  components: {
    LinkBankAccount,
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
