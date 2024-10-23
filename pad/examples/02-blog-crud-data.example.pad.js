const dataEntities = {
  articles: {
    fields: {
      category: {
        dataListSuggestions: [
          'marketing',
          'tech',
          'product-management'
        ]
      },
      datePublished: {
        dataType: 'date',
        inputHint: 'YYYY-MM-DD'
      },
      primarykey: {
        inputHint: 'unique-and-url-formatted'
      },
      text: {
        defaultValue: 'Duis aute irure dolor in reprehenderit...'
      },
      title: {},
    },
    preLoad: [
      {
        category: 'marketing',
        datePublished: '2024-01-02',
        primarykey: 'an-excellent-mktng-article',
        title: 'An Excellent Marketing Article',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'tech',
        datePublished: '2024-02-03',
        primarykey: 'a-helpful-technology-article',
        title: 'A Helpful Technology Article',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'product-management',
        datePublished: '2024-03-04',
        primarykey: 'an-insightful-pm-article',
        title: 'An Insightful PM Article',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'marketing',
        datePublished: '2024-04-05',
        primarykey: 'another-excellent-mktng-article',
        title: 'Another Excellent Marketing Article',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'tech',
        datePublished: '2024-05-06',
        primarykey: 'helpful-technology-article-followup',
        title: 'Helpful Technology Article Followup',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'product-management',
        datePublished: '2024-06-07',
        primarykey: 'more-pm-insights-article',
        title: 'More PM Insights Article',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ]
  },
};

const pageRoutes = {
  home: {
    path: '/',
    children: [
      {
        elementType: 'div',
        class: 'content-container',
        innerHtml: 'Welcome to PAD Blog, an example site.'
      }
    ]
  },
  about: {
    path: '/about',
    children: [
      {
        elementType: 'p',
        innerHtml: 'An example of a typical blog.'
      }
    ]
  },
  blog: {
    path: '/blog',
    children: [
      {
        elementType: 'p',
        innerHtml: 'Articles for PAD Blog:'
      },
      {
        elementType: 'preFabLinkList',
        options: {
          collection: [
            {
              routerLink: '/blog/latest',
              text: 'latest',
            },
            {
              routerLink: '/blog/categories',
              text: 'categories',
            },
          ]
        }
      }
    ]
  },
  blogCategories: {
    path: '/blog/categories',
    children: [
      {
        elementType: 'h1',
        innerHtml: 'categories'
      },
      {
        elementType: 'p',
        innerHtml: 'Articles from the PAD Blog grouped by category.',
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'articles',
        renderType: 'table'
      },
    ]
  },
  blogLatest: {
    path: '/blog/latest',
    children: [
      {
        elementType: 'h1',
        innerHtml: 'latest'
      },
      {
        elementType: 'p',
        innerHtml: 'The latest articles from the PAD Blog. Demoing 1) sorting by most recent date and 2) custom display columns (col #3 capitalized)'
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'articles',
        collectionSort: (a, b) => new Date(b.datePublished) - new Date(a.datePublished),
        displayColumns: [
          'datePublished', 'title', (eachItem) => eachItem.category.replace(/^[a-z]/, (c) => c.toUpperCase())
        ],
        renderType: 'table'
      },
    ]
  },
  contact : {
    path: '/contact',
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
  appName: 'PAD Blog',
  layouts: {
    DefaultLayout: {
      header: [{
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
      }]
    }
  }
};

const siteSchema = {
  dataEntities,
  padOptions,
  pageRoutes
};
export default siteSchema;
