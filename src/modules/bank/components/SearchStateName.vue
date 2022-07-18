<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <header>
        <img
          src="../../../assets/back-arrow.png"
          alt="GoBack"
          class="back-arrow global-back-arrow"
          @click="$router.go(-1)"
        />
      </header>
    </template>
    <template v-slot:page-content>
      <div class="container">
        <h2>Select State</h2>
        <h4 class="sub-header">{{ selectedBank }}</h4>
        <div>
          <div class="input-box">
            <input
              type="text"
              name="searchState"
              :value="stateSearchValue"
              placeholder="Search bank"
              @input="onSearchHandler"
              @focus="onFocusHandler"
            /><i class="fa fa-search"></i>
          </div>
          <div v-if="showStateList" class="list-container">
            <h4
              v-for="(stateName, idx) in stateNamesToShow"
              :key="idx"
              @click="onStateSelect(stateName)"
            >
              {{ stateName }}
              <hr />
            </h4>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <button
        class="global-fullwidth-button"
        @click="onDetailsSubmit"
        :disabled="!selectedState"
      >
        Proceed
      </button>
    </template>
  </basic-stretched-layout>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

import BasicStretchedLayout from "@/layouts/BasicStretchedLayout.vue";

export default {
  name: "searchStateName",
  components: {
    BasicStretchedLayout,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const showStateList = computed(() => {
      return store.state.bankStore?.showStateList;
    });
    const stateNamesToShow = computed(() => {
      return store.state.bankStore?.allSearchedStates;
    });
    const stateSearchValue = computed(
      () => store.state.bankStore?.stateSearchValue
    );
    const selectedState = computed(() => store.state.bankStore?.selectedState);
    const selectedBank = computed(() => store.state.bankStore?.selectedBank);

    onBeforeMount(() => {
      store.dispatch("bankStore/onSetValueAction", {
        type: "allSearchedStates",
        value: store.state.bankStore?.allStates,
      });
    });

    const onSearchHandler = (e) => {
      store.dispatch("bankStore/onSetSearchedStatesAction", e.target.value);
      store.dispatch("bankStore/onSetValueAction", {
        type: "stateSearchValue",
        value: e.target.value,
      });
    };

    const onStateSelect = (selectedState) => {
      store.dispatch("bankStore/onSetValueAction", {
        type: "showStateList",
        value: false,
      });
      store.dispatch("bankStore/onSetValueAction", {
        type: "selectedState",
        value: selectedState,
      });
      store.dispatch("bankStore/onSetValueAction", {
        type: "stateSearchValue",
        value: selectedState,
      });
    };

    const onDetailsSubmit = () => {
      router.push({ name: "fallback-page" });
    };

    return {
      showStateList,
      stateNamesToShow,
      stateSearchValue,
      selectedState,
      selectedBank,
      onStateSelect,
      onSearchHandler,
      onDetailsSubmit,
    };
  },
};
</script>

<style scoped>
header {
  position: relative;
  padding: 1em 0 0 0.5em;
  display: flex;
  justify-content: flex-start;
}
.container {
  width: 100%;
}

.sub-header {
  color: dimgray;
  font-weight: normal;
}

.input-box {
  position: relative;
}
input {
  width: -webkit-fill-available;
  padding: 1em;
  padding-left: 4em;
  margin: 1em 0;
  border: none;
  border-radius: 10px;
  background-color: rgb(238, 247, 251);
}

i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1em;
}

.list-container {
  max-width: -webkit-fill-available;
  max-height: 65vh;
  position: relative;
  overflow-y: scroll;
  width: inherit;
  border-radius: 5px;
  padding: 1em;
  box-shadow: 0.2em 0.2em 0.2em 0.2em lightgrey;
}

.list-container h4 {
  padding-top: 1.5em;
  font-weight: normal;
  font-size: 1em;
}

h4 hr {
  margin-top: 1.5em;
}
</style>
