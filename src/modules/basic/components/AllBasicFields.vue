<template>
  <div class="all-fields-container">
    <radio-input-field
      nameOfField="gender"
      labelOfField="Gender"
      optionsLayout="row"
      :options="['Male', 'Female', 'Other']"
    ></radio-input-field>
    <input-field
      nameOfField="dateOfBirth"
      typeOfField="date"
      labelOfField="Date of Birth (DD/MM/YYYY)"
      helperText="Enter Date of Birth as per valid KYC Document"
      maxDateRange="2022-07-15"
    ></input-field>
    <input-field
      nameOfField="email"
      typeOfField="email"
      labelOfField="Enter email ID"
      helperText="We will send all Insurance related documents on this email address, enter valid email."
    ></input-field>
    <file-input-field
      nameOfField="userPhoto"
      labelOfField="Upload Photo"
      helperLabel="Size limit: 1MB"
      acceptedFormats="image/png, image/jpeg"
      helperText="Upload"
    ></file-input-field>
    <dropdown-field
      nameOfField="educationalQualification"
      labelOfField="Educational Details"
      helperLabel="Description of which marksheet to upload"
      :options="['10th pass', 'Intermediate', 'Graduation']"
      defaultOptionLabel="Select educational qualification"
    ></dropdown-field>
    <file-input-field
      nameOfField="educationCertificate"
      helperText="Upload marksheet or degree certificate"
    ></file-input-field>

    <input-field
      nameOfField="GSTNumber"
      typeOfField="text"
      labelOfField="Enter GST number (Optional)"
      helperText="Claim GST inputs against your earnings"
    ></input-field>
    <select-address></select-address>
  </div>
</template>
<script>
import RadioInputField from "@/common/components/RadioInputField.vue";
import InputField from "@/common/components/InputField.vue";
import FileInputField from "@/common/components/FileInputField.vue";
import DropdownField from "@/common/components/DropdownField.vue";
import SelectAddress from "./SelectAddress.vue";

export default {
  components: {
    RadioInputField,
    InputField,
    FileInputField,
    DropdownField,
    SelectAddress,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
.all-fields-container {
  margin-top: 1em;
}
</style>
