// "use client";

// import { motion } from "framer-motion";
// import { fadeInUp } from "@/utils/animation";
// import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

// const educationList = [
//   {
//     degree: "Bachelor of Science (BSc) Honours, Chemistry",
//     university: "National University of Bangladesh",
//     period: "2018 - 2021",
//     icon: <FaGraduationCap />,
//   },
//   {
//     degree: "Higher Secondary Certificate (HSC) - Science",
//     university: "Agricultural University College, Mymensingh",
//     period: "2016 - 2018",
//     icon: <FaGraduationCap />,
//   },
//   {
//     degree: "Secondary School Certificate (SSC) - Science",
//     university: "Narayan Khola High School, Nakla, Sherpur",
//     period: "2011 - 2016",
//     icon: <FaGraduationCap />,
//   },
// ];

// const coursesList = [
//   {
//     title: "Advanced TypeScript Patterns",
//     platform: "Pluralsight",
//     year: "2024",
//   },
//   {
//     title: "AI-Powered Development with OpenAI API",
//     platform: "Udemy",
//     year: "2024",
//   },
//   {
//     title: "Testing JavaScript with Jest & RTL",
//     platform: "Frontend Masters",
//     year: "2023",
//   },
//   {
//     title: "React - The Complete Guide",
//     platform: "Udemy (Maximilian Schwarzmüller)",
//     year: "2022",
//   },
// ];

// const CertificationsAndCourses = () => {
//   return (
//     <motion.div
//       {...fadeInUp}
//       className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Education Card */}
//         <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
//           <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
//             <FaGraduationCap className="text-[#32961C]" />
//             Education
//           </h3>

//           <div className="relative">
//             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#32961C]"></div>

//             <div className="space-y-6">
//               {educationList.map((edu, index) => (
//                 <div key={index} className="relative pl-10 md:pl-12">
//                   {/* Timeline dot */}
//                   <div className="absolute left-2.5 top-2 w-3 h-3 bg-[#32961C] rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

//                   {/* Content Card */}
//                   <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#32961C]/5 to-transparent">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className="text-[#32961C] text-lg">{edu.icon}</span>
//                       <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
//                         {edu.degree}
//                       </h4>
//                     </div>
//                     <p className="text-xs text-gray-700 dark:text-gray-300 ml-6">
//                       {edu.university}
//                     </p>
//                     <div className="flex items-center gap-1.5 mt-2 ml-6 text-xs text-gray-600 dark:text-gray-400">
//                       <FaCalendarAlt className="text-[#32961C]" />
//                       <span>{edu.period}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Recent Courses Card */}
//         <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
//           <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
//             <FaBookOpen className="text-[#32961C]" />
//             Major Courses
//           </h3>

//           <div className="space-y-4">
//             {coursesList.map((course, index) => (
//               <div
//                 key={index}
//                 className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#32961C]/5 to-transparent"
//               >
//                 <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
//                   {course.title}
//                 </h4>
//                 <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 flex items-center gap-1.5">
//                   <FaCalendarAlt className="text-[#32961C]" />
//                   {course.platform} • {course.year}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CertificationsAndCourses;

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const educationList = [
  {
    degree: "Bachelor of Science (BSc) Honours, Chemistry",
    university: "National University of Bangladesh",
    period: "2018 - 2021",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    university: "Agricultural University College, Mymensingh",
    period: "2016 - 2018",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    university: "Narayan Khola High School, Nakla, Sherpur",
    period: "2011 - 2016",
    icon: <FaGraduationCap />,
  },
];

const coursesList = [
  {
    title: "Full Stack Army - Advanced Frontend",
    platform: "Stack Learner (YouTube)",
    year: "2022 to 2023",
  },
  {
    title: "Full Stack Army - Advanced Backend",
    platform: "Stack Learner (YouTube)",
    year: "2023 to 2024",
  },
  // {
  //   title: "Testing JavaScript with Jest & RTL",
  //   platform: "Frontend Masters",
  //   year: "2023",
  // },
  // {
  //   title: "React - The Complete Guide",
  //   platform: "Udemy (Maximilian Schwarzmüller)",
  //   year: "2022",
  // },
];

const CertificationsAndCourses = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      {/* items-start added here - this is the key fix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Education Card - removed any h-full */}
        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <FaGraduationCap className="text-[#32961C]" />
            Education
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#32961C]"></div>

            <div className="space-y-6">
              {educationList.map((edu, index) => (
                <div key={index} className="relative pl-10 md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-4 h-4 bg-[#32961C] rounded-full border-4 border-white dark:border-gray-800 shadow-md"></div>

                  {/* Content Card */}
                  <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#32961C]/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#32961C] text-lg">{edu.icon}</span>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                        {edu.degree}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 ml-6">
                      {edu.university}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2 ml-6 text-xs text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt className="text-[#32961C]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Courses Card - removed any h-full */}
        <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <FaBookOpen className="text-[#32961C]" />
            Major Courses
          </h3>

          <div className="space-y-4">
            {coursesList.map((course, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#32961C]/5 to-transparent"
              >
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                  {course.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[#32961C]" />
                  {course.platform} • {course.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsAndCourses;
