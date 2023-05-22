import LoginPage from "../../pages/LoginPage";
import CreateNewPost from "../../pages/CreateNewPost";
import { faker } from "@faker-js/faker";

const ghostUrl = Cypress.env("baseURL");

const CONSTANTS = {
  POST_TITLE: "Test post title",
  POST_CONTENT: "Test post content",
  IMAGE: "cypress/fixtures/logo.png",
};

describe("Create a ghost new Post Functionality", () => {
  beforeEach(() => {
    LoginPage.visitLoginPage();
    LoginPage.fillEmailLogin();
    LoginPage.fillPasswordLogin();
    LoginPage.clickFormLogin();

    cy.visit(`${ghostUrl}/ghost/#/posts`);
  });

  // First scnario, create a post whit text content
  it("Write a post for the website created in Ghost only using text", () => {
    CreateNewPost.elements.newPostButton().click();
    CreateNewPost.writePost(faker.lorem.words(), faker.lorem.words());
    CreateNewPost.publishPost();
  });

  // First scnario, create a post whit text content
  it("Should not allow to create a post whit an uncorrect format of text in the title and content ", () => {
    CreateNewPost.elements.newPostButton().click();
    CreateNewPost.writePost(faker.internet.emoji(), faker.internet.emoji());
    CreateNewPost.elements.previewButton().should("not.exist");
  });
});
