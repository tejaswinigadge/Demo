Feature: CRM login Feature

#//without examples keyword

#Scenario: CRM login Test Scenario
#Given User is already on Login Page
#When title of Login Page is FreeCRM
#Then User enters "naveenk" and "test@123"
#Then User clicks on Login Button
#Then User is on Login Page
#Then user moves to Contacts Page
#Then user clicks on new Contact Link
#Then user enters firstname and lastname
#Then user clicks on save button
#Then close browser




Scenario Outline: CRM login Test Scenario with DataDriven
Given User is already on Login Page
When title of Login Page is FreeCRM
Then User enters "<username>" and "<password>"
Then User clicks on Login Button
Then User is on Login Page
Then user moves to Contacts Page
Then user clicks on new Contact Link
Then user enters firstname and lastname
Then user clicks on save button
Then close browser

Examples:
	| username | password |
	| naveenk  | test@123 |
	| tom      | test456  |



