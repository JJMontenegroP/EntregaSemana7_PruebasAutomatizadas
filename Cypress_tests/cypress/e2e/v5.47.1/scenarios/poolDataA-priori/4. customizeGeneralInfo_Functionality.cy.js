import LoginPage from "../pages/LoginPage";

describe("Customize general information", () => {
        beforeEach(() => {
            // Given that I am logged into my Ghost account

            LoginPage.visitLoginPage();
            LoginPage.fillEmailLogin();
            LoginPage.fillPasswordLogin();
            LoginPage.clickFormLogin();
        });
        it("Change publication information regarding timezone and language", () => {

            //When: Go to the Settings page and save the timezone and language of the website
            
                cy.get("a[href='#/settings/']").click();
                cy.get("a[href='#/settings/general/']").click();
                cy.get("button[data-test-toggle-timezone]").click();
                cy.get("#timezone").select("America/Bogota");
                cy.get("button[data-test-toggle-timezone]").click();
                cy.get("button[data-test-toggle-lang]").click();
                const field = cy.get("input[data-test-input='locale']");
                field.clear();
                field.type("es");
                cy.get("button[data-test-toggle-lang]").click();
                cy.get("button").contains(/Save/).click();
            // Then: should validate timezone
                cy.get("button").contains(/Saved/).should('exist');
                cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
       });


       it("Change publication information regarding title and description", () => {
        // "When: Go to the Settings page and save the title and description of the website. 
       
            cy.get("a[href='#/settings/']").click();
            cy.get("a[href='#/settings/general/']").click();
            cy.get("button").contains("Expand").click();
            cy.get("input[data-test-title-input]").clear().type("New Title Test");
            cy.get("input[data-test-description-input]").clear().type("New Description Test");
            cy.get("button").contains(/Save/).click();
            
        // Then: should display new title and description on website page
            cy.get("button").contains(/Saved/).should('exist');
            cy.get("a[href='#/site/']").click();
            cy.contains("New Title Test").should("exist");
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });
});
