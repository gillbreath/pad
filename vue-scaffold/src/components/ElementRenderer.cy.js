import ElementRenderer from './ElementRenderer.vue';

describe('<ElementRenderer />', () => {
  it('mounts', () => {
    cy.mount(ElementRenderer);
  });

  it('mounts an anchor', () => {
    cy.mount(ElementRenderer, {
      props: {
        elementsArray: [
          {
            elementType: 'a',
            class: 'foo',
            href: '#',
            innerHtml: 'keedl'
          }
        ]
      }
    });

    cy.get('a')
      .should('be.visible')
      .should('have.class', 'foo');
  });
});
