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
const router = useRouter();

let errorMessages = ref([]);

async function submitHandler(e) {
  errorMessages.value.length = 0;
  const searchCriteria = {};

  Array.from(e.target.elements).forEach((eachField) => {
    if (eachField.id) {
      searchCriteria[eachField.id] = eachField.value;
    }
  });

  try {
    const foundRecords = await myStore.read(searchCriteria);

    if (foundRecords) {
      if (props.options.findOptions?.successRedirect) {
        router.push({
          path: props.options.findOptions.successRedirect,
          state: { foundRecords }
        });
      }
    }
  } catch (err) {
    errorMessages.value = err.errors;
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
