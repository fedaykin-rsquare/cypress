describe('RTB DEV End to End Test Case', { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });
  beforeEach(() => {
    cy.login();
  });

  it('부동산세일즈 > 오피스 > 매물관리 > 매물 지도 클릭', () => {
    cy.selectMenu('부동산세일즈', '오피스', '매물관리');
    cy.wait(5000);
    cy.get('.bld-card a').eq(1).invoke('attr', 'target', '_self').click();

  });

  // it('인테리어세일즈 > 인테리어 > 프로젝트 > 전체 프로젝트 목록 클릭', () => {
  //   // cy.get('#top-menu-1').click();
  //   // cy.get('#menu-list-container-1').get('#gnb-menu-list-item-sub').eq(2).click()
  //   // cy.get('#menu-list-container-1 .gnb-menu-list-item-sub').eq(2).click();
  //   // cy.get('.gnb-tabs-items .gnb-tabs-item').eq(1).click();
  //   cy.selectMenu('인테리어세일즈', '인테리어', '프로젝트', '전체 프로젝트 목록')
  //   cy.get('#btn-search-basic').click();
  // });
});