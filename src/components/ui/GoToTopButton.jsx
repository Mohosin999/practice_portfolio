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
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-[#32961C] text-white border-2 border-[#32961C] rounded-lg shadow-lg hover:shadow-[#32961C]/30 hover:bg-transparent hover:text-[#32961C] transition-all ease-in-out duration-300"
          aria-label="Go to top"
        >
          <MdKeyboardArrowUp size={28} />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
