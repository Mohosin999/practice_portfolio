"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="col-span-5 lg:col-span-2 rounded-xl p-4 lg:p-6 bg-white dark:bg-[#101016] shadow-[0_0_7px_rgba(0,0,0,0.2)] order-2 lg:order-1"
    >
      <h3 className="text-xl font-semibold mb-6">Education</h3>
      <div>
        <EducationItem
          degree="Bachelor of Science (BSc) Honours, Chemistry"
          university="National University of Bangladesh"
          period="2018 - 2021"
        />

        <EducationItem
          degree="Higher Secondary Certificate (HSC) - Science"
          university="Agricultural University College, Mymensingh"
          period="2016 - 2018"
        />

        <EducationItem
          degree="Secondary School Certificate (SSC) - Science"
          university="Narayan Khola High School, Nakla, Sherpur"
          period="2011 - 2016"
        />
      </div>
    </motion.div>
  );
};

export default Education;
