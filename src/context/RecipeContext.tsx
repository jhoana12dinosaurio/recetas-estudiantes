/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Recipe } from '../types/Recipe';
import recetasData from '../data/recetas.json';
import * as favoritesService from '../services/favoriteService';

interface RecipeContextType {
  recetas: Recipe[];
  favoritos: Recipe[];
  addToFavoritos: (receta: Recipe) => void;
  removeFromFavoritos: (id: number) => void;
  isFavorito: (id: number) => boolean;
  addReceta: (receta: Omit<Recipe, 'id'>) => void;
}

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recetas, setRecetas] = useState<Recipe[]>(recetasData.recetas as Recipe[]);
  const [favoritos, setFavoritos] = useState<Recipe[]>([]);

  useEffect(() => {
    setFavoritos(favoritesService.getFavorites());
  }, []);

  useEffect(() => {
    favoritesService.saveFavorites(favoritos);
  }, [favoritos]);

  const addToFavoritos = (receta: Recipe) => {
    if (!favoritos.some(fav => fav.id === receta.id)) {
      setFavoritos(prev => [...prev, receta]);
    }
  };

  const removeFromFavoritos = (id: number) => {
    setFavoritos(prev => prev.filter(fav => fav.id !== id));
  };

  const isFavorito = (id: number) => {
    return favoritos.some(fav => fav.id === id);
  };

  const addReceta = (nuevaReceta: Omit<Recipe, 'id'>) => {
    const newId = Math.max(...recetas.map(r => r.id)) + 1;
    const receta: Recipe = {
      ...nuevaReceta,
      id: newId
    };
    setRecetas(prev => [...prev, receta]);
  };

  const value = {
    recetas,
    favoritos,
    addToFavoritos,
    removeFromFavoritos,
    isFavorito,
    addReceta,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
