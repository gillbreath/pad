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
if (props.options?.children) {
  props.options.children.forEach((e) => {
    e.loopKey = LoopKey();
  });
}

const dataEntityTemplate = mainPad.dataEntities[props.options.dataEntityKey].fields;
const router = useRouter();

let errorMessages = ref([]);

function submitHandler(e) {
  console.log('submitHandler', e);
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
