"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ mobile = false, onClickLink }) => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <ul
      className={`flex ${
        mobile
          ? "flex-col items-center justify-center gap-6"
          : "flex-row items-center justify-center gap-6"
      }`}
    >
      {navlinks.map((link, index) => (
        <li
          key={index}
          className={`text-sm font-medium ${
            pathname === link.path ? "text-primarycolor" : "text-white"
          } hover:text-primarycolor transition-all ease-out duration-200`}
        >
          <Link href={link.path} onClick={onClickLink}>
            {link.name}
          </Link>
        </li>
      ))}

      {/* Hire me button */}
      <li>
        <Link href="/contact" onClick={onClickLink}>
          <button className="text-sm bg-primarycolor px-6 py-2 rounded-2xl hover:opacity-85 transition-all ease-out duration-200 whitespace-nowrap">
            Hire Me
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
