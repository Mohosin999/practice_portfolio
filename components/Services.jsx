"use client";

import { fadeInUp } from "@/utils/animation";
import ServiceComponent from "./ServiceComponent";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full bg-secondarycolor h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-14 flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold pb-4 lg:pb-6">
          My Services
        </h2>
        <div className="w-full gap-5 flex flex-col items-center justify-center">
          {/* ========================================================
           *                      Service 01
           ======================================================== */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-center gap-5"
          >
            <ServiceComponent
              src={"./img/serv01.png"}
              title={"Responsive Web Design"}
              params={`I build fully responsive and visually engaging websites using TailwindCSS, Sass, Shadcn UI, and Framer Motion. I focus on modern design principles, smooth animations, and optimal user experience across all devices.`}
            />

            <ServiceComponent
              src={"./img/serv02.png"}
              title={"Web Development (React)"}
              params={`I develop professional web applications using ReactJS, integrating REST APIs and AI APIs seamlessly. I follow clean code and DRY principles, use Redux Toolkit and Easy-Peasy for efficient state management.`}
            />
          </motion.div>
          {/* ========================================================
            *                      Service 02
           ======================================================== */}
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-center gap-5"
          >
            <ServiceComponent
              src={"./img/serv03.png"}
              title={"SEO-Friendly Website (Next.js)"}
              params={`I build SEO-friendly and high-performance websites using Next.js, utilizing server-side rendering, API integration, and full-stack features. I also incorporate AI tools to enhance functionality and productivity.`}
            />

            <ServiceComponent
              src={"./img/serv04.png"}
              title={"Full-Stack Web Development"}
              params={`I create complete full-stack applications using React, Strapi or Next.js full-stack features, connecting frontends with backend APIs efficiently. I focus on scalability, clean architecture, and productivity using AI tools.`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
