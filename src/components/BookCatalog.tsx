'use client';

import { useState } from 'react';
import { Book } from '@/types';
import BookCard from './BookCard';

interface BookCatalogProps {
  initialBooks: Book[];
}

export default function BookCatalog({ initialBooks }: BookCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = initialBooks.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto sm:max-w-lg">
        <label htmlFor="search" className="sr-only">Search books</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No books found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
