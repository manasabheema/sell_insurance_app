<template>
  <div class="file-input-field-container">
    <h5>
      {{ labelOfField }}
      <span>{{ helperLabel ? `(${helperLabel})` : null }}</span>
    </h5>
    <div class="file-input-box">
      <label :for="nameOfField"
        ><img src="../../assets/upload.png" alt="" class="upload-icon" /><span
          >{{ fileName ?? helperText }}</span
        ></label
      ><input
        type="file"
        accept="acceptedFormats"
        :id="nameOfField"
        :name="nameOfField"
        @change="onInputChangeHandler"
      />
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  name: "fileInputField",
  props: {
    nameOfField: {
      type: String,
      required: true,
    },
    labelOfField: {
      type: String,
    },
    helperLabel: {
      type: String,
    },
    helperText: {
      type: String,
    },
    acceptedFormats: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore();

    let fileName = ref(null);

    const onInputChangeHandler = (e) => {
      fileName.value = e?.target.files[0]?.name || null;
      store.dispatch("basicStore/onSetValueAction", {
        type: props.nameOfField,
        value: e?.target?.value,
      });
    };

    return {
      fileName,
      onInputChangeHandler,
    };
  },
};
</script>
<style scoped>
h5 {
  margin: 0.7em auto;
}

h5 > span {
  color: dimgray;
  font-size: small;
  font-weight: lighter;
}

input[type="file"] {
  display: none;
}

label {
  display: flex;
  align-items: center;
}

label > span {
  margin: auto 1em;
}

.file-input-field-container {
  padding-top: 1em;
  margin-bottom: 2em;
}
.file-input-box {
  padding: 1.5em;
  color: rgb(0, 185, 241);
  border: 1.3px dashed gray;
  border-radius: 15px;
}

.upload-icon {
  width: 1.3em;
  padding: 0.2em;
  border: 1.5px solid rgb(0, 185, 241);
  border-radius: 50%;
}
.input {
  width: 1.2em;
  height: 1.2em;
  margin: 0.5em;
}
</style>
