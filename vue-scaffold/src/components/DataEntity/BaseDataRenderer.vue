<script setup>
import Renderer from '../ElementRenderer.vue';
import LoopKey from '../../loopKey.js';
import constants from '../../constants.js';

const props = defineProps({
  crudMode: Boolean,
  dataEntity: Object,
  renderChildren: Boolean
});
if (props.elementsArray) {
  props.elementsArray.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <ul v-if="props.dataEntity.renderType === 'ul'">
    <li
      v-for="(eachEntity, index) in $globalStores[props.dataEntity.dataEntityKey].collection"
      :key="eachEntity.loopKey"
    >
      {{ eachEntity.innerHtml ? eachEntity.innerHtml(eachEntity) : eachEntity }}
      <span v-if="props.crudMode === true">
        &nbsp;
        <a href="#" @click="$globalStores[props.dataEntity.dataEntityKey].remove(index)">delete</a>
        &nbsp;
        <RouterLink :to="constants.dataEntityPath + props.dataEntity.dataEntityKey + '/' + index"
          >update</RouterLink
        >
      </span>
      <Renderer
        v-if="eachEntity.children && props.renderChildren === true"
        :elements-array="eachEntity.children"
      />
    </li>
  </ul>
</template>
