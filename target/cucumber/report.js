$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/bankAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Creating new account",
  "description": "",
  "id": "creating-new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "User Should Be able to add new account successfully",
  "description": "",
  "id": "creating-new-account;user-should-be-able-to-add-new-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User should be on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User  should enter username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User  should enter Password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User  should click on  signin button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be on Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Should click Bank And Cash",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should click on new account",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should be able to enter account title as \"\u003caccount title\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should be able to enter description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User should be able to enter initial balance as \"\u003cinitial balance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User should be able to enter account number as \"\u003caccount number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User should be able to enter contact person as \"\u003ccontact person\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User should be able to enter phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User should be able to enter Banking url as \"\u003cBanking url\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User should be able to click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User should validate the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "creating-new-account;user-should-be-able-to-add-new-account-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "Password",
        "account title",
        "description",
        "initial balance",
        "account number",
        "contact person",
        "phone",
        "Banking url"
      ],
      "line": 41,
      "id": "creating-new-account;user-should-be-able-to-add-new-account-successfully;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Abcd1234",
        "For techfios",
        "10000000000",
        "any543210987",
        "aabb",
        "666-888-4545",
        "https://search.123yahoo.com/"
      ],
      "line": 42,
      "id": "creating-new-account;user-should-be-able-to-add-new-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1846181100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User Should Be able to add new account successfully",
  "description": "",
  "id": "creating-new-account;user-should-be-able-to-add-new-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User should be on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User  should enter username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User  should enter Password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User  should click on  signin button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be on Dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User Should click Bank And Cash",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should click on new account",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User should be able to enter account title as \"Abcd1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should be able to enter description as \"For techfios\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User should be able to enter initial balance as \"10000000000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User should be able to enter account number as \"any543210987\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User should be able to enter contact person as \"aabb\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User should be able to enter phone as \"666-888-4545\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User should be able to enter Banking url as \"https://search.123yahoo.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User should be able to click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User should validate the page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsDefinitions.User_should_be_on_techfios_login_page()"
});
formatter.result({
  "duration": 1258178000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 32
    }
  ],
  "location": "stepsDefinitions.user_should_enter_username_as(String)"
});
formatter.result({
  "duration": 82172800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 32
    }
  ],
  "location": "stepsDefinitions.user_should_enter_Password_as(String)"
});
formatter.result({
  "duration": 72053600,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.user_should_click_on_signin_button()"
});
formatter.result({
  "duration": 1315460100,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.user_should_be_on_Dashboard()"
});
formatter.result({
  "duration": 5760600,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.User_Should_click_Bank_And_Cash()"
});
formatter.result({
  "duration": 41198100,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.user_should_click_on_new_account()"
});
formatter.result({
  "duration": 833602000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 47
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_account_title_as(String)"
});
formatter.result({
  "duration": 62209400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "For techfios",
      "offset": 45
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_description_as(String)"
});
formatter.result({
  "duration": 61177000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000000000",
      "offset": 49
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_initial_balance_as(String)"
});
formatter.result({
  "duration": 58989200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "any543210987",
      "offset": 48
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_account_number_as(String)"
});
formatter.result({
  "duration": 54377900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aabb",
      "offset": 48
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_contact_person_as(String)"
});
formatter.result({
  "duration": 47760400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "666-888-4545",
      "offset": 39
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_phone_as(String)"
});
formatter.result({
  "duration": 50382500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://search.123yahoo.com/",
      "offset": 45
    }
  ],
  "location": "stepsDefinitions.user_should_be_able_to_enter_Banking_url_as(String)"
});
formatter.result({
  "duration": 61669500,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.user_should_be_able_to_click_submit_button()"
});
formatter.result({
  "duration": 890385000,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinitions.user_should_validate_the_page()"
});
formatter.result({
  "duration": 6918100,
  "status": "passed"
});
formatter.after({
  "duration": 630655200,
  "status": "passed"
});
});