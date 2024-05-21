<script setup>
import ElementRenderer from '../components/ElementRenderer.vue';
import ElementRendererTestJson from './ElementRenderer.test.json';
</script>

<template>
  <main>
    <h2>Element Renderer view</h2>
    <ElementRenderer :elements-array="ElementRendererTestJson" />
  </main>
</template>
