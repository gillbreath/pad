<script setup>
import mainPad from '../../../main.pad.js';
import PreFabHeader from '@/components/PreFab/PreFabHeader.vue';
</script>

<template>
  <template v-if="mainPad?.padOptions?.header">
    <PreFabHeader :options="mainPad.padOptions.header.options" />
  </template>
  <main>
    <section>
      <div class="well">
        <slot />
      </div>
    </section>
  </main>
</template>
