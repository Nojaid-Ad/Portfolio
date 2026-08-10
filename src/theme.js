/**
 * Theme manager — dark / light mode with localStorage persistence.
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
  applyTheme(next);
}

export function initTheme() {
  applyTheme(getTheme());
}
