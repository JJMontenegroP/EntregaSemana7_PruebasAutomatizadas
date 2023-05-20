const ghostUrl = Cypress.env("ghostV3");

class PagesManagementPage {
    elements = {
        newPagebutton: () => cy.get("a[href='#/editor/page/']"),
        pagetitleTextArea: () => cy.get("textarea[placeholder='Page Title']"),
        pageContent: () => cy.get("p"),
        publushSpan: () => cy.get("span").contains("Publish"),
        publushButton: () => cy.get("button").contains("Publish"),
        notification: () => cy.get("div.gh-notification-content"),
        scheduleForLatter: () => cy.get("div.gh-publishmenu-radio-button").eq(1),
        scheduleButton: () => cy.get("button").contains("Schedule"),
        postSettingsButton: () => cy.get("button.post-settings"),
        firstPost: () => cy.get("a[title='Edit this page']"),
        deleteButton: () => cy.get("Button").contains(" Delete "),
        deleteConfirmationButton: () => cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").first(),
    }

    goToPages (){
        cy.visit(`${ghostUrl}/ghost/#/pages`);
    }

    DeletePage (){
        this.elements.firstPost().first().click();
        this.elements.postSettingsButton().click();
        this.elements.deleteButton().click();
        this.elements.deleteConfirmationButton().click();
    }
}

export const pagesManagementPage = new PagesManagementPage();