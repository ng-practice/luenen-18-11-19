describe('When a user is logged into the chat', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.login('Star Lord');
  });

  it('should add a message to the conversation ', () => {
    cy.get('eb-publish-message > .ui-inputtext').type(
      'Guardians of the Galaxy'
    );
    cy.get('eb-publish-message > .ui-button').click();

    cy.get('p-card > .ui-card > .ui-card-body > .ui-card-content').should(
      'contain',
      'Guardians of the Galaxy'
    );
  });

  afterEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.get('eb-clear-history').click();
  });
});
