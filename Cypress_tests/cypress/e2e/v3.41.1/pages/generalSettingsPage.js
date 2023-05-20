const ghostUrl = Cypress.env("ghostV3");

class GeneralSettingsPage {
    elements = {
        titleDescriptionExpandbutton: () => cy.get("button[data-ember-action]").eq(2),
        timezoneExpandbutton: () =>  cy.get("button[data-ember-action]").eq(3),
        languageExpandbutton: () =>  cy.get("button[data-ember-action]").eq(4),
        closebutton: () =>  cy.get("button").contains("span","Close"),
        siteNameInput: () => cy.get("input[type='text']").first(),
        siteNameDescription: () => cy.get("input[type='text']").last(),
        saveButton: () =>cy.get("button").contains(/Save/),
        timezoneSelector: () => cy.get("#timezone"),
        languageInput: () => cy.get("input[type='text']"),
    }

    goToGeneralSettings (){
        cy.visit(`${ghostUrl}/ghost/#/settings/general`);
    }
}

export const generalSettingsPage = new GeneralSettingsPage();