# WebNova — Premium Creative Agency

Modern, minimal, and premium static website for WebNova, a creative agency based in Berlin, Germany with ambitions across the European Union.

Built with **Astro** + **Tailwind CSS**, fully bilingual (EN/DE), dark mode by default, and ready for GitHub Pages.

## ✨ Features

- Fully responsive & mobile-first
- Bilingual support (English + German) with clean i18n
- Dark theme by default with premium aesthetic
- Reusable components (Header, Footer, Button, ProjectCard, ServiceCard, etc.)
- Filterable portfolio
- Smooth interactions and elegant hover states
- Basic SEO + Open Graph
- Optimized for performance
- Ready for GitHub Pages deployment

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionHeader.astro
│   │   └── ServiceCard.astro
│   ├── i18n/
│   │   └── translations.ts          # All translations + helpers
│   ├── layouts/
│   │   └── Layout.astro             # Main layout + SEO
│   ├── pages/
│   │   ├── index.astro              # Home (EN)
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── work.astro
│   │   ├── contact.astro
│   │   └── de/                      # German versions
│   │       ├── index.astro
│   │       ├── about.astro
│   │       └── ...
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## 🚀 Getting Started

### Run locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:4321

### Build for production

```bash
npm run build
```

The site will be generated into the `dist/` folder.

### Preview the build

```bash
npm run preview
```

## 🌍 Bilingual (English + German)

### Current Setup (Simple i18n)

- All UI strings live in `src/i18n/translations.ts`
- `useTranslations(lang)` and `getLangFromUrl()` helpers
- English at root URLs (`/about`, `/work`)
- German at `/de/*` (`/de/about`, `/de/work`)
- Language switcher in the header automatically switches paths
- Pages are thin and pull translated content

### How to add / expand German language support

1. Add new keys to both `en` and `de` objects in `src/i18n/translations.ts`
2. Use `t('your.key')` in components and pages
3. For new pages:
   - Create `src/pages/your-page.astro` (English)
   - Create `src/pages/de/your-page.astro` (German)
4. Update navigation items in Header/Footer if needed
5. For dynamic content (projects, services), store in the translations file or create locale-aware data files

## 🚀 Deploy to GitHub Pages

### Option 1: GitHub Pages (recommended for static)

1. Push this repo to GitHub (e.g. `username/webnova`)
2. Go to repo → **Settings → Pages**
3. Set Source to **GitHub Actions** (or use the classic branch method)

### Option 2: Use Astro + GitHub Actions (best)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. In `astro.config.mjs`, update for your deployment:

```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/webnova',           // only if using a project repo (not user/org site)
});
```

4. Push — GitHub will automatically build and deploy.

**Note:** For custom domains, add a `CNAME` file in `public/` or configure in GitHub settings.

## 🛠 Customization

- **Colors & Theme**: Edit `src/styles/global.css` (CSS variables)
- **Content**: All text is in `translations.ts` + page files
- **New Projects**: Add to the `projects` array in `work.astro` (and `de/work.astro`)
- **Forms**: Contact form uses Formspree — replace the action URL
- **Images**: Currently using picsum.photos. Replace with real optimized images in `public/images/`

## 📦 Tech Stack

- Astro (latest)
- Tailwind CSS v4
- Vanilla JS for interactivity (filters, mobile nav)
- No heavy frameworks — fast and lightweight

## Next Steps

1. Replace placeholder images and content with real work
2. Add real case study pages (e.g. `/work/vesper`)
3. Connect real form backend
4. Add analytics (Plausible / Umami)
5. Set up proper Open Graph images

---

Built with care for WebNova. German precision × European creativity.

## 🚀 Getting Started

### Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:4321

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` folder.

### Bilingual Support

- English is the default language (`/`)
- German is available under `/de/` prefix (e.g. `/de/services`)
- All pages have parallel German versions
- Language switcher is available in the header

### Services (11 Total)

All service landing pages are available at:
- `/services/[slug]`
- `/de/services/[slug]`

With full mega menu navigation and pricing tables.

## ☁️ Cloudflare Worker (Lead Forms)

Lead forms on service pages are ready to connect to Cloudflare D1.

See `workers/README.md` for setup instructions:
1. Create D1 database `webnova-db`
2. Deploy the worker `workers/webnova-leads.js`
3. Update the `WORKER_URL` in `ServiceLanding.astro`

## 📦 GitHub Pages Deployment

1. Push to `main` or `master` branch
2. Go to repository Settings → Pages
3. Set source to "GitHub Actions" (or use the Astro workflow)
4. Astro config already includes `site` and `base` for GitHub Pages

Or use the included GitHub Action (recommended):

The project is pre-configured for GitHub Pages deployment.

## 🛠 Tech Stack

- Astro 4+
- Tailwind CSS v4
- TypeScript
- Static output (perfect for CDN)

## 📝 Notes

- No JavaScript-heavy frameworks (vanilla where needed)
- All images use placeholder URLs — replace with real assets
- Update the worker URL in the form component after deploying your Cloudflare Worker

