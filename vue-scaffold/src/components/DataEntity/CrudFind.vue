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

function submitHandler(e) {
  const searchRecord = {};
  Array.from(e.target.elements).forEach((eachField) => {
    searchRecord[eachField.id] = eachField.value;
  });

  const foundRecord = myStore.collection.find((eachRecord) => {
    let searchSucceeded = true;
    Object.keys(searchRecord).forEach((eachSearch) => {
      const targetIndex = Array.from(e.target).findIndex((et) => et.id === eachSearch);
      if (eachRecord[eachSearch] !== e.target[targetIndex].value) searchSucceeded = false;
    });
    return searchSucceeded ? eachRecord : '';
  });
  return foundRecord;
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
