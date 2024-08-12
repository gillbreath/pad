<script setup>
import DataRenderer from './DataRenderer.vue';

const props = defineProps({
  dataEntityKey: String
});
const options = {
  crudMode: true,
  dataEntityKey: props.dataEntityKey,
  renderType: 'table'
};
</script>

<template>
  <h1>admin</h1>
  <h2>data entities</h2>
  <h3>{{ props.dataEntityKey }}</h3>
  <DataRenderer :options="options" />
</template>
