<script setup>
import Renderer from './ElementRenderer.vue';
import useGlobalStores from '../stores/GlobalStores.js';

const globalStores = {};
Object.entries(useGlobalStores).forEach(eachStore => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue()
});
console.log('t', globalStores)

const props = defineProps({
  dataEntity: Array
});

</script>

<template>
    <h1>here comes success</h1>
  <ul v-if="props.dataEntity.renderType === 'ul'">
    <li v-for="eachEntity in globalStores['articles']">
      {{ 'eachEntity.renderFunction' }}
      <Renderer v-if="eachEntity.children" :elements-array="eachEntity.children" />
    </li>
  </ul>
</template>
