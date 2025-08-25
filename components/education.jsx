"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import EducationItem from "./education-item";

const Education = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-5/12 rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]"
    >
      <h2 className="text-xl font-semibold mb-6">Education</h2>
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
