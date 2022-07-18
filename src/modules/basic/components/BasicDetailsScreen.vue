<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <certification-progress></certification-progress>
    </template>
    <template v-slot:page-content>
      <div v-if="isPANVerified">
        <basic-header></basic-header>
        <div class="pan-details">
          <input-field
            nameOfField="panValue"
            typeOfField="text"
            labelOfField="PAN Number"
            :helperText="userName"
            :disabled="true"
            :value="panValue"
          ></input-field>
          <router-link :to="{ name: 'pan-verification' }" class="edit-link"
            >Edit</router-link
          >
        </div>

        <div>
          <all-basic-fields></all-basic-fields>
        </div>
      </div>
      <div v-else class="fallback-basicdetails-page">
        <h1>PAN is invalid or not verified yet !</h1>
        <router-link :to="{ name: 'pan-verification' }"
          ><button>Please Go Back to Pan-Verification Page</button></router-link
        >
      </div>
    </template>

    <template v-slot:footer>
      <button @click="onDetailsSubmit" class="global-fullwidth-button">
        Proceed
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
import AllBasicFields from "./AllBasicFields";

export default {
  name: "basicDetailsScreen",
  components: {
    BasicStretchedLayout,
    CertificationProgress,
    BasicHeader,
    InputField,
    AllBasicFields,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const userName = computed(() => {
      return store.state.basicStore.userName;
    });
    const panValue = computed(() => {
      return store.state.basicStore.panValue;
    });
    const isPANVerified = computed(() => store.state.basicStore.isPANVerified);

    const onDetailsSubmit = () => {
      store.dispatch("basicStore/onSetValueAction", {
        type: "isBasicDetailsCompleted",
        value: true,
      });
      router.push({
        name: "bank-details",
        params: {
          isPANVerified: isPANVerified.value,
        },
      });
    };

    return {
      panValue,
      isPANVerified,
      userName,
      onDetailsSubmit,
    };
  },
};
</script>
<style scoped>
.fallback-basicdetails-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 248, 249);
  width: -webkit-fill-available;
  padding: 3em 1em 3em 1em;
  border-radius: 10px;
  color: rgb(29, 22, 74);
  text-align: center;
  box-shadow: 0.2em 0.2em 0.2em 0.2em lightgray;
}

.pan-details {
  position: relative;
}

.edit-link {
  position: absolute;
  top: 50%;
  right: 2em;
  text-decoration: none;
  transform: translateY(-50%);
  color: rgb(0, 185, 241);
  font-style: normal;
  font-weight: bold;
}
</style>
