# FocusFlow: Event-Driven Productivity Landing Page

## Summary

FocusFlow is a browser-based focus tracker that turns a productivity landing page into a working event-driven app. It gives users a Pomodoro/custom timer, a task board, an ambient video rest zone, and persistent progress tracking without relying on a frontend framework.

## Problem

Many focus tools separate timer, task, and progress workflows into different screens or apps. For this project, the goal was to create one smooth single-page experience where the user can start a session, define what they are working on, control their focus environment, and see progress afterward.

## Solution

The app is organized as a scrolling landing experience with functional sections:

- The hero introduces the product and shows live progress counters.
- The timer section handles Pomodoro and custom focus sessions.
- The task board lets users create, complete, filter, and remove tasks.
- The rest zone embeds ambient lo-fi playback and logs video events.
- The stats section summarizes sessions, focused minutes, completed tasks, and history.

## Key Implementation Details

FocusFlow uses a central JavaScript `state` object for timer, tasks, stats, video, and UI state. Rendering functions update the DOM whenever the state changes, while `localStorage` preserves tasks, timer configuration, stats, and session history across page reloads.

The event-driven behavior is the core of the project. User events such as clicks, form submissions, keyboard shortcuts, and scroll actions trigger state updates. Browser and API events such as page load, intersection visibility, and YouTube playback callbacks keep the interface responsive to changes outside direct button clicks.

## Features Demonstrated

- Dynamic DOM rendering for tasks, counters, session history, and video event logs.
- Timer state transitions between focus, short break, and long break phases.
- Input validation for task creation, including duplicate active-task prevention.
- Persistent user data through `localStorage`.
- Keyboard accessibility shortcuts for common actions.
- Scroll-based visual feedback through parallax and reveal effects.
- External API integration through the YouTube IFrame API.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- YouTube IFrame API
- Browser `localStorage`

## Outcome

The finished project works as both an interactive productivity tool and a case study for event-driven programming. It demonstrates how lifecycle events, user input events, keyboard events, scroll events, observer callbacks, external API callbacks, and persistence can work together inside one cohesive frontend experience.

## Screenshots

![Landing hero](screenshots/landing-hero.png)

![Focus timer](screenshots/focus-timer.png)

![Task board](screenshots/task-board.png)

![Rest zone](screenshots/rest-zone.png)

![Stats dashboard](screenshots/stats-dashboard.png)
