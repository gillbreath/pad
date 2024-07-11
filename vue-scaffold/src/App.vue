<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
  <div id="crud-controls">
    <RouterLink :to="'/'">home</RouterLink>
    &nbsp;&gt;&nbsp;
    <RouterLink :to="'/data-entities/'"> data-entities </RouterLink>
  </div>
</template>
