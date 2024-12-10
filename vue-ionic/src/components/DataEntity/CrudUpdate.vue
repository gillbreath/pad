<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import mainPad from '../../../../main.pad.js';
import FormRenderer from '@/components/PreFab/Forms/FormRenderer.vue';
import LoopKey from '@/loopKey.js';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CrudErrorMessages from './CrudErrorMessages.vue';

const props = defineProps({
  options: Object
});
if (props.options?.children) {
  props.options.children.forEach((e) => {
    e.loopKey = LoopKey();
  });
}

const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;
const myStore = useGlobalStores[props.options.dataEntityKey]();
const route = useRoute();
const router = useRouter();

let errorMessages = ref([]);
const searchCriteria = {
  primarykey: route.params.primarykey || props.options.primarykey
};
if (!searchCriteria.primarykey) throw new Error('Primary key required to update.');

let copyProps = ref([]);

async function getUpdateRecord(searchCriteria) {
  const foundRecord = await myStore.read(searchCriteria);

  // TODO: something here causes 'Maximum recursive updates exceeded'
  props.options.children.forEach((eachProp) => {
    let eachCopy = {};
    Object.assign(eachCopy, eachProp || {});
    if (eachProp.elementType === 'formField') {
      Object.keys(foundRecord).forEach((eachFoundKey) => {
        if (eachFoundKey === eachProp.options.name) {
          eachCopy.options.inputValue = foundRecord[eachFoundKey];
        }
      });
    }
    copyProps.value.push(eachCopy);
  });
}

getUpdateRecord(searchCriteria);

async function submitHandler(e) {
  const updateRecord = [];
  errorMessages.value.length = 0;

  Array.from(e.target.elements).forEach((eachField) => {
    if (eachField.id) {
      updateRecord[eachField.id] = eachField.value;
    }
  });

  try {
    await myStore.update(updateRecord);
    if (props.options.updateOptions?.successRedirect) {
      router.push(props.options.updateOptions.successRedirect);
    }
  } catch (err) {
    // trigger error message display
    if (err?.errors.length > 0) {
      errorMessages.value = err.errors;
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <template v-if="errorMessages?.length > 0">
      <CrudErrorMessages :error-messages="errorMessages"> </CrudErrorMessages>
      <br />
    </template>
    <FormRenderer
      v-for="eachFormField in copyProps"
      :key="eachFormField.loopKey"
      :field-schema="eachFormField"
      :data-entity-template="dataEntityTemplate"
    >
    </FormRenderer>
  </form>
</template>
