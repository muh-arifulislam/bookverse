import Link from "next/link";
import BookCard from "../ui/BookCard";
import { MoveRight } from "lucide-react";

export function FeaturedBooks() {
  return (
    <section className="max-w-screen-lg mx-auto px-0 my-20">
      <div>
        <div>
          <div className="text-center">
            <span className="uppercase">Some quality items</span>
          </div>
          <div className="flex items-center justify-around gap-8">
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
            <h1 className="text-5xl">Featured Books</h1>
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 gap-6">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <div className="h-[1px] w-full bg-slate-200 my-10"></div>
        <div className="flex items-center justify-end">
          <Link
            href={"/books"}
            className="flex items-center justify-center gap-2"
          >
            View All Books
            <MoveRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
