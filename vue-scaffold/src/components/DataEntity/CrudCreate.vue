<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import mainPad from '../../../../main.pad.js';
import FormRenderer from '@/components/PreFab/Forms/FormRenderer.vue';
import LoopKey from '@/loopKey.js';

const props = defineProps({
  options: Object
});
if (props.options.children) {
  props.options.children.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
const myStore = useGlobalStores[props.options.dataEntityKey]();
const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;
const myRecord = {};

Object.keys(dataEntityTemplate).forEach((e) => {
  myRecord[e] = dataEntityTemplate[e].defaultValue;
});

function submitHandler(e) {
  // TODO: validation
  Array.from(e.target.elements).forEach((eachField) => {
    myRecord[eachField.id] = eachField.value;
  });
  createRecord(myRecord);
  // TODO: route on success/failure
  // router.push('/');
}
function createRecord(record) {
  myStore.collection.push(record);
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <FormRenderer
      v-for="eachFormField in props.options.children"
      :key="eachFormField.loopKey"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
    >
    </FormRenderer>
  </form>
</template>
