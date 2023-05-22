Feature: Testing ghost app

@user1 @web
Scenario: Cambiar password en información del perfil cuando password actual es incorrecto
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I retrieve data from "oldPassNoMatch"
  And I update the counter with 1
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I click a button "Click in the avatar image in left menu" 'span[class="absolute dib ba b--white br-100 gh-whats-new-badge-account"]'
  And I wait for 3 seconds
  And I click a button "Click in your profile item" 'a[data-test-nav="user-profile"]'
  And I wait for 3 seconds
  And I fill with text a field pseudo "Fill in with password" 'input[id="user-password-old"]' "password"
  And I wait for 3 seconds
  And I fill with text a field pseudo "Fill in with new password" 'input[id="user-password-new"]' "new_password"
  And I wait for 3 seconds
  And I fill with text a field pseudo "Fill in with new password confirmation" 'input[id="user-new-password-verification"]' "new_password"
  And I wait for 3 seconds
  And I click a button "Click in your profile item" 'button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]'
  And I wait for 3 seconds
  Then I click a button "Click the message error" 'button[class="gh-alert-close"]'
  And I wait for 3 seconds

