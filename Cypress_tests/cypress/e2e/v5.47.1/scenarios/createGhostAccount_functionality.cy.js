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
    cy.visit(`${ghostUrl}/ghost/#/signout`);  
    });

});
