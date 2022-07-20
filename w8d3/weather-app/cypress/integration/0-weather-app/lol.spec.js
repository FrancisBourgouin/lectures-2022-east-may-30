/// <reference types="cypress" />

describe("Testing weather app", () => {
  it("Searches on google properly", () => {
    cy.visit("https://google.com");

    cy.get(".gLFyf").type("Einstein-Rosen Bridge{enter}");

    cy.get(":nth-child(1) > .g > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb").should(
      "contain.text",
      "Wormhole"
    );
  });
});
