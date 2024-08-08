import { createRouter, createWebHistory } from 'vue-router';
import PadRenderer from '../components/PadRenderer.vue';
import DataEntityList from '../components/DataEntity/DataEntityList.vue';
import CrudDataRenderer from '../components/DataEntity/CrudDataRenderer.vue';
import CrudForm from '../components/DataEntity/CrudForm.vue';
import mainPad from '../../../main.pad.js';
import adminHome from '../components/adminHome.vue';

const routes = [];
const adminPath = '/admin/';
const dataEntityPath = adminPath + 'data-entities/';

// pageRoutes
if (mainPad.pageRoutes) {
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
}

// CRUD routes for each dataEntity
if (mainPad.dataEntities) {
  routes.push({
    path: adminPath,
    component: adminHome
  });
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
    routes.push({
      path: dataEntityPath + dataEntityKey + '/:id',
      component: CrudForm,
      props: {
        dataEntityKey
      }
    });
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
