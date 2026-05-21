# AERORUN

**Live Demo:** [https://aerorun.vercel.app/](https://aerorun.vercel.app/)

AERORUN is a premium, cinematic sports footwear e-commerce frontend built with Next.js, React, TypeScript, and Tailwind CSS. The project presents an original dark performance sneaker brand with an editorial landing page, product catalog routes, collection pages, and a complete frontend cart/search experience.

The design direction is luxury athletic retail: dark charcoal surfaces, large display typography, soft glass cards, cinematic product photography, subtle motion, rounded image systems, and conversion-focused product showcases.

## What This Project Does

- Presents a premium performance footwear brand landing page.
- Provides dedicated pages for Catalog, Men, Women, New Arrivals, Collections, About, and Contact.
- Uses local optimized WebP campaign and product images from `public/images`.
- Preloads above-the-fold hero images with eager loading and high fetch priority.
- Includes a functional frontend search modal for products.
- Includes a cart drawer with add, remove, increment, decrement, clear cart, subtotal, and localStorage persistence.
- Supports responsive desktop, tablet, and mobile layouts.
- Keeps navigation and footer links connected to real routes and page sections.

## Core Features

- Cinematic hero section with dark editorial visuals.
- Best seller product grid with animated product cards.
- Product cards with add-to-cart actions.
- Search overlay with live product filtering.
- Cart drawer with quantity controls and persistent state.
- Dedicated catalog page with expanded product lineup.
- Men and Women product edit pages.
- New Arrivals product drop page.
- Dedicated New Arrivals sneaker imagery, separate from the core catalog products.
- Collections page for Running, Training, Lifestyle, and Basketball.
- Dedicated Collections page campaign imagery, separate from the landing page cards.
- About page with brand, technology, sustainability, blog, and careers anchors.
- Contact page with support form and customer service sections.
- Responsive mobile navigation with search/cart access.
- Smooth scroll anchors with fixed-header offset.
- Rounded/oval image and panel language across the interface.

## Tech Stack

- **Next.js 16**: App Router, static routes, optimized image handling.
- **React 19**: Component-based UI and client-side commerce interactions.
- **TypeScript**: Typed product data, cart state, and reusable components.
- **Tailwind CSS 4**: Utility-first responsive styling and custom dark visual system.
- **lucide-react**: UI icons for navigation, cart, search, controls, and feature blocks.
- **Simple Icons**: Social icons for Instagram, TikTok, and X.
- **Sharp**: Image optimization/conversion workflow for local WebP assets.
- **ESLint**: Code quality checks through the Next.js ESLint setup.

## Image Performance

All campaign and product assets are local WebP files. Above-the-fold hero images are explicitly preloaded and rendered with eager loading, high fetch priority, and synchronous decoding hints so the main editorial visuals are requested as early as possible during page load.

The project also disables runtime image optimization for local images through `next.config.ts`, allowing the browser to request the already-optimized WebP files directly from `/public/images` instead of waiting for on-demand `_next/image` processing.

## Project Structure

```text
src/
  app/
    page.tsx              Home landing page
    catalog/page.tsx      Full catalog route
    men/page.tsx          Men's edit route
    women/page.tsx        Women's edit route
    new-arrivals/page.tsx Product drop route
    collections/page.tsx  Collection category route
    about/page.tsx        Brand story route
    contact/page.tsx      Contact/support route
    layout.tsx            Global layout and providers
    globals.css           Global theme, animation, and base styles
  components/
    commerce-context.tsx  Cart/search state management
    product-data.ts       Shared product data
    product-card.tsx      Reusable product card
    site-header.tsx       Navigation, search modal, cart drawer
    site-footer.tsx       Footer links and contact/social columns
    page-hero.tsx         Reusable editorial page hero
    section-heading.tsx   Reusable section heading
public/
  images/                 Local WebP brand, product, and editorial assets
```

## Pages

- `/` - Premium landing page with hero, best sellers, technology, editorial banner, collections, newsletter, and footer.
- `/catalog` - Product catalog with filters, product grid, sale, and gift card sections.
- `/men` - Men's performance footwear edit.
- `/women` - Women's performance footwear edit.
- `/new-arrivals` - Latest product drop page.
- `/collections` - Movement-based collection categories.
- `/about` - Brand story and company information.
- `/contact` - Contact form, support cards, and customer-service anchors.

## Frontend Commerce Behavior

The cart is handled entirely on the frontend through `CommerceProvider`.

Supported actions:

- Add products from product cards or search results.
- Open and close cart drawer.
- Increase and decrease quantities.
- Remove individual products.
- Clear the full cart.
- Calculate subtotal.
- Persist cart state in `localStorage`.

Search is also frontend-only and filters the shared product data by name, subtitle, and badge.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js will automatically choose another available port.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- All website copy is in English.
- All product and campaign visuals are local WebP files.
- No external hotlinked images are used.
- The project is currently a frontend prototype and does not include backend checkout, authentication, payment processing, or order APIs.
