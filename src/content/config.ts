import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
        .or(z.date())
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      image: z
        .object({
          data: image().refine((img) => img.width / img.height === 16 / 9 && img.width >= 1280 && img.height >= 720, {
            message: "The heroImage must always have a 16:9 aspect ratio (with resolution of 1280x720 at least).",
          }),
          alt: z.string(),
        })
        .optional(),
      tags: z
        .array(
          z
            .string()
            .refine((tag) => !tag.includes(" ") && tag !== "", { message: "Tags cannot contain spaces or be empty." })
        )
        .refine((tags) => tags.length >= 1 && tags.length <= 3, { message: "Set between 1 up to 3 tags per post." }),
      draft: z.boolean().default(false),
      readingTime: z.string().optional(),
    }),
});

export const collections = { blog };
