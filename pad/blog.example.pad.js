const dataEntities = {
  articles: {
    fields: {
      author: {},
      category: {},
      text: {},
      title: {},
    },
    preLoad: [
      {
        category: 'marketing',
        title: 'Lorem Ipsum',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'tech',
        title: 'Lorem Ipsum',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'product-management',
        title: 'Lorem Ipsum',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ]
  },
  categories: {
    fields: {
      name: {
        defaultValue: 'Category'
      },
    },
    preLoad: [
      {
        name: 'Technology',
        slug: 'tech'
      },
      {
        name: 'Marketing',
        slug: 'marketing'
      },
      {
        name: 'Product Management',
        slug: 'product-management'
      },
    ]
  }
};

const pageRoutes = {
  home: {
    path: '/',
    title: 'Home',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Welcome to PAD Blog, an example site.'
      }
    ]
  },
  contact : {
    path: '/contact',
    title: 'Contact',
    children: [
      {
        elementType: 'h1',
        innerHtml: 'contact'
      },
      {
        elementType: 'preFabLinkList',
        options: {
          id: 'contact-list',
          collection: [
            {
              link: 'http://www.example.com/facebook/',
              text: 'Facebook'
            },
            {
              link: 'http://www.example.com/insta/',
              text: 'Instagram'
            },
            {
              link: 'mailto:pad@example.com',
              text: 'Email'
            },
          ]
        }
      }
    ]
  }
};
const padOptions = {
  header: {
    elementType: 'preFabHeader',
    options: {
      siteName: 'PAD Blog',
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
  }
};

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
