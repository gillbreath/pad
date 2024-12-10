<script setup>
import PreFabLinkList from '@/components/PreFab/PreFabLinkList.vue';
import { useRoute } from 'vue-router';

const myRoute = useRoute();
const collection = [];
let routerLink = '';
const myCollection = myRoute.path.split('/').splice(1, myRoute.path.split('/').length);
myCollection.forEach((e) => {
  if (e) {
    routerLink += '/' + e;
    collection.push({ routerLink, text: e });
  }
});

const options = {
  collection,
  horizontal: true,
  ulClasses: 'breadcrumbs'
};
</script>

<template>
  <PreFabLinkList :options="options"> </PreFabLinkList>
</template>
