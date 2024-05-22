import ElementRenderer from './ElementRenderer.vue';
import testSiteSchema from '../../../siteSchema.json';
import ElementRendererTests from '../../ElementRenderer.tests.json';

describe('<ElementRenderer />', () => {
  it('mounts', () => {
    cy.mount(ElementRenderer);
  });

  it('mounts multiple elements', () => {
    cy.mount(ElementRenderer, {
      props: {
        elementsArray: testSiteSchema
      }
    });

    ElementRendererTests.forEach(e => {
      const eachElement = cy.get(e.elementType);
      e.assertions.forEach(a => {
        if (Array.isArray(a)) {
          eachElement.should(...a);
        } else {
          eachElement.should(a);
        }
      });
    });
  });
});
