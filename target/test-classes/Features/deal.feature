Feature: Deal Data Scenario
Scenario: Free CRM Create a new deal Scenario
Given user is already on Login Page
When title of Login Page is FreeCRM
Then user enters username and password
| naveenk |test@123 |
Then user clicks on login button
Then user is on home page
Then user moves to deals page
Then user enters deal details
| test deal | 1000 | 50 | 10 |
Then close the browser