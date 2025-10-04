"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { projectsData } from "@/utils/projectData";

const ProjectComponent = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-10 flex items-center justify-center">
      <div className="w-full lg:w-[87%] h-full flex flex-col items-center justify-center gap-4 px-3 md:px-6 lg:px-0">
        {/* Heading */}
        <div className="w-full">
          <h3 className="font-bold text-center text-2xl lg:text-4xl mb-2">
            Works & Projects
          </h3>
        </div>

        {/* Projects Information */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projectsData.map((project) => (
            <div key={project.id}>
              <motion.div
                {...fadeInUp}
                className="group relative w-full bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] p-4 rounded-xl overflow-hidden"
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

                {/* Name */}
                <div className="w-full pt-3 flex flex-col justify-center">
                  <h3 className="font-bold text-xl pb-2">{project.name}</h3>
                </div>

                {/* Overlay */}
                <div
                  className="absolute bottom-0 left-0 w-full max-h-[80%] bg-white dark:bg-gray-800 rounded-t-xl text-gray-700 dark:text-gray-300 
               transform translate-y-full opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition-all duration-500 ease-in-out flex flex-col"
                >
                  {/* Scrollable Description */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <p className="text-sm lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Fixed Buttons */}
                  <div className="p-4 flex items-center gap-3 lg:gap-4">
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
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
