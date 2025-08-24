"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const Education = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-5/12 rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]"
    >
      <h2 className="text-xl font-semibold mb-6">Education</h2>
      <div>
        {/* Honors */}
        <div className="flex items-start mb-8">
          <span className="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div className="ml-4">
            <h3 className="font-medium">Honors, Department of Chemistry</h3>
            <p className="text-sm text-gray-400">2019 - 2023</p>
            <p className="text-sm text-gray-300">
              National University of Bangladesh
            </p>
          </div>
        </div>
        {/* College */}
        <div className="flex items-start mb-8">
          <span className="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div className="ml-4">
            <h3 className="font-medium">
              Higher Secondary Certificate (HSC) - Science
            </h3>
            <p className="text-sm text-gray-400">2016 - 2018</p>
            <p className="text-sm text-gray-300">
              Agricultural University College (KB College), Mymensingh
            </p>
          </div>
        </div>
        {/* School */}
        <div className="flex items-start">
          <span className="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div className="ml-4">
            <h3 className="font-medium">Secondary School Certificate (SSC)</h3>
            <p className="text-sm text-gray-400">2011 - 2016</p>
            <p className="text-sm text-gray-300">
              Narayan Khola High School, Nakla, Sherpur
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
