<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import PreFabLinkList from '@/components/PreFab/PreFabLinkList.vue';
import constants from '../../constants.js';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';

const globalStores = {};
const options = {
  collection: []
};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
  options.collection.push({
    routerLink: constants.dataEntityPath + eachStoreKey,
    text: eachStoreKey
  });
});
</script>

<template>
  <BreadCrumbs />
  <h2>data entities</h2>
  <PreFabLinkList :options="options"> </PreFabLinkList>
</template>
