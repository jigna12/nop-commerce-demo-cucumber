package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerpage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click Computer tab \"([^\"]*)\"$")
    public void iClickComputerTab(String Computer) {
        new HomePage().clickOnMenuTab(Computer);
    }

    @Then("^User should Verify Computer text$")
    public void userShouldVerifyComputerText() {
        Assert.assertEquals("Computers",new ComputerPage().getPageTitleText());
    }

    @And("^I click on Desktops \"([^\"]*)\"$")
    public void iClickOnDesktops(String Desktop) {
        new ComputerPage().clickOnSubMenu(Desktop);
    }

    @Then("^User should Verify Desktops text$")
    public void userShouldVerifyDesktopsText() {
        Assert.assertEquals("Desktop page not displayed","Desktops",new ComputerPage().getPageTitleText());
    }


    @And("^I Click on product name Build your own computer \"([^\"]*)\"$")
    public void iClickOnProductNameBuildYourOwnComputer(String ProductName) {
        new DesktopsPage().selectProduct(ProductName);
    }

    @And("^I Select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor){
        new BuildYourOwnComputerpage().selectProcessor(processor);
    }

    @And("^I Select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String RAM){
        new BuildYourOwnComputerpage().selectRam(RAM);
    }

    @And("^I Select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String HDD){
        new BuildYourOwnComputerpage().selectHDD(HDD);
    }

    @And("^I Select OS \"([^\"]*)\"$")
    public void iSelectOS(String OS){
        new BuildYourOwnComputerpage().selectOS(OS);
    }

    @And("^I Select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software){
        new BuildYourOwnComputerpage().selectSoftware(software);
    }

    @And("^I Click on ADD TO CART Button$")
    public void iClickOnADDTOCARTButton() {
        new BuildYourOwnComputerpage().clickOnAddToCartButton();
    }

    @Then("^I should Verify message The product has been added to your shopping cart$")
    public void iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart() {
        Assert.assertEquals("Product cart message not dispaly", "The product has been added to your shopping cart", new BuildYourOwnComputerpage().getProductAddedMessage());
    }

}
