import React from 'react';

const About = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/60 rounded-full twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/50 rounded-full twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-white/70 rounded-full twinkle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <header className="text-center mb-16 fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl mb-6 bounce-gentle">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              About Book Finder
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover the story behind your favorite book discovery platform
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Mission Section */}
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Book Finder is dedicated to making book discovery effortless and enjoyable. We believe that everyone deserves access to the world's vast collection of literature, and our platform serves as a bridge between readers and their next great read.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Our mission is to democratize access to knowledge and literature by providing a free, intuitive, and powerful book discovery platform that connects readers with the books they love.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    Book Finder was born from a simple idea: making book discovery as easy as a single search. In a world where millions of books exist but finding the right one can be overwhelming, we set out to create a solution that puts the power of discovery in every reader's hands.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Built with modern web technologies and powered by the Open Library's comprehensive database, Book Finder represents the perfect marriage of technology and literature, making the world's knowledge more accessible than ever before.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Advanced Search</h3>
                <p className="text-slate-600">Search by title, author, or subject with our powerful search engine powered by Open Library's comprehensive database.</p>
              </div>
            </div>

            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Vast Library</h3>
                <p className="text-slate-600">Access millions of books from the world's largest digital library with comprehensive metadata and cover images.</p>
              </div>
            </div>

            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Mobile Optimized</h3>
                <p className="text-slate-600">Responsive design that works perfectly on all devices, from desktop to mobile, with touch-friendly interfaces.</p>
              </div>
            </div>

            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Lightning Fast</h3>
                <p className="text-slate-600">Get instant search results with our optimized API and modern web technologies for the best user experience.</p>
              </div>
            </div>
          </div>


          {/* Stats Section */}
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">By the Numbers</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">20M+</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">Books Available</div>
                <div className="text-slate-500">From classics to contemporary</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">Languages</div>
                <div className="text-slate-500">Global accessibility</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">Always Available</div>
                <div className="text-slate-500">Never offline</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">Free</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">Forever Free</div>
                <div className="text-slate-500">No hidden costs</div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center fade-in">
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
