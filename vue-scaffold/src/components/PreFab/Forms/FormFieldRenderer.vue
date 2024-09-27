<script setup>
import InputField from './InputField.vue';
defineProps({
  fieldSchema: Object,
  dataEntityTemplate: Object
});
</script>

<template>
  <InputField :field-name="fieldSchema.options.name" :data-entity-template="dataEntityTemplate" />
</template>
