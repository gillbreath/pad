const dataEntities = undefined;
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
          ],
          ulClasses: 'content-container'
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
  appName: 'PAD Blog',
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
          innerHtml: 'FreeWare'
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
