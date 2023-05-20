class CreateNewPostPage {
  elements = {
    postTitleInput: () => cy.get("textarea[placeholder='Post Title']"),
    contentInput: () => cy.get(".koenig-editor__editor"),
    settingsButton: () => cy.get("button[title='Settings']"),
    addImageButton: () => cy.get("button").contains("span", "Add feature image"),
    addImageInput: () => cy.get("input[type=file]"),
    addUnsplashImagebutton: () => cy.get("div.gh-image-uploader-unsplash"),
    closeButton: () => cy.get("button[class='close settings-menu-header-action']"),
    publishButton: () => cy.get("div.gh-publishmenu-trigger"),
    publishCheckbox: () => cy.get("button.gh-publishmenu-button"),
    unpublishCheckbox: () =>
      cy.get("div.gh-publishmenu-radio").contains("Unpublished"),
    unPublishButton: () =>
      cy.get("button.gh-publishmenu-button").contains("span", "Unpublish"),
    notification: () => cy.get("div.gh-notification-content"),
    newPostButton: () => cy.get("a[title='New post']"),
    addCustomContentButton: () => cy.get("button.koenig-plus-menu-button"),
    emailSection: () => cy.get("div").contains("Email"),
    emailCard: () => cy.get(".kg-email-card"),
  };

  createPost(title, content) {
    title && this.elements.postTitleInput().type(title);
    content && this.elements.contentInput().type(content);
    this.elements.publishButton().click();
    this.elements.publishCheckbox().click();
  }

  addImageContent(image) {
      this.elements.addImageInput().invoke("show")
      .selectFile(image, { force: true });
  }

  addUnsplashImage(){
    cy.get("a[class=gh-unsplash-button]").first().click();
  }

  addEmailContent() {
    this.elements.addCustomContentButton().click();
    this.elements.emailSection().click();
  }
}

export const createNewPostPage = new CreateNewPostPage();