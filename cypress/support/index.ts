import { BottomMenuType, MenuList, MiddleMenuTitleType, MiddleMenuType, TopMenuType } from './common/menu';
import '@cypress/code-coverage/support';

declare global {
  namespace Cypress {
    interface Chainable {
      loginToRTB(): void;
      login(): void;
      selectMenu(topMenu: TopMenuType, middleTitleMenu: MiddleMenuTitleType, middleMenu: MiddleMenuType, bottomMenu?: BottomMenuType): void;
    }
  }
}

Cypress.Commands.add('loginToRTB', () => {
  cy.log('-- RTB 로그인 시작 --');

  const googleEmail = Cypress.env('googleEmail');
  const googlePassword = Cypress.env('googlePassword');

  cy.log('-- 구글 이메일 & 비밀번호 존재 확인 --');
  expect(googleEmail).to.not.eq('');
  expect(googlePassword).to.not.eq('');

  cy.get('.google-login').click();

  cy.origin('https://accounts.google.com/', { args: { googleEmail, googlePassword }, }, ({ googleEmail, googlePassword }) => {
    Cypress.on('uncaught:exception', (error, runnable, promise) => {
      return !error.message.includes('ResizeObserver loop limit exceeded');
    });

    cy.location().then((location) => {
      expect(location.host).to.eq('accounts.google.com');
    });

    // cy.$$('#identifierId').val(googleEmail);
    cy.get('input[type=email]').type(googleEmail);
    cy.get('div').contains('다음').click();

    cy.get('input[type=password]').type(googlePassword, { log: false });
    cy.get('div').contains('다음').click();
  });
});

Cypress.Commands.add('login', () => {
  cy.log('-- RTB 로그인 시작 --');

  const googleEmail = Cypress.env('googleEmail');
  const today = new Date();
  const monthDayHours: string = (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0') + today.getHours().toString().padStart(2, '0');
  const requestUrl: string = `${Cypress.config().baseUrl}/auth/token/${monthDayHours}?email=${googleEmail}`;

  cy.request(requestUrl).then((response) => {
    cy.log('response : ', response);
  });
});

Cypress.Commands.add('selectMenu', (topMenu: TopMenuType = '', middleTitleMenu: MiddleMenuTitleType = '', middleMenu: MiddleMenuType = '', bottomMenu: BottomMenuType = '') => {
  cy.log('-- 메뉴 선택 --');
  console.log;

  cy.log('-- 메뉴 입력값 확인 --');
  expect(topMenu).to.not.eq('');
  expect(middleTitleMenu).to.not.eq('');
  expect(middleMenu).to.not.eq('');
  // expect(bottomMenu).to.not.eq('')

  cy.log('-- 메뉴 위치 확인 --');
  const topMenuClassName = '#top-menu';
  const middleMenuTitleClassName = '#menu-list-container';
  const middleMenuClassName = '.gnb-menu-list-item-sub';
  const bottomMenuClassName = '.gnb-tabs-items .gnb-tabs-item';
  const topMenuIndex = MenuList.findIndex(menu => menu.label === topMenu);
  const middleMenuTitleIndex = MenuList[topMenuIndex].subMenuList.findIndex(menu => menu.label === middleTitleMenu);
  const middleMenuIndex = MenuList[topMenuIndex].subMenuList[middleMenuTitleIndex].subMenuList.findIndex(menu => menu.label === middleMenu);
  const bottomMenuIndex = (bottomMenu && bottomMenu !== '') ? MenuList[topMenuIndex].subMenuList[middleMenuTitleIndex].subMenuList[middleMenuIndex].subMenuList.findIndex(menu => menu.label === bottomMenu) : -1;

  expect(topMenuIndex).to.gte(0);
  expect(middleMenuTitleIndex).to.gte(0);
  expect(middleMenuIndex).to.gte(0);

  if (bottomMenu && bottomMenu !== '') {
    expect(bottomMenuIndex).to.gte(0);
  }

  cy.log('-- 입력된 메뉴 이동 --');

  cy.get(`${topMenuClassName}-${topMenuIndex}`).click();
  cy.get(`${middleMenuTitleClassName}-${middleMenuTitleIndex} ${middleMenuClassName}`).eq(middleMenuIndex).click();

  if (bottomMenuIndex >= 0) {
    cy.get(bottomMenuClassName).eq(bottomMenuIndex).click();
  }
});

Cypress.on('uncaught:exception', (error, runnable, promise) => {
  return !error.message.includes('ResizeObserver loop limit exceeded');
});