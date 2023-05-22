class CreateNewPost {
  elements = {
    newPostButton: () => cy.get("a").contains("New post"),
    previewButton: () => cy.get("button[data-test-button='publish-preview']"),
  };

  requestsSuccess = {
    getMockarooDataFromAPI: () => {
      const API_KEY = "247935e0";

      return cy
        .request(
          `https://my.api.mockaroo.com/create_post_funtionality_Success.json?key=${API_KEY}`
        )
        .then((response) => response.body);
    },
  };

  requestsWrong = {
    getMockarooWrongDataFromAPI: () => {
      const API_KEY = "247935e0";

      return cy
        .request(
          `https://my.api.mockaroo.com/create_post_funtionality_wrong.json?key=${API_KEY}`
        )
        .then((response) => response.body);
    },
  };

  writePost(post_title, post_content) {
    cy.get("textarea[data-test-editor-title-input]").type(post_title);
    cy.get("div[data-kg=editor]").click().type(post_content);
  }

  publishPost() {
    cy.get("button[data-test-button='publish-preview']").click();
    cy.get("button").contains("Publish").click({ force: true });
    cy.get("button[data-test-button='continue']").click();
    cy.get("button[data-test-button='confirm-publish']").click();
  }

  addImage(image) {
    cy.get("textarea[data-test-editor-title-input]").click();
    cy.get("button").contains("span", "Add feature image").click();
    cy.wait(1000);
    cy.get("input[type=file]")
      .invoke("show")
      .selectFile(image, { force: true });
    cy.wait(1000);
  }
  addImageUnplash() {
    cy.get("textarea[data-test-editor-title-input]").click();
    cy.wait(1000);
    cy.get("svg[fill='currentColor']").click();
    cy.get("a[class=gh-unsplash-button]").first().click();
    cy.wait(1000);
  }
}
export default new CreateNewPost();
