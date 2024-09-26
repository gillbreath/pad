<script setup>
// TODO: if any more components use this, switch to events
/* eslint vue/no-mutating-props: 0 */
defineProps({
  crudRecord: Object,
  fieldSchema: Object,
  dataEntityTemplate: Object,
  submitHandler: Function
});
</script>

<template>
  <!--    <label :for="eachField">{{ eachField }}:</label>&nbsp; -->
  <template v-if="fieldSchema.elementType.substr(0, 4) === 'crud'">
    <template v-if="fieldSchema.options?.type === 'input'">
      <input
        :id="fieldSchema.options.name"
        :list="
          dataEntityTemplate?.[fieldSchema.options.name]?.dataListSuggestions
            ? fieldSchema.options.name + 'DataList'
            : ''
        "
        :placeholder="dataEntityTemplate?.[fieldSchema.options.name]?.inputHint"
        :type="dataEntityTemplate?.[fieldSchema.options.name]?.dataType || 'text'"
        :value="crudRecord?.[fieldSchema.options.name]"
      />
      <datalist
        v-if="dataEntityTemplate?.[fieldSchema.options.name]?.dataListSuggestions"
        :id="fieldSchema.options.name + 'DataList'"
      >
        <template
          v-for="eachOption in dataEntityTemplate?.[fieldSchema.options.name]?.dataListSuggestions"
          :key="eachOption"
        >
          <option :value="eachOption" />
        </template>
      </datalist>
    </template>
  </template>
  <template v-if="fieldSchema.options?.type === 'submit'">
    <button @click.prevent="submitHandler()">{{ fieldSchema.options?.buttonText }}</button>
  </template>
</template>
