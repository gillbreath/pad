/* global describe, it, cy */

import ElementRenderer from './ElementRenderer.vue';
import testElementRendererSchema from '../../../pad/ElementRenderer.tests.pad.js';
import ElementRendererTests from '../../ElementRenderer.tests.json';

describe('<ElementRenderer />', () => {
  it('mounts a single element', () => {
    cy.mount(ElementRenderer, {
      props: {
        singleElement: {
          elementType: 'h1',
          innerHtml: 'test'
        }
      }
    });
  });

  it('mounts multiple elements', () => {
    cy.mount(ElementRenderer, {
      props: {
        elementsArray: testElementRendererSchema
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
