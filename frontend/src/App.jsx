import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import CategorySection from './components/CategorySection.jsx';
import SubscriptionSection from './components/SubscriptionSection.jsx';
import RecipeSection from './components/RecipeSection.jsx';
import ShopSection from './components/ShopSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import CommunitySection from './components/CommunitySection.jsx';
import RecipeResultPage from './pages/RecipeResultPage.jsx';
import FeaturedRecipePage from './pages/FeaturedRecipePage.jsx';

function App() {
  const [recipe, setRecipe] = useState(null);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: null });

  useEffect(() => {
    const stored = localStorage.getItem('savedRecipes');
    if (stored) {
      setSavedRecipes(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const addSavedRecipe = (recipeData) => {
    setSavedRecipes((prev) => [recipeData, ...prev]);
  };

  const clearRecipe = () => {
    setRecipe(null);
    setStatus({ loading: false, error: null });
  };

  const handleRecipeGenerated = (recipeData) => {
    setRecipe(recipeData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeaturedRecipeOpen = (recipeData) => {
    setFeaturedRecipe(recipeData);
  };

  const clearFeaturedRecipe = () => {
    setFeaturedRecipe(null);
  };

  const page = useMemo(() => {
    if (recipe) {
      return (
        <RecipeResultPage
          recipe={recipe}
          onBack={clearRecipe}
          onSave={() => addSavedRecipe(recipe)}
          status={status}
        />
      );
    }

    if (featuredRecipe) {
      return (
        <FeaturedRecipePage
          recipe={featuredRecipe}
          onBack={clearFeaturedRecipe}
          onOpenFeaturedRecipe={handleFeaturedRecipeOpen}
        />
      );
    }

    return (
      <>
        <Header savedRecipes={savedRecipes} />
        <HeroSection />
        <CategorySection onOpenFeaturedRecipe={handleFeaturedRecipeOpen} />
        <SubscriptionSection />
        <RecipeSection
          onRecipeReady={handleRecipeGenerated}
          onStatusChange={setStatus}
          status={status}
        />
        <ShopSection />
        <AboutSection />
        <CommunitySection />
      </>
    );
  }, [recipe, featuredRecipe, savedRecipes, status]);

  return (
    <div className="min-h-screen bg-secondary-beige">
      {page}
    </div>
  );
}

export default App;
