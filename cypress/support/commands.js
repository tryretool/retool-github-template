/**
 * Navigation
 */

Cypress.Commands.add(
  "login",
  (email = "admin@seed.retool.com", password = "password") => {
    cy.visit("http://localhost:3000");
    cy.get("#email").type(email);
    cy.get("#password").type(password + "\n");
    cy.wait;
  }
);

Cypress.Commands.add("selectFolder", name => {
  cy
    .get(`.folder-filters > [href="/folders/${name}"]`)
    .first()
    .click({ force: true });
});

Cypress.Commands.add("viewApp", name => {
  cy
    .get("input.application-listing-search")
    .focus()
    .type(name);

  cy.get(".listing-item-inner").click();
});

/**
 * Getting a component
 */

Cypress.Commands.add("getComponent", id => {
  return cy.get(`._retool-${id}`, { timeout: 60000 });
});

Cypress.Commands.add("getComponentInCurrentTab", id => {
  return cy.get(`.ant-tabs-tabpane-active ._retool-${id}`, { timeout: 60000 });
});

Cypress.Commands.add("getComponentFromListView", (id, index) => {
  return cy.get(`.listview-item > ._retool-${id}`).eq(index);
});

/**
 * Table
 */

Cypress.Commands.add("getTableCell", (tableId, coord) => {
  const columnIndex = coord.column;
  const rowIndex = coord.row;
  return cy.get(
    `._retool-${tableId} .rt-tr-group:nth-child(${rowIndex +
      1}) > .rt-tr > .rt-td:nth-child(${columnIndex +
      1}) > .cell-container > .inner-cell-container`,
    { timeout: 60000 }
  );
});

Cypress.Commands.add("goToPrevPage", tableId => {
  return cy
    .get(
      `._retool-${tableId}  .ReactTable .-pagination > .-center > .-previous > .ant-btn > .retool-icon`,
      {
        timeout: 60000
      }
    )
    .click();
});

Cypress.Commands.add("goToNextPage", tableId => {
  return cy
    .get(
      `._retool-${tableId}  .ReactTable .-pagination > .-center > .-next > .ant-btn > .retool-icon`,
      {
        timeout: 60000
      }
    )
    .click();
});

/**
 * Dropdown
 */

Cypress.Commands.add("getDropdownComponent", id => {
  return cy
    .get(`._retool-container-${id}`, { timeout: 60000 })
    .find(".select-component__input");
});

Cypress.Commands.add("getCurrentActiveDropdownMenu", () => {
  return cy
    .get(".ant-select-dropdown ul.ant-select-dropdown-menu")
    .should("exist");
});
