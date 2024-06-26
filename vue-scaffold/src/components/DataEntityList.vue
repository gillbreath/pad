<script setup>
import LoopKey from '../loopKey.js';
import useGlobalStores from '@/stores/GlobalStores.js';

const globalStores = {};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
  globalStores[eachStoreKey].loopKey = LoopKey();
});
</script>

<template>
  <h1>data entities</h1>
  <ul>
    <li v-for="eachEntity in $globalStores" :key="eachEntity.loopKey">
      <RouterLink :to="'/data-entities/' + eachEntity.$id">
        {{ eachEntity.$id }}
      </RouterLink>
    </li>
  </ul>
</template>
