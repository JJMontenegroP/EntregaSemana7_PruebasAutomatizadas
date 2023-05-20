import { signInPage } from "../pages/signInPage";
import { loginPage } from "../pages/logInPage";
import PARAMETERS from "../../parameters";

const ghostUrl = Cypress.env("ghostV3");

const CONSTANTS = {
  ERROR_LABELS: [
    "Please enter a blog title.",
    "Please enter a name.",
    "Please enter an email.",
    "Password must be at least 10 characters long",
  ],
  MAIN_ERROR_LABEL: "Please fill out the form to setup your blog.",
  INVALID_EMAIL_ERROR: "Invalid Email.",
};

// First Functionality -> Create Ghost account

describe("Create ghost account Functionality", () => {
  // First scenary -> All the imput elements in the SignIn module are empty

  it("Should not allow to create a new ghost account when the inputs are empty", () => {
    const signupUrl = `${ghostUrl}/ghost/#/setup/two`;
    cy.visit(signupUrl);

    signInPage.elements.createAccountButton().click();

    signInPage.elements
      .inputErrors()
      .should("have.length", 4)
      .each((response, index) => {
        expect(Cypress.$(response).text()).to.contain(
          CONSTANTS.ERROR_LABELS[index]
        );
      });

    cy.wait(500);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);

    signInPage.elements
      .mainError()
      .should("have.length", 1)
      .should("contain", CONSTANTS.MAIN_ERROR_LABEL);
  });

  // Second scenary -> The eamil input has the wrong format

  it("should not allow to create a new ghost account when email is invalid", () => {
    signInPage.createAccount(
      PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.WRONG_FORMAT_EMAIL,
      PARAMETERS.USER_PASSWORD
    );

    signInPage.elements
      .inputErrors()
      .should("have.length", 4)
      .should("contain", CONSTANTS.INVALID_EMAIL_ERROR);
    
    cy.wait(500);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Third scenary -> The Password input has the wrong format

  it("should not allow to create a new ghost account when the password has less than 10 characters", () => {
    signInPage.createAccount(
      PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.USER_EMAIL,
      PARAMETERS.WRONG_FORMAT_PASSWORD
    );

    signInPage.elements
      .inputErrors()
      .should("have.length", 4)
      .should("contain", CONSTANTS.ERROR_LABELS[3]);

      cy.wait(500);
      cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Fourth scenary -> All the inputs are valid

  it("should create the account with all the valid inputs", () => {
    signInPage.createAccount(
      PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.USER_EMAIL,
      PARAMETERS.USER_PASSWORD
    );

    signInPage.elements.skipNormalFlowButton().click(); 
    cy.visit(`${ghostUrl}/ghost/#/signout`);
    loginPage.login(PARAMETERS.USER_EMAIL, PARAMETERS.USER_PASSWORD);

    cy.wait(500);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
