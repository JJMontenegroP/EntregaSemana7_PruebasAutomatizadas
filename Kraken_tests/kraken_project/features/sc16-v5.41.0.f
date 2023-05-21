Feature: Testing ghost app

@user1 @web
Scenario: Eliminar una pagina creada y verificar.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I click a button "Click on the created page" 'h3[class="gh-content-entry-title"]'
  And I wait for 2 seconds
  And I click a button "Click on the Settings button" 'button[title="Settings"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete button" 'button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete confirm button" 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 3 seconds
  Then I change sshots names