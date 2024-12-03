import composedDataEntities from '../compositions/dataEntities.js';
import composedPageRoutes from '../compositions/pageRoutes.js';

const dataEntities = {
  mockLogins: composedDataEntities.mockLogins,
  profiles: composedDataEntities.profiles
};

composedPageRoutes.mockLogins.loginForm.path = '/';
composedPageRoutes.mockLogins.loginForm.children[0].children.splice(0, 0,
  {
    elementType: 'p',
    class: 'tagline',
    innerHtml: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
  }
);

const pageRoutes = {
  // TODO: assign compositions to PAD objects dynamically
  forgotPassword: composedPageRoutes.mockLogins.forgotPassword,
  newUser: composedPageRoutes.mockLogins.newUser,
  resetPassword: composedPageRoutes.mockLogins.resetPassword,
  root: composedPageRoutes.mockLogins.loginForm,
  home: {
    path: '/home',
    children: [
      {
        elementType: 'routerLink',
        class: 'button',
        innerHtml: 'PEOPLE LIST',
        to: '/people'
      },
      {
        elementType: 'routerLink',
        class: 'button',
        innerHtml: 'ADD A PERSON',
        to: '/people/create'
      },
    ]
  },
};
const padOptions = {
  appName: 'Example',
  layouts: {
    DefaultLayout: {
      header: [{
        elementType: 'preFabHeader',
        options: {
          navLinks: [
            {
              routerLink: '/home',
              text: 'home'
            },
            {
              routerLink: '/people/create',
              text: 'add'
            },
            {
              routerLink: '/',
              text: 'logout'
            },
          ],
        }
      }],
      layoutClass: 'logged-in'
    },
    LoggedOutLayout: {
      footer: [
        {
          elementType: 'p',
          innerHtml: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dui fermentum justo sodales congue vulputate fames pharetra justo. Eu purus duis habitant, potenti fermentum parturient. Egestas parturient dapibus in sit fermentum sapien auctor suspendisse auctor.'
        }
      ],
      header: [
        {
          elementType: 'h1',
          innerHtml: 'Freeware'
        },
        {
          elementType: 'h2',
          innerHtml: 'Powered by Best Friends'
        }
      ]
    },
  }
};

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
