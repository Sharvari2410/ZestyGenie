import featuredRecipes from '../data/featuredRecipes.js';

function FeaturedRecipePage({ recipe, onBack, onOpenFeaturedRecipe }) {
  return (
    <div className="min-h-screen bg-secondary-beige">
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
              <span>Back to Categories</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-green font-bold">🧞</span>
              </div>
              <span className="text-white font-bold text-xl">Recipe Page</span>
            </div>
            <div className="w-24" />
          </div>
        </div>
      </header>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card overflow-hidden">
              <img src={recipe.image} alt={recipe.name} className="w-full h-72 object-cover" />
            </div>

            <div className="card p-8">
              <h1 className="text-4xl font-bold text-text-dark mb-4">{recipe.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm mb-6">
                <span className="bg-accent-orange/10 text-accent-orange px-3 py-1 rounded-full">⏱️ {recipe.time}</span>
                <span className="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full">📊 {recipe.difficulty}</span>
                <span className="bg-secondary-beige text-text-dark px-3 py-1 rounded-full">{recipe.category}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-1 w-2 h-2 bg-accent-orange rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Community Comment</h2>
                  {recipe.comments.length > 0 ? (
                    <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
                      <p className="text-gray-800 italic mb-4">"{recipe.comments[0].text}"</p>
                      <p className="text-sm text-gray-600">— {recipe.comments[0].user}</p>
                    </div>
                  ) : (
                    <p className="text-gray-600">No comments yet. Be the first to try it!</p>
                  )}
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <div className="space-y-5">
                {recipe.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center font-semibold">{idx + 1}</div>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-4">More from {recipe.category}</h3>
              {(() => {
                const similarRecipes = featuredRecipes.filter(
                  (r) => r.category === recipe.category && r.name !== recipe.name
                );
                return similarRecipes.length > 0 ? (
                  <div className="space-y-3">
                    {similarRecipes.map((similar, idx) => (
                      <button
                        key={idx}
                        onClick={() => onOpenFeaturedRecipe && onOpenFeaturedRecipe(similar)}
                        className="block w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-green hover:bg-primary-green/5 transition-colors"
                      >
                        <p className="font-semibold text-text-dark">{similar.name}</p>
                        <p className="text-xs text-gray-500 mt-1">⏱️ {similar.time} • 📊 {similar.difficulty}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Explore similar dishes, swap ingredients, or recreate this recipe with your own twist.</p>
                );
              })()}
            </div>
            <div className="card p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-4">Community Notes</h3>
              <ul className="space-y-4">
                {recipe.comments.map((comment, idx) => (
                  <li key={idx} className="border border-gray-200 rounded-2xl p-4">
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-sm text-gray-500 mt-2">— {comment.user}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRecipePage;
