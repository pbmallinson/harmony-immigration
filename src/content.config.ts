import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Dr Edit Fellner-Andrejkovics'),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
      draft: z.boolean().default(false),
      locale: z.enum(['en', 'hu', 'it', 'de']).default('en'),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      eventDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      location: z.string().optional(),
      isOnline: z.boolean().default(false),
      registrationUrl: z.string().url().optional(),
      coverImage: image().optional(),
      draft: z.boolean().default(false),
      locale: z.enum(['en', 'hu', 'it', 'de']).default('en'),
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
    linkedinUrl: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDesc: z.string().max(200),
      icon: z.string(),
      coverImage: image().optional(),
      order: z.number().default(99),
      featured: z.boolean().default(true),
      locale: z.enum(['en', 'hu', 'it', 'de']).default('en'),
      slug: z.string(),
    }),
});

const visas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/visas' }),
  schema: z.object({
    title: z.string(),
    shortDesc: z.string().max(250),
    country: z.enum(['nz', 'au', 'both']).default('nz'),
    isFreeOfCharge: z.boolean().default(false),
    relatedVisas: z.array(z.string()).default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
    order: z.number().default(99),
    locale: z.enum(['en', 'hu', 'it', 'de']).default('en'),
    slug: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: file('./src/data/testimonials/reviews.json'),
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    text: z.string(),
    date: z.coerce.date(),
    source: z.enum(['google', 'facebook', 'direct']).default('google'),
  }),
});

export const collections = {
  blog,
  events,
  team,
  services,
  visas,
  testimonials,
};
