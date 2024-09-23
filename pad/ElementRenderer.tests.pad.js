export default {
  padOptions: {
    layouts: {
      DefaultLayout: {
        header: [{
          elementType: 'preFabHeader',
          options: {
            logoPictureAltText: 'img alt text',
            siteLogoImageSrc: 'src',
            siteName: 'PAD Blog',
            navLinkList: [
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
  },
  seedPadPageRoutesTestChildren: [
    {
      "elementType": "header",
      "children": [
        {
          "elementType": "nav",
          "children": [
            {
              "elementType": "a",
              "class": "foo",
              "href": "#",
              "innerHtml": "anchor text, internal"
            },
            {
              "elementType": "a",
              "class": "bar",
              "href": "https://example.com/",
              "innerHtml": "anchor text, external"
            }
          ]
        },
        {
          "elementType": "div",
          "class": "bar",
          "children": [
            {
              "elementType": "h1",
              "class": "baz",
              "innerHtml": "heading one text"
            },
            {
              "elementType": "h2",
              "class": "keedl",
              "innerHtml": "heading two text"
            }
          ]
        }
      ]
    },
    {
      "elementType": "section",
      "children": [
        {
          "elementType": "ul",
          "children": [
            {
              "elementType": "li",
              "children": [
                {
                  "elementType": "img",
                  "alt": "img alt text",
                  "class": "some-img-class",
                  "src": "src"
                }
              ],
              "innerHtml": "li text"
            }
          ]
        }
      ]
    }
  ]
}
