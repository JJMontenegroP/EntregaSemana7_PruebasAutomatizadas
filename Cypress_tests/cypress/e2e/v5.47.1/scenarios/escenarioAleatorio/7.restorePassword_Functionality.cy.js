import LoginPage from "../pages/LoginPage";

describe("Verify that a password recovery message is not sent", () => {
        beforeEach(() => {
            LoginPage.visitLoginPage();
            LoginPage.fillEmailLogin();
        });
        it("Then: displays an error message if email delivery fails ' ", () => {
                cy.get("button").contains("Forgot").click();
                cy.contains("Failed to send email. Reason: Sending failed.").should("exist");
                cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
        });
});
