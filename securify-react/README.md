# sentinel

data security SaaS landing page — React + TypeScript + Tailwind CSS + React Router

## stack

- **vite** — build tool
- **react 19** — ui framework
- **typescript** — typed everything
- **tailwind css v3** — utility styling
- **react-router-dom v7** — client-side routing

## pages

| route | component | description |
|-------|-----------|-------------|
| `/` | `Home.tsx` | hero + features + how it works + CTA |
| `/platform` | `Platform.tsx` | technical capabilities + architecture |
| `/solutions` | `Solutions.tsx` | per-segment use cases |
| `/company` | `Company.tsx` | team + values |
| `/support` | `Support.tsx` | channels + FAQ |

## structure

```
src/
  components/
    Logo.tsx        ← SVG logo as reusable component
    Navbar.tsx      ← floating pill navbar
    Footer.tsx      ← site footer
  hooks/
    useFadeIn.ts    ← IntersectionObserver scroll animation hook
  pages/
    Home.tsx
    Platform.tsx
    Solutions.tsx
    Company.tsx
    Support.tsx
  App.tsx           ← BrowserRouter + Routes
  main.tsx
  index.css         ← Tailwind + global styles + animations
```

## getting started

```bash
npm install
npm run dev
```

## deploy to netlify

1. push to github
2. connect repo in netlify dashboard
3. build command: `npm run build`
4. publish directory: `dist`
5. add `_redirects` file in `/public`:

```
/*  /index.html  200
```

> the `_redirects` file is required for React Router to work on Netlify — without it, direct URL navigation (e.g. going to `/platform`) returns a 404.
