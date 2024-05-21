import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ElementRendererView from '../views/ElementRendererView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/element-renderer',
      name: 'Element Renderer',
      component: ElementRendererView
    }
  ]
});

export default router;
