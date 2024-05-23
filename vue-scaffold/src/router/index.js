import { createRouter, createWebHistory } from 'vue-router';
import Renderer from '../components/ElementRenderer.vue'
import mainPad from '../../../main.pad.js'

const routes = [];
Object.entries(mainPad.pageRoutes).forEach(pageRoute => {
  const [pageRouteKey, pageRouteValue] = pageRoute;
  routes.push({
    path: pageRouteValue.path || '/' + pageRouteKey,
    component: Renderer,
    props: {
      elementsArray: pageRouteValue.content
    },
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
