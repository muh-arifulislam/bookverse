"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ open = false }: { open?: boolean }) {
  const [isOpen, setIsOpen] = useState(open);
  const [query, setQuery] = useState("");

  const toggleSearch = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("Search:", query);
  };

  return (
    <div
      className={`flex items-center justify-end rounded-[40px] h-10 bg-[#efeee8] overflow-hidden transition-width duration-300 ease-in-out ${
        isOpen ? "w-[300px]" : "w-[40px]"
      }`}
    >
      <a
        onClick={!open ? toggleSearch : () => {}}
        className="order-1 bg-[#efeee8] px-[10px] cursor-pointer"
      >
        <Search size={18} />
      </a>

      {/* Search Box */}
      <form onSubmit={handleSubmit} role="search" method="get">
        <input
          className="w-[250px] h-10 outline-none pl-5"
          placeholder="Search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
