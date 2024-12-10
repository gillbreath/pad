import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

import useGlobalStores from './stores/GlobalStores.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils 
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
dark mode:
import '@ionic/vue/css/palettes/dark.always.css';
import '@ionic/vue/css/palettes/dark.class.css';
import '@ionic/vue/css/palettes/dark.system.css';
that can be commented out */

/* Theme variables */
import './theme/variables.css';

const pinia = createPinia();
const app = createApp(App)
  .use(IonicVue)
  .use(pinia)
  .use(router);

const globalStores = {};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
});
app.config.globalProperties.$globalStores = globalStores;
app.provide('$globalStores', globalStores);

router.isReady().then(() => {
  app.mount('#app');
});
