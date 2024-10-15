import { createRouter, createWebHistory } from 'vue-router';
import PadRenderer from '../components/PadRenderer.vue';
import CrudRead from '../components/DataEntity/CrudRead.vue';
import CrudUpdate from '../components/DataEntity/CrudUpdate.vue';
import CrudCreate from '../components/DataEntity/CrudCreate.vue';
import mainPad from '../../../main.pad.js';
import constants from '../constants.js';
import routeConstructors from './routeConstructors.js';

const routes = [];

// pageRoutes
if (mainPad.pageRoutes) {
  Object.entries(mainPad.pageRoutes).forEach((eachRoute) => {
    routes.push(routeConstructors.pageRoutes(eachRoute));
  });
}

// CRUD routes for each dataEntity
if (mainPad.dataEntities) {
  Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
    const [dataEntityKey, dataEntityValue] = dataEntity;
    const dataEntitySingularName = dataEntityValue.singularName || dataEntityKey.substr(0, dataEntityKey.length - 1);

    routes.push(routeConstructors.dataEntities.list(dataEntityKey));

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

    routes.push(routeConstructors.dataEntities.create(dataEntityKey, dataEntityValue, dataEntitySingularName));
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
