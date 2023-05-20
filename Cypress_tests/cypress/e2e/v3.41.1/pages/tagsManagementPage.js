const ghostUrl = Cypress.env("ghostV3");

class TagsManagementPage {
  elements = {
    newTagButton: () => cy.get("a[href='#/tags/new/']"),
    tagNameInput: () => cy.get("input[name='name']"),
    tagColorInput: () => cy.get("input[name='accent-color']"),
    tagImageInput: () => cy.get("input[type=file]"),
    tagDescriptionInput: () => cy.get("textarea[name='description']"),
    saveButton: () => cy.get("button").contains("Save"),
    tagCreated: () => cy.get("h3[TestTag]"),
    deleteButton: () => cy.get("button").contains("Delete tag"),
    deleteConfirmationButton: () => cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view").contains("Delete"),

  };

  goToTags() {
    cy.visit(`${ghostUrl}/ghost/#/tags`);
  }

  createTag(name, color, image, description) {
    this.elements.newTagButton().click();
    this.elements.tagNameInput().click().type(name,{force: true});
    this.elements.tagColorInput().click().type(color,{force: true});
    this.elements
      .tagImageInput()
      .invoke("show")
      .selectFile(image, { force: true });
    this.elements.tagDescriptionInput().click().type(description,{force: true});
    this.elements.saveButton().click();
  }

  deleteTag() {
    cy.visit(`${ghostUrl}/ghost/#/tags/test`);
    this.elements.deleteButton().click();
    this.elements.deleteConfirmationButton().click();
    
  }
}

export const tagsManagementPage = new TagsManagementPage();
