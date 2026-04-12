"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInVisiable } from "@/utils/animation";
import { projectsData } from "@/app/projects/projectData";

const ProjectComponent = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-10">
      {/* Main container for content with side gaps - but image will break out */}
      <div className="w-full flex flex-col items-center justify-center gap-6">
        {/* Heading - constrained with side gaps */}
        <div className="w-full px-3 md:px-6 lg:px-[6.5%]">
          <h3 className="font-bold text-center text-2xl lg:text-3xl mb-2">
            Works & Projects
          </h3>
        </div>

        {/* -------------------------------------------------
         *         Featured Project (First Project)
         *         Image is full width, content has side gaps
        -------------------------------------------------- */}
        <div className="w-full px-3 md:px-6 lg:px-[6.5%]">
          {projectsData.length > 0 && (
            <div className="w-full bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden">
              {/* Full width image - no gaps with badge */}
              <div className="relative w-full md:h-[235px] xl:h-[300px] overflow-hidden group">
                <Link href={projectsData[0].liveUrl} target="_blank">
                  <img
                    src={projectsData[0].image}
                    alt={projectsData[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {/* Featured Badge - Top Left Corner */}
                <div className="absolute top-0 left-0 md:top-3 md:left-3 z-10">
                  <div className="flex items-center gap-1 bg-amber-600 text-white px-3 py-1.5 rounded-md shadow-lg">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-xs md:text-sm font-semibold">
                      Featured Project
                    </span>
                  </div>
                </div>
              </div>

              {/* Content with side gaps */}
              <div className="p-6 lg:p-8 flex flex-col gap-2 md:gap-4 px-3 md:px-6">
                {/* Title and Technologies */}
                <div className="flex items-center gap-3 md:gap-3">
                  <h3 className="font-bold text-xl lg:text-2xl mb-3">
                    {projectsData[0].name}
                  </h3>
                  {/* Technology Logos - Overlapping Circles */}
                  {projectsData[0].technologies &&
                    projectsData[0].technologies.length > 0 && (
                      <div className="flex items-center">
                        {projectsData[0].technologies
                          .slice(0, 3)
                          .map((tech, idx) => (
                            <div
                              key={idx}
                              className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-white dark:bg-gray-700 shadow-md border-2 border-gray-200 dark:border-gray-600 overflow-hidden"
                              style={{
                                marginLeft: idx !== 0 ? "-8px" : "0",
                                zIndex: 3 - idx,
                              }}
                            >
                              <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-full h-full object-cover p-1"
                              />
                            </div>
                          ))}
                      </div>
                    )}
                </div>

                {/* Description */}
                <p className="text text-sm lg:text-base">
                  {projectsData[0].description}
                </p>

                {/* Buttons - Updated to match other projects */}
                <div className="flex flex-wrap items-center gap-3 pt-6 mt-auto">
                  <Link
                    href={projectsData[0].liveUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm lg:text-base"
                  >
                    Live Link
                  </Link>
                  <Link
                    href={projectsData[0].sourceUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm lg:text-base"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* -------------------------------------------------
         *         Remaining Projects (Grid 2 columns)
         *         Each card's image is full width inside card
        -------------------------------------------------- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-3 md:px-6 lg:px-[6.5%]">
          {projectsData.slice(1).map((project, index) => (
            <motion.div
              key={index}
              {...fadeInVisiable}
              className="bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden flex flex-col"
            >
              {/* Full width image inside card */}
              <div className="w-full overflow-hidden group">
                <Link href={project.liveUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Content with padding */}
              <div className="p-6 lg:p-8 flex flex-col gap-2 md:gap-3">
                {/* Title and Technologies */}
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                  {/* Technology Logos - Overlapping Circles */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex items-center">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <div
                          key={idx}
                          className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-white dark:bg-gray-700 shadow-md border-2 border-gray-200 dark:border-gray-600 overflow-hidden"
                          style={{
                            marginLeft: idx !== 0 ? "-8px" : "0",
                            zIndex: 3 - idx,
                          }}
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-cover p-1"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description (shortened) */}
                <p className="text text-sm">{project.description}</p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-6 mt-auto">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm lg:text-base"
                  >
                    Live Link
                  </Link>
                  <Link
                    href={project.sourceUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm lg:text-base"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
