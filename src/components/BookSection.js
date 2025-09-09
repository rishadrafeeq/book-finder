import React, { useState, useEffect } from 'react';
import { searchBooks } from '../services/bookService';

const BookSection = ({ title, searchQuery, icon, gradient, maxBooks = 10 }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use different search strategies based on the section
        let results = [];
        if (searchQuery === '2024') {
          // For recent books, try multiple search strategies
          try {
            results = await searchBooks('recent', 'title');
            if (results.length === 0) {
              results = await searchBooks('new', 'title');
            }
            if (results.length === 0) {
              results = await searchBooks('book', 'title');
            }
          } catch (e) {
            results = await searchBooks('book', 'title');
          }
        } else if (searchQuery === 'new') {
          // For new releases, search for popular books
          try {
            results = await searchBooks('popular', 'title');
            if (results.length === 0) {
              results = await searchBooks('bestseller', 'title');
            }
            if (results.length === 0) {
              results = await searchBooks('book', 'title');
            }
          } catch (e) {
            results = await searchBooks('book', 'title');
          }
        } else if (searchQuery === 'bestseller') {
          // For bestsellers, search for popular books
          try {
            results = await searchBooks('bestseller', 'title');
            if (results.length === 0) {
              results = await searchBooks('popular', 'title');
            }
            if (results.length === 0) {
              results = await searchBooks('book', 'title');
            }
          } catch (e) {
            results = await searchBooks('book', 'title');
          }
        } else if (searchQuery === 'fiction') {
          // For fiction, search for fiction books
          try {
            results = await searchBooks('fiction', 'subject');
            if (results.length === 0) {
              results = await searchBooks('novel', 'title');
            }
            if (results.length === 0) {
              results = await searchBooks('book', 'title');
            }
          } catch (e) {
            results = await searchBooks('book', 'title');
          }
        } else {
          // Default search
          results = await searchBooks(searchQuery, 'title');
        }
        
        // Filter and limit results
        const filteredResults = results
          .filter(book => book.title && book.title.length > 0)
          .slice(0, maxBooks);
        
        if (filteredResults.length === 0) {
          setError('No books found for this section');
        } else {
          setBooks(filteredResults);
        }
      } catch (err) {
        console.error('Error fetching books:', err);
        setError(`Failed to load books: ${err.message}`);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery, maxBooks]);

  const scrollLeft = () => {
    const container = document.getElementById(`scroll-${title.toLowerCase().replace(/\s+/g, '-')}`);
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById(`scroll-${title.toLowerCase().replace(/\s+/g, '-')}`);
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="bg-slate-800/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-700/50 p-6 mb-6 fade-in">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <div className={`w-16 h-0.5 bg-gradient-to-r ${gradient} rounded-full`}></div>
          </div>
        </div>
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-800/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-700/50 p-6 mb-6 fade-in">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
              {icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
              <div className={`w-16 h-0.5 bg-gradient-to-r ${gradient} rounded-full`}></div>
            </div>
          </div>
          <button
            onClick={() => {
              setError(null);
              setLoading(true);
              // Retry the fetch
              const fetchBooks = async () => {
                try {
                  setLoading(true);
                  setError(null);
                  
                  let results = [];
                  if (searchQuery === '2024') {
                    results = await searchBooks('book', 'title');
                  } else if (searchQuery === 'new') {
                    results = await searchBooks('popular', 'title');
                  } else if (searchQuery === 'bestseller') {
                    results = await searchBooks('bestseller', 'title');
                  } else if (searchQuery === 'fiction') {
                    results = await searchBooks('fiction', 'subject');
                  } else {
                    results = await searchBooks(searchQuery, 'title');
                  }
                  
                  const filteredResults = results
                    .filter(book => book.title && book.title.length > 0)
                    .slice(0, maxBooks);
                  
                  if (filteredResults.length === 0) {
                    setError('No books found for this section');
                  } else {
                    setBooks(filteredResults);
                  }
                } catch (err) {
                  console.error('Error fetching books:', err);
                  setError(`Failed to load books: ${err.message}`);
                  setBooks([]);
                } finally {
                  setLoading(false);
                }
              };
              fetchBooks();
            }}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
          >
            Retry
          </button>
        </div>
        <div className="text-center py-8">
          <p className="text-slate-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="bg-slate-800/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-700/50 p-6 mb-6 fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <div className={`w-16 h-0.5 bg-gradient-to-r ${gradient} rounded-full`}></div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 border border-slate-600"
          >
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-lg flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 border border-slate-600"
          >
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          id={`scroll-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book, index) => (
            <div
              key={`${book.key || index}`}
              className="flex-shrink-0 w-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-slate-600/50 overflow-hidden"
            >
              <div className="p-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg mb-3 flex items-center justify-center overflow-hidden shadow-inner">
                  {book.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="w-full h-full flex items-center justify-center text-slate-400" style={{ display: book.cover_i ? 'none' : 'flex' }}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-xs mb-1 line-clamp-2 leading-tight">
                  {book.title}
                </h3>
                <p className="text-slate-300 text-xs mb-2 line-clamp-1">
                  {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {book.first_publish_year || 'N/A'}
                  </span>
                  <a
                    href={`https://openlibrary.org${book.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-2 py-1 rounded-md transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSection;
