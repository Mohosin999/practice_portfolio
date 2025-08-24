"use client";

import Link from "next/link";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // 3-dot / hamburger icon

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // scrolling down → hide
      } else {
        setShowHeader(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <div
        className={`fixed top-0 left-0 z-50 w-full flex items-center justify-center transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 py-6 bg-secondarycolor rounded-2xl">
          {/* Left side logo */}
          <Link href={"/"}>
            <h4 className="text-xl font-bold">
              Mohosin <span className="text-primarycolor">.</span>
            </h4>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:flex flex-1 justify-end">
            <Navbar />
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondarycolor z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            className="self-end text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>

          {/* Navbar inside Sidebar */}
          <div className="mt-8">
            <Navbar mobile onClickLink={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
