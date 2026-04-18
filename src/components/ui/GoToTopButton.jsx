"use client";

import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="btn-gradient fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center text-white border-2 border-transparent rounded-lg shadow-lg hover:shadow-[#5d39e2]/30 hover:bg-transparent hover:text-white transition-all ease-in-out duration-300"
          aria-label="Go to top"
        >
          <MdKeyboardArrowUp size={28} />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
