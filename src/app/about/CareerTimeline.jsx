"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";

const timelineEvents = [
  {
    year: "2021",
    title: "Started Learning HTML",
    description:
      "Began learning HTML from YouTube as a self learner with full dedication. After HTML, I completed CSS and JavaScript also in this year.",
    type: "learn",
    icon: <FaBriefcase />,
  },
  {
    year: "2022",
    title: "Started the Course - Full Stack Army",
    description:
      "On february 2022, I started the paid course for free on YouTube (Stack Learner). I learned the frontend for 1.3 years and the backend over 1 year.",
    type: "course",
    icon: <FaGraduationCap />,
  },
  {
    year: "2025",
    title: "Completed the Course - Full Stack Army",
    description:
      "After a long journey by self learning with full dedication, I successfully completed the course and learned all advanced concept in depth.",
    type: "achievement",
    icon: <FaTrophy />,
  },
  {
    year: "2022",
    title: "Completed React Certification",
    description:
      "Udemy - React: The Complete Guide by Maximilian Schwarzmüller",
    type: "education",
    icon: <FaGraduationCap />,
  },
  {
    year: "2023",
    title: "Remote Position Secured",
    description: "Joined TechVent Solutions as Frontend Developer (Remote)",
    type: "work",
    icon: <FaBriefcase />,
  },
  {
    year: "2023",
    title: "Meta Certification Earned",
    description: "Meta Front-End Developer Professional Certificate",
    type: "achievement",
    icon: <FaTrophy />,
  },
  {
    year: "2024",
    title: "AI-Powered Development",
    description:
      "Started integrating AI tools and OpenAI API into web applications",
    type: "achievement",
    icon: <FaRocket />,
  },
  {
    year: "2024",
    title: "11+ Projects Completed",
    description:
      "Milestone reached with diverse portfolio of successful projects",
    type: "achievement",
    icon: <FaTrophy />,
  },
];

const getIconColor = (type) => {
  switch (type) {
    case "learn":
      return "text-blue-600";
    case "course":
      return "text-purple-600";
    case "achievement":
      return "text-[#32961C]";
    default:
      return "text-gray-600";
  }
};

const getBgColor = (type) => {
  switch (type) {
    case "learn":
      return "bg-blue-100 dark:bg-blue-900/30";
    case "course":
      return "bg-purple-100 dark:bg-purple-900/30";
    case "achievement":
      return "bg-[#32961C]/10 dark:bg-[#32961C]/20";
    default:
      return "bg-gray-100 dark:bg-gray-700";
  }
};

const CareerTimeline = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="rounded-xl p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-hidden">
        <h3 className="text-2xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-gray-200">
          Career Journey Timeline
        </h3>

        <div className="relative">
          {/* Center line - only on mobile left side */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#32961C]"></div>

          <div className="space-y-6 md:space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Content Card - always full width on mobile */}
                <div
                  className={`p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${getBgColor(
                    event.type,
                  )}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-lg ${getIconColor(event.type)}`}>
                      {event.icon}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {event.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base mb-1">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-6 w-4 h-4 bg-[#32961C] rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerTimeline;
