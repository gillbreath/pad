<script setup>
import { RouterView } from 'vue-router';
import mainPad from '../../main.pad.js';
let showCrudControls = false;
if (mainPad.dataEntities) showCrudControls = true;
</script>

<template>
  <RouterView />
  <div id="crud-controls">
  <template v-if="showCrudControls">
    <RouterLink :to="'/'">home</RouterLink>
    &nbsp;&gt;&nbsp;
    <RouterLink :to="'/data-entities/'"> data-entities </RouterLink>
  </template>
  </div>
</template>
