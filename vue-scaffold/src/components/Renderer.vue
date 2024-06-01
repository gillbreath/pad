<script setup>
import ElementRenderer from './ElementRenderer.vue';
import DataEntityRenderer from './DataEntityRenderer.vue';
const props = defineProps({
  elementsArray: Array
});
</script>

<template>
  <template v-for="eachEl in props.elementsArray">
  <h1>
    {{ eachEl.elementType + ' , ' +  eachEl.elementType === 'dataEntity' }}
  </h1>
    <DataEntityRenderer v-if="eachEl.elementType === 'dataEntity'" :data-entity="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
</template>
