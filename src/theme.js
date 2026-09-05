/**
 * Theme manager — dark / light mode with localStorage persistence.
 * Adds smooth transition class during theme change.
 */

const STORAGE_KEY = 'theme';

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEY) || getSystemPreference();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';

  /* Add transitioning class for smooth color change */
  document.body.classList.add('theme-transitioning');
  applyTheme(next);

  /* Remove after transition completes */
  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
  }, 500);
}

export function initTheme() {
  applyTheme(getTheme());
}
