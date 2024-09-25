<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import constants from '../../constants.js';
import CrudForm from './CrudForm.vue';

const route = useRoute();

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();

//const myRecord = myStore.collection.find((e) => {
//  return e?.slug === route.params.slug;
//});
</script>

<template>
  <CrudForm :crud-schema="mySchema"> </CrudForm>
</template>
