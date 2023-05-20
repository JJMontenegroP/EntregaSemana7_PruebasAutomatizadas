import PARAMETERS from "../../parameters";
const baseURL = Cypress.env("baseURL");

class LoginPage {

    elements={
        emailInput: () => cy.get("input[name='identification']"),
        passwordInput: () => cy.get("input[name='password']"),
        loginButton: () => cy.get("button.login"),
    }

    visitLoginPage() {
        cy.visit(`${baseURL}/ghost`);
        cy.wait(3000);
    }

    fillEmailLogin() {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(PARAMETERS.USER_EMAIL);
    }

    fillPasswordLogin() {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(PARAMETERS.USER_PASSWORD);
    }

    clickFormLogin() {
        this.elements.loginButton().click();
        cy.wait(7000);
    }
}

export default new LoginPage();