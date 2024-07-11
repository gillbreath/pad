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
  <h1>data entity</h1>
  <h2>{{ props.dataEntityKey }}</h2>
  <BaseDataRenderer :data-entity="dataEntity" :render-children="false" :crud-mode="true" />
</template>
