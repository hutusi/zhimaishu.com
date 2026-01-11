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
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4 tracking-tight">
            书目
          </h1>
          <p className="text-slate-400 text-sm italic mb-6">Catalog</p>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            浏览我们的藏书，找到你感兴趣的书籍
          </p>
          <p className="text-slate-400 text-sm italic mt-2">
            Browse our collection and find books that interest you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          {searchQuery ? (
            <p className="text-slate-500 text-sm">
              找到 <span className="font-medium text-slate-700">{filteredBooks.length}</span> 本相关书籍
              <span className="text-slate-400 ml-2 italic">
                Found {filteredBooks.length} book(s)
              </span>
            </p>
          ) : (
            <p className="text-slate-500 text-sm">
              共 <span className="font-medium text-slate-700">{allBooks.length}</span> 本书籍
              <span className="text-slate-400 ml-2 italic">
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
