import ElementRendererTests from '../../ElementRenderer.tests.json';

describe('Element Renderer Test', () => {
  it('visits the url and expects multiple elements', () => {
    cy.visit('/test');

    ElementRendererTests.forEach(e => {
      cy.get(e.elementType).as('eachElement');
      e.assertions.forEach(a => {
        if (Array.isArray(a)) {
          cy.get('@eachElement').should(...a);
        } else {
          cy.get('@eachElement').should(a);
        }
      });
    });
  });
});
