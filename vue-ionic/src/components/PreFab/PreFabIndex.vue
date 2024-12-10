<script setup>
import PreFabLinkList from './PreFabLinkList.vue';
import PreFabHeader from './PreFabHeader.vue';

const props = defineProps({
  elementsArray: Array,
  elementType: String,
  options: Object
});
</script>

<template>
  <PreFabLinkList v-if="props.elementType === 'preFabLinkList'" :options="props.options" />
  <PreFabHeader v-if="props.elementType === 'preFabHeader'" :options="props.options" />
</template>
