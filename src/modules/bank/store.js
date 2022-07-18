import { panCardsInformation, allBanks, allStates } from "@/static";

export const bank = {
  namespaced: true,
  state() {
    return {
      panCardsInformation,
      allBanks,
      allStates,
      allSearchedBanks: [],
      allSearchedStates: [],
      selectedBank: null,
      bankSearchValue: null,
      selectedState: null,
      stateSearchValue: null,
      showBankList: true,
      showStateList: true,
    };
  },

  mutations: {
    setValue(state, { type, value }) {
      state[type] = value;
    },
    setSearchedBanks(state, value) {
      state.showBankList = true;
      state.allSearchedBanks =
        value == ""
          ? state.allBanks
          : state.allBanks.filter((bankName) =>
              bankName.toLowerCase().includes(value.toLowerCase())
            );
    },
    setSearchedStates(state, value) {
      state.showStateList = true;
      state.allSearchedStates =
        value == ""
          ? state.allStates
          : state.allStates.filter((stateName) =>
              stateName?.toLowerCase().includes(value?.toLowerCase())
            );
    },
  },
  actions: {
    onSetValueAction(ctx, payload) {
      ctx.commit("setValue", payload);
    },
    onSetSearchedBanksAction(ctx, value) {
      ctx.commit("setSearchedBanks", value);
    },
    onSetSearchedStatesAction(ctx, value) {
      ctx.commit("setSearchedStates", value);
    },
  },
};
