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
          className="fixed bottom-8 right-8 bg-sky-600 text-white rounded-full p-2 shadow-lg hover:opacity-90 transition"
          aria-label="Go to top"
        >
          <MdKeyboardArrowUp size={28} />
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
