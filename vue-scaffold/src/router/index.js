import { createRouter, createWebHistory } from 'vue-router';
import PadRenderer from '../components/PadRenderer.vue';
import DataEntityList from '../components/DataEntity/DataEntityList.vue';
import DataRenderer from '../components/DataEntity/DataRenderer.vue';
import CrudRead from '../components/DataEntity/CrudRead.vue';
import CrudUpdate from '../components/DataEntity/CrudUpdate.vue';
import CrudCreate from '../components/DataEntity/CrudCreate.vue';
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
        elementsArray: pageRouteValue.children,
        layout: pageRouteValue.layout || 'DefaultLayout'
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
  // TODO: DataRenderer causes Vue warning bc it d/n handle updateDynamicLayout
  // Switch to PadRenderer or declare emit in DR?
  Object.entries(mainPad.dataEntities).forEach((dataEntity) => {
    const [dataEntityKey, dataEntityValue] = dataEntity;
    routes.push({
      path: constants.dataEntityPath + dataEntityKey,
      component: DataRenderer,
      props: { options: {
        dataEntityKey,
        elementType: 'dataEntity',
        renderType: 'table'
      }}
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
    routes.push({
      path: constants.dataEntityPath + dataEntityKey + '/create',
      component: CrudCreate,
      props: {
        options: {
          dataEntityKey,
          createOptions: {
            successRedirect: constants.dataEntityPath + dataEntityKey
          },
          children: [
            {
              elementType: 'h2',
              innerHtml: 'New ' + dataEntityKey
            }
          ].concat(
            Object.keys(dataEntityValue.fields)
              .map((eachField) => {
                return {
                  elementType: 'formField',
                  options: {
                    type: 'input',
                    name: eachField
                  }
                };
              })
              .concat([
                {
                  elementType: 'formControl',
                  options: {
                    type: 'submit',
                    buttonText: 'SUBMIT'
                  }
                }
              ])
          )
        }
      }
    });
  });
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
