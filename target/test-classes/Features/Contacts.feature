Feature: Free CRM create contacts
Scenario Outline:CRM Create a new COntacts Scenario
Given User is already on Login Page
When title of Login Page is FreeCRM
Then User enters "<username>" and "<password>"
Then User clicks on Login Button
Then User is on Login Page
Then user moves to Contacts Page
Then user clicks on new Contact Link
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
Then user clicks on save button
Then close browser

Examples:
	| username | password | firstname | lastname | position |
	| naveenk  | test@123 | Tom       | Peter    | manager  |   
	| naveenk  | test@123 | David     | Dsouza   | Director |