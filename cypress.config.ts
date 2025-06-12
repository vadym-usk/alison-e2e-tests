import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://alison.com',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    watchForFileChanges: false,
    retries: 3,
    defaultCommandTimeout: 10000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
    },
  },
});
