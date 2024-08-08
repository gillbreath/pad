<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import PreFabLinkList from '@/components/PreFab/PreFabLinkList.vue';

const globalStores = {};
const options = {
  linkList: []
};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
  options.linkList.push({
    routerLink: '/admin/data-entities/' + eachStoreKey,
    text: eachStoreKey
  });
});
</script>

<template>
  <h1>admin</h1>
  <h2>data entities</h2>
  <PreFabLinkList :options="options"> </PreFabLinkList>
</template>
