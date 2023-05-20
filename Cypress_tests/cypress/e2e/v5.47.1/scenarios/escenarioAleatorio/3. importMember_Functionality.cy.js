import LoginPage from "../pages/LoginPage";
import MemberPage from "../pages/MemberPage";

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS = {}

describe("Import members with CSV file", () => {
    beforeEach( () => {
        LoginPage.visitLoginPage();
    });

    it("Import a valid CSV", () => {
        
        // Given that I am logged into my Ghost account
            LoginPage.fillEmailLogin();
            LoginPage.fillPasswordLogin();
            LoginPage.clickFormLogin();

        // When Validate whether the members have been saved correctly through a CSV file
            MemberPage.goToMemberPage();
            MemberPage.importCSV();
            
        // Then: A table should exist showing the created members
            cy.get("table").should("exist")
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });

    it("Import a CSV with invalid email", () => {
        // Given that I am logged into my Ghost account 
            LoginPage.fillEmailLogin();
            LoginPage.fillPasswordLogin();
            LoginPage.clickFormLogin();

        // When Validate member records saved correctly via CSV with invalid email
            MemberPage.goToMemberPage();
            MemberPage.importInvalidCSV();
        
        // Then: A member that should not have been created due to an invalid email address
            cy.get("a[data-test-table-data='details']").should("not.contain", "Laura Gomez");
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);    
    });
});