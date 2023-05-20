import { loginPage } from "../pages/logInPage";
import { createNewPostPage } from "../pages/createNewPostPage";
import PARAMETERS from "../../parameters";

const image = "cypress/fixtures/logo.png";

const CONSTANTS = {
  POST_TITLE: "Test post title",
  POST_CONTENT: "Test post content"
};

beforeEach (() => {
    loginPage.login(
        PARAMETERS.USER_EMAIL,
        PARAMETERS.USER_PASSWORD
    );

    createNewPostPage.elements.newPostButton().click();
});

// Second Functionality -> Create a ghost post

describe("Create a new ghost post functionality", () => {

  // First scenary -> Create a post whit only text content

  it("Should create a post with text title and content", () => {
    
    createNewPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createNewPostPage.elements.notification().should("be.visible");
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    
  });

  // Second scenary -> Create a post including an image

  it("Should create a post including an image", () => {
    
    createNewPostPage.elements.settingsButton().click();
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createNewPostPage.addImageContent(image);
    createNewPostPage.elements.closeButton().click();
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createNewPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    createNewPostPage.elements.notification().should("be.visible");
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    
  });  

//   Third scenary -> Create a post including an image from unsplash

  it("Should create a post including an image from unsplash", () => {
    
    createNewPostPage.elements.settingsButton().click();     
    createNewPostPage.elements.addUnsplashImagebutton().click();    
    createNewPostPage.addUnsplashImage();
    createNewPostPage.elements.closeButton().click();    
    createNewPostPage.createPost(CONSTANTS.POST_TITLE, CONSTANTS.POST_CONTENT);    
    createNewPostPage.elements.notification().should("be.visible");
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    
  });  

  // Fourth scenary -> Create a post without tilte

  it("Should create a post with title (Untitled) when there is no input in title field", () => {
    
    createNewPostPage.createPost("", CONSTANTS.POST_CONTENT);    
    createNewPostPage.elements.notification().should("be.visible");    
    createNewPostPage.elements.postTitleInput().should("have.value", "(Untitled)");
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
    
  });

  // Fifth scenary -> can not be possible to create a post with out content

  it("Should not be possible to create a post with out content", () => {
    
    createNewPostPage.elements.postTitleInput().type(CONSTANTS.POST_TITLE);
    createNewPostPage.elements.publishButton().should("not.exist");
    cy.wait(500); 
    cy.screenshot(`v3-${Cypress.currentTest.titlePath.join("/")}/step`);
  });   

});
