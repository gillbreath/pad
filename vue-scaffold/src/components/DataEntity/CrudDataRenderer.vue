<script setup>
import BaseDataRenderer from './BaseDataRenderer.vue';

const props = defineProps({
  dataEntityKey: Object
});
const dataEntity = {
  dataEntityKey: props.dataEntityKey,
  renderType: 'ul'
};
</script>

<template>
  <h1>{{ props.dataEntityKey }}</h1>
  <BaseDataRenderer :data-entity="dataEntity" />
</template>
