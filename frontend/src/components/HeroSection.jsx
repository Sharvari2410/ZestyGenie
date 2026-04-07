function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Magical Recipes
            <span className="block text-accent-yellow">From Your Ingredients</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let ZestyGenie work its magic! Transform your kitchen staples into delicious, restaurant-quality recipes with AI-powered creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('recipe')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Generate Recipe
            </button>
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-lg px-8 py-4"
            >
              Explore Categories
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;