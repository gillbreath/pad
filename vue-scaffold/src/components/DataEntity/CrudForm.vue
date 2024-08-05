<script setup>
import useGlobalStores from '@/stores/GlobalStores.js';

const props = defineProps({
  dataEntityKey: String
});
const myStore = useGlobalStores[props.dataEntityKey]();
</script>

<template>
  <form>
    <template v-for="eachField in Object.keys(myStore.collection[$route.params.id])">
      <label :for="eachField">{{ eachField }}</label>&nbsp;
      <input :id="eachField" v-model="myStore.collection[$route.params.id][eachField]" />
      <br/>
    </template>
  </form>
</template>
