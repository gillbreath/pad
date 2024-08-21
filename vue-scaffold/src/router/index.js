import { createRouter, createWebHistory } from 'vue-router';
import PadRenderer from '../components/PadRenderer.vue';
import DataEntityList from '../components/DataEntity/DataEntityList.vue';
import CrudDataRenderer from '../components/DataEntity/CrudDataRenderer.vue';
import CrudRead from '../components/DataEntity/CrudRead.vue';
import CrudUpdate from '../components/DataEntity/CrudUpdate.vue';
import mainPad from '../../../main.pad.js';
import adminHome from '../components/adminHome.vue';
import constants from '../constants.js';

const routes = [];

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
    path: constants.adminPath,
    component: adminHome
  });
  routes.push({
    path: constants.dataEntityPath,
    component: DataEntityList
  });
  Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
    const [dataEntityKey] = dataEntity;
    routes.push({
      path: constants.dataEntityPath + dataEntityKey,
      component: CrudDataRenderer,
      props: {
        dataEntityKey
      }
    });
    routes.push({
      path: constants.dataEntityPath + dataEntityKey + '/:slug',
      component: CrudRead,
      props: {
        dataEntityKey
      }
    });
    routes.push({
      path: constants.dataEntityPath + dataEntityKey + '/:slug/update',
      component: CrudUpdate,
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
