<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';
import { useRoute } from 'vue-router';
import constants from '../../constants.js';
import CrudForm from './CrudForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  options: Object
});

const myStore = useGlobalStores[props.options.dataEntityKey]();
</script>

<template>
  <CrudForm :options="props.options"> </CrudForm>
</template>
