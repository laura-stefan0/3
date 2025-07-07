# Course Selection Wizard

## Overview

This is a full-stack course selection wizard application built with React, Express, and PostgreSQL. The application helps students choose the optimal combination of courses from University of the People (UoPeople) and Sophia Learning to complete their General Education requirements efficiently and affordably.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for smooth transitions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod schemas for type-safe validation

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Migration**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### Database Schema
- **Users**: Basic user authentication system
- **Courses**: Course catalog with provider, category, credits, and descriptions
- **Course Selections**: User session-based course selections

### API Endpoints
- `GET /api/courses` - Retrieve all available courses
- `GET /api/courses/category/:category` - Filter courses by category
- `GET /api/courses/provider/:provider` - Filter courses by provider
- `POST /api/selections` - Save course selections
- `GET /api/selections/:sessionId` - Retrieve user selections

### Frontend Pages
- **Home**: Landing page with call-to-action
- **Wizard**: Multi-step course selection interface
- **Summary**: Course selection review and completion

### UI Components
- **CourseCard**: Interactive course selection cards
- **ProgressBar**: Step-by-step progress indicator
- **SummaryCard**: Course category summaries with credit totals

## Data Flow

1. **Course Loading**: Application fetches course data from API on wizard initialization
2. **Category Navigation**: Users progress through Mathematics, Science, and English categories
3. **Course Selection**: Users select courses within each category, with selections stored in local state
4. **Session Management**: Selections are associated with unique session IDs
5. **Data Persistence**: Course selections are saved to PostgreSQL via API calls
6. **Summary Display**: Final step shows comprehensive selection summary

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm and drizzle-kit for database operations
- **UI Library**: @radix-ui components with shadcn/ui styling
- **Query Client**: @tanstack/react-query for API state management
- **Validation**: zod for schema validation
- **Animation**: framer-motion for UI animations

### Development Tools
- **Build Tool**: Vite for development and production builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **PostCSS**: CSS processing with Tailwind CSS

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild compiles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Hot reload with Vite dev server
- **Production**: Compiled Node.js server serving static assets

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Apply database migrations

## Changelog

- July 07, 2025. Initial setup with 3 categories (Mathematics, Science, English)
- July 07, 2025. Updated to correct General Education categories: Communication, Math, Values & Ethical Reasoning, Civilization Studies, Natural Science, Humanities, Social & Behavioral Sciences
- July 07, 2025. Implemented specific course requirements with selection limits:
  - Communication: Pick 1 course (UoPeople vs Sophia)
  - Math: Pick 3 courses (1 from each pair: Algebra, Calculus, Statistics)
  - Values & Ethical Reasoning: Pick 1 course (UoPeople vs Sophia)
  - Civilization Studies: Pick 1 course (UoPeople vs Sophia)
  - Natural Science: Pick 1 course (multiple options each provider)
  - Humanities: Pick 2 courses (multiple options each provider)
  - Social & Behavioral Sciences: Pick 2 courses (multiple options each provider)
- July 07, 2025. Updated progress bar to show animated scrollbar with percentage instead of category names
- July 07, 2025. Added Foundation Courses category with mandatory UoPeople courses (UNIV 0001, UNIV 1001) that auto-select and cannot be changed. Updated Communication category to include mandatory COM 2001 Professional Communication course plus one additional selectable course.
- July 07, 2025. Enhanced Math category Algebra section to offer three Sophia options: Introduction to College Mathematics (easier), College Algebra (recommended equivalent), and Precalculus (harder), with visual difficulty indicators.

## User Preferences

Preferred communication style: Simple, everyday language.