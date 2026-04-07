import { useState } from 'react';
import SubmitRecipeModal from './SubmitRecipeModal.jsx';

function Header({ savedRecipes }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-primary-green shadow-soft sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-green font-bold text-lg">🧞‍♂️</span>
              </div>
              <span className="text-white font-bold text-xl">ZestyGenie</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('categories')} className="nav-link">Category</button>
              <button onClick={() => scrollToSection('community')} className="nav-link">Community</button>
              <button onClick={() => scrollToSection('shop')} className="nav-link">Shop</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button onClick={() => alert('Search feature coming soon!')} className="text-white hover:text-accent-yellow transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Generate Recipe Button */}
              <button
                onClick={() => scrollToSection('recipe')}
                className="hidden sm:block btn-secondary text-sm px-4 py-2"
              >
                Generate Recipe
              </button>

              {/* Wishlist */}
              <button onClick={() => alert('Wishlist feature coming soon!')} className="text-white hover:text-accent-yellow transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {savedRecipes.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {savedRecipes.length}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button onClick={() => alert('User profile feature coming soon!')} className="text-white hover:text-accent-yellow transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary hidden sm:block"
              >
                Submit Recipe
              </button>
            </div>
          </div>
        </div>
      </header>

      <SubmitRecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Header;