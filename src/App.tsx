import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import FavoritesPage from './pages/FavoritesPage';
import CreateRecipePage from './pages/CreateRecipePage';
import StatsPage from './pages/StatsPage'; // ✅ AGREGAR IMPORT
import RecipeDetailPage from './pages/RecipeDetailPage';
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recetas" element={<RecipesPage />} />
              <Route path="/favoritas" element={<FavoritesPage />} />
              <Route path="/crear" element={<CreateRecipePage />} />
              <Route path="/receta/:id" element={<RecipeDetailPage />} />
              <Route path="/estadisticas" element={<StatsPage />} /> {/* ✅ AGREGAR RUTA */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;