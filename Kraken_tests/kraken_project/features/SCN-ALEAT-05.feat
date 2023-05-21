Feature: Testing ghost app

@user2 @web
Scenario: Crear post y editarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I update the counter with 1
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I click a button "Click post btn in lateral menu" 'a[class="ember-view gh-secondary-action gh-nav-new-post"]'
  And I fill with text a field fake "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "$name_1"
  And I fill with text a post desc fake "$string_1"
  And I wait for 2 seconds
  And I click a button "Click a publish btn" 'button[data-test-button="publish-flow"]'
  And I wait for 2 seconds
  And I click a button "Click a continue, final review btn" 'button[data-test-button="continue"]'
  And I wait for 2 seconds
  And I click a button "Click a publish post, right now btn" 'button[data-test-button="confirm-publish"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field fake "Fill in with post name" 'input[class="gh-input-with-select-input"]' "$$name_1"
  And I wait for 3 seconds
  And I fill with text a field fake "Fill in with post name" 'input[class="gh-input-with-select-input"]' "$$name_1"
  And I wait for 3 seconds
  And I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  And I fill with text a field fake "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "$name_2"
  And I wait for 2 seconds
  And I fill with text a post desc fake "$string_2"
  And I wait for 2 seconds
  And I click a button "Click a publish btn" 'button[data-test-button="publish-save"]'
  And I wait for 2 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds