"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const ProfessionalSummary = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-8 lg:pt-12"
    >
      <div className="rounded-xl p-6 lg:p-8 bg-gradient-to-r from-[#32961C] to-[#267a15] shadow-lg">
        {/* Availability Status Badge */}
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <span className="text-white text-sm font-medium">
            {/* Available for Remote Opportunities & Freelance Projects */}
            Available for Remote Opportunities
          </span>
        </div>

        {/* Professional Tagline */}
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-4">
          Full Stack Developer
        </h2>

        {/* Career Objectives */}
        {/* <p className="text-white/90 text-base lg:text-lg text-center lg:text-left max-w-4xl leading-relaxed">
          Passionate about building scalable SaaS products and delivering
          innovative solutions that bridge the gap between cutting-edge AI
          technology and exceptional user experiences. Seeking to collaborate
          with forward-thinking teams globally.
        </p> */}

        <div className="text-white space-y-4 text-sm lg:text-base ">
          <p className="text-center lg:text-left leading-relaxed">
            With over 4 years of experience in front-end development, I'm an
            expert at creating high-performance, scalable web applications that
            maximize user experience. My skills are JavaScript, TypeScript,
            React, and Next.js, and I have a deep understanding of building
            RESTful APIs using Node.js and Express.
          </p>

          <p className="text-center lg:text-left leading-relaxed">
            Recently, I've been building websites with AI-powered features
            integrated directly into the workflow. This approach ensures that
            the solutions I deliver stay modern, efficient, and ahead of the
            curve.
          </p>

          <p className="text-center lg:text-left leading-relaxed">
            Recently, I've been building websites with AI-powered features
            integrated directly into the workflow. This approach ensures that
            the solutions I deliver stay modern, efficient, and ahead of the
            curve.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalSummary;
