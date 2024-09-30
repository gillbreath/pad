<script setup>
const props = defineProps({
  errorMessages: Object
});
</script>

<template>
  <div v-for="eachErrorMessage in props.errorMessages" :key="eachErrorMessage">
    {{ eachErrorMessage?.errorMessage }}
  </div>
</template>
