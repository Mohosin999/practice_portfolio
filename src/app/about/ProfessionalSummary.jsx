"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const ProfessionalSummary = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-8 lg:pt-12"
    >
      {/* <div className="rounded-xl p-6 lg:p-8 bg-gradient-to-r from-[#32961C] to-[#267a15] shadow-lg"> */}
      <div className="rounded-xl p-6 lg:p-8 bg-gradient-to-r from-[#5d39e2] to-[#361bce] shadow-lg">
        {/* Availability Status Badge */}
        <div className="flex items-center justify-center md:justify-start mb-4">
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
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center md:text-left mb-4">
          Details About Me
        </h2>

        <div className="text-white space-y-4 text-base text-left leading-relaxed">
          <p>
            With over 2 years of hands-on experience in MERN stack development,
            I focus on building high-performance and scalable web applications
            that maximize user experience. My skills are JavaScript, TypeScript,
            React, Node.js, and MongoDB, and I am currently exploring advanced
            concepts, including system design and agentic workflows. My skill
            set enables me to manage complex tasks and deliver effective
            solutions.
          </p>

          <p>
            On the frontend, I work with React, Next.js, Redux-Toolkit and
            Zustand with concentration on designing responsible and
            user-friendly interfaces. On the backend, I work with Node.js,
            Express.js, and MongoDB with concentration on robust and scalable
            server-side applications.​
          </p>

          <p>
            Committed to continuous learning and professional growth,
            consistently improving my technical skills, staying updated with
            modern technologies, and expanding my expertise to adapt to evolving
            industry trends and deliver high-quality software solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalSummary;
