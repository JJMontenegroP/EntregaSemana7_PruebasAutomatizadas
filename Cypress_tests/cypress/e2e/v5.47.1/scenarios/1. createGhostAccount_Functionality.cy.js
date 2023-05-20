import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import PARAMETERS from "../../parameters"

const ghostUrl = Cypress.env("baseURL");
const CONSTANTS={
  MAIN_ERROR_LABEL:"Please fill out every field correctly to set up your site.",
  INVALID_EMAIL_ERROR: "Invalid Email.",
  INVALID_PASSWORD_ERROR: "Password must be at least 10 characters long"
}
describe("Create a ghost account Functionality", () => {

  beforeEach(() => {
    // Clear the cookies and session
    cy.clearCookies();
    cy.clearLocalStorage();
  });


  it("Create Ghost account with empty registration fields", () => {
    // Given that I am on the Ghost sign-up page

    cy.visit(`${ghostUrl}/ghost/#/setup`);
    
    // When I leave all registration fields empty
    cy.get("input[data-test-blog-title-input]").clear();
    cy.get("input[data-test-name-input]").clear();
    cy.get("input[data-test-email-input]").clear();
    cy.get("input[data-test-password-input]").clear();
    
    // Then I should not be able to create an account

    cy.get("button[data-test-button='setup']").click();
    cy.contains(CONSTANTS.MAIN_ERROR_LABEL)
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });


  it("Create Ghost account with incorrect email format", () => {
    
    // Given that I am on the Ghost sign-up page
    cy.visit(`${ghostUrl}/ghost/#/setup`);

    // When I enter an incorrect email address
    SignInPage.createAccount(PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.WRONG_FORMAT_EMAIL,
      PARAMETERS.USER_PASSWORD)

    // Then I should see an error message
    cy.get("button[data-test-button='setup']").click();
    cy.contains(CONSTANTS.INVALID_EMAIL_ERROR);
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  });


  it("Create a Ghost account with a very short password",()=>{
    
    // Given that I am on the Ghost sign-up page
    cy.visit(`${ghostUrl}/ghost/#/setup`);
    
    // When I enter a very short password
    SignInPage.createAccount(PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.USER_EMAIL,
      PARAMETERS.WRONG_FORMAT_PASSWORD)
    cy.get("button[data-test-button='setup']").click();
    
    // Then I should see an error message
    cy.contains(CONSTANTS.INVALID_PASSWORD_ERROR)
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
  })

  it("Create an account in Ghost by entering all fields correctly", () => {
    
    // Given that I am on the Ghost sign-up page
    cy.visit(`${ghostUrl}/ghost/#/setup`);

    // When I enter the correct information
    SignInPage.createAccount(PARAMETERS.BLOG_NAME,
      PARAMETERS.USER_NAME,
      PARAMETERS.USER_EMAIL,
      PARAMETERS.USER_PASSWORD)

    // Then I should be able to create an account and log in with it.
    cy.get("button[data-test-button='setup']").click();
    cy.visit(`${ghostUrl}/ghost/#/signout`)
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin(); 
    cy.screenshot(`v5-${Cypress.currentTest.titlePath.join("/")}/step`);
    });

});
