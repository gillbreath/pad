<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';
import constants from '../../constants.js';

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
  <template
    v-for="eachField in Object.keys(myRecord)"
    :key="eachField"
  >
    <label :for="eachField">{{ eachField }}:</label
    >&nbsp;
    <input :id="eachField" v-model="myRecord[eachField]" />
    <br />
  </template>
  <br />
  <RouterLink :to="constants.dataEntityPath + props.dataEntityKey + '/' + myRecord.slug"
    >Done</RouterLink>
</template>
