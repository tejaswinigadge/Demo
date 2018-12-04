@FunctionalTest
Feature: Free CRM application testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and correct password
Given this is valid login

@RegressionTest
Scenario: Login with incorrect username and incorrect password
Given this is invalid login

@SmokeTest
Scenario: create a contact
Given this is contact test case

@SmokeTest @RegressionTest
Scenario: create a deal
Given this is deal test case

@RegressionTest
Scenario: create a tasks
Given this is task test case

@SmokeTest
Scenario: create a case
Given this is case test case

@SmokeTest @RegressionTest
Scenario: verify left panel link
Given this is clicking on left panel

@SmokeTest
Scenario: search a deal
Given this is search a deal test

@SmokeTest
Scenario: search a contact
Given this is search a contact test 

@SmokeTest @RegressionTest
Scenario: search a case
Given this is search a case test

@SmokeTest @RegressionTest
Scenario: search a task
Given this is search a tast test

@SmokeTest @End2End
Scenario: search a call
Given this is search a call test

@SmokeTest @End2End
Scenario: search a email
Given this is search a email test

@SmokeTest @End2End
Scenario: search a docs
Given this is search a docs test

@SmokeTest @End2End
Scenario: search a forms
Given this is search a forms test

@End2End
Scenario: search a report
Given this is search a reort test

@End2End
Scenario: search a logout
Given this is search a logout test

Scenario: close browser
Given this is browser close
