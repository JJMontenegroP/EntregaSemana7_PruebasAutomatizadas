import LoginPage from "../../pages/LoginPage";
import CreateNewPost from "../../pages/CreateNewPost";
import mockDataCreatePostSuccess from "../poolDataA-priori/data/2. createpost_functionality/mock_createPost_fucntionality_1_success.json";
import mockDataCreatePostWrong from "../poolDataA-priori/data/2. createpost_functionality/mock_createPost_fucntionality_2_wrong.json";

const ghostUrl = Cypress.env("baseURL");

describe("Create a ghost new Post Functionality", () => {
  beforeEach(() => {
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();

    cy.visit(`${ghostUrl}/ghost/#/posts`);
  });

  // Create a post with only text
  mockDataCreatePostSuccess.forEach(({ Title, Content }) => {
    it("Write a post for the website created in Ghost only using text", () => {
      // Given that I am logged into my Ghost account
      CreateNewPost.elements.newPostButton().click();
      CreateNewPost.writePost(Title, Content);

      CreateNewPost.publishPost();
    });
  });

  // Create a post with a naughty string in each
  mockDataCreatePostWrong.forEach(({ Title, Content }) => {
    it("Write a post for the website created in Ghost only using any type of characters", () => {
      // Given that I am logged into my Ghost account
      CreateNewPost.elements.newPostButton().click();
      CreateNewPost.writePost(Title, Content);

      CreateNewPost.elements.previewButton().should("not.exist");
    });
  });
});
