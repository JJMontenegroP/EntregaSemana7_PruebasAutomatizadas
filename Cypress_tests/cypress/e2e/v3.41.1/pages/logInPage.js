const ghostUrl = Cypress.env("ghostV3");

class LogInPage {
    elements = {
        emailInput: () => cy.get("input[name='identification']"),
        passwordInput: () => cy.get("input[name='password']"),
        loginButton: () => cy.get("button.login"),
        forgotButton: () => cy.get("button").contains("Forgot?"),
      }

      goToLogIn(){
        cy.visit(`${ghostUrl}/ghost/#/signin`);
      }
    
      login(email, password) {
        cy.visit(`${ghostUrl}/ghost/#/signin`);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
      }
    }
    
    export const loginPage = new LogInPage();