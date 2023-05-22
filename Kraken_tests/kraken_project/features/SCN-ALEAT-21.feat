Feature: Testing ghost app

@user1 @web
Scenario Outline: crear member y borrar member
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click a button "Click on the new member option" 'a[href="#/members/new/"]'
  And I wait for 3 seconds
  When I type a fake value in 'input[class="ember-text-field gh-input ember-view"]' with "$name_1"
  And I wait for 2 seconds
  When I type a fake value in 'input[id="member-email"]' with "$email_1"
  And I wait for 2 seconds
  When I type a fake value in 'textarea[id="member-note"]' with "$url_1"
  And I wait for 3 seconds
  And I click a button "Click on save btn" 'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  And I click a button "Click on the new member option" 'h3[class="ma0 pa0 gh-members-list-name "]'
  And I wait for 2 seconds
  And I click a button "Click on the settings member option" 'button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete member option" 'button[data-test-button="delete-member"]'
  And I wait for 3 seconds
  And I click a button "Click on the delete member option" 'button[data-test-button="confirm"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  Then I change sshots names