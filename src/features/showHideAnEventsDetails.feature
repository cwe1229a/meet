Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given home page of the app is opened
When user hasn’t selected a particular event
Then event details will collapse

Scenario: User can expand an event to see its details
Given user wants to get more info about an event
When user clicks on the selected event
Then details for that chosen even expand out

Scenario: User can collapse an event to hide its details
Given user wants to hide info about a chosen event
When user clicks on the selected event expanded details
Then the details collapse