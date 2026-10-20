# Store 6

Standalone Next.js project for the Store 6 digital studio site. The homepage is
available at `/`; its service pages live under `/services`.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and run production

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deploy on Render

Create a Web Service from this folder or use `render.yaml`. Render should use
Node.js 22, run `npm ci && npm run build`, and start with `npm run start`.

WhatsApp and email contact buttons are intentionally omitted until real contact
details are provided. The site’s calls to action navigate to working service and
pricing sections instead of placeholder external links.
