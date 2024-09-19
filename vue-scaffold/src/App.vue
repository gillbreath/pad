<script setup>
import { ref } from 'vue';

let dynamicLayout = ref('DefaultLayout');

function updateDynamicLayout(layoutName) {
  dynamicLayout.value = layoutName;
}
</script>

<template>
  <component :is="dynamicLayout">
    <router-view @update-dynamic-layout="updateDynamicLayout" />
  </component>
</template>
