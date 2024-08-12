<script setup>
import LoopKey from '../../loopKey.js';
import DataEntityUL from '@/components/DataEntity/DataEntityUL.vue';

const props = defineProps({
  options: Object
});

if (props.options.collection) {
  props.options.collection.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <DataEntityUL
    :collection="props.options.collection"
    :options="options"
    v-slot:default="slotProps"
  >
    <span v-if="slotProps.eachItem.routerLink">
      <RouterLink :to="slotProps.eachItem.routerLink">{{ slotProps.eachItem.text }}</RouterLink>
    </span>
    <span v-if="slotProps.eachItem.link">
      <a :href="slotProps.eachItem.link">{{ slotProps.eachItem.text }}</a>
    </span>
  </DataEntityUL>
</template>
