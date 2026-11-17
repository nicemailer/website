import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// User guide: one Markdown file per page and language,
// src/content/docs/<lang>/<slug>.md. `order` sets the place in the sidebar.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

// Long pages (Features, Privacy), one file per language:
// src/content/pages/<lang>/<slug>.md.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { docs, pages };
