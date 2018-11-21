describe('Login', () => {
  describe('When a user enters a nickname', () => {
    it('should enter the chat room', () => {
      cy.visit('http://localhost:4200');
      cy.login('Groot');
      // cy.get('input[pinputtext]').type('Groot');
      // cy.get('.ui-button-text').click();

      cy.url().should('contain', 'chat');
    });
  });

  afterEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
  });
});
