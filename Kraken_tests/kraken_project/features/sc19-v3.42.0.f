Feature: Testing ghost app

@user1 @web
Scenario: Editar el idioma de las publicaciones de la página.
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="email ember-text-field gh-input ember-view"]' 'input[class="password ember-text-field gh-input ember-view"]' 'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3001/ghost/#/settings/general/"
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'div.gh-setting-last button'
  And I wait for 2 seconds
  And I fill with text a field "Edit Site title" 'div.gh-setting-last input' "es-test"
  And I wait for 2 seconds
  And I click a button "Click on the Save button" 'section.view-actions button'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/settings/general/"
  And I wait for 2 seconds
  And I click a button "Click on the expand button" 'div.gh-setting-last button'
  And I wait for 2 seconds
  Then I change sshots names