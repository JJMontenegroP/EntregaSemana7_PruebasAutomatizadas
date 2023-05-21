import LoginPage from "../../pages/LoginPage";
import MemberPage from "../../pages/MemberPage";

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS = {
    PATHCSV_VALID_CSV:"cypress/e2e/v5.47.1/scenarios/poolDataA-priori/data/3. importMember_Functionality/Import_a_valid _CSV.csv",
    PATHCSV_VALID_CSV_ONE_ROW:"cypress/e2e/v5.47.1/scenarios/poolDataA-priori/data/3. importMember_Functionality/Import_a_valid _CSV_one_row.csv",
    PATHCSV_VALID_CSV_EMPTY_FIELDS:"cypress/e2e/v5.47.1/scenarios/poolDataA-priori/data/3. importMember_Functionality/Import_a_CSV_empty_fields.csv"
}

  
describe("Import members with CSV file", () => {
    beforeEach( () => {
        // Given that I am logged into my Ghost account 
        LoginPage.visitLoginPage();
        LoginPage.fillEmailLogin();
        LoginPage.fillPasswordLogin();
        LoginPage.clickFormLogin();
    });

    it("Import a Valid CSV with a single line of data.",()=>{

        // When Validate whether the members have been saved correctly through a CSV file
        MemberPage.goToMemberPage();
        MemberPage.importCSV(CONSTANTS.PATHCSV_VALID_CSV_ONE_ROW);
        
        // Then: A table should exist showing the created members
        cy.get("table").should("exist")
        //cy.get("table").find("tbody").find("tr").should("have.length",1)

    })
    it("Import CSV with some empty fields",()=>{
          let n_length=0
          cy.readFile(CONSTANTS.PATHCSV_VALID_CSV_EMPTY_FIELDS, 'utf8').then(data => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            console.log(lines)
            n_length=lines.length
          }).then(()=>{

          // When Validate whether the members have been saved correctly through a CSV file
          MemberPage.goToMemberPage();
          MemberPage.importCSV(CONSTANTS.PATHCSV_VALID_CSV_EMPTY_FIELDS);
          
          // Then: A table should exist showing the created members
          cy.get("table").should("exist")
          cy.get("div[data-test-table='members']").scrollTo("center")
          cy.get("table").find("tbody").find("tr").should("have.length",n_length-1)})
    })
    it("Import a valid CSV all fields valid",() => {
        let n_length=0
         cy.readFile(CONSTANTS.PATHCSV_VALID_CSV, 'utf8').then(data => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            console.log(lines)
            n_length=lines.length
          }).then(()=>{
            // When Validate whether the members have been saved correctly through a CSV file
                MemberPage.goToMemberPage();
                MemberPage.importCSV(CONSTANTS.PATHCSV_VALID_CSV);
                
            // Then: A table should exist showing the created members
                cy.get("table").should("exist")
                cy.get("div[data-test-table='members']").scrollTo("center")
                cy.get("table").find("tbody").find("tr").should("have.length",n_length-1)
                cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });    
    });
    it("Import a CSV with invalid email", () => {
        // When Validate member records saved correctly via CSV with invalid email
            MemberPage.goToMemberPage();
            MemberPage.importInvalidCSV();
        
        // Then: A member that should not have been created due to an invalid email address
            cy.get("a[data-test-table-data='details']").should("not.contain", "Laura Gomez");
            cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`); 
    });
});