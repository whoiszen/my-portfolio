# FocusFlow Case Study

FocusFlow is a single-page focus tracker built to demonstrate event-driven programming in a polished productivity interface. It combines a landing page, Pomodoro/custom timer, task board, ambient video zone, and stats dashboard into one persistent browser experience.

## Project Overview

The app helps users structure deep work sessions, track what they are working on, and review progress over time. It is designed as a landing-page-style productivity tool: the hero introduces the experience, then each scroll section exposes a specific workflow.

Screenshots are included in `screenshots/`:

- `landing-hero.png`
- `focus-timer.png`
- `task-board.png`
- `rest-zone.png`
- `stats-dashboard.png`

## Features

- Hero section with animated loading, parallax background, CTA buttons, and live summary counters.
- Pomodoro timer with focus, short break, and long break phases.
- Custom timer mode with hour, minute, and second inputs.
- Timer controls for start/pause, reset, skip phase, and keyboard shortcuts.
- Task board with validation, category selection, priority levels, quick notes, filters, and clear-completed action.
- Ambient rest zone using the YouTube IFrame API, custom play/pause/mute controls, and real-time event logging.
- Stats dashboard for total sessions, focused minutes, completed tasks, sessions today, and session history.
- Persistent data using `localStorage` for tasks, stats, and timer configuration.

## Tech Stack

- HTML5 for semantic page structure.
- CSS3 for responsive layout, glass-style UI cards, animations, gradients, and section styling.
- Vanilla JavaScript for state management, DOM rendering, user interaction, timer logic, persistence, and API callbacks.
- YouTube IFrame API for ambient video integration.
- Browser `localStorage` for client-side persistence.

## Event-Driven Highlights

- `window.load` initializes saved state, renders UI, injects timer SVG styling, and dismisses the loader.
- Click events drive timer controls, sidebar navigation, task actions, and video controls.
- `submit` events validate and create tasks.
- `keydown` events support shortcuts such as Space, R, S, M, and Escape.
- `scroll` events update parallax movement, active navigation, topbar styling, and reveal animations.
- `IntersectionObserver` reacts to section visibility for ambient video behavior.
- YouTube `onStateChange` callbacks update video event counters and log entries.
- `localStorage` creates a persistence loop where UI actions update state, state is saved, and reloads restore the experience.

## Portfolio Positioning

This project is strongest as a frontend interaction and event-driven programming case study. It shows how a no-framework JavaScript app can still provide structured state, dynamic rendering, persistent user data, and a cohesive multi-section interface.

## How to Run

Open `index.html` directly in a browser. No build step or package installation is required.
