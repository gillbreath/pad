import { createRouter, createWebHistory } from 'vue-router';
import Renderer from '../components/Renderer.vue'
import mainPad from '../../../main.pad.js'

const routes = [];

// pageRoutes
Object.entries(mainPad.pageRoutes).forEach(pageRoute => {
  const [pageRouteKey, pageRouteValue] = pageRoute;
  routes.push({
    path: pageRouteValue.path || '/' + pageRouteKey,
    component: Renderer,
    props: {
      elementsArray: pageRouteValue.children
    },
  });
});

// CRUD routes for each dataEntity
Object.entries(mainPad.dataEntities).forEach(dataEntity => {
  const [dataEntityKey, dataEntityValue] = dataEntity;
  routes.push({
    path: '/data-entities/' + dataEntityKey,
    component: Renderer,
    props: {
      elementsArray: [
        {
          elementType: 'h1',
          innerHtml: dataEntityKey,
        },
        {
          elementType: 'dataEntity',
          dataEntityKey,
          renderType: 'ul'
        }
      ]
    }
  });
});


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
