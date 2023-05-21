Feature: Testing ghost app

@user1 @web
Scenario: Editar la zona horaria de la pagina
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="email ember-text-field gh-input ember-view"]' 'input[class="password ember-text-field gh-input ember-view"]' 'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3001/ghost/#/settings/general/"
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'div.gh-setting button'
  And I wait for 2 seconds
  And I click a button "Click on the expand timezone menu" 'div.gh-setting select'
  And I wait for 2 seconds
  And I click a button "Click on the timezone" 'option[value="America/Bogota"]'
  And I wait for 2 seconds
  And I click a button "Click on the Save button" 'section.view-actions button'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/settings/general/"
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'div.gh-setting button'
  And I wait for 2 seconds
  Then I change sshots names