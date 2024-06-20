const dataEntities = {
  articles: {
    fields: {
      title: {
        slug: 'article-title',
        defaultValue: ''
      },
      category: {
        slug: 'article-category',
        defaultValue: ''
      },
      author: {
        slug: 'article-author',
        defaultValue: ''
      },
      text: {
        slug: 'article-content',
        defaultValue: ''
      },
    },
    preLoad: [
      'one', 'two', { innerHtml: (entity) => entity.value, value: 'thr33', children: [{ elementType: 'h2', innerHtml: 'non' }] }
    ]
  },
  categories: {
    fields: {
      name: {
        slug: 'category-name',
        defaultValue: ''
      },
    },
    preLoad: [
      'Aa', 'Bb', { innerHtml: (entity) => entity.value, value: 'Cc', children: [{ elementType: 'h2', innerHtml: 'diff' }] }
    ]
  }
};

const pageRoutes = {
  home: {
    path: '/',
    title: 'Home',
    children: [
      {
        elementType: 'section',
        class: 'banner',
        children: [
          {
            elementType: 'img',
            alt: 'portrait of Elias in his office with computer and guitars',
            src: '/assets/banner-office.jpg',
          },
        ],
      },
      {
        elementType: 'section',
        class: 'well',
        id: 'about',
        children: [
          {
            elementType: 'dataEntity',
            dataEntityKey: 'articles',
            renderType: 'ul'
          }
        ],
      },
    ],
  },
  music: {
    children: [
      {
        elementType: 'h2',
        innerHtml: 'music',
      },
      {
        elementType: 'ul',
        children: [
          {
            elementType: 'li',
            innerHtml: 'youtbue',
          },
          {
            elementType: 'li',
            innerHtml: 'bandcamp',
          },
          {
            elementType: 'li',
            innerHtml: 'etc',
          },
        ]
      }
    ],
  },
  writing: {
    title: 'Writing',
    children: [
      {
        elementType: 'h2',
        innerHtml: 'writing',
      },
      {
        elementType: 'ul',
        children: [
          {
            elementType: 'li',
            innerHtml: 'article',
          },
          {
            elementType: 'li',
            innerHtml: 'essay',
          },
          {
            elementType: 'li',
            innerHtml: 'contact',
          },
        ]
      }
    ],
  },
};

const siteSchema = {
  dataEntities,
  pageRoutes
};
export default siteSchema;
