import PadRenderer from '../components/PadRenderer.vue';
import constants from '../constants.js';
import CrudCreate from '../components/DataEntity/CrudCreate.vue';
import CrudRead from '../components/DataEntity/CrudRead.vue';
import CrudUpdate from '../components/DataEntity/CrudUpdate.vue';

export default {
  dataEntities: {
    create: (dataEntityKey, dataEntityValue, dataEntitySingularName) => {
      return {
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
                elementType: 'h1',
                innerHtml: 'New ' + dataEntitySingularName
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
      };
    },
    list: (dataEntityKey) => {
      return {
        path: constants.dataEntityPath + dataEntityKey,
        component: PadRenderer,
        props: {
          elementsArray: [
            {
              elementType: 'h1',
              innerHtml: dataEntityKey
            },
            {
              elementType: 'routerLink',
              to: '/' + dataEntityKey + '/create',
              innerHtml: 'create new'
            },
            {
              dataEntityKey,
              crudMode: true,
              elementType: 'dataEntity',
              renderType: 'table'
            }
          ]
        }
      };
    },
    read: (dataEntityKey) => {
      return {
        path: constants.dataEntityPath + dataEntityKey + '/:slug',
        component: CrudRead,
        props: {
          options: { crudMode: true, dataEntityKey }
        }
      };
    },
    update: (dataEntityKey) => {
      return {
        path: constants.dataEntityPath + dataEntityKey + '/:slug/update',
        component: CrudUpdate,
        props: {
          options: { dataEntityKey }
        }
      };
    }
  },
  pageRoutes: (pageRoute) => {
    const [pageRouteKey, pageRouteValue] = pageRoute;
    return {
      path: pageRouteValue.path || '/' + pageRouteKey,
      component: PadRenderer,
      props: {
        elementsArray: pageRouteValue.children,
        layout: pageRouteValue.layout || 'DefaultLayout'
      }
    };
  }
};
