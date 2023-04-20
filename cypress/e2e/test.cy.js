/// <reference types="cypress" />

describe("End to end tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4173/mf-technical-test/");
  });

  it("opens application to step 1", () => {
    cy.get("label").should("have.text", "Quel est votre prénom ?");
    cy.get("input#firstName").should("exist");
    cy.get("input#firstName").should("be.focused");
    cy.get("button").should("have.length", 1);
  });

  it("displays error state if next button clicked without filling input", () => {
    cy.get("button").click();
    cy.get("input#firstName").should("have.class", "border-b-red-600");
  });

  it("goes to step 2 if correct input is given", () => {
    cy.get("input#firstName").focus().type("Pierre");
    cy.get("input#firstName").should("have.value", "Pierre");
    cy.get("button").click();
    cy.get("label").should("have.text", "Quel est votre nom de famille ?");
    cy.get("input#lastName").should("exist");
    cy.get("input#lastName").should("be.focused");
    cy.get("button").should("have.length", 2);
  });

  it("goes to step 3 if correct input is given", () => {
    cy.get("input#firstName").focus().type("Pierre");
    cy.get("input#firstName").should("have.value", "Pierre");
    cy.get("button").click();
    cy.get("input#lastName").focus().type("Chatard");
    cy.get("input#lastName").should("have.value", "Chatard");
    cy.get("button:nth-of-type(2)").click();
    cy.get("label").should("have.text", "Quelle est votre date de naissance ?");
    cy.get("input#birthDate").should("exist");
    cy.get("input#birthDate").should("be.focused");
    cy.get("button").should("have.length", 2);
  });

  it("goes to result page if correct input is given", () => {
    cy.get("input#firstName").focus().type("Pierre");
    cy.get("input#firstName").should("have.value", "Pierre");
    cy.get("button").click();
    cy.get("input#lastName").focus().type("Chatard");
    cy.get("input#lastName").should("have.value", "Chatard");
    cy.get("button:nth-of-type(2)").click();
    cy.get("input#birthDate").focus().type("1997-05-01");
    cy.get("button:nth-of-type(2)").click();
    cy.location("pathname").should("include", "result");
  });
});
