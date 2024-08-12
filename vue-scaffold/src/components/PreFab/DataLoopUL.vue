<script setup>
import LoopKey from '../../loopKey.js';

const props = defineProps({
  collection: Array,
  options: Object
});

if (props.collection) {
  props.collection.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <ul>
    <li v-for="eachItem in props.collection" :key="eachItem.loopKey">
      <template v-if="eachItem.innerHtml">
        {{ eachItem.innerHtml }}
      </template>
      <slot v-else v-bind:eachItem="eachItem"></slot>
    </li>
  </ul>
</template>
