import { STORAGE_KEY } from '../lib/constants';

export function applyThemeFromStorage(): void {
  try {
    // Get the stored theme from the local storage
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    // Get the prefers dark media query
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply dark class if user has dark mode enabled or prefers dark and hasn't set a preference
    if (storedTheme === 'true' || (storedTheme === null && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch {
    // Fallback: if localStorage is not available, use system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }
}
// Apply theme immediately when this script loads
applyThemeFromStorage();