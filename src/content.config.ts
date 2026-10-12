import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { describe } from "astro:schema";

const blog = defineCollection({
  loader: glob({
    base: "./content/blog",
    pattern: "**/*{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
  })
})

export const collections = { blog };
