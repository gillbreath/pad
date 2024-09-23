<script setup>
import { ref } from 'vue';
import mainPad from '../../main.pad.js';
import PadRenderer from '@/components/PadRenderer.vue';

let dynamicLayout = ref('DefaultLayout');

function updateDynamicLayout(layoutName) {
  dynamicLayout.value = layoutName;
}
</script>

<template>
  <header v-if="mainPad?.padOptions?.layouts[dynamicLayout].header">
    <PadRenderer :elements-array="mainPad?.padOptions?.layouts[dynamicLayout].header" />
  </header>
  <main>
    <router-view @update-dynamic-layout="updateDynamicLayout" />
  </main>
</template>
