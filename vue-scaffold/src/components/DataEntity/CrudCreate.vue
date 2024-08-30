<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute, useRouter } from 'vue-router';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';
import mainPad from '../../../../main.pad.js';
import CrudForm from './CrudForm.vue';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();

const dataEntityTemplate = mainPad.dataEntities[props.dataEntityKey].fields;
const myRecord = {};
Object.keys(dataEntityTemplate).forEach((e) => {
  myRecord[e] = dataEntityTemplate[e].defaultValue;
});

function createRecord() {
  myStore.collection.push(myRecord);
  router.push(route.path.replace('\/create', ''));
}
</script>

<template>
  <BreadCrumbs />
  <CrudForm :crud-record="myRecord" :data-entity-template="dataEntityTemplate">
  </CrudForm>
  <br />
  <a href="" @click.prevent="createRecord()">Create</a>
</template>
