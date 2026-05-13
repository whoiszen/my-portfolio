# ProgRest

ProgRest is a gamified gym progress tracker built with Laravel. It turns routine training into a mission loop: users choose a training path, complete workout sessions, earn XP, climb ranks, and receive weekly progress reports with downloadable PDFs and QR-friendly mobile summaries.

The project is styled around a dark, game-like "ascent" experience, but the core problem is practical: keeping workout plans, session proof, performance history, and progress reporting in one place instead of scattered notes, spreadsheets, and screenshots.

## Case Study

### Problem

Fitness tracking often breaks down after the first few weeks because users have to manage too many separate habits: remembering the routine, recording sets, saving progress photos, reviewing trends, and staying motivated. For instructors or admins, reviewing user consistency is also difficult without structured reports.

### Solution

ProgRest combines a structured workout tracker with game progression. Users can follow preset class paths or build custom routines, run a timed mission-style workout session, log set-level performance, upload completion photos, and earn XP based on session effort. Weekly reports summarize training volume, calories, XP, session history, and include PDF/mobile views for sharing or review.

### Outcomes

- A single dashboard for XP, rank, streaks, recent sessions, and leaderboard context.
- Mission-based training screens that guide users through routines and preserve active progress.
- Custom routine building through the Cultivator flow.
- Weekly report generation with downloadable PDFs, QR codes, and email-ready delivery.
- Admin visibility into users, sessions, engagement, and report generation.

## Snapshot Gallery

Screenshots were captured from the seeded local app and stored in `case-study/screenshots`.

| Page | Snapshot |
|---|---|
| Login | [01-login.png](case-study/screenshots/01-login.png) |
| Register | [02-register.png](case-study/screenshots/02-register.png) |
| User Dashboard | [03-user-dashboard.png](case-study/screenshots/03-user-dashboard.png) |
| Missions | [04-missions.png](case-study/screenshots/04-missions.png) |
| Cultivator | [05-cultivator.png](case-study/screenshots/05-cultivator.png) |
| Reports | [06-reports.png](case-study/screenshots/06-reports.png) |
| Report Detail | [07-report-detail.png](case-study/screenshots/07-report-detail.png) |
| Profile | [08-profile.png](case-study/screenshots/08-profile.png) |
| Admin Dashboard | [09-admin-dashboard.png](case-study/screenshots/09-admin-dashboard.png) |
| Admin Users | [10-admin-users.png](case-study/screenshots/10-admin-users.png) |

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | PHP 8.2+, Laravel 11 |
| Frontend | Blade, Tailwind CSS, Alpine.js |
| Build tooling | Vite, PostCSS, Autoprefixer |
| Database | MySQL for normal setup, SQLite supported for local demo snapshots |
| Auth and roles | Laravel auth flow, Spatie Laravel Permission |
| Reports | barryvdh/laravel-dompdf |
| QR codes | simplesoftwareio/simple-qrcode |
| Queues and jobs | Laravel queues for email and report generation |
| Testing baseline | PHPUnit configuration included |

## Main Features

- **XP and ranking:** users progress from rank E through SSS based on XP earned from completed workouts.
- **Class paths:** preset training programs such as Warrior, Mage, Fighter, Assassin, and Healer.
- **Cultivator mode:** custom routine creation for users who want to design their own training path.
- **Mission sessions:** timed workout execution with active progress persistence, set logs, rest state, and completion uploads.
- **Weekly reports:** report list, detail pages, PDF generation, QR-linked mobile views, and email dispatch.
- **Admin tools:** admin dashboard, user list, user detail views, session history, and report generation.
- **Access control:** admin and regular user roles with protected route groups and policies.

## Demo Accounts

| Role | Email | Password |
|---|---|---|
| Admin | `admin@progrest.app` | `Admin@12345` |
| Demo user | `veteran@progrest.app` | `Veteran@12345` |

## Running Locally

Install dependencies first:

```bash
composer install
npm install
```

Create and configure the environment:

```bash
cp .env.example .env
php artisan key:generate
```

For a typical MySQL setup, update `.env` with your database credentials, then run:

```bash
php artisan migrate --seed
npm run build
php artisan serve
```

For the bundled SQLite demo database used for the snapshots, run:

```bash
php artisan migrate:fresh --seed --force
php -S 127.0.0.1:18743 -t public
```

Then visit `http://127.0.0.1:18743`.

## Snapshot Capture

The screenshot script launches headless Edge, logs into the seeded user and admin accounts, and writes PNG files to `case-study/screenshots`.

```bash
$env:APP_URL='http://127.0.0.1:18743'
node case-study/capture-screenshots.mjs
```

## Architecture Notes

- Routes are defined in `routes/web.php` and split into guest, authenticated user, signed report, and admin sections.
- Controllers live in `app/Http/Controllers`, with admin-specific actions under `app/Http/Controllers/Admin`.
- Domain models include `User`, `ClassPath`, `Routine`, `Exercise`, `WorkoutSession`, `SessionSetLog`, `WeeklyReport`, and `ActiveMission`.
- Jobs handle weekly PDF generation and report/session email workflows.
- Policies and Spatie roles protect ownership-sensitive pages such as reports, routines, and admin areas.

## Project Structure

```text
app/
  Console/Commands/       Exercise seeding command
  Http/Controllers/       Auth, dashboard, missions, routines, reports, profile
  Http/Controllers/Admin/ Admin dashboard and management screens
  Jobs/                   PDF and email background work
  Models/                 Core Eloquent entities
database/
  migrations/             Schema for users, routines, sessions, reports, roles
  seeders/                Admin and veteran demo data
resources/
  css/                    Tailwind entry
  js/                     Alpine/Vite entry
  views/                  Blade layouts and feature pages
routes/
  web.php                 Browser routes and middleware groups
case-study/
  screenshots/            Captured project pages
```
