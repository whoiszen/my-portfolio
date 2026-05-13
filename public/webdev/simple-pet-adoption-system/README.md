# PurrBabies Pet Adoption System

PurrBabies is a Laravel-based pet adoption management system for tracking shelter pets, adopters, and completed adoptions in one simple web app. It gives staff a quick dashboard, searchable operational pages, and guarded workflows so adoption records stay tied to the right pet and adopter.

## Project Overview

Animal shelters and small rescue groups often manage pet availability, adopter details, and adoption history across spreadsheets or paper records. That makes it easy to lose context, duplicate work, or mark a pet incorrectly.

PurrBabies solves that by centralizing the adoption workflow:

- View shelter-wide statistics from the home dashboard.
- Manage pet records with name, type, age, and adoption status.
- Track adopters and their adopted pets.
- Record adoptions and automatically mark pets as adopted.
- Remove an adoption record and return the pet to available status.
- Prevent unsafe deletion of adopted pets or adopters with existing adoption records.

## Case Study

### Problem

Shelter staff need a lightweight way to know which pets are available, who adopted each pet, and when the adoption happened. Without a single source of truth, staff may spend time reconciling lists or accidentally offer pets that have already been adopted.

### Solution

The app uses Laravel resource controllers, Eloquent relationships, and an SQLite database to model the core shelter workflow. Pets, adopters, and adoptions are separate records, but the UI joins them where staff need context, such as showing adopter names and adoption dates beside pet records.

### Impact

PurrBabies improves day-to-day shelter operations by making pet availability visible, adoption history traceable, and common admin tasks easier to perform from a browser. The dashboard also gives a quick health check of total pets, available pets, adopted pets, and adopters.

## Tech Stack

- **Backend:** Laravel 12, PHP 8.2
- **Database:** SQLite
- **Frontend:** Blade templates, Bootstrap 5, custom CSS
- **Build Tooling:** Vite, npm
- **Testing:** PHPUnit through Laravel's test runner
- **Data Layer:** Eloquent models, migrations, factories, and seeders

## Screenshots

### Dashboard

![PurrBabies dashboard](screenshots/home.png)

### Pets

![Pets index page](screenshots/pets.png)

### Adopters

![Adopters index page](screenshots/adopters.png)

### Adoptions

![Adoptions index page](screenshots/adoptions.png)

## Main Features

- Dashboard with pet and adopter counts.
- Featured available pets section.
- Recent adoptions list.
- Paginated pet directory with adopter and adoption date details.
- Adopter records connected to adoption history.
- Adoption creation flow using available pets and existing adopters.
- Data integrity rules for deleting adopted pets and adopters with adoption records.

## Data Model

- **Pet:** Stores pet name, type, age, and status.
- **Adopter:** Stores adopter name and contact number.
- **Adoption:** Connects one pet to one adopter with an adoption date.

## Local Setup

```bash
composer install
npm install
php artisan migrate --seed
php artisan serve
```

Then open:

```text
http://127.0.0.1:8000
```

## Useful Commands

```bash
php artisan test
npm run build
php artisan route:list
```

## Project Structure

- `app/Models` contains the pet, adopter, and adoption models.
- `app/Http/Controllers` contains the dashboard and CRUD workflow controllers.
- `database/migrations` defines the SQLite schema.
- `database/seeders` provides sample shelter data.
- `resources/views` contains the Blade pages and shared layout.
- `public/css/theme.css` contains the custom visual styling.
- `screenshots` contains the captured project snapshots used in this README.
