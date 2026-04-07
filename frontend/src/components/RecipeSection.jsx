import { useState } from 'react';
import { generateRecipe } from '../services/api.js';

function RecipeSection({ onRecipeReady, onStatusChange, status }) {
  const [ingredients, setIngredients] = useState(['']);
  const [currentInput, setCurrentInput] = useState('');

  const predefinedRecipes = [
    {
      name: 'Classic Pasta',
      ingredients: ['pasta', 'tomato', 'basil', 'garlic', 'olive oil']
    },
    {
      name: 'Stir Fry',
      ingredients: ['chicken', 'broccoli', 'soy sauce', 'garlic', 'ginger']
    },
    {
      name: 'Grilled Fish',
      ingredients: ['salmon', 'lemon', 'dill', 'butter', 'asparagus']
    },
    {
      name: 'Curry Rice',
      ingredients: ['rice', 'coconut milk', 'curry powder', 'onion', 'vegetables']
    },
    {
      name: 'Burger',
      ingredients: ['ground beef', 'bun', 'lettuce', 'tomato', 'cheese']
    },
    {
      name: 'Caesar Salad',
      ingredients: ['lettuce', 'parmesan', 'croutons', 'lemon', 'olive oil']
    }
  ];

  const handlePredefinedRecipe = async (recipeIngredients) => {
    setIngredients(recipeIngredients);
    onStatusChange({ loading: true, error: null });

    try {
      const recipe = await generateRecipe(recipeIngredients.join(', '));
      onRecipeReady(recipe);
      onStatusChange({ loading: false, error: null });
    } catch (error) {
      onStatusChange({ loading: false, error: error.message || 'Unable to generate recipe.' });
    }
  };

  const addIngredient = () => {
    if (currentInput.trim()) {
      setIngredients([...ingredients, currentInput.trim()]);
      setCurrentInput('');
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validIngredients = ingredients.filter(ing => ing.trim());

    if (validIngredients.length === 0) {
      onStatusChange({ loading: false, error: 'Please add at least one ingredient.' });
      return;
    }

    onStatusChange({ loading: true, error: null });

    try {
      const recipe = await generateRecipe(validIngredients.join(', '));
      onRecipeReady(recipe);
      onStatusChange({ loading: false, error: null });
    } catch (error) {
      onStatusChange({ loading: false, error: error.message || 'Unable to generate recipe.' });
    }
  };

  return (
    <section className="section bg-secondary-beige" id="recipe">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-dark mb-4">
              What's in your kitchen?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tell ZestyGenie your ingredients and watch the magic happen! Our AI will create personalized, delicious recipes just for you.
            </p>
          </div>

          {/* Quick Recipe Ideas */}
          <div className="mb-12">
            <p className="text-sm text-gray-600 text-center mb-4 font-semibold">Or try one of these popular combinations:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {predefinedRecipes.map((recipe, index) => (
                <button
                  key={index}
                  onClick={() => handlePredefinedRecipe(recipe.ingredients)}
                  disabled={status.loading}
                  className="p-3 bg-white border-2 border-primary-green/20 rounded-xl hover:border-primary-green hover:bg-primary-green/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <p className="font-semibold text-text-dark text-sm">{recipe.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{recipe.ingredients.length} ingredients</p>
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ingredients Input */}
              <div>
                <label className="block text-lg font-semibold text-text-dark mb-4">
                  Add your ingredients
                </label>

                {/* Current input */}
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="e.g. chicken, garlic, lemon..."
                    className="input-field flex-1"
                  />
                  <button
                    type="button"
                    onClick={addIngredient}
                    className="btn-secondary px-6 whitespace-nowrap"
                    disabled={!currentInput.trim()}
                  >
                    Add
                  </button>
                </div>

                {/* Ingredients list */}
                {ingredients.filter(ing => ing.trim()).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ingredients.filter(ing => ing.trim()).map((ingredient, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {ingredient}
                        <button
                          type="button"
                          onClick={() => removeIngredient(index)}
                          className="hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.loading || ingredients.filter(ing => ing.trim()).length === 0}
                  className="btn-primary text-xl px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? 'Creating Recipe...' : 'Get Recipe Ideas'}
                </button>
              </div>

              {/* Error Message */}
              {status.error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <p className="text-red-700 font-medium">{status.error}</p>
                </div>
              )}
            </form>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Get recipe ideas in seconds</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">AI Powered</h3>
                <p className="text-gray-600 text-sm">Smart recipe suggestions</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">Save Recipes</h3>
                <p className="text-gray-600 text-sm">Keep your favorites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;