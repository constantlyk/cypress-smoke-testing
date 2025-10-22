const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Get URLs from cypress.env.json
      const urlA = config.env.SHIPYARD_URL_A;
      const urlB = config.env.SHIPYARD_URL_B;

      // Randomly select between the two URLs
      const urls = [urlA, urlB];
      const selectedUrl = urls[Math.floor(Math.random() * urls.length)];

      config.baseUrl = selectedUrl;

      console.log(`Using baseUrl: ${config.baseUrl}`);

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
})
