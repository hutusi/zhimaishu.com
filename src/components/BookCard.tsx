import type { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const isAvailable = book.status === "available";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-4xl mb-2">📚</div>
          <p className="text-amber-800 font-medium text-sm">{book.title}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-gray-500 text-sm mb-1 line-clamp-1">{book.titleEn}</p>
        <p className="text-gray-600 text-sm mb-3">
          {book.author}
          <span className="text-gray-400 ml-1 text-xs">/ {book.authorEn}</span>
        </p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {book.description}
        </p>
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "可借 Available" : "已借出 Borrowed"}
        </span>
      </div>
    </div>
  );
}
