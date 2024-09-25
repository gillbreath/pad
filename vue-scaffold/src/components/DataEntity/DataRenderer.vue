<script setup>
import PreFabLoopUL from '@/components/PreFab/PreFabLoopUL.vue';
import PreFabLoopTable from '@/components/PreFab/PreFabLoopTable.vue';
import useGlobalStores from '@/stores/GlobalStores.js';
import CrudCreate from '@/components/DataEntity/CrudCreate.vue';
import CrudFind from '@/components/DataEntity/CrudFind.vue';
import CrudUpdate from '@/components/DataEntity/CrudUpdate.vue';

const props = defineProps({
  options: Object
});
const myStore = useGlobalStores[props.options.dataEntityKey]();

if (props.options.collectionSort) {
  myStore.collection.sort(props.options.collectionSort);
}
</script>

<template>
  <PreFabLoopUL
    v-if="!props.options.renderType || props.options.renderType === 'ul'"
    :collection="myStore.collection"
    :options="props.options"
    v-slot:default="slotProps"
  >
    {{ slotProps.eachItem }}
  </PreFabLoopUL>
  <PreFabLoopTable
    v-if="props.options.renderType === 'table'"
    :collection="myStore.collection"
    :options="props.options"
  >
  </PreFabLoopTable>
  <CrudCreate
    v-if="props.options.renderType === 'create'"
    :data-entity-key="props.options.dataEntityKey"
  >
  </CrudCreate>
  <CrudFind
    v-if="props.options.renderType === 'find'"
    :data-entity-key="props.options.dataEntityKey"
    :crud-schema="props.options.children"
  >
  </CrudFind>
  <CrudUpdate
    v-if="props.options.renderType === 'update'"
    :data-entity-key="props.options.dataEntityKey"
  >
  </CrudUpdate>
</template>
