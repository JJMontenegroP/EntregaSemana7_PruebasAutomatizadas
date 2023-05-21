Feature: Testing ghost app

@user2 @web
Scenario: Crear Post y revisar que existe
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I log in with data a priori
  | user | password | classElements |
  | danie | erazo | input[class="email ember-text-field gh-input ember-view"] |
  And I wait for 2 seconds
  When I log in with data a priori
  | danie | erazo | input[class="password ember-text-field gh-input ember-view"] |
  And I wait for 2 seconds  
