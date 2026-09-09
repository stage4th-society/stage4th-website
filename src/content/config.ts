import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    status: z.enum(["upcoming", "active", "past", "cancelled"]),
    category: z.enum(["full-production", "script-reading", "staged-reading", "acting-workshop", "meetup"]),
    titleZh: z.string(),
    titleEn: z.string(),
    subtitleZh: z.string(),
    subtitleEn: z.string(),
    dateTime: z.string(),
    // ISO 8601. Date-only is fine for a multi-performance run; a full
    // datetime is used where the copy states one unambiguous curtain time.
    startDate: z.string(),
    endDate: z.string().optional(),
    // Homepage-only fields. The excerpt is a deliberately shorter edit of
    // description*, and supports **bold** for inline emphasis. Only an
    // event the homepage features needs them.
    homeExcerptZh: z.string().optional(),
    homeExcerptEn: z.string().optional(),
    showtimesZh: z.array(z.string()).optional(),
    showtimesEn: z.array(z.string()).optional(),
    ticketUrl: z.string().optional(),
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
