import LoginPage from "../../pages/LoginPage";
import CreatePage from "../../pages/CreatePage"

const timestamp = Date.now();

const CONSTANTS = {
    PAGE_DATA_FILE: "../e2e/v5.47.1/scenarios/poolDataA-priori/data/5. PagesManagement_Functionality/mock_data_standar_pages.json",
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
        cy.fixture(CONSTANTS.PAGE_DATA_FILE).then(pages => {
                pages.forEach(page=>{
                        // When: Go to Pages section and create a new page. ", () => {
                        CreatePage.writeNewPage(page.Title, page.content);
                        cy.get("label").contains("Set it live now").click();
                        CreatePage.confirmNewPage();
                        
                        // Then: should see the created page"
                        cy.contains(page.Title).eq(0).should("exist");
                });
        });
    });

    it("Create new page on website scheduled", () => {
        cy.fixture(CONSTANTS.PAGE_DATA_FILE).then(pages => {
                pages.forEach(page=>{
                        // When: Go to Pages section and create a new page scheduled. 
                        CreatePage.writeNewPage(page.Title, page.content);
                        CreatePage.confirmAndSchedulePage();

                        // Then: should see the created page scheduled"
                        cy.contains(page.Title);
                        cy.contains('Scheduled')
                });
        });
    });

    it("Delete page", () => {
        cy.fixture(CONSTANTS.PAGE_DATA_FILE).then(pages => {
                pages.forEach(page=>{
                // When: Go to Pages section and create a new page scheduled. 
                
                        CreatePage.writeNewPage(page.Title, page.content);
                        CreatePage.confirmNewPage();
        
                // Then: should see the created page scheduled"
                        cy.wait(3000);
                        cy.get("a[href='#/pages/']").eq(0).click();
                        cy.contains(page.Title).click();
                        cy.get('button[title="Settings"]').click();
                        cy.contains(/Delete page/).click();
                        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").click();
                        cy.contains(page.Title).should("not.exist");
                        });
                });
        });
});