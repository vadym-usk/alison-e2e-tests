import { defineConfig } from "cypress";
import alisonFixtures from './cypress/fixtures/alison-fixtures.json';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      baseUrl: process.env.CYPRESS_BASE_URL,
      email: process.env.CYPRESS_USER_EMAIL,
      password: process.env.CYPRESS_USER_PASSWORD,
      testData: alisonFixtures,
    },
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
