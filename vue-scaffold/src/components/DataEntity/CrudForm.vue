<script setup>
const props = defineProps({
  crudRecord: Object,
  dataEntityTemplate: Object
});
</script>

<template>
  <template v-for="eachField in Object.keys(crudRecord).filter(e => e !== 'loopKey')" :key="eachField">
    <label :for="eachField">{{ eachField }}:</label>&nbsp;
    <input :id="eachField" v-model="crudRecord[eachField]" :placeholder="dataEntityTemplate?.[eachField]?.inputHint" />
    <br />
  </template>
  <br />
</template>
