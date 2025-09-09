import React, { useState } from 'react';

const Navbar = ({ onClearResults, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    if (onClearResults) {
      onClearResults();
    }
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50 slide-in-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className={`flex items-center space-x-3 cursor-pointer hover:scale-105 transform transition-transform duration-200 ${isAnimating ? 'click-animation' : ''}`}
            onClick={handleHomeClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800 drop-shadow-sm">
              Book Finder
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium hover:scale-105 transform ${isAnimating ? 'click-animation' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick();
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium hover:scale-105 transform ${currentPage === 'about' ? 'text-slate-900' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium hover:scale-105 transform ${currentPage === 'contact' ? 'text-slate-900' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('contact');
              }}
            >
              Contact
            </a>
          </div>

          {/* Search Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg font-medium flex items-center space-x-2"
              onClick={() => {
                if (currentPage === 'home') {
                  const searchSection = document.querySelector('.max-w-5xl');
                  if (searchSection) {
                    searchSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  handleNavigation('home');
                }
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-slate-900 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-slate-200 shadow-lg">
              <a
                href="#home"
                className={`block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors duration-200 font-medium ${isAnimating ? 'click-animation' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  handleHomeClick();
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors duration-200 font-medium ${currentPage === 'about' ? 'text-slate-900 bg-slate-100' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('about');
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors duration-200 font-medium ${currentPage === 'contact' ? 'text-slate-900 bg-slate-100' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
                }}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg font-medium flex items-center justify-center space-x-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (currentPage === 'home') {
                      const searchSection = document.querySelector('.max-w-5xl');
                      if (searchSection) {
                        searchSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      handleNavigation('home');
                    }
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
