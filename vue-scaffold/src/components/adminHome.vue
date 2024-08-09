<script setup>
import LoopKey from '../loopKey.js';
import PreFabLinkList from '@/components/PreFab/PreFabLinkList.vue';
import constants from '../constants.js';

const options = {
  linkList: [{ routerLink: constants.dataEntityPath, text: 'data entities' }]
};
options.linkList.forEach((eachLink) => {
  eachLink.loopKey = LoopKey();
});
</script>

<template>
  <h1>admin</h1>
  <PreFabLinkList :options="options"> </PreFabLinkList>
</template>
