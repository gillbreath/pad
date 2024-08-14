<script setup>
import DataRenderer from './DataRenderer.vue';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';

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
  <BreadCrumbs />
  <h3>{{ props.dataEntityKey }}</h3>
  <DataRenderer :options="options" />
</template>
