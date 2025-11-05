# Kush Kore — Portfolio (v3)

Complete, animated portfolio using **Vite + React + Tailwind + Framer Motion + Lucide**.

## Quickstart
```bash
npm install
npm run dev
```
Build & preview:
```bash
npm run build
npm run preview
```

## Where to edit
- **Profile photo**: replace `public/profile.png`.
- **Dates** (Labmentix fixed to Sep 2025 – Nov 2025): in `src/components/PortfolioKushKore.jsx` under `EXPERIENCES`.
- **Project thumbnails**: in `public/project-*.png` and the `PROJECTS` array's `image` fields.
- **Résumé button**: downloads `public/resume/KushKoreResume.pdf`.
- **SEO**: `index.html` OG/Twitter meta; replace `og:url` and canonical with your live domain after deploy.

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import to Vercel (Framework: **Vite**).
3. Update domain in `index.html` once live.