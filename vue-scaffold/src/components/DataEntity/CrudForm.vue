<script setup>
// TODO: if any more components use this, switch to events
/* eslint vue/no-mutating-props: 0 */
defineProps({
  crudRecord: Object,
  dataEntityTemplate: Object
});
</script>

<template>
  <template
    v-for="eachField in Object.keys(crudRecord).filter((e) => e !== 'loopKey')"
    :key="eachField"
  >
    <label :for="eachField">{{ eachField }}:</label>&nbsp;
    <input
      :id="eachField"
      :list="dataEntityTemplate?.[eachField]?.dataListSuggestions ? eachField + 'DataList' : ''"
      :placeholder="dataEntityTemplate?.[eachField]?.inputHint"
      :type="dataEntityTemplate?.[eachField]?.dataType || 'text'"
      v-model="crudRecord[eachField]"
    />
    <datalist
      v-if="dataEntityTemplate?.[eachField]?.dataListSuggestions"
      :id="eachField + 'DataList'"
    >
      <template v-for="eachOption in dataEntityTemplate?.[eachField]?.dataListSuggestions">
        <option :value="eachOption" />
      </template>
    </datalist>
    <br />
  </template>
  <br />
</template>
