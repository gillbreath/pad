import mainPad from '../../../main.pad.js'

describe('Smoke Test', () => {
  it('visits the dynamic routes', () => {
    Object.entries(mainPad.pageRoutes).forEach(pageRoute => {
      const [pageRouteKey, pageRouteValue] = pageRoute;
      cy.visit(pageRouteValue.path || '/' + pageRouteKey);
      cy.get(pageRouteValue.content[0].elementType);
    });
  });
});
