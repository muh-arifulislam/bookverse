import { Facebook, Slack, Twitter, User, Youtube } from "lucide-react";
import SearchBar from "./SearchBar";
import { Links } from "./nav-links";

const Header = () => {
  return (
    <header className="">
      <div className="px-4 lg:px-0 py-4 border-b border-slate-200">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
              <a href="#">
                <Facebook size={18} />
              </a>
              <a href="#">
                <Twitter size={18} />
              </a>
              <a href="#">
                <Youtube size={18} />
              </a>
              <a href="#">
                <Slack size={18} />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center text-lg">
                <User size={18} />
                Account
              </a>
              <div className="hidden md:block">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center py-4">
            <SearchBar open={true} />
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-0 py-6 border-b border-slate-200">
        <div className="container mx-auto">
          <Links />
        </div>
      </div>
    </header>
  );
};

export default Header;
