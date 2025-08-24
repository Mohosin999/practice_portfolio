"use client";

import { fadeInUp } from "@/utils/animation";
import ServiceComponent from "./service-component";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full bg-secondarycolor h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-14 flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold pb-4 lg:pb-6">
          My Services
        </h2>
        <div className="w-full gap-4 flex flex-col items-center justify-center">
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-center gap-4"
          >
            {/* ========================================================
           *                      Service 01
           ======================================================== */}
            <ServiceComponent
              src={"./img/serv01.png"}
              title={"Responsive Web Design"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
            {/* ========================================================
           *                      Service 02
           ======================================================== */}
            <ServiceComponent
              src={"./img/serv02.png"}
              title={"Web Application Development"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-center gap-4"
          >
            {/* ========================================================
            *                      Service 03
           ======================================================== */}
            <ServiceComponent
              src={"./img/serv03.png"}
              title={"SEO-Friendly NextJS Website"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />

            {/* ========================================================
            *                      Service 04
            ======================================================== */}
            <ServiceComponent
              src={"./img/serv04.png"}
              title={"Custom UI/UX Design"}
              params={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, magni ab quisquam incidunt excepturi dolor voluptas
                  quasi provident rerum. Labore, quas perferendis voluptas error
                  facilis voluptatum, asperiores quis maxime natus laboriosam.`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
