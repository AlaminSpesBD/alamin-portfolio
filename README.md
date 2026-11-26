# Alamin — Personal Portfolio

A modern, responsive personal portfolio built with React, Vite, Framer Motion, Lucide icons, and CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy to Cloudflare Pages

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Choose **Create application → Pages → Connect to Git**.
3. Select `AlaminSpesBD/alamin-portfolio` and the `main` branch.
4. Use these build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy. Cloudflare will assign a `.pages.dev` address. If available, set the project name to `alaminspesbd` to use `alaminspesbd.pages.dev`.

The exact `.pages.dev` hostname is subject to availability in Cloudflare. A Cloudflare account and the user's authorization are required to connect the repository and publish.

## Personal details

Portrait, contact links, and CV can be added when supplied.
