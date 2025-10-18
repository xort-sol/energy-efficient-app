# Nationwide Energies - Business Energy Platform

## Overview

Nationwide Energies is a B2B energy comparison and switching platform for UK businesses. The application allows businesses to request quotes for electricity, gas, water, and green energy services, while providing information about different energy plans and tariffs. The platform emphasizes trust, transparency, and competitive pricing with a modern, professional design inspired by leading UK energy providers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and API interactions
- React Hook Form with Zod validation for form handling

**UI Framework:**
- shadcn/ui component library (Radix UI primitives with custom styling)
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette: Deep Navy (primary brand), Emerald Green (sustainability), Bright Orange (CTAs)
- Inter font family from Google Fonts
- Mobile-first responsive design approach

**Component Structure:**
- Page components in `client/src/pages/` for each route (Home, Electricity, Gas, Water, GreenEnergy, Quote, Contact, About, Support)
- Reusable UI components: Header, Footer, Hero, ServiceCard, PlanCard, ProcessStep
- Form components with validation using react-hook-form and zod resolvers
- Comprehensive shadcn/ui component library in `client/src/components/ui/`

**State Management:**
- TanStack Query for API data fetching and caching
- React Hook Form for form state
- Local component state with React hooks
- Toast notifications for user feedback

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js framework
- TypeScript for type safety across the stack
- ESM (ES Modules) throughout the application

**API Design:**
- RESTful API endpoints under `/api` prefix
- Quote requests: `POST /api/quotes`, `GET /api/quotes`
- Contact requests: `POST /api/contact`, `GET /api/contact`
- JSON request/response format with structured error handling
- Zod schema validation on incoming requests using `zod-validation-error` for user-friendly messages

**Data Storage:**
- In-memory storage implementation (`MemStorage` class) for development/demo purposes
- Database schema defined using Drizzle ORM with PostgreSQL dialect
- Schema includes: users, quoteRequests, contactRequests tables
- Prepared for PostgreSQL integration via Neon serverless driver
- Drizzle Kit configured for schema migrations

**Request/Response Flow:**
1. Client submits form data via TanStack Query mutations
2. Backend validates input against Zod schemas
3. Data stored via storage abstraction layer (IStorage interface)
4. Success/error responses returned with structured JSON
5. Client displays toast notifications based on response

**Error Handling:**
- Zod validation errors converted to user-friendly messages
- HTTP status codes: 201 (created), 400 (validation error), 500 (server error)
- Centralized error middleware in Express
- Detailed logging for API requests with duration tracking

### Data Models

**Quote Request Schema:**
- Business information: type, company name, contact details
- Service requirements: electricity/gas/water/multi-fuel/green energy
- Usage data: annual electricity and gas consumption
- Additional context via message field
- Auto-generated UUID and timestamp

**Contact Request Schema:**
- Contact information: name, email, phone
- Request classification: callback/general/support
- Subject and message fields
- Auto-generated UUID and timestamp

**User Schema:**
- Basic authentication structure (username/password)
- UUID primary key
- Prepared for future admin/authentication features

### Development Environment

**Build and Development:**
- Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation with strict mode enabled
- Path aliases configured: `@/` for client, `@shared/` for shared code
- Development-only Replit plugins for error overlay and debugging
- esbuild for production server bundling

**Code Organization:**
- Monorepo structure with client, server, and shared directories
- Shared schema definitions between frontend and backend
- Component co-location with related UI components
- Centralized configuration files at root level

## External Dependencies

### Core Framework Dependencies
- **Express.js**: Web server framework handling HTTP routing and middleware
- **React & React DOM**: Frontend UI library
- **Vite**: Build tool and development server with fast HMR

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL with schema-first approach
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-zod**: Integration layer between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

### UI Component Library
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, select, tabs, toast, etc.)
- **shadcn/ui**: Pre-built component patterns combining Radix UI with Tailwind CSS

### Form Handling & Validation
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Integration with validation libraries
- **zod**: TypeScript-first schema validation
- **zod-validation-error**: User-friendly error message formatting

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management, caching, and synchronization

### Styling & UI Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styles
- **clsx & tailwind-merge**: Conditional class name utilities
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel/slider component

### Routing
- **wouter**: Minimalist routing library for React

### Date Handling
- **date-fns**: Modern date utility library

### Development Tools
- **TypeScript**: Static type checking
- **@replit/vite-plugin-***: Development plugins for Replit environment
- **drizzle-kit**: CLI tool for database migrations and schema management

### Build Tools
- **esbuild**: Fast JavaScript bundler for production server build
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **tsx**: TypeScript execution for development server