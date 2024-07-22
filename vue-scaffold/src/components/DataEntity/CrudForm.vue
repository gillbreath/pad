<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();
</script>

<template>
  <form>
    <input v-model="myStore.collection[$route.params.id]" />
  </form>
</template>
