describe('When I try to run cypress with typescript', () => {
  beforeEach(() => cy.visit('http://localhost:4200'));

  it('should work', () => {
    cy.get('h1').contains('Chat');
  });
});
