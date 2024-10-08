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
  <header
    v-if="mainPad?.padOptions?.layouts[dynamicLayout]?.header"
    :class="mainPad?.padOptions?.layouts[dynamicLayout]?.headerClass"
  >
    <PadRenderer :elements-array="mainPad?.padOptions?.layouts[dynamicLayout].header" />
  </header>
  <main>
    <template v-if="mainPad?.padOptions?.layouts[dynamicLayout]?.main?.overrideContainer">
      <router-view @update-dynamic-layout="updateDynamicLayout" />
    </template>
    <template v-else>
      <router-view @update-dynamic-layout="updateDynamicLayout" />
    </template>
  </main>
  <footer v-if="mainPad?.padOptions?.layouts[dynamicLayout]?.footer">
    <PadRenderer :elements-array="mainPad?.padOptions?.layouts[dynamicLayout].footer" />
  </footer>
</template>
