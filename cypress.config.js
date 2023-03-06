const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    port: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
    // supportFile: true,
  },
  env: {
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleEmail: process.env.GOOGLE_EMAIL || '',
    googlePassword: process.env.GOOGLE_PASSWORD || '',
  },
  chromeWebSecurity: false,
});