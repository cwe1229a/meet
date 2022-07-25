# meet

## 

This app is meant to display events based on the user's entry of location and time. It is a foray into learning TDD

## Languaged and Technologies used
* React

## Writing Test Scenarios

## FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I should be able to see and hide certain event information at my own discretion

Scenario 1: An event element is collapsed by default

* Given – home page of the app is opened
* When – user hasn’t selected a particular event
* Then – event details will collapse

Scenario 2: User can expand an event to see its details

* Given – user wants to get more info about an event
* When – user clicks on the selected event
* Then – details for that chosen even expand out

Scenario 3: User can collapse an event to hide its details

* Given - user wants to hide info about a chosen event
* When - user clicks on the selected event expanded details
* Then - the details collapse


## FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to decide how many events I can see

Scenario 1: When user hasn’t specified a number, 32 is the default number

* Given - user hasn't given a preference on number of events
* When - user is on the app
* Then - 32 events are displayed by default

Scenario 2: User can change the number of events they want to see

* Given - user wants a certain number of events to see
* When - user is on the app
* Then - user specified number of events display


## FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to access the application's information on events even when offline

Scenario 1: Show cached data when there’s no internet connection

* Given - user is offline, cannot connect to internet
* When - user accesses the app
* Then - data should still be available and viewable to user

Scenario 2: Show error when user changes the settings (city, time range)

* Given - user is offline, cannot connect to internet
* When - user tries to change location or time
* Then - error message displays

## FEATURE 5: DATA VISUALIZATION

As a user, I should be able to view data with charts for the events of the city I choose

Scenario 1: Show a chart with the number of upcoming events in each city

* Given - user is on the app on the main page
* When - user wanted to see events
* Then - user will see events displayed in a chart
