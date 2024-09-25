<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute, useRouter } from 'vue-router';
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
  // TODO: validation
  myStore.collection.push(myRecord);
  // TODO: route on success/failure
  router.push('/');
}
</script>

<template>
  <CrudForm :crud-record="myRecord" :data-entity-template="dataEntityTemplate"> </CrudForm>
  <br />
  <button @click.prevent="createRecord()">Submit</button>
</template>
