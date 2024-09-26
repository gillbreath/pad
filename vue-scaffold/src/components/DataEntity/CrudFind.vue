<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import constants from '../../constants.js';
import CrudForm from './CrudForm.vue';
import mainPad from '../../../../main.pad.js';

const route = useRoute();

const props = defineProps({
  options: Object
});

const myStore = useGlobalStores[props.options.dataEntityKey]();
const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;

function submitHandler() {
  console.log('this', this);
}

//const myRecord = myStore.collection.find((e) => {
//  return e?.slug === route.params.slug;
//});
</script>

<template>
  <form>
    <CrudForm
      v-for="eachFormField in props.options.children"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
      @submit="submitHandler"
    >
    </CrudForm>
  </form>
</template>
