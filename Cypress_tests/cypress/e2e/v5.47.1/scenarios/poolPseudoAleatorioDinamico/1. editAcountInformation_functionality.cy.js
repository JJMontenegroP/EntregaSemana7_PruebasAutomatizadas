import LoginPage from "../../pages/LoginPage";
import EditAccountInfoPage from "../../pages/EditAcountInfo";
import parameters from "../../../parameters";

describe("Edit account information", () => {
  beforeEach(() => {
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();

    EditAccountInfoPage.elements.userMenu().click();
    EditAccountInfoPage.elements.yourProfileButton().click();
    EditAccountInfoPage.elements.userMenu().click();
  });

  // Email with incorrect format
  it("Should not edit the email (wrong email format)", () => {
    EditAccountInfoPage.requestsWrong
      .getMockarooWrongDataFromAPI()
      .then(({ Email }) => {
        EditAccountInfoPage.elements.userEmailInput().clear().type(Email);
        EditAccountInfoPage.elements.saveButton().click();
        EditAccountInfoPage.elements.retryButton().should("be.visible");
      });
  });

  // facebook profile with incorrect format
  it("Should not edit the facebook url (wrong format)", () => {
    EditAccountInfoPage.requestsWrong
      .getMockarooWrongDataFromAPI()
      .then(({ Facebook_profile }) => {
        EditAccountInfoPage.elements
          .userFacebookProfileInput()
          .clear()
          .type(Facebook_profile);
        EditAccountInfoPage.elements.userWebsiteInput().click();
        EditAccountInfoPage.elements
          .wrongFacebookResponse()
          .should("be.visible");
      });
  });

  // twitter wrong profile with incorrect format
  it("Should not edit the twitter url (wrong format)", () => {
    EditAccountInfoPage.requestsWrong
      .getMockarooWrongDataFromAPI()
      .then(({ Twitter_profile }) => {
        EditAccountInfoPage.elements
          .userTwitterProfileInput()
          .clear()
          .type(Twitter_profile);
        EditAccountInfoPage.elements.userFacebookProfileInput().click();
        EditAccountInfoPage.elements
          .wrongtwitterResponse()
          .should("be.visible");
      });
  });

  // fail long bio
  it("Should not edit the bio (long format text)", () => {
    EditAccountInfoPage.requestsWrong
      .getMockarooWrongDataFromAPI()
      .then(({ Bio }) => {
        EditAccountInfoPage.elements.userBioInput().clear().type(Bio);
        EditAccountInfoPage.elements.saveButton().click();
        EditAccountInfoPage.elements.retryButton().should("be.visible");
        EditAccountInfoPage.elements.userBioInput().click();
        EditAccountInfoPage.elements.longBioResponse().should("be.visible");
      });
  });

  // Success bio editing
  it("Should  edit the bio", () => {
    EditAccountInfoPage.requests.getMockarooDataFromAPI().then(({ Bio }) => {
      EditAccountInfoPage.elements.userBioInput().clear().type(Bio);
      EditAccountInfoPage.elements.saveButton().click();
      EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");
    });
  });

  // Success Account information editing
  it("Should  edit the account information", () => {
    EditAccountInfoPage.requests
      .getMockarooDataFromAPI()
      .then(
        ({
          Full_name,
          Slug,
          Email,
          Location,
          Website,
          Facebook_profile,
          Twitter_profile,
          Bio,
        }) => {
          EditAccountInfoPage.editInformation(
            Full_name,
            Slug,
            Email,
            Location,
            Website,
            Facebook_profile,
            Twitter_profile,
            Bio
          );
          EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");
          EditAccountInfoPage.elements
            .userEmailInput()
            .clear()
            .type(parameters.USER_EMAIL);
          EditAccountInfoPage.elements.saveButton().click();
        }
      );
  });
});
