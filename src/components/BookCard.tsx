import Image from 'next/image';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700">
        {/* In a real app, use next/image with a proper loader or allowed domain. 
            For now, we are using placehold.co which is an external domain.
            We need to configure next.config.ts or just use a standard img tag for the prototype if we don't want to mess with config yet.
            However, next/image is better. I'll use a standard img tag for simplicity in this prototype to avoid configuration overhead 
            unless requested, but the prompt asked for "Next.js project", so next/image is idiomatic. 
            I will add 'placehold.co' to next.config.ts later or use unoptimized prop.
            Let's use unoptimized for now to ensure it works without config changes. */}
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{book.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            book.status === 'Available' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {book.status}
          </span>
        </div>
      </div>
    </div>
  );
}
