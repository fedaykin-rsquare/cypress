/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('connect rtb dev', () => {
  it('connect rtb dev', () => {
    cy.visit('https://manage-dev.rsquare.co.kr/');
  });
});

describe('google login', () => {
  beforeEach(() => {
    cy.loginByGoogleApi();
  });
});