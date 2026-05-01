import type { CollectionEntry } from "astro:content";

export function eventSlug(event: CollectionEntry<"events">) {
  return event.id.replace(/\.mdx?$/, "");
}
