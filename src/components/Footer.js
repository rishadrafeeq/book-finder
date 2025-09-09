import React from 'react';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 mt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Book Finder</h3>
                <p className="text-slate-400 text-xs">Discover Your Next Great Read</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-md">
              Your gateway to the world's largest digital library. Search, discover, and explore millions of books.
            </p>
            <div className="flex space-x-3">
              <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:contact@bookfinder.com" 
                 className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </button>
              </li>
              <li>
                <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer"
                   className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Open Library
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">Features</h4>
            <ul className="space-y-2">
              <li className="text-slate-300 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Advanced Search
              </li>
              <li className="text-slate-300 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Mobile Optimized
              </li>
              <li className="text-slate-300 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Free Forever
              </li>
              <li className="text-slate-300 flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                20M+ Books
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-xs mb-3 md:mb-0">
              © {currentYear} Book Finder. All rights reserved. Built with ❤️ for book lovers.
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <button 
                onClick={() => onNavigate('privacy')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('terms')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => onNavigate('cookies')}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
