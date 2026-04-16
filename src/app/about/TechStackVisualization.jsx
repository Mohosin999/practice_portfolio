"use client";

import { motion } from "framer-motion";
import { fadeInVisiable } from "@/utils/animation";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiJest,
  SiTestinglibrary,
  SiExpress,
  SiStrapi,
  SiTypescript,
  SiSwagger,
  SiMongoose,
  SiShadcnui,
  SiMongodb,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiJqueryLogo, DiMysql } from "react-icons/di";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Zustand", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
  // {
  //   name: "Styling & UI",
  //   skills: [
  //     { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  //     { name: "Styled Components", icon: <SiStyledcomponents /> },
  //     { name: "shadcn/ui", icon: <SiShadcnui /> },
  //     { name: "Redux Toolkit", icon: <SiRedux /> },
  //     { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
  //   ],
  // },
  // {
  //   name: "Backend & Database",
  //   skills: [
  //     { name: "Node.js", icon: <FaNodeJs /> },
  //     { name: "Express.js", icon: <SiExpress /> },
  //     { name: "MongoDB", icon: <SiMongodb /> },
  //     { name: "Mongoose", icon: <SiMongoose /> },
  //     { name: "PostgreSQL", icon: <SiPostgresql /> },
  //     { name: "MSSQL", icon: <DiMysql /> },
  //   ],
  // },
  // {
  //   name: "Testing & DevOps",
  //   skills: [
  //     { name: "Jest", icon: <SiJest /> },
  //     { name: "React Testing Library", icon: <SiTestinglibrary /> },
  //     { name: "Git", icon: <SiGit /> },
  //     { name: "Docker", icon: <FaDocker /> },
  //     { name: "AWS", icon: <FaAws /> },
  //   ],
  // },
];

const TechStackVisualization = () => {
  return (
    <motion.div
      {...fadeInVisiable}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="rounded-xl p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          Tech Stack
        </h3>

        <div className="grid grid-cols-1 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300 border-b-2 border-[#32961C]/30 pb-2">
                {category.name}
              </h4> */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (catIndex * 5 + skillIndex) * 0.05,
                    }}
                    className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] hover:shadow-md transition-all duration-300 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <span className="text-[#32961C] text-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackVisualization;
