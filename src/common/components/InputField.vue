<template>
  <div class="form-group">
    <input
      :value="value"
      :type="typeOfField"
      :name="nameOfField"
      :id="nameOfField"
      placeholder=" "
      :pattern="regexPattern"
      aria-describedby="helper-text"
      :required="required"
      :disabled="disabled"
      @input="onInputChangeHandler"
      :max="maxDateRange"
      class="form-control"
    />
    <label :for="nameOfField" class="form-control-placeholder"
      >{{ labelOfField }}
    </label>
    <img src="../../assets/invalid.png" alt="" class="invalid-icon" />
    <p id="helper-text" class="helper-text">{{ helperText }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "inputField",
  props: {
    nameOfField: {
      type: String,
      required: true,
    },
    typeOfField: {
      type: String,
      required: true,
      default: "text",
    },
    labelOfField: {
      type: String,
    },
    value: {
      type: String,
    },
    helperText: {
      type: String,
    },
    required: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    regexPattern: {
      type: String,
    },
    errorMessageOfField: {
      type: String,
    },
    maxDateRange: {
      type: String,
    },
  },

  setup(props) {
    const store = useStore();

    const onInputChangeHandler = (e) => {
      store.dispatch("basicStore/onSetValueAction", {
        type: props.nameOfField,
        value: e.target.value,
      });
      if (props?.nameOfField == "panValue") {
        store.dispatch("basicStore/onSetValueAction", {
          type: "isValidPan",
          value: e.target.validity.valid,
        });
      }
    };

    return {
      onInputChangeHandler,
    };
  },
};
</script>
<style scoped>
.form-group {
  position: relative;
  margin-bottom: 3em;
  margin-top: 1em;
}
input {
  width: -webkit-fill-available;
  padding: 0.7em;
  border: 0.09em solid grey;
  border-radius: 10px;
  background-color: inherit;
  color: rgb(0, 27, 57);
  font-size: large;
}
input + .form-control-placeholder {
  position: absolute;
  display: block;
  pointer-events: none;
  color: dimgray;
  font-size: small;
  top: 0;
  transition: 0.2s ease all;
  transform: translateY(-50%);
  margin-left: 1em;
  padding: 0.2em;
  background: whitesmoke;
}

.form-control:focus + .form-control-placeholder {
  position: absolute;
  display: block;
  pointer-events: none;
  color: dimgray;
  font-size: small;
  top: 0;
  transition: 0.2s ease all;
  transform: translateY(-50%);
  margin-left: 1em;
  padding: 0.2em;
  background: whitesmoke;
}
.form-control:focus-visible {
  outline-color: rgba(0, 185, 241, 0.5);
}
.form-control:focus-visible + .form-control-placeholder {
  color: rgba(0, 185, 241, 0.5);
}

input:placeholder-shown + .form-control-placeholder {
  top: 50%;
  font-weight: bold;
  font-size: medium;
}
.helper-text {
  position: absolute;
  padding-left: 1em;
  font-size: small;
  color: dimgray;
}
.invalid-icon {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6em;
  right: 1em;
}

input:disabled {
  color: dimgray;
}

input:invalid:not(:placeholder-shown) {
  border-color: red;
}
input:not(:focus):not(:placeholder-shown):invalid ~ .invalid-icon {
  display: block;
}
input:not(:focus):not(:placeholder-shown):invalid ~ .helper-text {
  color: red;
}
</style>
