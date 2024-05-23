import ElementRendererTests from '../../ElementRenderer.tests.json';

describe('Element Renderer Test', () => {
  it('visits the url and expects multiple elements', () => {
    cy.visit('/test');

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
