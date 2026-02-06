# Replit.md

## Overview

This is a mobile-first business website for **Hnos. Cantueño Fontaneros Valencia**, a plumbing company based in Valencia, Spain. The site is designed as a lead generation tool — its primary goals are driving inbound phone calls, enabling 24/7 appointment booking, and capturing form submissions (inquiries). The entire UI is in Spanish. It's a single-page application with smooth scroll navigation between sections: Hero, About, Services, Tips, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router) — currently only two routes: Home (`/`) and a 404 fallback
- **Styling**: Tailwind CSS with CSS variables for theming, using shadcn/ui component library (New York style)
- **UI Components**: Full shadcn/ui component suite lives in `client/src/components/ui/`. Custom business components (Navigation, ServiceCard, ContactForm, Footer) are in `client/src/components/`
- **Animations**: Framer Motion for scroll animations and page transitions
- **Smooth Scrolling**: react-scroll for navigation anchor links within the single-page layout
- **Forms**: React Hook Form with Zod validation (using `@hookform/resolvers`)
- **Data Fetching**: TanStack React Query for server state management
- **Typography**: Outfit (display/headings) and Plus Jakarta Sans (body) via Google Fonts
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx` in development
- **API Structure**: A shared route definition pattern in `shared/routes.ts` that defines API paths, methods, input schemas, and response schemas. The server implements these in `server/routes.ts`
- **Current Endpoints**:
  - `POST /api/inquiries` — Creates a new inquiry (contact form submission) with Zod validation
- **Build Process**: Custom build script (`script/build.ts`) uses Vite for the client and esbuild for the server. The server output is a single CJS bundle at `dist/index.cjs`, and client assets go to `dist/public/`
- **Dev Server**: Vite dev server runs as middleware on the Express server with HMR support

### Data Storage
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation from table definitions
- **Schema Location**: `shared/schema.ts` — shared between client and server
- **Current Tables**:
  - `inquiries`: id (serial PK), name (text), email (text), phone (text), message (text), createdAt (timestamp, default now)
- **Migrations**: Drizzle Kit with `drizzle-kit push` command (`npm run db:push`)
- **Storage Layer**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation, making it easy to swap storage backends

### Shared Code
- `shared/schema.ts` — Database table definitions and Zod validation schemas (used by both client forms and server validation)
- `shared/routes.ts` — API contract definitions including paths, methods, input/output schemas. This creates a type-safe API contract between frontend and backend

## External Dependencies

- **PostgreSQL**: Required database, connection via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) driver with connection pooling
- **Google Fonts**: Outfit, Plus Jakarta Sans, DM Sans, Fira Code, Geist Mono loaded via CDN in `client/index.html` and CSS imports
- **Replit Plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — loaded conditionally when running on Replit
- **No external auth service**: No authentication is currently implemented
- **No email/SMS service**: Form submissions are stored in the database only; no notification integrations yet