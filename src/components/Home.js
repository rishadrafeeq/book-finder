import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import BookSection from './BookSection';
import { searchBooks } from '../services/bookService';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchTerm, searchType = 'title') => {
    if (!searchTerm.trim()) {
      setError('Please enter a search term');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const results = await searchBooks(searchTerm, searchType);
      setBooks(results);
      
      if (results.length === 0) {
        setError('No books found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to search books. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setBooks([]);
    setError(null);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '6s'}}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/60 rounded-full twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/50 rounded-full twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-white/70 rounded-full twinkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/40 rounded-full twinkle" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-white/60 rounded-full twinkle" style={{animationDelay: '4s'}}></div>
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-1/6 left-1/6 w-16 h-16 border-2 border-white/20 rotate-slow"></div>
        <div className="absolute bottom-1/6 right-1/6 w-12 h-12 border-2 border-white/15 rotate-slow" style={{animationDelay: '10s'}}></div>
        
        {/* Pulsing glow elements */}
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 rounded-full pulse-glow"></div>
        <div className="absolute bottom-1/2 right-1/6 w-20 h-20 bg-gradient-to-r from-white/10 to-white/5 rounded-full pulse-glow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-cyan-300/60 rounded-full floating-animation"></div>
        <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-blue-300/50 rounded-full floating-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/5 left-2/5 w-3 h-3 bg-emerald-300/70 rounded-full floating-animation" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-2/5 right-2/5 w-1.5 h-1.5 bg-teal-300/55 rounded-full floating-animation" style={{animationDelay: '7s'}}></div>
        <div className="absolute top-3/5 left-3/5 w-2.5 h-2.5 bg-indigo-300/65 rounded-full floating-animation" style={{animationDelay: '9s'}}></div>
        
        {/* Moving light streaks */}
        <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 floating-animation"></div>
        <div className="absolute bottom-1/4 right-0 w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 floating-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <header className="text-center mb-12 fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-3xl shadow-2xl mb-6 bounce-gentle border border-white/20">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Book Finder
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover your next great read! Search by title, author, or subject to find books from the world's largest digital library.
          </p>
        </header>

        {/* Search Section */}
        <div className="max-w-5xl mx-auto mb-12 slide-up">
          <SearchBar onSearch={handleSearch} onClear={clearResults} />
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto">
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {!loading && !error && hasSearched && books.length > 0 && (
            <div className="mb-8 fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  Found <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">{books.length}</span> book{books.length !== 1 ? 's' : ''}
                </h2>
                <div className="hidden md:flex items-center space-x-2 text-white/80">
                  <span className="text-sm">Powered by</span>
                  <span className="font-semibold text-cyan-300">Open Library</span>
                </div>
              </div>
              <BookList books={books} />
            </div>
          )}

          {!loading && !error && hasSearched && books.length === 0 && (
            <div className="text-center py-16 fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-6 bounce-gentle border border-white/30">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-md">No books found</h3>
              <p className="text-white/80 max-w-md mx-auto drop-shadow-sm">Try searching with different keywords, check your spelling, or browse our quick search suggestions.</p>
            </div>
          )}


          {/* Featured Book Sections */}
          {!hasSearched && (
            <div className="space-y-8">
              {/* Recent Books */}
              <BookSection
                title="Recent Books"
                searchQuery="2024"
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
                gradient="from-blue-500 to-indigo-600"
                maxBooks={10}
              />

              {/* New Books */}
              <BookSection
                title="New Releases"
                searchQuery="new"
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                }
                gradient="from-emerald-500 to-green-600"
                maxBooks={10}
              />

              {/* Top 10 Books */}
              <BookSection
                title="Top 10 Bestsellers"
                searchQuery="bestseller"
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                }
                gradient="from-purple-500 to-pink-600"
                maxBooks={10}
              />

              {/* Popular Fiction */}
              <BookSection
                title="Popular Fiction"
                searchQuery="fiction"
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
                gradient="from-orange-500 to-red-600"
                maxBooks={10}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
