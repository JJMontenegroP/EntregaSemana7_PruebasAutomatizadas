const ghostUrl = Cypress.env("baseURL");
class SignInPage{
    createAccount(blogTitle, name, email, password) {
    cy.get("input[data-test-blog-title-input]").type(blogTitle);
    cy.get("input[data-test-name-input]").type(name);
    cy.get("input[data-test-email-input]").type(email);
    cy.get("input[data-test-password-input]").type(password);
    }
}
export default new SignInPage();