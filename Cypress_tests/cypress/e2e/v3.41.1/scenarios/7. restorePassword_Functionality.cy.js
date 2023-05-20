import { loginPage } from "../pages/logInPage";
import PARAMETERS from "../../parameters";

beforeEach(() => {
  loginPage.goToLogIn();
});

// Seventh Functionality -> Forgotten password

describe("Forgot password component", () => {
  // First scenary -> Forgotten password without email

  it("Should not work forgot password button without email.", () => {
    loginPage.elements.forgotButton().click({ force: true });
    cy.wait(800);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Second scenary -> Forgotten password with email

  it("Should  work forgot password button.", () => {
    loginPage.elements.emailInput().type(PARAMETERS.USER_EMAIL);
    loginPage.elements.forgotButton().click({ force: true });
    cy.wait(800);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
