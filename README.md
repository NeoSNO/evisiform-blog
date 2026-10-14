# eVisiform Blog

The blog at **https://blog.evisiform.com**, built with [Astro](https://astro.build) and hosted on Netlify.
Every push to GitHub rebuilds and publishes the site automatically.

## Add a new post (no computer setup needed)

1. On github.com, open this repo and go to `src/content/posts/`.
2. Click **Add file → Create new file**.
3. Name it after the URL you want, ending in `.md`, e.g. `visitor-sign-in-for-construction-sites.md`
   → the post will live at `blog.evisiform.com/visitor-sign-in-for-construction-sites`.
4. Paste the post (the block between `---` lines first, then the article). Template:

```markdown
---
title: "The headline people see on the page"
seoTitle: "The title Google shows (about 60 characters) | eVisiform"
description: "The meta description Google shows, about 150 characters."
summary: "One or two sentences shown on the blog home page and under the headline."
date: 2026-10-20
category: "Visitor Management"
cover: "/images/visitor-sign-in-for-construction-sites.jpg"
coverAlt: "Short description of the cover image"
---

Opening paragraph...

## A section heading

More text, **bold**, [a link](https://www.evisiform.com), and lists:

- point one
- point two
```

5. Click **Commit changes**. Netlify publishes it in about a minute.

### Cover images (optional)

Upload the image (1200 × 630 px, JPG) to `public/images/` with **Add file → Upload files**,
then set `cover: "/images/your-file-name.jpg"` in the post. Leave `cover` out if there's no image.

### Other handy fields

- `draft: true` hides a post until you're ready.
- `updated: 2026-11-01` marks a post as updated (good for SEO when you refresh content).

## Change site-wide text

Blog name, description and the "Try eVisiform free" button live in `src/site.ts`.
Colours are at the top of `src/styles/global.css`.

## What's built in for SEO

Clean URLs, per-post titles and meta descriptions, canonical links, Open Graph / social cards,
BlogPosting structured data, `sitemap-index.xml`, `robots.txt` and an RSS feed at `/rss.xml`.

## Run it on your own computer (optional)

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build into dist/
```
