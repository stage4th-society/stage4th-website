import assert from "node:assert/strict";
import test from "node:test";

import { inlineTokens } from "../src/lib/inlineEmphasis.mjs";

const plain = (text) => ({ text, bold: false, italic: false });

test("passes text with no markers through untouched", () => {
  assert.deepEqual(inlineTokens("no emphasis here"), [plain("no emphasis here")]);
});

test("reads the three marker lengths as bold, italic, and both", () => {
  assert.deepEqual(inlineTokens("*a*"), [{ text: "a", bold: false, italic: true }]);
  assert.deepEqual(inlineTokens("**b**"), [{ text: "b", bold: true, italic: false }]);
  assert.deepEqual(inlineTokens("***c***"), [{ text: "c", bold: true, italic: true }]);
});

test("keeps the surrounding text in order", () => {
  assert.deepEqual(inlineTokens("J. M. Barrie's ***The Twelve-Pound Look*** (1910)"), [
    plain("J. M. Barrie's "),
    { text: "The Twelve-Pound Look", bold: true, italic: true },
    plain(" (1910)"),
  ]);
});

// A swallowed typo would silently drop emphasis in production; a literal
// asterisk on the page is the failure we want.
test("leaves unbalanced markers as literal asterisks", () => {
  assert.deepEqual(inlineTokens("**oops*"), [plain("**oops*")]);
});
