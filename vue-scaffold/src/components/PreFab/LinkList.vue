<script setup>
import LoopKey from '../../loopKey.js';

const props = defineProps({
  options: Object
});
if (props.options.linkList) {
  props.options.linkList.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <ul>
    <li v-for="eachLink in props.options.linkList" :key="eachLink.loopKey">
      <span v-if="eachLink.routerLink">
        <RouterLink :to="eachLink.routerLink">{{ eachLink.text }}</RouterLink>
      </span>
      <span v-if="eachLink.link">
        <a :href="eachLink.link">{{ eachLink.text }}</a>
      </span>
    </li>
  </ul>
</template>
