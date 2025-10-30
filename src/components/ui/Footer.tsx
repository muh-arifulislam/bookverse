import { Facebook, X } from "lucide-react";
import Link from "next/link";

const Links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Books",
    href: "/books",
  },
  {
    title: "Popular",
    href: "/#popular",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="py-14 border-t border-t-[#E0E0E0]">
      <div>
        <div className="text-center max-w-screen-md mx-auto mb-4 uppercase cardo-regular leading-[1.5]">
          <ul>
            {Links.map((link) => (
              <li key={link.title} className="inline">
                <Link href={link.href} className=" leading-1.5 text-sm">
                  {link.title}
                </Link>
                <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center mb-4">
          <span className="block">ISSN 2689-2715 | Online</span>
          <span className="block">​ISSN 2688-5425 ​| Print</span>
          <span className="block">Bookverse REVIEW | © COPYRIGHT 2024</span>
          <span className="block">​ALL RIGHTS RESERVED.</span>
        </p>
        <div className="text-center">
          <p className="mb-4">FOLLOW US</p>
          <div className="flex items-center justify-center gap-2">
            <Facebook />
            <X />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
