<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ElementRenderer from './ElementRenderer.vue';
import DataRenderer from './DataEntity/DataRenderer.vue';
import PreFabIndex from './PreFab/PreFabIndex.vue';
import LoopKey from '../loopKey.js';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { IonNote } from '@ionic/vue';
import Picture from './Picture.vue';

const route = useRoute();
const emit = defineEmits(['updateDynamicLayout']);

const props = defineProps({
  elementsArray: Array,
  layout: String
});

function emitUpdateLayout() {
  emit('updateDynamicLayout', props.layout);
}

watch(
  () => route.path,
  () => emitUpdateLayout()
);
onMounted(() => emitUpdateLayout());

props.elementsArray.forEach((e) => {
  e.loopKey = LoopKey();
});
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Joe's Cat Shack</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Joe's Cat Shack</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
  <template v-for="eachEl in props.elementsArray" :key="eachEl.loopKey">
    <PreFabIndex
      v-if="eachEl.elementType.substr(0, 6) === 'preFab'"
      :element-type="eachEl.elementType"
      :options="eachEl.options"
    />
    <DataRenderer v-if="eachEl.elementType === 'dataEntity'" :options="eachEl" />
    <Picture v-if="eachEl.elementType === 'picture'" :options="eachEl" />
    <ElementRenderer v-else :single-element="eachEl" />
  </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
