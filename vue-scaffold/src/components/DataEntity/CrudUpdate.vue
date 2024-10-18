<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import mainPad from '../../../../main.pad.js';
import FormRenderer from '@/components/PreFab/Forms/FormRenderer.vue';
import LoopKey from '@/loopKey.js';
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
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

let errorMessages = ref([]);
const searchCriteria = {
  primarykey: route.params.primarykey || props.options.primarykey
};
if (!searchCriteria.primarykey) throw new Error('Primary key required to update.');

let copyProps = ref([]);

async function getUpdateRecord(searchCriteria) {
  const foundRecord = await myStore.read(searchCriteria);

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

function submitHandler(e) {
  console.log('storeRecord', e);
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
