import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/data/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDesc: z.string().max(220),
      icon: z.string(),
      coverImage: image().optional(),
      order: z.number().default(99),
      featured: z.boolean().default(true),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .default([]),
      slug: z.string(),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/data/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    qualifications: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const testimonials = defineCollection({
  loader: file('./src/data/testimonials/reviews.json'),
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    text: z.string(),
    outcome: z.string().optional(),
  }),
});

export const collections = {
  services,
  team,
  testimonials,
};
