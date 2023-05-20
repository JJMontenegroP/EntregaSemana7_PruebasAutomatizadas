import LoginPage from "../../pages/LoginPage";
import EditAccountInfoPage from "../../pages/EditAcountInfo";

const ghostUrl = Cypress.env("baseURL");

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
  // First scenary -> Create a post whit only text content

  it("Should create a post with text title and content", () => {
    
  });

  // Second scenary -> Create a post including an image
});
