
const favorites = 'favoriteRecipes';

export function getFavorites(): string[] {
  const data = localStorage.getItem(favorites);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }
  return [];
}

export function addFavorite(id: string): void {
  const current = getFavorites();
  if (!current.includes(id)) {
    const updated = [...current, id];
    localStorage.setItem(favorites, JSON.stringify(updated));
  }
}

export function removeFavorite(id: string): void {
  const current = getFavorites();
  const updated = current.filter(favId => favId !== id);
  localStorage.setItem(favorites, JSON.stringify(updated));
}
