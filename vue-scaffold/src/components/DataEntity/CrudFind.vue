<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import constants from '../../constants.js';
import CrudForm from './CrudForm.vue';
import mainPad from '../../../../main.pad.js';
import FormRenderer from '@/components/PreFab/Forms/FormRenderer.vue';

const route = useRoute();

const props = defineProps({
  options: Object
});

const myStore = useGlobalStores[props.options.dataEntityKey]();
const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;

function submitHandler(e) {
  const searchRecord = {};
  Array.from(e.target.elements).forEach(eachField => {
    searchRecord[eachField.id] = eachField.value;
  })

  const foundRecord = myStore.collection.find(eachRecord => {
    let searchSucceeded = true;
    Object.keys(searchRecord).forEach(eachSearch => {
      const targetIndex = Array.from(e.target).findIndex(et => et.id === eachSearch);
      if (eachRecord[eachSearch] !== e.target[targetIndex].value) searchSucceeded = false;
    })
    return searchSucceeded ? eachRecord : '';
  });
}

//const myRecord = myStore.collection.find((e) => {
//  return e?.slug === route.params.slug;
//});
</script>

<template>
  <form @submit.prevent="submitHandler">
    <FormRenderer
      v-for="eachFormField in props.options.children"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
    >
    </FormRenderer>
  </form>
</template>
