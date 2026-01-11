"use client";

import { useState, useMemo } from "react";
import { getBooks, searchBooks } from "@/lib/books";
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allBooks = getBooks();

  const filteredBooks = useMemo(() => {
    return searchBooks(allBooks, searchQuery);
  }, [allBooks, searchQuery]);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            书目 Catalog
          </h1>
          <p className="text-gray-600 mb-8">
            浏览我们的藏书，找到你感兴趣的书籍
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Browse our collection and find books that interest you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Results Info */}
        <div className="mb-6 text-center text-gray-600">
          {searchQuery ? (
            <p>
              找到 {filteredBooks.length} 本相关书籍
              <span className="text-gray-400 ml-2">
                Found {filteredBooks.length} book(s)
              </span>
            </p>
          ) : (
            <p>
              共 {allBooks.length} 本书籍
              <span className="text-gray-400 ml-2">
                {allBooks.length} books in total
              </span>
            </p>
          )}
        </div>

        {/* Book List */}
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
}
