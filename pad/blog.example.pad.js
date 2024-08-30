const dataEntities = {
  articles: {
    fields: {
      category: {},
      slug: {
        inputHint: 'unique-and-url-formatted'
      },
      text: {
        defaultValue: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      title: {},
    },
    preLoad: [
      {
        category: 'marketing',
        slug: 'an-excellent-mktng-article',
        title: 'Lorem Ipsum',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'tech',
        slug: 'a-helpful-technology-article',
        title: 'Lorem Ipsum',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        category: 'product-management',
        slug: 'an-insightful-pm-article',
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
  about: {
    path: '/about',
    title: 'About',
    children: [
      {
        elementType: 'p',
        innerHtml: 'An example of a typical blog.'
      }
    ]
  },
  blog: {
    path: '/blog',
    title: 'Blog',
    children: [
      {
        elementType: 'p',
        innerHtml: 'All articles for PAD Blog'
      },
      {
        elementType: 'dataEntity',
        dataEntityKey: 'articles',
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
