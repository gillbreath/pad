<script setup>
import ElementRenderer from './ElementRenderer.vue';
import DataRenderer from './DataEntity/DataRenderer.vue';
import PreFabIndex from './PreFab/PreFabIndex.vue';
import LoopKey from '../loopKey.js';
import { onUpdated } from 'vue';

const emit = defineEmits(['updateDynamicLayout']);

const props = defineProps({
  elementsArray: Array,
  layout: String
});
onUpdated(() => {
  emit('updateDynamicLayout', props.layout);
});

props.elementsArray.forEach((e) => {
  e.loopKey = LoopKey();
});
</script>

<template>
  <template v-for="eachEl in props.elementsArray" :key="eachEl.loopKey">
    <PreFabIndex
      v-if="eachEl.elementType.substr(0, 6) === 'preFab'"
      :element-type="eachEl.elementType"
      :options="eachEl.options"
    />
    <DataRenderer v-if="eachEl.elementType === 'dataEntity'" :options="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
</template>
