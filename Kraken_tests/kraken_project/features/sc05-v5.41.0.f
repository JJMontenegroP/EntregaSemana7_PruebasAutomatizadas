Feature: Testing ghost app

@user2 @web
Scenario: Crear Tag y borrar el tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click a button "Click a New tag btn" 'a[href="#/tags/new/"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in tag name" 'input[id="tag-name"]' "Tag numero 2"
  And I wait for 3 seconds
  And I click a btn "Click the save tag btn" 'button[data-test-button="save"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 3 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Tag 2"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Tag numero 2"
  And I wait for 3 seconds
  And I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  And I click a button "Click in delete tag btn" 'button[data-test-button="delete-tag"]'
  And I wait for 3 seconds
  And I click a button "Click in delete tag btn" 'button[data-test-button="confirm"]'
  And I wait for 3 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/tags"
  Then I change sshots names
