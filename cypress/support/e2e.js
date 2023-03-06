import './commands';

Cypress.on('uncaught:exception', (error) => {
  cy.log(error);
  return !error.message.includes('ResizeObserver loop limit exceeded');
});