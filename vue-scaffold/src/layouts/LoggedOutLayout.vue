<script setup>
import mainPad from '../../../main.pad.js';
</script>

<template>
  <template v-if="mainPad?.padOptions?.header?.loggedOut">
    <h1>{{ mainPad.padOptions.header.loggedOut.banner }}</h1>
    <h2>{{ mainPad.padOptions.header.loggedOut.tagline }}</h2>
  </template>
  <main>
    <section>
      <div class="well">
        <slot />
      </div>
    </section>
  </main>
</template>
