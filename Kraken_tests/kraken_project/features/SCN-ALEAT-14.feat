Feature: Testing ghost app

@user1 @web
Scenario: Editar email en información del perfil con valor invalido
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I update the counter with 1
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click in the avatar image in left menu" 'span[class="absolute dib ba b--white br-100 gh-whats-new-badge-account"]'
  And I wait for 3 seconds
  And I click a button "Click in your profile item" 'a[data-test-nav="user-profile"]'
  And I wait for 3 seconds
  And I fill with text a field fake "Fill in with full name" 'input[id="user-name"]' "$name_1"
  And I wait for 3 seconds
  And I fill with text a field fake "Fill in with email" 'input[id="user-email"]' "$string_1"
  And I wait for 3 seconds
  And I fill with text a field fake "Fill in with full name" 'input[class="gh-input user-slug"]' "$url_1"
  And I wait for 3 seconds
  Then I find an element "description fullname error" 'p[class="response]"'
  And I wait for 3 seconds