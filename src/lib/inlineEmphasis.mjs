/**
 * The minimal slice of markdown the event copy actually uses:
 * `***both***`, `**bold**`, `*italic*`.
 *
 * Unbalanced markers fall through as literal asterisks, so a typo shows up on
 * the page instead of being silently swallowed.
 *
 * @param {string} text
 * @returns {{ text: string, bold: boolean, italic: boolean }[]}
 */
export function inlineTokens(text) {
  return text
    .split(/(\*{1,3}[^*]+\*{1,3})/g)
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^(\*{1,3})([^*]+)\1$/);
      if (!match) return { text: part, bold: false, italic: false };
      const [, marker, inner] = match;
      return { text: inner, bold: marker.length !== 1, italic: marker.length !== 2 };
    });
}
