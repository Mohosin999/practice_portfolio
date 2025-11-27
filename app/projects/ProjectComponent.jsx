// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { fadeInVisiable } from "@/utils/animation";
// import { projectsData } from "@/app/projects/projectData";

// const ProjectComponent = () => {
//   return (
//     <div className="w-full h-full pt-6 lg:pt-10 flex items-center justify-center">
//       <div className="w-full lg:w-[87%] h-full flex flex-col items-center justify-center gap-4 px-3 md:px-6 lg:px-0">
//         {/* Heading */}
//         <div className="w-full">
//           <h3 className="font-bold text-center text-2xl lg:text-3xl mb-2">
//             Works & Projects
//           </h3>
//         </div>

//         {/* Projects Information */}
//         <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
//           {projectsData.map((project, index) => (
//             <div key={index}>
//               <motion.div
//                 {...fadeInVisiable}
//                 className="group relative w-full bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] p-4 rounded-xl overflow-hidden"
//               >
//                 {/* Image */}
//                 <div className="w-full rounded-xl overflow-hidden">
//                   <Link href={project.liveUrl} target="_blank">
//                     <img
//                       src={project.image}
//                       alt={project.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </Link>
//                 </div>

//                 {/* Name */}
//                 <div className="w-full pt-3 flex flex-col justify-center">
//                   <h3 className="font-bold text-base lg:text-lg py-1">
//                     {project.name}
//                   </h3>
//                 </div>

//                 {/* Overlay */}
//                 <div
//                   className="absolute bottom-0 left-0 w-full max-h-[80%] bg-white dark:bg-gray-800 rounded-t-xl text-gray-700 dark:text-gray-300
//                transform translate-y-full opacity-0
//                group-hover:translate-y-0 group-hover:opacity-100
//                transition-all duration-500 ease-in-out flex flex-col"
//                 >
//                   {/* Scrollable Description */}
//                   <div className="flex-1 overflow-y-auto p-4">
//                     <p className="text-sm lg:text-base">
//                       {project.description}
//                     </p>
//                   </div>

//                   {/* Fixed Buttons */}
//                   <div className="p-4 flex items-center gap-3 lg:gap-4">
//                     <Link
//                       href={project.liveUrl}
//                       target="_blank"
//                       className="button_link"
//                     >
//                       Live Link
//                     </Link>
//                     <Link
//                       href={project.sourceUrl}
//                       target="_blank"
//                       className="button_link"
//                     >
//                       Source Code
//                     </Link>
//                     {project.caseStudyUrl && (
//                       <Link href={project.caseStudyUrl} className="button_link">
//                         Case Study
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectComponent;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInVisiable } from "@/utils/animation";
import { projectsData } from "@/app/projects/projectData";

const ProjectComponent = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-10 flex items-center justify-center">
      <div className="w-full lg:w-[87%] h-full flex flex-col items-center justify-center gap-6 px-3 md:px-6 lg:px-0">
        {/* Heading */}
        <div className="w-full">
          <h3 className="font-bold text-center text-2xl lg:text-3xl mb-2">
            Works & Projects
          </h3>
        </div>

        {/* -------------------------------------------------
         *         Featured Project (First Project)
        -------------------------------------------------- */}
        <div className="w-full">
          {projectsData.length > 0 && (
            <div
              className="w-full bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)]
              p-5 rounded-xl flex flex-col gap-4"
            >
              {/* Image */}
              <div className="w-full md:h-[235px] xl:h-[300px] rounded-xl overflow-hidden">
                <Link href={projectsData[0].liveUrl} target="_blank">
                  <img
                    src={projectsData[0].image}
                    alt={projectsData[0].name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl lg:text-2xl">
                {projectsData[0].name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                {projectsData[0].description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={projectsData[0].liveUrl}
                  target="_blank"
                  className="button_link"
                >
                  Live Link
                </Link>
                <Link
                  href={projectsData[0].sourceUrl}
                  target="_blank"
                  className="button_link"
                >
                  Source Code
                </Link>
                {projectsData[0].caseStudyUrl && (
                  <Link
                    href={projectsData[0].caseStudyUrl}
                    className="button_link"
                  >
                    Case Study
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* -------------------------------------------------
         *         Remaining Projects (Grid 2 columns)
        -------------------------------------------------- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.slice(1).map((project, index) => (
            <motion.div
              key={index}
              {...fadeInVisiable}
              className="bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] p-4 rounded-xl flex flex-col gap-3"
            >
              {/* Image */}
              <div className="w-full rounded-xl overflow-hidden">
                <Link href={project.liveUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg">{project.name}</h3>

              {/* Description (shortened) */}
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="button_link"
                >
                  Live Link
                </Link>
                <Link
                  href={project.sourceUrl}
                  target="_blank"
                  className="button_link"
                >
                  Source Code
                </Link>
                {project.caseStudyUrl && (
                  <Link href={project.caseStudyUrl} className="button_link">
                    Case Study
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
