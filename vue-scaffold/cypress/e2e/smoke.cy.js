describe('Smoke Test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.getByData('test-heading').contains('loaded');
  });
});
