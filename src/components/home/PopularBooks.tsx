import Link from "next/link";
import BookCard from "../ui/BookCard";
import { MoveRight } from "lucide-react";

export function PopularBooks() {
  return (
    <section className="max-w-screen-lg mx-auto px-0 my-20" id="popular">
      <div>
        <div>
          <div className="text-center">
            <span className="uppercase">Some quality items</span>
          </div>
          <div className="flex items-center justify-around gap-8">
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
            <h1 className="text-5xl font-semibold">Popular Books</h1>
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 gap-6">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-5xl font-semibold">Quote of the day</h2>
            <span className="inline-block w-14 h-1 bg-amber-800/70"></span>
          </div>
          <div className="text-center w-md mx-auto mt-8">
            <article className="text-2xl leading-[2] tracking-wide font-semibold">
              ““The more that you read, the more things you will know. The more
              that you learn, the more places you’ll go.””
            </article>
            <h4 className="text-xl mt-4 font-medium">Dr. Seuss</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
