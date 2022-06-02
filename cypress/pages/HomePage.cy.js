describe('HomePage.cy.js', () => {
  beforeEach(() => {
    cy.mountHomePage();
  });

  it('should be show button', () => {
    cy.findByTestId('custom-button').should('exist');
    cy.findByTestId('homepage-title').should('exist');
  });
});
