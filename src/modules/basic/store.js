import { panCardsInformation } from "@/static";

export const basic = {
  namespaced: true,
  state() {
    return {
      panCardsInformation,
      panValue: null,
      isValidPan: null,
      isPANVerified: null,
      isBasicDetailsCompleted: null,
      userName: null,
      gender: null,
      isGenderValid: null,
      dateOfBirth: null,
      isDateOfBirthValid: null,
      email: null,
      isEmailValid: null,
      userPhoto: null,
      educationalQualification: null,
      isEducationalQualificationValid: null,
      educationCertificate: null,
      GSTNumber: null,
      address: null,
      isAddressValid: null,
    };
  },

  mutations: {
    setValue(state, { type, value }) {
      // console.log(" type and Value : ", type, value);
      state[type] = value;
    },
    setIsValidPan(state, valid) {
      state.isValidPan = valid;
    },
    setPANValue(state, _value) {
      state.panValue = _value;
    },
  },
  actions: {
    onSetValueAction(ctx, payload) {
      ctx.commit("setValue", payload);
    },
    onSetIsValidPan(ctx, valid) {
      ctx.commit("setIsValidPan", valid);
    },
    onSetPANValueAction(ctx, _value) {
      ctx.commit("setPANValue", _value);
    },
  },
};
