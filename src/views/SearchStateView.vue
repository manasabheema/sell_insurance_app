<template scoped>
  <search-state-name></search-state-name>
</template>
<script>
import { useRoute } from "vue-router";

import SearchStateName from "@/modules/bank/components/SearchStateName.vue";

export default {
  name: "searchBank",
  components: {
    SearchStateName,
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
