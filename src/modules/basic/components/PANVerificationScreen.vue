<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <certification-progress></certification-progress>
    </template>
    <template v-slot:page-content>
      <basic-header></basic-header>
      <input-field
        nameOfField="panValue"
        typeOfField="text"
        labelOfField="PAN Number"
        :helperText="PANHelperText"
        regexPattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
        required="true"
        validFieldType="isValidPan"
      ></input-field>
    </template>
    <template v-slot:footer>
      <button
        class="global-fullwidth-button"
        @click="onVerifyPAN"
        :disabled="!isValidPan"
      >
        Verify PAN Number
      </button>
    </template>
  </basic-stretched-layout>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

import BasicStretchedLayout from "@/layouts/BasicStretchedLayout.vue";
import CertificationProgress from "@/components/CertificationProgress.vue";
import BasicHeader from "@/modules/basic/components/BasicHeader.vue";
import InputField from "@/common/components/InputField.vue";

export default {
  name: "panVerificationScreen",
  components: {
    BasicStretchedLayout,
    CertificationProgress,
    BasicHeader,
    InputField,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const PANHelperText = "Enter Valid PAN Number";
    const panCardsInformation = store.state.basicStore.panCardsInformation;

    const isValidPan = computed(() => store.state.basicStore.isValidPan);

    const onVerifyPAN = () => {
      const matchedPanCardDetails = panCardsInformation.find(
        (panCardDetails) =>
          panCardDetails?.panNumber === store.state.basicStore.panValue
      );
      if (matchedPanCardDetails) {
        store.dispatch("basicStore/onSetValueAction", {
          type: "isPANVerified",
          value: true,
        });
        store.dispatch("basicStore/onSetValueAction", {
          type: "userName",
          value: matchedPanCardDetails?.holderName || "",
        });
      }
      router.push({ name: "basic-details" });
    };

    return {
      PANHelperText,
      isValidPan,
      onVerifyPAN,
    };
  },
};
</script>
<style scoped></style>
