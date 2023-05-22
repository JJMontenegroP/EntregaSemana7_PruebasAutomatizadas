class CreateTag{
    newTag(tagName, color,slug, description){
        cy.wait(3000)
        cy.get("a[href='#/tags/']").eq(0).click();
        cy.get("a[href='#/tags/new/']").click();
        cy.get("input[data-test-input='tag-name']").type(tagName);
        cy.get("input[data-test-input='accentColor']").type(color);
        cy.get('input[data-test-input="tag-slug"]').type(slug);
        cy.get('textarea[data-test-input="tag-description"]').type(description);
        cy.get("button").contains(/Save/).click();
        cy.wait(3000);
        cy.get("a[href='#/tags/']").eq(0).click();
        cy.wait(3000);
    }

    deleteTag(tagName) {
        cy.wait(10000);
        cy.get("a[href='#/tags/']").eq(0).click();
        cy.contains(tagName).click();
        cy.contains(/Delete tag/).click();
        cy.get("button[data-test-button='confirm']").click();
    }
}
export default new CreateTag();