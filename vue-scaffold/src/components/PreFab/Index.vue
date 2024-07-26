<script setup>
import LinkList from './LinkList.vue';

const props = defineProps({
  elementsArray: Array,
  elementType: String
});
</script>

<template>
  <LinkList v-if="props.elementType === 'preFabLinkList'" :link-list="props.elementsArray" />
</template>
