const ghostUrl = Cypress.env("ghostV3");

class MemberPage {
  elements = {
    actionsButton: () => cy.get("button").contains("span", "Actions"),
  };

  goToMemberPage() {
    cy.visit(`${ghostUrl}/ghost/#/members/`);
  }

  validateExistMembers() {
    const existTableMember = cy.get("body").then(($body) => {
      if ($body.find("table").length) {
        return true;
      }
      return false;
    });
    return existTableMember;
  }

  importCSV() {
    const existTableMember = this.validateExistMembers();
    if (!existTableMember) {
      cy.contains(/CSV/).click();
      this.loadFileCSV("cypress/fixtures/member-import-template.csv");
    } else {
      cy.get("a[href='#/members/import/']").click();
      this.loadFileCSV("cypress/fixtures/member-import-template.csv");
    }
  }

  importInvalidCSV() {
    const existTableMember = this.validateExistMembers();
    if (!existTableMember) {
      cy.contains(/CSV/).click();      
      this.loadFileCSV("cypress/fixtures/member-import-template-wrong.csv");
    } else {
      cy.get("a[href='#/members/import/']").click();      
      this.loadFileCSV("cypress/fixtures/member-import-template-wrong.csv");
    }
  }

  loadFileCSV(pathcsv) {
    cy.get("input[type=file]").eq(0).selectFile(pathcsv, { force: true });
    cy.get("button")
      .contains(/Import/)
      .click();
  }
}

export const memberPage = new MemberPage();
