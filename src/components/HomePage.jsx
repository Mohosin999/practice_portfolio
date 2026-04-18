"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  // SiPostgresql,
  // SiPrisma,
} from "react-icons/si";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import {
  fadeInUp,
  fadeInVisiable,
  staggerContainer,
  counterAnimation,
} from "@/utils/animation";

const HomePage = () => {
  const techStack = [
    { icon: <SiReact />, name: "React", color: "text-blue-500" },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "text-gray-700 dark:text-gray-200",
    },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600" },
    {
      icon: <SiExpress />,
      name: "Express",
      color: "text-gray-600 dark:text-gray-300",
    },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    // { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-700" },
    // { icon: <SiPrisma />, name: "Prisma", color: "text-indigo-600" },
  ];

  const features = [
    {
      icon: <FaCode className="text-4xl text-[#32961C]" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive UIs with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <FaRocket className="text-4xl text-[#32961C]" />,
      title: "Backend Development",
      description:
        "Creating scalable RESTful APIs with Node.js, Express, and MongoDB.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#32961C]" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web applications with seamless frontend-backend integration.",
    },
  ];

  return (
    <div className="w-full">
      {/* ========================================================
       *                      Hero Section
      ======================================================== */}
      <HeroSection />

      {/* ========================================================
       *                      Tech Stack Marquee
       ======================================================== */}
      <section className="w-full pt-8">
        <div className="w-[87%] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold">Core Stack</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 xl:gap-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <motion.div
                  {...fadeInVisiable}
                  className={`text-4xl lg:text-6xl ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {tech.icon}
                </motion.div>
                <span className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
       *                      Features/What I Do
      ======================================================== */}
      <section className="w-full py-16">
        <div className="w-[87%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-base xl:text-lg text max-w-3xl mx-auto">
              I specialize in building modern, scalable web applications with a
              focus on user experience and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-[#101016] rounded-xl p-6 lg:p-8 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 custom-border"
                {...fadeInUp}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
       *                      Quick Stats
      ======================================================== */}
      <section className="w-full py-16 bg-white dark:bg-[#101016] text-white dark:text-gray-200 mx-3 md:mx-6 lg:mx-[6.5%] rounded-xl mt-10">
        <div className="w-[87%] mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex flex-col items-center">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800 dark:text-white"
                {...counterAnimation}
              >
                3+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Years Experience
              </p>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800 dark:text-white"
                {...counterAnimation}
              >
                20+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Projects Completed
              </p>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800 dark:text-white"
                {...counterAnimation}
              >
                10+
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Technologies
              </p>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-2 text-gray-800 dark:text-white"
                {...counterAnimation}
              >
                24/7
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                Support
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
       *                      Call to Action
      ======================================================== */}
      <section className="w-full pt-16">
        <div className="w-[87%] mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-base xl:text-lg text max-w-2xl mx-auto mb-8">
              Have a project in mind? I'm always open to discussing new
              opportunities and collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="btn-gradient inline-flex items-center gap-2 px-8 py-3 text-white font-semibold border-2 border-transparent rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:border-white"
              >
                <FaEnvelope /> Get In Touch
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Mohosin999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-12 h-12 text-white bg-[#32961C] border-2 border-[#32961C] rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#32961C] hover:shadow-lg hover:shadow-[#32961C]/30"
                >
                  <RiGithubFill className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohosinh99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-12 h-12 text-white bg-[#32961C] border-2 border-[#32961C] rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#32961C] hover:shadow-lg hover:shadow-[#32961C]/30"
                >
                  <RiLinkedinFill className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
