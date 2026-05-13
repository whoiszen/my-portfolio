# MyStore Inventory Management Case Study

## Project Overview

MyStore is a Laravel and Vue inventory management application built for managing a small product catalog, supplier records, and stock levels. The project combines a public storefront experience with an authenticated admin workspace, making it suitable for a portfolio case study that demonstrates full-stack CRUD workflows, API-driven product browsing, authentication, and relational data management.

The public side lets visitors browse available products, search the catalog, and view stock information. The admin side gives verified users a dashboard for managing suppliers, products, and inventory quantities through focused table-based screens.

## Problem Statement

Small businesses often need a lightweight way to organize suppliers, products, and stock without adopting a large enterprise system. This project explores a practical inventory workflow where product information, supplier relationships, and inventory counts are kept in one connected application.

## Core Features

- Public landing page with product-focused calls to action
- Public product catalog with search and paginated API data
- User authentication through Laravel Breeze
- Admin dashboard with quick access to management areas
- Supplier CRUD management
- Product CRUD management with supplier assignment
- Inventory tracking and stock update workflow
- Low-stock visual indicator in the inventory table
- SQLite-backed local development database with seed data

## Tech Stack

- Backend: Laravel 12, PHP 8.2
- Frontend: Vue 3, Inertia.js
- Styling: Tailwind CSS, Tailwind Forms
- Routing and assets: Laravel Vite Plugin, Vite
- Authentication: Laravel Breeze
- Database: SQLite
- API: Laravel JSON endpoint for public product catalog data
- Testing: PHPUnit / Laravel test suite

## Application Structure

- `routes/web.php`: Public, authenticated, profile, and admin CRUD routes
- `routes/api.php`: Product API routes
- `app/Models`: User, Supplier, Product, and Inventory models
- `app/Http/Controllers/Admin`: Supplier, Product, and Inventory controllers
- `app/Http/Controllers/Api/ProductApiController.php`: Public product API controller
- `resources/js/Pages`: Inertia/Vue page components
- `resources/js/Layouts`: Authenticated, guest, and public layouts
- `database/migrations`: Database schema
- `database/seeders`: Admin account and sample inventory data

## Screenshots

The generated snapshots are stored in `case-study/screenshots`.

1. `01-home-hero.png`: Public landing hero section
2. `02-home-features.png`: Public feature cards section
3. `03-login-form.png`: Admin login form
4. `04-public-products-catalog.png`: Public searchable product catalog
5. `05-admin-dashboard-cards.png`: Authenticated admin dashboard
6. `06-admin-suppliers-table.png`: Supplier management table
7. `07-admin-products-table.png`: Product management table
8. `08-admin-inventory-table.png`: Inventory and low-stock tracking table

## Demo Account

Use this seeded account for local admin access:

- Email: `admin@example.com`
- Password: `password`

## Local Setup

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm run build
php artisan serve
```

Then open:

- Public site: `http://127.0.0.1:8000`
- Product catalog: `http://127.0.0.1:8000/products`
- Admin login: `http://127.0.0.1:8000/login`

## Screenshot Capture

Screenshots were generated with the included Node script:

```bash
node case-study/capture-screenshots.mjs
```

The script launches Microsoft Edge in headless mode, captures the public sections, logs in with the seeded admin account, and captures the admin screens.

## Portfolio Notes

This project is a good portfolio example because it shows:

- Full-stack Laravel and Vue integration through Inertia
- Authenticated admin workflows
- Relational CRUD data modeling
- Public API consumption from a Vue page
- Practical inventory use cases such as stock tracking and supplier assignment
- A clean separation between public browsing and internal management screens
