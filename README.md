# Ishivox web app

The Ishivox organization website, built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and locally owned shadcn/ui components. PDF Studio is the featured project.

## Development

Requires Node.js 20.9+ and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The initial standalone mockup is archived in the ignored `reference/` folder; the app runs entirely from `src/`.

## Repository structure

```text
src/
  app/
    (marketing)/          Shared header/footer layout and public pages
      page.tsx            Homepage
      projects/
        page.tsx          Project directory
        pdf-studio/       PDF Studio detail page
    globals.css           Tailwind and shared theme tokens
    layout.tsx            Root metadata and organization schema
    robots.ts             Deployment-aware crawler policy
    sitemap.ts            Public route discovery
    opengraph-image.tsx    Generated social-sharing image
  components/
    ui/                   Owned shadcn-style primitives (Radix, CVA, Tailwind)
    layout/               Header, footer, brand, mobile navigation
    sections/             Server-rendered homepage sections
    projects/             Featured project and product concept illustration
    motion/               Shared motion controls, SVG scenes, and canvas globe
    theme/                System-aware provider and persistent header toggle
  styles/                 Marketing layout, project styles, and motion tokens
  config/                 Site identity and navigation
  content/                Typed project content
  lib/                    Metadata, SEO policy, and class-name utilities
 tests/                   SEO policy and HTTP regression tests
```

The public pages are Server Components and prerender at build time. Mobile navigation is a small client island using a Radix dialog for keyboard navigation, focus trapping, and dismissal. `components.json` supports adding more shadcn/ui components with `npx shadcn@latest add <component>`.

## Domains and SEO

Temporary defaults are **https://ishivox.k8pai.com** for this organization site and **https://pdf-studio.k8pai.com** for the PDF Studio application. They live in `src/config/domains.ts`; `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_PDF_STUDIO_URL` override them at build time. `.env.example` contains the same values. Change the defaults or the environment variables when permanent domains are ready.

A production build emits canonical URLs, indexable metadata, a sitemap, Organization schema, and PDF Studio source-code and breadcrumb schema for the configured domains. Development servers and Vercel preview deployments stay noindex. The sitemap contains only this organization site's routes; the separately hosted PDF Studio application has its own SEO configuration.

Each page has a unique title, description, Open Graph and Twitter metadata. The social image is generated locally at `/opengraph-image`. Fonts are bundled locally; there are no Google Fonts requests. Important content is present in server-rendered HTML. These are technical SEO foundations, not a guarantee of search ranking.

PDF Studio copy reflects the engine/API implementation; the editor mockup is clearly marked as a product concept. The **Open PDF Studio** link targets its configured application domain. Update project content in `src/content/projects.ts` as development progresses.

## Themes

The header's sun/moon button switches between light and dark mode on every page, including mobile. `next-themes` follows the system preference until a visitor explicitly selects a theme, persists that choice in `ishivox-theme`, and applies it before the initial paint. CSS controls the icon so the server and client markup match. The root HTML hydration exception is scoped to the theme class.

The dark palette covers the layout, shadcn components, animated bento, SVG connections, canvas globe, dialogs, and PDF Studio workspace. The printable PDF sheet intentionally remains white inside the dark editor preview.

## Validation

```bash
npm run typecheck
npm test
npm run format:check
npm run build
npm start
# In a second terminal, against the running production server:
npm run test:seo
```

The HTTP checks default to the temporary production origin and production indexing. For a different origin or a preview build, pass matching expectations (`TEST_INDEXABLE=false` for preview):

```bash
TEST_BASE_URL=http://localhost:3000 TEST_SITE_ORIGIN=https://your-new-domain.example TEST_INDEXABLE=true npm run test:seo
```

`NEXT_PUBLIC_*` values are public and embedded at build time; rebuild after changing them. Run `npm run build` in an environment that permits Next.js worker processes and local socket binding. Do not run development and production builds against the same `.next` folder concurrently.

## Continuous integration

GitHub Actions runs one **CI / Checks** job on pushes and pull requests using Node.js 24 and a cached npm download directory. It installs the lockfile with `npm ci`, checks formatting (including workflow YAML), runs unit tests, builds the production app with TypeScript checking, and runs SEO HTTP tests against a temporary production server. Failed HTTP checks include the server log for diagnosis.

The workflow uses read-only repository permissions, cancels superseded runs for the same ref, and has a 15-minute timeout. No secrets or deployment credentials are required. Vercel hosting remains separate.

## Motion

The reference-inspired motion uses CSS keyframes for the connector beams, collaboration tiles, rocket, task sequence, and document scan. A small client provider coordinates viewport visibility and one-time scroll reveals with IntersectionObserver and the Web Animations API. The dotted globe uses a canvas capped at 30 fps and pauses outside the viewport or when the tab is hidden. No animation library is required.

The footer’s **Pause motion** control stops decorative loops across routes. The operating system’s `prefers-reduced-motion` setting disables loops and entrance motion automatically. Server-rendered content remains visible when JavaScript is unavailable, and the globe includes a static CSS fallback. Product illustration motion is decorative; it does not imply a released editor or a real PDF generation request.
