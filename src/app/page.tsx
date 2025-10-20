import React from "react";
import { Clients } from "@/components/home/Clients";
import { Banners } from "@/components/home/Banners";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { TopRatedBook } from "@/components/home/TopRatedBook";

export default function Home() {
  return (
    <main>
      <Banners />
      <Clients />
      <FeaturedBooks />
      <TopRatedBook />
    </main>
  );
}
