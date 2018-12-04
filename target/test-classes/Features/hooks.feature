Feature:Free CRM Deal

Scenario:create deal test
Given user is on deal page
When user fills the deal form
Then deal is created


Scenario Outline:create deal test
Given user is on contact page
When user fills the contact form
Then contact is created

Examples:
|mail|
|mail1|
|mail2|