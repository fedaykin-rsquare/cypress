/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('RTB DEV End to End Test Case', () => {
  beforeEach(() => {
    cy.visit('https://manage-dev.rsquare.co.kr/');
  });

  /* it('구글 로그인', () => {
  }); */

  it('로그인 버튼 클릭', () => {
    // cy.loginByGoogleApi();
    cy.get('.google-login').click();
    cy.get('#identifierId').type('fedaykin@rsquare.co.kr');
    cy.get('.VfPpkd-RLmnJb').click();
    cy.get('#password input[type=password]').type('1234');
    cy.get('.VfPpkd-RLmnJb').click();
  });

  // describe('구글 로그인', () => {
  //   beforeEach(() => {
  //     cy.loginByGoogleApi();
  //   });

  //   if ('구글 로그인 버튼 클릭', () => {
  //     cy.get('.google-login').click();
  //   });
  // });
});
