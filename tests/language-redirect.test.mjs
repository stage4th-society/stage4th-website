import assert from "node:assert/strict";
import test from "node:test";

import { getLanguageRedirect } from "../src/lib/languageRedirect.mjs";

test("preserves campaign parameters when redirecting a saved language", () => {
  const destination = getLanguageRedirect({
    savedLanguage: "zh",
    browserLanguage: "en-CA",
    search: "?utm_source=flyer&utm_medium=qrcode",
  });

  assert.equal(destination, "/zh?utm_source=flyer&utm_medium=qrcode");
});

test("preserves campaign parameters when choosing the browser language", () => {
  const destination = getLanguageRedirect({
    savedLanguage: null,
    browserLanguage: "en-CA",
    search: "?utm_source=instagram&utm_medium=qrcode",
  });

  assert.equal(destination, "/en?utm_source=instagram&utm_medium=qrcode");
});
