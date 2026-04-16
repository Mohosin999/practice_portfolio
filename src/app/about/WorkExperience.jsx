// "use client";

// import { motion } from "framer-motion";
// import { fadeInUp } from "@/utils/animation";
// import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Frontend Developer",
//     company: "TechVent Solutions",
//     period: "Jan 2023 - Present",
//     location: "Remote",
//     type: "Full-time",
//     achievements: [
//       "Led the development of AI-powered dashboard features serving 10,000+ users",
//       "Improved application performance by 40% through code optimization and lazy loading",
//       "Mentored 3 junior developers and conducted code reviews",
//       "Implemented comprehensive testing strategy achieving 85% code coverage",
//     ],
//     tech: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS"],
//   },
//   {
//     role: "Frontend Developer",
//     company: "TechVent Solutions",
//     period: "Jan 2023 - Present",
//     location: "Remote",
//     type: "Full-time",
//     achievements: [
//       "Led the development of AI-powered dashboard features serving 10,000+ users. Led the development of AI-powered dashboard features serving 10,000+ users",
//       "Improved application performance by 40% through code optimization and lazy loading",
//       "Mentored 3 junior developers and conducted code reviews",
//       "Implemented comprehensive testing strategy achieving 85% code coverage",
//     ],
//     tech: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS"],
//   },
// ];

// const WorkExperience = () => {
//   return (
//     <motion.div
//       {...fadeInUp}
//       className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
//     >
//       <div className="rounded-xl p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
//         <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
//           Work Experience
//         </h3>

//         <div className="relative">
//           {/* Timeline vertical line */}
//           <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#32961C]"></div>

//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <div key={index} className="relative pl-10 md:pl-12">
//                 {/* Timeline dot */}
//                 <div className="absolute left-2.5 top-2 w-4 h-4 bg-[#32961C] rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

//                 {/* Header */}
//                 <div className="mb-3">
//                   <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
//                     {exp.role}
//                   </h4>
//                   <p className="text-[#32961C] font-semibold text-base">
//                     {exp.company}
//                   </p>
//                 </div>

//                 {/* Meta info */}
//                 <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
//                   <span className="flex items-center gap-1.5">
//                     <FaCalendarAlt className="text-[#32961C]" />
//                     {exp.period}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <FaMapMarkerAlt className="text-[#32961C]" />
//                     {exp.location}
//                   </span>
//                   <span className="flex items-center gap-1.5">
//                     <FaBriefcase className="text-[#32961C]" />
//                     {exp.type}
//                   </span>
//                 </div>

//                 {/* Achievements */}
//                 <ul className="space-y-1 mb-4">
//                   {exp.achievements.map((achievement, i) => (
//                     <li
//                       key={i}
//                       className="text-sm text-gray-700 dark:text-gray-300 flex gap-2"
//                     >
//                       <span className="text-base text-[#32961C] leading-5 flex-shrink-0">
//                         •
//                       </span>
//                       <span className="leading-5">{achievement}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Tech stack used */}
//                 <div className="flex flex-wrap gap-2">
//                   {exp.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs font-medium bg-[#32961C]/10 text-[#32961C] dark:bg-[#32961C]/20 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default WorkExperience;

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Personal Project",
    period: "Mar 5, 2026 - Apr 11, 2026",
    location: "Remote",
    type: "Self-Employed",
    achievements: [
      "Built an AI-powered resume platform (CVCoach) that helps users optimize resumes for ATS, improving their chances of getting shortlisted for jobs",
      "Developed AI-driven resume enhancement features using Google Gemini to generate professional summaries, skills, and experience content automatically",
      "Designed and implemented a full-stack resume builder with real-time preview, multiple ATS-friendly templates, and export options (PDF, DOCX, PNG)",
      "Integrated secure authentication and Stripe-based credit system enabling users to access premium AI features and personalized resume analysis",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

const WorkExperience = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="rounded-xl p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
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
