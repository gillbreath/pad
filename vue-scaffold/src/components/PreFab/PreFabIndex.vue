<script setup>
import LinkList from './LinkList.vue';
import PreFabHeader from './PreFabHeader.vue';

const props = defineProps({
  elementsArray: Array,
  elementType: String,
  options: Object
});
</script>

<template>
  <LinkList v-if="props.elementType === 'preFabLinkList'" :options="props.options" />
  <PreFabHeader v-if="props.elementType === 'preFabHeader'" :options="props.options" />
</template>
