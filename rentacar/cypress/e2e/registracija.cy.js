describe("registracija", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/registracija");
  });

  it("Registracija je uspješna", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#ime").clear();
    cy.get("#ime").type('Daria');
    cy.get("#prezime").clear();
    cy.get("#prezime").type('Pajovic');
    cy.get("#adresa").clear();
    cy.get("#adresa").type('Ulica 1');
    cy.get("#postanski").clear();
    cy.get("#postanski").type('51000');
    cy.get("#mjesto").clear();
    cy.get("#mjesto").type('Rijeka');
    cy.get("#kontakt").clear();
    cy.get("#kontakt").type('0958974589');
    cy.get("#email").clear();
    cy.get("#email").type('dpajovic@veleri.hr');
    cy.get("#korisnicko").clear();
    cy.get("#korisnicko").type('Darchy');
    cy.get("#lozinka").clear();
    cy.get("#lozinka").type('13Lipanj2024@');
    cy.get("#button-test").click();
    cy.wait(5000);

    cy.url().should('include', 'http://localhost:3000/prijava');
  });


});