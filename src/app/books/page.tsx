import { Metadata } from "next";
import { BooksList } from "./BooksList";

export const metadata: Metadata = {
  title: "All Books | Bookverse",
  description: "lorem5",
};

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books?page=${1}&limit=${12}`
  );
  const data = await res.json();

  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-0">
      <section>
        <BooksList
          initialBooks={data?.data || []}
          initialPage={1}
          totalPages={data.totalPages}
        />
      </section>
    </main>
  );
}
