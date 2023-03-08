
describe('RTB DEV End to End Test Case', { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });
  beforeEach(() => {
    cy.visit('https://manage-dev.rsquare.co.kr/');

    cy.get('body').then((body) => {
      if (body.find('.google-login').length > 0) {
        cy.loginToRTB();
      } else {
        return;
      }
    });
  });

  it('부동산세일즈 > 오피스 > 매물관리 > 매물 지도 클릭', () => {
    cy.get('#top-menu-0').click();
    cy.get('.gnb-menu-list-item-sub').eq(0).click();
    cy.get('.bld-card a').eq(1).invoke('attr', 'target', '_self').click();
    // expect(cy.get('.gnb-tabs-path').eq(0)).to.include('BLD00039446');
    // cy.wait(5000);

    // cy.get('.bld-card-list').children().should('have.length.gt', 0);

  });

  it('인테리어세일즈 > 인테리어 > 프로젝트 > 전체 프로젝트 목록 클릭', () => {
    cy.get('#top-menu-1').click();
    // cy.get('#menu-list-container-1').get('#gnb-menu-list-item-sub').eq(2).click()
    cy.get('#menu-list-container-1 .gnb-menu-list-item-sub').eq(2).click();
    cy.get('.gnb-tabs-items .gnb-tabs-item').eq(1).click();
    cy.get('#btn-search-basic').click();
  });
});