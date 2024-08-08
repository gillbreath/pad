<script setup>
import LoopKey from '../loopKey.js';
import PreFabLinkList from '@/components/PreFab/PreFabLinkList.vue';

const options = {
  linkList: [{ routerLink: '/admin/data-entities/', text: 'data entities' }]
};
options.linkList.forEach((eachLink) => {
  eachLink.loopKey = LoopKey();
});
</script>

<template>
  <h1>admin</h1>
  <PreFabLinkList :options="options"> </PreFabLinkList>
</template>
