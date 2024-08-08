<script setup>
import { RouterView } from 'vue-router';
import mainPad from '../../main.pad.js';
import PreFabHeader from './components/PreFab/PreFabHeader.vue';
let showCrudControls = false;
if (mainPad.dataEntities) showCrudControls = true;
</script>

<template>
  <template v-if="mainPad?.padOptions?.header">
    <PreFabHeader :options="mainPad.padOptions.header.options" />
  </template>
  <main>
    <section>
      <div class="well">
        <RouterView />
      </div>
    </section>
  </main>
  <template v-if="showCrudControls">
    <div id="crud-controls">
      <RouterLink :to="'/'">home</RouterLink>
      &nbsp;&gt;&nbsp;
      <RouterLink :to="'/data-entities/'"> data-entities </RouterLink>
    </div>
  </template>
</template>
