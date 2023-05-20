import CreateTag from "../pages/CreateTag";
import LoginPage from "../pages/LoginPage";

const timestamp = Date.now();

const CONSTANTS = {
    TAG_TITLE: `Test tag title ${timestamp}`,
  };

describe("Management tags on website", () => {
    beforeEach(() => {
        // Given that I am logged into my Ghost account
        LoginPage.visitLoginPage();
        LoginPage.fillEmailLogin();
        LoginPage.fillPasswordLogin();
        LoginPage.clickFormLogin();
    });
    it("Create new tag", () => {
        CreateTag.newTag(CONSTANTS.TAG_TITLE);
        cy.contains(CONSTANTS.TAG_TITLE).eq(0).should("exist");
        cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });

    it("Delete tag", () => {
        CreateTag.newTag(CONSTANTS.TAG_TITLE);
        CreateTag.deleteTag(CONSTANTS.TAG_TITLE);
        cy.contains(CONSTANTS.TAG_TITLE).eq(0).should("exist");
        cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });
});
