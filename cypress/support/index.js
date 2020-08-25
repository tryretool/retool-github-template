// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "./commands";

before(() => {
  cy.exec("./cypress/support/cmdutils/countorgs.sh").then((result) => {
    const { code, stderr, stdout } = result;
    if (stdout === "0") {
      cy.visit("http://localhost:3000/auth/signup");
      cy.visit("http://localhost:3000/auth/signup");
      cy.get("#firstName").type("example");
      cy.get("#lastName").type("account");
      cy.get("#email").type("admin@seed.retool.com");
      cy.get("#password").type("password" + "\n");
      cy.wait;
    }
  });
});

beforeEach(() => {
  cy.exec("./cypress/support/cmdutils/logout.sh");
});
