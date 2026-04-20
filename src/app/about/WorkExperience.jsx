"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "Apr 5, 2025 - Apr 11, 2026",
    location: "Mymensingh, Bangladesh",
    type: "Freelance",
    achievements: [
      "Developed a fully integrated frontend to display dynamic user data, providing users with a dedicated profile area to view account information and monitor their current financial status.",
      "Designed a payment page utilizing QR codes, enabling seamless transaction flow across multiple payment gateways for authenticated users.",
      "Built a private admin dashboard using Strapi, giving management the sole control over user creation and account access, and preventing public sign-ups.",
    ],
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Strapi"],
  },
];

const WorkExperience = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="rounded-xl p-6 lg:p-8 bg-white dark:bg-[#101016] shadow-[0_0_10px_rgba(0,0,0,0.2)] custom-border">
        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
          Work Experience
        </h3>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#32961C]"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 w-4 h-4 bg-[#32961C] rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

                {/* Header */}
                <div className="mb-3">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {exp.role}
                  </h4>
                  <p className="text-[#32961C] font-semibold text-base">
                    {exp.company}
                  </p>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#32961C]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[#32961C]" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaBriefcase className="text-[#32961C]" />
                    {exp.type}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-1 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex gap-2"
                    >
                      <span className="text-lg text-[#32961C] leading-5 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-5">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-[#32961C]/10 text-[#32961C] dark:bg-[#32961C]/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
