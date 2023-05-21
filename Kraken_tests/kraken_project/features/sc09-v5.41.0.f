Feature: Testing ghost app

@user2 @web
Scenario: Buscar post creado previamente y despublicarlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click a search btn in side menu" 'button[class="gh-nav-btn-search"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "pp pos"
  And I wait for 3 seconds
  And I fill with text a field "Fill in with post name" 'input[class="gh-input-with-select-input"]' "Tercer Post"
  And I wait for 3 seconds
  And I click a btn "Click the search result" 'li[class="ember-power-select-option"]'
  And I wait for 3 seconds
  And I click a button "Click in unpublish btn" 'button[data-test-button="update-flow"]'
  And I wait for 2 seconds
  And I click a button "Click a revert to draft btn" 'button[data-test-button="revert-to-draft"]'
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
  And I wait for 2 seconds
  Then I click a button "Click in the drafted post" 'a[class="ember-view permalink gh-list-data gh-post-list-title"]'
  And I wait for 2 seconds
  Then I change sshots names