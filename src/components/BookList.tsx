import type { Book } from "@/lib/books";
import BookCard from "./BookCard";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-gray-500 text-lg">
          未找到相关书籍
        </p>
        <p className="text-gray-400">
          No books found matching your search
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
