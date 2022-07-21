<template>
  <div class="container">
    <label :for="nameOfField"
      ><h5>{{ labelOfField }}</h5>
      <h6>{{ helperLabel }}</h6></label
    >
    <div class="select">
      <select
        :id="nameOfField"
        :name="nameOfField"
        @change="onInputChangeHandler"
        :required="required"
      >
        <option value="" selected disabled hidden>
          {{ defaultOptionLabel }}
        </option>
        <option
          v-for="(option, idx) in options"
          :key="idx"
          :value="option"
          class="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "dropDown",
  props: {
    nameOfField: {
      type: String,
      required: true,
    },
    validFieldType: {
      type: String,
    },
    labelOfField: {
      type: String,
    },
    helperLabel: {
      type: String,
    },
    options: {
      type: Array,
    },
    defaultOptionLabel: {
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
h6 {
  color: gray;
  font-weight: lighter;
}

select {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 0.7em;
  width: 100%;
  border: 0.09em solid grey;
  border-radius: 10px;
  font-size: large;
  background-color: inherit;
}

select option:checked {
  display: none;
}

select:invalid {
  color: gray;
}
select:invalid option {
  color: black;
}

select option {
  font-size: small;
}

.container {
  width: 100%;
}
</style>
