import LoginPage from "../../pages/LoginPage";
import EditAccountInfoPage from "../../pages/EditAcountInfo";
import parameters from "../../../parameters";
import { faker } from "@faker-js/faker";

beforeEach(() => {
  LoginPage.visitLoginPage();
  LoginPage.fillEmailLogin();
  LoginPage.fillPasswordLogin();
  LoginPage.clickFormLogin();

  EditAccountInfoPage.elements.userMenu().click();
  EditAccountInfoPage.elements.yourProfileButton().click();
  EditAccountInfoPage.elements.userMenu().click();
});

describe("Edit account information", () => {
  // Wrong Email scenary -> Edit information with no valid email
  it("Should no edit the account information (wrong email format)", () => {
    EditAccountInfoPage.elements
      .userEmailInput()
      .clear()
      .type(faker.internet.url());
    EditAccountInfoPage.elements.saveButton().click();
    EditAccountInfoPage.elements.retryButton().should("be.visible");
  });

  // Wrong facebook profile
  it("Should no edit the facebook profile", () => {
    EditAccountInfoPage.elements
      .userFacebookProfileInput()
      .clear()
      .type(faker.internet.url());
    EditAccountInfoPage.elements.userWebsiteInput().click();
    EditAccountInfoPage.elements.wrongFacebookResponse().should("be.visible");
  });

  // Wrong twitter profile
  it("Should no edit the twitter profile", () => {
    EditAccountInfoPage.elements
      .userTwitterProfileInput()
      .clear()
      .type(faker.internet.url());
    EditAccountInfoPage.elements.userWebsiteInput().click();
    EditAccountInfoPage.elements.wrongtwitterResponse().should("be.visible");
  });

  // Wrong edition of bio long bio
  it("Should no edit the bio (long bio)", () => {
    EditAccountInfoPage.elements
      .userBioInput()
      .clear()
      .type(faker.lorem.paragraphs());
    EditAccountInfoPage.elements.saveButton().click();
    EditAccountInfoPage.elements.retryButton().should("be.visible");
    EditAccountInfoPage.elements.userBioInput().click();
    EditAccountInfoPage.elements.longBioResponse().should("be.visible");
  });

  // Succesfully bio edition
  it("Should edit the account bio", () => {
    EditAccountInfoPage.elements.userBioInput().clear().type(faker.lorem.words(20));
    EditAccountInfoPage.elements.saveButton().click();
    EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");     
  });

  // Successfully accounty information editing
  it("Should edit succesfully the account information", () => {
    EditAccountInfoPage.editInformation(
      faker.person.fullName(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.location.country(),
      faker.internet.url(),
      faker.internet.userName(),
      faker.internet.userName(),
      faker.lorem.paragraph(1)
    );

    EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");

    EditAccountInfoPage.elements
      .userEmailInput()
      .clear()
      .type(parameters.USER_EMAIL);
    EditAccountInfoPage.elements.saveButton().click();
  });
});
