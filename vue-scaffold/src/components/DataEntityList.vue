<script setup>
import loopKey from '../loopKey.js';
</script>

<template>
  <h1>data entities</h1>
  <ul>
    <li
      v-for="eachEntity in $globalStores"
      :key="loopKey()"
    >
      <RouterLink :to="'/data-entities/' + eachEntity.$id">
        {{ eachEntity.$id }}
      </RouterLink>
    </li>
  </ul>
</template>
