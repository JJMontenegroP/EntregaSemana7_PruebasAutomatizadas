Feature: Testing ghost app

@user1 @web
Scenario: Crear una nueva pagina y validar que existe
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I click a button "Click on the new page option" 'a[href="#/editor/page/"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill Page title" 'textarea[placeholder="Page title"]' "Test Page"
  And I wait for 3 seconds
  And I fill with text a field "Fill Page content" 'div[data-placeholder="Begin writing your page..."]' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  And I wait for 3 seconds
  And I click a button "Click on publish btn" 'button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]'
  And I wait for 3 seconds
  And I click a button "Click on confirm btn" 'button[data-test-button="continue"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 3 seconds
  Then I change sshots names