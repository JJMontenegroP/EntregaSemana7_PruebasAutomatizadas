import { loginPage } from "../pages/logInPage";
import { pagesManagementPage } from "../pages/pagesManagementPage";
import PARAMETERS from "../../parameters";

const CONSTANTS = {
  PAGE_TITLE: "Test page title",
  PAGE_CONTENT: "Test page content",
};

beforeEach(() => {
  loginPage.login(PARAMETERS.USER_EMAIL, PARAMETERS.USER_PASSWORD);
  cy.wait(500);
  pagesManagementPage.goToPages();
});

//   Fifth Functionality -> Create a new page

describe("Page management functionality", () => {
  // First scenary -> Create a new page

  it("Should create a new page instantly.", () => {
    pagesManagementPage.elements.newPagebutton().click();
    pagesManagementPage.elements.pagetitleTextArea().type(CONSTANTS.PAGE_TITLE);
    pagesManagementPage.elements
      .pageContent()
      .invoke("text", CONSTANTS.PAGE_CONTENT);
    pagesManagementPage.elements.publushSpan().click();
    pagesManagementPage.elements.publushButton().click();
    pagesManagementPage.elements.notification().should("be.visible");
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Second scenary -> Schedule the creation a new page

  it("Should create a new page at an specific hour.", () => {
    pagesManagementPage.elements.newPagebutton().click();
    pagesManagementPage.elements.pagetitleTextArea().type(CONSTANTS.PAGE_TITLE);
    pagesManagementPage.elements
      .pageContent()
      .invoke("text", CONSTANTS.PAGE_CONTENT);
    pagesManagementPage.elements.publushSpan().click();
    pagesManagementPage.elements.scheduleForLatter().click({ force: true });
    pagesManagementPage.elements.scheduleButton().click();
    pagesManagementPage.elements.notification().should("be.visible");
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Third scenary -> Delete page

  it("Should delete a page created.", () => {
    pagesManagementPage.DeletePage();
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
