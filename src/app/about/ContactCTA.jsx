"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 py-10 md:py-12"
    >
      <div className="rounded-xl p-8 lg:p-12 bg-gradient-to-br from-[#32961C] via-[#267a15] to-[#1d5e0f] shadow-2xl border border-gray-600/[0.3]">
        <div className="text-center mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and bring ideas to life. 
            Whether you have a project in mind or just want to chat about web development, 
            I'd love to hear from you!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#32961C] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope />
            Get In Touch
            <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/mohosinh99"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Mohosin999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://facebook.com/mohosinh99"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="mailto:mohosinh99@gmail.com"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Response Time Badge */}
        <div className="mt-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm">
            ⚡ Typically responds within 24 hours
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCTA;
