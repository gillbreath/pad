<script setup>
import LoopKey from '../../loopKey.js';
import PreFabLoopUL from '@/components/PreFab/PreFabLoopUL.vue';
import PreFabLoopTable from '@/components/PreFab/PreFabLoopTable.vue';
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
  <PreFabLoopUL
    v-if="!props.options.renderType"
    :collection="myStore.collection"
    :options="props.options"
    v-slot:default="slotProps"
  >
    {{ slotProps.eachItem }}
  </PreFabLoopUL>
  <PreFabLoopTable
    v-if="props.options.renderType === 'table'"
    :collection="myStore.collection"
    :options="props.options"
  >
    <slot v-bind:eachItem="eachItem"></slot>
  </PreFabLoopTable>
</template>
