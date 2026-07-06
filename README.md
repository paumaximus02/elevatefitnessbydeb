# Elevate Fitness by Deb

A simple two-page website for **elevatefitnessbydeb.com**, built with Astro and hosted on Cloudflare Pages.

## Pages

- **Home** — landing page with Deb's photo, bio, and contact call-to-action
- **Contact** — form that sends messages to Deb via email (Resend)

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- A [Cloudflare](https://dash.cloudflare.com/) account
- A [Resend](https://resend.com/) account for contact form email delivery

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

To test the contact form locally:

1. Copy `.dev.vars.example` to `.dev.vars`
2. Add your Resend API key and email addresses
3. Build and run with Wrangler:

```bash
npm run build
npm run pages:dev
```

## Customizing content

Edit [`src/content/site.ts`](src/content/site.ts) for:

- Site name, tagline, and bio text
- Contact email display
- Photo path (replace `public/images/deb.png` with an updated photo and update `site.photo` if needed)

## Deploy to Cloudflare Pages

### Option A: Git integration (recommended)

1. Push this repo to GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect Git
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variables in Pages settings:
   - `RESEND_API_KEY` (encrypted)
   - `CONTACT_TO_EMAIL` — Deb's inbox
   - `CONTACT_FROM_EMAIL` — verified sender in Resend
5. Add custom domain `elevatefitnessbydeb.com`

### Option B: Direct deploy

```bash
npm run build
npx wrangler pages deploy dist
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from Resend dashboard |
| `CONTACT_TO_EMAIL` | Where contact form messages are delivered |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |

For testing, Resend provides `onboarding@resend.dev` as a sandbox sender. For production, verify your domain in Resend and use e.g. `hello@elevatefitnessbydeb.com`.

## Project structure

```
src/
  components/     Header, Footer
  content/        Site copy and metadata
  layouts/        Base page layout
  pages/          Home and Contact routes
  styles/         Global CSS
functions/
  api/contact.ts  Contact form email handler
public/
  images/         Deb's photo
```
