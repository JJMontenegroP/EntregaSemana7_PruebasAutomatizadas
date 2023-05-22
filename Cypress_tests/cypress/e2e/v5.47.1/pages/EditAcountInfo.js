const baseURL = Cypress.env("baseURL");

class EditAccountInfoPage {
  elements = {
    emailInput: () => cy.get("input[name='identification']"),
    passwordInput: () => cy.get("input[name='password']"),
    loginButton: () => cy.get("button.login"),
    userMenu: () => cy.get("div[class='pe-all']"),
    yourProfileButton: () => cy.get("a[data-test-nav='user-profile']"),
    userNameInput: () => cy.get("input[id='user-name']"),
    userSlugInput: () => cy.get("input[id='user-slug']"),
    userEmailInput: () => cy.get("input[id='user-email']"),
    userLocationInput: () => cy.get("input[id='user-location']"),
    userWebsiteInput: () => cy.get("input[id='user-website']"),
    userFacebookProfileInput: () => cy.get("input[id='user-facebook']"),
    userTwitterProfileInput: () => cy.get("input[id='user-twitter']"),
    userBioInput: () => cy.get("textarea[id='user-bio']"),
    saveButton: () => cy.get("button").contains("span", "Save"),
    saveSuccedButton: () => cy.get("button").contains("span", "Saved"),
    retryButton: () => cy.get("button").contains("span", "Retry"),
    wrongFacebookResponse: () =>
      cy
        .get("p")
        .contains(
          "The URL must be in a format like https://www.facebook.com/yourPage"
        ),
    wrongtwitterResponse: () =>
      cy
        .get("p")
        .contains(
          "Your Username is not a valid Twitter Username"
        ),
    longBioResponse: () => cy.get("p").contains("Bio is too long"),
  };

  requests = {
    getMockarooDataFromAPI: () => {
      const API_KEY = "247935e0";

      return cy
        .request(
          `https://my.api.mockaroo.com/edit_account_information.json?key=${API_KEY}`
        )
        .then((response) => response.body);
    },
  };

  requestsWrong = {
    getMockarooWrongDataFromAPI: () => {
      const API_KEY = "247935e0";

      return cy
        .request(
          `https://my.api.mockaroo.com/edit_account_information_wrong.json?key=${API_KEY}`
        )
        .then((response) => response.body);
    },
  };

  editInformation(
    name,
    slug,
    email,
    location,
    website,
    facebook,
    twitter,
    bio
  ) {
    this.elements.userNameInput().clear().type(name);
    this.elements.userSlugInput().clear().type(slug);
    this.elements.userEmailInput().clear().type(email);
    this.elements.userLocationInput().clear().type(location);
    this.elements.userWebsiteInput().clear().type(website);
    this.elements.userFacebookProfileInput().clear().type(facebook);
    this.elements.userTwitterProfileInput().clear().type(twitter);
    this.elements.userBioInput().clear().type(bio);
    this.elements.saveButton().click();
    cy.wait(300);
  }
}

export default new EditAccountInfoPage();
