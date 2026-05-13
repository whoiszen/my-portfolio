# WorkHub Marketplace

A full-stack service marketplace built with **Laravel** and a **single-page application** frontend powered by **Inertia.js + Vue 3**.

## Overview
WorkHub Marketplace connects three key roles:
- **Clients** post service jobs.
- **Freelancers** browse approved jobs and submit applications.
- **Admins** moderate jobs and manage users/categories.

The application is designed around a clear lifecycle for both **jobs** and **applications** (approval, rejection, and closure), with role-based access controls and clean separation between public browsing and authenticated dashboards.

## Why this project (portfolio case study)
Many marketplace prototypes become unmaintainable once role workflows, moderation, and UI states multiply. This project demonstrates a pragmatic architecture:
- Laravel handles the domain rules and lifecycle transitions (approval, rejection, eligibility checks).
- Inertia renders a responsive dashboard experience without building a separate API-driven SPA.
- Vue pages/components are organized by role and feature area (Client/Freelancer/Admin) to keep UI changes localized.

## Tech Stack
- **Backend:** Laravel (v12)
- **Frontend:** Vue 3 (TypeScript)
- **SPA bridge:** Inertia.js (@inertiajs/vue3)
- **Routing helpers:** Ziggy
- **Styling:** Tailwind CSS
- **Bundling:** Vite
- **UI utilities:** headlessui/vue, lucide icons
- **Testing:** Pest (Laravel testing stack)

## Key Features
### Public marketplace browsing
- Browse **approved** jobs and filter by **search** + **category**.
- Public job details are protected: freelancers/admins may preview their own context while keeping the marketplace clean.

**Example implementation:**
- `PublicJobController@index` renders `Jobs/Index` using Inertia.
- `PublicJobController@show` enforces visibility and computes application eligibility.

### Role-based workflows
Routing is organized by role and enforced via middleware:
- `/client/*` (authenticated clients)
- `/freelancer/*` (authenticated freelancers)
- `/admin/*` (authenticated admins)

Workflows:
- **Clients** create/update jobs → submit for admin approval
- **Freelancers** apply to jobs → admin reviews applications (accept/reject)
- **Admins** moderate jobs → approve/reject; manage categories and user status

### Domain-driven states (enums)
Lifecycle status is modeled using PHP enums:
- `JobStatus`: `pending`, `approved`, `rejected`, `closed`
- `ApplicationStatus`: `pending`, `accepted`, `rejected`

This keeps status handling consistent across controllers, models, and UI.

### Clean data modeling
Main Eloquent models:
- `Job` (slug-based routing, approvals metadata, applications relationship)
- `Application` (job + freelancer link, review metadata)
- `Category` (slug generation + job counts)
- `FreelancerProfile` (skills, portfolio links, hourly rate)
- `User` (role + status via enums)

Notable model behaviors:
- `Job` and `Category` auto-generate unique slugs on save.

### Modern UI shell
A role-aware sidebar layout that changes navigation based on the current authenticated user:
- `resources/js/layouts/DashboardLayout.vue` renders different nav items for **admin**, **client**, and **freelancer**.

## Architecture (high-level)
- **Laravel Controllers** return Inertia pages with exactly the props needed for rendering.
- Shared props are centralized in Inertia middleware:
  - `app/Http/Middleware/HandleInertiaRequests.php`
  - Includes auth user details, flash messages, and app name.
- **Vue pages** live under `resources/js/pages/*` and are loaded via Vite’s Inertia page resolver.

## Notable Implementation Details
- **Inertia + Vue SPA bootstrapping**
  - `resources/js/app.ts` sets up `createInertiaApp` with dynamic page component resolution.
- **Marketplace filters**
  - `resources/js/pages/Jobs/Index.vue` loads public jobs via the API endpoint and applies search/category filters with debouncing.
- **Budget formatting and UX polish**
  - Job cards format budget ranges and provide clear empty/loading states.

## Setup & Run
1. Install PHP dependencies:
   ```bash
   composer install
   ```
2. Configure environment:
   - Copy `.env.example` to `.env` and set database credentials.
3. Install JS dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
5. Run database migrations:
   ```bash
   php artisan migrate
   ```

## Testing
This project uses Pest for automated tests. Run the test suite with:
```bash
php artisan test
```

## Deployment notes
- Uses Vite for asset bundling (`vite.config.ts`) and Laravel for server-side routing.
- Inertia middleware handles the root view and shared props, which simplifies deployment to standard Laravel environments.

---

Built as a portfolio case study to demonstrate full-stack delivery with role-based marketplace workflows, clean Laravel domain modeling, and a modern Inertia + Vue user experience.

