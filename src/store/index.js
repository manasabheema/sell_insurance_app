import { createStore } from "vuex";
import { basic as basicStore } from "@/modules/basic/store.js";
import { bank as bankStore } from "@/modules/bank/store.js";

export const store = createStore({
  modules: {
    basicStore,
    bankStore,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
