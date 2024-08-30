<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';
import constants from '../../constants.js';
import CrudForm from './CrudForm.vue';

const route = useRoute();

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();

const myRecord = myStore.collection.find((e) => {
  return e.slug === route.params.slug;
});
</script>

<template>
  <BreadCrumbs />
  <CrudForm :crud-record="myRecord">
  </CrudForm>
  <RouterLink :to="constants.dataEntityPath + props.dataEntityKey + '/' + myRecord.slug"
    >Done</RouterLink
  >
</template>
