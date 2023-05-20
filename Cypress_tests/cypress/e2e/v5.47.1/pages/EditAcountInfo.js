const baseURL = Cypress.env("baseURL");

class EditAccountInfoPage {
  elements = {
    emailInput: () => cy.get("input[name='identification']"),
    passwordInput: () => cy.get("input[name='password']"),
    loginButton: () => cy.get("button.login"),
    userMenu: () => cy.get("div[class='pe-all']"),
    yourProfileButton: () => cy.get("a[data-test-nav='user-profile']"),
  };
}

export default new EditAccountInfoPage();
