import { createRouter, createWebHistory } from 'vue-router';
import PadRenderer from '../components/PadRenderer.vue';
import DataEntityList from '../components/DataEntityList.vue';
import CrudDataRenderer from '../components/DataEntity/CrudDataRenderer.vue';
import mainPad from '../../../main.pad.js';

const routes = [];

// pageRoutes
Object.entries(mainPad.pageRoutes).forEach((pageRoute) => {
  const [pageRouteKey, pageRouteValue] = pageRoute;
  routes.push({
    path: pageRouteValue.path || '/' + pageRouteKey,
    component: PadRenderer,
    props: {
      elementsArray: pageRouteValue.children
    }
  });
});

// CRUD routes for each dataEntity
const dataEntityPath = '/data-entities/';

routes.push({
  path: dataEntityPath,
  component: DataEntityList
});
Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
  const [dataEntityKey] = dataEntity;
  routes.push({
    path: dataEntityPath + dataEntityKey,
    component: CrudDataRenderer,
    props: {
      dataEntityKey
    }
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
