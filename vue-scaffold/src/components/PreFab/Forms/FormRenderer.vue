<script setup>
import PadRenderer from '@/components/PadRenderer.vue';
import InputField from './InputField.vue';
defineProps({
  fieldSchema: Object,
  dataEntityTemplate: Object
});
</script>

<template>
  <template v-if="fieldSchema.elementType.substr(0,4) === 'form'">
  <InputField v-if="fieldSchema.options.type === 'input'" :field-name="fieldSchema.options.name" :data-entity-template="dataEntityTemplate" />
  <button v-if="fieldSchema.options.type === 'submit'">{{ fieldSchema.options.buttonText }}</button>
  </template>
  <template v-else>
    <PadRenderer :elements-array="[ fieldSchema ]" />
  </template>
</template>
