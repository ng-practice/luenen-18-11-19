import { MockedChatServer } from '../support/chat-server.mock';

describe('When I try to run cypress with typescript', () => {
  let server: MockedChatServer;
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    server = new MockedChatServer();
  });

  it('should work', () => {
    cy.get('h1').contains('Chat');
  });
});
