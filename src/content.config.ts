import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
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
    // One entry per performance date. The date is what lets the build and
    // the browser both work out which showings are still ahead; zh and en
    // share an entry because two parallel arrays drift in length and order.
    showtimes: z
      .array(z.object({ date: z.string(), zh: z.string(), en: z.string() }))
      .optional(),
    ticketUrl: z.string().optional(),
    venue: z.object({
      name: z.string(),
      address: z.string(),
      city: z.string(),
    }),
    // House rule: every show carries English subtitles unless the play is
    // originally in English. Say so here — the detail page renders this
    // verbatim, and leaving subtitles out has twice contradicted the
    // homepage copy.
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
