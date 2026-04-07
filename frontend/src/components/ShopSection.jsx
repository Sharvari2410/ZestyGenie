import { useState } from 'react';

function ShopSection() {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Spice Set",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      badge: "Best Seller",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: "Chef's Knife Set",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      badge: "New",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      name: "Cooking Class Bundle",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      badge: "Popular",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Recipe Book Collection",
      price: "$24.99",
      originalPrice: "$34.99",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      badge: "Limited",
      rating: 4.6,
      reviews: 312
    }
  ];

  const categories = [
    { name: "Kitchen Tools", icon: "🔪", count: "50+ items" },
    { name: "Spices & Herbs", icon: "🌿", count: "100+ items" },
    { name: "Cookware", icon: "🍳", count: "75+ items" },
    { name: "Ingredients", icon: "🥕", count: "200+ items" },
    { name: "Books & Courses", icon: "📚", count: "30+ items" },
    { name: "Gifts", icon: "🎁", count: "25+ items" }
  ];

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    alert(`${product.name} added to cart! (${cartItems.length + 1} items in cart)`);
  };

  const handleViewAllProducts = () => {
    alert('Full product catalog coming soon! Check out our featured products above.');
  };

  const handleGetBundleDeal = () => {
    alert('Bundle deal feature coming soon! Contact us for special pricing.');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="shop" className="section bg-secondary-beige">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4">
            Culinary Shop
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Elevate your cooking experience with premium kitchen tools, fresh ingredients, and expert resources.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-dark text-center mb-8">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="card text-center hover:shadow-card transition-all duration-300 cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-text-dark mb-1">{category.name}</h4>
                <p className="text-gray-500 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-text-dark">Featured Products</h3>
            <button onClick={handleViewAllProducts} className="btn-outline">View All Products</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="card group overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-accent-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-text-dark mb-2">{product.name}</h4>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-accent-yellow' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary-green">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className="btn-primary text-sm px-4 py-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="card bg-gradient-to-r from-primary-green to-primary-green-dark text-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">🎁 Special Bundle Deal</h3>
              <p className="text-gray-100 mb-6">
                Get our complete cooking starter kit with 40% off! Includes premium spices, kitchen tools, and recipe guides.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold">$149.99</span>
                <span className="text-xl text-gray-200 line-through">$249.99</span>
                <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">Save 40%</span>
              </div>
              <button onClick={handleGetBundleDeal} className="bg-white text-primary-green font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Get Bundle Deal
              </button>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🍳</div>
              <p className="text-gray-200">Limited time offer - ends soon!</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get exclusive deals, new product launches, and cooking tips delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-center space-x-2 text-green-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Successfully subscribed!</span>
                </div>
                <p className="text-green-600 mt-2">Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field flex-1"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopSection;