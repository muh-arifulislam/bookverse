import BookCard from "@/components/ui/BookCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Bookverse",
  description: "lorem5",
};

export default function Page() {
  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-0">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
    </main>
  );
}
