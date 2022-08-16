Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given user hasn't given a preference on number of events
When user is on the app
Then 32 events are displayed by default

Scenario: User can change the number of events they want to see
Given user wants a certain number of events to see
When user is on the app
Then user specified number of events display