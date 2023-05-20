class MemberPage {

    goToMemberPage() {
        cy.wait(4000)
        cy.get("a[data-test-nav='members']").click();
    }

    validateExistMembers() {
        const existTableMember = cy.get("body").then( $body => {
            if( $body.find("table").length) {
                return true;
            }
            return false;
        });
        return existTableMember;
    }

    importCSV( ) {
        const existTableMember = this.validateExistMembers();
        if( !existTableMember ) {
            cy.contains(/CSV/).click();
            this.loadFileCSV("cypress/fixtures/member-import-template.csv");
        } else {
            cy.get("button[data-test-button='members-actions']").click();
            cy.get("a[data-test-link='import-csv']").click();
            this.loadFileCSV("cypress/fixtures/member-import-template-v2.csv");
        }
    }

    importInvalidCSV( ) {
        const existTableMember = this.validateExistMembers();
        if( !existTableMember ) {
            cy.contains(/CSV/).click();
            this.loadFileCSV("cypress/fixtures/member-import-template-wrong.csv");
        } else {
            cy.get("button[data-test-button='members-actions']").click();
            cy.get("a[data-test-link='import-csv']").click();
            this.loadFileCSV("cypress/fixtures/member-import-template-wrong.csv");
        }
    }

    loadFileCSV(pathcsv) {
        cy.get("input[type=file]").eq(0).selectFile(pathcsv, { force: true })
        cy.get("button").contains(/Import/).click();
        cy.get("button[data-test-button='close-import-members']").click();
    }
}

export default new MemberPage();