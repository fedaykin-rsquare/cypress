/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('RTB DEV End to End Test Case', () => {
  beforeEach(() => {
    cy.visit('https://manage-dev.rsquare.co.kr/');
  });

  it('로그인 버튼 클릭', () => {
    const googleEmail = Cypress.env('googleEmail');
    const googlePassword = Cypress.env('googlePassword');

    cy.get('.google-login').click();

    cy.origin('https://accounts.google.com', { args: { googleEmail, googlePassword }, }, ({ googleEmail, googlePassword }) => {
      cy.$$('#identifierId').val(googleEmail);
      // cy.get('input[type=email]').type(googleEmail);
      cy.get('div').contains('다음').click();

      // cy.wait(10000);

      // cy.get('input[type=password]');
      // cy.get('input[type=password]').type(googlePassword);


      // cy.get('.VfPpkd-RLmnJb').eq(1).click();

      // cy.get('div').contains('다음');  

      /* cy.wait(10000).then(() => {
        cy.get('input[type=password]').type(googlePassword);
        cy.get('.VfPpkd-RLmnJb:(1)').click();
      }); */
    });

    // cy.wait(10000);
  });

  after(() => {
    cy.get('input[type=password]');
  });

  /*  it('비밀번호 입력', () => {
     cy.get('input[type=password]');
   }); */
  // cy.origin('https://accounts.google.com', { args: { googlePassword }, }, ({ googlePassword }) => {
  //   cy.get('input[type=password]').type(googlePassword);
  // });


  // describe('구글 로그인', () => {
  //   beforeEach(() => {
  //     cy.loginByGoogleApi();
  //   });

  //   if ('구글 로그인 버튼 클릭', () => {
  //     cy.get('.google-login').click();
  //   });
  // });
});
