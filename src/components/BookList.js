import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={`${book.key}-${index}`} book={book} />
      ))}
    </div>
  );
};

export default BookList;
