describe("Login Authentication", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("successfully loads and redirects to dashboard", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
    cy.get(".inputUsername")
      .type("fran.felicioni")
      .should("have.value", "fran.felicioni");
    cy.get(".inputPassword").type("1234").should("have.value", "1234");

    cy.contains("LOGIN").click();

    cy.url().should("include", "/");
  });

  it("succesfully loads", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
    cy.get(".inputUsername")
      .type("incorrectUser")
      .should("have.value", "incorrectUser");
    cy.get(".inputPassword")
      .type("incorrectPassword")
      .should("have.value", "incorrectPassword");

    cy.contains("LOGIN").click();

    cy.url().should("include", "/login");
  });
});
