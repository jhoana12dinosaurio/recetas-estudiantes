import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Recipe } from '../types';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }
  const {Recipes}=context;
   const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
const filterByDifficulty = (difficulty: 'Fácil' | 'Intermedio' | 'Difícil') => {
    setDifficultyFilter(difficulty);
  };
  return context;
};