"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

const NAVITEMS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Books",
    url: "/books",
  },
  {
    name: "Popular",
    url: "#",
  },
  {
    name: "Articles",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
  {
    name: "Contact Us",
    url: "#",
  },
];

export function Links() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="flex items-center justify-between">
        <a href="#" className="font-bold text-2xl md:text-4xl">
          BOOKVERSE
        </a>
        <ul className="hidden md:flex items-center gap-4 text-xl uppercase">
          {NAVITEMS.map((nav) => (
            <li key={nav.name}>
              <Link
                href={nav.url}
                className={`px-5 py-2.5 ${
                  pathname === nav.url ? "text-amber-300" : ""
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="inline lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
      <div
        className={`block lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-5 bg-slate-200/40 border border-slate-600/30 rounded">
          {NAVITEMS.map((nav) => (
            <li
              key={nav.name}
              className="px-5 py-2.5 w-full border-b border-slate-50/60 last:border-b-0"
            >
              <Link href={nav.url} className="inline-block w-full">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
