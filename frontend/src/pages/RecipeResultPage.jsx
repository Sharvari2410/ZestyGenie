import Spinner from '../components/Spinner.jsx';

function RecipeResultPage({ recipe, onBack, onSave, status }) {
  const recipeText = typeof recipe === 'string' ? recipe : null;
  const recipeName = recipeText ? 'Generated Recipe' : recipe?.name || 'Untitled Recipe';
  const ingredients = Array.isArray(recipe?.ingredients)
    ? recipe.ingredients
    : typeof recipe?.ingredients === 'string'
    ? recipe.ingredients.split(/,\s*/).filter(Boolean)
    : [];
  const steps = Array.isArray(recipe?.steps)
    ? recipe.steps
    : typeof recipe?.steps === 'string'
    ? recipe.steps.split(/\n+/).filter(Boolean)
    : [];
  const recipeTime = recipe?.time || 'N/A';
  const recipeDifficulty = recipe?.difficulty || 'N/A';

  return (
    <div className="min-h-screen bg-secondary-beige">
      {/* Header */}
      <header className="bg-primary-green shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-accent-yellow transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-green font-bold">🧞‍♂️</span>
              </div>
              <span className="text-white font-bold text-xl">ZestyGenie</span>
            </div>

            <button
              onClick={onSave}
              className="btn-primary"
            >
              Save Recipe
            </button>
          </div>
        </div>
      </header>

      <div className="container-custom py-12">
        {status.loading && (
          <div className="card text-center py-12">
            <Spinner />
            <p className="mt-4 text-gray-600">Generating your recipe... hang tight.</p>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Recipe Header */}
          <div className="card mb-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-text-dark mb-4">{recipeName}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-accent-orange/10 text-accent-orange px-3 py-1 rounded-full font-medium">
                  ⏱️ {recipeTime}
                </span>
                <span className="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full font-medium">
                  📊 {recipeDifficulty}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <div className="card sticky top-8">
                <h2 className="text-2xl font-bold text-text-dark mb-6">Ingredients</h2>
                <div className="space-y-3">
                  {ingredients.length > 0 ? (
                    ingredients.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent-orange rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No ingredients available for this recipe.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-text-dark mb-6">Instructions</h2>
                <div className="space-y-4">
                  {steps.length > 0 ? (
                    steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700 leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))
                  ) : recipeText ? (
                    <div className="rounded-xl border border-gray-200 p-6 bg-white">
                      <p className="whitespace-pre-line text-gray-700">{recipeText}</p>
                    </div>
                  ) : (
                    <p className="text-gray-600">No instructions available for this recipe.</p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={onSave}
                  className="btn-primary flex-1"
                >
                  💾 Save Recipe
                </button>
                <button
                  onClick={onBack}
                  className="btn-outline flex-1"
                >
                  🔄 Create Another
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeResultPage;
