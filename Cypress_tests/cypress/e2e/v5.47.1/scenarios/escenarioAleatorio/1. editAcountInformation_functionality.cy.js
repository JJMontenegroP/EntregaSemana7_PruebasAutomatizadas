import LoginPage from "../../pages/LoginPage";
import EditAccountInfoPage from "../../pages/EditAcountInfo";
import mockData_success from "../poolDataA-priori/data/mock_data_edit_acount_info_success.json";
import mockData_wrongEmail from "../poolDataA-priori/data/mock_data_edit_acount_info_wrong_email.json";
import mockData_wrongFacebook from "../poolDataA-priori/data/mock_data_edit_acount_info_wrongFacebookURl.json";
import mockData_wrongTwitter from "../poolDataA-priori/data/mock_data_edit_acount_info_wrongTwitterURl.json";
import mockData_longBioWrong from "../poolDataA-priori/data/mock_data_edit_acount_info_longBioWrong.json";
import mockData_longBioSuccess from "../poolDataA-priori/data/mock_data_edit_acount_info_longBioSuccess.json";
import parameters from "../../../parameters";

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

  // Wrong Email scenary -> Edit information with no valid email
  mockData_wrongEmail.forEach((mock) => {
    const {      
      Email 
    } = mock;

    
    it("Should no edit the account information (wrong email format)", () => {
      EditAccountInfoPage.elements.userEmailInput().clear().type(Email);
      EditAccountInfoPage.elements.saveButton().click();  
      EditAccountInfoPage.elements.retryButton().should("be.visible");
    });     
  });  

  // Wrong facebook URL scenary -> Edit information with no valid facebook profile
  mockData_wrongFacebook.forEach((mock) => {
    const {      
      Facebook_profile      
    } = mock;

    
    it("Should no edit the account information (wrong facebook URL format)", () => {
      EditAccountInfoPage.elements.userFacebookProfileInput().clear().type(Facebook_profile);
      EditAccountInfoPage.elements.userWebsiteInput().click();
      EditAccountInfoPage.elements.wrongFacebookResponse().should("be.visible");
    });     
  });

  // Wrong Twitter URL scenary -> Edit information with no valid twitter profile
  mockData_wrongTwitter.forEach((mock) => {
    const {      
      Twitter_profile      
    } = mock;

    
    it("Should no edit the account information (wrong twitter URL format)", () => {
      EditAccountInfoPage.elements.userTwitterProfileInput().type(Twitter_profile);
      EditAccountInfoPage.elements.userFacebookProfileInput().click();
      EditAccountInfoPage.elements.wrongtwitterResponse().should("be.visible");
    });     
  });

  // Fail Long bio -> Edit information with long biography
  mockData_longBioWrong.forEach((mock) => {
    const {      
      Bio      
    } = mock;

    
    it("Should no edit the account bio (long Bio)", () => {
      EditAccountInfoPage.elements.userBioInput().clear().type(Bio);
      EditAccountInfoPage.elements.saveButton().click();
      
      EditAccountInfoPage.elements.retryButton().should("be.visible");
      EditAccountInfoPage.elements.userBioInput().click();
      EditAccountInfoPage.elements.longBioResponse().should("be.visible");
    });     
  });

  // Success bio length -> Edit information with long biography
  mockData_longBioSuccess.forEach((mock) => {
    const {      
      Bio      
    } = mock;

    
    it("Should edit the account bio", () => {
      EditAccountInfoPage.elements.userBioInput().clear().type(Bio);
      EditAccountInfoPage.elements.saveButton().click();
      EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");     
    });     
  });
  
  // Success scenary -> Edit succesfully the information of the profile
  mockData_success.forEach((mock) => {
    const {
      Full_name,
      Slug,
      Email,
      Location,
      Website,
      Facebook_profile,
      Twitter_profile,
      Bio,
    } = mock;

    
    it("Should edit the account information correctly", () => {
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
      
      parameters.USER_EMAIL = Email;
      EditAccountInfoPage.elements.saveSuccedButton().should("be.visible");
    });     
  });
});
