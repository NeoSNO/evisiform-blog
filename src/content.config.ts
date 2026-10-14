import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every post is a Markdown file in src/content/posts/.
// The file name becomes the URL: qr-code-visitor-sign-in.md -> /qr-code-visitor-sign-in
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().max(170),
    summary: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().optional(),
    cover: z.string().optional(), // e.g. /images/my-post.jpg (put the file in public/images/)
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
