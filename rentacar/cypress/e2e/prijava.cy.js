describe("prijava", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/prijava");
  });

  it("prijava je uspješna", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#email").clear();
    cy.get("#email").type("ebegic1@veleri.hr");
    cy.get("#lozinka").clear();
    cy.get("#lozinka").type("Emina123@");
    cy.get("#button-test").click();
    cy.wait(5000);

    cy.url().should('include', 'http://localhost:3000/pocetna');
  });

  it("pogresan email", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#email").clear();
    cy.get("#email").type("test@gmail.com");
    cy.get("#lozinka").clear();
    cy.get("#lozinka").type("PogresnaLozinka");
    cy.get("#button-test").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("pogresna lozinka", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#email").clear();
    cy.get("#email").type("ebegic1@veleri.hr");
    cy.get("#lozinka").clear();
    cy.get("#lozinka").type("Test");
    cy.get("#button-test").click();
    /* ==== End Cypress Studio ==== */
  });
});