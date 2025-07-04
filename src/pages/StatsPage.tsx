import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { BarChart3, Heart, Clock, Users, TrendingUp, Star } from 'lucide-react';
import type { Recipe } from '../types/Recipe';

const StatsPage: React.FC = () => {
  const context = useContext(RecipeContext);
  
  if (!context) {
    throw new Error('error');
  }