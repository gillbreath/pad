const pageRoutes = {
  home: {
    path: '/',
    children: [
      {
        elementType: 'h1',
        innerHtml: 'Hello World!'
      },
      {
        elementType: 'a',
        innerHtml: 'more',
        href: '/more'
      },
    ]
  },
  more: {
    path: '/more',
    children: [
      {
        elementType: 'p',
        innerHtml: 'More content here.'
      },
      {
        elementType: 'routerLink',
        to: '/',
        innerHtml: 'back to home page'
      }
    ]
  },
};

const padOptions = {
  layouts: {
    DefaultLayout: {
      footer: [{
        elementType: 'div',
        innerHtml: 'footer'
      }],
      header: [{
        elementType: 'div',
        innerHtml: 'header'
      }]
    }
  }
};

const siteSchema = {
  padOptions,
  pageRoutes
};
export default siteSchema;
