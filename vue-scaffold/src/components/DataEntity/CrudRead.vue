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
  <form>
    <template
      v-for="eachField in Object.keys(myRecord).filter((e) => e !== 'loopKey')"
      :key="eachField"
    >
      <label :for="eachField">{{ eachField }}:</label>&nbsp;
      <div :id="eachField">{{ myRecord[eachField] }}</div>
      <br />
    </template>
    <RouterLink
      :to="constants.dataEntityPath + props.dataEntityKey + '/' + myRecord.slug + '/update'"
      >Update</RouterLink
    >
  </form>
</template>
