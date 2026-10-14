// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The live address of the blog. Used for canonical URLs, the sitemap and RSS.
  site: 'https://blog.evisiform.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
