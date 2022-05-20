
Feature: Login Test
  As user I want to login into nop commerce website
  @sanity
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully
  @smoke @regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should verify the error message "<errormessage>"
    Examples:
      | email              | password | errormessage                                                                                |
      | prime124@gmail.com | prime123 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | prime123@gmail.com | prime145 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | prime123@gmail.com |          | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
  @sanity @smoke @regression
  Scenario: Verify User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "kag2@gmail.com"
    And I enter password "kag123"
    And I click on login button
    Then I should verify logout link is display
  @sanity @regression
  Scenario: Verify User should logOut Successfully
    Given I am on homepage
    When I click on login link
    And I enter email "kag2@gmail.com"
    And I enter password "kag123"
    And I click on login button
    And I click on logout button
    Then I should verify login link is display

