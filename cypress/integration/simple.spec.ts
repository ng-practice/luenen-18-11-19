describe('When I try to run cypress with typescript', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should work', () => {
    cy.get('.ui-card-title').contains('Login');
  });

  afterEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
  });
});
