$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "CRM Create a new COntacts Scenario",
  "description": "",
  "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1265066,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "CRM Create a new COntacts Scenario",
  "description": "",
  "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"Tom\" and \"Peter\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 9025734805,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Login_Page_is_FreeCRM()"
});
formatter.result({
  "duration": 10268151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 188911625,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 4281000721,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 7775993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_Contacts_Page()"
});
formatter.result({
  "duration": 44380976,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 2154057682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 30
    },
    {
      "val": "Peter",
      "offset": 40
    },
    {
      "val": "manager",
      "offset": 52
    }
  ],
  "location": "LoginStepDefination.user_enters_firstname_and_lastname(String,String,String)"
});
formatter.result({
  "duration": 310079736,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 99201621,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 332699450,
  "status": "passed"
});
formatter.before({
  "duration": 34133,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "CRM Create a new COntacts Scenario",
  "description": "",
  "id": "free-crm-create-contacts;crm-create-a-new-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 7392546225,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Login_Page_is_FreeCRM()"
});
formatter.result({
  "duration": 9669538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 183655524,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 22513850015,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 14816841,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_Contacts_Page()"
});
formatter.result({
  "duration": 50709291,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 1740222088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 30
    },
    {
      "val": "Dsouza",
      "offset": 42
    },
    {
      "val": "Director",
      "offset": 55
    }
  ],
  "location": "LoginStepDefination.user_enters_firstname_and_lastname(String,String,String)"
});
formatter.result({
  "duration": 379870823,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 3211831286,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 192008796,
  "status": "passed"
});
formatter.uri("Features/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Scenario",
  "description": "",
  "id": "deal-data-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 31999,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Create a new deal Scenario",
  "description": "",
  "id": "deal-data-scenario;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commision"
      ],
      "line": 12
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    },
    {
      "cells": [
        "test deal",
        "2000",
        "60",
        "20"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal",
        "3000",
        "70",
        "30"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Login_Page_is_FreeCRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Features/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26026,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Add 2 numbers",
  "description": "",
  "id": "calculator;add-2-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I add 1 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the result should be",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "duration": 1640959,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 622080,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefination.CalculatorSteps.the_result_should_be(int) in file:/C:/Users/Tejaswini/FrameWork/cucumber_maven/target/test-classes/\u0027 with pattern [^the result should be$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then the result should be\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.uri("Features/deal.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Scenario",
  "description": "",
  "id": "deal-data-scenario",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28587,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Create a new deal Scenario",
  "description": "",
  "id": "deal-data-scenario;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 6
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Login_Page_is_FreeCRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deal",
  "description": "",
  "id": "free-crm-deal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 31147,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "create deal test",
  "description": "",
  "id": "free-crm-deal;create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on deal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deal form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "create deal test",
  "description": "",
  "id": "free-crm-deal;create-deal-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-deal;create-deal-test;",
  "rows": [
    {
      "cells": [
        "mail"
      ],
      "line": 15,
      "id": "free-crm-deal;create-deal-test;;1"
    },
    {
      "cells": [
        "mail1"
      ],
      "line": 16,
      "id": "free-crm-deal;create-deal-test;;2"
    },
    {
      "cells": [
        "mail2"
      ],
      "line": 17,
      "id": "free-crm-deal;create-deal-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24320,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "create deal test",
  "description": "",
  "id": "free-crm-deal;create-deal-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 90881,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "create deal test",
  "description": "",
  "id": "free-crm-deal;create-deal-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#//without examples keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: CRM login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of Login Page is FreeCRM"
    },
    {
      "line": 8,
      "value": "#Then User enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 9,
      "value": "#Then User clicks on Login Button"
    },
    {
      "line": 10,
      "value": "#Then User is on Login Page"
    },
    {
      "line": 11,
      "value": "#Then user moves to Contacts Page"
    },
    {
      "line": 12,
      "value": "#Then user clicks on new Contact Link"
    },
    {
      "line": 13,
      "value": "#Then user enters firstname and lastname"
    },
    {
      "line": 14,
      "value": "#Then user clicks on save button"
    },
    {
      "line": 15,
      "value": "#Then close browser"
    }
  ],
  "line": 20,
  "name": "CRM login Test Scenario with DataDriven",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario-with-datadriven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 33,
      "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 34,
      "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;;2"
    },
    {
      "cells": [
        "tom",
        "test456"
      ],
      "line": 35,
      "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37120,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "CRM login Test Scenario with DataDriven",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8581675878,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_Login_Page_is_FreeCRM()"
});
formatter.result({
  "duration": 15806707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 177500863,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 5486424758,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 5604689,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_Contacts_Page()"
});
formatter.result({
  "duration": 42647857,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 1569828634,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_firstname_and_lastname()"
});
formatter.result({
  "duration": 137381429,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2794910468,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 213115551,
  "status": "passed"
});
formatter.before({
  "duration": 36693,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "CRM login Test Scenario with DataDriven",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario-with-datadriven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User is on Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user moves to Contacts Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters firstname and lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_Login_Page()"
});
