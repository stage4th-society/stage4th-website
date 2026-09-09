import type { CollectionEntry } from "astro:content";

export function eventSlug(event: CollectionEntry<"events">) {
  return event.id.replace(/\.mdx?$/, "");
}

// The next event that has not happened yet, or undefined between seasons.
// Both the homepage and the about page feature it, so the rule for "which
// event is next" lives in one place.
export function upcomingEvent(events: CollectionEntry<"events">[]) {
  return events
    .filter((e) => e.data.status === "upcoming" || e.data.status === "active")
    .sort((a, b) => Date.parse(a.data.startDate) - Date.parse(b.data.startDate))[0];
}

