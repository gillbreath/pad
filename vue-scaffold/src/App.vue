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
  <header v-if="mainPad?.padOptions?.layouts[dynamicLayout]?.header">
    <PadRenderer :elements-array="mainPad?.padOptions?.layouts[dynamicLayout].header" />
  </header>
  <main>
    <template v-if="mainPad?.padOptions?.layouts[dynamicLayout]?.main?.overrideContainer">
      <router-view @update-dynamic-layout="updateDynamicLayout" />
    </template>
    <template v-else>
      <div class="content-container">
        <router-view @update-dynamic-layout="updateDynamicLayout" />
      </div>
    </template>
  </main>
</template>
