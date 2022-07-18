<template scoped>
  <search-bank-name></search-bank-name>
</template>
<script>
import { useRoute } from "vue-router";

import SearchBankName from "@/modules/bank/components/SearchBankName.vue";

export default {
  name: "searchBank",
  components: {
    SearchBankName,
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
