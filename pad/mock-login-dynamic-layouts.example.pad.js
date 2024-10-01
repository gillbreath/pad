const dataEntities = {
  logins: {
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
  }
};

const pageRoutes = {
  root: {
    path: '/',
    children: [
      {
        elementType: 'h3',
        innerHtml: 'SIGN IN',
      },
      {
        elementType: 'dataEntity',
        children: [
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
            routerLink: '/forgot-password',
            innerHtml: 'Forgot password',
          },
          {
            elementType: 'formControl',
            options: {
              type: 'submit',
              buttonText: 'SIGN IN',
            }
          }
        ],
        dataEntityKey: 'logins',
        renderType: 'find',
        findOptions: {
          successRedirect: '/home'
        }
      },
      {
        elementType: 'routerLink',
        to: '/new-user',
        innerHtml: 'New user?'
      }
    ],
    layout: 'LoggedOutLayout'
  },
  forgotPassword: {
    path: '/forgot-password',
    children: [
      {
        elementType: 'p',
        innerHtml: 'TBD: email a magic link.'
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'logins',
        fields: ['username'],
        renderType: 'find'
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
        dataEntityKey: 'logins',
        fields: {
          display: ['username'],
          update: ['password', 'confirmPassword'],
        },
        renderType: 'update'
      }
    ],
    layout: 'LoggedOutLayout'
  },
  newUser: {
    path: '/new-user',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Create a new user.'
      },
      {
        elementType: 'dataEntity',
        children: [
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
        dataEntityKey: 'logins',
        renderType: 'create',
        createOptions: {
          successRedirect: '/'
        }
      },
    ],
    layout: 'LoggedOutLayout'
  },
  home: {
    path: '/home',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Logged in, home page'
      },
      {
        elementType: 'preFabLinkList',
        options: {
          collection: [
            {
              routerLink: '/business',
              text: 'Take Care of Business',
            },
            {
              routerLink: '/',
              text: 'Mock logout',
            },
          ]
        }
      }
    ]
  },
  business: {
    path: '/business',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Business happens here'
      },
    ]
  },
};
const padOptions = {
  appName: 'Mock Login',
  layouts: {
    DefaultLayout: {
      header: [{
        elementType: 'preFabHeader',
        options: {
          navLinks: [
            {
              routerLink: '/about',
              text: 'about'
            },
            {
              routerLink: '/blog',
              text: 'blog'
            },
            {
              routerLink: '/contact',
              text: 'contact'
            },
          ]
        }
      }]
    },
    LoggedOutLayout: {
      header: [
        {
          elementType: 'h1',
          class: 'content-container',
          innerHtml: 'Mock Login'
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
