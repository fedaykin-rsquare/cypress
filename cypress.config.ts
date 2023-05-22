import { defineConfig } from 'cypress';
require('dotenv').config();

export default defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://rtb.eng.rsquareon.com/',
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      // implement node event listeners here
    },
    // viewportWidth: 1680,
    // viewportHeight: 1050,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  env: {
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID || '',
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET || '',
    googleAccessToken: process.env.GOOGLE_ACCESS_TOKEN || '',
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN || '',
    googleEmail: process.env.GOOGLE_EMAIL || '',
    googlePassword: process.env.GOOGLE_PASSWORD || '',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000
});