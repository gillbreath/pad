import './assets/main.css';
import './assets/pad.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import useGlobalStores from './stores/GlobalStores.js';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

const globalStores = {};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
});
app.config.globalProperties.$globalStores = globalStores;

app.mount('#app');
