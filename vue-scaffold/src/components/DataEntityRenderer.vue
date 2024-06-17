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
  dataEntity: Object
});

</script>

<template>
  <ul v-if="props.dataEntity.renderType === 'ul'">
    <li v-for="eachEntity in globalStores['articles'].dataEntityCollection">
      {{ (eachEntity.innerHtml) ? eachEntity.innerHtml(eachEntity) : eachEntity }}
      <Renderer v-if="eachEntity.children" :elements-array="eachEntity.children" />
    </li>
  </ul>
</template>
