<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import mainPad from '../../../../main.pad.js';
import FormRenderer from '@/components/PreFab/Forms/FormRenderer.vue';
import LoopKey from '@/loopKey.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CrudErrorMessages from './CrudErrorMessages.vue';

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
const newRecord = {};
const router = useRouter();

let errorMessages = ref([]);

Object.keys(dataEntityTemplate).forEach((e) => {
  newRecord[e] = dataEntityTemplate[e].defaultValue;
});

async function submitHandler(e) {
  errorMessages.value.length = 0;

  Array.from(e.target.elements).forEach((eachField) => {
    if (eachField.id) {
      newRecord[eachField.id] = eachField.value;
    }
  });

  try {
    await myStore.create(newRecord);
    if (props.options.createOptions?.successRedirect) {
      router.push(props.options.createOptions.successRedirect);
    }
  } catch (e) {
    // trigger error message display
    if (e?.errors.length > 0) {
      errorMessages.value = e.errors;
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <template v-if="errorMessages.length > 0">
      <CrudErrorMessages :error-messages="errorMessages"> </CrudErrorMessages>
      <br />
    </template>
    <FormRenderer
      v-for="eachFormField in props.options.children"
      :key="eachFormField.loopKey"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
    >
    </FormRenderer>
  </form>
</template>
