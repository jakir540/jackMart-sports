# JackMart Sports E-Commerce Website

A fully-featured e-commerce platform for sporting goods, offering a seamless user experience for both customers and admins. Built with **React**, **TypeScript**, **Vite**, and **Redux Toolkit**, this platform supports product management, checkout, and dynamic filtering, ensuring a professional and modern design.

## Live Demo

- **Frontend**: [Live Demo](https://jack-mart-sports.vercel.app/)
- **Backend API**: [API Backend](https://jack-mart-sports-backend.vercel.app/api)

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Ant Design, TailwindCSS
- **Backend**: Node.js, Express, MongoDB (NoSQL)
- **State Management**: Redux Toolkit (RTK Query)
- **UI Components**: Ant Design, TailwindCSS
- **Styling**: Custom CSS, TailwindCSS
- **Payment**: Stripe Integration (optional)
- **Image Viewing**: React Photo View (optional)
- **Rating System**: React Rating
- **Build Tools**: Vite, ESLint, TypeScript

## Key Features

### 1. Unified User Role

- Single user role managing both admin and customer functionalities.

### 2. Product Management (Admin)

- **Add** new products to the catalog.
- **Edit** existing products with a pre-filled form to avoid redundancy.
- **Delete** products with confirmation and updates in real-time.
- **Notifications**: Toast/modal notifications on add, update, or delete using Ant Design.

### 3. Homepage

- **Hero Section**: Carousel showcasing discounts and latest products.
- **Featured Products**: Highlighted section for latest products, displayed in card format with product details.
- **Categories**: Display product categories with quick links to filter products.
- **Contact Us**: Functional contact form. (Optional: Integrated with EmailJS or NodeMailer).

### 4. All Products Page

- **Search**: Search for products by name.
- **Filters**: Filter products by category, price, brand, rating, etc.
- **Sorting**: Sort products by ascending/descending prices.
- **Clear Filters**: Reset filters to view all products.
- **Pagination**: Display products with pagination (optional).

### 5. Single Product Page

- **Detailed Product View**: Includes name, description, category, brand, stock quantity, price, and rating.
- **Image Gallery**: View product images in a full-screen photo view.
- **Add to Cart**: Add product to cart. If already in cart, increase quantity.
- **Stock Control**: Add-to-cart button gets disabled when stock reaches the maximum quantity.

### 6. Cart and Checkout

- **Cart Management**: View all added products, modify quantity, and remove products.
- **Cart Calculations**: Includes product prices, taxes (15% VAT), and total price.
- **Checkout Process**: Proceed to checkout if items are in stock. Choose between Cash on Delivery and Stripe Payment.
- **Order Placement**: Stock is automatically updated after successful checkout.

### 7. Manage Products Page (Admin)

- **Add Products**: Admin can add new products using a form.
- **Edit Products**: Admin can edit products with pre-filled existing data.
- **Delete Products**: Admin can delete products, with confirmation modals for each action.
- **Real-time UI updates**: The product list updates automatically after each operation using RTK Query.

### 8. Responsive Design

- Mobile-first design ensures compatibility across all devices, including desktops, tablets, and smartphones.

## Pages Overview

### 1. **Homepage**

- Carousel showcasing discounts.
- Featured products with detailed cards.
- Product categories for quick filtering.
- Contact form for customer inquiries.

### 2. **About Us**

- Information about the company.
- Mission, vision, and values.
- Store locations and contact details.
- Meet the team section.

### 3. **All Products**

- Full product listing.
- Filters by price, category, brand, and rating.
- Sorting options for easy browsing.
- Search functionality for specific products.

### 4. **Single Product Page**

- Detailed information about a specific product.
- Product images, description, price, stock quantity, and rating.
- Add to Cart functionality with stock limitations.

### 5. **Cart Page**

- Displays all items added to the cart.
- Modify product quantity or remove items.
- Shows subtotal, VAT (15%), and total price.
- Checkout button leads to payment.

### 6. **Checkout Page**

- Form to collect user details (name, email, phone, and address).
- Payment options: Cash on Delivery or Stripe.
- Successful order placement updates stock and redirects to success page.

### 7. **Manage Products Page**

- Admin can add, edit, or delete products.
- All actions reflected in real-time using RTK Query.

## Installation and Setup

### Prerequisites

- Node.js v16+ and npm

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jakir540/jackMart-sports.git
   cd jackmart-sports
   npm install
   npm run dev
   ```
2. Clone the repository:
   ```bash
   git clone https://github.com/jakir540/jack_mart_sports_backend.git
   cd jackmart-sports-backend
   npm install
   MONGODB_URI=your-mongodb-uri
   STRIPE_API_KEY=your-stripe-api-key
   npm run dev
   ```
