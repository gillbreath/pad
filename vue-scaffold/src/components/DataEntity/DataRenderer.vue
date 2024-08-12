<script setup>
import LoopKey from '../../loopKey.js';
import constants from '../../constants.js';
import DataEntityUL from './DataEntityUL.vue';
import useGlobalStores from '@/stores/GlobalStores.js';

const props = defineProps({
  options: Object
});
const myStore = useGlobalStores[props.options.dataEntityKey]();

if (props.elementsArray) {
  props.elementsArray.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <DataEntityUL
    :collection="myStore.collection"
    :options="props.options"
    v-slot:default="slotProps"
  >
    {{ slotProps.eachItem }}
    <span v-if="props.crudMode === true">
      &nbsp;
      <a href="#" @click="$globalStores[props.dataEntity.dataEntityKey].remove(index)">delete</a>
      &nbsp;
      <RouterLink :to="constants.dataEntityPath + props.dataEntity.dataEntityKey + '/' + index"
        >update</RouterLink
      >
    </span>
  </DataEntityUL>
</template>
