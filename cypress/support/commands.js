// cypress/support/commands.js
Cypress.Commands.add('loginByGoogleApi', () => {
  cy.log('Logging in to Google');
  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    form: true,
    /* headers: {
      'content-type': ''
    } */
    body: {
      grant_type: 'refresh_token',
      client_id: Cypress.env('googleClientId'),
      client_secret: Cypress.env('googleClientSecret'),
      refresh_token: Cypress.env('googleRefreshToken'),
    },
    // failOnStatusCode: false
  }).then(({ body }) => {
    const { access_token, id_token } = body;

    cy.log('body :', body);

    cy.request({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body);
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      };

      // window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
      cy.visit('https://manage-dev.rsquare.co.kr/');
    });
  });
});

Cypress.Commands.add('loginToRTB', () => {
  cy.log('Login to RTB');

  const googleEmail = Cypress.env('googleEmail');
  const googlePassword = Cypress.env('googlePassword');

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

Cypress.on('uncaught:exception', (error, runnable, promise) => {
  return !error.message.includes('ResizeObserver loop limit exceeded');
});