import React, { useState } from 'react';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear();
  };

  return (
    <div className="card-elevated p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search by ${searchType}...`}
              className="input-field pl-12"
              autoFocus
            />
          </div>

          {/* Search Type Selector */}
          <div className="lg:w-52 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="input-field pl-10 appearance-none cursor-pointer"
            >
              <option value="title">📖 Title</option>
              <option value="author">✍️ Author</option>
              <option value="subject">🏷️ Subject</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
            disabled={!searchTerm.trim()}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </button>
        </div>

        {/* Quick Search Suggestions */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-slate-600">Quick searches:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Harry Potter', 'Stephen King', 'Science Fiction', 'Romance', 'Mystery'].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  setSearchTerm(suggestion);
                  onSearch(suggestion, searchType);
                }}
                className="btn-ghost text-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Button */}
        {searchTerm && (
          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleClear}
              className="btn-secondary text-sm flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear Results
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
