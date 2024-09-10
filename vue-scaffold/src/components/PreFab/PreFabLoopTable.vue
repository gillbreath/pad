<script setup>
import LoopKey from '../../loopKey.js';
import constants from '../../constants.js';

const props = defineProps({
  collection: Array,
  options: Object
});
const tableSchema = props.options.displayColumns || [];
const tableCollection = [];

if (props.collection) {
  props.collection.forEach((e) => {
    const eachItem = e;
    eachItem.loopKey = LoopKey();
    tableCollection.push(eachItem);

    if (!props.options.displayColumns) {
      Object.keys(e).forEach((eachCollectionObjectKey) => {
        if (tableSchema.indexOf(eachCollectionObjectKey) < 0) {
          tableSchema.push(eachCollectionObjectKey);
        }
      });
    }
  });
  if (props.options.collectionSort) {
    tableCollection.sort(props.options.collectionSort);
  }
}
</script>

<template>
  <table :border="props.options.crudMode === true ? 1 : 0">
    <tr v-if="props.options.crudMode === true">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <th v-for="eachField in tableSchema.filter((e) => e !== 'loopKey')">
        {{ eachField }}
      </th>
    </tr>
    <tr v-for="(eachItem, index) in tableCollection" :key="eachItem.loopKey">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <td v-for="eachField in tableSchema.filter((e) => e !== 'loopKey')">
        {{
          typeof eachItem[eachField] === 'string'
            ? eachItem[eachField].substr(0, 20) + (eachItem[eachField].length > 20 ? '...' : '')
            : eachItem[eachField]
        }}
        {{ typeof eachField === 'function' ? eachField(eachItem) : '' }}
      </td>
      <td v-if="props.options.crudMode === true">
        <RouterLink
          :to="constants.dataEntityPath + props.options.dataEntityKey + '/' + eachItem.slug"
          >read</RouterLink
        >
        <br />
        <RouterLink
          :to="
            constants.dataEntityPath + props.options.dataEntityKey + '/' + eachItem.slug + '/update'
          "
          >update</RouterLink
        >
        <br />
        <a href="#" @click="$globalStores[props.options.dataEntityKey].remove(index)">delete</a>
      </td>
    </tr>
  </table>
</template>
