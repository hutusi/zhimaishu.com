export interface Book {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  cover: string;
  status: "available" | "borrowed";
  description: string;
  descriptionEn: string;
}

import booksData from "@/data/books.json";

export function getBooks(): Book[] {
  return booksData as Book[];
}

export function searchBooks(books: Book[], query: string): Book[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return books;

  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.titleEn.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.authorEn.toLowerCase().includes(lowerQuery)
  );
}
