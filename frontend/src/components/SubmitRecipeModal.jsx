import { useState } from 'react';

function SubmitRecipeModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    category: '',
    difficulty: 'Easy',
    prepTime: '',
    cookTime: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Recipe submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        category: '',
        difficulty: 'Easy',
        prepTime: '',
        cookTime: ''
      });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-text-dark">Submit Your Recipe</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Recipe Submitted!</h3>
              <p className="text-gray-600">Thank you for sharing your recipe with the ZestyGenie community.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Recipe Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., Grandma's Chocolate Chip Cookies"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="snack">Snack</option>
                    <option value="beverage">Beverage</option>
                    <option value="appetizer">Appetizer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="input-field"
                  placeholder="Brief description of your recipe..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Prep Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="prepTime"
                    value={formData.prepTime}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Cook Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="cookTime"
                    value={formData.cookTime}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Difficulty Level
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Ingredients *
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field"
                  placeholder="List your ingredients, one per line:
2 cups flour
1 cup sugar
1/2 cup butter
2 eggs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Instructions *
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field"
                  placeholder="Step-by-step cooking instructions:
1. Preheat oven to 350°F
2. Mix dry ingredients...
3. Add wet ingredients..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-outline flex-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Submit Recipe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubmitRecipeModal;