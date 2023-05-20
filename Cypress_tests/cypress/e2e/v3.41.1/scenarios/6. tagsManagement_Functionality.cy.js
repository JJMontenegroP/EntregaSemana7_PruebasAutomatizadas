import { loginPage } from "../pages/logInPage";
import { tagsManagementPage } from "../pages/tagsManagementPage";
import PARAMETERS from "../../parameters";

const CONSTANTS = {
  TAG_NAME: "test",
  TAG_COLOR: "39ff14",
  TAG_IMAGE: "cypress/fixtures/cypress2.png",
  TAG_DESCRIPTION: "Test tag description",
};

beforeEach(() => {
  loginPage.login(PARAMETERS.USER_EMAIL, PARAMETERS.USER_PASSWORD);
  cy.wait(500);
  tagsManagementPage.goToTags();
});

// Sixth Functionality -> tag management functionality

describe("Manage ghost application tags", () => {
  // First scenary -> Create a new tag

  it("Should create a new tag.", () => {
    tagsManagementPage.createTag(
      CONSTANTS.TAG_NAME,
      CONSTANTS.TAG_COLOR,
      CONSTANTS.TAG_IMAGE,
      CONSTANTS.TAG_DESCRIPTION
    );
    tagsManagementPage.elements
      .saveButton()
      .contains("span", "Saved")
      .should("be.visible");
    cy.wait(500);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Second scenary -> Delete a tag

  it("Should delete a tag created.", () => {
    tagsManagementPage.deleteTag();    
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
