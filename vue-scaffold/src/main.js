// Framework CSS - CRUD controls etc
import './assets/pad.css';
// Symlink to app css for convenience
// import './assets/nonrepo/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import useGlobalStores from './stores/GlobalStores.js';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoggedOutLayout from '@/layouts/LoggedOutLayout.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component('DefaultLayout', DefaultLayout).component('LoggedOutLayout', LoggedOutLayout);

const globalStores = {};
Object.entries(useGlobalStores).forEach((eachStore) => {
  const [eachStoreKey, eachStoreValue] = eachStore;
  globalStores[eachStoreKey] = eachStoreValue();
});
app.config.globalProperties.$globalStores = globalStores;

app.mount('#app');
