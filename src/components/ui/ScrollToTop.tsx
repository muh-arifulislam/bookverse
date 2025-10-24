"use client";
import { ArrowUp } from "lucide-react";
import React from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-opacity cursor-pointer ease-linear duration-300 z-50 ${
        showButton
          ? "opacity-80 hover:opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleScrollToTop}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTop;
