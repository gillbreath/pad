<script setup>
const props = defineProps({
  fieldName: String,
  inputValue: String,
  dataEntityTemplate: Object
});
const myModel = defineModel();
myModel.value = props.inputValue;
</script>

<template>
  <input
    :id="fieldName"
    :list="dataEntityTemplate?.[fieldName]?.dataListSuggestions ? fieldName + 'DataList' : ''"
    :placeholder="dataEntityTemplate?.[fieldName]?.inputHint || fieldName"
    :type="dataEntityTemplate?.[fieldName]?.dataType || 'text'"
    v-model="myModel"
  />
  <datalist
    v-if="dataEntityTemplate?.[fieldName]?.dataListSuggestions"
    :id="fieldName + 'DataList'"
  >
    <template
      v-for="eachOption in dataEntityTemplate?.[fieldName]?.dataListSuggestions"
      :key="eachOption"
    >
      <option :value="eachOption" />
    </template>
  </datalist>
</template>
