<script setup>
import BaseDataRenderer from './BaseDataRenderer.vue';

const props = defineProps({
  dataEntityKey: String
});
const dataEntity = {
  dataEntityKey: props.dataEntityKey,
  renderType: 'ul'
};
</script>

<template>
  <h1>admin</h1>
  <h2>data entities</h2>
  <h3>{{ props.dataEntityKey }}</h3>
  <BaseDataRenderer :data-entity="dataEntity" :render-children="false" :crud-mode="true" />
</template>
