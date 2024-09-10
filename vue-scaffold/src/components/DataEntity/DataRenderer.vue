<script setup>
import PreFabLoopUL from '@/components/PreFab/PreFabLoopUL.vue';
import PreFabLoopTable from '@/components/PreFab/PreFabLoopTable.vue';
import useGlobalStores from '@/stores/GlobalStores.js';

const props = defineProps({
  options: Object
});
const myStore = useGlobalStores[props.options.dataEntityKey]();

if (props.options.collectionSort) {
  myStore.collection.sort(props.options.collectionSort);
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
  </PreFabLoopTable>
</template>
