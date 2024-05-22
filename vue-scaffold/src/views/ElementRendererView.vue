<script setup>
import ElementRenderer from '../components/ElementRenderer.vue';
import siteSchema from '../../../siteSchema.json';
</script>

<template>
  <main>
    <h2>Element Renderer view</h2>
    <ElementRenderer :elements-array="siteSchema" />
  </main>
</template>
