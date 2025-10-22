import React from "react";
import { Clients } from "@/components/home/Clients";
import { Banners } from "@/components/home/Banners";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { TopRatedBook } from "@/components/home/TopRatedBook";
import { PopularBooks } from "@/components/home/PopularBooks";
import { NewsLetter } from "@/components/ui/NewsLetter";
import { Articles } from "@/components/home/Articles";

export default function Home() {
  return (
    <main>
      <Banners />
      <Clients />
      <FeaturedBooks />
      <TopRatedBook />
      <PopularBooks />
      <NewsLetter />
      <Articles />
    </main>
  );
}
