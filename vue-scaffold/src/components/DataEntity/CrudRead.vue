<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import BreadCrumbs from '../PreFab/BreadCrumbs.vue';
import constants from '../../constants.js';

const route = useRoute();

const props = defineProps({
  options: String
});
const myStore = useGlobalStores[props.options.dataEntityKey]();

const myRecord = myStore.collection.find((e) => {
  return e.slug === route.params.slug;
});
</script>

<template>
  <BreadCrumbs />
  <form>
    <RouterLink
      v-if="props.options.crudMode === true"
      :to="constants.dataEntityPath + props.options.dataEntityKey + '/' + myRecord.slug + '/update'"
      >Update</RouterLink
    >
    <template
      v-for="eachField in Object.keys(myRecord).filter((e) => e !== 'loopKey')"
      :key="eachField"
    >
      <div :id="eachField">
        <label :for="eachField">{{ eachField }}:</label>&nbsp;
        {{ myRecord[eachField] }}
      </div>
      <br />
    </template>
  </form>
</template>
