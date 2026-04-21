# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal homepage for 崔勇 (Cui Yong), a professor at Tsinghua University. Built with Next.js 16 App Router.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Styling**: Tailwind CSS v4 with CSS custom properties (design tokens)
- **Animation**: Framer Motion for page transitions
- **Icons**: Lucide React
- **Testing**: Playwright for E2E

## Commands

```bash
pnpm dev      # Start dev server at localhost:3000
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Architecture

### Page Routing
- Pages live in `app/[route]/page.tsx`
- Page transitions are handled by `app/template.tsx` (framer-motion AnimatePresence)
- Each route has its own subdirectory under `app/`

### Component Organization
- `components/layout/` — Header, Footer, MobileNav (persistent shell)
- `components/sections/` — Page-specific sections (Hero, Awards, Projects, etc.)
- `components/ui/` — Reusable UI primitives (Button, Card, Badge, etc.)
- `lib/utils.ts` — Utility functions (cn for className merging)

### Content Data
Static content is stored in `content/*.json` files and imported by section components. Do not hardcode content in components.

### Design System
Design tokens defined as CSS custom properties in `app/globals.css`. Uses Oklch color space for consistent, perceptually uniform colors.

## Known Issues

- Research areas (`网络安全`, `低时延传输技术`, `流媒体传输`) have `href: "#"` in `components/sections/ResearchAreas.tsx` — no pages exist yet
- Navigation items in `Header.tsx` and `lib/constants.ts` may drift out of sync — keep them consistent

## Page Structure

All pages follow the same layout:
```tsx
<Header />
<main id="main-content">
  <SectionComponents />
</main>
<Footer />
<MobileNav />
```
