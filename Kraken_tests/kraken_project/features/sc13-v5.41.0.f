Feature: Testing ghost app

@user1 @web
Scenario: Eliminar un miembro y validar que quedo eliminado.
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click a button "Click on the new member option" 'h3[class="ma0 pa0 gh-members-list-name "]'
  And I wait for 2 seconds
  And I click a button "Click on the settings member option" 'button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete member option" 'button[data-test-button="delete-member"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete member option" 'button[data-test-button="confirm"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  Then I change sshots names