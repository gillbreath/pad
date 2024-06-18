<script setup>
import ElementRenderer from './ElementRenderer.vue';
import DataEntityRenderer from './DataEntity/BaseDataRenderer.vue';
const props = defineProps({
  elementsArray: Array
});
</script>

<template>
  <template v-for="eachEl in props.elementsArray">
    <DataEntityRenderer v-if="eachEl.elementType === 'dataEntity'" :data-entity="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
</template>
