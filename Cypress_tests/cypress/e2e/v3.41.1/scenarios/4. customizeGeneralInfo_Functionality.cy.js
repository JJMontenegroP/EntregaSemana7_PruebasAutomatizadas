import { loginPage } from "../pages/logInPage";
import { generalSettingsPage } from "../pages/generalSettingsPage";
import PARAMETERS from "../../parameters";

beforeEach(() => {
  loginPage.login(PARAMETERS.USER_EMAIL, PARAMETERS.USER_PASSWORD);
  cy.wait(500);
  generalSettingsPage.goToGeneralSettings();
});

//   Fourth Functionality -> Change general Settings

describe("Customize general information functionality", () => {
  // First scenary -> Modify general setings of the site

  it("Should modify general setings of the site.", () => {
    generalSettingsPage.elements.titleDescriptionExpandbutton().click();
    generalSettingsPage.elements
      .siteNameInput()
      .click({ force: true })
      .clear({ force: true })
      .type("New Title Test", { force: true });
    generalSettingsPage.elements
      .siteNameDescription()
      .click({ force: true })
      .clear({ force: true })
      .type("New Description Test", { force: true });
    generalSettingsPage.elements.saveButton().click();
    generalSettingsPage.elements
      .saveButton()
      .contains("span", "Saved")
      .should("be.visible");
    cy.wait(1000);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });

  // Second scenary -> Modify setings of the timezone y language

  it("Should modify setings of the timezone y language.", () => {
    generalSettingsPage.elements.timezoneExpandbutton().click();
    generalSettingsPage.elements.timezoneSelector().select("America/Bogota");
    generalSettingsPage.elements.saveButton().click();
    generalSettingsPage.elements.closebutton().click({ force: true });
    generalSettingsPage.elements.languageExpandbutton().click();
    generalSettingsPage.elements
      .languageInput()
      .clear({ force: true })
      .type("es", { force: true });
    generalSettingsPage.elements
      .saveButton()
      .contains("span", "Saved")
      .should("be.visible");
    cy.wait(500);
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });
});
