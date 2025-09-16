# Service Report — Next.js on Netlify

## Deploy via Netlify (build on Netlify)
1. Upload this folder to a Git repo.
2. In Netlify: New Site → Import from Git → select repo.
3. Build command: `npm run build`
4. Publish directory: `out`
(These are already set in `netlify.toml`.)

## Local dev
```bash
npm install
npm run dev
```

## Notes
- Static export (`output: 'export'`). No SSR or API routes.
- To use a subpath, set `NEXT_BASE_PATH=/your/path` in Netlify env.
