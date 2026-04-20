// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaAws,
//   FaDotCircle,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiRedux,
//   SiJest,
//   SiExpress,
//   SiTypescript,
//   SiMongodb,
//   SiPostgresql,
//   SiGit,
//   SiPrisma,
//   SiSocketdotio,
//   SiTestinglibrary,
// } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandFramerMotion } from "react-icons/tb";
// import { fadeInVisiable } from "@/utils/animation";

// const techCategories = [
//   {
//     category: "Frontend",
//     items: [
//       { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
//       { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//       { name: "React", icon: FaReact, color: "#61DAFB" },
//       { name: "Next.js", icon: SiNextdotjs, color: "#1a1a1a" },
//       { name: "Redux-Toolkit", icon: SiRedux, color: "#764ABC" },
//       { name: "Zustand", icon: FaDotCircle, color: "#764ABC" },
//       { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
//       { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       { name: "Node.js", icon: FaNodeJs, color: "#339933" },
//       { name: "Express.js", icon: SiExpress, color: "#ffffff" },
//       { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
//       { name: "Prisma", icon: SiPrisma, color: "#2D5BFF" },
//       { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
//       { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
//     ],
//   },
//   {
//     category: "DevOps",
//     items: [
//       { name: "Git", icon: SiGit, color: "#F05032" },
//       { name: "Docker", icon: FaDocker, color: "#2496ED" },
//       { name: "Jest", icon: SiJest, color: "#C21325" },
//       {
//         name: "React Testing Library",
//         icon: SiTestinglibrary,
//         color: "#FF9900",
//       },
//     ],
//   },
// ];

// const TabButton = ({ category, isActive, onClick }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`
//         px-4 py-2 font-semibold transition-all duration-300 border-b-2
//         ${
//           isActive
//             ? "border-[#32961C] text-[#32961C]"
//             : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//         }
//       `}
//     >
//       {category}
//     </motion.button>
//   );
// };

// const NewTechStackVisualization = () => {
//   const [activeCategory, setActiveCategory] = useState("Frontend");

//   const activeItems =
//     techCategories.find((c) => c.category === activeCategory)?.items || [];

//   return (
//     <motion.div
//       {...fadeInVisiable}
//       className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
//     >
//       <div className="pb-6 bg-white dark:bg-[#101016] rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] custom-border">
//         <div className="flex items-center gap-4 mb-4">
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
//             Tech Stack
//           </h3>
//           <span className="text-lg text-[#32961C] font-medium">
//             {activeCategory}
//           </span>
//         </div>

//         <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200 dark:border-gray-700">
//           {techCategories.map((cat) => (
//             <TabButton
//               key={cat.category}
//               category={cat.category}
//               isActive={activeCategory === cat.category}
//               onClick={() => setActiveCategory(cat.category)}
//             />
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-3">
//           {activeItems.map((tech, index) => {
//             const Icon = tech.icon;
//             return (
//               <motion.div
//                 key={tech.name}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#101016] shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-shadow duration-300"
//               >
//                 <Icon
//                   size={20}
//                   color={
//                     tech.name === "Next.js" ||
//                     tech.name === "Express.js" ||
//                     tech.name === "Socket.io"
//                       ? undefined
//                       : tech.color
//                   }
//                   className={
//                     tech.name === "Next.js" ||
//                     tech.name === "Express.js" ||
//                     tech.name === "Socket.io"
//                       ? "text-black dark:text-white"
//                       : ""
//                   }
//                 />
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default NewTechStackVisualization;

"use client";

import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaDotCircle } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPrisma,
  SiSocketdotio,
  SiTestinglibrary,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeInVisiable } from "@/utils/animation";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: FaDotCircle, color: "#764ABC" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
      { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#2D5BFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    category: "DevOps & Testing",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      {
        name: "React Testing Library",
        icon: SiTestinglibrary,
        color: "#FF9900",
      },
    ],
  },
];

const NewTechStackVisualization = () => {
  return (
    <motion.div
      {...fadeInVisiable}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="bg-white dark:bg-[#101016] rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] custom-border">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Tech Stack
        </h3>

        <div className="space-y-8">
          {techCategories.map((category) => (
            <div key={category.category}>
              {/* Category Title */}
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {category.category}
              </h4>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#101016]"
                    >
                      <Icon
                        size={18}
                        color={
                          tech.name === "Next.js" ||
                          tech.name === "Express.js" ||
                          tech.name === "Socket.io"
                            ? undefined
                            : tech.color
                        }
                        className={
                          tech.name === "Next.js" ||
                          tech.name === "Express.js" ||
                          tech.name === "Socket.io"
                            ? "text-black dark:text-white"
                            : ""
                        }
                      />

                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewTechStackVisualization;
