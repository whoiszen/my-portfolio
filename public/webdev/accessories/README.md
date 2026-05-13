# 💎 Lumière Accessories — Laravel Breeze E-Commerce

A **fully-featured accessories e-commerce platform** built with Laravel 10 + Laravel Breeze. Showcases rings, necklaces, bracelets, earrings, anklets, brooches, and watches with a beautiful gold-accented UI.

---

## ✨ Features

### 🛍️ Storefront
- **Landing Page (Welcome)** — Hero section, category grid, featured products, testimonials, and CTA banner
- **Products Listing** — Filterable by category, sortable by price/rating/newest, with pagination
- **Product Detail** — Full info, image gallery, star ratings, material, stock count, related products
- **Category Pages** — Rings, Necklaces, Bracelets, Earrings, Anklets, Brooches, Watches
- **Search** — Live search across product names, descriptions, and materials
- **About Us** — Brand story, values, team, and mission
- **Community Page** — Initiatives displayed as project cards with detail view

### 🔐 Authentication (Laravel Breeze)
- Register, Login, Forgot Password, Email Verification
- Authenticated users can: add to cart, wishlist, buy, and track orders
- Guests are redirected to login when attempting to cart/buy

### 🛒 Shopping
- **Cart** — Add, update quantity, remove items, clear cart
- **Wishlist** — Toggle products to/from wishlist
- **Checkout** — Shipping address form, payment method (COD, GCash, Card)
- **Free Shipping** — Automatically applied on orders ₱1,500+

### 📦 Order Management
- **My Orders** — Full order history with status badges
- **Order Detail** — Line items, delivery address, payment info, cancel option
- **Order Tracking** — Visual step-by-step tracker (Pending → Confirmed → Processing → Shipped → Delivered)
- **Stock Management** — Stock decrements on purchase, restores on cancel

### 👤 User Dashboard
- Order stats, total spent, cart count, wishlist count
- Quick links to orders, cart, wishlist, shop
- Recent order history with status
- Edit profile (name, email, phone, address, password)

### 🎨 UI/UX
- **Responsive Navbar** — Desktop dropdown + mobile hamburger menu
- **Footer** — Collections links, help, newsletter signup, social icons, payment badges
- **Flash Messages** — Success/error auto-dismiss toasts
- **Alpine.js** — User dropdown, interactive cart quantity
- **Tailwind CSS** — Utility-first responsive design
- Gold (#C9A84C) brand accent color with Playfair Display + Inter typography

---

## 🚀 Installation

### Requirements
- PHP 8.1+
- Composer
- Node.js 18+ & npm
- MySQL / SQLite

### Steps

```bash
# 1. Clone or extract the project
cd accessories-shop

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Environment setup
cp .env.example .env
php artisan key:generate

# 5. Configure your database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lumiere_accessories
DB_USERNAME=root
DB_PASSWORD=

# 6. Run migrations & seed
php artisan migrate --seed

# 7. Build frontend assets
npm run dev

# 8. Start the server
php artisan serve
```

Visit: **http://localhost:8000**

---

## 🔑 Demo Credentials

| Field    | Value              |
|----------|--------------------|
| Email    | demo@lumiere.com   |
| Password | password           |

---

## 📁 Project Structure

```
app/
├── Http/Controllers/
│   ├── Auth/               # Laravel Breeze auth controllers
│   ├── CartController.php  # Cart CRUD
│   ├── OrderController.php # Checkout & order management
│   ├── PageController.php  # Welcome, About, Community, Dashboard
│   ├── ProductController.php
│   ├── ProfileController.php
│   └── WishlistController.php
├── Models/
│   ├── User.php            # cart_count, wishlist helpers
│   ├── Product.php         # CATEGORIES, scopes, accessors
│   ├── CartItem.php        # subtotal accessor
│   ├── Order.php           # status tracking, can_cancel
│   ├── OrderItem.php
│   └── Wishlist.php
└── Policies/
    └── CartItemPolicy.php  # Authorization

resources/views/
├── layouts/
│   ├── app.blade.php       # Main layout (nav + footer)
│   └── auth.blade.php      # Auth layout
├── welcome.blade.php       # Landing page
├── dashboard.blade.php     # User dashboard
├── pages/
│   ├── about.blade.php
│   └── community.blade.php
├── products/
│   ├── index.blade.php     # All products + filter sidebar
│   ├── show.blade.php      # Product detail
│   ├── category.blade.php  # Category page
│   └── search.blade.php    # Search results
├── cart/index.blade.php
├── orders/
│   ├── index.blade.php
│   ├── show.blade.php      # Order detail + tracking
│   └── checkout.blade.php
└── wishlist/index.blade.php

database/
├── migrations/             # All 6 tables
└── seeders/DatabaseSeeder.php  # 14 demo products + demo user
```

---

## 🗄️ Database Schema

| Table        | Key Fields                                          |
|--------------|-----------------------------------------------------|
| users        | name, email, password, phone, avatar, address       |
| products     | name, slug, category, price, sale_price, stock, ... |
| cart_items   | user_id, product_id, quantity                       |
| orders       | user_id, order_number, status, total, shipping_*    |
| order_items  | order_id, product_name, price, quantity             |
| wishlists    | user_id, product_id                                 |

---

## 🛤️ Routes

| Method | URI                           | Name                 | Auth     |
|--------|-------------------------------|----------------------|----------|
| GET    | /                             | welcome              | —        |
| GET    | /about                        | about                | —        |
| GET    | /community                    | community            | —        |
| GET    | /products                     | products.index       | —        |
| GET    | /products/category/{category} | products.category    | —        |
| GET    | /products/{slug}              | products.show        | —        |
| GET    | /products/search              | products.search      | —        |
| GET    | /dashboard                    | dashboard            | ✅ Auth  |
| GET    | /cart                         | cart.index           | ✅ Auth  |
| POST   | /cart/add/{product}           | cart.add             | ✅ Auth  |
| PATCH  | /cart/update/{item}           | cart.update          | ✅ Auth  |
| DELETE | /cart/remove/{item}           | cart.remove          | ✅ Auth  |
| GET    | /checkout                     | checkout             | ✅ Auth  |
| POST   | /checkout                     | checkout.process     | ✅ Auth  |
| GET    | /orders                       | orders.index         | ✅ Auth  |
| GET    | /orders/{order}               | orders.show          | ✅ Auth  |
| POST   | /orders/{order}/cancel        | orders.cancel        | ✅ Auth  |
| GET    | /wishlist                     | wishlist.index       | ✅ Auth  |
| POST   | /wishlist/toggle/{product}    | wishlist.toggle      | ✅ Auth  |

---

## 📸 Product Categories & Seeded Data

14 pre-seeded products across all 7 categories:

- **Rings** — Rose Gold Infinity Ring, Diamond-Cut Stackable Ring, Pearl Cluster Statement Ring
- **Necklaces** — Gold Layered Chain, Crystal Teardrop Pendant, Bohemian Turquoise Collar
- **Bracelets** — Tennis Diamond Bracelet, Beaded Healing Crystal, Gold Charm Bangle Set
- **Earrings** — Pearl Drop Earrings, Geometric Hoop Earrings
- **Anklets** — Delicate Gold Anklet
- **Watches** — Rose Gold Minimalist Watch
- **Brooches** — Vintage Floral Enamel Brooch

---

## 🧩 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Backend    | Laravel 10, PHP 8.1               |
| Auth       | Laravel Breeze (Blade stack)      |
| Frontend   | Blade Templates, Tailwind CSS 3   |
| JS         | Alpine.js 3, Vite                 |
| Database   | MySQL / SQLite                    |
| Fonts      | Google Fonts (Playfair + Inter)   |

---

## 🔧 Customization Tips

- **Brand name**: Search-replace `Lumière` across views
- **Currency**: Update `₱` symbol in views/controllers
- **Categories**: Edit `Product::CATEGORIES` constant
- **Shipping threshold**: Update `1500` in CartController and OrderController
- **Payment methods**: Extend the checkout form and processCheckout method
- **Email notifications**: Add Laravel Mail / Notification on order creation

---

*Built as a showcase project for a Filipino accessories seller business niche.*
