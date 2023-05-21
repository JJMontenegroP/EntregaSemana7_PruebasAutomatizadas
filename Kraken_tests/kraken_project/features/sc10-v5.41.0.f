Feature: Testing ghost app

@user1 @web
Scenario: Editar información del perfil
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click in the avatar image in left menu" 'span[class="absolute dib ba b--white br-100 gh-whats-new-badge-account"]'
  And I wait for 3 seconds
  And I click a button "Click in your profile item" 'a[data-test-nav="user-profile"]'
  And I wait for 3 seconds
  And I fill with text a field "Fill in with full name" 'input[id="user-name"]' "Erazo Mellizo Daniel"
  And I wait for 3 seconds
  Then I click a button "Click in save profile" 'button[data-test-save-button=""]'
  And I wait for 3 seconds
  Then I change sshots names