Feature: Testing ghost app

@user1 @web
Scenario: Editar una nueva pagina y validar que quedo editada
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I log in
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I click a button "Click on the created member" 'h3[class="gh-content-entry-title"]'
  And I wait for 2 seconds
  And I fill with text a field "Fill Page title" 'textarea[placeholder="Page title"]' "Test Page EDITED"
  And I wait for 3 seconds
  And I fill with text a field "Fill Page content" 'div[data-placeholder="Begin writing your page..."]' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  And I wait for 3 seconds
  And I click a button "Click on publish btn" 'button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]'
  And I wait for 3 seconds
  And I click a button "Click on confirm btn" 'button[data-test-button="continue"]'
  And I wait for 3 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 3 seconds
  Then I change sshots names