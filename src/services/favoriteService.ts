import type { Recipe } from '../types/Recipe';
const FAVORITES_KEY = 'favoritos_recetas';

export function getFavorites(): Recipe[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites: Recipe[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addFavorite(recipe: Recipe): void {
  const current = getFavorites();
  const exists = current.some(r => r.id === recipe.id);
  if (!exists) {
    saveFavorites([...current, recipe]);
  }
}

export function removeFavorite(recipeId: number): void {
  const current = getFavorites();
  const updated = current.filter(r => r.id !== recipeId);
  saveFavorites(updated);
}
