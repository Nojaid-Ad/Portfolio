import en from './en.js';
import ar from './ar.js';

const translations = { en, ar };

/**
 * Resolve a dot-notated key against a translation object.
 * Example: resolve('hero.name', en) → 'Nojaid Abdullah Issa'
 */
function resolve(key, obj) {
  return key.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

/** Return the currently active language code. */
export function getLanguage() {
  return localStorage.getItem('lang') || 'en';
}

/** Translate a key for the current language. */
export function t(key) {
  const lang = getLanguage();
  return resolve(key, translations[lang]) ?? key;
}

/**
 * Walk the DOM and apply translations to every element
 * that carries a data-i18n* attribute.
 */
export function applyLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  /* Body font */
  document.body.style.fontFamily =
    lang === 'ar'
      ? "'Cairo', sans-serif"
      : "'Inter', sans-serif";

  /* textContent */
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = resolve(el.dataset.i18n, translations[lang]);
    if (val !== undefined) el.textContent = val;
  });

  /* placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const val = resolve(el.dataset.i18nPlaceholder, translations[lang]);
    if (val !== undefined) el.placeholder = val;
  });

  /* aria-label */
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const val = resolve(el.dataset.i18nAria, translations[lang]);
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  /* Dispatch custom event so other modules can react */
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/** Toggle between 'en' and 'ar'. */
export function toggleLanguage() {
  const next = getLanguage() === 'en' ? 'ar' : 'en';
  applyLanguage(next);
}

/** Initialise with saved preference or default. */
export function initLanguage() {
  applyLanguage(getLanguage());
}
