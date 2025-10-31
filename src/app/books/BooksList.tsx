"use client";

import { useState, useEffect, useRef } from "react";

import BookCard from "@/components/ui/BookCard";

type Book = Record<string, unknown>;

export function BooksList({
  initialBooks,
  initialPage,
  totalPages: initialTotalPages,
}: {
  initialBooks: Book[] | [];
  initialPage: number;
  totalPages: number;
}) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchBooks = async (pageNumber: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/books?page=${pageNumber}&limit=12`);
      const data = await res.json();

      // Prevent duplicates
      setBooks((prev) => [
        ...prev,
        ...data.data.filter(
          (newBook: Book) => !prev.some((b) => b.id === newBook.id)
        ),
      ]);

      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to load more books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page !== initialPage) {
      fetchBooks(page);
    }
  }, [page]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && page < totalPages) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const loaderEl = loaderRef.current;
    if (loaderEl) observer.observe(loaderEl);

    return () => {
      if (loaderEl) observer.unobserve(loaderEl);
    };
  }, [loading, page, totalPages]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
        {books.map((book) => (
          <BookCard key={book.id as string} />
        ))}
      </div>
      <div ref={loaderRef} className="h-10 text-center text-sm">
        {loading
          ? "Loading..."
          : page >= totalPages
          ? "No more books"
          : "Scroll down to load more"}
      </div>
    </div>
  );
}
