Feature: Testing ghost app

@user1 @web
Scenario: Crear un nuevo miembro y validar que existe
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click a button "Click on the new member option" 'a[href="#/members/new/"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Name" 'input[class="ember-text-field gh-input ember-view"]' "Jhon Doe"
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Email" 'input[id="member-email"]' "test@test.com"
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Email" 'textarea[id="member-note"]' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  And I wait for 3 seconds
  And I click a button "Click on save btn" 'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  Then I change sshots names