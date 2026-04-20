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
            <h5 className="text text-sm lg:text-base mb-2">Hey, this is</h5>

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
              Building scalable web applications with{" "}
              <span className="font-semibold">MERN stack</span> and{" "}
              <span className="font-semibold">TypeScript </span>
              that drive real impact. Integrating AI agents into my workflow to
              automate tasks, speed up development, and continuously improve
              outcomes. I continuously level up my skills to deliver
              high-quality solutions.
            </p>

            <div className="flex items-center flex-col lg:flex-row justify-start gap-2 md:gap-4 mt-2">
              {/* Download resume button */}
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="flex w-fit mx-auto lg:mx-0"
              >
                <button className="btn-gradient">
                  <FaDownload /> Download Resume
                </button>
              </a>

              {/* Social media buttons */}
              {/* <div className="flex gap-4 mx-auto lg:mx-0">
                <a
                  href="https://www.linkedin.com/in/mohosinh99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-12 h-12 text-[#32961C] bg-transparent border-2 border-[#32961C] rounded-full transition-all ease-in-out duration-300 hover:bg-[#32961C] hover:text-white hover:shadow-lg hover:shadow-[#32961C]/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Mohosin999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-12 h-12 text-[#32961C] bg-transparent border-2 border-[#32961C] rounded-full transition-all ease-in-out duration-300 hover:bg-[#32961C] hover:text-white hover:shadow-lg hover:shadow-[#32961C]/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Right side hero image (on mobile it shows on top) */}
        <CircleImage image="./img/profile.png" />
      </div>
    </div>
  );
};

export default HeroSection;
