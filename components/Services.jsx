"use client";

import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoCodeSlashOutline } from "react-icons/io5";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[87%] h-full pt-14 flex flex-col items-center justify-center gap-4 px-3 md:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold pb-4 lg:pb-6 flex items-center gap-2">
          My Services
        </h2>
        <div className="w-full gap-5 flex flex-col items-center justify-center">
          {/* ========================================================
           *                      Service 01
           ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-full">
            <ServiceComponent
              icon={<FaReact className="w-32 h-32 text-blue-500" />}
              title={"Web Development (React)"}
              params={`I develop professional web applications using ReactJS, integrating REST APIs and AI APIs seamlessly. I follow clean code and DRY principles, use Redux Toolkit and Easy-Peasy for efficient state management.`}
            />

            <ServiceComponent
              icon={
                <RiNextjsLine className="w-32 h-32 text-gray-700 dark:text-gray-200" />
              }
              title={"Web Development (Next.js)"}
              params={`I build SEO-friendly and high-performance websites using Next.js, utilizing server-side rendering, API integration, and full-stack features. I also incorporate AI tools to enhance functionality and productivity.`}
            />

            <ServiceComponent
              icon={
                <IoCodeSlashOutline className="w-32 h-32 text-orange-600" />
              }
              title={"Full-Stack Web Development"}
              params={`I create complete full-stack applications using React, Strapi or Next.js full-stack features, connecting frontends with backend APIs efficiently. I focus on scalability, clean architecture, and productivity using AI tools.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
