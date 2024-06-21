<script setup>
import Renderer from '../ElementRenderer.vue';
import useGlobalStores from '../../stores/GlobalStores.js';
import LoopKey from '../../loopKey.js';

const globalStores = {};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
});

const props = defineProps({
  dataEntity: Object
});
if (props.elementsArray) {
  props.elementsArray.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <ul v-if="props.dataEntity.renderType === 'ul'">
    <li
      v-for="eachEntity in globalStores[props.dataEntity.dataEntityKey].collection"
      :key="eachEntity.loopKey"
    >
      {{ eachEntity.innerHtml ? eachEntity.innerHtml(eachEntity) : eachEntity }}
      <Renderer v-if="eachEntity.children" :elements-array="eachEntity.children" />
    </li>
  </ul>
</template>
