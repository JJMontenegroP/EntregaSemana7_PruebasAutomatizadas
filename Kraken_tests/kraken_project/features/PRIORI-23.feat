Feature: Testing ghost app

@user1 @web
Scenario Outline: crear member
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  And I update the counter with <id>
  When I log in 'input[class="gh-input email"]' 'input[class="gh-input password"]' 'button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon ember-view"]'
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/site"
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click a button "Click on the new member option" 'a[href="#/members/new/"]'
  And I wait for 3 seconds
  And I fill with text a field "Filling name with priori data" 'input[class="ember-text-field gh-input ember-view"]' "<fullname>"
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Email with priori data" 'input[id="member-email"]' "<email>"
  And I wait for 3 seconds
  And I fill with text a field "Fill Member Description with priori data" 'textarea[id="member-note"]' "<description>"
  And I wait for 3 seconds
  And I click a button "Click on save btn" 'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 3 seconds
  Then I change sshots names

  Examples:
  | id | description |fullname | email |
  | 1 | Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. | John Doe | john@doe.com.co |