"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import React, { useState } from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "mohosin.hasan.akash@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-900/50 text-white mt-20 z-10 relative overflow-x-hidden">
      {/* Location & Contact Info */}
      <div className="w-[87%] mx-auto overflow-x-hidden">
        <section className="w-full py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-6 text-center w-full lg:w-auto">
            <motion.div
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaMapMarkerAlt className="text-xl text-[#32961C] flex-shrink-0" />
              <span className="text-gray-100 whitespace-nowrap">
                Dhaka, Bangladesh
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaEnvelope className="text-xl text-[#32961C] flex-shrink-0" />
              <div className="flex items-center gap-2">
                <a
                  href="mailto:mohosin.hasan.akash@gmail.com"
                  className="text-gray-100 hover:text-[#32961C] transition-colors duration-300 text-sm sm:text-base"
                >
                  mohosin.hasan.akash@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="relative group flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <FaCheck className="text-green-500 text-sm transition-all duration-200" />
                  ) : (
                    <IoCopyOutline className="text-gray-400 hover:text-[#32961C] text-lg transition-all duration-200 cursor-pointer" />
                  )}

                  {/* Tooltip - positioned to avoid overflow */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                    {copied ? "Copied!" : "Copy email"}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 flex-shrink-0">
            <a
              href="https://github.com/Mohosin999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#1e43e7] border-2 border-[#1e43e7] rounded-full transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#1e43e7]/30"
            >
              <RiGithubFill className="text-2xl lg:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohosinh99/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#0e6eeb] border-2 border-[#0e6eeb] rounded-full transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#0e6eeb]/30"
            >
              <RiLinkedinFill className="text-2xl lg:text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#030407] border-2 border-[#030407] rounded-full transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#1DA1F2]/30"
            >
              <FaXTwitter className="text-xl lg:text-2xl" />
            </a>
            <a
              href="https://wa.me/8801932612133"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-[#25D366] border-2 border-[#25D366] rounded-full transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <FaWhatsapp className="text-2xl lg:text-3xl" />
            </a>
          </div>
        </section>

        {/* Copyright */}
        <div className="w-full mx-auto border-t border-sky-600/40">
          <div className="py-6 flex items-center justify-center">
            <p className="text-gray-200 text-center text-sm">
              &copy; 2022 - 2026 • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
