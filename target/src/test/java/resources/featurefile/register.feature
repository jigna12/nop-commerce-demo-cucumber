
Feature: Register Test
  As user I want to register into nop commerce website
  @smoke,@sanity
  Scenario: User should navigate to register page successfully
    Given I am on homepage
    When I click on register link
    Then I should Verify register text
  @sanity,@regression
  Scenario: User should verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory
    Given I am on homepage
    When I click on register link
    And I click on register button
    Then I should verify the error message for mandatory field
  @regression
 Scenario: verify That User Should Create Account Successfully
   Given I am on homepage
   When I click on register link
   And I select gender "Female"
   And I enter firstname "Krisha"
   And I enter lastname "Patel"
   And I select Dob "5","June","2001"
   And I enter email register page "kag3@gmail.com"
   And I enter password register page "kag123"
   And I enter confirm password "kag123"
   And I click on register button
   Then I should verify message
