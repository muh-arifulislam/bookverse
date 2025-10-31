import { Metadata } from "next";
import { BooksList } from "./BooksList";
import { getAllBooks } from "@/lib/books";

export const metadata: Metadata = {
  title: "All Books | Bookverse",
  description: "lorem5",
};

export default async function Page() {
  const { data, totalPages } = await getAllBooks(12, 1);

  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-0">
      <section>
        <BooksList
          initialBooks={data ?? []}
          initialPage={1}
          totalPages={totalPages}
        />
      </section>
    </main>
  );
}
