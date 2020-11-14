# My Code Quiz

## Table of Contents
The following readme contains these sections:

* [Screenshot](#Screenshot)
* [Usage](#Usage)
* [Live-Link](#Live-Link)
* [License](#License)

## Screenshot

![Code Quiz Homepage](./assets/images/screenshot.png)

## Usage

[My Code Quiz](https://joey-sisk.github.io/CodeQuiz/) was designed using only vanilla JavaScript, HTML, and CSS. The quiz features a timer that decreases and turns red if the user chooses a wrong answer. If the user answers every question or runs out of time they will br prompted to enter their name which will saved along with their final score to the local memory. When the home page loads up again the page will fill out the leaderboard with the top scores and their scores. 

This would not have been possible without the help of my tutor Kumar Ramanathan, my instructor Calvin Carter, all of the class TA's, and many of my fellow UT Bootcamp students.

## Live-Link

[You can find a link to the live site here.](https://joey-sisk.github.io/CodeQuiz/)

## License

There is not currently a license for this service as it is only a homework assignment for the UT Coding Bootcamp Class 2020-2021






# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js library](https://momentjs.com/) to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

Implement the following user story:

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

Aim to meet the following acceptance criteria:

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```