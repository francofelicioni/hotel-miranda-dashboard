describe("Login Authentication", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  specify("successfully loads and redirects to dashboard", () => {
    cy.get(".user")
      .type("fran.felicioni", { delay: 100 })
      .should("have.class", "user");
    cy.get(".password")
      .type("1234", { delay: 100 })
      .should("have.class", "password");

    cy.contains("Sign In").click();
    cy.wait(5000);
  });
});

describe("Login Authentication", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("succesfully loads", () => {
    cy.get(".user").type("something wrong").should("have.class", "user");
    cy.get(".password").type("password").should("have.value", "password");

    cy.contains("Sign In").click();
  });
});
