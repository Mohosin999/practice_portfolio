"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { HiCode } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0A0A0F]/90 dark:bg-opacity-90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300">
        <div className="w-full lg:w-[87%] flex items-center justify-between px-3 md:px-6 lg:px-0 py-6">
          {/* Left side logo */}
          <Link href={"/"}>
            <h4 className="text-xl lg:text-2xl font-bold active:scale-105 flex items-center hover:text-[#32961C] duration-300">
              <HiCode size={40} className="mr-2 text-[#32961C]" /> Mohosin
            </h4>
          </Link>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex flex-1 justify-end flex-row items-center gap-8">
            <ThemeToggle />

            {navlinks.map((link, index) => (
              <li
                key={index}
                className={`text-sm lg:text-base font-semibold ${
                  pathname === link.path
                    ? "text-[#32961C]"
                    : "text-gray-800 dark:text-gray-200 hover:dark:text-[#32961C]"
                } hover:text-[#32961C] transition-all ease-out duration-200 active:scale-105`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}

            {/* Hire Me button */}
            <li>
              <Link href="/contact">
                <button className="btn-gradient text-sm lg:text-base text-white px-6 py-2 border-2 border-transparent rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:border-white font-semibold whitespace-nowrap active:scale-105">
                  Hire Me
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.2)] z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            className="self-end text-gray-900 dark:text-white text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>

          {/* Navbar inside Sidebar */}
          <ul className="mt-8 flex flex-col items-center justify-center gap-6">
            <ThemeToggle />

            {navlinks.map((link, index) => (
              <li
                key={index}
                className={`text-base font-semibold ${
                  pathname === link.path
                    ? "text-[#32961C]"
                    : "text-gray-800 dark:text-gray-200 hover:dark:text-[#32961C]"
                } hover:text-[#32961C] transition-all ease-out duration-200 active:scale-105`}
              >
                <Link href={link.path} onClick={() => setIsSidebarOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Hire Me button */}
            <li>
              <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
                <button className="btn-gradient text-sm lg:text-base text-white px-6 py-2 border-2 border-transparent rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:border-white font-semibold whitespace-nowrap active:scale-105">
                  Hire Me
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
