"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-14">
      {/* Location & Contact Info */}
      <section className="w-full py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="w-[87%] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <motion.div
            className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaMapMarkerAlt className="text-xl text-[#32961C]" />
            <span className="text">Dhaka, Bangladesh</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope className="text-xl text-[#32961C]" />
            <a
              href="mailto:mohosin.hasan.akash@gmail.com"
              className="text hover:text-[#32961C] transition-colors duration-300"
            >
              mohosin.hasan.akash@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Copyright */}
      <div className="w-[87%] mx-auto border-t border-sky-600/40">
        <div className="py-6 flex items-center justify-center">
          <p className="text text-center text-sm">
            &copy; 2022 - 2026 • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
