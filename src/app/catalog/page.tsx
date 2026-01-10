import BookCatalog from '@/components/BookCatalog';
import booksData from '@/data/books.json';
import { Book } from '@/types';

// Ensure the data conforms to the type. In a real app, we'd validate this.
const books: Book[] = booksData as Book[];

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Library Catalog
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Explore our collection of books available for borrowing.
        </p>
      </div>
      <BookCatalog initialBooks={books} />
    </div>
  );
}
