Feature: Login

  Scenario: Valid Login
    Given Im on the login page
    When I enter valid credentials
    And I should be logged in
    And I search for a product
    And I add the product in the cart
    Then I should see the product in the cart
