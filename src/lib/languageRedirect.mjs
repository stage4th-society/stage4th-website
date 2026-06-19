export function getLanguageRedirect({ savedLanguage, browserLanguage, search }) {
  const language =
    savedLanguage || (browserLanguage.toLowerCase().startsWith("zh") ? "zh" : "en");

  return `/${language}${search}`;
}
