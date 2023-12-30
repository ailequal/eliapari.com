import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image()
        .refine((img) => img.width >= 1280 && img.height >= 720, {
          message: "The heroImage must always have a 16:9 aspect ratio (1280x720 at least).",
        })
        .optional(),
      heroAlt: z.string().optional(),
      readingTime: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
