Cypress.Commands.add('login', (nickName: string) => {
  cy.get('input[pinputtext]').type(nickName);
  cy.get('.ui-button-text').click();
});

declare namespace Cypress {
  interface Chainable {
    login: (nickName: string) => void;
  }
}
