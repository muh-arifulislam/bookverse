import { Facebook, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14 border-t border-t-[#E0E0E0]">
      <div>
        <div className="text-center max-w-screen-md mx-auto mb-4 uppercase cardo-regular leading-[1.5]">
          <a href="#" className=" leading-1.5 text-sm">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
          <a href="#" className="">
            Magazine
          </a>
          <span color="#2a2a2a">&nbsp; |&nbsp;&nbsp;</span>
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
