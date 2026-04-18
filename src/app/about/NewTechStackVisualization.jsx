"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { fadeInVisiable } from "@/utils/animation";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", icon: DiMysql, color: "#4479A1" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
    ],
  },
];

const TabButton = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        px-4 py-2 font-semibold transition-all duration-300 border-b-2
        ${
          isActive
            ? "border-[#32961C] text-[#32961C]"
            : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        }
      `}
    >
      {category}
    </motion.button>
  );
};

const NewTechStackVisualization = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const activeItems =
    techCategories.find((c) => c.category === activeCategory)?.items || [];

  return (
    <motion.div
      {...fadeInVisiable}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="pb-6 bg-white dark:bg-[#101016] rounded-xl p-6 custom-border">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Tech Stack
          </h3>
          <span className="text-lg text-[#32961C] font-medium">
            {activeCategory}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200 dark:border-gray-700">
          {techCategories.map((cat) => (
            <TabButton
              key={cat.category}
              category={cat.category}
              isActive={activeCategory === cat.category}
              onClick={() => setActiveCategory(cat.category)}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 lg:flex-nowrap">
          {activeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#101016]"
              >
                <Icon size={20} color={tech.color} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default NewTechStackVisualization;
