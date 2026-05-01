import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    status: z.enum(["upcoming", "active", "past", "cancelled"]),
    titleZh: z.string(),
    titleEn: z.string(),
    subtitleZh: z.string(),
    subtitleEn: z.string(),
    dateTime: z.string(),
    venue: z.object({
      name: z.string(),
      address: z.string(),
      city: z.string(),
    }),
    language: z.object({
      zh: z.string(),
      en: z.string(),
    }),
    descriptionZh: z.string(),
    descriptionEn: z.string(),
    playwrightZh: z.string(),
    playwrightEn: z.string(),
    posterImage: z.string(),
    bannerImage: z.string(),
    programFiles: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      }),
    ),
    awards: z.array(z.string()),
    seoTitleZh: z.string(),
    seoTitleEn: z.string(),
    seoDescriptionZh: z.string(),
    seoDescriptionEn: z.string(),
  }),
});

export const collections = { events };
