const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://homolog-sigma.decea.mil.br/sigma-ui/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
