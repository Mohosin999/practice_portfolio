"use client";

import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import CircleImage from "./ui/CircleImage";

const HeroSection = () => {
  const animatedText = "Full Stack Developer";

  // Container for stagger animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between letters
      },
    },
  };

  // Each letter animation (only fade in, no movement)
  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[87%] h-full pt-6 lg:pt-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-3 md:px-6 lg:px-0">
        {/* Left side hero text (on mobile it comes below the image) */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <div className="text_container">
            <h5 className="text text-sm lg:text-base mb-2">Hey, this is me</h5>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              Mohosin Hasan Akash
              <br />a{" "}
              <motion.span
                className="inline-block"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {animatedText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                    className="inline-block text-[#32961C] "
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h2>

            {/* Paragraph */}
            <p className="text-left md:text-center lg:text-left py-4 text-base xl:text-lg text">
              Developing user-friendly web apps with high-performance and
              maintainable code using React, Next.js, and TypeScript. I have
              good knowledge of building RESTful APIs using Node.js and Express.
              I am deeply exploring the world of AI-powered web apps to enhance
              user experience.
            </p>

            {/* Download resume button */}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="flex w-fit mx-auto lg:mx-0"
            >
              <button className="flex items-center justify-center gap-3 text-sm lg:text-base text-[#32961C] px-5 py-2 my-3 border-2 border-[#32961C] transition-all ease-in-out duration-200 hover:bg-[#32961C] hover:text-white">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right side hero image (on mobile it shows on top) */}
        <CircleImage image="./img/profile.png" />
      </div>
    </div>
  );
};

export default HeroSection;
