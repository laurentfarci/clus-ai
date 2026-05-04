# clus.ai

A network firm for the agent era. Static site, no build step, drop into any host.

## Structure

```
clus.ai/
├── index.html              Homepage
├── practice/index.html     Practice areas
├── approach/index.html     Scope, match, ship
├── network/index.html      Operator-side recruitment
├── about/index.html        Firm thesis
├── notes/
│   ├── index.html          Notes (article index)
│   ├── governance-gap/index.html              Article 1: AI governance
│   ├── non-deterministic-creative/index.html  Article 2: agent design
│   └── buy-build-borrow/index.html            Article 3: decision framework
├── briefs/                 Reserved for case studies
├── assets/
│   ├── styles.css          Global stylesheet
│   ├── forms.js            Async form handler
│   ├── favicon.svg         Vector favicon
│   ├── favicon-16.png      Bitmap fallback
│   ├── favicon-32.png      Bitmap fallback
│   ├── apple-touch-icon.png  iOS home screen icon
│   ├── icon-512.png        PWA icon
│   └── og.png              Open Graph share image
├── robots.txt
├── sitemap.xml
├── llms.txt
└── site.webmanifest
```

## Hosting

Works on any static host. Tested for Vercel, Netlify, Cloudflare Pages, GitHub Pages.

For GitHub Pages: push to `main`, enable Pages from `/` (root). For custom domain `clus.ai`, add a `CNAME` file containing `clus.ai` at the root and configure DNS.

## Fonts

Canela Semibold is licensed from Commercial Type. Drop the licensed `.woff2` and `.woff` files into `/assets/fonts/` with these exact filenames:

- `Canela-Semibold.woff2`
- `Canela-Semibold.woff`
- `Canela-SemiboldItalic.woff2`
- `Canela-SemiboldItalic.woff`

Until those files are uploaded, the site uses Source Serif 4 from Google Fonts as a fallback. The fallback is intentionally close in feel so the site doesn't break visually before the licensed font ships.

Inter is loaded from Google Fonts.

## After deploying

1. Submit `https://clus.ai/sitemap.xml` to Google Search Console.
2. Request reindexing of the homepage so the new tagline and favicon update in search results. Allow 1 to 2 weeks.
3. Verify the OG image renders correctly with [opengraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fclus.ai).
4. Test the favicon at [realfavicongenerator.net](https://realfavicongenerator.net/favicon_checker).

## Forms

Two Formspree forms are wired in. Endpoints match the live site:

- **Brief form** (homepage `#contact`): `https://formspree.io/f/xjgjqwvd`
- **Operator application** (network page `#apply`): `https://formspree.io/f/xqewvqaz`

Both use a shared async handler in `/assets/forms.js`. To swap endpoints, update the `action` attribute on the form. To wire a new form, give it `data-clus-form` and a unique `id`, plus a sibling `<div class="form-success" data-success="<form-id>" hidden>` for the success state.

## Design tokens

| Token   | Value     | Usage                          |
|---------|-----------|--------------------------------|
| Ink     | `#0A0A0A` | Background                     |
| Paper   | `#F4F1EA` | Foreground text                |
| Signal  | `#FF5A1F` | Action, emphasis, italic words |
| Gold    | `#D4A24C` | Reserved for warmth accents    |
| Stone   | `#6B6B6B` | Muted secondary text           |

## License

© 2026 clus.ai. All rights reserved.
