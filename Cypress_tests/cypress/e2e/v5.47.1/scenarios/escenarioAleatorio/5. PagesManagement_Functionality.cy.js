import LoginPage from "../pages/LoginPage";
import CreatePage from "../pages/CreatePage"

const timestamp = Date.now();

const CONSTANTS = {
    PAGE_TITLE: `Test page title ${timestamp}`,
    PAGE_CONTENT: "Test page content",
  };

describe("Create new page on website", () => {
    beforeEach(() => {
    // Given that I am logged into my Ghost account
        LoginPage.visitLoginPage();
        LoginPage.fillEmailLogin();
        LoginPage.fillPasswordLogin();
        LoginPage.clickFormLogin();
    });
    it("Create new page on website", () => {
        
        // When: Go to Pages section and create a new page. ", () => {
            CreatePage.writeNewPage(CONSTANTS.PAGE_TITLE);
            cy.get("label").contains("Set it live now").click();
            CreatePage.confirmNewPage();

        // Then: should see the created page"
            cy.contains(CONSTANTS.PAGE_TITLE).eq(0).should("exist");
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });

    it("Create new page on website scheduled", () => {
    // When: Go to Pages section and create a new page scheduled. 
       
            CreatePage.writeNewPage(CONSTANTS.PAGE_TITLE);
            CreatePage.confirmAndSchedulePage();

    // Then: should see the created page scheduled"
            cy.contains(CONSTANTS.PAGE_TITLE);
            cy.contains('Scheduled')
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });

    it("Delete page", () => {
        // When: Go to Pages section and create a new page scheduled. 
           
                CreatePage.writeNewPage(CONSTANTS.PAGE_TITLE);
                CreatePage.confirmNewPage();
    
        // Then: should see the created page scheduled"
                cy.wait(3000);
                cy.get("a[href='#/pages/']").eq(0).click();
                cy.contains(CONSTANTS.PAGE_TITLE).click();
                cy.get('button[title="Settings"]').click();
                cy.contains(/Delete page/).click();
                cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
                cy.contains(CONSTANTS.PAGE_TITLE).should("not.exist");
                cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
        });
});