Feature: Testing ghost app

@user2 @web
Scenario: Crear Post y eliminar el post creado
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I click a button "Click post btn in lateral menu" 'a[class="ember-view gh-secondary-action gh-nav-new-post"]'
  And I fill with text a field "Fill Post title" 'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]' "Segundo Post"
  And I fill with text a post desc "Este es mi segundo Post"
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
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "S post"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Segundo Post"
  And I wait for 3 seconds
  And I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  And I click a btn "Click in the settings btn" 'button[title="Settings"]'
  And I wait for 3 seconds
  And I click a btn "Click in the settings btn" 'div[class="settings-menu-delete-button"]'
  And I wait for 3 seconds
  Then I click a btn "Click in the settings btn" 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  Then I change sshots names