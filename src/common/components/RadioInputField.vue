<template>
  <div class="radio-field-container">
    <h5>{{ labelOfField }}</h5>
    <div :class="[optionsLayout]">
      <div v-for="(option, idx) in options" :key="idx" class="radio-and-label">
        <input
          type="radio"
          :id="option"
          :name="nameOfField"
          :value="option"
          @change="onInputChangeHandler"
          class="input-radio"
          :required="required"
        />
        <label :for="option" class="label-value">{{ option }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  name: "radioInputField",
  props: {
    nameOfField: {
      type: String,
      required: true,
    },
    labelOfField: {
      type: String,
    },
    validFieldType: {
      type: String,
    },
    options: {
      type: Array,
    },
    optionsLayout: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const onInputChangeHandler = (e) => {
      store.dispatch("basicStore/onSetValueAction", {
        type: props.nameOfField,
        value: e.target.value,
      });
      store.dispatch("basicStore/onSetValueAction", {
        type: props.validFieldType,
        value: e.target.validity.valid,
      });
    };

    return {
      onInputChangeHandler,
    };
  },
};
</script>
<style scoped>
h5 {
  margin: 0.7em auto;
}

.radio-field-container {
  margin-top: 2em;
  margin-bottom: 2em;
}
.input-radio {
  width: 1.2em;
  height: 1.2em;
  margin: 0.5em;
}

.row {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
}

.column {
  display: flex;
  flex-direction: column;
}
.radio-and-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
}
.label-value {
  font-weight: bold;
}
</style>
