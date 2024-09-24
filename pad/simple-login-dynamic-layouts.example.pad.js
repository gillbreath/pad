const dataEntities = {
  logins: {
    fields: {
      username: {
        dataType: 'email'
      },
      password: {
        dataType: 'password'
      },
      confirmPassword: {
        dataType: 'password'
      }
    }
  }
};

const pageRoutes = {
  root: {
    path: '/',
    children: [
      {
        elementType: 'preFabLinkList',
        options: {
          collection: [
            {
              routerLink: '/home',
              text: 'Mock Login',
            },
            {
              routerLink: '/forgot-password',
              text: 'Forgot password?',
            },
            {
              routerLink: '/new-user',
              text: 'New user?',
            },
          ]
        }
      }
    ],
    layout: 'LoggedOutLayout'
  },
  forgotPassword: {
    path: '/forgot-password',
    children: [
      {
        elementType: 'p',
        innerHtml: 'We\'ll email you a link.'
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
        dataEntityKey: 'logins',
        renderType: 'create'
      }
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
  appName: 'Simple Login',
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
          innerHtml: 'Simple Login'
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
