$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Tab",
  "description": "As user I want to Computer tab into nop commerce website",
  "id": "computer-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computerpage"
    }
  ]
});
formatter.before({
  "duration": 5657993200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-tab;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should Verify Computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 116741500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 631574500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userShouldVerifyComputerText()"
});
formatter.result({
  "duration": 61915000,
  "status": "passed"
});
formatter.after({
  "duration": 814348600,
  "status": "passed"
});
formatter.before({
  "duration": 2859858100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-tab;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should Verify Desktops text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 506294100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 450747500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userShouldVerifyDesktopsText()"
});
formatter.result({
  "duration": 43024100,
  "status": "passed"
});
formatter.after({
  "duration": 756840800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 30,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 31,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 32,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 33,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2871004600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Computerpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 678269800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 564300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 928246600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 95317700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 90721800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 70027000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 89701600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 71637900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 42633500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 345448600,
  "status": "passed"
});
formatter.after({
  "duration": 728673500,
  "status": "passed"
});
formatter.before({
  "duration": 2984959700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Computerpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 491964900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 411039600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 699289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 36622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 166340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 58953800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 66782800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 63803400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 36738600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 844125500,
  "status": "passed"
});
formatter.after({
  "duration": 696141900,
  "status": "passed"
});
formatter.before({
  "duration": 2692993500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Computerpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select OS \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 156500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 568741600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 465415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 903902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 74980800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 68392000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 73800500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 32226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 59746100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 46713300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 843052200,
  "status": "passed"
});
formatter.after({
  "duration": 728686900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.before({
  "duration": 2208280500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 58200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 494251300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 31506600,
  "status": "passed"
});
formatter.after({
  "duration": 755857700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify the error message \"\u003cerrormessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errormessage"
      ],
      "line": 18,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "prime124@gmail.com",
        "prime123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "prime123@gmail.com",
        "prime145",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "prime123@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2797774100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"prime124@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"prime123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 467740900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime124@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 79199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 71011200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 396236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 27583300,
  "status": "passed"
});
formatter.after({
  "duration": 773138500,
  "status": "passed"
});
formatter.before({
  "duration": 2946716800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"prime123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"prime145\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 477200100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 72158200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime145",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 78566400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 379343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 25436700,
  "status": "passed"
});
formatter.after({
  "duration": 747756100,
  "status": "passed"
});
formatter.before({
  "duration": 2287266200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@loginpage"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"prime123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 508362600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 83127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66844500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 425253400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 33278500,
  "status": "passed"
});
formatter.after({
  "duration": 839526800,
  "status": "passed"
});
formatter.before({
  "duration": 3114203000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter email \"kag2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should verify logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 487348200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag2@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 86861700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 81593700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 665365200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldVerifyLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 41927900,
  "status": "passed"
});
formatter.after({
  "duration": 754670900,
  "status": "passed"
});
formatter.before({
  "duration": 2884583400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify User should logOut Successfully",
  "description": "",
  "id": "login-test;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter email \"kag2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should verify login link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 509125400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag2@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 75251100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 75762700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 648969600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 607488200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldVerifyLoginLinkIsDisplay()"
});
formatter.result({
  "duration": 23967700,
  "status": "passed"
});
formatter.after({
  "duration": 721207700,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As user I want to register into nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@registerpage"
    }
  ]
});
formatter.before({
  "duration": 2736343700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should Verify register text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 465912600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyRegisterText()"
});
formatter.result({
  "duration": 22355200,
  "status": "passed"
});
formatter.after({
  "duration": 706716500,
  "status": "passed"
});
formatter.before({
  "duration": 2861352900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register-test;user-should-verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the error message for mandatory field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 506036600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 56034500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyTheErrorMessageForMandatoryField()"
});
formatter.result({
  "duration": 403089000,
  "status": "passed"
});
formatter.after({
  "duration": 724814100,
  "status": "passed"
});
formatter.before({
  "duration": 2849964400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter firstname \"Krisha\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter lastname \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Dob \"5\",\"June\",\"2001\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter email register page \"kag3@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password register page \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter confirm password \"kag123\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 484462800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 66401600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krisha",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 67475900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 52119400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    },
    {
      "val": "June",
      "offset": 18
    },
    {
      "val": "2001",
      "offset": 25
    }
  ],
  "location": "RegisterSteps.iSelectDob(String,String,String)"
});
formatter.result({
  "duration": 140666600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag3@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterEmailRegisterPage(String)"
});
formatter.result({
  "duration": 58041900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag123",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iEnterPasswordRegisterPage(String)"
});
formatter.result({
  "duration": 48932600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kag123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 51813300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 698467700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyMessage()"
});
formatter.result({
  "duration": 23464200,
  "status": "passed"
});
formatter.after({
  "duration": 732179700,
  "status": "passed"
});
});