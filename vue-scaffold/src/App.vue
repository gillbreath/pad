<script setup>
import { RouterView } from 'vue-router';
import mainPad from '../../main.pad.js';
let showCrudControls = false;
if (mainPad.dataEntities) showCrudControls = true;
</script>

<template>
  <RouterView />
  <template v-if="showCrudControls">
    <div id="crud-controls">
      <RouterLink :to="'/'">home</RouterLink>
      &nbsp;&gt;&nbsp;
      <RouterLink :to="'/data-entities/'"> data-entities </RouterLink>
    </div>
  </template>
</template>
