<script setup>
import ElementRenderer from './ElementRenderer.vue';
import DataEntityRenderer from './DataEntity/BaseDataRenderer.vue';
import LinkListRenderer from './LinkListRenderer.vue';
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
    <LinkListRenderer v-if="eachEl.elementType === 'linkList'" :link-list="eachEl.linkList" />
    <DataEntityRenderer v-if="eachEl.elementType === 'dataEntity'" :data-entity="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
</template>
