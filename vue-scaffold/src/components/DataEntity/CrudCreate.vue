<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute, useRouter } from 'vue-router';
import mainPad from '../../../../main.pad.js';
import CrudForm from './CrudForm.vue';

const route = useRoute();
const router = useRouter();

const props = defineProps({
  options: Object
});
const myStore = useGlobalStores[props.options.dataEntityKey]();
const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;
const myRecord = {};

Object.keys(dataEntityTemplate).forEach((e) => {
  myRecord[e] = dataEntityTemplate[e].defaultValue;
});

function submitHandler() {
  console.log('this', this);
}
function createRecord() {
  // TODO: validation
  myStore.collection.push(myRecord);
  // TODO: route on success/failure
  router.push('/');
}
</script>

<template>
  <form>
    <CrudForm
      v-for="eachFormField in props.options.children"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
      :submit-handler="submitHandler"
    >
    </CrudForm>
  </form>
</template>
