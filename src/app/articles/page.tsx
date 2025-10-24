import { ArticleCard } from "@/components/home/Articles";
import React from "react";

export default function Articles() {
  return (
    <main className="px-4 py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="">
          <h1 className="text-7xl font-semibold mb-8">Our Blog</h1>
          <div>
            <ul className="flex items-center gap-1">
              <li>Home</li>
              <li>/</li>
              <li>Our Blog</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </main>
  );
}
