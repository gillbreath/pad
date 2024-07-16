<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();

const model = defineModel();
</script>

<template>
  <form>
    <input v-model="myStore.collection[$route.params.id]" />
  </form>
</template>
