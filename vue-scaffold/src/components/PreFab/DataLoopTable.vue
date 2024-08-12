<script setup>
import LoopKey from '../../loopKey.js';
import constants from '../../constants.js';

const props = defineProps({
  collection: Array,
  options: Object
});

const tableSchema = [];
if (props.collection) {
  props.collection.forEach((e) => {
    e.loopKey = LoopKey();
    Object.keys(e).forEach((eachCollectionObjectKey) => {
      if (tableSchema.indexOf(eachCollectionObjectKey) < 0) {
        tableSchema.push(eachCollectionObjectKey);
      }
    });
  });
}
</script>

<template>
  <table border="1">
    <tr>
      <!-- eslint-disable-next-line require-v-for-key -->
      <th v-for="(eachField, index) in tableSchema" :key="index">
        {{ eachField }}
      </th>
    </tr>
    <tr v-for="eachItem in props.collection" :key="eachItem.loopKey">
      <td v-for="(eachField, index) in Object.keys(eachItem)" :key="index">
        {{ eachItem[eachField] }}
      </td>
      <td v-if="props.options.crudMode === true">
        <RouterLink :to="constants.dataEntityPath + props.options.dataEntityKey + '/' + index"
          >update</RouterLink
        >
        <br />
        <a href="#" @click="$globalStores[props.options.dataEntityKey].remove(index)">delete</a>
      </td>
    </tr>
  </table>
</template>
