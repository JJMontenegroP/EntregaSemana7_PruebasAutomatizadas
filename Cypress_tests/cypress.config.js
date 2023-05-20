const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseURL: "http://localhost:2368",
    ghostV3: "http://localhost:2369",
    credentials: {
      email: "correoDePrueba@gmail.com",
      password: "@1234567890*",
    },
  },
});
