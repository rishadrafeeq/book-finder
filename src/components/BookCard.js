import React, { useState } from 'react';

const BookCard = ({ book }) => {
  const [showDetails, setShowDetails] = useState(false);

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return 'Unknown Author';
    return authors.join(', ');
  };

  const formatLanguages = (languages) => {
    if (!languages || languages.length === 0) return 'Unknown';
    return languages.map(lang => lang.toUpperCase()).join(', ');
  };

  const getBookCoverUrl = (book) => {
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }
    return null;
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card-elevated p-6 h-full flex flex-col group hover:scale-105 transition-all duration-300">
      {/* Book Cover */}
      <div className="flex justify-center mb-6">
        {getBookCoverUrl(book) ? (
          <div className="relative">
            <img
              src={getBookCoverUrl(book)}
              alt={`Cover of ${book.title}`}
              className="w-36 h-52 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          <div className="w-36 h-52 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
            <span className="text-slate-400 text-5xl">📚</span>
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {book.title || 'Untitled'}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <svg className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p className="text-slate-600 text-sm">
              <span className="font-medium text-slate-700">Author:</span> {formatAuthors(book.author_name)}
            </p>
          </div>

          {book.first_publish_year && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-600 text-sm">
                <span className="font-medium text-slate-700">Published:</span> {book.first_publish_year}
              </p>
            </div>
          )}

          {book.edition_count && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-slate-600 text-sm">
                <span className="font-medium text-slate-700">Editions:</span> {book.edition_count}
              </p>
            </div>
          )}

          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <p className="text-slate-600 text-sm">
              <span className="font-medium text-slate-700">Language:</span> {formatLanguages(book.language)}
            </p>
          </div>
        </div>

        {/* Toggle Details Button */}
        <button
          onClick={toggleDetails}
          className="btn-secondary text-sm mb-4 flex items-center justify-center gap-2"
        >
          <svg className={`h-4 w-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {/* Additional Details */}
        {showDetails && (
          <div className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-4 mb-4">
            {book.subject && book.subject.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="font-medium text-slate-700">Subjects:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {book.subject.slice(0, 3).map((subject, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                  {book.subject.length > 3 && (
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      +{book.subject.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-2">
              {book.ebook_access && (
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-slate-700">Ebook Access:</span>
                  <span className="text-slate-600">{book.ebook_access}</span>
                </div>
              )}

              {book.has_fulltext && (
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Full text available</span>
                </div>
              )}

              {book.public_scan_b && (
                <div className="flex items-center gap-2 text-blue-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Public scan available</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto pt-4 space-y-2">
          {book.key && (
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block flex items-center justify-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View on Open Library
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
