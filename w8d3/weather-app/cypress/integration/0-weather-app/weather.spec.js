/// <reference types="cypress" />

describe("Testing weather app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Search for a city, see the weather for that city", () => {
    const city = "Montréal";
    const cityTest = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cy.get(".CityForm input").type(city);

    cy.get(".CityForm button").click();

    cy.get("section.CurrentWeather h1").should("have.text", cityTest);
  });

  it("Search for valid city, button appears (once)", () => {
    // Search for city
    cy.get(".CityForm input").type("Barrie");
    cy.get(".CityForm button").click();

    // Check for button
    cy.get("section.CityList button").should("have.length", 1);
    cy.get("section.CityList button").first().should("have.text", "Barrie");

    // Search for same city
    cy.get(".CityForm input").type("Winnipeg");
    cy.get(".CityForm button").click();

    // Search for same city
    cy.get(".CityForm input").type("Barrie");
    cy.get(".CityForm button").click();

    // Check for button
    cy.get("section.CityList button").should("have.length", 2);
  });

  it("Current weather should not be shown unless we have data / valid data", () => {
    cy.get(".CityForm").should("exist");
    cy.get("section.CurrentWeather").should("not.exist");

    // Search for same city
    cy.get(".CityForm input").type("Wiggle wiggle city");
    cy.get(".CityForm button").click();

    cy.get("section.CurrentWeather").should("not.exist");
  });

  it("Clicking on city button should show weather for that city", () => {
    // Search for city
    cy.get(".CityForm input").type("Barrie");
    cy.get(".CityForm button").click();

    // Search for another city
    cy.get(".CityForm input").type("Winnipeg");
    cy.get(".CityForm button").click();

    cy.get(".CityList button").first().click();

    cy.get("section.CurrentWeather h1").should("have.text", "Barrie");
  });
});
