import { useState } from 'react';
import AllCategoriesModal from './AllCategoriesModal.jsx';

function CategorySection({ onOpenFeaturedRecipe }) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const categories = [
    {
      name: 'Italian Cuisine',
      image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      count: '120 recipes'
    },
    {
      name: 'Asian Fusion',
      image: 'https://images.unsplash.com/photo-1622643944007-450264a5f9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8fHww',
      count: '85 recipes'
    },
    {
      name: 'Healthy Meals',
      image: 'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww',
      count: '95 recipes'
    },
    {
      name: 'Desserts',
      image: 'https://media.istockphoto.com/id/2192512007/photo/individual-chocolate-mousse-hazelnut-fudge-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=SWWzSZh480OONzMrxcGgRvX-5JH6HjSZvqaBd1Qm64Q=',
      count: '75 recipes'
    },
    {
      name: 'Quick & Easy',
      image: 'https://media.istockphoto.com/id/184624803/photo/ramen.webp?a=1&b=1&s=612x612&w=0&k=20&c=_6fAIvIjqhLgzxT7LT41fLEWug4BLT__2AcZR8DLVsk=',
      count: '110 recipes'
    },
    {
      name: 'Vegetarian',
      image: 'https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.webp?a=1&b=1&s=612x612&w=0&k=20&c=fDDCP1apC1UHwhmh4rHhIAtRJYfR2l4eTrli8AVOMyw=',
      count: '90 recipes'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowAllCategories(true);
  };

  const handleViewAllCategories = () => {
    setSelectedCategory(null);
    setShowAllCategories(true);
  };

  return (
    <section className="section bg-white" id="categories">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-dark mb-4">
            Popular Categories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our curated collection of recipes from different cuisines and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card group overflow-hidden">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                {category.name}
              </h3>
              <p className="text-gray-500 mb-4">{category.count}</p>
              <button type="button" onClick={() => handleCategoryClick(category.name)} className="text-primary-green font-medium hover:text-primary-green-dark transition-colors">
                View all →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={handleViewAllCategories} className="btn-secondary w-full sm:w-auto">
            Browse All Categories
          </button>
        </div>
      </div>

      <AllCategoriesModal 
        isOpen={showAllCategories} 
        onClose={() => setShowAllCategories(false)} 
        selectedCategory={selectedCategory}
        onOpenFeaturedRecipe={onOpenFeaturedRecipe}
      />
    </section>
  );
}

export default CategorySection;