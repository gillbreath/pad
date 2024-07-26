<script setup>
import ElementRenderer from './ElementRenderer.vue';
import DataEntityRenderer from './DataEntity/BaseDataRenderer.vue';
import PreFab from './PreFab/Index.vue';
import LoopKey from '../loopKey.js';

const props = defineProps({
  elementsArray: Array
});
props.elementsArray.forEach((e) => {
  e.loopKey = LoopKey();
});
</script>

<template>
  <template v-for="eachEl in props.elementsArray" :key="eachEl.loopKey">
    <PreFab v-if="eachEl.elementType.substr(0,6) === 'preFab'" :element-type="eachEl.elementType" :elements-array="eachEl.elementsArray" />
    <DataEntityRenderer v-if="eachEl.elementType === 'dataEntity'" :data-entity="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
</template>
