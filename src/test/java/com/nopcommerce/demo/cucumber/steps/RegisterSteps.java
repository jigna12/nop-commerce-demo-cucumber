package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should Verify register text$")
    public void iShouldVerifyRegisterText() {
        Assert.assertEquals("Register link not display","Register",new RegisterPage().getRegisterText());
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should verify the error message for mandatory field$")
    public void iShouldVerifyTheErrorMessageForMandatoryField() {
        Assert.assertEquals("First Name field error message not displayed",
                new RegisterPage().getValidationErrorMessageForField("FirstName"),
                "First name is required.");
        Assert.assertEquals("Last Name field error message not displayed",
                new RegisterPage().getValidationErrorMessageForField("LastName"),
                "Last name is required.");
        Assert.assertEquals("Email field error message not displayed",
                new RegisterPage().getValidationErrorMessageForField("Email"),
                "Email is required.");
        Assert.assertEquals("Password field error message not displayed",
                new RegisterPage().getValidationErrorMessageForField("Password"),
                "Password is required.");
        Assert.assertEquals("ConfirmPassword field error message not displayed",
                new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"),
                "Password is required.");
    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String Female) {
        new RegisterPage().selectGender(Female);
    }

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String Firstname) {
        new RegisterPage().enterFirstName(Firstname);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String Lastname) {
        new RegisterPage().enterLastName(Lastname);
    }
    @And("^I select Dob \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iSelectDob(String day, String month, String year) {
        new RegisterPage().selectDateOfBirth(day,month,year);
    }

    @And("^I enter email register page \"([^\"]*)\"$")
    public void iEnterEmailRegisterPage(String email) {
        new RegisterPage().enterEmail(email);
    }

    @And("^I enter password register page \"([^\"]*)\"$")
    public void iEnterPasswordRegisterPage(String password) {
        new RegisterPage().enterPassword(password);
    }
    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmpassword) {
        new RegisterPage().enterConfirmPassword(confirmpassword);
    }
    @Then("^I should verify message$")
    public void iShouldVerifyMessage() {
        Assert.assertEquals("Registration completed text not display","Your registration completed",new RegisterPage().getYourRegCompletedText());
    }

}
