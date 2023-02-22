/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('RTB DEV End to End Test Case', () => {
  it('RTB DEV 접속', () => {
    cy.visit('https://manage-dev.rsquare.co.kr/');
  });

  describe('구글 로그인', () => {
    beforeEach(() => {
      cy.loginByGoogleApi();
    });

    // cy.get('로그인 버튼명').click()
  });
});
