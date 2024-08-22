<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute, useRouter } from 'vue-router';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';
import constants from '../../constants.js';
import mainPad from '../../../../main.pad.js';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();

const dataEntityTemplate = mainPad.dataEntities[props.dataEntityKey].fields;
const myRecord = {};
Object.keys(dataEntityTemplate).forEach(e => {
  myRecord[e] = dataEntityTemplate[e].defaultValue || e;
});

function createRecord() {
  myStore.collection.push(myRecord);
  router.push(route.path.replace('create',''));
console.log('t', myStore.collection, myRecord);
}
</script>

<template>
  <BreadCrumbs />
  <template v-for="eachField in Object.keys(myRecord)" :key="eachField">
    <label :for="eachField">{{ eachField }}:</label>&nbsp;
    <input :id="eachField" v-model="myRecord[eachField]" />
    <br />
  </template>
  <br />
  <a href="" @click.prevent="createRecord()">Create</a>
</template>
