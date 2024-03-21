describe("Check if the button with text Send OTP and id='otpButton' is present", () => {
  it("Check if the button with text Send OTP is present", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#otpButton").should("contain.text", "Send OTP")  });
});

describe("Click the button to see the text change", () => {
  it("Check if the button with text Send OTP is present", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#otpButton").should("contain.text", "Send OTP").should("not.be.disabled");
    cy.get("#otpButton").click();
    cy.get("#otpButton").should("be.disabled");
    cy.get("#otpButton").should("contain.text", 4);
    cy.wait(1000);
    cy.get("#otpButton").should("contain.text", 3);
    cy.wait(1000);
    cy.get("#otpButton").should("contain.text", 2);
    cy.wait(1000);
    cy.get("#otpButton").should("contain.text", 1);
    cy.wait(1000);
    cy.get("#otpButton").should("contain.text", 0);
    cy.get("#otpButton").should("contain.text", "Send OTP").should("not.be.disabled");
  });
});
