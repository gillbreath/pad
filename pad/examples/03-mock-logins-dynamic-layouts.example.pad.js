const dataEntities = {
  mockLogins: {
    singularName: 'Mock login',
    fields: {
      username: {
        dataType: 'email',
        inputHint: 'username',
        validations: [
          'notEmpty'
        ]
      },
      password: {
        dataType: 'password',
        inputHint: 'password',
        validations: [
          'notEmpty'
        ]
      },
      confirmPassword: {
        dataType: 'password',
        inputHint: 'confirm password',
        validations: [
          'notEmpty'
        ]
      }
    }
  },
  people: {
    singularName: 'person',
    fields: {
      firstName: {
        validations: [
          'notEmpty'
        ]
      },
      lastName: {
        validations: [
          'notEmpty'
        ]
      },
      username: {
        dataType: 'email',
        foreignkey: 'mockLogins.username',
        validations: [
          'notEmpty'
        ]
      },
    }
  }
};
const pageRoutes = {
  root: {
    path: '/',
    children: [
      {
        elementType: 'dataEntity',
        children: [
          {
            elementType: 'p',
            class: 'tagline',
            innerHtml: 'Lorem ipsum odor amet, consectetuer adipiscing elit.'
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'username'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'password'
            }
          },
          {
            elementType: 'routerLink',
            to: '/forgot-password',
            innerHtml: 'Forgot password',
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'SIGN IN',
            }
          },
          {
            elementType: 'routerLink',
            to: '/new-user',
            innerHtml: 'New user?'
          }
        ],
        dataEntityKey: 'mockLogins',
        renderType: 'find',
        findOptions: {
          successRedirect: '/home'
        }
      },
    ],
    layout: 'LoggedOutLayout'
  },
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
  forgotPassword: {
    path: '/forgot-password',
    children: [
      {
        elementType: 'dataEntity',
        dataEntityKey: 'mockLogins',
        children: [
          {
            elementType: 'p',
            innerHtml: 'TBD: email a magic link.'
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'username'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'EMAIL ME',
            }
          }
        ],
        renderType: 'find',
        findOptions: {
          successRedirect: '/reset-password'
        }
      }
    ],
    layout: 'LoggedOutLayout'
  },
  resetPassword: {
    path: '/reset-password',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Reset your password.'
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'mockLogins',
        children: [
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'password'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'confirmPassword'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'RESET',
            }
          }
        ],
        renderType: 'update',
        updateOptions: {
          successRedirect: '/'
        }
      }
    ],
    layout: 'LoggedOutLayout'
  },
  newUser: {
    path: '/new-user',
    children: [
      {
        elementType: 'dataEntity',
        children: [
          {
            elementType: 'p',
            innerHtml: 'Create a new user.'
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'username'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'password'
            }
          },
          {
            elementType: 'formField',
            options: {
              type: 'input',
              name: 'confirmPassword'
            }
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'CREATE USER',
            }
          }
        ],
        dataEntityKey: 'mockLogins',
        renderType: 'create',
        createOptions: {
          successRedirect: '/'
        }
      },
    ],
    layout: 'LoggedOutLayout'
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

// import animalsPreLoad from './freeware.preload-animals.pad.js';
// dataEntities.animals.preLoad = animalsPreLoad;

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
