# LearnHub

LearnHub is a web-based learning hub integration system for IT students and professionals. It brings free certification-oriented courses from Microsoft Learn, IBM SkillsBuild, and Cisco NetAcad into one searchable catalog, then supports enrollment, progress tracking, evidence review, certificate generation, and email notifications.

This project was built as a Laravel + Inertia + Vue capstone system with separate student and administrator workflows.

## Project Highlights

- Aggregates free IT learning content into a single course catalog.
- Lets students browse, filter, bookmark, enroll, and track progress.
- Supports screenshot evidence submissions for progress verification.
- Gives admins tools to manage users, course visibility, evidence review, email broadcasts, and notification logs.
- Generates downloadable PDF certificates after approved completion.
- Uses queued mail and scheduled jobs for certificate emails, broadcasts, and weekly course alerts.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Backend | Laravel 11, PHP 8.2+ |
| Frontend | Vue 3, Inertia.js |
| Styling | Tailwind CSS |
| Authentication | Laravel Breeze, session auth, role middleware |
| Database | MySQL 8.x |
| ORM | Laravel Eloquent |
| Build Tool | Vite |
| PDF Generation | barryvdh/laravel-dompdf |
| Email | Laravel Mail, SMTP |
| Queue and Scheduler | Laravel Queue, database driver, Laravel Scheduler |
| Testing | PHPUnit |

## Snapshot Gallery

| Page | Preview |
| --- | --- |
| Home | ![Home](docs/screenshots/01-home.png) |
| Login | ![Login](docs/screenshots/02-login.png) |
| Register | ![Register](docs/screenshots/03-register.png) |
| Student Dashboard | ![Student Dashboard](docs/screenshots/04-student-dashboard.png) |
| Student Course Catalog | ![Student Course Catalog](docs/screenshots/05-student-courses.png) |
| Student Course Detail | ![Student Course Detail](docs/screenshots/06-student-course-detail.png) |
| Student Progress | ![Student Progress](docs/screenshots/07-student-progress.png) |
| Student Bookmarks | ![Student Bookmarks](docs/screenshots/08-student-bookmarks.png) |
| Student Certificates | ![Student Certificates](docs/screenshots/09-student-certificates.png) |
| Admin Dashboard | ![Admin Dashboard](docs/screenshots/10-admin-dashboard.png) |
| Admin Users | ![Admin Users](docs/screenshots/11-admin-users.png) |
| Admin User Detail | ![Admin User Detail](docs/screenshots/12-admin-user-detail.png) |
| Admin Course Management | ![Admin Course Management](docs/screenshots/13-admin-courses.png) |
| Admin Evidence Queue | ![Admin Evidence Queue](docs/screenshots/14-admin-evidence.png) |
| Admin Email Broadcast | ![Admin Email Broadcast](docs/screenshots/15-admin-email.png) |
| Admin Audit Log | ![Admin Audit Log](docs/screenshots/16-admin-audit-log.png) |

## Core Workflows

### Student

- Create an account and define IT interest areas such as Cloud, Networking, Cybersecurity, DevOps, Programming, or Data.
- Browse a unified course catalog from multiple providers.
- Filter courses by provider, category, level, and search text.
- Enroll in courses, update progress, and bookmark courses for later.
- Submit completion evidence for administrator review.
- Download certificates after verified course completion.

### Administrator

- View platform summary metrics and course distribution.
- Manage registered users and user details.
- Manage the aggregated course catalog.
- Review submitted evidence and approve or reject progress claims.
- Send email broadcasts to users.
- Review notification activity through an audit log.

## Project Structure

```text
learnhub/
|-- app/
|   |-- Http/Controllers/
|   |   |-- Admin/
|   |   |-- Auth/
|   |   `-- User/
|   |-- Jobs/
|   |-- Mail/
|   |-- Models/
|   `-- Services/
|-- database/
|   |-- migrations/
|   `-- seeders/
|-- docs/
|   `-- screenshots/
|-- resources/
|   |-- css/
|   |-- js/
|   |   |-- Components/
|   |   `-- Pages/
|   `-- views/
|-- routes/
|   `-- web.php
`-- tests/
```

## Local Setup

### Prerequisites

- PHP 8.2 or higher
- Composer 2.x
- Node.js 18 or higher
- npm
- MySQL 8.x

### Installation

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Create a MySQL database named `learnhub`, then update the database values in `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=learnhub
DB_USERNAME=root
DB_PASSWORD=
```

Run the database setup:

```bash
php artisan migrate --seed
php artisan storage:link
```

Start the application:

```bash
npm run dev
php artisan serve
```

The app will be available at `http://localhost:8000`.

## Demo Accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@learnhub.app | password |
| Student | juan@student.edu | password |
| Student | maria@student.edu | password |
| Student | carlo@student.edu | password |
| Student | ana@student.edu | password |
| Student | ben@student.edu | password |

## Background Jobs

Run the queue worker to process email jobs:

```bash
php artisan queue:work
```

Run the scheduler manually during local testing:

```bash
php artisan schedule:run
```

## Notes

- Microsoft Learn uses a public catalog endpoint.
- IBM SkillsBuild and Cisco NetAcad are represented with fallback seed data because they do not expose a public course API for this use case.
- The course aggregation service is designed to use live data where available and seed data when an external source is unavailable.
