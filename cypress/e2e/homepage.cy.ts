describe('Homepage Test', () => {
  it('visits the homepage', () => {
    cy.visit('/');
    cy.contains('h1', 'The Forge Awakens');
  });
});
