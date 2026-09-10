/**
 * The site is fully prerendered, so "has this date passed?" freezes at build
 * time — which is how a finished performance stayed on the homepage for two
 * months. These helpers run twice: once during the build, and again in the
 * browser, so a page served from cache since before a performance still tells
 * the truth.
 */

/**
 * Today's date in the theatre's own timezone, as `YYYY-MM-DD`.
 *
 * The viewer's clock is not the right reference — a Sunday matinee in
 * Vancouver is not over because it is already Monday in Shanghai.
 *
 * @param {Date} [now]
 * @returns {string}
 */
export function vancouverToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Vancouver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * ISO-8601 dates sort correctly as plain strings, so a full datetime is
 * truncated to its date part rather than parsed — no timezone arithmetic, no
 * Date object. A date counts as past only once it is *over*: a performance
 * later today has not passed.
 *
 * @param {string | undefined} dateish `YYYY-MM-DD` or a full ISO datetime
 * @param {string} today `YYYY-MM-DD`
 * @returns {boolean}
 */
export function isPastDate(dateish, today) {
  if (typeof dateish !== "string" || dateish.length < 10) return false;
  return dateish.slice(0, 10) < today;
}

/**
 * The showtimes an audience can still attend. Past dates are dropped rather
 * than struck through: the homepage block is a call to action, and a crossed-out
 * date reads as a cancellation.
 *
 * @template {{ date: string }} T
 * @param {T[] | undefined} showtimes
 * @param {string} today `YYYY-MM-DD`
 * @returns {T[]}
 */
export function remainingShowtimes(showtimes, today) {
  return (showtimes ?? []).filter((s) => !isPastDate(s.date, today));
}
