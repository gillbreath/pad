// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.getByData("test-heading").contains('loaded')
  })
  it('visits the about url', () => {
    cy.visit('/about')
    cy.get("h1").contains('About view')
  })
})
