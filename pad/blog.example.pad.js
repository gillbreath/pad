const dataEntities = {
  articles: {
    fields: {
      title: {
        defaultValue: 'Title'
      },
      category: {
        defaultValue: ''
      },
      author: {
        defaultValue: 'Elias Carlston'
      },
      text: {
        defaultValue: 'Body Content'
      },
    },
    preLoad: [
      'one', 'two', { innerHtml: (entity) => entity.value, value: 'thr33', children: [{ elementType: 'h2', innerHtml: 'non' }] }
    ]
  },
  categories: {
    fields: {
      name: {
        defaultValue: 'Category'
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
        elementType: 'main',
        class: 'container',
        children: [
          {
            elementType: 'preFabHeader',
            options: {
              siteName: 'Elias Judas',
              siteNameImageSrc: './src/assets/nonrepo/elias-judas-logo.gif',
              siteLogoImageSrc: './src/assets/nonrepo/headshot.jpg',
              navLinkList: [
                {
                  link: '#bio',
                  text: 'bio'
                },
                {
                  link: '#music',
                  text: 'music'
                },
                {
                  link: '#contact',
                  text: 'contact'
                },
              ]
            }
          },
          {
            elementType: 'section',
            children: [
              {
                elementType: 'div',
                class: 'well',
                children: [
                  {
                    elementType: 'p',
                    innerHtml: 'Elias Judas plays rock \'n roll music.'
                  },
                  {
                    elementType: 'h1',
                    innerHtml: 'music'
                  },
                  {
                    elementType: 'preFabLinkList',
                    options: {
                      id: 'music-list',
                      linkList: [
                        {
                          link: 'https://www.facebook.com/eliasjamesmusic/',
                          text: 'Facebook'
                        },
                        {
                          link: 'https://www.youtube.com/channel/UCo90TSZZQYNIDh4vneV6-iQ?view_as=subscriber',
                          text: 'YouTube'
                        },
                        {
                          link: 'https://www.reverbnation.com/eliasjames',
                          text: 'ReverbNation'
                        },
                      ]
                    }
                  }
                ]
              }
            ]
          },
        ],
      }
    ],
  }
};

const siteSchema = {
  dataEntities,
  pageRoutes
};
export default siteSchema;
