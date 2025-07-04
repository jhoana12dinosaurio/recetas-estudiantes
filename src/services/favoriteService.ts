
const FAVORITES_KEY = 'favoriteRecipes';

export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  return [];
}
