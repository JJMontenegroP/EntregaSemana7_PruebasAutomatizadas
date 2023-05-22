class CreatePage{
    writeNewPage(pageTitle, contentPage){
        cy.wait(6000)
        cy.get("a[href='#/pages/']").first().click();
        cy.wait(6000)
        cy.get("a[href='#/editor/page/']").click();
        cy.get("textarea[placeholder='Page title']").type(pageTitle);
        cy.get("p").invoke("text",contentPage);
        cy.get("button").contains("Publish").click();
        cy.wait(2000)
        cy.get("button.gh-publish-setting-title").click();
    }

    confirmNewPage(){
        cy.get('button[data-test-button="continue"]').click();
        cy.get("button[data-test-button='confirm-publish']").click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.wait(2000)
        cy.get('a[href="#/pages/"]').click();    
    }

    confirmAndSchedulePage(){
        cy.get("label").contains("Schedule for later").click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get("button[data-test-button='confirm-publish']").click();
        cy.get('button[data-test-button="close-publish-flow"]').click();
        cy.wait(4000)
        cy.get('a[href="#/pages/"]').click();    
        cy.wait(3000)
    }
}
export default new CreatePage();