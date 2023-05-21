Feature: Testing ghost app

@user1 @web
Scenario: Editar un miembro y validar que quedo editado
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click a button "Click on the created member" 'h3[class="ma0 pa0 gh-members-list-name "]'
  And I wait for 2 seconds
  And I fill with text a field "Fill Member Name" 'input[class="ember-text-field gh-input ember-view"]' "Alice Doe"
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Email" 'input[id="member-email"]' "alice@doe.com"
  And I wait for 3 seconds
  And I click a button "Click on save btn" 'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  Then I change sshots names