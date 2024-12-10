import { createRouter, createWebHistory } from '@ionic/vue-router';
import mainPad from '../../../main.pad.js';
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
    const dataEntitySingularName =
      dataEntityValue.singularName || dataEntityKey.substr(0, dataEntityKey.length - 1);

    routes.push(
      routeConstructors.dataEntities.create(dataEntityKey, dataEntityValue, dataEntitySingularName)
    );
    routes.push(routeConstructors.dataEntities.list(dataEntityKey));
    routes.push(routeConstructors.dataEntities.read(dataEntityKey));
    routes.push(
      routeConstructors.dataEntities.update(dataEntityKey, dataEntityValue, dataEntitySingularName)
    );
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
