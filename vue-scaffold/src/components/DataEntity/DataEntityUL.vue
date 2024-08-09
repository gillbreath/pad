<script setup>
import LoopKey from '../../loopKey.js';

const props = defineProps({
  options: Object
});

console.log('if (', props.options.collection);
if (props.options.collection) {
  props.options.collection.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <ul>
    <li v-for="eachItem in props.options.collection" :key="eachItem.loopKey">
      <slot v-bind:eachItem="eachItem"></slot>
    </li>
  </ul>
</template>
