import { useEffect, useState } from 'react';
import featuredRecipes from '../data/featuredRecipes.js';

function AllCategoriesModal({ isOpen, onClose, selectedCategory, onOpenFeaturedRecipe }) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || null);
  const categories = [
    {
      name: 'Italian Cuisine',
      icon: '🇮🇹',
      image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      count: '120 recipes',
      items: ['Pasta Carbonara', 'Risotto Milanese', 'Osso Buco', 'Tiramisu', 'Panna Cotta', 'Lasagna Bolognese']
    },
    {
      name: 'Asian Fusion',
      icon: '🥢',
      image: 'https://images.unsplash.com/photo-1622643944007-450264a5f9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8fHww',
      count: '85 recipes',
      items: ['Pad Thai', 'Sushi Rolls', 'Kung Pao Chicken', 'Ramen', 'Spring Rolls', 'Teriyaki Salmon']
    },
    {
      name: 'Healthy Meals',
      icon: '🥗',
      image: 'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww',
      count: '95 recipes',
      items: ['Grilled Vegetables', 'Quinoa Bowl', 'Kale Salad', 'Smoothie Bowls', 'Steamed Fish', 'Buddha Bowl']
    },
    {
      name: 'Desserts',
      icon: '🍰',
      image: 'https://media.istockphoto.com/id/2192512007/photo/individual-chocolate-mousse-hazelnut-fudge-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=SWWzSZh480OONzMrxcGgRvX-5JH6HjSZvqaBd1Qm64Q=',
      count: '75 recipes',
      items: ['Chocolate Cake', 'Cheesecake', 'Brownies', 'Fruit Tart', 'Mousse', 'Crème Brûlée']
    },
    {
      name: 'Quick & Easy',
      icon: '⚡',
      image: 'https://media.istockphoto.com/id/184624803/photo/ramen.webp?a=1&b=1&s=612x612&w=0&k=20&c=_6fAIvIjqhLgzxT7LT41fLEWug4BLT__2AcZR8DLVsk=',
      count: '110 recipes',
      items: ['15-Min Stir Fry', 'Quick Pasta', 'Sandwiches', 'Salads', 'Wraps', 'Quesadillas']
    },
    {
      name: 'Vegetarian',
      icon: '🌿',
      image: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.webp?a=1&b=1&s=612x612&w=0&k=20&c=fDDCP1apC1UHwhmh4rHhIAtRJYfR2l4eTrli8AVOMyw=',
      count: '90 recipes',
      items: ['Vegetable Stir Fry', 'Chickpea Curry', 'Veggie Burger', 'Eggplant Parmesan', 'Veggie Tacos', 'Tofu Pad Thai']
    }
  ];

  useEffect(() => {
    setActiveCategory(selectedCategory || null);
  }, [selectedCategory]);

  const handleExploreCategory = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-primary-green text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">All Categories</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-accent-yellow transition-colors text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeCategory ? (
            (() => {
              const category = categories.find((item) => item.name === activeCategory);
              if (!category) return null;

              return (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <h3 className="text-3xl font-bold text-text-dark">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count}</p>
                    </div>
                    <button onClick={handleBackToCategories} className="btn-outline">
                      Back to Categories
                    </button>
                  </div>

                  <div className="card p-6 bg-gray-50">
                    <h4 className="text-xl font-semibold text-text-dark mb-4">Featured Items</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-sm bg-primary-green/10 text-primary-green px-3 py-2 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card p-6 bg-white">
                    <h4 className="text-xl font-semibold text-text-dark mb-4">Category Insight</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {category.name} is packed with delicious recipes designed for comfort, flavor, and easy cooking. Explore the featured dishes above or head to the recipe generator when you're ready.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                      <button onClick={handleBackToCategories} className="btn-secondary w-full sm:w-auto">
                        Back to Categories
                      </button>
                      <button onClick={onClose} className="btn-primary w-full sm:w-auto">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="card overflow-hidden">
                  <div className="relative h-40 overflow-hidden rounded-xl mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>

                  <div className="space-y-3 p-5">
                    <div>
                      <div className="text-2xl mb-1">{category.icon}</div>
                      <h3 className="text-xl font-bold text-text-dark">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Featured Items:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => {
                          const recipe = featuredRecipes.find((recipe) => recipe.name === item);
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => onOpenFeaturedRecipe(recipe || {
                                name: item,
                                category: category.name,
                                image: category.image,
                                time: '30 minutes',
                                difficulty: 'Medium',
                                ingredients: ['Main ingredient', 'Seasoning', 'Fresh herbs'],
                                steps: ['Prepare ingredients.', 'Cook over medium heat.', 'Serve warm with garnish.'],
                                comments: [
                                  { user: 'Community Cook', text: 'I tried this and it was fantastic!' }
                                ]
                              })}
                              className="text-xs bg-primary-green/10 text-primary-green px-2 py-1 rounded-full hover:bg-primary-green/20 transition-colors"
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleExploreCategory(category.name)}
                      className="w-full btn-secondary text-sm mt-4"
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllCategoriesModal;
